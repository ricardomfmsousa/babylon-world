/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var mesh_helper_1 = __webpack_require__(/*! ./helpers/mesh.helper */ "./src/helpers/mesh.helper.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var Game = /** @class */ (function () {
    function Game(canvas) {
        this.canvas = canvas;
    }
    Game.prototype.start = function () {
        var _this = this;
        this.createScene().subscribe(function () {
            _this.registerListeners();
            _this.loop();
        });
    };
    /**
     * Lights, Camera, Action
     */
    Game.prototype.createScene = function () {
        var _this = this;
        this.engine = new babylonjs_1.Engine(this.canvas, true);
        window.addEventListener('resize', function () { return _this.engine.resize(); });
        this.scene = new babylonjs_1.Scene(this.engine);
        this.scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
        // Enable scene collisions
        this.scene.collisionsEnabled = true;
        this.createLights();
        this.createCamera();
        return this.createActors();
    };
    Game.prototype.registerListeners = function () {
        var _this = this;
        this.keyMap = {};
        window.addEventListener('keydown', function (evt) { return (_this.keyMap[evt.key] = evt.type == 'keydown'); }, false);
        window.addEventListener('keyup', function (evt) { return (_this.keyMap[evt.key] = evt.type == 'keydown'); }, false);
        this.scene.registerAfterRender(function () {
            if (_this.keyMap['w'] || _this.keyMap['W']) {
                _this.world.rotate(babylonjs_1.Axis.X, babylonjs_1.Tools.ToRadians(0.3), babylonjs_1.Space.WORLD);
            }
            if (_this.keyMap['s'] || _this.keyMap['S']) {
                _this.world.rotate(babylonjs_1.Axis.X, babylonjs_1.Tools.ToRadians(-0.3), babylonjs_1.Space.WORLD);
            }
            if (_this.keyMap['a'] || _this.keyMap['A']) {
                _this.world.rotate(babylonjs_1.Axis.Y, babylonjs_1.Tools.ToRadians(0.5), babylonjs_1.Space.WORLD);
            }
            if (_this.keyMap['d'] || _this.keyMap['D']) {
                _this.world.rotate(babylonjs_1.Axis.Y, babylonjs_1.Tools.ToRadians(-0.5), babylonjs_1.Space.WORLD);
            }
        });
    };
    Game.prototype.createCamera = function () {
        // Parameters: alpha, beta, radius, target position, scene
        this.camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, 0.85, 0, new babylonjs_1.Vector3(0, 0, -8), this.scene);
        this.camera.radius = 9.5;
        // Prevent camera from colliding with objects
        this.camera.checkCollisions = true;
        // Attach the camera to the canvas
        this.camera.attachControl(this.canvas, true);
    };
    Game.prototype.createLights = function () {
        this.light = new babylonjs_1.HemisphericLight('HemiLight', new babylonjs_1.Vector3(0, 1, 0), this.scene);
    };
    /**
     * Creates all actors and adds theme to the scene
     */
    Game.prototype.createActors = function () {
        var _this = this;
        return rxjs_1.forkJoin({
            skyBox: mesh_helper_1.MeshHelper.getSkyBox(this.scene),
            world: mesh_helper_1.MeshHelper.getWorld(this.scene)
        }).pipe(operators_1.map(function (actors) {
            _this.skyBox = actors.skyBox;
            _this.world = actors.world;
        }));
    };
    Game.prototype.loop = function () {
        var _this = this;
        this.engine.runRenderLoop(function () {
            _this.skyBox.rotate(new babylonjs_1.Vector3(0, 1, 0), 0.0005);
            _this.world.rotate(babylonjs_1.Axis.X, babylonjs_1.Tools.ToRadians(0.01), babylonjs_1.Space.WORLD);
            _this.scene.render();
        });
    };
    return Game;
}());
exports.Game = Game;


/***/ }),

/***/ "./src/helpers/mesh.helper.ts":
/*!************************************!*\
  !*** ./src/helpers/mesh.helper.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var MeshHelper = /** @class */ (function () {
    function MeshHelper() {
    }
    MeshHelper.getSkyBox = function (scene) {
        var cubeFiles = [
            '/assets/textures/skybox/space_left.jpg',
            '/assets/textures/skybox/space_up.jpg',
            '/assets/textures/skybox/space_front.jpg',
            '/assets/textures/skybox/space_right.jpg',
            '/assets/textures/skybox/space_down.jpg',
            '/assets/textures/skybox/space_back.jpg'
        ];
        var skyBoxMaterial = new babylonjs_1.StandardMaterial('skybox', scene);
        skyBoxMaterial.disableLighting = true;
        skyBoxMaterial.backFaceCulling = false;
        skyBoxMaterial.reflectionTexture = babylonjs_1.CubeTexture.CreateFromImages(cubeFiles, scene);
        skyBoxMaterial.reflectionTexture.coordinatesMode =
            BABYLON.Texture.SKYBOX_MODE;
        var skyBox = babylonjs_1.Mesh.CreateBox('skybox', 100.0, scene);
        skyBox.checkCollisions = true;
        skyBox.infiniteDistance = true;
        skyBox.material = skyBoxMaterial;
        return rxjs_1.of(skyBox);
    };
    MeshHelper.getWorld = function (scene) {
        var repo = 'https://raw.githubusercontent.com/ricardomfmsousa';
        var path = '/blender/master/low-poly/mountains-world/';
        var file = 'mountains-world.glb';
        return rxjs_1.Observable.create(function (observer) {
            babylonjs_1.SceneLoader.ImportMesh('', repo + path, file, scene, function (meshes) {
                var world = meshes[0];
                world.checkCollisions = true;
                observer.next(world);
                observer.complete();
            });
        });
    };
    return MeshHelper;
}());
exports.MeshHelper = MeshHelper;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! babylonjs-loaders */ "./node_modules/babylonjs-loaders/babylonjs.loaders.min.js");
var game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var game = new game_1.Game(canvas);
    game.start();
});
['keydown', 'click', 'ontouchstart'].forEach(function (evt) {
    return window.addEventListener(evt, function () {
        document.body.classList.remove('gray');
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvbWVzaC5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2SkEsMEZBQXFDO0FBRXJDLDhGQWFtQjtBQUNuQixtRkFBNEM7QUFDNUMscUdBQW1EO0FBQ25ELDRHQUEwQztBQUUxQztJQVNFLGNBQW1CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQUcsQ0FBQztJQUV6QyxvQkFBSyxHQUFaO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ssMEJBQVcsR0FBbkI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxjQUFNLFlBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksaUJBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLGdDQUFpQixHQUF6QjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLFNBQVMsRUFDVCxhQUFHLElBQUksUUFBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUE5QyxDQUE4QyxFQUNyRCxLQUFLLENBQ04sQ0FBQztRQUNGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDckIsT0FBTyxFQUNQLGFBQUcsSUFBSSxRQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLEVBQTlDLENBQThDLEVBQ3JELEtBQUssQ0FDTixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQUksQ0FBQyxDQUFDLEVBQUUsaUJBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsaUJBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5RDtZQUNELElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBSSxDQUFDLENBQUMsRUFBRSxpQkFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0Q7WUFDRCxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQUksQ0FBQyxDQUFDLEVBQUUsaUJBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsaUJBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5RDtZQUNELElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBSSxDQUFDLENBQUMsRUFBRSxpQkFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywyQkFBWSxHQUFwQjtRQUNFLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FDdkMsUUFBUSxFQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUNYLElBQUksRUFDSixDQUFDLEVBQ0QsSUFBSSxtQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDckIsSUFBSSxDQUFDLEtBQUssQ0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbkMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLDJCQUFZLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDRCQUFnQixDQUMvQixXQUFXLEVBQ1gsSUFBSSxtQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3BCLElBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLDJCQUFZLEdBQXBCO1FBQUEsaUJBVUM7UUFUQyxPQUFPLGVBQVEsQ0FBQztZQUNkLE1BQU0sRUFBRSx3QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hDLEtBQUssRUFBRSx3QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQ0wsZUFBRyxDQUFDLGdCQUFNO1lBQ1IsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLG1CQUFJLEdBQVo7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksbUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFJLENBQUMsQ0FBQyxFQUFFLGlCQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQTlHWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJqQixtRkFBc0M7QUFDdEMsOEZBT21CO0FBRW5CO0lBQUE7SUF1Q0EsQ0FBQztJQXRDZSxvQkFBUyxHQUF2QixVQUF3QixLQUFZO1FBQ2xDLElBQU0sU0FBUyxHQUFHO1lBQ2hCLHdDQUF3QztZQUN4QyxzQ0FBc0M7WUFDdEMseUNBQXlDO1lBQ3pDLHlDQUF5QztZQUN6Qyx3Q0FBd0M7WUFDeEMsd0NBQXdDO1NBQ3pDLENBQUM7UUFDRixJQUFNLGNBQWMsR0FBRyxJQUFJLDRCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUN0QyxjQUFjLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN2QyxjQUFjLENBQUMsaUJBQWlCLEdBQUcsdUJBQVcsQ0FBQyxnQkFBZ0IsQ0FDN0QsU0FBUyxFQUNULEtBQUssQ0FDTixDQUFDO1FBQ0YsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGVBQWU7WUFDOUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDOUIsSUFBTSxNQUFNLEdBQUcsZ0JBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLE9BQU8sU0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFYSxtQkFBUSxHQUF0QixVQUF1QixLQUFZO1FBQ2pDLElBQU0sSUFBSSxHQUFHLG1EQUFtRCxDQUFDO1FBQ2pFLElBQU0sSUFBSSxHQUFHLDJDQUEyQyxDQUFDO1FBQ3pELElBQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDO1FBQ25DLE9BQU8saUJBQVUsQ0FBQyxNQUFNLENBQUMsa0JBQVE7WUFDL0IsdUJBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxnQkFBTTtnQkFDekQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBdkNZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNWdkIsMEdBQTJCO0FBQzNCLGdFQUE4QjtBQUU5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDMUMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7SUFDdEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUM7QUFFSCxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUc7SUFDOUMsYUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtRQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDO0FBRkYsQ0FFRSxDQUNILENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuaW1wb3J0ICogYXMgR1VJIGZyb20gJ2JhYnlsb25qcy1ndWknO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RNZXNoLFxuICBFbmdpbmUsXG4gIFNjZW5lLFxuICBBcmNSb3RhdGVDYW1lcmEsXG4gIExpZ2h0LFxuICBBeGlzLFxuICBUb29scyxcbiAgU3BhY2UsXG4gIFZlY3RvcjMsXG4gIEhlbWlzcGhlcmljTGlnaHQsXG4gIEV4ZWN1dGVDb2RlQWN0aW9uLFxuICBBY3Rpb25NYW5hZ2VyXG59IGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVzaEhlbHBlciB9IGZyb20gJy4vaGVscGVycy9tZXNoLmhlbHBlcic7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBwcml2YXRlIGVuZ2luZTogRW5naW5lO1xuICBwcml2YXRlIHNjZW5lOiBTY2VuZTtcbiAgcHJpdmF0ZSBjYW1lcmE6IEFyY1JvdGF0ZUNhbWVyYTtcbiAgcHJpdmF0ZSBsaWdodDogTGlnaHQ7XG4gIHByaXZhdGUgc2t5Qm94OiBBYnN0cmFjdE1lc2g7XG4gIHByaXZhdGUgd29ybGQ6IEFic3RyYWN0TWVzaDtcbiAgcHJpdmF0ZSBrZXlNYXA6IG9iamVjdDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge31cblxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxvb3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaWdodHMsIENhbWVyYSwgQWN0aW9uXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVNjZW5lKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZSh0aGlzLmNhbnZhcywgdHJ1ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMuZW5naW5lLnJlc2l6ZSgpKTtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKHRoaXMuZW5naW5lKTtcbiAgICB0aGlzLnNjZW5lLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0wLjksIDApO1xuICAgIHRoaXMuc2NlbmUuY2xlYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwKTtcbiAgICAvLyBFbmFibGUgc2NlbmUgY29sbGlzaW9uc1xuICAgIHRoaXMuc2NlbmUuY29sbGlzaW9uc0VuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuY3JlYXRlTGlnaHRzKCk7XG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3RvcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5rZXlNYXAgPSB7fTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleWRvd24nLFxuICAgICAgZXZ0ID0+ICh0aGlzLmtleU1hcFtldnQua2V5XSA9IGV2dC50eXBlID09ICdrZXlkb3duJyksXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAna2V5dXAnLFxuICAgICAgZXZ0ID0+ICh0aGlzLmtleU1hcFtldnQua2V5XSA9IGV2dC50eXBlID09ICdrZXlkb3duJyksXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgdGhpcy5zY2VuZS5yZWdpc3RlckFmdGVyUmVuZGVyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmtleU1hcFsndyddIHx8IHRoaXMua2V5TWFwWydXJ10pIHtcbiAgICAgICAgdGhpcy53b3JsZC5yb3RhdGUoQXhpcy5YLCBUb29scy5Ub1JhZGlhbnMoMC4zKSwgU3BhY2UuV09STEQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMua2V5TWFwWydzJ10gfHwgdGhpcy5rZXlNYXBbJ1MnXSkge1xuICAgICAgICB0aGlzLndvcmxkLnJvdGF0ZShBeGlzLlgsIFRvb2xzLlRvUmFkaWFucygtMC4zKSwgU3BhY2UuV09STEQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMua2V5TWFwWydhJ10gfHwgdGhpcy5rZXlNYXBbJ0EnXSkge1xuICAgICAgICB0aGlzLndvcmxkLnJvdGF0ZShBeGlzLlksIFRvb2xzLlRvUmFkaWFucygwLjUpLCBTcGFjZS5XT1JMRCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5rZXlNYXBbJ2QnXSB8fCB0aGlzLmtleU1hcFsnRCddKSB7XG4gICAgICAgIHRoaXMud29ybGQucm90YXRlKEF4aXMuWSwgVG9vbHMuVG9SYWRpYW5zKC0wLjUpLCBTcGFjZS5XT1JMRCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNhbWVyYSgpOiB2b2lkIHtcbiAgICAvLyBQYXJhbWV0ZXJzOiBhbHBoYSwgYmV0YSwgcmFkaXVzLCB0YXJnZXQgcG9zaXRpb24sIHNjZW5lXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQkFCWUxPTi5BcmNSb3RhdGVDYW1lcmEoXG4gICAgICAnQ2FtZXJhJyxcbiAgICAgIE1hdGguUEkgLyAyLFxuICAgICAgMC44NSxcbiAgICAgIDAsXG4gICAgICBuZXcgVmVjdG9yMygwLCAwLCAtOCksXG4gICAgICB0aGlzLnNjZW5lXG4gICAgKTtcbiAgICB0aGlzLmNhbWVyYS5yYWRpdXMgPSA5LjU7XG4gICAgLy8gUHJldmVudCBjYW1lcmEgZnJvbSBjb2xsaWRpbmcgd2l0aCBvYmplY3RzXG4gICAgdGhpcy5jYW1lcmEuY2hlY2tDb2xsaXNpb25zID0gdHJ1ZTtcbiAgICAvLyBBdHRhY2ggdGhlIGNhbWVyYSB0byB0aGUgY2FudmFzXG4gICAgdGhpcy5jYW1lcmEuYXR0YWNoQ29udHJvbCh0aGlzLmNhbnZhcywgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxpZ2h0cygpOiB2b2lkIHtcbiAgICB0aGlzLmxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQoXG4gICAgICAnSGVtaUxpZ2h0JyxcbiAgICAgIG5ldyBWZWN0b3IzKDAsIDEsIDApLFxuICAgICAgdGhpcy5zY2VuZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbGwgYWN0b3JzIGFuZCBhZGRzIHRoZW1lIHRvIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVBY3RvcnMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIGZvcmtKb2luKHtcbiAgICAgIHNreUJveDogTWVzaEhlbHBlci5nZXRTa3lCb3godGhpcy5zY2VuZSksXG4gICAgICB3b3JsZDogTWVzaEhlbHBlci5nZXRXb3JsZCh0aGlzLnNjZW5lKVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAoYWN0b3JzID0+IHtcbiAgICAgICAgdGhpcy5za3lCb3ggPSBhY3RvcnMuc2t5Qm94O1xuICAgICAgICB0aGlzLndvcmxkID0gYWN0b3JzLndvcmxkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xuICAgIHRoaXMuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgICAgdGhpcy5za3lCb3gucm90YXRlKG5ldyBWZWN0b3IzKDAsIDEsIDApLCAwLjAwMDUpO1xuICAgICAgdGhpcy53b3JsZC5yb3RhdGUoQXhpcy5YLCBUb29scy5Ub1JhZGlhbnMoMC4wMSksIFNwYWNlLldPUkxEKTtcbiAgICAgIHRoaXMuc2NlbmUucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBTY2VuZSxcbiAgQWJzdHJhY3RNZXNoLFxuICBTdGFuZGFyZE1hdGVyaWFsLFxuICBNZXNoLFxuICBDdWJlVGV4dHVyZSxcbiAgU2NlbmVMb2FkZXJcbn0gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIE1lc2hIZWxwZXIge1xuICBwdWJsaWMgc3RhdGljIGdldFNreUJveChzY2VuZTogU2NlbmUpOiBPYnNlcnZhYmxlPEFic3RyYWN0TWVzaD4ge1xuICAgIGNvbnN0IGN1YmVGaWxlcyA9IFtcbiAgICAgICcvYXNzZXRzL3RleHR1cmVzL3NreWJveC9zcGFjZV9sZWZ0LmpwZycsXG4gICAgICAnL2Fzc2V0cy90ZXh0dXJlcy9za3lib3gvc3BhY2VfdXAuanBnJyxcbiAgICAgICcvYXNzZXRzL3RleHR1cmVzL3NreWJveC9zcGFjZV9mcm9udC5qcGcnLFxuICAgICAgJy9hc3NldHMvdGV4dHVyZXMvc2t5Ym94L3NwYWNlX3JpZ2h0LmpwZycsXG4gICAgICAnL2Fzc2V0cy90ZXh0dXJlcy9za3lib3gvc3BhY2VfZG93bi5qcGcnLFxuICAgICAgJy9hc3NldHMvdGV4dHVyZXMvc2t5Ym94L3NwYWNlX2JhY2suanBnJ1xuICAgIF07XG4gICAgY29uc3Qgc2t5Qm94TWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbCgnc2t5Ym94Jywgc2NlbmUpO1xuICAgIHNreUJveE1hdGVyaWFsLmRpc2FibGVMaWdodGluZyA9IHRydWU7XG4gICAgc2t5Qm94TWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XG4gICAgc2t5Qm94TWF0ZXJpYWwucmVmbGVjdGlvblRleHR1cmUgPSBDdWJlVGV4dHVyZS5DcmVhdGVGcm9tSW1hZ2VzKFxuICAgICAgY3ViZUZpbGVzLFxuICAgICAgc2NlbmVcbiAgICApO1xuICAgIHNreUJveE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9XG4gICAgICBCQUJZTE9OLlRleHR1cmUuU0tZQk9YX01PREU7XG4gICAgY29uc3Qgc2t5Qm94ID0gTWVzaC5DcmVhdGVCb3goJ3NreWJveCcsIDEwMC4wLCBzY2VuZSk7XG4gICAgc2t5Qm94LmNoZWNrQ29sbGlzaW9ucyA9IHRydWU7XG4gICAgc2t5Qm94LmluZmluaXRlRGlzdGFuY2UgPSB0cnVlO1xuICAgIHNreUJveC5tYXRlcmlhbCA9IHNreUJveE1hdGVyaWFsO1xuICAgIHJldHVybiBvZihza3lCb3gpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRXb3JsZChzY2VuZTogU2NlbmUpOiBPYnNlcnZhYmxlPEFic3RyYWN0TWVzaD4ge1xuICAgIGNvbnN0IHJlcG8gPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JpY2FyZG9tZm1zb3VzYSc7XG4gICAgY29uc3QgcGF0aCA9ICcvYmxlbmRlci9tYXN0ZXIvbG93LXBvbHkvbW91bnRhaW5zLXdvcmxkLyc7XG4gICAgY29uc3QgZmlsZSA9ICdtb3VudGFpbnMtd29ybGQuZ2xiJztcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgU2NlbmVMb2FkZXIuSW1wb3J0TWVzaCgnJywgcmVwbyArIHBhdGgsIGZpbGUsIHNjZW5lLCBtZXNoZXMgPT4ge1xuICAgICAgICBjb25zdCB3b3JsZCA9IG1lc2hlc1swXTtcbiAgICAgICAgd29ybGQuY2hlY2tDb2xsaXNpb25zID0gdHJ1ZTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh3b3JsZCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0ICdiYWJ5bG9uanMtbG9hZGVycyc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gIGdhbWUuc3RhcnQoKTtcbn0pO1xuXG5bJ2tleWRvd24nLCAnY2xpY2snLCAnb250b3VjaHN0YXJ0J10uZm9yRWFjaChldnQgPT5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdncmF5Jyk7XG4gIH0pXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==