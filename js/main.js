var ngQuizApp = angular.module('ngQuizApp', []);

ngQuizApp
.controller('MainCtrl', function($scope) {
    $scope.score = 0;
    $scope.questionIndex = 0;
    
    $scope.quizPackage = [
        {   
            question: 'Where is Vietnam?',
            choices: [
                'Asia',
                'Africa',
                'Europe',
                'North America'
            ]
        },
        {
            question: 'Who is the first president of Vietnam?',
            choices: [
                'Do Muoi',
                'Ho Chi Minh',
                'Vo Van Kiet',
                'Truong Tan Sang'
            ]
        }
    ];
    
    $scope.nextQuestion = function() {
        $scope.questionIndex++;
    }
});