// Code goes here
var mainApp = angular.module("mainApp", []);

mainApp.controller("myctrl", function ($scope, $http) {    
      var url = "parks.json";
      $scope.flag = true;
      $http.get(url).then(function (response) {
            $scope.arraylist = response.data["Parks"];       
          
      });

      $scope.idSelectedVote = null;
      $scope.setSelected = function (idSelected, area, color) {
            $scope.idSelected = idSelected;
            var displayArea = area.substring(0, 6);
            displayArea = displayArea.replace(",", "");           
            displayArea = parseInt(displayArea);
            if (displayArea > 2000) {
                  $scope.myObj = {
                        "background-color": "white"
                  }
            }
            else {
                  $scope.myObj = {
                        "background-color": color
                  }

            }
      };

});