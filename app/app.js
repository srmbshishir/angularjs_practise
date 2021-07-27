var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "views/pages/demopage.html"
    })
    .when("/demo", {
        templateUrl : "views/pages/demopage.html",
        controller: 'demo'
    })
    .when("/demo2", {
        templateUrl : "views/pages/demo2.html",
          controller: 'demo2'
    })
    .when("/adduser", {
        templateUrl : "views/pages/adduser.html",
          controller: 'adduser'
    })
    .when("/products", {
        templateUrl : "views/pages/products.html",
        controller: 'products'
    })
    .when("/edit", {
        templateUrl : "views/pages/edit.html",
        controller: 'edit'
    })
    .when("/show", {
        templateUrl : "views/pages/show.html",
        controller: 'show'
    })
    .when("/delete", {
        templateUrl : "views/pages/delete.html",
        controller: 'delete'
    })
    .when("/buy", {
        templateUrl : "views/pages/buy.html",
        controller: 'buy'
    })
    .otherwise({
        redirectTo:"/"
    });
      //$locationProvider.html5Mode(true);
      //$locationProvider.hashPrefix('');
      //if(window.history && window.history.pushState){
      //$locationProvider.html5Mode(true);
  //}

}]);
