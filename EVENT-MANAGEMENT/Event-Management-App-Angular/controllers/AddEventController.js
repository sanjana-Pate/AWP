app.controller('AddEventController', function($scope, EventService, $location) {
    $scope.event = {}; // Initialize the event object
    
    // Method to add a new event
    $scope.addEvent = function() {
      if ($scope.event.name && $scope.event.date && $scope.event.location && $scope.event.image && $scope.event.description) {
        EventService.addEvent($scope.event);
        $location.path('/admin-home'); // Redirect to admin home after adding event
      } else {
        alert("Please fill all the details.");
      }
    };
  });
  