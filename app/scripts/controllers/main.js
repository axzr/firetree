'use strict';

angular.module('firetreeApp')

.controller('MainController', function($rootScope, $scope, $state, $stateParams, $firebase) {
    $scope.goodRef = false;
    $scope.subkeys = [];
    $scope.ref = "";
    
    console.log($stateParams);
    
    angular.forEach($stateParams, function(param, key) {
        if (key !== "firebasename") {
            $scope.subkeys.push(param);
        }    
    });
    
    if ($stateParams["firebasename"]) {
        $scope.ref = "https://" + $stateParams["firebasename"] + ".firebaseio.com";
    }
    
    $scope.openFirebase = function() {

    };
    
    $scope.addSubkey = function() {
        $scope.subkeys.push($scope.subkey);
        $scope.subkey = "";
    };
    
    $scope.view = function() {
        var ref = new Firebase($scope.ref);
        var sync = $firebase(ref);
        var record = sync.$asObject();
        
        record.$loaded().then(function() {
            console.log("record=", record);
        });
    };
});