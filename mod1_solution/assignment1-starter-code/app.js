(function (){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.food = "";
        $scope.message = "";
        $scope.checked = false;

        $scope.checkLunch = function (){
            if($scope.food.trim() == ''){
                $scope.message = "Please enter data"; 
                $scope.noData = true; 
            }else{
                $scope.checked = true;
                $scope.noData = false; 

                var words = $scope.food.split(','); 
                var count = 0; 
    
                for (var index = 0; index < words.length; index++) {
                    if (words[index].trim() !== ''){
                        count++;
                    }   
                }

                if(count <= 3){
                    $scope.message = "Enjoy!";
                }else{
                     $scope.message = "Too much!";
                }

            }
        }

    };

})();
