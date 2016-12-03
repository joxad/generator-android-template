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
     message: 'What are you calling your app?',
     store: true,
     default: this.appname,
     validate: function (input) {
       if (/^([a-zA-Z0-9_]*)$/.test(input)) {
         return true;
       }
       return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.appname;
     }
   },
     {
       name: 'package',
       message: 'What package will you be publishing the app under?',
       validate: function (input) {
         if (/^([a-z_]{1}[a-z0-9_]*(\.[a-z_]{1}[a-z0-9_]*)*)$/.test(input)) {
           return true;
         }
         return 'The package name you have provided is not a valid Java package name.';
       },
       default: 'in.boilerplate.sample',
       store: true
     }];

   return this.prompt(prompts).then(props => {
     this.props.appPackage = props.package;
     this.appName = props.name;
     this.appPackage = props.package;
     this.androidTargetSdkVersion = props.targetSdk;
     this.androidMinSdkVersion = props.minSdk;
   });
  }
});
