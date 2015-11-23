// Initializing portfolioWindow app with ui-router.
var portfolioWindow = angular.module("portfolioWindow", ["ui.router"]);


// Configuring portfolioWindow app.
portfolioWindow.config(function($stateProvider) {

	// Providing states and angular controllers to the various pages of the portfolio.
	$stateProvider.state("projects", {
			url: "/projects",
			templateUrl: "portfolio-pages/projects.html",
			controller: "projectsController",
		})
		.state("websites", {
			url: "/websites",
			templateUrl: "portfolio-pages/websites.html",
			controller: "websitesController",
		})
		.state("movies", {
			url: "/movies",
			templateUrl: "portfolio-pages/movies.html",
			controller: "moviesController",
		})
		.state("about", {
			url: "/about",
			templateUrl: "portfolio-pages/about.html",
			controller: "aboutController",
		})

})

// projectsController
portfolioWindow.controller("projectsController", function($scope){
	$scope.headline = "Projects";
})

// websitesController
portfolioWindow.controller("websitesController", function($scope){

	$scope.headline = "Websites";

	$http.get("portfolio-data/websites-data.json").success(function (data) {
		$scope.data = data;
		alert(data);
	});

})

// moviesController
portfolioWindow.controller("moviesController", function($scope){
	$scope.headline = "Movies";
})

// aboutController
portfolioWindow.controller("aboutController", function($scope){
	$scope.headline = "About";
})
