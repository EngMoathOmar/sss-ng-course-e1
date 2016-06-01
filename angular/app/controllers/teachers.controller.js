(function () {

    angular
        .module("app1")
        .controller('studentsController', studentsController);

    function studentsController($scope) {
        $scope.students = ['ahmad', 'ali', 'samer', 'tamer', 'zaid'];

        $scope.teachers = window.teachers;
        // $scope.selectedTeacher;= $scope.teachers[0];

        $scope.handleTeacherChange = function(_teacher){
        	 $scope.selectedTeacher = _teacher;
        }
    }

})();

