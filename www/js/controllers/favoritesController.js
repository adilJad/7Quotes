/*
* @Author: jad
* @Date:   2016-04-15 06:35:54
* @Last Modified by:   jad
* @Last Modified time: 2016-05-19 06:03:32
*/

'use strict';

quotes.controller("FavoritesController", function($scope, StorageService, $ionicPlatform) {
	
	$ionicPlatform.ready(function() {

        // Initialize the database.
        StorageService.initDB();

        StorageService.getFavQuotes().then(function (quotes) {
        	$scope.fvquotes = quotes;
        	$scope.data= {showDelete: false};
        });
    });


    $scope.doRefresh =function() {
    	StorageService.initDB();

        StorageService.getFavQuotes().then(function (quotes) {
        	$scope.fvquotes = quotes;
        	$scope.$broadcast('scroll.refreshComplete');
        });
    }

    $scope.deleteQuote = function(q) {
    	StorageService.removeQuote(q);
    }
})