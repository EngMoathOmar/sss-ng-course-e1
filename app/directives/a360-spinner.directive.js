(function () {
    'use strict';

    angular
        .module('app1')
        .directive('a360Spinner', a360Spinner);

    a360Spinner.$inject = [];
    function a360Spinner() {
        // Usage: <a360-spinner></a360-spinner>
        //
        // Creates:
        //
        var directive = {
            template: [
                '<h1 class="text-center center" > {{vm.loadingMsg || msgExp || loadingMsg||"loading ...."}} </h1>',
                ' <input type="text" ng-model="msgExp">',
                '<div class="spinner-wrapper">',
                '<div class="sk-cube-grid">',
                '<div class="sk-cube sk-cube1"></div>',
                '<div class="sk-cube sk-cube2"></div>',
                '<div class="sk-cube sk-cube3"></div>',
                '<div class="sk-cube sk-cube4"></div>',
                '<div class="sk-cube sk-cube5"></div>',
                '<div class="sk-cube sk-cube6"></div>',
                '<div class="sk-cube sk-cube7"></div>',
                '<div class="sk-cube sk-cube8"></div>',
                '<div class="sk-cube sk-cube9"></div>',
                '</div>',
                '</div>',
            ].join(''),
            scope: {
                loadingMsg: '@',
                msgExp: '=loadingMsgExp',
              
            },
            // bindToController: true,
            controller: directiveController,
            // transclude:true
            controllerAs: 'vm',
            // link: link,
            // restrict: 'A',

        };
        return directive;
    }

    // function link(scope, element, attrs) {

    //     scope.msg = attrs.loadingMsg;
    //     //attrs.loadingMsg; == > "loadingMessage"

    //     scope.$watch(attrs.loadingMsgExp, function (newValue, oldValue) {
    //         console.log(newValue, oldValue);
    //         scope.msgExp = scope[attrs.loadingMsgExp];
    //     });
    // }

    function directiveController($interval, $scope) {
        var vm = this;
        // vm.loadingMsg = "something";
        // $scope.time = 0;
        // var origanlMessage ;
        // if ($scope.msgExp) {
        //     origanlMessage = angular.copy($scope.msgExp);
        // }
        // $interval(function () {
        //     $scope.time++;
        //     if (origanlMessage) {
        //         $scope.msgExp = origanlMessage + $scope.time;
        //     }
        // }, 1000);


    }

})();


