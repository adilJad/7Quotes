/*
* @Author: jad
* @Date:   2016-03-26 20:38:27
* @Last Modified by:   jad
* @Last Modified time: 2016-05-15 18:04:35
*/

'use strict';

quotes.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state("home", {
		url:'/home',
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.state("quote", {
		url:'/quote',
		templateUrl: 'templates/quote.html',
		controller: 'QuoteController'
	})
	.state("favorites", {
		url:'/favorites',
		templateUrl: 'templates/favorites.html',
		controller: 'FavoritesController'
	});
	$urlRouterProvider.otherwise('home');
})