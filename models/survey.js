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
    type: String
  },
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
