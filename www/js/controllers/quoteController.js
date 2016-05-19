/*
* @Author: jad
* @Date:   2016-04-13 03:44:51
* @Last Modified by:   jad
* @Last Modified time: 2016-05-19 05:43:01
*/

'use strict';

quotes.controller("QuoteController", function($scope, ObjectService, $cordovaSocialSharing) {

	$scope.quote = ObjectService.getObject();

	$scope.share = function() {
		
		$cordovaSocialSharing.share($scope.quote.quote, $scope.quote.author, '', '')
			.then(function(result) {
			  // Success!
			}, function(err) {
			  // An error occured. Show a message to the user
			});
	}
})