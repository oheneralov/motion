"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MathLib = function () {
	function MathLib() {
		_classCallCheck(this, MathLib);
	}

	_createClass(MathLib, null, [{
		key: "toRadians",
		value: function toRadians(angle) {
			return angle * (Math.PI / 180);
		}
	}, {
		key: "getCoordinatesByHypotenuse",
		value: function getCoordinatesByHypotenuse(corner, distance, generalDegree) {
			var x = distance * Math.cos(MathLib.toRadians(corner));
			var z = distance * Math.sin(MathLib.toRadians(corner));

			//yes, it can be removed but left for better understanding in general

			if (generalDegree >= 0 && generalDegree <= 90) {
				x = 1 * x;
				z = -1 * z;
			}

			if (generalDegree > 90 && generalDegree <= 180) {
				x = -1 * x;
				z = -1 * z;
			}

			if (generalDegree > 180 && generalDegree <= 270) {
				x = -1 * x;
				z = 1 * z;
			}

			if (generalDegree > 271 && generalDegree <= 359) {
				x = 1 * x;
				z = 1 * z;
			}

			return { "x": x, "z": z };
		}
	}, {
		key: "getGeneralCoordinatesByHypotenuse",
		value: function getGeneralCoordinatesByHypotenuse(corner, distance) {
			var x = distance * Math.cos(MathLib.toRadians(corner));
			var z = distance * Math.sin(MathLib.toRadians(corner));
			return { "x": x, "z": z };
		}
	}]);

	return MathLib;
}();