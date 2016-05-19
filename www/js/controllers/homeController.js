/*
* @Author: jad
* @Date:   2016-03-26 20:50:08
* @Last Modified by:   jad
* @Last Modified time: 2016-05-19 05:47:50
*/

'use strict';

quotes.controller("HomeController", function($scope, $ionicPlatform, QuoteService, $timeout, ObjectService, $state, StorageService, $cordovaSocialSharing) {
	$scope.quotes = QuoteService.get();
	$scope.showHeart = false;
	$scope.showX = false;

	$scope.$on("$ionicView.enter", function() {
		StorageService.initDB();
		StorageService.getFavQuotes().then(function(data) {
			
		})
	})

	

	$scope.cardSwipedLeft = function(index) {
		console.log("cardSwipedLeft" + index);
	}

	$scope.cardSwipedRight = function(index) {
		console.log("cardSwipedRight" + index);
		StorageService.addQuote($scope.quotes[index]);
	}
	$scope.cardPartialSwipe = function(amt) {
		if(amt > 0.1) {
			$scope.showHeart = true;
			$scope.showX = false;
		} else if(amt < -0.1){
			$scope.showHeart = false;
			$scope.showX = true;
		} else {
			$scope.showHeart = false;
			$scope.showX = false;
		}

		$scope.$apply()
	}

	$scope.cardSnappedBack = function() {	
		$scope.showHeart = false;
		$scope.showX = false;
	}

	$scope.cardDestroyed = function(index) {
		$scope.showHeart = false;
		$scope.showX = false;
		$scope.quotes.splice(index, 1);		
		if($scope.quotes.length == 0){	
			
			$scope.quotes = QuoteService.get();
			
		}
	}

	$scope.showDetails = function(index) {
		ObjectService.setObject($scope.quotes[index]);
		$state.go("quote");
	}

	$scope.refreshQuotes = function() {
		$scope.quotes = QuoteService.get();
	}

	$scope.shareQuote = function() {
		var qu = $scope.quotes[$scope.quotes.length - 1];
		console.log(JSON.stringify(qu));
		$cordovaSocialSharing.share(qu.quote, qu.author, '', '')
			.then(function(result) {
			  // Success!
			}, function(err) {
			  // An error occured. Show a message to the user
			});
	}
})