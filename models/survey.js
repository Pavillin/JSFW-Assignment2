const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  type: {
    type: String, required: true
  },
  questions: [{type: Schema.ObjectId, ref: 'Question'}],
  author: {type: String, required: true}
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
