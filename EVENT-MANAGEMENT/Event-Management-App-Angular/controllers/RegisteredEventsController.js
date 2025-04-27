app.controller('RegisteredEventsController', function($scope, EventService) {
    $scope.registrations = EventService.getRegistrations();
});
