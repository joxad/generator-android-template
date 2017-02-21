# generator-android-template [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Create a new app from scratch and add components to it


# Version : 0.9.5

This project was created in order to generate the different classes used by my other library (https://github.com/joxad/easydatabinding)  using yeoman generator :


In order to make databinding working, we need to create
- a xml layout with <layout> <data></data> ... </layout>
- a activity/fragment class
- a vm associated to this activity/fragment

The generator is here to help developers do it faster :)



## Installation

First, install [Yeoman](http://yeoman.io) and generator-android-template using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-android-template
```

Then generate your new project:

You will have to call the command line below IN THE ROOT of your project.

## How does it work

You will be ask a few questions in order to generate the needed classes :
- applicationId => in order to know where to place the generated code
- packageName => the package where you want to put the activty/fragment java classes
- layout name => it will generate the xml & activity/fragment & activityVM/fragmentVM  

## Generate an activity


```bash
yo android-template:activity
```


## Generate an activity with recycler


```bash
yo android-template:activity-recycler
```

## Generate a fragment


```bash
yo android-template:fragment
```

## Generate a support fragment


```bash
yo android-template:fragment-support
```


## Generate a bottomsheet dialog fragment


```bash
yo android-template:bottom-fragment
```

## Generate an item


```bash
yo android-template:item
```


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Jocelyn David](https://github.com/joxad/)


[npm-image]: https://badge.fury.io/js/generator-android-template.svg
[npm-url]: https://npmjs.org/package/generator-android-template
[travis-image]: https://travis-ci.org/joxad/generator-android-template.svg?branch=master
[travis-url]: https://travis-ci.org/joxad/generator-android-template
[daviddm-image]: https://david-dm.org/joxad/generator-android-template.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/joxad/generator-android-template
[coveralls-image]: https://coveralls.io/repos/joxad/generator-android-template/badge.svg
[coveralls-url]: https://coveralls.io/r/joxad/generator-android-template
