var firstApp = angular.module('ronApp', []);
firstApp.controller('ronController', function($scope, ronService, $http){
  var baseUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
  $scope.test = 'Ron controller is working';
  $scope.getNewQuote = function(){
    $http.get(baseUrl).success(function(data){
      console.log(data[0]);
      $scope.quote = data[0];
    })
  }
  ronService.getQuote().then(function(response){
   $scope.quote = "Poke my face for a quote.";
   console.log("First load");
   // console.log(response.data[0]);
   // $scope.quote = response.data[0];
  })
});
