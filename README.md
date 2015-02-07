# Grunt-angular-seed

This project is an application skeleton for an [AngularJS](http://angularjs.org/) web app based
on [angular-seed](https://github.com/angular/angular-seed)

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools and also uses [GruntJS](http://gruntjs.com//)
to:
* load properties file for different environment;
* copy dependecies from bower_components to lib folder;

Refer to 'build application' section for details.

## Getting Started

To get you started you can clone the repository and install the dependencies.

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

Bower requires Node, npm and Git.
`npm` is preconfigured to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

The project is preconfigured with a simple development web server. It is a node.js
tool called [http-server][http-server]. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app`.
