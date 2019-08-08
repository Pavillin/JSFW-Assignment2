const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  options: {type: [String], required: true}
});

const Questions = mongoose.model('Questions', surveySchema);

module.exports = Questions;
