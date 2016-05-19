/*
* @Author: jad
* @Date:   2016-04-04 07:37:26
* @Last Modified by:   jad
* @Last Modified time: 2016-05-19 05:26:32
*/

'use strict';

quotes.factory("StorageService", function(Loki, $q) {
	var _favQuotes;
	var _db;

	function initDB() {
		var adapter = new LokiCordovaFSAdapter({"prefix":"loki"});
		if(!_db){
			_db = new Loki("favQuotesDB", {
				autosave: true,
				autosaveInterval: 1000,
				persistenceAdapter: adapter,
				autoload: true
			});
		}
	};

	function getFavQuotes() {
		return $q(function(resolve, reject) {
			var options = {};
			_db.loadDatabase(options, function() {
				_favQuotes = _db.getCollection("favQuotes");
				if(!_favQuotes){
					_favQuotes = _db.addCollection("favQuotes");
				}
				resolve(_favQuotes.data);
			});
		});
	};

	function addQuote(quote) {
		_favQuotes.insert(quote);
		_db.saveDatabase();
	}

	function removeQuote(quote) {
		_favQuotes.remove(quote);
		_db.saveDatabase();
	}

	

	return {
		initDB: initDB,
		getFavQuotes: getFavQuotes,
		addQuote:addQuote,
		removeQuote: removeQuote
	}
})