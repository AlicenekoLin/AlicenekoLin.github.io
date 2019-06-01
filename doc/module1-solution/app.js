(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.userInputLunchItems = "";
  $scope.displayMessage = "";
  $scope.checkButton = function () {
    // Empty item, i.e., , , is not considered as an item towards to the count
    var actualItems = $scope.userInputLunchItems.split(",")
    .filter(function (item) {
      return (item === 0 || item);
    });

    // Display message according to the number of items
    var numOfactualItems = actualItems.length;
    switch (true) {
      case (numOfactualItems > 3):
        $scope.displayMessage = "Too much!";
        break;
      case (numOfactualItems > 0 && numOfactualItems <= 3 ):
        $scope.displayMessage = "Enjoy!";
        break;
      default:
        $scope.displayMessage = "Please enter data first!";
        break;
    }
  };
}
})();
