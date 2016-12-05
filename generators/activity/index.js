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
      name: 'packageName',
      message: 'In which package do you want to put this activity?',
      store: true,
      default: this.packageName,
      validate: function(input) {
        if (/^([a-zA-Z0-9_]*)$/.test(input)) {
          return true;
        }
        return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.appname;
      }
    }, {
      name: 'activityXml',
      message: 'What are you calling your activity xml (example : activity_home)? DONT WRITE .xml',
      store: true,
      default: this.activityXml,
      validate: function(input) {
        if (/^([a-zA-Z0-9_]*)$/.test(input)) {
          return true;
        }
        return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.activityXml;
      }
    }];
    return this.prompt(prompts).then(props => {
      this.props.activityXml = props.activityXml;
      this.props.packageName = props.packageName;
    });
  },
  writing: function() {
    var fullPackage = "com.oxylane.decathlon.proto";
    var xmlSplit = this.props.activityXml.toLowerCase().split("_");
    var packageName = this.props.packageName;
    var activityXml = this.props.activityXml.toLowerCase();
    for (var i = 0; i < xmlSplit.length; i++) {
      xmlSplit[i] = xmlSplit[i].charAt(0).toUpperCase() + xmlSplit[i].substring(1);
    }
    var activityName = xmlSplit.join('');

    this.fs.copyTpl(
      this.templatePath('TemplateActivity.java'),
      this.destinationPath('app/src/main/java/'+fullPackage + "/" + packageName + '/' + activityName+'.java'), {
        appPackage: fullPackage,
        activityName: activityName
      }
    );

    this.fs.copyTpl(
      this.templatePath('TemplateActivityVM.java'),
      this.destinationPath('app/src/main/java/'+fullPackage + "/" + packageName + '/' + activityName+'VM.java'), {
        appPackage: fullPackage,
        activityName: activityName
      }
    );
    this.fs.copyTpl(
      this.templatePath('template_activity.xml'),
      this.destinationPath('app/src/main/res/layout/'+activityXml + '.xml'), {
        appPackage: fullPackage,
        activityName: activityName
      }
    );
  }
});
