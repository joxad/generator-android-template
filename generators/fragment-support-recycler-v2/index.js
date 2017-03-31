'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;

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
    }, {
      name: 'packageName',
      message: 'In which package do you want to put this activity?',
      store: true,
      default: this.packageName
    }, {
      name: 'layoutXml',
      message: 'How are you calling your fragment xml (example : fragment_home)? DONT WRITE .xml',
      store: true,
      default: this.layoutXml,
      validate: function(input) {
        if (/^([a-zA-Z0-9_]*)$/.test(input)) {
          return true;
        }
        return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.layoutXml;
      }
    }, {
      name: 'itemLayoutXml',
      message: 'What will be the name of the xml of one item ?( example : item_product, item_store, item_user )',
      store: true,
      default: this.itemLayoutXml
    }, {
      name: 'itemVM',
      message: 'What will be the name of the VM of your item ?( example : ProductVM, StoreVM, UserVM,WhatDoYouWantVM )',
      store: true,
      default: this.itemVM
    }];
    return this.prompt(prompts).then(props => {
      this.props.layoutXml = props.layoutXml;
      this.props.packageName = props.packageName;
      this.props.applicationId = props.applicationId;
      this.props.itemLayoutXml = props.itemLayoutXml;
      this.props.itemVM = props.itemVM;
    });
  },
  writing: function() {
    var fullPackage = this.props.applicationId;
    var fullPackageFolder = this.props.applicationId.split('.').join('/');

    var xmlSplit = this.props.layoutXml.toLowerCase().split("_");
    var packageName = this.props.packageName;
    var packageNameFolder = this.props.packageName.split('.').join('/');

    var layoutXml = this.props.layoutXml.toLowerCase();
    var itemLayoutXml = this.props.itemLayoutXml.toLowerCase();
    var itemVM = this.props.itemVM;

    for (var i = 0; i < xmlSplit.length; i++) {
      xmlSplit[i] = xmlSplit[i].charAt(0).toUpperCase() + xmlSplit[i].substring(1);
    }

    var name = xmlSplit.join('');
    var BR = name.charAt(0).toLowerCase() + name.substring(1);
    var itemBR = itemVM.charAt(0).toLowerCase() + itemVM.substring(1);

    //TODO test itemVM, itemLayoutXml, itemBR
    this.fs.copyTpl(
      this.templatePath('TemplateFragment.java'),
      this.destinationPath('app/src/main/java/' + fullPackageFolder + "/" + packageNameFolder + '/' + name + '.java'), {
        appPackage: fullPackage,
        packageName: packageName,
        name: name,
        layoutName: layoutXml,
        BR: BR
      }
    );

    this.fs.copyTpl(
      this.templatePath('TemplateFragmentVM.java'),
      this.destinationPath('app/src/main/java/' + fullPackageFolder + "/" + packageNameFolder + '/' + name + 'VM.java'), {
        appPackage: fullPackage,
        packageName: packageName,
        name: name,
        itemVM: itemVM,
        itemBR: itemBR,
        itemLayoutXml: itemLayoutXml
      }
    );
    this.fs.copyTpl(
      this.templatePath('TemplateBaseVM.java'),
      this.destinationPath('app/src/main/java/' + fullPackageFolder + "/" + packageNameFolder + '/' + itemVM + '.java'), {
        appPackage: fullPackage,
        packageName: packageName,
        itemVM: itemVM
      }
    );
    this.fs.copyTpl(
      this.templatePath('template_recycler_fragment.xml'),
      this.destinationPath('app/src/main/res/layout/' + layoutXml + '.xml'), {
        appPackage: fullPackage,
        packageName: packageName,
        name: name,
        BR: BR
      }
    );
    this.fs.copyTpl(
      this.templatePath('template_item.xml'),
      this.destinationPath('app/src/main/res/layout/' + itemLayoutXml + '.xml'), {
        appPackage: fullPackage,
        packageName: packageName,
        itemName: itemVM,
        itemBR: itemBR
      }
    );
  }
});
