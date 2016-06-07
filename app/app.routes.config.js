(function () {
    'use strict';

    angular
        .module('app1')
        .config(function ($stateProvider) {

            $stateProvider
                .state('about', {
                    url: "/About",
                    template: "<h1> Hello from about Page</h1> <h3>{{timeNow |date:'MMM dd yyyy'}}</h3>",
                    // templateUrl:"./app/templates/about.html",
                    controller: function ($scope) {
                        $scope.timeNow = new Date();
                    },
                })
                .state('teachers', {
                    url: '/teachers',
                    templateUrl: './app/templates/teachers.template.html',
                    controller: 'teachersController',
                    controllerAs: 'studentsCtrl'
                })
                .state('items', {
                    url: "/items",
                    controller: 'itemsController',
                    templateUrl: 'app/templates/items-list.html'
                })
                .state('itemDetails', {
                    url: '/items/{Id}',
                    controller: 'itemDetailController',
                    templateUrl: 'app/templates/item-details.html'
                });
        })
        .config(function ($stateProvider) {

            $stateProvider
                .state('homePage', {
                    url: "/home",
                    template: "<h1> Helloo from home Page</h1>",
                });
        });
})();