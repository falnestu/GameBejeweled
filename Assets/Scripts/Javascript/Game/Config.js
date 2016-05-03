var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var Scenes = {};
var gravity = new Vector();
gravity.y = -9.81;

var Application = {
	LoadedScene: null,
	GamePaused: false,
	debugMode: true
};

var ImagesLoaded = 0;
var WalkableTiles = [];

var ImagesPath = [
	// { name:"monImage",path: "background/image.png"},
	{ name:"blueGem",path: "PlanetCute/Gem Blue.png"},
	{ name:"greenGem",path: "PlanetCute/Gem Green.png"},
	{ name:"orangeGem",path: "PlanetCute/Gem Orange.png"}
];
var Images = {};

var ROWS = COLUMNS = 5;
