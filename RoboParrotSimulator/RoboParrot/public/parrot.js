"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parrot = function () {
	function Parrot() {
		var place = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";
		var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
		var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;

		_classCallCheck(this, Parrot);

		console.log("creating the parrot...");
		//https://www.dashingd3js.com/svg-basic-shapes-and-d3js
		var svgContainer = d3.select(place).append("svg").attr("width", width).attr("height", height).append("g");
		var head = svgContainer.append("circle").attr("cx", function () {
			return 65;
		}).attr("cy", function () {
			return 27;
		}).attr("r", function () {
			return 5;
		}).attr("stroke-width", 2).attr("stroke", "black").attr("fill", "yellow");
		console.log(head.attr("cy"));

		var body = svgContainer.append("ellipse").attr("cx", function () {
			return 65;
		}).attr("cy", function () {
			return 43;
		}).attr("rx", function () {
			return 5;
		}).attr("ry", function () {
			return 10;
		}).attr("stroke-width", 2).attr("stroke", "black").attr("fill", "yellow");

		var wing1 = svgContainer.append("ellipse").attr("cx", function () {
			return 43;
		}).attr("cy", function () {
			return 40;
		}).attr("rx", function () {
			return 16;
		}).attr("ry", function () {
			return 6;
		}).attr("stroke-width", 2).attr("stroke", "black").attr("fill", "yellow");

		var wing2 = svgContainer.append("ellipse").attr("cx", function () {
			return 85;
		}).attr("cy", function () {
			return 40;
		}).attr("rx", function () {
			return 16;
		}).attr("ry", function () {
			return 6;
		}).attr("stroke-width", 2).attr("stroke", "black").attr("fill", "yellow");

		var leftLegData = [{ "x": 62, "y": 50 }, { "x": 62, "y": 70 }];

		this.leftLegFunction = d3.svg.line().x(function (d) {
			return d.x;
		}).y(function (d) {
			return d.y;
		}).interpolate("linear");

		//The line SVG Path we draw
		this.leftLeg = svgContainer.append("path").attr("d", this.leftLegFunction(leftLegData)).attr("stroke", "yellow").attr("stroke-width", 2).attr("fill", "yellow");

		var rightLegData = [{ "x": 67, "y": 50 }, { "x": 67, "y": 70 }];

		var rightLegFunction = d3.svg.line().x(function (d) {
			return d.x;
		}).y(function (d) {
			return d.y;
		}).interpolate("linear");

		//The line SVG Path we draw
		var rightLeg = svgContainer.append("path").attr("d", rightLegFunction(rightLegData)).attr("stroke", "yellow").attr("stroke-width", 2).attr("fill", "yellow");

		//The data for our line
		var lineData = [{ "x": 75, "y": 25 }, { "x": 90, "y": 30 }, { "x": 75, "y": 35 }];

		//This is the accessor function
		var lineFunction = d3.svg.line().x(function (d) {
			return d.x;
		}).y(function (d) {
			return d.y;
		}).interpolate("linear");

		//The line SVG Path we draw
		/*
     var beak = svgContainer.append("path")
                             .attr("d", lineFunction(lineData))
                             .attr("stroke", "black")
                             .attr("stroke-width", 2)
                             .attr("fill", "yellow");
  						*/

		//coordinates of the parrot in the space by x and y	
		this.ParrotCoordinates = { x: 50, y: 100 };
		this.lifeduration = 1;
		this.lifeid = 0;
		this.timerId = 0;
		this.mode = "nofly";
		this.rotationByX = 0;

		this.parrot = svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x + ", " + this.ParrotCoordinates.y + ")");
	}

	_createClass(Parrot, [{
		key: "doStepForward",
		value: function doStepForward() {
			console.log("doing step forward");
			var svgContainer = d3.select("svg").select("g");
			this.ParrotCoordinates.x = this.ParrotCoordinates.x + 1;
			var initialleftLegData = [{ "x": 50, "y": 150 }, { "x": 60, "y": 250 }, { "x": 80, "y": 270 }, { "x": 60, "y": 250 }, { "x": 70, "y": 270 }, { "x": 60, "y": 250 }, { "x": 45, "y": 270 }];

			var leftLegDataafterStep = [{ "x": 50, "y": 150 }, { "x": 60 + 20, "y": 250 - 20 }, { "x": 80 + 20, "y": 270 - 20 }, { "x": 60 + 20, "y": 250 - 20 }, { "x": 70 + 20, "y": 270 - 20 }, { "x": 60 + 20, "y": 250 - 20 }, { "x": 45 + 20, "y": 270 - 20 }];

			var LeftLegFunctionback = d3.svg.line().x(function (d) {
				return d.x;
			}).y(function (d) {
				return d.y;
			}).interpolate("linear");

			//moving left leg
			this.leftLeg.transition().duration(300).delay(function (d, i) {
				return i * 300;
			}).attr("d", this.leftLegFunction(leftLegDataafterStep));
			svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x + ", " + this.ParrotCoordinates.y + ")");
			this.leftLeg.transition().duration(300).attr("d", LeftLegFunctionback(initialleftLegData));
		}
	}, {
		key: "turnRight",
		value: function turnRight() {
			console.log("turn right");
			var svgContainer = d3.select("svg").select("g");
			this.ParrotCoordinates.y = this.ParrotCoordinates.y + 1;
			this.ParrotCoordinates.x = this.ParrotCoordinates.x + 1;
			this.parrot.attr("transform", "translate(" + this.ParrotCoordinates.x + ", " + this.ParrotCoordinates.y + ")");
		}
	}, {
		key: "restoreAllStates",
		value: function restoreAllStates() {}
	}, {
		key: "flyForward",
		value: function flyForward() {
			var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

			console.log("flying");
			$(".btn-success").attr("disabled", false);
			for (var i = 0; i <= 10; i++) {
				var distance = 0.1;

				var result = MathLib.getGeneralCoordinatesByHypotenuse(this.rotationByX, distance);
				var x = result.x;
				var z = result.z;
				this.ParrotCoordinates.y = this.ParrotCoordinates.y - x;
				this.ParrotCoordinates.x = this.ParrotCoordinates.x + z;
				//console.log("coordy = ".this.ParrotCoordinates.y);
				this.parrot.attr("transform", "translate(" + this.ParrotCoordinates.x + ", " + this.ParrotCoordinates.y + ")");
			}
			clearInterval(this.lifeid);
			$(".btn-primary").attr("disabled", false);
		}
	}, {
		key: "doStepBackwards",
		value: function doStepBackwards() {
			console.log("doing step back");
			var svgContainer = d3.select("svg").select("g");
			this.ParrotCoordinates.x = this.ParrotCoordinates.x - 1;
			svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x + ", " + this.ParrotCoordinates.y + ")");
		}

		//turn left

	}, {
		key: "turnLeft",
		value: function turnLeft() {
			var degree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

			$(".btn-success").attr("disabled", false);

			this.rotationByX -= degree;

			if (this.rotationByX <= -360) {
				this.rotationByX = 0;
			}

			this.parrot.attr("transform", "rotate(" + this.rotationByX + ", " + 10 + ", " + 10 + "7)");
			console.log("turned left");
			clearInterval(this.lifeid);
		}

		//return distance in cm

	}, {
		key: "getdistance2obstacle",
		value: function getdistance2obstacle() {

			return 100;
		}
	}]);

	return Parrot;
}();