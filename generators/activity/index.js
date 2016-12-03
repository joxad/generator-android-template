'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  initializing: function() {
    this.props = {};
  },
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the init ' + chalk.red('generator-android-template') + ' generator!'
    ));
    const prompts = [{
     name: 'name',
     message: 'What are you calling your activity?',
     store: true,
     default: this.activityName,
     validate: function (input) {
       if (/^([a-zA-Z0-9_]*)$/.test(input)) {
         return true;
       }
       return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.activityName;
     }
   }];
   return this.prompt(prompts).then(props => {
     this.props.activityName = props.activityName;
   });
  }
});
