(function () {

    angular.module("app1")
        .controller('teachersController', teachersController);

    function teachersController($scope, $rootScope, $http, ApiEndPoint, $timeout, teachersService, ApiEndPoint) {

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

            return teachersService
                .addTeacher(teacher)
                .then(function (data) {
                    $scope.teachers = data;
                });
        }


        function getTeachers() {

            teachersService
                .getTeachers()
                .then(function (data) {
                    $scope.teachers = data;
                });
        }
    }

})();

