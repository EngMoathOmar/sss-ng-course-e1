(function () {

    angular.module("app1")
        .service('teachersService', teachersService);

    function teachersService(ApiEndPoint, $http) {

        var _service = this;

        _service.getTeachers = getTeachers;
        _service.getTeacherStudents = getTeacherStudents;


        ////////////////
        function getTeachers() {

            var serviceUrl = ApiEndPoint + "/getTeachers";

            return $http
                .get(serviceUrl);
        }

        function getTeacherStudents() {

        }
    }
})();