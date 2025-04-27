app.controller('LoginController', function($scope, $location) {

    $scope.showUserLoginForm = false;
    $scope.showAdminLoginForm = false;
  
    // JSON data
    $scope.adminCredentials = {
      username: 'admin',
      password: 'admin123'
    };
  
    $scope.userCredentials = [
      { username: 'user1', password: 'user123' },
      { username: 'user2', password: 'user456' }
    ];
  
    $scope.user = {};
    $scope.admin = {};
  
    $scope.showUserLogin = function() {
      $scope.showUserLoginForm = true;
      $scope.showAdminLoginForm = false;
    };
  
    $scope.showAdminLogin = function() {
      $scope.showAdminLoginForm = true;
      $scope.showUserLoginForm = false;
    };
  
    $scope.cancelLogin = function() {
      $scope.showUserLoginForm = false;
      $scope.showAdminLoginForm = false;
    };
  
    $scope.loginAsAdmin = function() {
      if ($scope.admin.username === $scope.adminCredentials.username &&
          $scope.admin.password === $scope.adminCredentials.password) {
        // Correct admin login → go to admin-home
        $location.path('/admin-home');
      } else {
        // Wrong login → show alert and stay
        alert('Incorrect Admin Username or Password!');
        $location.path('/'); // Redirect again to login page (optional)
      }
    };
  
    $scope.loginAsUser = function() {
        // Load users from localStorage
        let savedUsers = JSON.parse(localStorage.getItem('users')) || [];
      
        // Combine static and saved users
        const allUsers = [...$scope.userCredentials, ...savedUsers];
      
        const found = allUsers.find(u =>
          u.username === $scope.user.username && u.password === $scope.user.password
        );
        
        if (found) {
          $location.path('/user-home');
        } else {
          alert('Incorrect User Username or Password!');
          $location.path('/');
        }
      };
      
  
  });
  