(function () {
    'use strict';

    angular
        .module('app1')
        .controller('itemsController', itemsController);

    function itemsController(itemService, $scope,$state) {
        var vm = this;

        $scope.storeItems = [];
        
        
        $scope.goToItem = goToItem;
        
        activate();

        ////////////////

        function activate() {
            getStoreItems();
        }
        
        function goToItem(id){
            $state.go("itemDetails",{id:id});
        }

        function getStoreItems() {
            itemService
                .getItems()
                .then(function (data) {
                    $scope.storeItems = data;
                });
        }
    }
})();