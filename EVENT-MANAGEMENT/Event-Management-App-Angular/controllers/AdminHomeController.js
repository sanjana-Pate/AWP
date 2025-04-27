app.controller('AdminHomeController', function($scope, EventService, $location) {
  $scope.upcomingEvents = EventService.getUpcomingEvents();

  $scope.viewEvent = function(event) {
      EventService.setSelectedEvent(event);
      $location.path('/event-detail');
  };

  $scope.deleteEvent = function(index) {
      EventService.deleteUpcomingEvent(index);
      $scope.upcomingEvents = EventService.getUpcomingEvents(); // Refresh
  };

  $scope.closeEvent = function(index) {
      EventService.moveToPastEvents(index);
      $scope.upcomingEvents = EventService.getUpcomingEvents(); // Refresh
  };

  $scope.logout = function() {
      $location.path('/');
  };
});
