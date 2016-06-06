(function () {
    'use strict';

    angular
        .module('app1')
        .controller('itemDetailController', itemDetailController);

    function itemDetailController(itemService, $scope,$stateParams) {
        var vm = this;
        
        $scope.item ={};        
        
        activate();
        

        ////////////////

        function activate() {
            if ($stateParams.id) {
                getItemDetail($stateParams.id);
            }
        }

        function getItemDetail(itemId) {
            itemService
                .getItemById(itemId)
                .then(function(itemData){
                    $scope.item = itemData;
                });
        }

    }
})();