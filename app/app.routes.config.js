(function () {
    'use strict';

    angular
        .module('app1')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/login");

            $stateProvider
                .state('stateName',{
                    abstract:true,
                    views:{
                        'ui-viewName@stateName':{
                            template:"",
                            templateUrl:"",
                            controller:""
                        }
                    }   
                })
                .state('navbar-layout', {
                    abstract: true,
                    views: {
                        '': {
                            templateUrl: 'app/layout/navbar-layout.html',
                        },
                        'footerView@navbar-layout': {
                            templateUrl: "app/layout/footer.html",
                        }
                    }
                })
                .state('leftpanel', {
                    templateUrl: 'app/layout/left-panel-layout.html',
                    abstract: true,
                })
                .state('login', {
                    url: '/login',
                    parent: "leftpanel",
                    templateUrl: './app/templates/login.html',          
                              
                    // controller
                })
                .state('about', {
                    url: "/about", //    //about
                    parent: 'navbar-layout',
                    // templateUrl:"./app/templates/about.html",
                    controller: function ($scope) {
                        $scope.timeNow = new Date();
                    },
                    views: {
                        '': {
                            template: "<h1> Hello from about Page</h1> <h3>{{timeNow |date:'MMM dd yyyy'}}</h3>",
                        },
                        'footerView@navbar-layout': {
                            template: "",
                        }
                    }
                })
                .state('teachers', {
                    url: '/teachers',
                    parent: 'navbar-layout',
                    templateUrl: './app/templates/teachers.template.html',
                    controller: 'teachersController',
                    controllerAs: 'studentsCtrl',
                })
                .state('items', {
                    parent: 'leftpanel',
                    url: "/items",
                    controller: 'itemsController',
                    templateUrl: 'app/templates/items-list.html'
                })
                .state('items.details', {
                    url: '/{Id}', // stateParam Id
                    views: {
                        'slotName@ParentName': {
                            controller: 'itemDetailController',
                            templateUrl: 'app/templates/item-details.html'
                        },
                        '@leftpanel': {
                            controller: 'itemDetailController',
                            templateUrl: 'app/templates/item-details.html'
                        }
                    }
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