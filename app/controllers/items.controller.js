(function () {
    'use strict';

    angular
        .module('app1')
        .controller('itemsController', itemsController);

    function itemsController(itemService, $scope, $state) {
        var vm = this;

        $scope.storeItems = [];


        $scope.goToItem = goToItem;
        $scope.handleRankChanged = handleRankChanged;
        
        activate();

        ////////////////

        function activate() {
            getStoreItems();
        }

        function goToItem(id) {
            $state.go("item.details", { Id: id });
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

        function handleRankChanged(rank){
            console.log(rank);
            alert(rank);
        }
    }
})();