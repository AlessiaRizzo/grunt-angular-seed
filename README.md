# Grunt-angular-seed

This project is an application skeleton for an [AngularJS](http://angularjs.org/) web app based
on [angular-seed](https://github.com/angular/angular-seed)

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools .

The seed also use [GruntJS](http://gruntjs.com//).
First of all you have to install Grunt ~0.4.1 with this command:

 ```
 npm install -g grunt-cli
 ```
 Grunt is used for running these tasks to build the application:
* load properties file for different environment;
* copy dependecies from bower_components to lib folder;

Refer to 'build application' section for details.

### Build application
Properties for local build are in app/environment/development.json. Build with local environment properties with:

```
grunt development
```

Properties for staging build are in flp/environment/development.json. Build with staging environment properties with:

```
grunt staging
```

Properties for production build are in flp/environment/development.json. Build with production environment properties with:

```
grunt production
```

Each of these task above, also copy dependecies in lib folder.

## Getting Started

To get you started you can clone the repository and install the dependencies.

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

Bower requires Node, npm and Git.
We have preconfigured `npm` to automatically run `bower` so we can simply do:

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

Now browse to the app at `http://localhost:8000/flp`.

### Run stubs

The project is preconfigured with two simple stubs, one for REST requests and one for websocket communication.
Start http server with:

```
node stubs/rest_server.js
```

It starts the server at `http://localhost:3000`.

Start websocket server with:

```
node stubs/ws_server.js
```

It starts the server at `http://localhost:9000`.


## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Testing

There are two kinds of tests in the application: Unit tests and End to End tests.

### Running Unit Tests

Unit tests are written in Jasmine, which we run with the Karma Test Runner. We provide a Karma configuration file to run them.

the configuration is found at test/karma.conf.js
the unit tests are found in test/unit/.
The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and watch the source and test files for changes and then re-run the tests whenever any of them change.

 You can also ask Karma to do a single run of the tests and then exit. The project contains a predefined script to do this:

```
npm run test-single-run
```

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the package.json file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the bower.json file.