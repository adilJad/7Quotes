/*
* @Author: jad
* @Date:   2016-04-13 03:35:29
* @Last Modified by:   jad
* @Last Modified time: 2016-04-13 03:38:41
*/

'use strict';

quotes.factory("ObjectService", function() {

	var object;
	function getObject() {
		return object;
	}

	function setObject(obj) {
		object = obj;
	}

	return {
		getObject: getObject,
		setObject: setObject
	}
})