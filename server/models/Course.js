const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  // courseID: {
  //   type: String,
  //   required: true,
  // },
  courseTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Course = model("Course", courseSchema);

module.exports = Course;
