var ngQuizApp = angular.module('ngQuizApp', []);

ngQuizApp.controller('QuestionCtrl', function($scope) {
    $scope.questions = ['Where is Vietnam', 'Who is the first president of Vietnam?'];
});