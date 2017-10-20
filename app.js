var firstApp = angular.module('ronApp', []);
firstApp.controller('ronController', function($scope, ronService){

  $scope.test = 'Ron controller is working';
  $scope.getNewQuote = function(){
    ronService.getQuote().then(function(response){
      console.log(response.data[0]);
      $scope.quote = response.data[0];
    })
  }
  ronService.getQuote().then(function(response){
    console.log(response.data[0]);
    $scope.quote = response.data[0];
  })
});
