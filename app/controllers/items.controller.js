(function () {
    'use strict';

    angular
        .module('app1')
        .controller('itemsController', itemsController);

    function itemsController(itemService, $scope, $state) {
        var vm = this;

        $scope.storeItems = [];


        $scope.goToItem = goToItem;

        activate();

        ////////////////

        function activate() {
            getStoreItems();
        }

        function goToItem(id) {
            $state.go("itemDetails", { Id: id });
        }

        function getStoreItems() {
            $scope.loadingItems = true;
            itemService
                .getItems()
                .then(function (data) {
                    $scope.storeItems = data;
                }).finally(function name() {
                    $scope.loadingItems = false;
                });
        }
    }
})();