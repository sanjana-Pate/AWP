app.controller('HomeController', function($scope, EventService) {
    $scope.events = EventService.getEvents();
});
