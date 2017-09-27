# generator-android-template [![NPM version][npm-image]][npm-url]
> Create a new app from scratch and add components to it

# Version : 1.0.1

This project was created in order to generate the different classes used by my other library (https://github.com/joxad/easydatabinding)  using yeoman generator :


In order to make databinding working, we need to create
- a xml layout with <layout> <data></data> ... </layout>
- a activity/fragment class
- a vm associated to this activity/fragment

The generator is here to help developers do it faster :)


## Installation

1. First, install [Yeoman](http://yeoman.io) and generator-android-template using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-android-template
```

Then generate your new project:

You will have to call the command line below IN THE ROOT of your project.

2. In your android project


project build.gradle :

```
repositories {
       maven { url "http://dl.bintray.com/joxad/maven" }    
   }
```

app build.gradle :

```
compile com.joxad.easydatabinding:lib:1.1.0
```


## How does it work

You will be ask a few questions in order to generate the needed classes :
- applicationId => in order to know where to place the generated code
- packageName => the package where you want to put the activity/fragment java classes
- layout name => it will generate the xml & activity/fragment & activityVM/fragmentVM  

## Generate an activity

```bash
yo android-template:activity
```

This will generate :

- Activity
- Activity layout
- Activity VM that will have your binding activity


## Generate an activity with recycler (v1)


```bash
yo android-template:activity-recycler
```

This will generate an activity with a recycler view using https://github.com/evant/binding-collection-adapter v1

- Activity
- Activity layout
- Activity VM that will have your binding activity
- BaseVM that will handle each item model of your recycler
- Item Layout for your recycler

In your build.gradle add :
```
compile 'me.tatarka.bindingcollectionadapter:bindingcollectionadapter:1.0.3'
compile 'me.tatarka.bindingcollectionadapter:bindingcollectionadapter-recyclerview:1.0.3'
```

## Generate an activity with recycler view (v2)


```bash
yo android-template:activity-recycler-v2
```
This will generate an activity with a recycler view using https://github.com/evant/binding-collection-adapter v2

- Activity
- Activity layout
- Activity VM that will have your binding activity
- BaseVM that will handle each item model of your recycler
- Item Layout for your recycler

## Generate an activity with bottom bar navigation


```bash
yo android-template:activity-bottom-nav
```

This will generate an activity with a coordinator layout and a bottom view navigation

- Activity
- Activity layout
- Activity VM that will have your binding activity
- Menu xml in the resources
- Menu color selector


## Generate a fragment


```bash
yo android-template:fragment
```

This will generate :

- Fragment
- Fragment layout
- Fragment VM that will have your binding fragment

## Generate a support fragment


```bash
yo android-template:fragment-support
```


This will generate :

- Fragment v4
- Fragment layout
- Fragment VM that will have your binding fragment


## Generate a support fragment with recycler view (v2)


```bash
yo android-template:fragment-support-recycler-v2
```
This will generate an fragment with a recycler view using https://github.com/evant/binding-collection-adapter v2

- Fragment
- Fragment layout
- Fragment VM that will have your binding fragment
- BaseVM that will handle each item model of your recycler
- Item Layout for your recycler


## Generate a bottomsheet dialog fragment

```bash
yo android-template:bottom-fragment
```

This will generate :

- Bottom Sheet Dialog Fragment
- Fragment layout
- Bottom Sheet Dialog Fragment VM that will have your binding fragment


## Generate an item

```bash
yo android-template:item
```

This will generate :

- BaseVM of your model
- Item layout associated with your vm

## Thanks

 Very useful lib used :

 https://github.com/evant/binding-collection-adapter/

 It handles the databinding inside the recyclerview => No adapter to write :)


## Getting To Know Yeoman

  * Yeoman has a heart of gold.
  * Yeoman is a person with feelings and opinions, but is very easy to work with.
  * Yeoman can be too opinionated at times but is easily convinced not to be.
  * Feel free to [learn more about Yeoman](http://yeoman.io/).


## License

MIT © [Jocelyn David](https://github.com/joxad/)


[npm-image]: https://badge.fury.io/js/generator-android-template.svg
[npm-url]: https://npmjs.org/package/generator-android-template
