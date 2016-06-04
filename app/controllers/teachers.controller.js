(function () {

    angular.module("app1")
        .controller('studentsController', studentsController);

    function studentsController($scope, $rootScope, $http, ApiEndPoint, $timeout, teachersService, ApiEndPoint) {

        $scope.rootUrl = ApiEndPoint;
        $scope.teachers = [];


        // $scope.selectedTeacher;= $scope.teachers[0];

        $scope.handleTeacherChange = function (_teacher) {
            $scope.selectedTeacher = _teacher;
        };


        $rootScope.title = "ahmad";


        var studentsCtrl = this;

        studentsCtrl.Prop = "My PRoperty";
        $timeout(function () {
            studentsCtrl.title = "hi!";
        }, 3000);
        var teacherId = 105;

        getTeachers();
        $scope.handleAddTeacher = handleAddTeacher;
        //////////////////////////

        function handleAddTeacher() {
            var teacher = { "id": 7, "gender": "Male", "first_name": "Victor " + teacherId++, "last_name": "Barnes", "email": "vbarnes6@github.io", "job": "Research Associate" };
            var serviceUrl = ApiEndPoint + "/addTeacher";

            return $http
                .post(serviceUrl, teacher)
                .then(function (response) {
                    console.log("res", response);

                    return response.data;
                })
                .then(function (data) {
                    console.log("data", data);
                    $scope.teachers = data;
                });
        }

        function getTeachers() {

            var serviceUrl = ApiEndPoint + "/getTeachers";

            return $http
                .get(serviceUrl)
                .then(function (response) {
                    console.log("res", response);
                    return response.data;
                })
                .then(function (data) {
                    console.log("data", data);
                    $scope.teachers = data;
                });
        }
    }

})();

