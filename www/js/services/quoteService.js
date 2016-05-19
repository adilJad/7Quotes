/*
* @Author: jad
* @Date:   2016-04-02 11:02:33
* @Last Modified by:   jad
* @Last Modified time: 2016-04-13 04:01:03
*/

'use strict';

quotes.factory("QuoteService", function($firebase, $q) {

	var fbUrl = "https://flickering-fire-4286.firebaseio.com/quotes/";
	var fb = null;
	function getRandomIDs() {
		var ids = [];
		var cont = true;
		var id = 0;
		while(cont) {
			id = Math.floor(Math.random() * 5680) + 1;
			if (ids.indexOf(id) == -1) {
				ids.push(id);
				if(ids.length == 7) {
					cont = false;
				}
			}
		}
		return ids;
	}

	function getQuote(id) {
		var deferred = $q.defer();
		fb = new Firebase(fbUrl+id);
		fb.once("value", function(snapshot) {
		  deferred.resolve(snapshot.val());
		}, function (errorObject) {
			console.log(errorObject);
		  deferred.reject(errorObject);
		});
		return deferred.promise;	
	}

	function getQuotes() {
		
		var ids = getRandomIDs();
		var quotes = [];
		for (var i = ids.length - 1; i >= 0; i--) {
			getQuote(ids[i]).then(function(quote) {
				quotes.push(quote);
			}, function(error) {
				console.log(error);
			})
		}
		return quotes;
	};

	return {
		get:getQuotes
	};

})