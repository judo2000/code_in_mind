const { User, Course } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      const users = await User.find({});
      return users;
    },
    user: async (parent, { id }) => {
      return User.findOne({ id });
    },
    courses: async () => {
      const courses = await Course.find({});
      return courses;
    },
    course: async (parent, { _id }) => {
      let course = await Course.findById(_id);
      console.log(course);
      return course;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addCourse: async (parent, args) => {
      if (context.user) {
        const course = await Course.create(args);
        return course;
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    enrollInCourse: async (parent, { courseId }, context) => {
      if (context.user) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { enrolledCourseIds: courseId } }
          );
          return user;
        } catch (error) {
          console.log(error);
          return error;
        }
      }

      ///throw new AuthenticationError("Not logged in");
    },
  },
  User: {
    createdCourses: async (root) => {
      return await Course.find({ creator: root._id });
    },
    enrolledCourses: async (root) => {
      return await Course.find({ _id: { $in: root.enrolledCourseIds } });
    },
  },
  Course: {
    creator: async (root) => {
      return await User.findById(root.creator);
    },
  },
};
module.exports = resolvers;
