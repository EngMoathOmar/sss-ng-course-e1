(function () {
    'use strict';

    angular.module('app1')
        .config(function ($stateProvider) {

            $stateProvider
                .state('about', {
                    url: "/About/is/my/best/page",
                    template: "<h1> Heeloo from about </h1> <h3>{{timeNow |date:'MMM dd yyyy'}}</h3>",
                    // templateUrl:"./app/templates/about.html",
                    controller: function ($scope) {
                        $scope.timeNow = new Date();
                    },
                })
                .state('teachers', {
                    url: '/teachers',
                    templateUrl: './app/templates/teachers.template.html',
                    controller: 'studentsController',
                    controllerAs: 'studentsCtrl'
                })
                .state('items', {
                    url: "/items",
                    controller: 'itemsController',
                    templateUrl: 'app/templates/items-list.html'
                })
                .state('itemDetails', {
                    url: '/items/{id}',
                    controller: 'itemDetailController',
                    templateUrl: 'app/templates/item-details.html'
                });
        })
        .config(function ($stateProvider) {

            $stateProvider
                .state('homePage', {
                    url: "/home",
                    template: "<h1> Heeloo from home </h1>",
                    // templateUrl:"./app/templates/about.html",
                    controller: function ($scope) {
                        $scope.timeNow = new Date();
                    }
                });
        });
})();