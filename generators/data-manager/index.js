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
      'Welcome to the data-manager ' + chalk.red('generator-android-template') + ' generator! This will create a manager of the data you need to handle. It will create pojo,realm, retrofit stuff you will need :) '
    ));
    const prompts = [{
      name: 'applicationId',
      message: 'What is the applicationId of your app?',
      store: true,
      default: this.applicationId
    },{
      name: 'packageName',
      message: 'In which package do you want to put the manager and all the data?',
      store: true,
      default: this.packageName
    }, {
      name: 'dataClass',
      message: 'What is the pojo  you want to manage?',
      store: true,
      default: this.dataClass,
      validate: function(input) {
        if (/^([a-zA-Z0-9_]*)$/.test(input)) {
          return true;
        }
        return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.layoutXml;
      }
    }];
    return this.prompt(prompts).then(props => {
      this.props.applicationId = props.applicationId;
      this.props.packageName = props.packageName;
      this.props.dataClass = props.dataClass;
    });
  },
  writing: function() {
    var fullPackage = this.props.applicationId;
    var fullPackageFolder = this.props.applicationId.split('.').join('/');
    var dataClass = this.props.dataClass;
    var packageName = this.props.packageName;
    var packageNameFolder = this.props.packageName.split('.').join('/');

    this.fs.copyTpl(
      this.templatePath('TemplateManager.java'),
      this.destinationPath('src/main/java/'+fullPackageFolder + "/" + packageNameFolder + '/' + dataClass+'Manager.java'), {
        appPackage: fullPackage,
        packageName : packageName,
        dataClass : dataClass
      }
    );

    this.fs.copyTpl(
      this.templatePath('TemplateEndpoint.java'),
      this.destinationPath('src/main/java/'+fullPackageFolder + "/" + packageNameFolder + '/endpoint/' + dataClass+'Endpoint.java'), {
        appPackage: fullPackage,
        packageName : packageName,
        dataClass : dataClass
      }
    );

    this.fs.copyTpl(
      this.templatePath('TemplatePojo.java'),
      this.destinationPath('src/main/java/'+fullPackageFolder + "/" + packageNameFolder + '/pojo/' + dataClass+'.java'), {
        appPackage: fullPackage,
        packageName : packageName,
        dataClass : dataClass
      }
    );

    this.fs.copyTpl(
      this.templatePath('TemplatePojoDTO.java'),
      this.destinationPath('src/main/java/'+fullPackageFolder + "/" + packageNameFolder + '/db/' + dataClass+'DTO.java'), {
        appPackage: fullPackage,
        packageName : packageName,
        dataClass : dataClass
      }
    );
  }
});
