'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'pascalprecht.translate',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.environment'
])
    .config(['$translateProvider', '$compileProvider', '$logProvider', 'environment',
        function ($translateProvider, $compileProvider, $logProvider, environment) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'languages/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('it_IT');
            //$translateProvider.preferredLanguage('en_US');

            if (environment.log_level === 'error') {
                $logProvider.debugEnabled(false);
                $compileProvider.debugInfoEnabled(false);
            }
            else {
                $logProvider.debugEnabled(true);
            }

        }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
