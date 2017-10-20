angular.module('ronApp').service('ronService', function($http){
  var baseUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

  this.getQuote = function()
  {
    return $http({
      method: 'GET',
      url: baseUrl
    })
  }
})
