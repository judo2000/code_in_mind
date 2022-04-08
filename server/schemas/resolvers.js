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
    courses: async () => {
      const courses = await Course.find({});
      return courses;
    },
    singleCourse: async (parent, args, context) => {
      const course = await Course.findOne(
        { _id: context.courses.id },
        (err) => {
          console.log(err);
        }
      );
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
      //if (context.user) {
      const course = await Course.create(args);
      return course;
      //}
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
    // enrollments: async (parent, { input }, context) => {
    //   if (!context.user) {
    //     throw new AuthenticationError("Not logged in");
    //   }
    //   if (context.user) {
    //     const enrollment = await User.findOneAndUpdate({ enrollments: input });
    //     return enrollment;
    //   }
    // },
  },
  User: {
    createdCourses: async (root) => {
      return await Course.find({ creator: root._id });
    },
  },
  Course: {
    creator: async (root) => {
      return await User.findById(root.creator);
    },
  },
};
module.exports = resolvers;
