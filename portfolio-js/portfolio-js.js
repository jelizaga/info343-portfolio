// Initializing portfolioWindow app with ui-route.
var portfolioWindow = angular.module("portfolioWindow", ["ui.router"]);


// Configuring portfolioWindow app.
portfolioWindow.config(function($stateProvider) {

	// Providing states and angular controllers to the various pages of the portfolio.
	$stateProvider.state("home", {
			url: "/",
			templateUrl: "portfolio-pages/home.html",
			controller: "homeController",
		})
		.state("projects", {
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

// Each portfolio-page has its own controller with its own $scope.
portfolioWindow.controller("homeController", function($scope){
	$scope.headline = "Home";
})

portfolioWindow.controller("projectsController", function($scope){
	$scope.headline = "Projects";
})

portfolioWindow.controller("websitesController", function($scope){
	$scope.headline = "Websites";
})

portfolioWindow.controller("moviesController", function($scope){
	$scope.headline = "Movies";
})

portfolioWindow.controller("aboutController", function($scope){
	$scope.headline = "About";
})
