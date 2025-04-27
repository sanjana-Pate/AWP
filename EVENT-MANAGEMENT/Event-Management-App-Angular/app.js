var app = angular.module('eventApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
    })
    .when('/admin-home', {
        templateUrl: 'views/admin-home.html',
        controller: 'AdminHomeController'
    })
    .when('/log-out', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/add-event', {
        templateUrl: 'views/add-event.html',
        controller: 'AddEventController'
    })
    .when('/event-detail', {
        templateUrl: 'views/event-detail.html',
        controller: 'EventDetailController'
    })
    .when('/past-events', {
        templateUrl: 'views/past-events.html',
        controller: 'PastEventController'
    })
    .when('/user-home', {
        templateUrl: 'views/user-home.html',
        controller: 'UserHomeController'
    })
    .when('/registered-events', {
        templateUrl: 'views/registered-events.html',
        controller: 'RegisteredEventsController'
    })
    .when('/past-participation', {
        templateUrl: 'views/past-participation.html',
        controller: 'PastParticipationController'
    })
    .when('/register-event', { // singular 'event'
        templateUrl: 'views/register-event.html', // your form file name
        controller: 'RegisterEventController'
    })
    
    .otherwise({
        redirectTo: '/'
    });
});
