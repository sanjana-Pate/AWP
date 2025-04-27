app.controller('UserHomeController', function($scope, EventService, $location) {
    $scope.upcomingEvents = EventService.getUpcomingEvents();

    // Register button clicked
    $scope.registerEvent = function(event) {
        EventService.setSelectedEvent(event); // Save selected event globally
        $location.path('/register-event'); // Redirect to registration form page
    };

    $scope.viewEvent = function(event) {
        EventService.setSelectedEvent(event);
        $location.path('/event-detail');
    };
});
