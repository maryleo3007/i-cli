var loadQuestions = () => {
    var questions = require('./questions');
    return questions;
};

var loadConfig = () =>{
  var config=require('./config')
  return config;
};

module.exports = {
    questions : loadQuestions,
    loadConfig: loadConfig
};
