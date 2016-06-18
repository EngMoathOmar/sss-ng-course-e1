## Angular $http 

$http is an angular service that used to do ajax communication with server/backend. or any api endpoint. 

Any ajax request has the following HTTP request properties  : 
  Request Method : "GET;POST;PUT;DELETE" 
  Request Url : "http://www.example.com/?param1=value"
  Request Headers : 
    content-type: ==>the mime type you are sending to that url, e.g:  image/jpeg, application/json , text/html
    Accept :==> the return data mime type you are waitning for from the api, e.g:  image/jpeg, application/json , text/html
    and other header data .

  in post & put we have a payload data: 
  POST api.example.com/registration
  payload -data-  : {
    "username":"someone",
    "password":"mypassword"
  }

  after the request get handled by the server , server will send the response usally according to the accept header, 
  now the response also has some headers like content type , set cookies , accept and so on . and has the payload data
  that we have requested like the image data, or the students... etc. 

  ###General usage
The $http service is a function which takes a single argument — a configuration object — that is used to generate an HTTP request and returns a promise.

// Simple GET request example:


    $http({
      method: 'GET',
      url: '/someUrl'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    
###The response object has these properties:

    data – {string|Object} – The response body transformed with the transform functions.
    status – {number} – HTTP status code of the response.
    headers – {function([headerName])} – Header getter function.
    config – {Object} – The configuration object that was used to generate the request.
    statusText – {string} – HTTP status text of the response.
A response status code between 200 and 299 is considered a success status and will result in the success callback being called. Any response status code outside of that range is considered an error status and will result in the error callback being called. Also, status codes less than -1 are normalized to zero. -1 usually means the request was aborted, e.g. using a config.timeout. Note that if the response is a redirect, XMLHttpRequest will transparently follow it, meaning that the outcome (success or error) will be determined by the final response status code.

Shortcut methods
Shortcut methods are also available. All shortcut methods require passing in the URL, and request data must be passed in for POST/PUT requests. An optional config can be passed as the last argument.

    $http.get('/someUrl', config).then(successCallback, errorCallback);
    $http.post('/someUrl', data, config).then(successCallback, errorCallback);
Complete list of shortcut methods: 

  + $http.get
  + $http.head
  + $http.post
  + $http.put
  + $http.delete
  + $http.jsonp
  + $http.patch



#example usage : 

>javascript 

    angular.module('someApp').controller(function($scope,$http){

      $scope.getDataFromBackEnd = function(){
          var apiUrl = "http://api.themoviedb.org/3/discover/movie"
          $http
            .get(apiUrl)
            .then(function(response){
              var responseData = response.data;
              $scope.resultPagesCount = responseData.pages;
              $scope.moviesList = responseData.result;
          });
      }
    });
>html 
    &lt;h1> movies &lt;/h1>
    &ltdiv ng-repeat="movie in moviesList">
        &lt;h4> {{movie.original_title}} &lth4>
        &lt;img src="https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"/>
        &lt;p> {{movie.overview}} &ltp>
    &lt/div>

for more information visit https://docs.angularjs.org/api/ng/service/$http