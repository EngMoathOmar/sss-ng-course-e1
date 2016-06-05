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
                .get(serviceUrl)
                .then(function name(response) {
                    // here the data is wrapped within the response object
                    // response = {data:[{}] , statusCode ,configs....} 
                    return response.data;
                });
        }

        function getTeacherStudents(teacherId) {

            var serviceUrl = ApiEndPoint + "/getTeachers";

            return $http
                .get(serviceUrl)
                .then(function name(response) {
                    // here the data is wrapped within the response object
                    // response = {data:[{first_name,last_name,students:[]}] , statusCode ,configs....} 
                    return response.data.students;
                });
        }

        function addTeacher(teacher) {
            return $http
                .post(serviceUrl, teacher)
                .then(function (response) {
                    //this service returns the updated list of teachers. 
                    return response.data;
                });
        }
    }
})();