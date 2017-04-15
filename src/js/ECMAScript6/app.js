angular.module('monterailApp', ['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/main.html',
                controller: 'MainCtrl as ctrl'
            })
            .when('/single/:ID', {
                templateUrl: 'pages/single.html',
                controller: 'SingleCtrl as ctrl'
            })
            .otherwise({redirectTo: '/'});
    }]);