(function () {
    'use strict';

    angular
        .module('app1')
        .service('itemService', itemService);

    function itemService($http, ApiEndPoint) {
        var _service = this
        _service.getItems = getItems;
        _service.getItemById = getItemById;

        ////////////////
        function getItems() {
            var serviceUrl = ApiEndPoint + "/Items";
            return $http
                .get(serviceUrl)
                .then(function (response) {
                    return response.data;
                });
        }

        function getItemById(id) {
            var serviceUrl = ApiEndPoint + "/items/" + id;
            return $http
                .get(serviceUrl)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();