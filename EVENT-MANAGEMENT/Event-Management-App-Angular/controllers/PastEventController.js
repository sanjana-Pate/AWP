app.controller('PastEventController', function($scope, EventService, $location) {
    $scope.pastEvents = EventService.getPastEvents();

    $scope.viewEvent = function(event) {
        EventService.setSelectedEvent(event);
        $location.path('/event-detail');
    };

    $scope.backToHome = function() {
        $location.path('/admin-home');
    };
});
