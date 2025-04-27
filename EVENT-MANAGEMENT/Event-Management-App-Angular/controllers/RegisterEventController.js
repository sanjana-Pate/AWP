app.controller('RegisterEventController', function($scope, EventService, $location) {
    $scope.selectedEvent = EventService.getSelectedEvent(); // Fetch selected event
    $scope.registration = {};

    $scope.submitRegistration = function() {
        if ($scope.registration.name && $scope.registration.email && $scope.registration.phone) {
            EventService.saveRegistration({
                event: $scope.selectedEvent,
                user: $scope.registration
            });
            alert('Registration Successful!');
            $location.path('/registered-events'); // Go to Registered Events page
        } else {
            alert('Please fill all fields.');
        }
    };
});
