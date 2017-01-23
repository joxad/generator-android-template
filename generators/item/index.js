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
      message: 'In which package do you want to put this item?',
      store: true,
      default: this.packageName
    },{
      name: 'itemLayoutXml',
      message: 'What will be the name of the xml of one item ?( example : item_product, item_store, item_user )',
      store: true,
      default: this.itemLayoutXml
    },{
      name: 'itemVM',
      message: 'What will be the name of the VM of your item ?( example : ProductVM, StoreVM, UserVM,WhatDoYouWantVM )',
      store: true,
      default: this.itemVM
    }
  ];
    return this.prompt(prompts).then(props => {
      this.props.packageName = props.packageName;
      this.props.applicationId = props.applicationId;
      this.props.itemLayoutXml = props.itemLayoutXml;
      this.props.itemVM = props.itemVM;
    });
  },
  writing: function() {
    var fullPackage = this.props.applicationId;
    var fullPackageFolder = this.props.applicationId.split('.').join('/');

    var packageName = this.props.packageName;
    var packageNameFolder = this.props.packageName.split('.').join('/');

    var itemLayoutXml = this.props.itemLayoutXml.toLowerCase();
    var itemVM = this.props.itemVM;

    var itemBR = itemVM.charAt(0).toLowerCase() + itemVM.substring(1);

    
    this.fs.copyTpl(
      this.templatePath('TemplateBaseVM.java'),
      this.destinationPath('app/src/main/java/' + fullPackageFolder + "/" + packageNameFolder + '/' + itemVM + '.java'), {
        appPackage: fullPackage,
        packageName: packageName,
        itemVM: itemVM
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
