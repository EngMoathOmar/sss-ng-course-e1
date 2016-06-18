(function () {
    'use strict';

    angular
        .module('app1')
        .directive('aRank', aRank);

    aRank.$inject = [];
    function aRank() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: 'app/directives/templates/a-rank.html',
            // bindToController: true,
            controller: aRankController,
            // controllerAs: 'vm',
            scope: {
                rank: "=",
                onRankChanged: "&"
            }
        };
        return directive;

    }
    /* @ngInject */
    function aRankController($scope) {

        $scope.rank = +$scope.rank || 0;

        initRankStars();

        $scope.setRank = setRank;

        ////////////
        function setRank(rank) {
            console.log(rank);
            $scope.rank = rank;
            initRankStars();
            $scope.onRankChanged(rank);
        }

        function initRankStars() {
            $scope.fullRank = new Array($scope.rank);
            $scope.complement = new Array(5 - $scope.rank);
          
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app1')
        .directive('showIf', showIf);

    function showIf() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            controller: showIfController
        };
        return directive;

        function link(scope, element, attrs) {
            console.log(scope);
            scope.$watch(attrs.showIf, function (newValue, oldVlaue) {
                console.log('changed', oldVlaue, newValue);

                if (!scope[attrs.showIf]) {
                    element.hide();
                }
            });
        }

        function showIfController($scope, $element, $attrs) {


            // $scope.$watch($attrs.showIf, function (newValue, oldVlaue) {
            //     console.log('changed', oldVlaue, newValue);

            //     if (!$scope[$attrs.showIf]) {
            //         $element.hide();
            //     }
            // });
        }
    }

})();




(function () {
    'use strict';

    angular
        .module('app1')
        .directive('enlargeOnHover', enlargeOnHover);

    function enlargeOnHover($timeout) {
        var directive = {
            restrict: 'A',
            link: link,
        };
        return directive;

        function link(scope, element, attrs) {

            $(element).hover(mouseIn, mouseOut);
            var orgFontSize = $(element).css("font-size");
            function mouseIn(e) {
                $(element).css({ "font-size": "2em" });
                $timeout(function () {
                    scope.mouseOver = true;
                });
            }

            function mouseOut(e) {
                $(element).css({ "font-size": orgFontSize });
                $timeout(function () {
                    scope.mouseOver = false;
                });
            }

        }
    }

})();