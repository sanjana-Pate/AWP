app.controller('RegisterController', function($scope, $location) {

    $scope.newUser = {};
  
    // Simulate registering user (saving into localStorage)
    $scope.registerUser = function() {
      if ($scope.newUser.name && $scope.newUser.username && $scope.newUser.password) {
        
        // Check if already stored users
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Add new user
        users.push({
          name: $scope.newUser.name,
          username: $scope.newUser.username,
          password: $scope.newUser.password
        });
  
        // Save back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
  
        alert('Registration successful! Please login.');
        $location.path('/');
      } else {
        alert('Please fill all fields!');
      }
    };
  
    $scope.cancelRegister = function() {
      $location.path('/');
    };
  
  });
  