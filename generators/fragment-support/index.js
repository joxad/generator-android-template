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
      name: 'applicationId',
      message: 'What is the applicationId of your app?',
      store: true,
      default: this.applicationId
    },{
      name: 'packageName',
      message: 'In which package do you want to put this fragment?',
      store: true,
      default: this.packageName
    }, {
      name: 'layoutXml',
      message: 'What are you calling your fragment xml (example : fragment_home)? DONT WRITE .xml',
      store: true,
      default: this.layoutXml,
      validate: function(input) {
        if (/^([a-zA-Z0-9_]*)$/.test(input)) {
          return true;
        }
        return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.layoutXml;
      }
    }];
    return this.prompt(prompts).then(props => {
      this.props.layoutXml = props.layoutXml;
      this.props.packageName = props.packageName;
      this.props.applicationId = props.applicationId;
    });
  },
  writing: function() {
    var fullPackage = this.props.applicationId;
    var fullPackageFolder = this.props.applicationId.split('.').join('/');
    var xmlSplit = this.props.layoutXml.toLowerCase().split("_");
    var packageName = this.props.packageName;
    var packageNameFolder = this.props.packageName.split('.').join('/');

    var layoutXml = this.props.layoutXml.toLowerCase();
    for (var i = 0; i < xmlSplit.length; i++) {
      xmlSplit[i] = xmlSplit[i].charAt(0).toUpperCase() + xmlSplit[i].substring(1);
    }
    var name = xmlSplit.join('');
    var BR = name.charAt(0).toLowerCase()+ name.substring(1);
    this.fs.copyTpl(
      this.templatePath('TemplateFragment.java'),
      this.destinationPath('app/src/main/java/'+fullPackageFolder + "/" + packageNameFolder + '/' + name+'.java'), {
        appPackage: fullPackage,
        packageName : packageName,
        name: name,
        layoutName : layoutXml,
        BR : BR
      }
    );

    this.fs.copyTpl(
      this.templatePath('TemplateFragmentVM.java'),
      this.destinationPath('app/src/main/java/'+fullPackageFolder + "/" + packageNameFolder + '/' + name+'VM.java'), {
        appPackage: fullPackage,
        packageName : packageName,
        name: name
      }
    );
    this.fs.copyTpl(
      this.templatePath('template_fragment.xml'),
      this.destinationPath('app/src/main/res/layout/'+layoutXml + '.xml'), {
        appPackage: fullPackage,
        packageName: packageName,
        name: name,
        BR : BR
      }
    );
  }
});
