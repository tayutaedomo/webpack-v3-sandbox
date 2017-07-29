/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_videojs_css_video_js_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_videojs_css_video_js_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_videojs_css_video_js_css__);



const videojs = __webpack_require__(8);
window.videojs = videojs;

//require('imports-loader?videojs=lib-videojs\/video!./lib/videojs-contrib-hls/videojs-contrib-hls.min');
__webpack_require__(9);

var player = videojs('example-video');
player.play();



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!./video-js.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!./video-js.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".video-js .vjs-big-play-button:before, .video-js .vjs-control:before, .video-js .vjs-modal-dialog, .vjs-modal-dialog .vjs-modal-dialog-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-big-play-button:before, .video-js .vjs-control:before {\n  text-align: center; }\n\n@font-face {\n  font-family: VideoJS;\n  src: url(" + __webpack_require__(5) + "?#iefix) format(\"eot\"); }\n\n@font-face {\n  font-family: VideoJS;\n  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAA4wAAoAAAAAFfAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAD4AAABWUZFeBGNtYXAAAAE0AAAAOgAAAUriLxC2Z2x5ZgAAAXAAAAnnAAAO5OV/F/5oZWFkAAALWAAAACsAAAA2C4eUa2hoZWEAAAuEAAAAGAAAACQOogcfaG10eAAAC5wAAAAPAAAAeNIAAABsb2NhAAALrAAAAD4AAAA+MMgtQm1heHAAAAvsAAAAHwAAACABLwB5bmFtZQAADAwAAAElAAACCtXH9aBwb3N0AAANNAAAAPkAAAF5vawAenicY2BkZ2CcwMDKwMFSyPKMgYHhF4RmjmEIZzzHwMDEwMrMgBUEpLmmMDh8ZPwoyw7iLmSHCDOCCADu/Qo9AAB4nGNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZgYGD7K/v8PUvCREUTzM0DVAwEjG8OIBwCOWgbUAAB4nI1XfVBU1xV/574vlsUlj/14grDs48FuAgaR3X2LEnY3UZSgEkTwAySAgkIwI8bRfFDjTszYCWRMW9lNa4y2meokmq+2k5ia0dpkmknbkWgSSW3GyaaNf0RTx0wxX7A3Pe/tQmIgHXf3vXvvueeee+45v3POXQYY/PCD/CBDGAYkIE2sxg+OXSJmhmH1OaFX6MU5C5PDMCZi5Rg2i+ELGSthwM14NCbgYGSBIZfhFA1H6Zu0OS0NDkMVfg+npdFm+maCvigI0JBIQIMg0BdJGdTj9ylj7nr+b97+Hl8C1+H2xNAvjPqxjIgaKtItICkSnIISeo40QQls4xxjlzgHsnGGvi7BxQiMlSlkPMhfCh67rAUEUQ6CHxW2O7JARCkKnlUQ7UEIyAEQZe4MdDW9xr5OPFuKbubpRxcPDY8da4MOelDfAYJLW+sGKn/Vlmjfv5+NdB4oOfTazJn3tGxZtL9xFNZX7PPRUbjcRg/SMB2EL+gblXn7shbO/WUbF9u/H5XQ9eKO8iMMr9tY35qYoRi20wGuXV/CHaGDk2fdgHwCk5HUXQpCcgHfBV2NjV3jkq4PHTSUSBwuOQALvxPAps6fiftk6P6yJpcm5bB4dFkgoh195mbiSTnkL3jupq7jh4ZZdvjQRVB4PPx3SsVTu5D/6kd85RU66ttXAeuuXYN1E/Y2sMMzZkZiZNRZlRS/ynr9Xr8Cql2RVNbutXslYo7B9ngsFqcDbCQO22PxeIxcpgMxkh6PjUdwkvw6hvRpZeoCFKshDQzJVr++DWyLx+hAXJcGp3TJMV1ME45xCNvHLsWRrpOZSduOoG0zERuIIwuIkhNkBREglQKLiODD45FQE0BTiE214xE2wp8zOt9NjH3GRtDMk7Ehoq2tzCzGxdyMEQJuD0qGIrQ58ApoWQE3D2h1h6zwuB14wYFIDAA5CZ11jT+92gFZ7B7/p7+hV8jFxBl4aG03wLiVXtBbCylLfIJzkPUAvWAw0yvsVdKdBbC6nnruP/RFkHqWJLZ2Auxdtgy+6qTf7l1WswTJcJ6mGVxwXj92UtfU2WXUNX+qBUCxK6D4FR4f/cufG1sZbiSkMcwdMdoxBxTTEXIp4SCXMNhHoFjvTTFP4vkoPReNRmPRCTwa+3qY0DR7qn7Vjh612wRRTaI04HWCnZ+gIzvS/ZJP0+mynphCui4hzmG0id6+aLSv2BV3FQMYDTHrlGQ/SZ+q4ZdF8aLa5Ar8GW3tVNKEj13cF0buMaesx1i9CL/Uo1tM0h+74o9HjQ+UcPaxy8mH9ccwK8KpKA3rHdIUjTKpfIBxuokpxUGBIILm84ATvHh8tAIe2iZj8KvYwUOXawHMVNgxZvlwSa0z8Zkokkxn3ey2nYTsbMO3mPh8cji7zklsPLD9a9f2s2w/uSt/FgSytWzw5bmS3PielU1P56aGrlz6NzlnbT8h/Wtb+1OxIqxBbC9g7kINUbtAEDxsKWSCe46eltCPmaiUxy2IrODIB8EmixaQrU4IAQ6THg6BFpAdWsCquT16DkL9ccIC/FGeP5AuiDExe8bx+QtzWVsmHcm0kdzqecdn5IhRkTc/zfNPm3ns5sw4Pq86l9gyofh6jkTF5iFChjYbbzZQWFvYb8qZAWyGiV9ya+5bFgnzpuWt3FuX8KYMmsiYZepPseBgGhZcOMt0+4Q8fDOTftJjHIuhdaLsFXFM9AclTi9jbGRq8ZvIOykZei77kfo53eoppVPovbGiyV63p/p/dkWETTjmhjTIm8RP284b04bcNYlRsvO6Gp2JeaiIueVHsgJGF2aASlCQLuG8EsBomzb++/AXmwhaOoLhL7iQ4/uc449gWJ56/XWDARn74v/PL1bRBB4TBEyYrqezSkUPHaWjPWCm13ogAzJ66LVpbTEuXccDZlyXxBQ/IrzKOPS7gAkkIyZ0N6joE6M246aDsO1kgucTJ/EdFWA5pbAcTfoSP4hJeBCni7nEn5IclL4kpDgmMMuH8Kpk0+WrBUIeKCyWS0nPVz7NW86Hnl55GxR5KB3+9tszL+wVRulXNTUn6D8SJvIl3PzP46eZST/tQTllTDXTzmxCaTYna7eJAqcWuD1ulBXQsMz5fQEBCfowCF5FVDF/2yysB9OW5veVEtRAFOy41FoeJEiAOZhDiFstsKAwJ8Hijs72q1jWvWx+uKU5XFZDLx189OK8ojW1u0By5dtLHUN/rwkte68PnhnYVbt0bvWiub9w1+f4C0L3hIuXZ8+xlVSt0eb3tgQsmVZnem5R3U0uf/fmFdqiLTvY3nPnet5/v4f9pLB6QX2krnnFQ1tXtN+2ePlAaUNWcfiWwrncn4ca9ml3hFeHHm+u2bq4MhxUZs3bMH/3jgaPUtlVunFjg2/8yRzf3cHsssKZqlnOqyCWworWykW9lXnspk0ffrjpfCreIpjPWbwnFxt3PAkcQgkUuH1auUMf+txJQ0hK1k1zsNaqQdaLMxfoq9AGGxtJQ+fGw53cE/TY8pWhJruZHiMAcCexFS/eGDp6hntiXGE/gvI7163b29ExfiHxNsnqub/a6/QmPoAn4GpZ2c9cZRX5/57IWUNYuubiQBAddhuxAKe6PA5vuV5dkk0VXkMM3zk42W3Awrgka8LQgjZY+tQIffd5+vnHasnHL/cczldyS4r79i6su6Nu9oPQ8lbaid2Pt9/bXtTTynevq7bkPkITV47d+3NugOzo4M3y77Zxbnb2nhWrl0T/kO4u3H1ig33e1lD6JDYjiKkCHOioF0pZv6T6gxxipxLNhFc8xERA48vq5ZfXdL/QV6c8W3PfwjIsZyI3Csvo72e4FpTVwTv/UYNAKtY+8MB84vogZ1Xr5lW38iJdPZ74xunzO4Gk7BARIkytjlyCoPVoIb3IluMfAYRhEoAO2aGXKc2TNAJaSwdzQEeq7jC7TWYF2Y2jrEIXlyVEhunBs5t7K62a7Z6qB0923/+vPT2v7mwpqV/mTEsTiCB5zz735HOP9VbVWtKKZK08uDJ7vcQN02HogGegY5iNnKUHh12ti9/zzHvsauy+tx+e375j94LuA64MV/5MQbZVNT95/re7jlxZVaVuW5Nffsd9TXfOpXcv6m2Bn3x6FgXg/oz+P0h/ce8g2mTEWxVTzzQzrTruNCcRdbu6VY87gLVXc4uSjXfosak7XxWM4oyl+ockmzCFhJXaGwK8e6sCW2T3sLmPnh5qSZtx9JHFL6QBHGnsTjdtWQ8PFygWtQTIkrI84NILfQSC65FUMFsnOYFHEoSmUCD49a4rt3985PTsd8GzB/5KEnzmhhORgVOZPM+yb5KmpRu38jQqviH6826Lrdrxx6DZdFPo2fVbTiy9AUpDJ3SxGYvpK7u+Rhz8D4BCxssAeJxjYGRgYABi/vcdWfH8Nl8ZuNkZQODSliXbkWl2BrA4BwMTiAIAKDsJfgB4nGNgZGBgZwCChWASxGZkQAVyABOTANd4nGNnYGBgHwAMADNUANMAAAAAAAAOAFAAZgCyAMYA5gEeAUgBdAGcAfICLgKOAroDCgOOA7AD6gQ4BHwEuAToBQwFogXoBjYGbAbaB3IAAHicY2BkYGCQY8hlYGcAASYg5gJCBob/YD4DABa6AakAeJxdkE1qg0AYhl8Tk9AIoVDaVSmzahcF87PMARLIMoFAl0ZHY1BHdBJIT9AT9AQ9RQ9Qeqy+yteNMzDzfM+88w0K4BY/cNAMB6N2bUaPPBLukybCLvleeAAPj8JD+hfhMV7hC3u4wxs7OO4NzQSZcI/8Ltwnfwi75E/hAR7wJTyk/xYeY49fYQ/PztM+jbTZ7LY6OWdBJdX/pqs6NYWa+zMxa13oKrA6Uoerqi/JwtpYxZXJ1coUVmeZUWVlTjq0/tHacjmdxuL90OR8O0UEDYMNdtiSEpz5XQGqzlm30kzUdAYFFOb8R7NOZk0q2lwAyz1i7oAr1xoXvrOgtYhZx8wY5KRV269JZ5yGpmzPTjQhvY9je6vEElPOuJP3mWKnP5M3V+YAAAB4nG2P2XLCMAxFfYE4CWlZSveFP8hHOY4gHhw79VLav68hMNOH6kG60mg5YhM22pr9b1vGMMEUM2TgyFGgxBwVbnCLBZZYYY07bHCPBzziCc94wSve8I4PbGeDFj/VydVSOakpG0T0VH1ZHXuq+xhoftHaHq+yV+21o1P7brWLWnvpiExNJpBb/i18q8D9ZxSOcj8oY8iVPjZBBU2+kGIIypokuqTI+cx3qXMq7Z6PQIsx1DYGrQxtLul50YV50rVcCiNJc0enX4qdkNRYe8j2g46+SIMHapXJw1GFdIWH2DfalQknZeTDWsRW2bqlBK3ORIz9AqJUapQAAAA=) format(\"woff\"), url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMlGRXgQAAAEoAAAAVmNtYXDiLxC2AAAB+AAAAUpnbHlm5X8X/gAAA4QAAA7kaGVhZAuHlGsAAADQAAAANmhoZWEOogcfAAAArAAAACRobXR40gAAAAAAAYAAAAB4bG9jYTDILUIAAANEAAAAPm1heHABLwB5AAABCAAAACBuYW1l1cf1oAAAEmgAAAIKcG9zdL2sAHoAABR0AAABeQABAAAHAAAAAKEHAAAAAAAHAAABAAAAAAAAAAAAAAAAAAAAHgABAAAAAQAAD+/W/l8PPPUACwcAAAAAANK0pLcAAAAA0rSktwAAAAAHAAcAAAAACAACAAAAAAAAAAEAAAAeAG0ABwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQcAAZAABQAIBHEE5gAAAPoEcQTmAAADXABXAc4AAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA8QHxHQcAAAAAoQcAAAAAAAABAAAAAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAAAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQACAADxHf//AAAAAPEB//8AAA8AAAEAAAAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AUABmALIAxgDmAR4BSAF0AZwB8gIuAo4CugMKA44DsAPqBDgEfAS4BOgFDAWiBegGNgZsBtoHcgAAAAEAAAAABYsFiwACAAABEQECVQM2BYv76gILAAADAAAAAAZrBmsAAgAOABoAAAkCEwQAAxIABSQAEwIAASYAJzYANxYAFwYAAusBwP5Alf7D/loICAGmAT0BPQGmCAj+Wv7D/f6uBgYBUv39AVIGBv6uAjABUAFQAZsI/lr+w/7D/loICAGmAT0BPQGm+sgGAVL9/QFSBgb+rv39/q4AAAACAAAAAAVABYsAAwAHAAABIREpAREhEQHAASv+1QJVASsBdQQW++oEFgAAAAQAAAAABiAGIAAGABMAJAAnAAABLgEnFRc2NwYHFz4BNSYAJxUWEgEHASERIQERAQYHFT4BNxc3AQcXBNABZVW4A7sCJ3ElKAX+3+Wlzvu3XwFh/p8BKwF1AT5MXU6KO5lf/WCcnAOAZJ4rpbgYGGpbcUacVPQBYziaNP70Aetf/p/+QP6LAfb+wjsdmhJEMZhfBJacnAAAAQAAAAAEqwXWAAUAAAERIQERAQILASoBdv6KBGD+QP6LBKr+iwAAAAIAAAAABWYF1gAGAAwAAAEuAScRPgEBESEBEQEFZQFlVFRl/BEBKwF1/osDgGSeK/2mK54BRP5A/osEqv6LAAADAAAAAAYgBg8ABQAMABoAABMRIQERAQUuAScRPgEDFRYSFwYCBxU2ADcmAOABKwF1/osCxQFlVVVluqXOAwPOpeUBIQUF/t8EYP5A/osEqv6L4GSeK/2mK54C85o0/vS1tf70NJo4AWL19QFiAAAABAAAAAAFiwWLAAUACwARABcAAAEjESE1IwMzNTM1IQEjFSERIwMVMxUzEQILlgF24JaW4P6KA4DgAXaW4OCWAuv+ipYCCuCW/ICWAXYCoJbgAXYABAAAAAAFiwWLAAUACwARABcAAAEzFTMRIRMjFSERIwEzNTM1IRM1IxEhNQF14Jb+iuDgAXaWAcCW4P6KlpYBdgJV4AF2AcCWAXb76uCWAcDg/oqWAAAAAAIAAAAABdYF1gAPABMAAAEhDgEHER4BFyE+ATcRLgEDIREhBUD8gD9VAQFVPwOAP1UBAVU//IADgAXVAVU//IA/VQEBVT8DgD9V++wDgAAABgAAAAAGawZrAAcADAATABsAIAAoAAAJASYnDgEHASUuAScBBSEBNhI3JgUBBgIHFhchBR4BFwEzARYXPgE3AQK+AWROVIfwYQESA4416aH+7gLl/dABelxoAQH8E/7dXGgBAQ4CMP3kNemhARJ4/t1OVIfwYf7uA/ACaBIBAVhQ/id3pfY+/idL/XNkAQGTTU0B+GT+/5NNSEul9j4B2f4IEgEBWFAB2QAAAAUAAAAABmsF1gAPABMAFwAbAB8AAAEhDgEHER4BFyE+ATcRLgEBIRUhASE1IQUhNSE1ITUhBdX7VkBUAgJUQASqQFQCAlT7FgEq/tYC6v0WAuoBwP7WASr9FgLqBdUBVT/8gD9VAQFVPwOAP1X9rJX+1ZWVlZaVAAMAAAAABiAF1gAPACcAPwAAASEOAQcRHgEXIT4BNxEuAQEjNSMVMzUzFRQGByMuAScRPgE3Mx4BFQUjNSMVMzUzFQ4BByMuATURNDY3Mx4BFwWL++o/VAICVD8EFj9UAgJU/WtwlZVwKiDgICoBASog4CAqAgtwlZVwASog4CAqKiDgICoBBdUBVT/8gD9VAQFVPwOAP1X99yXgJUogKgEBKiABKiAqAQEqIEol4CVKICoBASogASogKgEBKiAAAAYAAAAABiAE9gADAAcACwAPABMAFwAAEzM1IxEzNSMRMzUjASE1IREhNSERFSE14JWVlZWVlQErBBX76wQV++sEFQM1lv5AlQHAlf5Alv5AlQJVlZUAAAABAAAAAAYgBmwALgAAASIGBwE2NCcBHgEzPgE3LgEnDgEHFBcBLgEjDgEHHgEXMjY3AQYHHgEXPgE3LgEFQCtKHv3sBwcCDx5OLF9/AgJ/X19/Agf98R5OLF9/AgJ/XyxOHgIUBQEDe1xcewMDewJPHxsBNxk2GQE0HSACf19ffwICf18bGf7NHCACf19ffwIgHP7KFxpcewICe1xdewAAAgAAAAAGWQZrAEMATwAAATY0Jzc+AScDLgEPASYvAS4BJyEOAQ8BBgcnJgYHAwYWHwEGFBcHDgEXEx4BPwEWHwEeARchPgE/ATY3FxY2NxM2JicFLgEnPgE3HgEXDgEFqwUFngoGB5YHGQ26OkQcAxQP/tYPFAIcRTm6DRoHlQcFC50FBZ0LBQeVBxoNujlFHAIUDwEqDxQCHEU5ug0aB5UHBQv9OG+UAgKUb2+UAgKUAzckSiR7CRoNAQMMCQVLLRzGDhEBAREOxhwtSwUJDP79DBsJeyRKJHsJGg3+/QwJBUstHMYOEQEBEQ7GHC1LBQkMAQMMGwlBApRvb5QCApRvb5QAAAAAAQAAAAAGawZrAAsAABMSAAUkABMCACUEAJUIAaYBPQE9AaYICP5a/sP+w/5aA4D+w/5aCAgBpgE9AT0BpggI/loAAAACAAAAAAZrBmsACwAXAAABBAADEgAFJAATAgABJgAnNgA3FgAXBgADgP7D/loICAGmAT0BPQGmCAj+Wv7D/f6uBgYBUv39AVIGBv6uBmsI/lr+w/7D/loICAGmAT0BPQGm+sgGAVL9/QFSBgb+rv39/q4AAAMAAAAABmsGawALABcAIwAAAQQAAxIABSQAEwIAASYAJzYANxYAFwYAAw4BBy4BJz4BNx4BA4D+w/5aCAgBpgE9AT0BpggI/lr+w/3+rgYGAVL9/QFSBgb+rh0Cf19ffwICf19ffwZrCP5a/sP+w/5aCAgBpgE9AT0BpvrIBgFS/f0BUgYG/q79/f6uAk9ffwICf19ffwICfwAAAAQAAAAABiAGIAAPABsAJQApAAABIQ4BBxEeARchPgE3ES4BASM1IxUjETMVMzU7ASEeARcRDgEHITczNSMFi/vqP1QCAlQ/BBY/VAICVP1rcJVwcJVwlgEqICoBASog/tZwlZUGIAJUP/vqP1QCAlQ/BBY/VPyClZUBwLu7ASog/tYgKgFw4AACAAAAAAZrBmsACwAXAAABBAADEgAFJAATAgATBwkBJwkBNwkBFwEDgP7D/loICAGmAT0BPQGmCAj+Wjhp/vT+9GkBC/71aQEMAQxp/vUGawj+Wv7D/sP+WggIAaYBPQE9Aab8EWkBC/71aQEMAQxp/vUBC2n+9AABAAAAAAXWBrYAFgAAAREJAREeARcOAQcuAScjFgAXNgA3JgADgP6LAXW+/QUF/b6+/QWVBgFR/v4BUQYG/q8FiwEq/ov+iwEqBP2/vv0FBf2+/v6vBgYBUf7+AVEAAAABAAAAAAU/BwAAFAAAAREjIgYdASEDIxEhESMRMzU0NjMyBT+dVjwBJSf+/s7//9Ctkwb0/vhISL3+2P0JAvcBKNq6zQAAAAAEAAAAAAaOBwAAMABFAGAAbAAAARQeAxUUBwYEIyImJyY1NDY3NiUuATU0NwYjIiY1NDY3PgEzIQcjHgEVFA4DJzI2NzY1NC4CIyIGBwYVFB4DEzI+AjU0LgEvASYvAiYjIg4DFRQeAgEzFSMVIzUjNTM1MwMfQFtaQDBI/uqfhOU5JVlKgwERIB8VLhaUy0g/TdNwAaKKg0pMMUVGMZImUBo1Ij9qQCpRGS8UKz1ZNjprWzcODxMeChwlThAgNWhvUzZGcX0Da9XVadTUaQPkJEVDUIBOWlN6c1NgPEdRii5SEipAKSQxBMGUUpo2QkBYP4xaSHNHO0A+IRs5ZjqGfVInITtlLmdnUjT8lxo0Xj4ZMCQYIwsXHTgCDiQ4XTtGazsdA2xs29ts2QADAAAAAAaABmwAAwAOACoAAAERIREBFgYrASImNDYyFgERIRE0JiMiBgcGFREhEhAvASEVIz4DMzIWAd3+tgFfAWdUAlJkZ6ZkBI/+t1FWP1UVC/63AgEBAUkCFCpHZz+r0ASP/CED3wEySWJik2Fh/N39yAISaXdFMx4z/dcBjwHwMDCQIDA4H+MAAAEAAAAABpQGAAAxAAABBgcWFRQCDgEEIyAnFjMyNy4BJxYzMjcuAT0BFhcuATU0NxYEFyY1NDYzMhc2NwYHNgaUQ18BTJvW/tKs/vHhIyvhsGmmHyEcKypwk0ROQk4seQFbxgi9hoxgbWAlaV0FaGJFDhyC/v3ut22RBIoCfWEFCxexdQQmAyyOU1hLlbMKJiSGvWYVOXM/CgAAAAEAAAAABYAHAAAiAAABFw4BBwYuAzURIzU+BDc+ATsBESEVIREUHgI3NgUwUBewWWitcE4hqEhyRDAUBQEHBPQBTf6yDSBDME4Bz+0jPgECOFx4eDoCINcaV11vVy0FB/5Y/P36HjQ1HgECAAEAAAAABoAGgABKAAABFAIEIyInNj8BHgEzMj4BNTQuASMiDgMVFBYXFj8BNjc2JyY1NDYzMhYVFAYjIiY3PgI1NCYjIgYVFBcDBhcmAjU0EiQgBBIGgM7+n9FvazsTNhRqPXm+aHfijmm2f1srUE0eCAgGAgYRM9Gpl6mJaz1KDgglFzYyPlYZYxEEzv7OAWEBogFhzgOA0f6fziBdR9MnOYnwlnLIfjpgfYZDaJ4gDCAfGAYXFD1al9mkg6ruVz0jdVkfMkJyVUkx/l5Ga1sBfOnRAWHOzv6fAAAHAAAAAAcABM8ADgAXACoAPQBQAFoAXQAAARE2HgIHDgEHBiYjJyY3FjY3NiYHERQFFjY3PgE3LgEnIwYfAR4BFw4BFxY2Nz4BNy4BJyMGHwEeARcUBhcWNjc+ATcuAScjBh8BHgEXDgEFMz8BFTMRIwYDJRUnAxyEzZRbCA2rgketCAEBqlRoCglxYwF+IiEOIysBAkswHQEECiQ0AgE+YyIhDiIsAQJLMB4BBQokNAE/YyIhDiIsAQJLMB4BBQokNAEBPvmD7kHhqs0s0gEnjgHJAv0FD2a9gIrADwUFAwPDAlVMZ3MF/pUHwgc1HTyWV325PgsJED+oY3G9TAc1HTyWV325PgsJED+oY3G9TAc1HTyWV325PgsJED+oY3G9UmQBZQMMR/61g/kBAAAAAAAQAMYAAQAAAAAAAQAHAAAAAQAAAAAAAgAHAAcAAQAAAAAAAwAHAA4AAQAAAAAABAAHABUAAQAAAAAABQALABwAAQAAAAAABgAHACcAAQAAAAAACgArAC4AAQAAAAAACwATAFkAAwABBAkAAQAOAGwAAwABBAkAAgAOAHoAAwABBAkAAwAOAIgAAwABBAkABAAOAJYAAwABBAkABQAWAKQAAwABBAkABgAOALoAAwABBAkACgBWAMgAAwABBAkACwAmAR5WaWRlb0pTUmVndWxhclZpZGVvSlNWaWRlb0pTVmVyc2lvbiAxLjBWaWRlb0pTR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AVgBpAGQAZQBvAEoAUwBSAGUAZwB1AGwAYQByAFYAaQBkAGUAbwBKAFMAVgBpAGQAZQBvAEoAUwBWAGUAcgBzAGkAbwBuACAAMQAuADAAVgBpAGQAZQBvAEoAUwBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4EcGxheQtwbGF5LWNpcmNsZQVwYXVzZQt2b2x1bWUtbXV0ZQp2b2x1bWUtbG93CnZvbHVtZS1taWQLdm9sdW1lLWhpZ2gQZnVsbHNjcmVlbi1lbnRlcg9mdWxsc2NyZWVuLWV4aXQGc3F1YXJlB3NwaW5uZXIJc3VidGl0bGVzCGNhcHRpb25zCGNoYXB0ZXJzBXNoYXJlA2NvZwZjaXJjbGUOY2lyY2xlLW91dGxpbmUTY2lyY2xlLWlubmVyLWNpcmNsZQJoZAZjYW5jZWwGcmVwbGF5CGZhY2Vib29rBWdwbHVzCGxpbmtlZGluB3R3aXR0ZXIGdHVtYmxyCXBpbnRlcmVzdBFhdWRpby1kZXNjcmlwdGlvbgAAAAAA) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.vjs-icon-play, .video-js .vjs-big-play-button, .video-js .vjs-play-control {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-play:before, .video-js .vjs-big-play-button:before, .video-js .vjs-play-control:before {\n    content: '\\F101'; }\n\n.vjs-icon-play-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-play-circle:before {\n    content: '\\F102'; }\n\n.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing:before {\n    content: '\\F103'; }\n\n.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0,\n.video-js .vjs-volume-menu-button.vjs-vol-0 {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0:before,\n  .video-js .vjs-volume-menu-button.vjs-vol-0:before {\n    content: '\\F104'; }\n\n.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1,\n.video-js .vjs-volume-menu-button.vjs-vol-1 {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1:before,\n  .video-js .vjs-volume-menu-button.vjs-vol-1:before {\n    content: '\\F105'; }\n\n.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2,\n.video-js .vjs-volume-menu-button.vjs-vol-2 {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2:before,\n  .video-js .vjs-volume-menu-button.vjs-vol-2:before {\n    content: '\\F106'; }\n\n.vjs-icon-volume-high, .video-js .vjs-mute-control,\n.video-js .vjs-volume-menu-button {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-high:before, .video-js .vjs-mute-control:before,\n  .video-js .vjs-volume-menu-button:before {\n    content: '\\F107'; }\n\n.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control:before {\n    content: '\\F108'; }\n\n.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control:before {\n    content: '\\F109'; }\n\n.vjs-icon-square {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-square:before {\n    content: '\\F10A'; }\n\n.vjs-icon-spinner {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-spinner:before {\n    content: '\\F10B'; }\n\n.vjs-icon-subtitles, .video-js .vjs-subtitles-button {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-subtitles:before, .video-js .vjs-subtitles-button:before {\n    content: '\\F10C'; }\n\n.vjs-icon-captions, .video-js .vjs-captions-button {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-captions:before, .video-js .vjs-captions-button:before {\n    content: '\\F10D'; }\n\n.vjs-icon-chapters, .video-js .vjs-chapters-button {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-chapters:before, .video-js .vjs-chapters-button:before {\n    content: '\\F10E'; }\n\n.vjs-icon-share {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-share:before {\n    content: '\\F10F'; }\n\n.vjs-icon-cog {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-cog:before {\n    content: '\\F110'; }\n\n.vjs-icon-circle, .video-js .vjs-mouse-display, .video-js .vjs-play-progress, .video-js .vjs-volume-level {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle:before, .video-js .vjs-mouse-display:before, .video-js .vjs-play-progress:before, .video-js .vjs-volume-level:before {\n    content: '\\F111'; }\n\n.vjs-icon-circle-outline {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle-outline:before {\n    content: '\\F112'; }\n\n.vjs-icon-circle-inner-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle-inner-circle:before {\n    content: '\\F113'; }\n\n.vjs-icon-hd {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-hd:before {\n    content: '\\F114'; }\n\n.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button:before {\n    content: '\\F115'; }\n\n.vjs-icon-replay {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-replay:before {\n    content: '\\F116'; }\n\n.vjs-icon-facebook {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-facebook:before {\n    content: '\\F117'; }\n\n.vjs-icon-gplus {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-gplus:before {\n    content: '\\F118'; }\n\n.vjs-icon-linkedin {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-linkedin:before {\n    content: '\\F119'; }\n\n.vjs-icon-twitter {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-twitter:before {\n    content: '\\F11A'; }\n\n.vjs-icon-tumblr {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-tumblr:before {\n    content: '\\F11B'; }\n\n.vjs-icon-pinterest {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-pinterest:before {\n    content: '\\F11C'; }\n\n.vjs-icon-audio-description, .video-js .vjs-descriptions-button {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-audio-description:before, .video-js .vjs-descriptions-button:before {\n    content: '\\F11D'; }\n\n.video-js {\n  display: block;\n  vertical-align: top;\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  font-size: 10px;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  font-family: Arial, Helvetica, sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .video-js:-moz-full-screen {\n    position: absolute; }\n  .video-js:-webkit-full-screen {\n    width: 100% !important;\n    height: 100% !important; }\n\n.video-js *,\n.video-js *:before,\n.video-js *:after {\n  box-sizing: inherit; }\n\n.video-js ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.video-js.vjs-fluid,\n.video-js.vjs-16-9,\n.video-js.vjs-4-3 {\n  width: 100%;\n  max-width: 100%;\n  height: 0; }\n\n.video-js.vjs-16-9 {\n  padding-top: 56.25%; }\n\n.video-js.vjs-4-3 {\n  padding-top: 75%; }\n\n.video-js.vjs-fill {\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow-y: auto; }\n\n.vjs-full-window .video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0; }\n\n.video-js.vjs-fullscreen {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important; }\n\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none; }\n\n.vjs-hidden {\n  display: none !important; }\n\n.vjs-disabled {\n  opacity: 0.5;\n  cursor: default; }\n\n.video-js .vjs-offscreen {\n  height: 1px;\n  left: -9999px;\n  position: absolute;\n  top: 0;\n  width: 1px; }\n\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1;\n  visibility: visible; }\n\n.vjs-no-js {\n  padding: 20px;\n  color: #fff;\n  background-color: #000;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  width: 300px;\n  height: 150px;\n  margin: 0px auto; }\n\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #66A8CC; }\n\n.video-js .vjs-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.5em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em;\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.vjs-big-play-centered .vjs-big-play-button {\n  top: 50%;\n  left: 50%;\n  margin-top: -0.75em;\n  margin-left: -1.5em; }\n\n.video-js:hover .vjs-big-play-button,\n.video-js .vjs-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  -o-transition: all 0s;\n  transition: all 0s; }\n\n.vjs-controls-disabled .vjs-big-play-button,\n.vjs-has-started .vjs-big-play-button,\n.vjs-using-native-controls .vjs-big-play-button,\n.vjs-error .vjs-big-play-button {\n  display: none; }\n\n.video-js button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  overflow: visible;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.video-js .vjs-control.vjs-close-button {\n  cursor: pointer;\n  height: 3em;\n  position: absolute;\n  right: 0;\n  top: 0.5em;\n  z-index: 2; }\n\n.vjs-menu-button {\n  cursor: pointer; }\n\n.vjs-menu-button.vjs-disabled {\n  cursor: default; }\n\n.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {\n  display: none; }\n\n.vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: auto; }\n\n.vjs-scrubbing .vjs-menu-button:hover .vjs-menu {\n  display: none; }\n\n.vjs-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase; }\n\n.vjs-menu li:focus,\n.vjs-menu li:hover {\n  outline: 0;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5); }\n\n.vjs-menu li.vjs-selected,\n.vjs-menu li.vjs-selected:focus,\n.vjs-menu li.vjs-selected:hover {\n  background-color: #fff;\n  color: #2B333F; }\n\n.vjs-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default; }\n\n.vjs-menu-button-popup .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7); }\n\n.vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em; }\n\n.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu,\n.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {\n  display: block; }\n\n.video-js .vjs-menu-button-inline {\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s;\n  overflow: hidden; }\n\n.video-js .vjs-menu-button-inline:before {\n  width: 2.222222222em; }\n\n.video-js .vjs-menu-button-inline:hover,\n.video-js .vjs-menu-button-inline:focus,\n.video-js .vjs-menu-button-inline.vjs-slider-active,\n.video-js.vjs-no-flex .vjs-menu-button-inline {\n  width: 12em; }\n\n.video-js .vjs-menu-button-inline.vjs-slider-active {\n  -webkit-transition: none;\n  -moz-transition: none;\n  -o-transition: none;\n  transition: none; }\n\n.vjs-menu-button-inline .vjs-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.vjs-menu-button-inline:hover .vjs-menu,\n.vjs-menu-button-inline:focus .vjs-menu,\n.vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  display: block;\n  opacity: 1; }\n\n.vjs-no-flex .vjs-menu-button-inline .vjs-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto; }\n\n.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  width: auto; }\n\n.vjs-menu-button-inline .vjs-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden; }\n\n.video-js .vjs-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3.0em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7); }\n\n.vjs-has-started .vjs-control-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  -moz-transition: visibility 0.1s, opacity 0.1s;\n  -o-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s; }\n\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  -moz-transition: visibility 1s, opacity 1s;\n  -o-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.vjs-controls-disabled .vjs-control-bar,\n.vjs-using-native-controls .vjs-control-bar,\n.vjs-error .vjs-control-bar {\n  display: none !important; }\n\n.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible; }\n\n@media \\0screen {\n  .vjs-user-inactive.vjs-playing .vjs-control-bar :before {\n    content: \"\"; } }\n\n.vjs-has-started.vjs-no-flex .vjs-control-bar {\n  display: table; }\n\n.video-js .vjs-control {\n  outline: none;\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n  .video-js .vjs-control:before {\n    font-size: 1.8em;\n    line-height: 1.67; }\n\n.video-js .vjs-control:focus:before,\n.video-js .vjs-control:hover:before,\n.video-js .vjs-control:focus {\n  text-shadow: 0em 0em 1em white; }\n\n.video-js .vjs-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.vjs-no-flex .vjs-control {\n  display: table-cell;\n  vertical-align: middle; }\n\n.video-js .vjs-custom-control-spacer {\n  display: none; }\n\n.video-js .vjs-progress-control {\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  min-width: 4em; }\n\n.vjs-live .vjs-progress-control {\n  display: none; }\n\n.video-js .vjs-progress-holder {\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  height: 0.3em; }\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder {\n  font-size: 1.666666666666666666em; }\n\n/* If we let the font size grow as much as everything else, the current time tooltip ends up\n ginormous. If you'd like to enable the current time tooltip all the time, this should be disabled\n to avoid a weird hitch when you roll off the hover. */\n.video-js .vjs-progress-control:hover .vjs-time-tooltip,\n.video-js .vjs-progress-control:hover .vjs-mouse-display:after,\n.video-js .vjs-progress-control:hover .vjs-play-progress:after {\n  font-family: Arial, Helvetica, sans-serif;\n  visibility: visible;\n  font-size: 0.6em; }\n\n.video-js .vjs-progress-holder .vjs-play-progress,\n.video-js .vjs-progress-holder .vjs-load-progress,\n.video-js .vjs-progress-holder .vjs-tooltip-progress-bar,\n.video-js .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 0.3em;\n  margin: 0;\n  padding: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n\n.video-js .vjs-mouse-display:before {\n  display: none; }\n\n.video-js .vjs-play-progress {\n  background-color: #fff; }\n  .video-js .vjs-play-progress:before {\n    position: absolute;\n    top: -0.333333333333333em;\n    right: -0.5em;\n    font-size: 0.9em; }\n\n.video-js .vjs-time-tooltip,\n.video-js .vjs-mouse-display:after,\n.video-js .vjs-play-progress:after {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  right: -1.9em;\n  font-size: 0.9em;\n  color: #000;\n  content: attr(data-current-time);\n  padding: 6px 8px 8px 8px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em; }\n\n.video-js .vjs-time-tooltip,\n.video-js .vjs-play-progress:before,\n.video-js .vjs-play-progress:after {\n  z-index: 1; }\n\n.video-js .vjs-progress-control .vjs-keep-tooltips-inside:after {\n  display: none; }\n\n.video-js .vjs-load-progress {\n  background: #bfc7d3;\n  background: rgba(115, 133, 159, 0.5); }\n\n.video-js .vjs-load-progress div {\n  background: white;\n  background: rgba(115, 133, 159, 0.75); }\n\n.video-js.vjs-no-flex .vjs-progress-control {\n  width: auto; }\n\n.video-js .vjs-time-tooltip {\n  display: inline-block;\n  height: 2.4em;\n  position: relative;\n  float: right;\n  right: -1.9em; }\n\n.vjs-tooltip-progress-bar {\n  visibility: hidden; }\n\n.video-js .vjs-progress-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1; }\n\n.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  z-index: 0; }\n\n.video-js .vjs-progress-control:hover .vjs-mouse-display {\n  display: block; }\n\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display,\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display:after {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  -moz-transition: visibility 1s, opacity 1s;\n  -o-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display,\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display:after {\n  display: none; }\n\n.vjs-mouse-display .vjs-time-tooltip,\n.video-js .vjs-progress-control .vjs-mouse-display:after {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.video-js .vjs-slider {\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5); }\n\n.video-js .vjs-slider:focus {\n  text-shadow: 0em 0em 1em white;\n  -webkit-box-shadow: 0 0 1em #fff;\n  -moz-box-shadow: 0 0 1em #fff;\n  box-shadow: 0 0 1em #fff; }\n\n.video-js .vjs-mute-control,\n.video-js .vjs-volume-menu-button {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.video-js .vjs-volume-control {\n  width: 5em;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.video-js .vjs-volume-bar {\n  margin: 1.35em 0.45em; }\n\n.vjs-volume-bar.vjs-slider-horizontal {\n  width: 5em;\n  height: 0.3em; }\n\n.vjs-volume-bar.vjs-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto; }\n\n.video-js .vjs-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff; }\n  .video-js .vjs-volume-level:before {\n    position: absolute;\n    font-size: 0.9em; }\n\n.vjs-slider-vertical .vjs-volume-level {\n  width: 0.3em; }\n  .vjs-slider-vertical .vjs-volume-level:before {\n    top: -0.5em;\n    left: -0.3em; }\n\n.vjs-slider-horizontal .vjs-volume-level {\n  height: 0.3em; }\n  .vjs-slider-horizontal .vjs-volume-level:before {\n    top: -0.3em;\n    right: -0.5em; }\n\n.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {\n  height: 100%; }\n\n.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {\n  width: 100%; }\n\n.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent; }\n\n.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {\n  left: 0.5em;\n  height: 8em; }\n\n.vjs-menu-button-popup.vjs-volume-menu-button-horizontal .vjs-menu {\n  left: -2em; }\n\n.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu-content {\n  height: 0;\n  width: 0;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.vjs-volume-menu-button-vertical:hover .vjs-menu-content,\n.vjs-volume-menu-button-vertical:focus .vjs-menu-content,\n.vjs-volume-menu-button-vertical.vjs-slider-active .vjs-menu-content,\n.vjs-volume-menu-button-vertical .vjs-lock-showing .vjs-menu-content {\n  height: 8em;\n  width: 2.9em; }\n\n.vjs-volume-menu-button-horizontal:hover .vjs-menu-content,\n.vjs-volume-menu-button-horizontal:focus .vjs-menu-content,\n.vjs-volume-menu-button-horizontal .vjs-slider-active .vjs-menu-content,\n.vjs-volume-menu-button-horizontal .vjs-lock-showing .vjs-menu-content {\n  height: 2.9em;\n  width: 8em; }\n\n.vjs-volume-menu-button.vjs-menu-button-inline .vjs-menu-content {\n  background-color: transparent !important; }\n\n.vjs-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%; }\n\n.vjs-poster img {\n  display: block;\n  vertical-align: middle;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%; }\n\n.vjs-has-started .vjs-poster {\n  display: none; }\n\n.vjs-audio.vjs-has-started .vjs-poster {\n  display: block; }\n\n.vjs-controls-disabled .vjs-poster {\n  display: none; }\n\n.vjs-using-native-controls .vjs-poster {\n  display: none; }\n\n.video-js .vjs-live-control {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  font-size: 1em;\n  line-height: 3em; }\n\n.vjs-no-flex .vjs-live-control {\n  display: table-cell;\n  width: auto;\n  text-align: left; }\n\n.video-js .vjs-time-control {\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em; }\n\n.vjs-live .vjs-time-control {\n  display: none; }\n\n.video-js .vjs-current-time,\n.vjs-no-flex .vjs-current-time {\n  display: none; }\n\n.video-js .vjs-duration,\n.vjs-no-flex .vjs-duration {\n  display: none; }\n\n.vjs-time-divider {\n  display: none;\n  line-height: 3em; }\n\n.vjs-live .vjs-time-divider {\n  display: none; }\n\n.video-js .vjs-play-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-text-track-display {\n  position: absolute;\n  bottom: 3em;\n  left: 0;\n  right: 0;\n  top: 0;\n  pointer-events: none; }\n\n.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {\n  bottom: 1em; }\n\n.video-js .vjs-text-track {\n  font-size: 1.4em;\n  text-align: center;\n  margin-bottom: 0.1em;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.vjs-subtitles {\n  color: #fff; }\n\n.vjs-captions {\n  color: #fc6; }\n\n.vjs-tt-cue {\n  display: block; }\n\nvideo::-webkit-media-text-track-display {\n  -moz-transform: translateY(-3em);\n  -ms-transform: translateY(-3em);\n  -o-transform: translateY(-3em);\n  -webkit-transform: translateY(-3em);\n  transform: translateY(-3em); }\n\n.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {\n  -moz-transform: translateY(-1.5em);\n  -ms-transform: translateY(-1.5em);\n  -o-transform: translateY(-1.5em);\n  -webkit-transform: translateY(-1.5em);\n  transform: translateY(-1.5em); }\n\n.video-js .vjs-fullscreen-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-playback-rate .vjs-playback-rate-value {\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.vjs-playback-rate .vjs-menu {\n  width: 4em;\n  left: 0em; }\n\n.vjs-error .vjs-error-display .vjs-modal-dialog-content {\n  font-size: 1.4em;\n  text-align: center; }\n\n.vjs-error .vjs-error-display:before {\n  color: #fff;\n  content: 'X';\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 4em;\n  left: 0;\n  line-height: 1;\n  margin-top: -0.5em;\n  position: absolute;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center;\n  top: 50%;\n  vertical-align: middle;\n  width: 100%; }\n\n.vjs-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px; }\n\n.vjs-seeking .vjs-loading-spinner,\n.vjs-waiting .vjs-loading-spinner {\n  display: block; }\n\n.vjs-loading-spinner:before,\n.vjs-loading-spinner:after {\n  content: \"\";\n  position: absolute;\n  margin: -6px;\n  box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white; }\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:after {\n  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite; }\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:before {\n  border-top-color: white; }\n\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s; }\n\n@keyframes vjs-spinner-spin {\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes vjs-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n@-webkit-keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n.vjs-chapters-button .vjs-menu ul {\n  width: 24em; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer {\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer {\n  width: auto; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-menu-button,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button {\n  display: none; }\n\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-menu-button,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button {\n  display: none; }\n\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button {\n  display: none; }\n\n.vjs-caption-settings {\n  position: relative;\n  top: 1em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.75);\n  color: #fff;\n  margin: 0 auto;\n  padding: 0.5em;\n  height: 15em;\n  font-size: 12px;\n  width: 40em; }\n\n.vjs-caption-settings .vjs-tracksettings {\n  top: 0;\n  bottom: 2em;\n  left: 0;\n  right: 0;\n  position: absolute;\n  overflow: auto; }\n\n.vjs-caption-settings .vjs-tracksettings-colors,\n.vjs-caption-settings .vjs-tracksettings-font {\n  float: left; }\n\n.vjs-caption-settings .vjs-tracksettings-colors:after,\n.vjs-caption-settings .vjs-tracksettings-font:after,\n.vjs-caption-settings .vjs-tracksettings-controls:after {\n  clear: both; }\n\n.vjs-caption-settings .vjs-tracksettings-controls {\n  position: absolute;\n  bottom: 1em;\n  right: 1em; }\n\n.vjs-caption-settings .vjs-tracksetting {\n  margin: 5px;\n  padding: 3px;\n  min-height: 40px; }\n\n.vjs-caption-settings .vjs-tracksetting label {\n  display: block;\n  width: 100px;\n  margin-bottom: 5px; }\n\n.vjs-caption-settings .vjs-tracksetting span {\n  display: inline;\n  margin-left: 5px; }\n\n.vjs-caption-settings .vjs-tracksetting > div {\n  margin-bottom: 5px;\n  min-height: 20px; }\n\n.vjs-caption-settings .vjs-tracksetting > div:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  min-height: 0; }\n\n.vjs-caption-settings label > input {\n  margin-right: 10px; }\n\n.vjs-caption-settings input[type=\"button\"] {\n  width: 40px;\n  height: 40px; }\n\n.video-js .vjs-modal-dialog {\n  background: rgba(0, 0, 0, 0.8);\n  background: -webkit-linear-gradient(-90deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0)); }\n\n.vjs-modal-dialog .vjs-modal-dialog-content {\n  font-size: 1.2em;\n  line-height: 1.5;\n  padding: 20px 24px;\n  z-index: 1; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,lBYAAPAVAAABAAIAAAAAAAIABQMAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA/tbvDwAAAAAAAAAAAAAAAAAAAAAAAA4AVgBpAGQAZQBvAEoAUwAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBWAGkAZABlAG8ASgBTAAAAAAAAAQAAAAoAgAADACBPUy8yUZFeBAAAASgAAABWY21hcOIvELYAAAH4AAABSmdseWblfxf+AAADhAAADuRoZWFkC4eUawAAANAAAAA2aGhlYQ6iBx8AAACsAAAAJGhtdHjSAAAAAAABgAAAAHhsb2NhMMgtQgAAA0QAAAA+bWF4cAEvAHkAAAEIAAAAIG5hbWXVx/WgAAASaAAAAgpwb3N0vawAegAAFHQAAAF5AAEAAAcAAAAAoQcAAAAAAAcAAAEAAAAAAAAAAAAAAAAAAAAeAAEAAAABAAAP79b+Xw889QALBwAAAAAA0rSktwAAAADStKS3AAAAAAcABwAAAAAIAAIAAAAAAAAAAQAAAB4AbQAHAAAAAAACAAAACgAKAAAA/wAAAAAAAAABBwABkAAFAAgEcQTmAAAA+gRxBOYAAANcAFcBzgAAAgAFAwAAAAAAAAAAAAAAAAAAAAAAAAAAAABQZkVkAEDxAfEdBwAAAAChBwAAAAAAAAEAAAAAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAAAAADAAAAAwAAABwAAQAAAAAARAADAAEAAAAcAAQAKAAAAAYABAABAAIAAPEd//8AAAAA8QH//wAADwAAAQAAAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgBQAGYAsgDGAOYBHgFIAXQBnAHyAi4CjgK6AwoDjgOwA+oEOAR8BLgE6AUMBaIF6AY2BmwG2gdyAAAAAQAAAAAFiwWLAAIAAAERAQJVAzYFi/vqAgsAAAMAAAAABmsGawACAA4AGgAACQITBAADEgAFJAATAgABJgAnNgA3FgAXBgAC6wHA/kCV/sP+WggIAaYBPQE9AaYICP5a/sP9/q4GBgFS/f0BUgYG/q4CMAFQAVABmwj+Wv7D/sP+WggIAaYBPQE9Aab6yAYBUv39AVIGBv6u/f3+rgAAAAIAAAAABUAFiwADAAcAAAEhESkBESERAcABK/7VAlUBKwF1BBb76gQWAAAABAAAAAAGIAYgAAYAEwAkACcAAAEuAScVFzY3BgcXPgE1JgAnFRYSAQcBIREhAREBBgcVPgE3FzcBBxcE0AFlVbgDuwIncSUoBf7f5aXO+7dfAWH+nwErAXUBPkxdToo7mV/9YJycA4BkniuluBgYaltxRpxU9AFjOJo0/vQB61/+n/5A/osB9v7COx2aEkQxmF8ElpycAAABAAAAAASrBdYABQAAAREhAREBAgsBKgF2/ooEYP5A/osEqv6LAAAAAgAAAAAFZgXWAAYADAAAAS4BJxE+AQERIQERAQVlAWVUVGX8EQErAXX+iwOAZJ4r/aYrngFE/kD+iwSq/osAAAMAAAAABiAGDwAFAAwAGgAAExEhAREBBS4BJxE+AQMVFhIXBgIHFTYANyYA4AErAXX+iwLFAWVVVWW6pc4DA86l5QEhBQX+3wRg/kD+iwSq/ovgZJ4r/aYrngLzmjT+9LW1/vQ0mjgBYvX1AWIAAAAEAAAAAAWLBYsABQALABEAFwAAASMRITUjAzM1MzUhASMVIREjAxUzFTMRAguWAXbglpbg/ooDgOABdpbg4JYC6/6KlgIK4Jb8gJYBdgKgluABdgAEAAAAAAWLBYsABQALABEAFwAAATMVMxEhEyMVIREjATM1MzUhEzUjESE1AXXglv6K4OABdpYBwJbg/oqWlgF2AlXgAXYBwJYBdvvq4JYBwOD+ipYAAAAAAgAAAAAF1gXWAA8AEwAAASEOAQcRHgEXIT4BNxEuAQMhESEFQPyAP1UBAVU/A4A/VQEBVT/8gAOABdUBVT/8gD9VAQFVPwOAP1X77AOAAAAGAAAAAAZrBmsABwAMABMAGwAgACgAAAkBJicOAQcBJS4BJwEFIQE2EjcmBQEGAgcWFyEFHgEXATMBFhc+ATcBAr4BZE5Uh/BhARIDjjXpof7uAuX90AF6XGgBAfwT/t1caAEBDgIw/eQ16aEBEnj+3U5Uh/Bh/u4D8AJoEgEBWFD+J3el9j7+J0v9c2QBAZNNTQH4ZP7/k01IS6X2PgHZ/ggSAQFYUAHZAAAABQAAAAAGawXWAA8AEwAXABsAHwAAASEOAQcRHgEXIT4BNxEuAQEhFSEBITUhBSE1ITUhNSEF1ftWQFQCAlRABKpAVAICVPsWASr+1gLq/RYC6gHA/tYBKv0WAuoF1QFVP/yAP1UBAVU/A4A/Vf2slf7VlZWVlpUAAwAAAAAGIAXWAA8AJwA/AAABIQ4BBxEeARchPgE3ES4BASM1IxUzNTMVFAYHIy4BJxE+ATczHgEVBSM1IxUzNTMVDgEHIy4BNRE0NjczHgEXBYv76j9UAgJUPwQWP1QCAlT9a3CVlXAqIOAgKgEBKiDgICoCC3CVlXABKiDgICoqIOAgKgEF1QFVP/yAP1UBAVU/A4A/Vf33JeAlSiAqAQEqIAEqICoBASogSiXgJUogKgEBKiABKiAqAQEqIAAABgAAAAAGIAT2AAMABwALAA8AEwAXAAATMzUjETM1IxEzNSMBITUhESE1IREVITXglZWVlZWVASsEFfvrBBX76wQVAzWW/kCVAcCV/kCW/kCVAlWVlQAAAAEAAAAABiAGbAAuAAABIgYHATY0JwEeATM+ATcuAScOAQcUFwEuASMOAQceARcyNjcBBgceARc+ATcuAQVAK0oe/ewHBwIPHk4sX38CAn9fX38CB/3xHk4sX38CAn9fLE4eAhQFAQN7XFx7AwN7Ak8fGwE3GTYZATQdIAJ/X19/AgJ/XxsZ/s0cIAJ/X19/AiAc/soXGlx7AgJ7XF17AAACAAAAAAZZBmsAQwBPAAABNjQnNz4BJwMuAQ8BJi8BLgEnIQ4BDwEGBycmBgcDBhYfAQYUFwcOARcTHgE/ARYfAR4BFyE+AT8BNjcXFjY3EzYmJwUuASc+ATceARcOAQWrBQWeCgYHlgcZDbo6RBwDFA/+1g8UAhxFOboNGgeVBwULnQUFnQsFB5UHGg26OUUcAhQPASoPFAIcRTm6DRoHlQcFC/04b5QCApRvb5QCApQDNyRKJHsJGg0BAwwJBUstHMYOEQEBEQ7GHC1LBQkM/v0MGwl7JEokewkaDf79DAkFSy0cxg4RAQERDsYcLUsFCQwBAwwbCUEClG9vlAIClG9vlAAAAAABAAAAAAZrBmsACwAAExIABSQAEwIAJQQAlQgBpgE9AT0BpggI/lr+w/7D/loDgP7D/loICAGmAT0BPQGmCAj+WgAAAAIAAAAABmsGawALABcAAAEEAAMSAAUkABMCAAEmACc2ADcWABcGAAOA/sP+WggIAaYBPQE9AaYICP5a/sP9/q4GBgFS/f0BUgYG/q4Gawj+Wv7D/sP+WggIAaYBPQE9Aab6yAYBUv39AVIGBv6u/f3+rgAAAwAAAAAGawZrAAsAFwAjAAABBAADEgAFJAATAgABJgAnNgA3FgAXBgADDgEHLgEnPgE3HgEDgP7D/loICAGmAT0BPQGmCAj+Wv7D/f6uBgYBUv39AVIGBv6uHQJ/X19/AgJ/X19/BmsI/lr+w/7D/loICAGmAT0BPQGm+sgGAVL9/QFSBgb+rv39/q4CT19/AgJ/X19/AgJ/AAAABAAAAAAGIAYgAA8AGwAlACkAAAEhDgEHER4BFyE+ATcRLgEBIzUjFSMRMxUzNTsBIR4BFxEOAQchNzM1IwWL++o/VAICVD8EFj9UAgJU/WtwlXBwlXCWASogKgEBKiD+1nCVlQYgAlQ/++o/VAICVD8EFj9U/IKVlQHAu7sBKiD+1iAqAXDgAAIAAAAABmsGawALABcAAAEEAAMSAAUkABMCABMHCQEnCQE3CQEXAQOA/sP+WggIAaYBPQE9AaYICP5aOGn+9P70aQEL/vVpAQwBDGn+9QZrCP5a/sP+w/5aCAgBpgE9AT0BpvwRaQEL/vVpAQwBDGn+9QELaf70AAEAAAAABdYGtgAWAAABEQkBER4BFw4BBy4BJyMWABc2ADcmAAOA/osBdb79BQX9vr79BZUGAVH+/gFRBgb+rwWLASr+i/6LASoE/b++/QUF/b7+/q8GBgFR/v4BUQAAAAEAAAAABT8HAAAUAAABESMiBh0BIQMjESERIxEzNTQ2MzIFP51WPAElJ/7+zv//0K2TBvT++EhIvf7Y/QkC9wEo2rrNAAAAAAQAAAAABo4HAAAwAEUAYABsAAABFB4DFRQHBgQjIiYnJjU0Njc2JS4BNTQ3BiMiJjU0Njc+ATMhByMeARUUDgMnMjY3NjU0LgIjIgYHBhUUHgMTMj4CNTQuAS8BJi8CJiMiDgMVFB4CATMVIxUjNSM1MzUzAx9AW1pAMEj+6p+E5TklWUqDAREgHxUuFpTLSD9N03ABooqDSkwxRUYxkiZQGjUiP2pAKlEZLxQrPVk2OmtbNw4PEx4KHCVOECA1aG9TNkZxfQNr1dVp1NRpA+QkRUNQgE5aU3pzU2A8R1GKLlISKkApJDEEwZRSmjZCQFg/jFpIc0c7QD4hGzlmOoZ9UichO2UuZ2dSNPyXGjRePhkwJBgjCxcdOAIOJDhdO0ZrOx0DbGzb22zZAAMAAAAABoAGbAADAA4AKgAAAREhEQEWBisBIiY0NjIWAREhETQmIyIGBwYVESESEC8BIRUjPgMzMhYB3f62AV8BZ1QCUmRnpmQEj/63UVY/VRUL/rcCAQEBSQIUKkdnP6vQBI/8IQPfATJJYmKTYWH83f3IAhJpd0UzHjP91wGPAfAwMJAgMDgf4wAAAQAAAAAGlAYAADEAAAEGBxYVFAIOAQQjICcWMzI3LgEnFjMyNy4BPQEWFy4BNTQ3FgQXJjU0NjMyFzY3Bgc2BpRDXwFMm9b+0qz+8eEjK+GwaaYfIRwrKnCTRE5CTix5AVvGCL2GjGBtYCVpXQVoYkUOHIL+/e63bZEEigJ9YQULF7F1BCYDLI5TWEuVswomJIa9ZhU5cz8KAAAAAQAAAAAFgAcAACIAAAEXDgEHBi4DNREjNT4ENz4BOwERIRUhERQeAjc2BTBQF7BZaK1wTiGoSHJEMBQFAQcE9AFN/rINIEMwTgHP7SM+AQI4XHh4OgIg1xpXXW9XLQUH/lj8/foeNDUeAQIAAQAAAAAGgAaAAEoAAAEUAgQjIic2PwEeATMyPgE1NC4BIyIOAxUUFhcWPwE2NzYnJjU0NjMyFhUUBiMiJjc+AjU0JiMiBhUUFwMGFyYCNTQSJCAEEgaAzv6f0W9rOxM2FGo9eb5od+KOabZ/WytQTR4ICAYCBhEz0amXqYlrPUoOCCUXNjI+VhljEQTO/s4BYQGiAWHOA4DR/p/OIF1H0yc5ifCWcsh+OmB9hkNoniAMIB8YBhcUPVqX2aSDqu5XPSN1WR8yQnJVSTH+XkZrWwF86dEBYc7O/p8AAAcAAAAABwAEzwAOABcAKgA9AFAAWgBdAAABETYeAgcOAQcGJiMnJjcWNjc2JgcRFAUWNjc+ATcuAScjBh8BHgEXDgEXFjY3PgE3LgEnIwYfAR4BFxQGFxY2Nz4BNy4BJyMGHwEeARcOAQUzPwEVMxEjBgMlFScDHITNlFsIDauCR60IAQGqVGgKCXFjAX4iIQ4jKwECSzAdAQQKJDQCAT5jIiEOIiwBAkswHgEFCiQ0AT9jIiEOIiwBAkswHgEFCiQ0AQE++YPuQeGqzSzSASeOAckC/QUPZr2AisAPBQUDA8MCVUxncwX+lQfCBzUdPJZXfbk+CwkQP6hjcb1MBzUdPJZXfbk+CwkQP6hjcb1MBzUdPJZXfbk+CwkQP6hjcb1SZAFlAwxH/rWD+QEAAAAAABAAxgABAAAAAAABAAcAAAABAAAAAAACAAcABwABAAAAAAADAAcADgABAAAAAAAEAAcAFQABAAAAAAAFAAsAHAABAAAAAAAGAAcAJwABAAAAAAAKACsALgABAAAAAAALABMAWQADAAEECQABAA4AbAADAAEECQACAA4AegADAAEECQADAA4AiAADAAEECQAEAA4AlgADAAEECQAFABYApAADAAEECQAGAA4AugADAAEECQAKAFYAyAADAAEECQALACYBHlZpZGVvSlNSZWd1bGFyVmlkZW9KU1ZpZGVvSlNWZXJzaW9uIDEuMFZpZGVvSlNHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBWAGkAZABlAG8ASgBTAFIAZQBnAHUAbABhAHIAVgBpAGQAZQBvAEoAUwBWAGkAZABlAG8ASgBTAFYAZQByAHMAaQBvAG4AIAAxAC4AMABWAGkAZABlAG8ASgBTAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgRwbGF5C3BsYXktY2lyY2xlBXBhdXNlC3ZvbHVtZS1tdXRlCnZvbHVtZS1sb3cKdm9sdW1lLW1pZAt2b2x1bWUtaGlnaBBmdWxsc2NyZWVuLWVudGVyD2Z1bGxzY3JlZW4tZXhpdAZzcXVhcmUHc3Bpbm5lcglzdWJ0aXRsZXMIY2FwdGlvbnMIY2hhcHRlcnMFc2hhcmUDY29nBmNpcmNsZQ5jaXJjbGUtb3V0bGluZRNjaXJjbGUtaW5uZXItY2lyY2xlAmhkBmNhbmNlbAZyZXBsYXkIZmFjZWJvb2sFZ3BsdXMIbGlua2VkaW4HdHdpdHRlcgZ0dW1ibHIJcGludGVyZXN0EWF1ZGlvLWRlc2NyaXB0aW9uAAAAAAA="

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/**
 * @license
 * Video.js 5.9.2 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */

(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = _dereq_('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdG9wTGV2ZWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fVxudmFyIG1pbkRvYyA9IHJlcXVpcmUoJ21pbi1kb2N1bWVudCcpO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIHZhciBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J107XG5cbiAgICBpZiAoIWRvY2N5KSB7XG4gICAgICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXSA9IG1pbkRvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY2N5O1xufVxuIl19
},{"min-document":3}],2:[function(_dereq_,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzZWxmO1xufSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHt9O1xufVxuIl19
},{}],3:[function(_dereq_,module,exports){

},{}],4:[function(_dereq_,module,exports){
var getNative = _dereq_('../internal/getNative');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeNow = getNative(Date, 'now');

/**
 * Gets the number of milliseconds that have elapsed since the Unix epoch
 * (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @category Date
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => logs the number of milliseconds it took for the deferred function to be invoked
 */
var now = nativeNow || function() {
  return new Date().getTime();
};

module.exports = now;

},{"../internal/getNative":20}],5:[function(_dereq_,module,exports){
var isObject = _dereq_('../lang/isObject'),
    now = _dereq_('../date/now');

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed invocations. Provide an options object to indicate that `func`
 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
 * Subsequent calls to the debounced function return the result of the last
 * `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the the debounced function is
 * invoked more than once during the `wait` timeout.
 *
 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading
 *  edge of the timeout.
 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
 *  delayed before it's invoked.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
 *  edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // avoid costly calculations while the window size is in flux
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // ensure `batchLog` is invoked once after 1 second of debounced calls
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', _.debounce(batchLog, 250, {
 *   'maxWait': 1000
 * }));
 *
 * // cancel a debounced call
 * var todoChanges = _.debounce(batchLog, 1000);
 * Object.observe(models.todo, todoChanges);
 *
 * Object.observe(models, function(changes) {
 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
 *     todoChanges.cancel();
 *   }
 * }, ['delete']);
 *
 * // ...at some point `models.todo` is changed
 * models.todo.completed = true;
 *
 * // ...before 1 second has passed `models.todo` is deleted
 * // which cancels the debounced `todoChanges` call
 * delete models.todo;
 */
function debounce(func, wait, options) {
  var args,
      maxTimeoutId,
      result,
      stamp,
      thisArg,
      timeoutId,
      trailingCall,
      lastCalled = 0,
      maxWait = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = wait < 0 ? 0 : (+wait || 0);
  if (options === true) {
    var leading = true;
    trailing = false;
  } else if (isObject(options)) {
    leading = !!options.leading;
    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (maxTimeoutId) {
      clearTimeout(maxTimeoutId);
    }
    lastCalled = 0;
    maxTimeoutId = timeoutId = trailingCall = undefined;
  }

  function complete(isCalled, id) {
    if (id) {
      clearTimeout(id);
    }
    maxTimeoutId = timeoutId = trailingCall = undefined;
    if (isCalled) {
      lastCalled = now();
      result = func.apply(thisArg, args);
      if (!timeoutId && !maxTimeoutId) {
        args = thisArg = undefined;
      }
    }
  }

  function delayed() {
    var remaining = wait - (now() - stamp);
    if (remaining <= 0 || remaining > wait) {
      complete(trailingCall, maxTimeoutId);
    } else {
      timeoutId = setTimeout(delayed, remaining);
    }
  }

  function maxDelayed() {
    complete(trailing, timeoutId);
  }

  function debounced() {
    args = arguments;
    stamp = now();
    thisArg = this;
    trailingCall = trailing && (timeoutId || !leading);

    if (maxWait === false) {
      var leadingCall = leading && !timeoutId;
    } else {
      if (!maxTimeoutId && !leading) {
        lastCalled = stamp;
      }
      var remaining = maxWait - (stamp - lastCalled),
          isCalled = remaining <= 0 || remaining > maxWait;

      if (isCalled) {
        if (maxTimeoutId) {
          maxTimeoutId = clearTimeout(maxTimeoutId);
        }
        lastCalled = stamp;
        result = func.apply(thisArg, args);
      }
      else if (!maxTimeoutId) {
        maxTimeoutId = setTimeout(maxDelayed, remaining);
      }
    }
    if (isCalled && timeoutId) {
      timeoutId = clearTimeout(timeoutId);
    }
    else if (!timeoutId && wait !== maxWait) {
      timeoutId = setTimeout(delayed, wait);
    }
    if (leadingCall) {
      isCalled = true;
      result = func.apply(thisArg, args);
    }
    if (isCalled && !timeoutId && !maxTimeoutId) {
      args = thisArg = undefined;
    }
    return result;
  }
  debounced.cancel = cancel;
  return debounced;
}

module.exports = debounce;

},{"../date/now":4,"../lang/isObject":33}],6:[function(_dereq_,module,exports){
/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],7:[function(_dereq_,module,exports){
var debounce = _dereq_('./debounce'),
    isObject = _dereq_('../lang/isObject');

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed invocations. Provide an options object to indicate
 * that `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. Subsequent calls to the throttled function return the
 * result of the last `func` call.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the the throttled function is
 * invoked more than once during the `wait` timeout.
 *
 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.leading=true] Specify invoking on the leading
 *  edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
 *  edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // avoid excessively updating the position while scrolling
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
 *   'trailing': false
 * }));
 *
 * // cancel a trailing throttled call
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (options === false) {
    leading = false;
  } else if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
}

module.exports = throttle;

},{"../lang/isObject":33,"./debounce":5}],8:[function(_dereq_,module,exports){
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function arrayCopy(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = arrayCopy;

},{}],9:[function(_dereq_,module,exports){
/**
 * A specialized version of `_.forEach` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],10:[function(_dereq_,module,exports){
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;

},{}],11:[function(_dereq_,module,exports){
var createBaseFor = _dereq_('./createBaseFor');

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./createBaseFor":18}],12:[function(_dereq_,module,exports){
var baseFor = _dereq_('./baseFor'),
    keysIn = _dereq_('../object/keysIn');

/**
 * The base implementation of `_.forIn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForIn(object, iteratee) {
  return baseFor(object, iteratee, keysIn);
}

module.exports = baseForIn;

},{"../object/keysIn":39,"./baseFor":11}],13:[function(_dereq_,module,exports){
var arrayEach = _dereq_('./arrayEach'),
    baseMergeDeep = _dereq_('./baseMergeDeep'),
    isArray = _dereq_('../lang/isArray'),
    isArrayLike = _dereq_('./isArrayLike'),
    isObject = _dereq_('../lang/isObject'),
    isObjectLike = _dereq_('./isObjectLike'),
    isTypedArray = _dereq_('../lang/isTypedArray'),
    keys = _dereq_('../object/keys');

/**
 * The base implementation of `_.merge` without support for argument juggling,
 * multiple sources, and `this` binding `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {Object} Returns `object`.
 */
function baseMerge(object, source, customizer, stackA, stackB) {
  if (!isObject(object)) {
    return object;
  }
  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
      props = isSrcArr ? undefined : keys(source);

  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObjectLike(srcValue)) {
      stackA || (stackA = []);
      stackB || (stackB = []);
      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
    }
    else {
      var value = object[key],
          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
          isCommon = result === undefined;

      if (isCommon) {
        result = srcValue;
      }
      if ((result !== undefined || (isSrcArr && !(key in object))) &&
          (isCommon || (result === result ? (result !== value) : (value === value)))) {
        object[key] = result;
      }
    }
  });
  return object;
}

module.exports = baseMerge;

},{"../lang/isArray":30,"../lang/isObject":33,"../lang/isTypedArray":36,"../object/keys":38,"./arrayEach":9,"./baseMergeDeep":14,"./isArrayLike":21,"./isObjectLike":26}],14:[function(_dereq_,module,exports){
var arrayCopy = _dereq_('./arrayCopy'),
    isArguments = _dereq_('../lang/isArguments'),
    isArray = _dereq_('../lang/isArray'),
    isArrayLike = _dereq_('./isArrayLike'),
    isPlainObject = _dereq_('../lang/isPlainObject'),
    isTypedArray = _dereq_('../lang/isTypedArray'),
    toPlainObject = _dereq_('../lang/toPlainObject');

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
  var length = stackA.length,
      srcValue = source[key];

  while (length--) {
    if (stackA[length] == srcValue) {
      object[key] = stackB[length];
      return;
    }
  }
  var value = object[key],
      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
      isCommon = result === undefined;

  if (isCommon) {
    result = srcValue;
    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
      result = isArray(value)
        ? value
        : (isArrayLike(value) ? arrayCopy(value) : []);
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      result = isArguments(value)
        ? toPlainObject(value)
        : (isPlainObject(value) ? value : {});
    }
    else {
      isCommon = false;
    }
  }
  // Add the source value to the stack of traversed objects and associate
  // it with its merged value.
  stackA.push(srcValue);
  stackB.push(result);

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
  } else if (result === result ? (result !== value) : (value === value)) {
    object[key] = result;
  }
}

module.exports = baseMergeDeep;

},{"../lang/isArguments":29,"../lang/isArray":30,"../lang/isPlainObject":34,"../lang/isTypedArray":36,"../lang/toPlainObject":37,"./arrayCopy":8,"./isArrayLike":21}],15:[function(_dereq_,module,exports){
var toObject = _dereq_('./toObject');

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : toObject(object)[key];
  };
}

module.exports = baseProperty;

},{"./toObject":28}],16:[function(_dereq_,module,exports){
var identity = _dereq_('../utility/identity');

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

module.exports = bindCallback;

},{"../utility/identity":42}],17:[function(_dereq_,module,exports){
var bindCallback = _dereq_('./bindCallback'),
    isIterateeCall = _dereq_('./isIterateeCall'),
    restParam = _dereq_('../function/restParam');

/**
 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return restParam(function(object, sources) {
    var index = -1,
        length = object == null ? 0 : sources.length,
        customizer = length > 2 ? sources[length - 2] : undefined,
        guard = length > 2 ? sources[2] : undefined,
        thisArg = length > 1 ? sources[length - 1] : undefined;

    if (typeof customizer == 'function') {
      customizer = bindCallback(customizer, thisArg, 5);
      length -= 2;
    } else {
      customizer = typeof thisArg == 'function' ? thisArg : undefined;
      length -= (customizer ? 1 : 0);
    }
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"../function/restParam":6,"./bindCallback":16,"./isIterateeCall":24}],18:[function(_dereq_,module,exports){
var toObject = _dereq_('./toObject');

/**
 * Creates a base function for `_.forIn` or `_.forInRight`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = keysFunc(object),
        length = props.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{"./toObject":28}],19:[function(_dereq_,module,exports){
var baseProperty = _dereq_('./baseProperty');

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

},{"./baseProperty":15}],20:[function(_dereq_,module,exports){
var isNative = _dereq_('../lang/isNative');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

module.exports = getNative;

},{"../lang/isNative":32}],21:[function(_dereq_,module,exports){
var getLength = _dereq_('./getLength'),
    isLength = _dereq_('./isLength');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

module.exports = isArrayLike;

},{"./getLength":19,"./isLength":25}],22:[function(_dereq_,module,exports){
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
var isHostObject = (function() {
  try {
    Object({ 'toString': 0 } + '');
  } catch(e) {
    return function() { return false; };
  }
  return function(value) {
    // IE < 9 presents many host objects as `Object` objects that can coerce
    // to strings despite having improperly defined `toString` methods.
    return typeof value.toString != 'function' && typeof (value + '') == 'string';
  };
}());

module.exports = isHostObject;

},{}],23:[function(_dereq_,module,exports){
/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],24:[function(_dereq_,module,exports){
var isArrayLike = _dereq_('./isArrayLike'),
    isIndex = _dereq_('./isIndex'),
    isObject = _dereq_('../lang/isObject');

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

module.exports = isIterateeCall;

},{"../lang/isObject":33,"./isArrayLike":21,"./isIndex":23}],25:[function(_dereq_,module,exports){
/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],26:[function(_dereq_,module,exports){
/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],27:[function(_dereq_,module,exports){
var isArguments = _dereq_('../lang/isArguments'),
    isArray = _dereq_('../lang/isArray'),
    isIndex = _dereq_('./isIndex'),
    isLength = _dereq_('./isLength'),
    isString = _dereq_('../lang/isString'),
    keysIn = _dereq_('../object/keysIn');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object) || isString(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = shimKeys;

},{"../lang/isArguments":29,"../lang/isArray":30,"../lang/isString":35,"../object/keysIn":39,"./isIndex":23,"./isLength":25}],28:[function(_dereq_,module,exports){
var isObject = _dereq_('../lang/isObject'),
    isString = _dereq_('../lang/isString'),
    support = _dereq_('../support');

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  if (support.unindexedChars && isString(value)) {
    var index = -1,
        length = value.length,
        result = Object(value);

    while (++index < length) {
      result[index] = value.charAt(index);
    }
    return result;
  }
  return isObject(value) ? value : Object(value);
}

module.exports = toObject;

},{"../lang/isObject":33,"../lang/isString":35,"../support":41}],29:[function(_dereq_,module,exports){
var isArrayLike = _dereq_('../internal/isArrayLike'),
    isObjectLike = _dereq_('../internal/isObjectLike');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) &&
    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
}

module.exports = isArguments;

},{"../internal/isArrayLike":21,"../internal/isObjectLike":26}],30:[function(_dereq_,module,exports){
var getNative = _dereq_('../internal/getNative'),
    isLength = _dereq_('../internal/isLength'),
    isObjectLike = _dereq_('../internal/isObjectLike');

/** `Object#toString` result references. */
var arrayTag = '[object Array]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

module.exports = isArray;

},{"../internal/getNative":20,"../internal/isLength":25,"../internal/isObjectLike":26}],31:[function(_dereq_,module,exports){
var isObject = _dereq_('./isObject');

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

module.exports = isFunction;

},{"./isObject":33}],32:[function(_dereq_,module,exports){
var isFunction = _dereq_('./isFunction'),
    isHostObject = _dereq_('../internal/isHostObject'),
    isObjectLike = _dereq_('../internal/isObjectLike');

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
}

module.exports = isNative;

},{"../internal/isHostObject":22,"../internal/isObjectLike":26,"./isFunction":31}],33:[function(_dereq_,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],34:[function(_dereq_,module,exports){
var baseForIn = _dereq_('../internal/baseForIn'),
    isArguments = _dereq_('./isArguments'),
    isHostObject = _dereq_('../internal/isHostObject'),
    isObjectLike = _dereq_('../internal/isObjectLike'),
    support = _dereq_('../support');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * **Note:** This method assumes objects created by the `Object` constructor
 * have no inherited enumerable properties.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  var Ctor;

  // Exit early for non `Object` objects.
  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) ||
      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
    return false;
  }
  // IE < 9 iterates inherited properties before own properties. If the first
  // iterated property is an object's own property then there are no inherited
  // enumerable properties.
  var result;
  if (support.ownLast) {
    baseForIn(value, function(subValue, key, object) {
      result = hasOwnProperty.call(object, key);
      return false;
    });
    return result !== false;
  }
  // In most environments an object's own properties are iterated before
  // its inherited properties. If the last iterated property is an object's
  // own property then there are no inherited enumerable properties.
  baseForIn(value, function(subValue, key) {
    result = key;
  });
  return result === undefined || hasOwnProperty.call(value, result);
}

module.exports = isPlainObject;

},{"../internal/baseForIn":12,"../internal/isHostObject":22,"../internal/isObjectLike":26,"../support":41,"./isArguments":29}],35:[function(_dereq_,module,exports){
var isObjectLike = _dereq_('../internal/isObjectLike');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
}

module.exports = isString;

},{"../internal/isObjectLike":26}],36:[function(_dereq_,module,exports){
var isLength = _dereq_('../internal/isLength'),
    isObjectLike = _dereq_('../internal/isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
}

module.exports = isTypedArray;

},{"../internal/isLength":25,"../internal/isObjectLike":26}],37:[function(_dereq_,module,exports){
var baseCopy = _dereq_('../internal/baseCopy'),
    keysIn = _dereq_('../object/keysIn');

/**
 * Converts `value` to a plain object flattening inherited enumerable
 * properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return baseCopy(value, keysIn(value));
}

module.exports = toPlainObject;

},{"../internal/baseCopy":10,"../object/keysIn":39}],38:[function(_dereq_,module,exports){
var getNative = _dereq_('../internal/getNative'),
    isArrayLike = _dereq_('../internal/isArrayLike'),
    isObject = _dereq_('../lang/isObject'),
    shimKeys = _dereq_('../internal/shimKeys'),
    support = _dereq_('../support');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

module.exports = keys;

},{"../internal/getNative":20,"../internal/isArrayLike":21,"../internal/shimKeys":27,"../lang/isObject":33,"../support":41}],39:[function(_dereq_,module,exports){
var arrayEach = _dereq_('../internal/arrayEach'),
    isArguments = _dereq_('../lang/isArguments'),
    isArray = _dereq_('../lang/isArray'),
    isFunction = _dereq_('../lang/isFunction'),
    isIndex = _dereq_('../internal/isIndex'),
    isLength = _dereq_('../internal/isLength'),
    isObject = _dereq_('../lang/isObject'),
    isString = _dereq_('../lang/isString'),
    support = _dereq_('../support');

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/** Used to fix the JScript `[[DontEnum]]` bug. */
var shadowProps = [
  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
  'toLocaleString', 'toString', 'valueOf'
];

/** Used for native method references. */
var errorProto = Error.prototype,
    objectProto = Object.prototype,
    stringProto = String.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to avoid iterating over non-enumerable properties in IE < 9. */
var nonEnumProps = {};
nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
nonEnumProps[objectTag] = { 'constructor': true };

arrayEach(shadowProps, function(key) {
  for (var tag in nonEnumProps) {
    if (hasOwnProperty.call(nonEnumProps, tag)) {
      var props = nonEnumProps[tag];
      props[key] = hasOwnProperty.call(props, key);
    }
  }
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;

  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object) || isString(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
      isProto = proto === object,
      result = Array(length),
      skipIndexes = length > 0,
      skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
      skipProto = support.enumPrototypes && isFunction(object);

  while (++index < length) {
    result[index] = (index + '');
  }
  // lodash skips the `constructor` property when it infers it's iterating
  // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
  // attribute of an existing property and the `constructor` property of a
  // prototype defaults to non-enumerable.
  for (var key in object) {
    if (!(skipProto && key == 'prototype') &&
        !(skipErrorProps && (key == 'message' || key == 'name')) &&
        !(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  if (support.nonEnumShadows && object !== objectProto) {
    var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
        nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

    if (tag == objectTag) {
      proto = objectProto;
    }
    length = shadowProps.length;
    while (length--) {
      key = shadowProps[length];
      var nonEnum = nonEnums[key];
      if (!(isProto && nonEnum) &&
          (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
        result.push(key);
      }
    }
  }
  return result;
}

module.exports = keysIn;

},{"../internal/arrayEach":9,"../internal/isIndex":23,"../internal/isLength":25,"../lang/isArguments":29,"../lang/isArray":30,"../lang/isFunction":31,"../lang/isObject":33,"../lang/isString":35,"../support":41}],40:[function(_dereq_,module,exports){
var baseMerge = _dereq_('../internal/baseMerge'),
    createAssigner = _dereq_('../internal/createAssigner');

/**
 * Recursively merges own enumerable properties of the source object(s), that
 * don't resolve to `undefined` into the destination object. Subsequent sources
 * overwrite property assignments of previous sources. If `customizer` is
 * provided it's invoked to produce the merged values of the destination and
 * source properties. If `customizer` returns `undefined` merging is handled
 * by the method instead. The `customizer` is bound to `thisArg` and invoked
 * with five arguments: (objectValue, sourceValue, key, object, source).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var users = {
 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
 * };
 *
 * var ages = {
 *   'data': [{ 'age': 36 }, { 'age': 40 }]
 * };
 *
 * _.merge(users, ages);
 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
 *
 * // using a customizer callback
 * var object = {
 *   'fruits': ['apple'],
 *   'vegetables': ['beet']
 * };
 *
 * var other = {
 *   'fruits': ['banana'],
 *   'vegetables': ['carrot']
 * };
 *
 * _.merge(object, other, function(a, b) {
 *   if (_.isArray(a)) {
 *     return a.concat(b);
 *   }
 * });
 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
 */
var merge = createAssigner(baseMerge);

module.exports = merge;

},{"../internal/baseMerge":13,"../internal/createAssigner":17}],41:[function(_dereq_,module,exports){
/** Used for native method references. */
var arrayProto = Array.prototype,
    errorProto = Error.prototype,
    objectProto = Object.prototype;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/**
 * An object environment feature flags.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

(function(x) {
  var Ctor = function() { this.x = x; },
      object = { '0': x, 'length': x },
      props = [];

  Ctor.prototype = { 'valueOf': x, 'y': x };
  for (var key in new Ctor) { props.push(key); }

  /**
   * Detect if `name` or `message` properties of `Error.prototype` are
   * enumerable by default (IE < 9, Safari < 5.1).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
    propertyIsEnumerable.call(errorProto, 'name');

  /**
   * Detect if `prototype` properties are enumerable by default.
   *
   * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
   * (if the prototype or a property on the prototype has been set)
   * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
   * property to `true`.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

  /**
   * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
   *
   * In IE < 9 an object's own properties, shadowing non-enumerable ones,
   * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.nonEnumShadows = !/valueOf/.test(props);

  /**
   * Detect if own properties are iterated after inherited properties (IE < 9).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.ownLast = props[0] != 'x';

  /**
   * Detect if `Array#shift` and `Array#splice` augment array-like objects
   * correctly.
   *
   * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
   * `shift()` and `splice()` functions that fail to remove the last element,
   * `value[0]`, of array-like objects even though the "length" property is
   * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
   * while `splice()` is buggy regardless of mode in IE < 9.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

  /**
   * Detect lack of support for accessing string characters by index.
   *
   * IE < 8 can't access characters by index. IE 8 can only access characters
   * by index on string literals, not string objects.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
}(1, 0));

module.exports = support;

},{}],42:[function(_dereq_,module,exports){
/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],43:[function(_dereq_,module,exports){
'use strict';

var keys = _dereq_('object-keys');

module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	if (typeof sym === 'string') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(Object(sym) instanceof Symbol)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; }
	if (keys(obj).length !== 0) { return false; }
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{"object-keys":50}],44:[function(_dereq_,module,exports){
'use strict';

// modified from https://github.com/es-shims/es6-shim
var keys = _dereq_('object-keys');
var bind = _dereq_('function-bind');
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = _dereq_('./hasSymbols')();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		if (hasSymbols && Object.getOwnPropertySymbols) {
			syms = Object.getOwnPropertySymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};

},{"./hasSymbols":43,"function-bind":49,"object-keys":50}],45:[function(_dereq_,module,exports){
'use strict';

var defineProperties = _dereq_('define-properties');

var implementation = _dereq_('./implementation');
var getPolyfill = _dereq_('./polyfill');
var shim = _dereq_('./shim');

defineProperties(implementation, {
	implementation: implementation,
	getPolyfill: getPolyfill,
	shim: shim
});

module.exports = implementation;

},{"./implementation":44,"./polyfill":52,"./shim":53,"define-properties":46}],46:[function(_dereq_,module,exports){
'use strict';

var keys = _dereq_('object-keys');
var foreach = _dereq_('foreach');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

},{"foreach":47,"object-keys":50}],47:[function(_dereq_,module,exports){

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};


},{}],48:[function(_dereq_,module,exports){
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],49:[function(_dereq_,module,exports){
var implementation = _dereq_('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":48}],50:[function(_dereq_,module,exports){
'use strict';

// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = _dereq_('./isArguments');
var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var blacklistedKeys = {
	$console: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$parent: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!blacklistedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

},{"./isArguments":51}],51:[function(_dereq_,module,exports){
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

},{}],52:[function(_dereq_,module,exports){
'use strict';

var implementation = _dereq_('./implementation');

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};

},{"./implementation":44}],53:[function(_dereq_,module,exports){
'use strict';

var define = _dereq_('define-properties');
var getPolyfill = _dereq_('./polyfill');

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};

},{"./polyfill":52,"define-properties":46}],54:[function(_dereq_,module,exports){
module.exports = SafeParseTuple

function SafeParseTuple(obj, reviver) {
    var json
    var error = null

    try {
        json = JSON.parse(obj, reviver)
    } catch (err) {
        error = err
    }

    return [error, json]
}

},{}],55:[function(_dereq_,module,exports){
function clean (s) {
  return s.replace(/\n\r?\s*/g, '')
}


module.exports = function tsml (sa) {
  var s = ''
    , i = 0

  for (; i < arguments.length; i++)
    s += clean(sa[i]) + (arguments[i + 1] || '')

  return s
}
},{}],56:[function(_dereq_,module,exports){
"use strict";
var window = _dereq_("global/window")
var once = _dereq_("once")
var isFunction = _dereq_("is-function")
var parseHeaders = _dereq_("parse-headers")
var xtend = _dereq_("xtend")

module.exports = createXHR
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    var callback = options.callback
    if(typeof callback === "undefined"){
        throw new Error("callback argument missing")
    }
    callback = once(callback)

    function readystatechange() {
        if (xhr.readyState === 4) {
            loadFunc()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === "text" || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    var failureResponse = {
                body: undefined,
                headers: {},
                statusCode: 0,
                method: method,
                url: uri,
                rawRequest: xhr
            }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        callback(err, response, response.body)

    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data || null
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer

    if ("json" in options) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            aborted=true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr


}

function noop() {}

},{"global/window":2,"is-function":57,"once":58,"parse-headers":61,"xtend":62}],57:[function(_dereq_,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],58:[function(_dereq_,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}],59:[function(_dereq_,module,exports){
var isFunction = _dereq_('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":57}],60:[function(_dereq_,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],61:[function(_dereq_,module,exports){
var trim = _dereq_('trim')
  , forEach = _dereq_('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":59,"trim":60}],62:[function(_dereq_,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],63:[function(_dereq_,module,exports){
/**
 * @file big-play-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _buttonJs = _dereq_('./button.js');

var _buttonJs2 = _interopRequireDefault(_buttonJs);

var _componentJs = _dereq_('./component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * Initial play button. Shows before the video has played. The hiding of the
 * big play button is done via CSS and player states.
 *
 * @param {Object} player  Main Player
 * @param {Object=} options Object of option names and values
 * @extends Button
 * @class BigPlayButton
 */

var BigPlayButton = (function (_Button) {
  _inherits(BigPlayButton, _Button);

  function BigPlayButton(player, options) {
    _classCallCheck(this, BigPlayButton);

    _Button.call(this, player, options);
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  BigPlayButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-big-play-button';
  };

  /**
   * Handles click for play
   *
   * @method handleClick
   */

  BigPlayButton.prototype.handleClick = function handleClick() {
    this.player_.play();
  };

  return BigPlayButton;
})(_buttonJs2['default']);

BigPlayButton.prototype.controlText_ = 'Play Video';

_componentJs2['default'].registerComponent('BigPlayButton', BigPlayButton);
exports['default'] = BigPlayButton;
module.exports = exports['default'];

},{"./button.js":64,"./component.js":67}],64:[function(_dereq_,module,exports){
/**
 * @file button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _clickableComponentJs = _dereq_('./clickable-component.js');

var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);

var _component = _dereq_('./component');

var _component2 = _interopRequireDefault(_component);

var _utilsEventsJs = _dereq_('./utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var _utilsFnJs = _dereq_('./utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsLogJs = _dereq_('./utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

/**
 * Base class for all buttons
 *
 * @param {Object} player  Main Player
 * @param {Object=} options Object of option names and values
 * @extends ClickableComponent
 * @class Button
 */

var Button = (function (_ClickableComponent) {
  _inherits(Button, _ClickableComponent);

  function Button(player, options) {
    _classCallCheck(this, Button);

    _ClickableComponent.call(this, player, options);
  }

  /**
   * Create the component's DOM element
   *
   * @param {String=} type Element's node type. e.g. 'div'
   * @param {Object=} props An object of properties that should be set on the element
   * @param {Object=} attributes An object of attributes that should be set on the element
   * @return {Element}
   * @method createEl
   */

  Button.prototype.createEl = function createEl() {
    var tag = arguments.length <= 0 || arguments[0] === undefined ? 'button' : arguments[0];
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    props = _objectAssign2['default']({
      className: this.buildCSSClass()
    }, props);

    if (tag !== 'button') {
      _utilsLogJs2['default'].warn('Creating a Button with an HTML element of ' + tag + ' is deprecated; use ClickableComponent instead.');

      // Add properties for clickable element which is not a native HTML button
      props = _objectAssign2['default']({
        tabIndex: 0
      }, props);

      // Add ARIA attributes for clickable element which is not a native HTML button
      attributes = _objectAssign2['default']({
        role: 'button'
      }, attributes);
    }

    // Add attributes for button element
    attributes = _objectAssign2['default']({
      type: 'button', // Necessary since the default button type is "submit"
      'aria-live': 'polite' // let the screen reader user know that the text of the button may change
    }, attributes);

    var el = _component2['default'].prototype.createEl.call(this, tag, props, attributes);

    this.createControlTextEl(el);

    return el;
  };

  /**
   * Adds a child component inside this button
   *
   * @param {String|Component} child The class name or instance of a child to add
   * @param {Object=} options Options, including options to be passed to children of the child.
   * @return {Component} The child component (created by this process if a string was used)
   * @deprecated
   * @method addChild
   */

  Button.prototype.addChild = function addChild(child) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var className = this.constructor.name;
    _utilsLogJs2['default'].warn('Adding an actionable (user controllable) child to a Button (' + className + ') is not supported; use a ClickableComponent instead.');

    // Avoid the error message generated by ClickableComponent's addChild method
    return _component2['default'].prototype.addChild.call(this, child, options);
  };

  /**
   * Handle KeyPress (document level) - Extend with specific functionality for button
   *
   * @method handleKeyPress
   */

  Button.prototype.handleKeyPress = function handleKeyPress(event) {
    // Ignore Space (32) or Enter (13) key operation, which is handled by the browser for a button.
    if (event.which === 32 || event.which === 13) {} else {
      _ClickableComponent.prototype.handleKeyPress.call(this, event); // Pass keypress handling up for unsupported keys
    }
  };

  return Button;
})(_clickableComponentJs2['default']);

_component2['default'].registerComponent('Button', Button);
exports['default'] = Button;
module.exports = exports['default'];

},{"./clickable-component.js":65,"./component":67,"./utils/events.js":135,"./utils/fn.js":136,"./utils/log.js":139,"global/document":1,"object.assign":45}],65:[function(_dereq_,module,exports){
/**
 * @file button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = _dereq_('./component');

var _component2 = _interopRequireDefault(_component);

var _utilsDomJs = _dereq_('./utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsEventsJs = _dereq_('./utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var _utilsFnJs = _dereq_('./utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsLogJs = _dereq_('./utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

/**
 * Clickable Component which is clickable or keyboard actionable, but is not a native HTML button
 *
 * @param {Object} player  Main Player
 * @param {Object=} options Object of option names and values
 * @extends Component
 * @class ClickableComponent
 */

var ClickableComponent = (function (_Component) {
  _inherits(ClickableComponent, _Component);

  function ClickableComponent(player, options) {
    _classCallCheck(this, ClickableComponent);

    _Component.call(this, player, options);

    this.emitTapEvents();

    this.on('tap', this.handleClick);
    this.on('click', this.handleClick);
    this.on('focus', this.handleFocus);
    this.on('blur', this.handleBlur);
  }

  /**
   * Create the component's DOM element
   *
   * @param {String=} type Element's node type. e.g. 'div'
   * @param {Object=} props An object of properties that should be set on the element
   * @param {Object=} attributes An object of attributes that should be set on the element
   * @return {Element}
   * @method createEl
   */

  ClickableComponent.prototype.createEl = function createEl() {
    var tag = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    props = _objectAssign2['default']({
      className: this.buildCSSClass(),
      tabIndex: 0
    }, props);

    if (tag === 'button') {
      _utilsLogJs2['default'].error('Creating a ClickableComponent with an HTML element of ' + tag + ' is not supported; use a Button instead.');
    }

    // Add ARIA attributes for clickable element which is not a native HTML button
    attributes = _objectAssign2['default']({
      role: 'button',
      'aria-live': 'polite' // let the screen reader user know that the text of the element may change
    }, attributes);

    var el = _Component.prototype.createEl.call(this, tag, props, attributes);

    this.createControlTextEl(el);

    return el;
  };

  /**
   * create control text
   *
   * @param {Element} el Parent element for the control text
   * @return {Element}
   * @method controlText
   */

  ClickableComponent.prototype.createControlTextEl = function createControlTextEl(el) {
    this.controlTextEl_ = Dom.createEl('span', {
      className: 'vjs-control-text'
    });

    if (el) {
      el.appendChild(this.controlTextEl_);
    }

    this.controlText(this.controlText_);

    return this.controlTextEl_;
  };

  /**
   * Controls text - both request and localize
   *
   * @param {String} text Text for element
   * @return {String}
   * @method controlText
   */

  ClickableComponent.prototype.controlText = function controlText(text) {
    if (!text) return this.controlText_ || 'Need Text';

    this.controlText_ = text;
    this.controlTextEl_.innerHTML = this.localize(this.controlText_);

    return this;
  };

  /**
   * Allows sub components to stack CSS class names
   *
   * @return {String}
   * @method buildCSSClass
   */

  ClickableComponent.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-control vjs-button ' + _Component.prototype.buildCSSClass.call(this);
  };

  /**
   * Adds a child component inside this clickable-component
   *
   * @param {String|Component} child The class name or instance of a child to add
   * @param {Object=} options Options, including options to be passed to children of the child.
   * @return {Component} The child component (created by this process if a string was used)
   * @method addChild
   */

  ClickableComponent.prototype.addChild = function addChild(child) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // TODO: Fix adding an actionable child to a ClickableComponent; currently
    // it will cause issues with assistive technology (e.g. screen readers)
    // which support ARIA, since an element with role="button" cannot have
    // actionable child elements.

    //let className = this.constructor.name;
    //log.warn(`Adding a child to a ClickableComponent (${className}) can cause issues with assistive technology which supports ARIA, since an element with role="button" cannot have actionable child elements.`);

    return _Component.prototype.addChild.call(this, child, options);
  };

  /**
   * Enable the component element
   *
   * @return {Component}
   * @method enable
   */

  ClickableComponent.prototype.enable = function enable() {
    this.removeClass('vjs-disabled');
    this.el_.setAttribute('aria-disabled', 'false');
    return this;
  };

  /**
   * Disable the component element
   *
   * @return {Component}
   * @method disable
   */

  ClickableComponent.prototype.disable = function disable() {
    this.addClass('vjs-disabled');
    this.el_.setAttribute('aria-disabled', 'true');
    return this;
  };

  /**
   * Handle Click - Override with specific functionality for component
   *
   * @method handleClick
   */

  ClickableComponent.prototype.handleClick = function handleClick() {};

  /**
   * Handle Focus - Add keyboard functionality to element
   *
   * @method handleFocus
   */

  ClickableComponent.prototype.handleFocus = function handleFocus() {
    Events.on(_globalDocument2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
  };

  /**
   * Handle KeyPress (document level) - Trigger click when Space or Enter key is pressed
   *
   * @method handleKeyPress
   */

  ClickableComponent.prototype.handleKeyPress = function handleKeyPress(event) {
    // Support Space (32) or Enter (13) key operation to fire a click event
    if (event.which === 32 || event.which === 13) {
      event.preventDefault();
      this.handleClick(event);
    } else if (_Component.prototype.handleKeyPress) {
      _Component.prototype.handleKeyPress.call(this, event); // Pass keypress handling up for unsupported keys
    }
  };

  /**
   * Handle Blur - Remove keyboard triggers
   *
   * @method handleBlur
   */

  ClickableComponent.prototype.handleBlur = function handleBlur() {
    Events.off(_globalDocument2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
  };

  return ClickableComponent;
})(_component2['default']);

_component2['default'].registerComponent('ClickableComponent', ClickableComponent);
exports['default'] = ClickableComponent;
module.exports = exports['default'];

},{"./component":67,"./utils/dom.js":134,"./utils/events.js":135,"./utils/fn.js":136,"./utils/log.js":139,"global/document":1,"object.assign":45}],66:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _button = _dereq_('./button');

var _button2 = _interopRequireDefault(_button);

var _component = _dereq_('./component');

var _component2 = _interopRequireDefault(_component);

/**
 * The `CloseButton` component is a button which fires a "close" event
 * when it is activated.
 *
 * @extends Button
 * @class CloseButton
 */

var CloseButton = (function (_Button) {
  _inherits(CloseButton, _Button);

  function CloseButton(player, options) {
    _classCallCheck(this, CloseButton);

    _Button.call(this, player, options);
    this.controlText(options && options.controlText || this.localize('Close'));
  }

  CloseButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-close-button ' + _Button.prototype.buildCSSClass.call(this);
  };

  CloseButton.prototype.handleClick = function handleClick() {
    this.trigger({ type: 'close', bubbles: false });
  };

  return CloseButton;
})(_button2['default']);

_component2['default'].registerComponent('CloseButton', CloseButton);
exports['default'] = CloseButton;
module.exports = exports['default'];

},{"./button":64,"./component":67}],67:[function(_dereq_,module,exports){
/**
 * @file component.js
 *
 * Player Component - Base class for all UI objects
 */

'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _utilsDomJs = _dereq_('./utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('./utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsGuidJs = _dereq_('./utils/guid.js');

var Guid = _interopRequireWildcard(_utilsGuidJs);

var _utilsEventsJs = _dereq_('./utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var _utilsLogJs = _dereq_('./utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _utilsToTitleCaseJs = _dereq_('./utils/to-title-case.js');

var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utilsMergeOptionsJs = _dereq_('./utils/merge-options.js');

var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);

/**
 * Base UI Component class
 * Components are embeddable UI objects that are represented by both a
 * javascript object and an element in the DOM. They can be children of other
 * components, and can have many children themselves.
 * ```js
 *     // adding a button to the player
 *     var button = player.addChild('button');
 *     button.el(); // -> button element
 * ```
 * ```html
 *     <div class="video-js">
 *       <div class="vjs-button">Button</div>
 *     </div>
 * ```
 * Components are also event targets.
 * ```js
 *     button.on('click', function(){
 *       console.log('Button Clicked!');
 *     });
 *     button.trigger('customevent');
 * ```
 *
 * @param {Object} player  Main Player
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @class Component
 */

var Component = (function () {
  function Component(player, options, ready) {
    _classCallCheck(this, Component);

    // The component might be the player itself and we can't pass `this` to super
    if (!player && this.play) {
      this.player_ = player = this; // eslint-disable-line
    } else {
        this.player_ = player;
      }

    // Make a copy of prototype.options_ to protect against overriding defaults
    this.options_ = _utilsMergeOptionsJs2['default']({}, this.options_);

    // Updated options with supplied options
    options = this.options_ = _utilsMergeOptionsJs2['default'](this.options_, options);

    // Get ID from options or options element if one is supplied
    this.id_ = options.id || options.el && options.el.id;

    // If there was no ID from the options, generate one
    if (!this.id_) {
      // Don't require the player ID function in the case of mock players
      var id = player && player.id && player.id() || 'no_player';

      this.id_ = id + '_component_' + Guid.newGUID();
    }

    this.name_ = options.name || null;

    // Create element if one wasn't provided in options
    if (options.el) {
      this.el_ = options.el;
    } else if (options.createEl !== false) {
      this.el_ = this.createEl();
    }

    this.children_ = [];
    this.childIndex_ = {};
    this.childNameIndex_ = {};

    // Add any child components in options
    if (options.initChildren !== false) {
      this.initChildren();
    }

    this.ready(ready);
    // Don't want to trigger ready here or it will before init is actually
    // finished for all children that run this constructor

    if (options.reportTouchActivity !== false) {
      this.enableTouchActivity();
    }
  }

  /**
   * Dispose of the component and all child components
   *
   * @method dispose
   */

  Component.prototype.dispose = function dispose() {
    this.trigger({ type: 'dispose', bubbles: false });

    // Dispose all children.
    if (this.children_) {
      for (var i = this.children_.length - 1; i >= 0; i--) {
        if (this.children_[i].dispose) {
          this.children_[i].dispose();
        }
      }
    }

    // Delete child references
    this.children_ = null;
    this.childIndex_ = null;
    this.childNameIndex_ = null;

    // Remove all event listeners.
    this.off();

    // Remove element from DOM
    if (this.el_.parentNode) {
      this.el_.parentNode.removeChild(this.el_);
    }

    Dom.removeElData(this.el_);
    this.el_ = null;
  };

  /**
   * Return the component's player
   *
   * @return {Player}
   * @method player
   */

  Component.prototype.player = function player() {
    return this.player_;
  };

  /**
   * Deep merge of options objects
   * Whenever a property is an object on both options objects
   * the two properties will be merged using mergeOptions.
   *
   * ```js
   *     Parent.prototype.options_ = {
   *       optionSet: {
   *         'childOne': { 'foo': 'bar', 'asdf': 'fdsa' },
   *         'childTwo': {},
   *         'childThree': {}
   *       }
   *     }
   *     newOptions = {
   *       optionSet: {
   *         'childOne': { 'foo': 'baz', 'abc': '123' }
   *         'childTwo': null,
   *         'childFour': {}
   *       }
   *     }
   *
   *     this.options(newOptions);
   * ```
   * RESULT
   * ```js
   *     {
   *       optionSet: {
   *         'childOne': { 'foo': 'baz', 'asdf': 'fdsa', 'abc': '123' },
   *         'childTwo': null, // Disabled. Won't be initialized.
   *         'childThree': {},
   *         'childFour': {}
   *       }
   *     }
   * ```
   *
   * @param  {Object} obj Object of new option values
   * @return {Object}     A NEW object of this.options_ and obj merged
   * @method options
   */

  Component.prototype.options = function options(obj) {
    _utilsLogJs2['default'].warn('this.options() has been deprecated and will be moved to the constructor in 6.0');

    if (!obj) {
      return this.options_;
    }

    this.options_ = _utilsMergeOptionsJs2['default'](this.options_, obj);
    return this.options_;
  };

  /**
   * Get the component's DOM element
   * ```js
   *     var domEl = myComponent.el();
   * ```
   *
   * @return {Element}
   * @method el
   */

  Component.prototype.el = function el() {
    return this.el_;
  };

  /**
   * Create the component's DOM element
   *
   * @param  {String=} tagName  Element's node type. e.g. 'div'
   * @param  {Object=} properties An object of properties that should be set
   * @param  {Object=} attributes An object of attributes that should be set
   * @return {Element}
   * @method createEl
   */

  Component.prototype.createEl = function createEl(tagName, properties, attributes) {
    return Dom.createEl(tagName, properties, attributes);
  };

  Component.prototype.localize = function localize(string) {
    var code = this.player_.language && this.player_.language();
    var languages = this.player_.languages && this.player_.languages();

    if (!code || !languages) {
      return string;
    }

    var language = languages[code];

    if (language && language[string]) {
      return language[string];
    }

    var primaryCode = code.split('-')[0];
    var primaryLang = languages[primaryCode];

    if (primaryLang && primaryLang[string]) {
      return primaryLang[string];
    }

    return string;
  };

  /**
   * Return the component's DOM element where children are inserted.
   * Will either be the same as el() or a new element defined in createEl().
   *
   * @return {Element}
   * @method contentEl
   */

  Component.prototype.contentEl = function contentEl() {
    return this.contentEl_ || this.el_;
  };

  /**
   * Get the component's ID
   * ```js
   *     var id = myComponent.id();
   * ```
   *
   * @return {String}
   * @method id
   */

  Component.prototype.id = function id() {
    return this.id_;
  };

  /**
   * Get the component's name. The name is often used to reference the component.
   * ```js
   *     var name = myComponent.name();
   * ```
   *
   * @return {String}
   * @method name
   */

  Component.prototype.name = function name() {
    return this.name_;
  };

  /**
   * Get an array of all child components
   * ```js
   *     var kids = myComponent.children();
   * ```
   *
   * @return {Array} The children
   * @method children
   */

  Component.prototype.children = function children() {
    return this.children_;
  };

  /**
   * Returns a child component with the provided ID
   *
   * @return {Component}
   * @method getChildById
   */

  Component.prototype.getChildById = function getChildById(id) {
    return this.childIndex_[id];
  };

  /**
   * Returns a child component with the provided name
   *
   * @return {Component}
   * @method getChild
   */

  Component.prototype.getChild = function getChild(name) {
    return this.childNameIndex_[name];
  };

  /**
   * Adds a child component inside this component
   * ```js
   *     myComponent.el();
   *     // -> <div class='my-component'></div>
   *     myComponent.children();
   *     // [empty array]
   *
   *     var myButton = myComponent.addChild('MyButton');
   *     // -> <div class='my-component'><div class="my-button">myButton<div></div>
   *     // -> myButton === myComponent.children()[0];
   * ```
   * Pass in options for child constructors and options for children of the child
   * ```js
   *     var myButton = myComponent.addChild('MyButton', {
   *       text: 'Press Me',
   *       buttonChildExample: {
   *         buttonChildOption: true
   *       }
   *     });
   * ```
   *
   * @param {String|Component} child The class name or instance of a child to add
   * @param {Object=} options Options, including options to be passed to children of the child.
   * @param {Number} index into our children array to attempt to add the child
   * @return {Component} The child component (created by this process if a string was used)
   * @method addChild
   */

  Component.prototype.addChild = function addChild(child) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var index = arguments.length <= 2 || arguments[2] === undefined ? this.children_.length : arguments[2];

    var component = undefined;
    var componentName = undefined;

    // If child is a string, create nt with options
    if (typeof child === 'string') {
      componentName = child;

      // Options can also be specified as a boolean, so convert to an empty object if false.
      if (!options) {
        options = {};
      }

      // Same as above, but true is deprecated so show a warning.
      if (options === true) {
        _utilsLogJs2['default'].warn('Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`.');
        options = {};
      }

      // If no componentClass in options, assume componentClass is the name lowercased
      // (e.g. playButton)
      var componentClassName = options.componentClass || _utilsToTitleCaseJs2['default'](componentName);

      // Set name through options
      options.name = componentName;

      // Create a new object & element for this controls set
      // If there's no .player_, this is a player
      var ComponentClass = Component.getComponent(componentClassName);

      if (!ComponentClass) {
        throw new Error('Component ' + componentClassName + ' does not exist');
      }

      // data stored directly on the videojs object may be
      // misidentified as a component to retain
      // backwards-compatibility with 4.x. check to make sure the
      // component class can be instantiated.
      if (typeof ComponentClass !== 'function') {
        return null;
      }

      component = new ComponentClass(this.player_ || this, options);

      // child is a component instance
    } else {
        component = child;
      }

    this.children_.splice(index, 0, component);

    if (typeof component.id === 'function') {
      this.childIndex_[component.id()] = component;
    }

    // If a name wasn't used to create the component, check if we can use the
    // name function of the component
    componentName = componentName || component.name && component.name();

    if (componentName) {
      this.childNameIndex_[componentName] = component;
    }

    // Add the UI object's element to the container div (box)
    // Having an element is not required
    if (typeof component.el === 'function' && component.el()) {
      var childNodes = this.contentEl().children;
      var refNode = childNodes[index] || null;
      this.contentEl().insertBefore(component.el(), refNode);
    }

    // Return so it can stored on parent object if desired.
    return component;
  };

  /**
   * Remove a child component from this component's list of children, and the
   * child component's element from this component's element
   *
   * @param  {Component} component Component to remove
   * @method removeChild
   */

  Component.prototype.removeChild = function removeChild(component) {
    if (typeof component === 'string') {
      component = this.getChild(component);
    }

    if (!component || !this.children_) {
      return;
    }

    var childFound = false;

    for (var i = this.children_.length - 1; i >= 0; i--) {
      if (this.children_[i] === component) {
        childFound = true;
        this.children_.splice(i, 1);
        break;
      }
    }

    if (!childFound) {
      return;
    }

    this.childIndex_[component.id()] = null;
    this.childNameIndex_[component.name()] = null;

    var compEl = component.el();

    if (compEl && compEl.parentNode === this.contentEl()) {
      this.contentEl().removeChild(component.el());
    }
  };

  /**
   * Add and initialize default child components from options
   * ```js
   *     // when an instance of MyComponent is created, all children in options
   *     // will be added to the instance by their name strings and options
   *     MyComponent.prototype.options_ = {
   *       children: [
   *         'myChildComponent'
   *       ],
   *       myChildComponent: {
   *         myChildOption: true
   *       }
   *     };
   *
   *     // Or when creating the component
   *     var myComp = new MyComponent(player, {
   *       children: [
   *         'myChildComponent'
   *       ],
   *       myChildComponent: {
   *         myChildOption: true
   *       }
   *     });
   * ```
   * The children option can also be an array of
   * child options objects (that also include a 'name' key).
   * This can be used if you have two child components of the
   * same type that need different options.
   * ```js
   *     var myComp = new MyComponent(player, {
   *       children: [
   *         'button',
   *         {
   *           name: 'button',
   *           someOtherOption: true
   *         },
   *         {
   *           name: 'button',
   *           someOtherOption: false
   *         }
   *       ]
   *     });
   * ```
   *
   * @method initChildren
   */

  Component.prototype.initChildren = function initChildren() {
    var _this = this;

    var children = this.options_.children;

    if (children) {
      (function () {
        // `this` is `parent`
        var parentOptions = _this.options_;

        var handleAdd = function handleAdd(child) {
          var name = child.name;
          var opts = child.opts;

          // Allow options for children to be set at the parent options
          // e.g. videojs(id, { controlBar: false });
          // instead of videojs(id, { children: { controlBar: false });
          if (parentOptions[name] !== undefined) {
            opts = parentOptions[name];
          }

          // Allow for disabling default components
          // e.g. options['children']['posterImage'] = false
          if (opts === false) {
            return;
          }

          // Allow options to be passed as a simple boolean if no configuration
          // is necessary.
          if (opts === true) {
            opts = {};
          }

          // We also want to pass the original player options to each component as well so they don't need to
          // reach back into the player for options later.
          opts.playerOptions = _this.options_.playerOptions;

          // Create and add the child component.
          // Add a direct reference to the child by name on the parent instance.
          // If two of the same component are used, different names should be supplied
          // for each
          var newChild = _this.addChild(name, opts);
          if (newChild) {
            _this[name] = newChild;
          }
        };

        // Allow for an array of children details to passed in the options
        var workingChildren = undefined;
        var Tech = Component.getComponent('Tech');

        if (Array.isArray(children)) {
          workingChildren = children;
        } else {
          workingChildren = Object.keys(children);
        }

        workingChildren
        // children that are in this.options_ but also in workingChildren  would
        // give us extra children we do not want. So, we want to filter them out.
        .concat(Object.keys(_this.options_).filter(function (child) {
          return !workingChildren.some(function (wchild) {
            if (typeof wchild === 'string') {
              return child === wchild;
            } else {
              return child === wchild.name;
            }
          });
        })).map(function (child) {
          var name = undefined,
              opts = undefined;

          if (typeof child === 'string') {
            name = child;
            opts = children[name] || _this.options_[name] || {};
          } else {
            name = child.name;
            opts = child;
          }

          return { name: name, opts: opts };
        }).filter(function (child) {
          // we have to make sure that child.name isn't in the techOrder since
          // techs are registerd as Components but can't aren't compatible
          // See https://github.com/videojs/video.js/issues/2772
          var c = Component.getComponent(child.opts.componentClass || _utilsToTitleCaseJs2['default'](child.name));
          return c && !Tech.isTech(c);
        }).forEach(handleAdd);
      })();
    }
  };

  /**
   * Allows sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  Component.prototype.buildCSSClass = function buildCSSClass() {
    // Child classes can include a function that does:
    // return 'CLASS NAME' + this._super();
    return '';
  };

  /**
   * Add an event listener to this component's element
   * ```js
   *     var myFunc = function(){
   *       var myComponent = this;
   *       // Do something when the event is fired
   *     };
   *
   *     myComponent.on('eventType', myFunc);
   * ```
   * The context of myFunc will be myComponent unless previously bound.
   * Alternatively, you can add a listener to another element or component.
   * ```js
   *     myComponent.on(otherElement, 'eventName', myFunc);
   *     myComponent.on(otherComponent, 'eventName', myFunc);
   * ```
   * The benefit of using this over `VjsEvents.on(otherElement, 'eventName', myFunc)`
   * and `otherComponent.on('eventName', myFunc)` is that this way the listeners
   * will be automatically cleaned up when either component is disposed.
   * It will also bind myComponent as the context of myFunc.
   * **NOTE**: When using this on elements in the page other than window
   * and document (both permanent), if you remove the element from the DOM
   * you need to call `myComponent.trigger(el, 'dispose')` on it to clean up
   * references to it and allow the browser to garbage collect it.
   *
   * @param  {String|Component} first   The event type or other component
   * @param  {Function|String}      second  The event handler or event type
   * @param  {Function}             third   The event handler
   * @return {Component}
   * @method on
   */

  Component.prototype.on = function on(first, second, third) {
    var _this2 = this;

    if (typeof first === 'string' || Array.isArray(first)) {
      Events.on(this.el_, first, Fn.bind(this, second));

      // Targeting another component or element
    } else {
        (function () {
          var target = first;
          var type = second;
          var fn = Fn.bind(_this2, third);

          // When this component is disposed, remove the listener from the other component
          var removeOnDispose = function removeOnDispose() {
            return _this2.off(target, type, fn);
          };

          // Use the same function ID so we can remove it later it using the ID
          // of the original listener
          removeOnDispose.guid = fn.guid;
          _this2.on('dispose', removeOnDispose);

          // If the other component is disposed first we need to clean the reference
          // to the other component in this component's removeOnDispose listener
          // Otherwise we create a memory leak.
          var cleanRemover = function cleanRemover() {
            return _this2.off('dispose', removeOnDispose);
          };

          // Add the same function ID so we can easily remove it later
          cleanRemover.guid = fn.guid;

          // Check if this is a DOM node
          if (first.nodeName) {
            // Add the listener to the other element
            Events.on(target, type, fn);
            Events.on(target, 'dispose', cleanRemover);

            // Should be a component
            // Not using `instanceof Component` because it makes mock players difficult
          } else if (typeof first.on === 'function') {
              // Add the listener to the other component
              target.on(type, fn);
              target.on('dispose', cleanRemover);
            }
        })();
      }

    return this;
  };

  /**
   * Remove an event listener from this component's element
   * ```js
   *     myComponent.off('eventType', myFunc);
   * ```
   * If myFunc is excluded, ALL listeners for the event type will be removed.
   * If eventType is excluded, ALL listeners will be removed from the component.
   * Alternatively you can use `off` to remove listeners that were added to other
   * elements or components using `myComponent.on(otherComponent...`.
   * In this case both the event type and listener function are REQUIRED.
   * ```js
   *     myComponent.off(otherElement, 'eventType', myFunc);
   *     myComponent.off(otherComponent, 'eventType', myFunc);
   * ```
   *
   * @param  {String=|Component}  first  The event type or other component
   * @param  {Function=|String}       second The listener function or event type
   * @param  {Function=}              third  The listener for other component
   * @return {Component}
   * @method off
   */

  Component.prototype.off = function off(first, second, third) {
    if (!first || typeof first === 'string' || Array.isArray(first)) {
      Events.off(this.el_, first, second);
    } else {
      var target = first;
      var type = second;
      // Ensure there's at least a guid, even if the function hasn't been used
      var fn = Fn.bind(this, third);

      // Remove the dispose listener on this component,
      // which was given the same guid as the event listener
      this.off('dispose', fn);

      if (first.nodeName) {
        // Remove the listener
        Events.off(target, type, fn);
        // Remove the listener for cleaning the dispose listener
        Events.off(target, 'dispose', fn);
      } else {
        target.off(type, fn);
        target.off('dispose', fn);
      }
    }

    return this;
  };

  /**
   * Add an event listener to be triggered only once and then removed
   * ```js
   *     myComponent.one('eventName', myFunc);
   * ```
   * Alternatively you can add a listener to another element or component
   * that will be triggered only once.
   * ```js
   *     myComponent.one(otherElement, 'eventName', myFunc);
   *     myComponent.one(otherComponent, 'eventName', myFunc);
   * ```
   *
   * @param  {String|Component}  first   The event type or other component
   * @param  {Function|String}       second  The listener function or event type
   * @param  {Function=}             third   The listener function for other component
   * @return {Component}
   * @method one
   */

  Component.prototype.one = function one(first, second, third) {
    var _this3 = this,
        _arguments = arguments;

    if (typeof first === 'string' || Array.isArray(first)) {
      Events.one(this.el_, first, Fn.bind(this, second));
    } else {
      (function () {
        var target = first;
        var type = second;
        var fn = Fn.bind(_this3, third);

        var newFunc = function newFunc() {
          _this3.off(target, type, newFunc);
          fn.apply(null, _arguments);
        };

        // Keep the same function ID so we can remove it later
        newFunc.guid = fn.guid;

        _this3.on(target, type, newFunc);
      })();
    }

    return this;
  };

  /**
   * Trigger an event on an element
   * ```js
   *     myComponent.trigger('eventName');
   *     myComponent.trigger({'type':'eventName'});
   *     myComponent.trigger('eventName', {data: 'some data'});
   *     myComponent.trigger({'type':'eventName'}, {data: 'some data'});
   * ```
   *
   * @param  {Event|Object|String} event  A string (the type) or an event object with a type attribute
   * @param  {Object} [hash] data hash to pass along with the event
   * @return {Component}       self
   * @method trigger
   */

  Component.prototype.trigger = function trigger(event, hash) {
    Events.trigger(this.el_, event, hash);
    return this;
  };

  /**
   * Bind a listener to the component's ready state.
   * Different from event listeners in that if the ready event has already happened
   * it will trigger the function immediately.
   *
   * @param  {Function} fn Ready listener
   * @param  {Boolean} sync Exec the listener synchronously if component is ready
   * @return {Component}
   * @method ready
   */

  Component.prototype.ready = function ready(fn) {
    var sync = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    if (fn) {
      if (this.isReady_) {
        if (sync) {
          fn.call(this);
        } else {
          // Call the function asynchronously by default for consistency
          this.setTimeout(fn, 1);
        }
      } else {
        this.readyQueue_ = this.readyQueue_ || [];
        this.readyQueue_.push(fn);
      }
    }
    return this;
  };

  /**
   * Trigger the ready listeners
   *
   * @return {Component}
   * @method triggerReady
   */

  Component.prototype.triggerReady = function triggerReady() {
    this.isReady_ = true;

    // Ensure ready is triggerd asynchronously
    this.setTimeout(function () {
      var readyQueue = this.readyQueue_;

      // Reset Ready Queue
      this.readyQueue_ = [];

      if (readyQueue && readyQueue.length > 0) {
        readyQueue.forEach(function (fn) {
          fn.call(this);
        }, this);
      }

      // Allow for using event listeners also
      this.trigger('ready');
    }, 1);
  };

  /**
   * Finds a single DOM element matching `selector` within the component's
   * `contentEl` or another custom context.
   *
   * @method $
   * @param  {String} selector
   *         A valid CSS selector, which will be passed to `querySelector`.
   *
   * @param  {Element|String} [context=document]
   *         A DOM element within which to query. Can also be a selector
   *         string in which case the first matching element will be used
   *         as context. If missing (or no element matches selector), falls
   *         back to `document`.
   *
   * @return {Element|null}
   */

  Component.prototype.$ = function $(selector, context) {
    return Dom.$(selector, context || this.contentEl());
  };

  /**
   * Finds a all DOM elements matching `selector` within the component's
   * `contentEl` or another custom context.
   *
   * @method $$
   * @param  {String} selector
   *         A valid CSS selector, which will be passed to `querySelectorAll`.
   *
   * @param  {Element|String} [context=document]
   *         A DOM element within which to query. Can also be a selector
   *         string in which case the first matching element will be used
   *         as context. If missing (or no element matches selector), falls
   *         back to `document`.
   *
   * @return {NodeList}
   */

  Component.prototype.$$ = function $$(selector, context) {
    return Dom.$$(selector, context || this.contentEl());
  };

  /**
   * Check if a component's element has a CSS class name
   *
   * @param {String} classToCheck Classname to check
   * @return {Component}
   * @method hasClass
   */

  Component.prototype.hasClass = function hasClass(classToCheck) {
    return Dom.hasElClass(this.el_, classToCheck);
  };

  /**
   * Add a CSS class name to the component's element
   *
   * @param {String} classToAdd Classname to add
   * @return {Component}
   * @method addClass
   */

  Component.prototype.addClass = function addClass(classToAdd) {
    Dom.addElClass(this.el_, classToAdd);
    return this;
  };

  /**
   * Remove a CSS class name from the component's element
   *
   * @param {String} classToRemove Classname to remove
   * @return {Component}
   * @method removeClass
   */

  Component.prototype.removeClass = function removeClass(classToRemove) {
    Dom.removeElClass(this.el_, classToRemove);
    return this;
  };

  /**
   * Add or remove a CSS class name from the component's element
   *
   * @param  {String} classToToggle
   * @param  {Boolean|Function} [predicate]
   *         Can be a function that returns a Boolean. If `true`, the class
   *         will be added; if `false`, the class will be removed. If not
   *         given, the class will be added if not present and vice versa.
   *
   * @return {Component}
   * @method toggleClass
   */

  Component.prototype.toggleClass = function toggleClass(classToToggle, predicate) {
    Dom.toggleElClass(this.el_, classToToggle, predicate);
    return this;
  };

  /**
   * Show the component element if hidden
   *
   * @return {Component}
   * @method show
   */

  Component.prototype.show = function show() {
    this.removeClass('vjs-hidden');
    return this;
  };

  /**
   * Hide the component element if currently showing
   *
   * @return {Component}
   * @method hide
   */

  Component.prototype.hide = function hide() {
    this.addClass('vjs-hidden');
    return this;
  };

  /**
   * Lock an item in its visible state
   * To be used with fadeIn/fadeOut.
   *
   * @return {Component}
   * @private
   * @method lockShowing
   */

  Component.prototype.lockShowing = function lockShowing() {
    this.addClass('vjs-lock-showing');
    return this;
  };

  /**
   * Unlock an item to be hidden
   * To be used with fadeIn/fadeOut.
   *
   * @return {Component}
   * @private
   * @method unlockShowing
   */

  Component.prototype.unlockShowing = function unlockShowing() {
    this.removeClass('vjs-lock-showing');
    return this;
  };

  /**
   * Set or get the width of the component (CSS values)
   * Setting the video tag dimension values only works with values in pixels.
   * Percent values will not work.
   * Some percents can be used, but width()/height() will return the number + %,
   * not the actual computed width/height.
   *
   * @param  {Number|String=} num   Optional width number
   * @param  {Boolean} skipListeners Skip the 'resize' event trigger
   * @return {Component} This component, when setting the width
   * @return {Number|String} The width, when getting
   * @method width
   */

  Component.prototype.width = function width(num, skipListeners) {
    return this.dimension('width', num, skipListeners);
  };

  /**
   * Get or set the height of the component (CSS values)
   * Setting the video tag dimension values only works with values in pixels.
   * Percent values will not work.
   * Some percents can be used, but width()/height() will return the number + %,
   * not the actual computed width/height.
   *
   * @param  {Number|String=} num     New component height
   * @param  {Boolean=} skipListeners Skip the resize event trigger
   * @return {Component} This component, when setting the height
   * @return {Number|String} The height, when getting
   * @method height
   */

  Component.prototype.height = function height(num, skipListeners) {
    return this.dimension('height', num, skipListeners);
  };

  /**
   * Set both width and height at the same time
   *
   * @param  {Number|String} width Width of player
   * @param  {Number|String} height Height of player
   * @return {Component} The component
   * @method dimensions
   */

  Component.prototype.dimensions = function dimensions(width, height) {
    // Skip resize listeners on width for optimization
    return this.width(width, true).height(height);
  };

  /**
   * Get or set width or height
   * This is the shared code for the width() and height() methods.
   * All for an integer, integer + 'px' or integer + '%';
   * Known issue: Hidden elements officially have a width of 0. We're defaulting
   * to the style.width value and falling back to computedStyle which has the
   * hidden element issue. Info, but probably not an efficient fix:
   * http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/
   *
   * @param  {String} widthOrHeight  'width' or 'height'
   * @param  {Number|String=} num     New dimension
   * @param  {Boolean=} skipListeners Skip resize event trigger
   * @return {Component} The component if a dimension was set
   * @return {Number|String} The dimension if nothing was set
   * @private
   * @method dimension
   */

  Component.prototype.dimension = function dimension(widthOrHeight, num, skipListeners) {
    if (num !== undefined) {
      // Set to zero if null or literally NaN (NaN !== NaN)
      if (num === null || num !== num) {
        num = 0;
      }

      // Check if using css width/height (% or px) and adjust
      if (('' + num).indexOf('%') !== -1 || ('' + num).indexOf('px') !== -1) {
        this.el_.style[widthOrHeight] = num;
      } else if (num === 'auto') {
        this.el_.style[widthOrHeight] = '';
      } else {
        this.el_.style[widthOrHeight] = num + 'px';
      }

      // skipListeners allows us to avoid triggering the resize event when setting both width and height
      if (!skipListeners) {
        this.trigger('resize');
      }

      // Return component
      return this;
    }

    // Not setting a value, so getting it
    // Make sure element exists
    if (!this.el_) {
      return 0;
    }

    // Get dimension value from style
    var val = this.el_.style[widthOrHeight];
    var pxIndex = val.indexOf('px');

    if (pxIndex !== -1) {
      // Return the pixel value with no 'px'
      return parseInt(val.slice(0, pxIndex), 10);
    }

    // No px so using % or no style was set, so falling back to offsetWidth/height
    // If component has display:none, offset will return 0
    // TODO: handle display:none and no dimension style using px
    return parseInt(this.el_['offset' + _utilsToTitleCaseJs2['default'](widthOrHeight)], 10);
  };

  /**
   * Get width or height of computed style
   * @param  {String} widthOrHeight  'width' or 'height'
   * @return {Number|Boolean} The bolean false if nothing was set
   * @method currentDimension
   */

  Component.prototype.currentDimension = function currentDimension(widthOrHeight) {
    var computedWidthOrHeight = 0;

    if (widthOrHeight !== 'width' && widthOrHeight !== 'height') {
      throw new Error('currentDimension only accepts width or height value');
    }

    if (typeof _globalWindow2['default'].getComputedStyle === 'function') {
      var computedStyle = _globalWindow2['default'].getComputedStyle(this.el_);
      computedWidthOrHeight = computedStyle.getPropertyValue(widthOrHeight) || computedStyle[widthOrHeight];
    } else if (this.el_.currentStyle) {
      // ie 8 doesn't support computed style, shim it
      // return clientWidth or clientHeight instead for better accuracy
      var rule = 'offset' + _utilsToTitleCaseJs2['default'](widthOrHeight);
      computedWidthOrHeight = this.el_[rule];
    }

    // remove 'px' from variable and parse as integer
    computedWidthOrHeight = parseFloat(computedWidthOrHeight);
    return computedWidthOrHeight;
  };

  /**
   * Get an object which contains width and height values of computed style
   * @return {Object} The dimensions of element
   * @method currentDimensions
   */

  Component.prototype.currentDimensions = function currentDimensions() {
    return {
      width: this.currentDimension('width'),
      height: this.currentDimension('height')
    };
  };

  /**
   * Get width of computed style
   * @return {Integer}
   * @method currentWidth
   */

  Component.prototype.currentWidth = function currentWidth() {
    return this.currentDimension('width');
  };

  /**
   * Get height of computed style
   * @return {Integer}
   * @method currentHeight
   */

  Component.prototype.currentHeight = function currentHeight() {
    return this.currentDimension('height');
  };

  /**
   * Emit 'tap' events when touch events are supported
   * This is used to support toggling the controls through a tap on the video.
   * We're requiring them to be enabled because otherwise every component would
   * have this extra overhead unnecessarily, on mobile devices where extra
   * overhead is especially bad.
   *
   * @private
   * @method emitTapEvents
   */

  Component.prototype.emitTapEvents = function emitTapEvents() {
    // Track the start time so we can determine how long the touch lasted
    var touchStart = 0;
    var firstTouch = null;

    // Maximum movement allowed during a touch event to still be considered a tap
    // Other popular libs use anywhere from 2 (hammer.js) to 15, so 10 seems like a nice, round number.
    var tapMovementThreshold = 10;

    // The maximum length a touch can be while still being considered a tap
    var touchTimeThreshold = 200;

    var couldBeTap = undefined;

    this.on('touchstart', function (event) {
      // If more than one finger, don't consider treating this as a click
      if (event.touches.length === 1) {
        // Copy the touches object to prevent modifying the original
        firstTouch = _objectAssign2['default']({}, event.touches[0]);
        // Record start time so we can detect a tap vs. "touch and hold"
        touchStart = new Date().getTime();
        // Reset couldBeTap tracking
        couldBeTap = true;
      }
    });

    this.on('touchmove', function (event) {
      // If more than one finger, don't consider treating this as a click
      if (event.touches.length > 1) {
        couldBeTap = false;
      } else if (firstTouch) {
        // Some devices will throw touchmoves for all but the slightest of taps.
        // So, if we moved only a small distance, this could still be a tap
        var xdiff = event.touches[0].pageX - firstTouch.pageX;
        var ydiff = event.touches[0].pageY - firstTouch.pageY;
        var touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);

        if (touchDistance > tapMovementThreshold) {
          couldBeTap = false;
        }
      }
    });

    var noTap = function noTap() {
      couldBeTap = false;
    };

    // TODO: Listen to the original target. http://youtu.be/DujfpXOKUp8?t=13m8s
    this.on('touchleave', noTap);
    this.on('touchcancel', noTap);

    // When the touch ends, measure how long it took and trigger the appropriate
    // event
    this.on('touchend', function (event) {
      firstTouch = null;
      // Proceed only if the touchmove/leave/cancel event didn't happen
      if (couldBeTap === true) {
        // Measure how long the touch lasted
        var touchTime = new Date().getTime() - touchStart;

        // Make sure the touch was less than the threshold to be considered a tap
        if (touchTime < touchTimeThreshold) {
          // Don't let browser turn this into a click
          event.preventDefault();
          this.trigger('tap');
          // It may be good to copy the touchend event object and change the
          // type to tap, if the other event properties aren't exact after
          // Events.fixEvent runs (e.g. event.target)
        }
      }
    });
  };

  /**
   * Report user touch activity when touch events occur
   * User activity is used to determine when controls should show/hide. It's
   * relatively simple when it comes to mouse events, because any mouse event
   * should show the controls. So we capture mouse events that bubble up to the
   * player and report activity when that happens.
   * With touch events it isn't as easy. We can't rely on touch events at the
   * player level, because a tap (touchstart + touchend) on the video itself on
   * mobile devices is meant to turn controls off (and on). User activity is
   * checked asynchronously, so what could happen is a tap event on the video
   * turns the controls off, then the touchend event bubbles up to the player,
   * which if it reported user activity, would turn the controls right back on.
   * (We also don't want to completely block touch events from bubbling up)
   * Also a touchmove, touch+hold, and anything other than a tap is not supposed
   * to turn the controls back on on a mobile device.
   * Here we're setting the default component behavior to report user activity
   * whenever touch events happen, and this can be turned off by components that
   * want touch events to act differently.
   *
   * @method enableTouchActivity
   */

  Component.prototype.enableTouchActivity = function enableTouchActivity() {
    // Don't continue if the root player doesn't support reporting user activity
    if (!this.player() || !this.player().reportUserActivity) {
      return;
    }

    // listener for reporting that the user is active
    var report = Fn.bind(this.player(), this.player().reportUserActivity);

    var touchHolding = undefined;

    this.on('touchstart', function () {
      report();
      // For as long as the they are touching the device or have their mouse down,
      // we consider them active even if they're not moving their finger or mouse.
      // So we want to continue to update that they are active
      this.clearInterval(touchHolding);
      // report at the same interval as activityCheck
      touchHolding = this.setInterval(report, 250);
    });

    var touchEnd = function touchEnd(event) {
      report();
      // stop the interval that maintains activity if the touch is holding
      this.clearInterval(touchHolding);
    };

    this.on('touchmove', report);
    this.on('touchend', touchEnd);
    this.on('touchcancel', touchEnd);
  };

  /**
   * Creates timeout and sets up disposal automatically.
   *
   * @param {Function} fn The function to run after the timeout.
   * @param {Number} timeout Number of ms to delay before executing specified function.
   * @return {Number} Returns the timeout ID
   * @method setTimeout
   */

  Component.prototype.setTimeout = function setTimeout(fn, timeout) {
    fn = Fn.bind(this, fn);

    // window.setTimeout would be preferable here, but due to some bizarre issue with Sinon and/or Phantomjs, we can't.
    var timeoutId = _globalWindow2['default'].setTimeout(fn, timeout);

    var disposeFn = function disposeFn() {
      this.clearTimeout(timeoutId);
    };

    disposeFn.guid = 'vjs-timeout-' + timeoutId;

    this.on('dispose', disposeFn);

    return timeoutId;
  };

  /**
   * Clears a timeout and removes the associated dispose listener
   *
   * @param {Number} timeoutId The id of the timeout to clear
   * @return {Number} Returns the timeout ID
   * @method clearTimeout
   */

  Component.prototype.clearTimeout = function clearTimeout(timeoutId) {
    _globalWindow2['default'].clearTimeout(timeoutId);

    var disposeFn = function disposeFn() {};

    disposeFn.guid = 'vjs-timeout-' + timeoutId;

    this.off('dispose', disposeFn);

    return timeoutId;
  };

  /**
   * Creates an interval and sets up disposal automatically.
   *
   * @param {Function} fn The function to run every N seconds.
   * @param {Number} interval Number of ms to delay before executing specified function.
   * @return {Number} Returns the interval ID
   * @method setInterval
   */

  Component.prototype.setInterval = function setInterval(fn, interval) {
    fn = Fn.bind(this, fn);

    var intervalId = _globalWindow2['default'].setInterval(fn, interval);

    var disposeFn = function disposeFn() {
      this.clearInterval(intervalId);
    };

    disposeFn.guid = 'vjs-interval-' + intervalId;

    this.on('dispose', disposeFn);

    return intervalId;
  };

  /**
   * Clears an interval and removes the associated dispose listener
   *
   * @param {Number} intervalId The id of the interval to clear
   * @return {Number} Returns the interval ID
   * @method clearInterval
   */

  Component.prototype.clearInterval = function clearInterval(intervalId) {
    _globalWindow2['default'].clearInterval(intervalId);

    var disposeFn = function disposeFn() {};

    disposeFn.guid = 'vjs-interval-' + intervalId;

    this.off('dispose', disposeFn);

    return intervalId;
  };

  /**
   * Registers a component
   *
   * @param {String} name Name of the component to register
   * @param {Object} comp The component to register
   * @static
   * @method registerComponent
   */

  Component.registerComponent = function registerComponent(name, comp) {
    if (!Component.components_) {
      Component.components_ = {};
    }

    Component.components_[name] = comp;
    return comp;
  };

  /**
   * Gets a component by name
   *
   * @param {String} name Name of the component to get
   * @return {Component}
   * @static
   * @method getComponent
   */

  Component.getComponent = function getComponent(name) {
    if (Component.components_ && Component.components_[name]) {
      return Component.components_[name];
    }

    if (_globalWindow2['default'] && _globalWindow2['default'].videojs && _globalWindow2['default'].videojs[name]) {
      _utilsLogJs2['default'].warn('The ' + name + ' component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)');
      return _globalWindow2['default'].videojs[name];
    }
  };

  /**
   * Sets up the constructor using the supplied init method
   * or uses the init of the parent object
   *
   * @param {Object} props An object of properties
   * @static
   * @deprecated
   * @method extend
   */

  Component.extend = function extend(props) {
    props = props || {};

    _utilsLogJs2['default'].warn('Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead');

    // Set up the constructor using the supplied init method
    // or using the init of the parent object
    // Make sure to check the unobfuscated version for external libs
    var init = props.init || props.init || this.prototype.init || this.prototype.init || function () {};
    // In Resig's simple class inheritance (previously used) the constructor
    //  is a function that calls `this.init.apply(arguments)`
    // However that would prevent us from using `ParentObject.call(this);`
    //  in a Child constructor because the `this` in `this.init`
    //  would still refer to the Child and cause an infinite loop.
    // We would instead have to do
    //    `ParentObject.prototype.init.apply(this, arguments);`
    //  Bleh. We're not creating a _super() function, so it's good to keep
    //  the parent constructor reference simple.
    var subObj = function subObj() {
      init.apply(this, arguments);
    };

    // Inherit from this object's prototype
    subObj.prototype = Object.create(this.prototype);
    // Reset the constructor property for subObj otherwise
    // instances of subObj would have the constructor of the parent Object
    subObj.prototype.constructor = subObj;

    // Make the class extendable
    subObj.extend = Component.extend;

    // Extend subObj's prototype with functions and other properties from props
    for (var _name in props) {
      if (props.hasOwnProperty(_name)) {
        subObj.prototype[_name] = props[_name];
      }
    }

    return subObj;
  };

  return Component;
})();

Component.registerComponent('Component', Component);
exports['default'] = Component;
module.exports = exports['default'];

},{"./utils/dom.js":134,"./utils/events.js":135,"./utils/fn.js":136,"./utils/guid.js":138,"./utils/log.js":139,"./utils/merge-options.js":140,"./utils/to-title-case.js":143,"global/window":2,"object.assign":45}],68:[function(_dereq_,module,exports){
/**
 * @file control-bar.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

// Required children

var _playToggleJs = _dereq_('./play-toggle.js');

var _playToggleJs2 = _interopRequireDefault(_playToggleJs);

var _timeControlsCurrentTimeDisplayJs = _dereq_('./time-controls/current-time-display.js');

var _timeControlsCurrentTimeDisplayJs2 = _interopRequireDefault(_timeControlsCurrentTimeDisplayJs);

var _timeControlsDurationDisplayJs = _dereq_('./time-controls/duration-display.js');

var _timeControlsDurationDisplayJs2 = _interopRequireDefault(_timeControlsDurationDisplayJs);

var _timeControlsTimeDividerJs = _dereq_('./time-controls/time-divider.js');

var _timeControlsTimeDividerJs2 = _interopRequireDefault(_timeControlsTimeDividerJs);

var _timeControlsRemainingTimeDisplayJs = _dereq_('./time-controls/remaining-time-display.js');

var _timeControlsRemainingTimeDisplayJs2 = _interopRequireDefault(_timeControlsRemainingTimeDisplayJs);

var _liveDisplayJs = _dereq_('./live-display.js');

var _liveDisplayJs2 = _interopRequireDefault(_liveDisplayJs);

var _progressControlProgressControlJs = _dereq_('./progress-control/progress-control.js');

var _progressControlProgressControlJs2 = _interopRequireDefault(_progressControlProgressControlJs);

var _fullscreenToggleJs = _dereq_('./fullscreen-toggle.js');

var _fullscreenToggleJs2 = _interopRequireDefault(_fullscreenToggleJs);

var _volumeControlVolumeControlJs = _dereq_('./volume-control/volume-control.js');

var _volumeControlVolumeControlJs2 = _interopRequireDefault(_volumeControlVolumeControlJs);

var _volumeMenuButtonJs = _dereq_('./volume-menu-button.js');

var _volumeMenuButtonJs2 = _interopRequireDefault(_volumeMenuButtonJs);

var _muteToggleJs = _dereq_('./mute-toggle.js');

var _muteToggleJs2 = _interopRequireDefault(_muteToggleJs);

var _textTrackControlsChaptersButtonJs = _dereq_('./text-track-controls/chapters-button.js');

var _textTrackControlsChaptersButtonJs2 = _interopRequireDefault(_textTrackControlsChaptersButtonJs);

var _textTrackControlsDescriptionsButtonJs = _dereq_('./text-track-controls/descriptions-button.js');

var _textTrackControlsDescriptionsButtonJs2 = _interopRequireDefault(_textTrackControlsDescriptionsButtonJs);

var _textTrackControlsSubtitlesButtonJs = _dereq_('./text-track-controls/subtitles-button.js');

var _textTrackControlsSubtitlesButtonJs2 = _interopRequireDefault(_textTrackControlsSubtitlesButtonJs);

var _textTrackControlsCaptionsButtonJs = _dereq_('./text-track-controls/captions-button.js');

var _textTrackControlsCaptionsButtonJs2 = _interopRequireDefault(_textTrackControlsCaptionsButtonJs);

var _playbackRateMenuPlaybackRateMenuButtonJs = _dereq_('./playback-rate-menu/playback-rate-menu-button.js');

var _playbackRateMenuPlaybackRateMenuButtonJs2 = _interopRequireDefault(_playbackRateMenuPlaybackRateMenuButtonJs);

var _spacerControlsCustomControlSpacerJs = _dereq_('./spacer-controls/custom-control-spacer.js');

var _spacerControlsCustomControlSpacerJs2 = _interopRequireDefault(_spacerControlsCustomControlSpacerJs);

/**
 * Container of main controls
 *
 * @extends Component
 * @class ControlBar
 */

var ControlBar = (function (_Component) {
  _inherits(ControlBar, _Component);

  function ControlBar() {
    _classCallCheck(this, ControlBar);

    _Component.apply(this, arguments);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  ControlBar.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-control-bar',
      dir: 'ltr'
    }, {
      'role': 'group' // The control bar is a group, so it can contain menuitems
    });
  };

  return ControlBar;
})(_componentJs2['default']);

ControlBar.prototype.options_ = {
  loadEvent: 'play',
  children: ['playToggle', 'volumeMenuButton', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subtitlesButton', 'captionsButton', 'fullscreenToggle']
};

_componentJs2['default'].registerComponent('ControlBar', ControlBar);
exports['default'] = ControlBar;
module.exports = exports['default'];

},{"../component.js":67,"./fullscreen-toggle.js":69,"./live-display.js":70,"./mute-toggle.js":71,"./play-toggle.js":72,"./playback-rate-menu/playback-rate-menu-button.js":73,"./progress-control/progress-control.js":78,"./spacer-controls/custom-control-spacer.js":81,"./text-track-controls/captions-button.js":84,"./text-track-controls/chapters-button.js":85,"./text-track-controls/descriptions-button.js":87,"./text-track-controls/subtitles-button.js":89,"./time-controls/current-time-display.js":92,"./time-controls/duration-display.js":93,"./time-controls/remaining-time-display.js":94,"./time-controls/time-divider.js":95,"./volume-control/volume-control.js":97,"./volume-menu-button.js":99}],69:[function(_dereq_,module,exports){
/**
 * @file fullscreen-toggle.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _buttonJs = _dereq_('../button.js');

var _buttonJs2 = _interopRequireDefault(_buttonJs);

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * Toggle fullscreen video
 *
 * @extends Button
 * @class FullscreenToggle
 */

var FullscreenToggle = (function (_Button) {
  _inherits(FullscreenToggle, _Button);

  function FullscreenToggle() {
    _classCallCheck(this, FullscreenToggle);

    _Button.apply(this, arguments);
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  FullscreenToggle.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-fullscreen-control ' + _Button.prototype.buildCSSClass.call(this);
  };

  /**
   * Handles click for full screen
   *
   * @method handleClick
   */

  FullscreenToggle.prototype.handleClick = function handleClick() {
    if (!this.player_.isFullscreen()) {
      this.player_.requestFullscreen();
      this.controlText('Non-Fullscreen');
    } else {
      this.player_.exitFullscreen();
      this.controlText('Fullscreen');
    }
  };

  return FullscreenToggle;
})(_buttonJs2['default']);

FullscreenToggle.prototype.controlText_ = 'Fullscreen';

_componentJs2['default'].registerComponent('FullscreenToggle', FullscreenToggle);
exports['default'] = FullscreenToggle;
module.exports = exports['default'];

},{"../button.js":64,"../component.js":67}],70:[function(_dereq_,module,exports){
/**
 * @file live-display.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = _dereq_('../component');

var _component2 = _interopRequireDefault(_component);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

/**
 * Displays the live indicator
 * TODO - Future make it click to snap to live
 *
 * @extends Component
 * @class LiveDisplay
 */

var LiveDisplay = (function (_Component) {
  _inherits(LiveDisplay, _Component);

  function LiveDisplay(player, options) {
    _classCallCheck(this, LiveDisplay);

    _Component.call(this, player, options);

    this.updateShowing();
    this.on(this.player(), 'durationchange', this.updateShowing);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  LiveDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-live-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-live-display',
      innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '</span>' + this.localize('LIVE')
    }, {
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  LiveDisplay.prototype.updateShowing = function updateShowing() {
    if (this.player().duration() === Infinity) {
      this.show();
    } else {
      this.hide();
    }
  };

  return LiveDisplay;
})(_component2['default']);

_component2['default'].registerComponent('LiveDisplay', LiveDisplay);
exports['default'] = LiveDisplay;
module.exports = exports['default'];

},{"../component":67,"../utils/dom.js":134}],71:[function(_dereq_,module,exports){
/**
 * @file mute-toggle.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _button = _dereq_('../button');

var _button2 = _interopRequireDefault(_button);

var _component = _dereq_('../component');

var _component2 = _interopRequireDefault(_component);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

/**
 * A button component for muting the audio
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class MuteToggle
 */

var MuteToggle = (function (_Button) {
  _inherits(MuteToggle, _Button);

  function MuteToggle(player, options) {
    _classCallCheck(this, MuteToggle);

    _Button.call(this, player, options);

    this.on(player, 'volumechange', this.update);

    // hide mute toggle if the current tech doesn't support volume control
    if (player.tech_ && player.tech_['featuresVolumeControl'] === false) {
      this.addClass('vjs-hidden');
    }

    this.on(player, 'loadstart', function () {
      this.update(); // We need to update the button to account for a default muted state.

      if (player.tech_['featuresVolumeControl'] === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    });
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  MuteToggle.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-mute-control ' + _Button.prototype.buildCSSClass.call(this);
  };

  /**
   * Handle click on mute
   *
   * @method handleClick
   */

  MuteToggle.prototype.handleClick = function handleClick() {
    this.player_.muted(this.player_.muted() ? false : true);
  };

  /**
   * Update volume
   *
   * @method update
   */

  MuteToggle.prototype.update = function update() {
    var vol = this.player_.volume(),
        level = 3;

    if (vol === 0 || this.player_.muted()) {
      level = 0;
    } else if (vol < 0.33) {
      level = 1;
    } else if (vol < 0.67) {
      level = 2;
    }

    // Don't rewrite the button text if the actual text doesn't change.
    // This causes unnecessary and confusing information for screen reader users.
    // This check is needed because this function gets called every time the volume level is changed.
    var toMute = this.player_.muted() ? 'Unmute' : 'Mute';
    if (this.controlText() !== toMute) {
      this.controlText(toMute);
    }

    /* TODO improve muted icon classes */
    for (var i = 0; i < 4; i++) {
      Dom.removeElClass(this.el_, 'vjs-vol-' + i);
    }
    Dom.addElClass(this.el_, 'vjs-vol-' + level);
  };

  return MuteToggle;
})(_button2['default']);

MuteToggle.prototype.controlText_ = 'Mute';

_component2['default'].registerComponent('MuteToggle', MuteToggle);
exports['default'] = MuteToggle;
module.exports = exports['default'];

},{"../button":64,"../component":67,"../utils/dom.js":134}],72:[function(_dereq_,module,exports){
/**
 * @file play-toggle.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _buttonJs = _dereq_('../button.js');

var _buttonJs2 = _interopRequireDefault(_buttonJs);

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * Button to toggle between play and pause
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class PlayToggle
 */

var PlayToggle = (function (_Button) {
  _inherits(PlayToggle, _Button);

  function PlayToggle(player, options) {
    _classCallCheck(this, PlayToggle);

    _Button.call(this, player, options);

    this.on(player, 'play', this.handlePlay);
    this.on(player, 'pause', this.handlePause);
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  PlayToggle.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-play-control ' + _Button.prototype.buildCSSClass.call(this);
  };

  /**
   * Handle click to toggle between play and pause
   *
   * @method handleClick
   */

  PlayToggle.prototype.handleClick = function handleClick() {
    if (this.player_.paused()) {
      this.player_.play();
    } else {
      this.player_.pause();
    }
  };

  /**
   * Add the vjs-playing class to the element so it can change appearance
   *
   * @method handlePlay
   */

  PlayToggle.prototype.handlePlay = function handlePlay() {
    this.removeClass('vjs-paused');
    this.addClass('vjs-playing');
    this.controlText('Pause'); // change the button text to "Pause"
  };

  /**
   * Add the vjs-paused class to the element so it can change appearance
   *
   * @method handlePause
   */

  PlayToggle.prototype.handlePause = function handlePause() {
    this.removeClass('vjs-playing');
    this.addClass('vjs-paused');
    this.controlText('Play'); // change the button text to "Play"
  };

  return PlayToggle;
})(_buttonJs2['default']);

PlayToggle.prototype.controlText_ = 'Play';

_componentJs2['default'].registerComponent('PlayToggle', PlayToggle);
exports['default'] = PlayToggle;
module.exports = exports['default'];

},{"../button.js":64,"../component.js":67}],73:[function(_dereq_,module,exports){
/**
 * @file playback-rate-menu-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _menuMenuButtonJs = _dereq_('../../menu/menu-button.js');

var _menuMenuButtonJs2 = _interopRequireDefault(_menuMenuButtonJs);

var _menuMenuJs = _dereq_('../../menu/menu.js');

var _menuMenuJs2 = _interopRequireDefault(_menuMenuJs);

var _playbackRateMenuItemJs = _dereq_('./playback-rate-menu-item.js');

var _playbackRateMenuItemJs2 = _interopRequireDefault(_playbackRateMenuItemJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

/**
 * The component for controlling the playback rate
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends MenuButton
 * @class PlaybackRateMenuButton
 */

var PlaybackRateMenuButton = (function (_MenuButton) {
  _inherits(PlaybackRateMenuButton, _MenuButton);

  function PlaybackRateMenuButton(player, options) {
    _classCallCheck(this, PlaybackRateMenuButton);

    _MenuButton.call(this, player, options);

    this.updateVisibility();
    this.updateLabel();

    this.on(player, 'loadstart', this.updateVisibility);
    this.on(player, 'ratechange', this.updateLabel);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  PlaybackRateMenuButton.prototype.createEl = function createEl() {
    var el = _MenuButton.prototype.createEl.call(this);

    this.labelEl_ = Dom.createEl('div', {
      className: 'vjs-playback-rate-value',
      innerHTML: 1.0
    });

    el.appendChild(this.labelEl_);

    return el;
  };

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  PlaybackRateMenuButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-playback-rate ' + _MenuButton.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the playback rate menu
   *
   * @return {Menu} Menu object populated with items
   * @method createMenu
   */

  PlaybackRateMenuButton.prototype.createMenu = function createMenu() {
    var menu = new _menuMenuJs2['default'](this.player());
    var rates = this.playbackRates();

    if (rates) {
      for (var i = rates.length - 1; i >= 0; i--) {
        menu.addChild(new _playbackRateMenuItemJs2['default'](this.player(), { 'rate': rates[i] + 'x' }));
      }
    }

    return menu;
  };

  /**
   * Updates ARIA accessibility attributes
   *
   * @method updateARIAAttributes
   */

  PlaybackRateMenuButton.prototype.updateARIAAttributes = function updateARIAAttributes() {
    // Current playback rate
    this.el().setAttribute('aria-valuenow', this.player().playbackRate());
  };

  /**
   * Handle menu item click
   *
   * @method handleClick
   */

  PlaybackRateMenuButton.prototype.handleClick = function handleClick() {
    // select next rate option
    var currentRate = this.player().playbackRate();
    var rates = this.playbackRates();

    // this will select first one if the last one currently selected
    var newRate = rates[0];
    for (var i = 0; i < rates.length; i++) {
      if (rates[i] > currentRate) {
        newRate = rates[i];
        break;
      }
    }
    this.player().playbackRate(newRate);
  };

  /**
   * Get possible playback rates
   *
   * @return {Array} Possible playback rates
   * @method playbackRates
   */

  PlaybackRateMenuButton.prototype.playbackRates = function playbackRates() {
    return this.options_['playbackRates'] || this.options_.playerOptions && this.options_.playerOptions['playbackRates'];
  };

  /**
   * Get whether playback rates is supported by the tech
   * and an array of playback rates exists
   *
   * @return {Boolean} Whether changing playback rate is supported
   * @method playbackRateSupported
   */

  PlaybackRateMenuButton.prototype.playbackRateSupported = function playbackRateSupported() {
    return this.player().tech_ && this.player().tech_['featuresPlaybackRate'] && this.playbackRates() && this.playbackRates().length > 0;
  };

  /**
   * Hide playback rate controls when they're no playback rate options to select
   *
   * @method updateVisibility
   */

  PlaybackRateMenuButton.prototype.updateVisibility = function updateVisibility() {
    if (this.playbackRateSupported()) {
      this.removeClass('vjs-hidden');
    } else {
      this.addClass('vjs-hidden');
    }
  };

  /**
   * Update button label when rate changed
   *
   * @method updateLabel
   */

  PlaybackRateMenuButton.prototype.updateLabel = function updateLabel() {
    if (this.playbackRateSupported()) {
      this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
    }
  };

  return PlaybackRateMenuButton;
})(_menuMenuButtonJs2['default']);

PlaybackRateMenuButton.prototype.controlText_ = 'Playback Rate';

_componentJs2['default'].registerComponent('PlaybackRateMenuButton', PlaybackRateMenuButton);
exports['default'] = PlaybackRateMenuButton;
module.exports = exports['default'];

},{"../../component.js":67,"../../menu/menu-button.js":106,"../../menu/menu.js":108,"../../utils/dom.js":134,"./playback-rate-menu-item.js":74}],74:[function(_dereq_,module,exports){
/**
 * @file playback-rate-menu-item.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _menuMenuItemJs = _dereq_('../../menu/menu-item.js');

var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * The specific menu item type for selecting a playback rate
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends MenuItem
 * @class PlaybackRateMenuItem
 */

var PlaybackRateMenuItem = (function (_MenuItem) {
  _inherits(PlaybackRateMenuItem, _MenuItem);

  function PlaybackRateMenuItem(player, options) {
    _classCallCheck(this, PlaybackRateMenuItem);

    var label = options['rate'];
    var rate = parseFloat(label, 10);

    // Modify options for parent MenuItem class's init.
    options['label'] = label;
    options['selected'] = rate === 1;
    _MenuItem.call(this, player, options);

    this.label = label;
    this.rate = rate;

    this.on(player, 'ratechange', this.update);
  }

  /**
   * Handle click on menu item
   *
   * @method handleClick
   */

  PlaybackRateMenuItem.prototype.handleClick = function handleClick() {
    _MenuItem.prototype.handleClick.call(this);
    this.player().playbackRate(this.rate);
  };

  /**
   * Update playback rate with selected rate
   *
   * @method update
   */

  PlaybackRateMenuItem.prototype.update = function update() {
    this.selected(this.player().playbackRate() === this.rate);
  };

  return PlaybackRateMenuItem;
})(_menuMenuItemJs2['default']);

PlaybackRateMenuItem.prototype.contentElType = 'button';

_componentJs2['default'].registerComponent('PlaybackRateMenuItem', PlaybackRateMenuItem);
exports['default'] = PlaybackRateMenuItem;
module.exports = exports['default'];

},{"../../component.js":67,"../../menu/menu-item.js":107}],75:[function(_dereq_,module,exports){
/**
 * @file load-progress-bar.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

/**
 * Shows load progress
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class LoadProgressBar
 */

var LoadProgressBar = (function (_Component) {
  _inherits(LoadProgressBar, _Component);

  function LoadProgressBar(player, options) {
    _classCallCheck(this, LoadProgressBar);

    _Component.call(this, player, options);
    this.on(player, 'progress', this.update);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  LoadProgressBar.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-load-progress',
      innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
    });
  };

  /**
   * Update progress bar
   *
   * @method update
   */

  LoadProgressBar.prototype.update = function update() {
    var buffered = this.player_.buffered();
    var duration = this.player_.duration();
    var bufferedEnd = this.player_.bufferedEnd();
    var children = this.el_.children;

    // get the percent width of a time compared to the total end
    var percentify = function percentify(time, end) {
      var percent = time / end || 0; // no NaN
      return (percent >= 1 ? 1 : percent) * 100 + '%';
    };

    // update the width of the progress bar
    this.el_.style.width = percentify(bufferedEnd, duration);

    // add child elements to represent the individual buffered time ranges
    for (var i = 0; i < buffered.length; i++) {
      var start = buffered.start(i);
      var end = buffered.end(i);
      var part = children[i];

      if (!part) {
        part = this.el_.appendChild(Dom.createEl());
      }

      // set the percent based on the width of the progress bar (bufferedEnd)
      part.style.left = percentify(start, bufferedEnd);
      part.style.width = percentify(end - start, bufferedEnd);
    }

    // remove unused buffered range elements
    for (var i = children.length; i > buffered.length; i--) {
      this.el_.removeChild(children[i - 1]);
    }
  };

  return LoadProgressBar;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('LoadProgressBar', LoadProgressBar);
exports['default'] = LoadProgressBar;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/dom.js":134}],76:[function(_dereq_,module,exports){
/**
 * @file mouse-time-display.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

var _lodashCompatFunctionThrottle = _dereq_('lodash-compat/function/throttle');

var _lodashCompatFunctionThrottle2 = _interopRequireDefault(_lodashCompatFunctionThrottle);

/**
 * The Mouse Time Display component shows the time you will seek to
 * when hovering over the progress bar
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class MouseTimeDisplay
 */

var MouseTimeDisplay = (function (_Component) {
  _inherits(MouseTimeDisplay, _Component);

  function MouseTimeDisplay(player, options) {
    var _this = this;

    _classCallCheck(this, MouseTimeDisplay);

    _Component.call(this, player, options);

    if (options.playerOptions && options.playerOptions.controlBar && options.playerOptions.controlBar.progressControl && options.playerOptions.controlBar.progressControl.keepTooltipsInside) {
      this.keepTooltipsInside = options.playerOptions.controlBar.progressControl.keepTooltipsInside;
    }

    if (this.keepTooltipsInside) {
      this.tooltip = Dom.createEl('div', { className: 'vjs-time-tooltip' });
      this.el().appendChild(this.tooltip);
      this.addClass('vjs-keep-tooltips-inside');
    }

    this.update(0, 0);

    player.on('ready', function () {
      _this.on(player.controlBar.progressControl.el(), 'mousemove', _lodashCompatFunctionThrottle2['default'](Fn.bind(_this, _this.handleMouseMove), 25));
    });
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  MouseTimeDisplay.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-mouse-display'
    });
  };

  MouseTimeDisplay.prototype.handleMouseMove = function handleMouseMove(event) {
    var duration = this.player_.duration();
    var newTime = this.calculateDistance(event) * duration;
    var position = event.pageX - Dom.findElPosition(this.el().parentNode).left;

    this.update(newTime, position);
  };

  MouseTimeDisplay.prototype.update = function update(newTime, position) {
    var time = _utilsFormatTimeJs2['default'](newTime, this.player_.duration());

    this.el().style.left = position + 'px';
    this.el().setAttribute('data-current-time', time);

    if (this.keepTooltipsInside) {
      var clampedPosition = this.clampPosition_(position);
      var difference = position - clampedPosition + 1;
      var tooltipWidth = parseFloat(_globalWindow2['default'].getComputedStyle(this.tooltip).width);
      var tooltipWidthHalf = tooltipWidth / 2;

      this.tooltip.innerHTML = time;
      this.tooltip.style.right = '-' + (tooltipWidthHalf - difference) + 'px';
    }
  };

  MouseTimeDisplay.prototype.calculateDistance = function calculateDistance(event) {
    return Dom.getPointerPosition(this.el().parentNode, event).x;
  };

  /**
   * This takes in a horizontal position for the bar and returns a clamped position.
   * Clamped position means that it will keep the position greater than half the width
   * of the tooltip and smaller than the player width minus half the width o the tooltip.
   * It will only clamp the position if `keepTooltipsInside` option is set.
   *
   * @param {Number} position the position the bar wants to be
   * @return {Number} newPosition the (potentially) clamped position
   * @method clampPosition_
   */

  MouseTimeDisplay.prototype.clampPosition_ = function clampPosition_(position) {
    if (!this.keepTooltipsInside) {
      return position;
    }

    var playerWidth = parseFloat(_globalWindow2['default'].getComputedStyle(this.player().el()).width);
    var tooltipWidth = parseFloat(_globalWindow2['default'].getComputedStyle(this.tooltip).width);
    var tooltipWidthHalf = tooltipWidth / 2;
    var actualPosition = position;

    if (position < tooltipWidthHalf) {
      actualPosition = Math.ceil(tooltipWidthHalf);
    } else if (position > playerWidth - tooltipWidthHalf) {
      actualPosition = Math.floor(playerWidth - tooltipWidthHalf);
    }

    return actualPosition;
  };

  return MouseTimeDisplay;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('MouseTimeDisplay', MouseTimeDisplay);
exports['default'] = MouseTimeDisplay;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/dom.js":134,"../../utils/fn.js":136,"../../utils/format-time.js":137,"global/window":2,"lodash-compat/function/throttle":7}],77:[function(_dereq_,module,exports){
/**
 * @file play-progress-bar.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

/**
 * Shows play progress
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class PlayProgressBar
 */

var PlayProgressBar = (function (_Component) {
  _inherits(PlayProgressBar, _Component);

  function PlayProgressBar(player, options) {
    _classCallCheck(this, PlayProgressBar);

    _Component.call(this, player, options);
    this.updateDataAttr();
    this.on(player, 'timeupdate', this.updateDataAttr);
    player.ready(Fn.bind(this, this.updateDataAttr));

    if (options.playerOptions && options.playerOptions.controlBar && options.playerOptions.controlBar.progressControl && options.playerOptions.controlBar.progressControl.keepTooltipsInside) {
      this.keepTooltipsInside = options.playerOptions.controlBar.progressControl.keepTooltipsInside;
    }

    if (this.keepTooltipsInside) {
      this.addClass('vjs-keep-tooltips-inside');
    }
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  PlayProgressBar.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-play-progress vjs-slider-bar',
      innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
    });
  };

  PlayProgressBar.prototype.updateDataAttr = function updateDataAttr() {
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.setAttribute('data-current-time', _utilsFormatTimeJs2['default'](time, this.player_.duration()));
  };

  return PlayProgressBar;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('PlayProgressBar', PlayProgressBar);
exports['default'] = PlayProgressBar;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/dom.js":134,"../../utils/fn.js":136,"../../utils/format-time.js":137}],78:[function(_dereq_,module,exports){
/**
 * @file progress-control.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _seekBarJs = _dereq_('./seek-bar.js');

var _seekBarJs2 = _interopRequireDefault(_seekBarJs);

var _mouseTimeDisplayJs = _dereq_('./mouse-time-display.js');

var _mouseTimeDisplayJs2 = _interopRequireDefault(_mouseTimeDisplayJs);

/**
 * The Progress Control component contains the seek bar, load progress,
 * and play progress
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class ProgressControl
 */

var ProgressControl = (function (_Component) {
  _inherits(ProgressControl, _Component);

  function ProgressControl() {
    _classCallCheck(this, ProgressControl);

    _Component.apply(this, arguments);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  ProgressControl.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-progress-control vjs-control'
    });
  };

  return ProgressControl;
})(_componentJs2['default']);

ProgressControl.prototype.options_ = {
  children: ['seekBar']
};

_componentJs2['default'].registerComponent('ProgressControl', ProgressControl);
exports['default'] = ProgressControl;
module.exports = exports['default'];

},{"../../component.js":67,"./mouse-time-display.js":76,"./seek-bar.js":79}],79:[function(_dereq_,module,exports){
/**
 * @file seek-bar.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _sliderSliderJs = _dereq_('../../slider/slider.js');

var _sliderSliderJs2 = _interopRequireDefault(_sliderSliderJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _loadProgressBarJs = _dereq_('./load-progress-bar.js');

var _loadProgressBarJs2 = _interopRequireDefault(_loadProgressBarJs);

var _playProgressBarJs = _dereq_('./play-progress-bar.js');

var _playProgressBarJs2 = _interopRequireDefault(_playProgressBarJs);

var _tooltipProgressBarJs = _dereq_('./tooltip-progress-bar.js');

var _tooltipProgressBarJs2 = _interopRequireDefault(_tooltipProgressBarJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

/**
 * Seek Bar and holder for the progress bars
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Slider
 * @class SeekBar
 */

var SeekBar = (function (_Slider) {
  _inherits(SeekBar, _Slider);

  function SeekBar(player, options) {
    _classCallCheck(this, SeekBar);

    _Slider.call(this, player, options);
    this.on(player, 'timeupdate', this.updateProgress);
    this.on(player, 'ended', this.updateProgress);
    player.ready(Fn.bind(this, this.updateProgress));

    if (options.playerOptions && options.playerOptions.controlBar && options.playerOptions.controlBar.progressControl && options.playerOptions.controlBar.progressControl.keepTooltipsInside) {
      this.keepTooltipsInside = options.playerOptions.controlBar.progressControl.keepTooltipsInside;
    }

    if (this.keepTooltipsInside) {
      this.tooltipProgressBar = this.addChild('TooltipProgressBar');
    }
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  SeekBar.prototype.createEl = function createEl() {
    return _Slider.prototype.createEl.call(this, 'div', {
      className: 'vjs-progress-holder'
    }, {
      'aria-label': 'progress bar'
    });
  };

  /**
   * Update ARIA accessibility attributes
   *
   * @method updateARIAAttributes
   */

  SeekBar.prototype.updateProgress = function updateProgress() {
    this.updateAriaAttributes(this.el_);

    if (this.keepTooltipsInside) {
      this.updateAriaAttributes(this.tooltipProgressBar.el_);
      this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;

      var playerWidth = parseFloat(_globalWindow2['default'].getComputedStyle(this.player().el()).width);
      var tooltipWidth = parseFloat(_globalWindow2['default'].getComputedStyle(this.tooltipProgressBar.tooltip).width);
      var tooltipStyle = this.tooltipProgressBar.el().style;
      tooltipStyle.maxWidth = Math.floor(playerWidth - tooltipWidth / 2) + 'px';
      tooltipStyle.minWidth = Math.ceil(tooltipWidth / 2) + 'px';
      tooltipStyle.right = '-' + tooltipWidth / 2 + 'px';
    }
  };

  SeekBar.prototype.updateAriaAttributes = function updateAriaAttributes(el) {
    // Allows for smooth scrubbing, when player can't keep up.
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    el.setAttribute('aria-valuenow', (this.getPercent() * 100).toFixed(2)); // machine readable value of progress bar (percentage complete)
    el.setAttribute('aria-valuetext', _utilsFormatTimeJs2['default'](time, this.player_.duration())); // human readable value of progress bar (time complete)
  };

  /**
   * Get percentage of video played
   *
   * @return {Number} Percentage played
   * @method getPercent
   */

  SeekBar.prototype.getPercent = function getPercent() {
    var percent = this.player_.currentTime() / this.player_.duration();
    return percent >= 1 ? 1 : percent;
  };

  /**
   * Handle mouse down on seek bar
   *
   * @method handleMouseDown
   */

  SeekBar.prototype.handleMouseDown = function handleMouseDown(event) {
    _Slider.prototype.handleMouseDown.call(this, event);

    this.player_.scrubbing(true);

    this.videoWasPlaying = !this.player_.paused();
    this.player_.pause();
  };

  /**
   * Handle mouse move on seek bar
   *
   * @method handleMouseMove
   */

  SeekBar.prototype.handleMouseMove = function handleMouseMove(event) {
    var newTime = this.calculateDistance(event) * this.player_.duration();

    // Don't let video end while scrubbing.
    if (newTime === this.player_.duration()) {
      newTime = newTime - 0.1;
    }

    // Set new time (tell player to seek to new time)
    this.player_.currentTime(newTime);
  };

  /**
   * Handle mouse up on seek bar
   *
   * @method handleMouseUp
   */

  SeekBar.prototype.handleMouseUp = function handleMouseUp(event) {
    _Slider.prototype.handleMouseUp.call(this, event);

    this.player_.scrubbing(false);
    if (this.videoWasPlaying) {
      this.player_.play();
    }
  };

  /**
   * Move more quickly fast forward for keyboard-only users
   *
   * @method stepForward
   */

  SeekBar.prototype.stepForward = function stepForward() {
    this.player_.currentTime(this.player_.currentTime() + 5); // more quickly fast forward for keyboard-only users
  };

  /**
   * Move more quickly rewind for keyboard-only users
   *
   * @method stepBack
   */

  SeekBar.prototype.stepBack = function stepBack() {
    this.player_.currentTime(this.player_.currentTime() - 5); // more quickly rewind for keyboard-only users
  };

  return SeekBar;
})(_sliderSliderJs2['default']);

SeekBar.prototype.options_ = {
  children: ['loadProgressBar', 'mouseTimeDisplay', 'playProgressBar'],
  'barName': 'playProgressBar'
};

SeekBar.prototype.playerEvent = 'timeupdate';

_componentJs2['default'].registerComponent('SeekBar', SeekBar);
exports['default'] = SeekBar;
module.exports = exports['default'];

},{"../../component.js":67,"../../slider/slider.js":116,"../../utils/fn.js":136,"../../utils/format-time.js":137,"./load-progress-bar.js":75,"./play-progress-bar.js":77,"./tooltip-progress-bar.js":80,"global/window":2,"object.assign":45}],80:[function(_dereq_,module,exports){
/**
 * @file play-progress-bar.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

/**
 * Shows play progress
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class PlayProgressBar
 */

var TooltipProgressBar = (function (_Component) {
  _inherits(TooltipProgressBar, _Component);

  function TooltipProgressBar(player, options) {
    _classCallCheck(this, TooltipProgressBar);

    _Component.call(this, player, options);
    this.updateDataAttr();
    this.on(player, 'timeupdate', this.updateDataAttr);
    player.ready(Fn.bind(this, this.updateDataAttr));
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  TooltipProgressBar.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-tooltip-progress-bar vjs-slider-bar',
      innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
    });

    this.tooltip = el.querySelector('.vjs-time-tooltip');

    return el;
  };

  TooltipProgressBar.prototype.updateDataAttr = function updateDataAttr() {
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    var formattedTime = _utilsFormatTimeJs2['default'](time, this.player_.duration());
    this.el_.setAttribute('data-current-time', formattedTime);
    this.tooltip.innerHTML = formattedTime;
  };

  return TooltipProgressBar;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('TooltipProgressBar', TooltipProgressBar);
exports['default'] = TooltipProgressBar;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/dom.js":134,"../../utils/fn.js":136,"../../utils/format-time.js":137}],81:[function(_dereq_,module,exports){
/**
 * @file custom-control-spacer.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _spacerJs = _dereq_('./spacer.js');

var _spacerJs2 = _interopRequireDefault(_spacerJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * Spacer specifically meant to be used as an insertion point for new plugins, etc.
 *
 * @extends Spacer
 * @class CustomControlSpacer
 */

var CustomControlSpacer = (function (_Spacer) {
  _inherits(CustomControlSpacer, _Spacer);

  function CustomControlSpacer() {
    _classCallCheck(this, CustomControlSpacer);

    _Spacer.apply(this, arguments);
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  CustomControlSpacer.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-custom-control-spacer ' + _Spacer.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  CustomControlSpacer.prototype.createEl = function createEl() {
    var el = _Spacer.prototype.createEl.call(this, {
      className: this.buildCSSClass()
    });

    // No-flex/table-cell mode requires there be some content
    // in the cell to fill the remaining space of the table.
    el.innerHTML = '&nbsp;';
    return el;
  };

  return CustomControlSpacer;
})(_spacerJs2['default']);

_componentJs2['default'].registerComponent('CustomControlSpacer', CustomControlSpacer);
exports['default'] = CustomControlSpacer;
module.exports = exports['default'];

},{"../../component.js":67,"./spacer.js":82}],82:[function(_dereq_,module,exports){
/**
 * @file spacer.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * Just an empty spacer element that can be used as an append point for plugins, etc.
 * Also can be used to create space between elements when necessary.
 *
 * @extends Component
 * @class Spacer
 */

var Spacer = (function (_Component) {
  _inherits(Spacer, _Component);

  function Spacer() {
    _classCallCheck(this, Spacer);

    _Component.apply(this, arguments);
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  Spacer.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-spacer ' + _Component.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  Spacer.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass()
    });
  };

  return Spacer;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('Spacer', Spacer);

exports['default'] = Spacer;
module.exports = exports['default'];

},{"../../component.js":67}],83:[function(_dereq_,module,exports){
/**
 * @file caption-settings-menu-item.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');

var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * The menu item for caption track settings menu
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends TextTrackMenuItem
 * @class CaptionSettingsMenuItem
 */

var CaptionSettingsMenuItem = (function (_TextTrackMenuItem) {
  _inherits(CaptionSettingsMenuItem, _TextTrackMenuItem);

  function CaptionSettingsMenuItem(player, options) {
    _classCallCheck(this, CaptionSettingsMenuItem);

    options['track'] = {
      'kind': options['kind'],
      'player': player,
      'label': options['kind'] + ' settings',
      'selectable': false,
      'default': false,
      mode: 'disabled'
    };

    // CaptionSettingsMenuItem has no concept of 'selected'
    options['selectable'] = false;

    _TextTrackMenuItem.call(this, player, options);
    this.addClass('vjs-texttrack-settings');
    this.controlText(', opens ' + options['kind'] + ' settings dialog');
  }

  /**
   * Handle click on menu item
   *
   * @method handleClick
   */

  CaptionSettingsMenuItem.prototype.handleClick = function handleClick() {
    this.player().getChild('textTrackSettings').show();
    this.player().getChild('textTrackSettings').el_.focus();
  };

  return CaptionSettingsMenuItem;
})(_textTrackMenuItemJs2['default']);

_componentJs2['default'].registerComponent('CaptionSettingsMenuItem', CaptionSettingsMenuItem);
exports['default'] = CaptionSettingsMenuItem;
module.exports = exports['default'];

},{"../../component.js":67,"./text-track-menu-item.js":91}],84:[function(_dereq_,module,exports){
/**
 * @file captions-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _textTrackButtonJs = _dereq_('./text-track-button.js');

var _textTrackButtonJs2 = _interopRequireDefault(_textTrackButtonJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _captionSettingsMenuItemJs = _dereq_('./caption-settings-menu-item.js');

var _captionSettingsMenuItemJs2 = _interopRequireDefault(_captionSettingsMenuItemJs);

/**
 * The button component for toggling and selecting captions
 *
 * @param {Object} player  Player object
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends TextTrackButton
 * @class CaptionsButton
 */

var CaptionsButton = (function (_TextTrackButton) {
  _inherits(CaptionsButton, _TextTrackButton);

  function CaptionsButton(player, options, ready) {
    _classCallCheck(this, CaptionsButton);

    _TextTrackButton.call(this, player, options, ready);
    this.el_.setAttribute('aria-label', 'Captions Menu');
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  CaptionsButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-captions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  /**
   * Update caption menu items
   *
   * @method update
   */

  CaptionsButton.prototype.update = function update() {
    var threshold = 2;
    _TextTrackButton.prototype.update.call(this);

    // if native, then threshold is 1 because no settings button
    if (this.player().tech_ && this.player().tech_['featuresNativeTextTracks']) {
      threshold = 1;
    }

    if (this.items && this.items.length > threshold) {
      this.show();
    } else {
      this.hide();
    }
  };

  /**
   * Create caption menu items
   *
   * @return {Array} Array of menu items
   * @method createItems
   */

  CaptionsButton.prototype.createItems = function createItems() {
    var items = [];

    if (!(this.player().tech_ && this.player().tech_['featuresNativeTextTracks'])) {
      items.push(new _captionSettingsMenuItemJs2['default'](this.player_, { 'kind': this.kind_ }));
    }

    return _TextTrackButton.prototype.createItems.call(this, items);
  };

  return CaptionsButton;
})(_textTrackButtonJs2['default']);

CaptionsButton.prototype.kind_ = 'captions';
CaptionsButton.prototype.controlText_ = 'Captions';

_componentJs2['default'].registerComponent('CaptionsButton', CaptionsButton);
exports['default'] = CaptionsButton;
module.exports = exports['default'];

},{"../../component.js":67,"./caption-settings-menu-item.js":83,"./text-track-button.js":90}],85:[function(_dereq_,module,exports){
/**
 * @file chapters-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _textTrackButtonJs = _dereq_('./text-track-button.js');

var _textTrackButtonJs2 = _interopRequireDefault(_textTrackButtonJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');

var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);

var _chaptersTrackMenuItemJs = _dereq_('./chapters-track-menu-item.js');

var _chaptersTrackMenuItemJs2 = _interopRequireDefault(_chaptersTrackMenuItemJs);

var _menuMenuJs = _dereq_('../../menu/menu.js');

var _menuMenuJs2 = _interopRequireDefault(_menuMenuJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsToTitleCaseJs = _dereq_('../../utils/to-title-case.js');

var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

/**
 * The button component for toggling and selecting chapters
 * Chapters act much differently than other text tracks
 * Cues are navigation vs. other tracks of alternative languages
 *
 * @param {Object} player  Player object
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends TextTrackButton
 * @class ChaptersButton
 */

var ChaptersButton = (function (_TextTrackButton) {
  _inherits(ChaptersButton, _TextTrackButton);

  function ChaptersButton(player, options, ready) {
    _classCallCheck(this, ChaptersButton);

    _TextTrackButton.call(this, player, options, ready);
    this.el_.setAttribute('aria-label', 'Chapters Menu');
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  ChaptersButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-chapters-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  /**
   * Create a menu item for each text track
   *
   * @return {Array} Array of menu items
   * @method createItems
   */

  ChaptersButton.prototype.createItems = function createItems() {
    var items = [];

    var tracks = this.player_.textTracks();

    if (!tracks) {
      return items;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      if (track['kind'] === this.kind_) {
        items.push(new _textTrackMenuItemJs2['default'](this.player_, {
          'track': track
        }));
      }
    }

    return items;
  };

  /**
   * Create menu from chapter buttons
   *
   * @return {Menu} Menu of chapter buttons
   * @method createMenu
   */

  ChaptersButton.prototype.createMenu = function createMenu() {
    var _this = this;

    var tracks = this.player_.textTracks() || [];
    var chaptersTrack = undefined;
    var items = this.items = [];

    for (var i = 0, _length = tracks.length; i < _length; i++) {
      var track = tracks[i];

      if (track['kind'] === this.kind_) {
        chaptersTrack = track;

        break;
      }
    }

    var menu = this.menu;
    if (menu === undefined) {
      menu = new _menuMenuJs2['default'](this.player_);
      var title = Dom.createEl('li', {
        className: 'vjs-menu-title',
        innerHTML: _utilsToTitleCaseJs2['default'](this.kind_),
        tabIndex: -1
      });
      menu.children_.unshift(title);
      Dom.insertElFirst(title, menu.contentEl());
    }

    if (chaptersTrack && chaptersTrack.cues == null) {
      chaptersTrack['mode'] = 'hidden';

      var remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(chaptersTrack);

      if (remoteTextTrackEl) {
        remoteTextTrackEl.addEventListener('load', function (event) {
          return _this.update();
        });
      }
    }

    if (chaptersTrack && chaptersTrack.cues && chaptersTrack.cues.length > 0) {
      var cues = chaptersTrack['cues'],
          cue = undefined;

      for (var i = 0, l = cues.length; i < l; i++) {
        cue = cues[i];

        var mi = new _chaptersTrackMenuItemJs2['default'](this.player_, {
          'track': chaptersTrack,
          'cue': cue
        });

        items.push(mi);

        menu.addChild(mi);
      }

      this.addChild(menu);
    }

    if (this.items.length > 0) {
      this.show();
    }

    return menu;
  };

  return ChaptersButton;
})(_textTrackButtonJs2['default']);

ChaptersButton.prototype.kind_ = 'chapters';
ChaptersButton.prototype.controlText_ = 'Chapters';

_componentJs2['default'].registerComponent('ChaptersButton', ChaptersButton);
exports['default'] = ChaptersButton;
module.exports = exports['default'];

},{"../../component.js":67,"../../menu/menu.js":108,"../../utils/dom.js":134,"../../utils/fn.js":136,"../../utils/to-title-case.js":143,"./chapters-track-menu-item.js":86,"./text-track-button.js":90,"./text-track-menu-item.js":91,"global/window":2}],86:[function(_dereq_,module,exports){
/**
 * @file chapters-track-menu-item.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _menuMenuItemJs = _dereq_('../../menu/menu-item.js');

var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

/**
 * The chapter track menu item
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends MenuItem
 * @class ChaptersTrackMenuItem
 */

var ChaptersTrackMenuItem = (function (_MenuItem) {
  _inherits(ChaptersTrackMenuItem, _MenuItem);

  function ChaptersTrackMenuItem(player, options) {
    _classCallCheck(this, ChaptersTrackMenuItem);

    var track = options['track'];
    var cue = options['cue'];
    var currentTime = player.currentTime();

    // Modify options for parent MenuItem class's init.
    options['label'] = cue.text;
    options['selected'] = cue['startTime'] <= currentTime && currentTime < cue['endTime'];
    _MenuItem.call(this, player, options);

    this.track = track;
    this.cue = cue;
    track.addEventListener('cuechange', Fn.bind(this, this.update));
  }

  /**
   * Handle click on menu item
   *
   * @method handleClick
   */

  ChaptersTrackMenuItem.prototype.handleClick = function handleClick() {
    _MenuItem.prototype.handleClick.call(this);
    this.player_.currentTime(this.cue.startTime);
    this.update(this.cue.startTime);
  };

  /**
   * Update chapter menu item
   *
   * @method update
   */

  ChaptersTrackMenuItem.prototype.update = function update() {
    var cue = this.cue;
    var currentTime = this.player_.currentTime();

    // vjs.log(currentTime, cue.startTime);
    this.selected(cue['startTime'] <= currentTime && currentTime < cue['endTime']);
  };

  return ChaptersTrackMenuItem;
})(_menuMenuItemJs2['default']);

_componentJs2['default'].registerComponent('ChaptersTrackMenuItem', ChaptersTrackMenuItem);
exports['default'] = ChaptersTrackMenuItem;
module.exports = exports['default'];

},{"../../component.js":67,"../../menu/menu-item.js":107,"../../utils/fn.js":136}],87:[function(_dereq_,module,exports){
/**
 * @file descriptions-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _textTrackButtonJs = _dereq_('./text-track-button.js');

var _textTrackButtonJs2 = _interopRequireDefault(_textTrackButtonJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

/**
 * The button component for toggling and selecting descriptions
 *
 * @param {Object} player  Player object
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends TextTrackButton
 * @class DescriptionsButton
 */

var DescriptionsButton = (function (_TextTrackButton) {
  _inherits(DescriptionsButton, _TextTrackButton);

  function DescriptionsButton(player, options, ready) {
    var _this = this;

    _classCallCheck(this, DescriptionsButton);

    _TextTrackButton.call(this, player, options, ready);
    this.el_.setAttribute('aria-label', 'Descriptions Menu');

    var tracks = player.textTracks();

    if (tracks) {
      (function () {
        var changeHandler = Fn.bind(_this, _this.handleTracksChange);

        tracks.addEventListener('change', changeHandler);
        _this.on('dispose', function () {
          tracks.removeEventListener('change', changeHandler);
        });
      })();
    }
  }

  /**
   * Handle text track change
   *
   * @method handleTracksChange
   */

  DescriptionsButton.prototype.handleTracksChange = function handleTracksChange(event) {
    var tracks = this.player().textTracks();
    var disabled = false;

    // Check whether a track of a different kind is showing
    for (var i = 0, l = tracks.length; i < l; i++) {
      var track = tracks[i];
      if (track['kind'] !== this.kind_ && track['mode'] === 'showing') {
        disabled = true;
        break;
      }
    }

    // If another track is showing, disable this menu button
    if (disabled) {
      this.disable();
    } else {
      this.enable();
    }
  };

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  DescriptionsButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-descriptions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  return DescriptionsButton;
})(_textTrackButtonJs2['default']);

DescriptionsButton.prototype.kind_ = 'descriptions';
DescriptionsButton.prototype.controlText_ = 'Descriptions';

_componentJs2['default'].registerComponent('DescriptionsButton', DescriptionsButton);
exports['default'] = DescriptionsButton;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/fn.js":136,"./text-track-button.js":90}],88:[function(_dereq_,module,exports){
/**
 * @file off-text-track-menu-item.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');

var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * A special menu item for turning of a specific type of text track
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends TextTrackMenuItem
 * @class OffTextTrackMenuItem
 */

var OffTextTrackMenuItem = (function (_TextTrackMenuItem) {
  _inherits(OffTextTrackMenuItem, _TextTrackMenuItem);

  function OffTextTrackMenuItem(player, options) {
    _classCallCheck(this, OffTextTrackMenuItem);

    // Create pseudo track info
    // Requires options['kind']
    options['track'] = {
      'kind': options['kind'],
      'player': player,
      'label': options['kind'] + ' off',
      'default': false,
      'mode': 'disabled'
    };

    // MenuItem is selectable
    options['selectable'] = true;

    _TextTrackMenuItem.call(this, player, options);
    this.selected(true);
  }

  /**
   * Handle text track change
   *
   * @param {Object} event Event object
   * @method handleTracksChange
   */

  OffTextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    var tracks = this.player().textTracks();
    var selected = true;

    for (var i = 0, l = tracks.length; i < l; i++) {
      var track = tracks[i];
      if (track['kind'] === this.track['kind'] && track['mode'] === 'showing') {
        selected = false;
        break;
      }
    }

    this.selected(selected);
  };

  return OffTextTrackMenuItem;
})(_textTrackMenuItemJs2['default']);

_componentJs2['default'].registerComponent('OffTextTrackMenuItem', OffTextTrackMenuItem);
exports['default'] = OffTextTrackMenuItem;
module.exports = exports['default'];

},{"../../component.js":67,"./text-track-menu-item.js":91}],89:[function(_dereq_,module,exports){
/**
 * @file subtitles-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _textTrackButtonJs = _dereq_('./text-track-button.js');

var _textTrackButtonJs2 = _interopRequireDefault(_textTrackButtonJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * The button component for toggling and selecting subtitles
 *
 * @param {Object} player  Player object
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends TextTrackButton
 * @class SubtitlesButton
 */

var SubtitlesButton = (function (_TextTrackButton) {
  _inherits(SubtitlesButton, _TextTrackButton);

  function SubtitlesButton(player, options, ready) {
    _classCallCheck(this, SubtitlesButton);

    _TextTrackButton.call(this, player, options, ready);
    this.el_.setAttribute('aria-label', 'Subtitles Menu');
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  SubtitlesButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-subtitles-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  return SubtitlesButton;
})(_textTrackButtonJs2['default']);

SubtitlesButton.prototype.kind_ = 'subtitles';
SubtitlesButton.prototype.controlText_ = 'Subtitles';

_componentJs2['default'].registerComponent('SubtitlesButton', SubtitlesButton);
exports['default'] = SubtitlesButton;
module.exports = exports['default'];

},{"../../component.js":67,"./text-track-button.js":90}],90:[function(_dereq_,module,exports){
/**
 * @file text-track-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _menuMenuButtonJs = _dereq_('../../menu/menu-button.js');

var _menuMenuButtonJs2 = _interopRequireDefault(_menuMenuButtonJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');

var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);

var _offTextTrackMenuItemJs = _dereq_('./off-text-track-menu-item.js');

var _offTextTrackMenuItemJs2 = _interopRequireDefault(_offTextTrackMenuItemJs);

/**
 * The base class for buttons that toggle specific text track types (e.g. subtitles)
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends MenuButton
 * @class TextTrackButton
 */

var TextTrackButton = (function (_MenuButton) {
  _inherits(TextTrackButton, _MenuButton);

  function TextTrackButton(player, options) {
    _classCallCheck(this, TextTrackButton);

    _MenuButton.call(this, player, options);

    var tracks = this.player_.textTracks();

    if (this.items.length <= 1) {
      this.hide();
    }

    if (!tracks) {
      return;
    }

    var updateHandler = Fn.bind(this, this.update);
    tracks.addEventListener('removetrack', updateHandler);
    tracks.addEventListener('addtrack', updateHandler);

    this.player_.on('dispose', function () {
      tracks.removeEventListener('removetrack', updateHandler);
      tracks.removeEventListener('addtrack', updateHandler);
    });
  }

  // Create a menu item for each text track

  TextTrackButton.prototype.createItems = function createItems() {
    var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    // Add an OFF menu item to turn all tracks off
    items.push(new _offTextTrackMenuItemJs2['default'](this.player_, { 'kind': this.kind_ }));

    var tracks = this.player_.textTracks();

    if (!tracks) {
      return items;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      // only add tracks that are of the appropriate kind and have a label
      if (track['kind'] === this.kind_) {
        items.push(new _textTrackMenuItemJs2['default'](this.player_, {
          // MenuItem is selectable
          'selectable': true,
          'track': track
        }));
      }
    }

    return items;
  };

  return TextTrackButton;
})(_menuMenuButtonJs2['default']);

_componentJs2['default'].registerComponent('TextTrackButton', TextTrackButton);
exports['default'] = TextTrackButton;
module.exports = exports['default'];

},{"../../component.js":67,"../../menu/menu-button.js":106,"../../utils/fn.js":136,"./off-text-track-menu-item.js":88,"./text-track-menu-item.js":91}],91:[function(_dereq_,module,exports){
/**
 * @file text-track-menu-item.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _menuMenuItemJs = _dereq_('../../menu/menu-item.js');

var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

/**
 * The specific menu item type for selecting a language within a text track kind
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends MenuItem
 * @class TextTrackMenuItem
 */

var TextTrackMenuItem = (function (_MenuItem) {
  _inherits(TextTrackMenuItem, _MenuItem);

  function TextTrackMenuItem(player, options) {
    var _this = this;

    _classCallCheck(this, TextTrackMenuItem);

    var track = options['track'];
    var tracks = player.textTracks();

    // Modify options for parent MenuItem class's init.
    options['label'] = track['label'] || track['language'] || 'Unknown';
    options['selected'] = track['default'] || track['mode'] === 'showing';

    _MenuItem.call(this, player, options);

    this.track = track;

    if (tracks) {
      (function () {
        var changeHandler = Fn.bind(_this, _this.handleTracksChange);

        tracks.addEventListener('change', changeHandler);
        _this.on('dispose', function () {
          tracks.removeEventListener('change', changeHandler);
        });
      })();
    }

    // iOS7 doesn't dispatch change events to TextTrackLists when an
    // associated track's mode changes. Without something like
    // Object.observe() (also not present on iOS7), it's not
    // possible to detect changes to the mode attribute and polyfill
    // the change event. As a poor substitute, we manually dispatch
    // change events whenever the controls modify the mode.
    if (tracks && tracks.onchange === undefined) {
      (function () {
        var event = undefined;

        _this.on(['tap', 'click'], function () {
          if (typeof _globalWindow2['default'].Event !== 'object') {
            // Android 2.3 throws an Illegal Constructor error for window.Event
            try {
              event = new _globalWindow2['default'].Event('change');
            } catch (err) {}
          }

          if (!event) {
            event = _globalDocument2['default'].createEvent('Event');
            event.initEvent('change', true, true);
          }

          tracks.dispatchEvent(event);
        });
      })();
    }
  }

  /**
   * Handle click on text track
   *
   * @method handleClick
   */

  TextTrackMenuItem.prototype.handleClick = function handleClick(event) {
    var kind = this.track['kind'];
    var tracks = this.player_.textTracks();

    _MenuItem.prototype.handleClick.call(this, event);

    if (!tracks) return;

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track['kind'] !== kind) {
        continue;
      }

      if (track === this.track) {
        track['mode'] = 'showing';
      } else {
        track['mode'] = 'disabled';
      }
    }
  };

  /**
   * Handle text track change
   *
   * @method handleTracksChange
   */

  TextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    this.selected(this.track['mode'] === 'showing');
  };

  return TextTrackMenuItem;
})(_menuMenuItemJs2['default']);

_componentJs2['default'].registerComponent('TextTrackMenuItem', TextTrackMenuItem);
exports['default'] = TextTrackMenuItem;
module.exports = exports['default'];

},{"../../component.js":67,"../../menu/menu-item.js":107,"../../utils/fn.js":136,"global/document":1,"global/window":2}],92:[function(_dereq_,module,exports){
/**
 * @file current-time-display.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

/**
 * Displays the current time
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class CurrentTimeDisplay
 */

var CurrentTimeDisplay = (function (_Component) {
  _inherits(CurrentTimeDisplay, _Component);

  function CurrentTimeDisplay(player, options) {
    _classCallCheck(this, CurrentTimeDisplay);

    _Component.call(this, player, options);

    this.on(player, 'timeupdate', this.updateContent);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  CurrentTimeDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-current-time vjs-time-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-current-time-display',
      // label the current time for screen reader users
      innerHTML: '<span class="vjs-control-text">Current Time </span>' + '0:00'
    }, {
      // tell screen readers not to automatically read the time as it changes
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  /**
   * Update current time display
   *
   * @method updateContent
   */

  CurrentTimeDisplay.prototype.updateContent = function updateContent() {
    // Allows for smooth scrubbing, when player can't keep up.
    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    var localizedText = this.localize('Current Time');
    var formattedTime = _utilsFormatTimeJs2['default'](time, this.player_.duration());
    if (formattedTime !== this.formattedTime_) {
      this.formattedTime_ = formattedTime;
      this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> ' + formattedTime;
    }
  };

  return CurrentTimeDisplay;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('CurrentTimeDisplay', CurrentTimeDisplay);
exports['default'] = CurrentTimeDisplay;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/dom.js":134,"../../utils/format-time.js":137}],93:[function(_dereq_,module,exports){
/**
 * @file duration-display.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

/**
 * Displays the duration
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class DurationDisplay
 */

var DurationDisplay = (function (_Component) {
  _inherits(DurationDisplay, _Component);

  function DurationDisplay(player, options) {
    _classCallCheck(this, DurationDisplay);

    _Component.call(this, player, options);

    // this might need to be changed to 'durationchange' instead of 'timeupdate' eventually,
    // however the durationchange event fires before this.player_.duration() is set,
    // so the value cannot be written out using this method.
    // Once the order of durationchange and this.player_.duration() being set is figured out,
    // this can be updated.
    this.on(player, 'timeupdate', this.updateContent);
    this.on(player, 'loadedmetadata', this.updateContent);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  DurationDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-duration vjs-time-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-duration-display',
      // label the duration time for screen reader users
      innerHTML: '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> 0:00'
    }, {
      // tell screen readers not to automatically read the time as it changes
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  /**
   * Update duration time display
   *
   * @method updateContent
   */

  DurationDisplay.prototype.updateContent = function updateContent() {
    var duration = this.player_.duration();
    if (duration && this.duration_ !== duration) {
      this.duration_ = duration;
      var localizedText = this.localize('Duration Time');
      var formattedTime = _utilsFormatTimeJs2['default'](duration);
      this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> ' + formattedTime; // label the duration time for screen reader users
    }
  };

  return DurationDisplay;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('DurationDisplay', DurationDisplay);
exports['default'] = DurationDisplay;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/dom.js":134,"../../utils/format-time.js":137}],94:[function(_dereq_,module,exports){
/**
 * @file remaining-time-display.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

/**
 * Displays the time left in the video
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class RemainingTimeDisplay
 */

var RemainingTimeDisplay = (function (_Component) {
  _inherits(RemainingTimeDisplay, _Component);

  function RemainingTimeDisplay(player, options) {
    _classCallCheck(this, RemainingTimeDisplay);

    _Component.call(this, player, options);

    this.on(player, 'timeupdate', this.updateContent);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  RemainingTimeDisplay.prototype.createEl = function createEl() {
    var el = _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-remaining-time vjs-time-control vjs-control'
    });

    this.contentEl_ = Dom.createEl('div', {
      className: 'vjs-remaining-time-display',
      // label the remaining time for screen reader users
      innerHTML: '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> -0:00'
    }, {
      // tell screen readers not to automatically read the time as it changes
      'aria-live': 'off'
    });

    el.appendChild(this.contentEl_);
    return el;
  };

  /**
   * Update remaining time display
   *
   * @method updateContent
   */

  RemainingTimeDisplay.prototype.updateContent = function updateContent() {
    if (this.player_.duration()) {
      var localizedText = this.localize('Remaining Time');
      var formattedTime = _utilsFormatTimeJs2['default'](this.player_.remainingTime());
      if (formattedTime !== this.formattedTime_) {
        this.formattedTime_ = formattedTime;
        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> -' + formattedTime;
      }
    }

    // Allows for smooth scrubbing, when player can't keep up.
    // var time = (this.player_.scrubbing()) ? this.player_.getCache().currentTime : this.player_.currentTime();
    // this.contentEl_.innerHTML = vjs.formatTime(time, this.player_.duration());
  };

  return RemainingTimeDisplay;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('RemainingTimeDisplay', RemainingTimeDisplay);
exports['default'] = RemainingTimeDisplay;
module.exports = exports['default'];

},{"../../component.js":67,"../../utils/dom.js":134,"../../utils/format-time.js":137}],95:[function(_dereq_,module,exports){
/**
 * @file time-divider.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * The separator between the current time and duration.
 * Can be hidden if it's not needed in the design.
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class TimeDivider
 */

var TimeDivider = (function (_Component) {
  _inherits(TimeDivider, _Component);

  function TimeDivider() {
    _classCallCheck(this, TimeDivider);

    _Component.apply(this, arguments);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  TimeDivider.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-time-control vjs-time-divider',
      innerHTML: '<div><span>/</span></div>'
    });
  };

  return TimeDivider;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('TimeDivider', TimeDivider);
exports['default'] = TimeDivider;
module.exports = exports['default'];

},{"../../component.js":67}],96:[function(_dereq_,module,exports){
/**
 * @file volume-bar.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _sliderSliderJs = _dereq_('../../slider/slider.js');

var _sliderSliderJs2 = _interopRequireDefault(_sliderSliderJs);

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('../../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

// Required children

var _volumeLevelJs = _dereq_('./volume-level.js');

var _volumeLevelJs2 = _interopRequireDefault(_volumeLevelJs);

/**
 * The bar that contains the volume level and can be clicked on to adjust the level
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Slider
 * @class VolumeBar
 */

var VolumeBar = (function (_Slider) {
  _inherits(VolumeBar, _Slider);

  function VolumeBar(player, options) {
    _classCallCheck(this, VolumeBar);

    _Slider.call(this, player, options);
    this.on(player, 'volumechange', this.updateARIAAttributes);
    player.ready(Fn.bind(this, this.updateARIAAttributes));
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  VolumeBar.prototype.createEl = function createEl() {
    return _Slider.prototype.createEl.call(this, 'div', {
      className: 'vjs-volume-bar vjs-slider-bar'
    }, {
      'aria-label': 'volume level'
    });
  };

  /**
   * Handle mouse move on volume bar
   *
   * @method handleMouseMove
   */

  VolumeBar.prototype.handleMouseMove = function handleMouseMove(event) {
    this.checkMuted();
    this.player_.volume(this.calculateDistance(event));
  };

  VolumeBar.prototype.checkMuted = function checkMuted() {
    if (this.player_.muted()) {
      this.player_.muted(false);
    }
  };

  /**
   * Get percent of volume level
   *
   * @retun {Number} Volume level percent
   * @method getPercent
   */

  VolumeBar.prototype.getPercent = function getPercent() {
    if (this.player_.muted()) {
      return 0;
    } else {
      return this.player_.volume();
    }
  };

  /**
   * Increase volume level for keyboard users
   *
   * @method stepForward
   */

  VolumeBar.prototype.stepForward = function stepForward() {
    this.checkMuted();
    this.player_.volume(this.player_.volume() + 0.1);
  };

  /**
   * Decrease volume level for keyboard users
   *
   * @method stepBack
   */

  VolumeBar.prototype.stepBack = function stepBack() {
    this.checkMuted();
    this.player_.volume(this.player_.volume() - 0.1);
  };

  /**
   * Update ARIA accessibility attributes
   *
   * @method updateARIAAttributes
   */

  VolumeBar.prototype.updateARIAAttributes = function updateARIAAttributes() {
    // Current value of volume bar as a percentage
    var volume = (this.player_.volume() * 100).toFixed(2);
    this.el_.setAttribute('aria-valuenow', volume);
    this.el_.setAttribute('aria-valuetext', volume + '%');
  };

  return VolumeBar;
})(_sliderSliderJs2['default']);

VolumeBar.prototype.options_ = {
  children: ['volumeLevel'],
  'barName': 'volumeLevel'
};

VolumeBar.prototype.playerEvent = 'volumechange';

_componentJs2['default'].registerComponent('VolumeBar', VolumeBar);
exports['default'] = VolumeBar;
module.exports = exports['default'];

},{"../../component.js":67,"../../slider/slider.js":116,"../../utils/fn.js":136,"./volume-level.js":98}],97:[function(_dereq_,module,exports){
/**
 * @file volume-control.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

// Required children

var _volumeBarJs = _dereq_('./volume-bar.js');

var _volumeBarJs2 = _interopRequireDefault(_volumeBarJs);

/**
 * The component for controlling the volume level
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class VolumeControl
 */

var VolumeControl = (function (_Component) {
  _inherits(VolumeControl, _Component);

  function VolumeControl(player, options) {
    _classCallCheck(this, VolumeControl);

    _Component.call(this, player, options);

    // hide volume controls when they're not supported by the current tech
    if (player.tech_ && player.tech_['featuresVolumeControl'] === false) {
      this.addClass('vjs-hidden');
    }
    this.on(player, 'loadstart', function () {
      if (player.tech_['featuresVolumeControl'] === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    });
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  VolumeControl.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-volume-control vjs-control'
    });
  };

  return VolumeControl;
})(_componentJs2['default']);

VolumeControl.prototype.options_ = {
  children: ['volumeBar']
};

_componentJs2['default'].registerComponent('VolumeControl', VolumeControl);
exports['default'] = VolumeControl;
module.exports = exports['default'];

},{"../../component.js":67,"./volume-bar.js":96}],98:[function(_dereq_,module,exports){
/**
 * @file volume-level.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

/**
 * Shows volume level
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class VolumeLevel
 */

var VolumeLevel = (function (_Component) {
  _inherits(VolumeLevel, _Component);

  function VolumeLevel() {
    _classCallCheck(this, VolumeLevel);

    _Component.apply(this, arguments);
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  VolumeLevel.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-volume-level',
      innerHTML: '<span class="vjs-control-text"></span>'
    });
  };

  return VolumeLevel;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('VolumeLevel', VolumeLevel);
exports['default'] = VolumeLevel;
module.exports = exports['default'];

},{"../../component.js":67}],99:[function(_dereq_,module,exports){
/**
 * @file volume-menu-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _popupPopupJs = _dereq_('../popup/popup.js');

var _popupPopupJs2 = _interopRequireDefault(_popupPopupJs);

var _popupPopupButtonJs = _dereq_('../popup/popup-button.js');

var _popupPopupButtonJs2 = _interopRequireDefault(_popupPopupButtonJs);

var _muteToggleJs = _dereq_('./mute-toggle.js');

var _muteToggleJs2 = _interopRequireDefault(_muteToggleJs);

var _volumeControlVolumeBarJs = _dereq_('./volume-control/volume-bar.js');

var _volumeControlVolumeBarJs2 = _interopRequireDefault(_volumeControlVolumeBarJs);

/**
 * Button for volume popup
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends PopupButton
 * @class VolumeMenuButton
 */

var VolumeMenuButton = (function (_PopupButton) {
  _inherits(VolumeMenuButton, _PopupButton);

  function VolumeMenuButton(player) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, VolumeMenuButton);

    // Default to inline
    if (options.inline === undefined) {
      options.inline = true;
    }

    // If the vertical option isn't passed at all, default to true.
    if (options.vertical === undefined) {
      // If an inline volumeMenuButton is used, we should default to using
      // a horizontal slider for obvious reasons.
      if (options.inline) {
        options.vertical = false;
      } else {
        options.vertical = true;
      }
    }

    // The vertical option needs to be set on the volumeBar as well,
    // since that will need to be passed along to the VolumeBar constructor
    options.volumeBar = options.volumeBar || {};
    options.volumeBar.vertical = !!options.vertical;

    _PopupButton.call(this, player, options);

    // Same listeners as MuteToggle
    this.on(player, 'volumechange', this.volumeUpdate);
    this.on(player, 'loadstart', this.volumeUpdate);

    // hide mute toggle if the current tech doesn't support volume control
    function updateVisibility() {
      if (player.tech_ && player.tech_['featuresVolumeControl'] === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    }

    updateVisibility.call(this);
    this.on(player, 'loadstart', updateVisibility);

    this.on(this.volumeBar, ['slideractive', 'focus'], function () {
      this.addClass('vjs-slider-active');
    });

    this.on(this.volumeBar, ['sliderinactive', 'blur'], function () {
      this.removeClass('vjs-slider-active');
    });

    this.on(this.volumeBar, ['focus'], function () {
      this.addClass('vjs-lock-showing');
    });

    this.on(this.volumeBar, ['blur'], function () {
      this.removeClass('vjs-lock-showing');
    });
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  VolumeMenuButton.prototype.buildCSSClass = function buildCSSClass() {
    var orientationClass = '';
    if (!!this.options_.vertical) {
      orientationClass = 'vjs-volume-menu-button-vertical';
    } else {
      orientationClass = 'vjs-volume-menu-button-horizontal';
    }

    return 'vjs-volume-menu-button ' + _PopupButton.prototype.buildCSSClass.call(this) + ' ' + orientationClass;
  };

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {Popup} The volume popup button
   * @method createPopup
   */

  VolumeMenuButton.prototype.createPopup = function createPopup() {
    var popup = new _popupPopupJs2['default'](this.player_, {
      contentElType: 'div'
    });

    var vb = new _volumeControlVolumeBarJs2['default'](this.player_, this.options_.volumeBar);

    popup.addChild(vb);

    this.menuContent = popup;
    this.volumeBar = vb;

    this.attachVolumeBarEvents();

    return popup;
  };

  /**
   * Handle click on volume popup and calls super
   *
   * @method handleClick
   */

  VolumeMenuButton.prototype.handleClick = function handleClick() {
    _muteToggleJs2['default'].prototype.handleClick.call(this);
    _PopupButton.prototype.handleClick.call(this);
  };

  VolumeMenuButton.prototype.attachVolumeBarEvents = function attachVolumeBarEvents() {
    this.menuContent.on(['mousedown', 'touchdown'], Fn.bind(this, this.handleMouseDown));
  };

  VolumeMenuButton.prototype.handleMouseDown = function handleMouseDown(event) {
    this.on(['mousemove', 'touchmove'], Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove));
    this.on(this.el_.ownerDocument, ['mouseup', 'touchend'], this.handleMouseUp);
  };

  VolumeMenuButton.prototype.handleMouseUp = function handleMouseUp(event) {
    this.off(['mousemove', 'touchmove'], Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove));
  };

  return VolumeMenuButton;
})(_popupPopupButtonJs2['default']);

VolumeMenuButton.prototype.volumeUpdate = _muteToggleJs2['default'].prototype.update;
VolumeMenuButton.prototype.controlText_ = 'Mute';

_componentJs2['default'].registerComponent('VolumeMenuButton', VolumeMenuButton);
exports['default'] = VolumeMenuButton;
module.exports = exports['default'];

},{"../component.js":67,"../popup/popup-button.js":112,"../popup/popup.js":113,"../utils/fn.js":136,"./mute-toggle.js":71,"./volume-control/volume-bar.js":96}],100:[function(_dereq_,module,exports){
/**
 * @file error-display.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = _dereq_('./component');

var _component2 = _interopRequireDefault(_component);

var _modalDialog = _dereq_('./modal-dialog');

var _modalDialog2 = _interopRequireDefault(_modalDialog);

var _utilsDom = _dereq_('./utils/dom');

var Dom = _interopRequireWildcard(_utilsDom);

var _utilsMergeOptions = _dereq_('./utils/merge-options');

var _utilsMergeOptions2 = _interopRequireDefault(_utilsMergeOptions);

/**
 * Display that an error has occurred making the video unplayable.
 *
 * @extends ModalDialog
 * @class ErrorDisplay
 */

var ErrorDisplay = (function (_ModalDialog) {
  _inherits(ErrorDisplay, _ModalDialog);

  /**
   * Constructor for error display modal.
   *
   * @param  {Player} player
   * @param  {Object} [options]
   */

  function ErrorDisplay(player, options) {
    _classCallCheck(this, ErrorDisplay);

    _ModalDialog.call(this, player, options);
    this.on(player, 'error', this.open);
  }

  /**
   * Include the old class for backward-compatibility.
   *
   * This can be removed in 6.0.
   *
   * @method buildCSSClass
   * @deprecated
   * @return {String}
   */

  ErrorDisplay.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-error-display ' + _ModalDialog.prototype.buildCSSClass.call(this);
  };

  /**
   * Generates the modal content based on the player error.
   *
   * @return {String|Null}
   */

  ErrorDisplay.prototype.content = function content() {
    var error = this.player().error();
    return error ? this.localize(error.message) : '';
  };

  return ErrorDisplay;
})(_modalDialog2['default']);

ErrorDisplay.prototype.options_ = _utilsMergeOptions2['default'](_modalDialog2['default'].prototype.options_, {
  fillAlways: true,
  temporary: false,
  uncloseable: true
});

_component2['default'].registerComponent('ErrorDisplay', ErrorDisplay);
exports['default'] = ErrorDisplay;
module.exports = exports['default'];

},{"./component":67,"./modal-dialog":109,"./utils/dom":134,"./utils/merge-options":140}],101:[function(_dereq_,module,exports){
/**
 * @file event-target.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utilsEventsJs = _dereq_('./utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var EventTarget = function EventTarget() {};

EventTarget.prototype.allowedEvents_ = {};

EventTarget.prototype.on = function (type, fn) {
  // Remove the addEventListener alias before calling Events.on
  // so we don't get into an infinite type loop
  var ael = this.addEventListener;
  this.addEventListener = Function.prototype;
  Events.on(this, type, fn);
  this.addEventListener = ael;
};
EventTarget.prototype.addEventListener = EventTarget.prototype.on;

EventTarget.prototype.off = function (type, fn) {
  Events.off(this, type, fn);
};
EventTarget.prototype.removeEventListener = EventTarget.prototype.off;

EventTarget.prototype.one = function (type, fn) {
  Events.one(this, type, fn);
};

EventTarget.prototype.trigger = function (event) {
  var type = event.type || event;

  if (typeof event === 'string') {
    event = {
      type: type
    };
  }
  event = Events.fixEvent(event);

  if (this.allowedEvents_[type] && this['on' + type]) {
    this['on' + type](event);
  }

  Events.trigger(this, event);
};
// The standard DOM EventTarget.dispatchEvent() is aliased to trigger()
EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger;

exports['default'] = EventTarget;
module.exports = exports['default'];

},{"./utils/events.js":135}],102:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsLog = _dereq_('./utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

/*
 * @file extend.js
 *
 * A combination of node inherits and babel's inherits (after transpile).
 * Both work the same but node adds `super_` to the subClass
 * and Bable adds the superClass as __proto__. Both seem useful.
 */
var _inherits = function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (superClass) {
    // node
    subClass.super_ = superClass;
  }
};

/*
 * Function for subclassing using the same inheritance that
 * videojs uses internally
 * ```js
 * var Button = videojs.getComponent('Button');
 * ```
 * ```js
 * var MyButton = videojs.extend(Button, {
 *   constructor: function(player, options) {
 *     Button.call(this, player, options);
 *   },
 *   onClick: function() {
 *     // doSomething
 *   }
 * });
 * ```
 */
var extendFn = function extendFn(superClass) {
  var subClassMethods = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var subClass = function subClass() {
    superClass.apply(this, arguments);
  };
  var methods = {};

  if (typeof subClassMethods === 'object') {
    if (typeof subClassMethods.init === 'function') {
      _utilsLog2['default'].warn('Constructor logic via init() is deprecated; please use constructor() instead.');
      subClassMethods.constructor = subClassMethods.init;
    }
    if (subClassMethods.constructor !== Object.prototype.constructor) {
      subClass = subClassMethods.constructor;
    }
    methods = subClassMethods;
  } else if (typeof subClassMethods === 'function') {
    subClass = subClassMethods;
  }

  _inherits(subClass, superClass);

  // Extend subObj's prototype with functions and other properties from props
  for (var name in methods) {
    if (methods.hasOwnProperty(name)) {
      subClass.prototype[name] = methods[name];
    }
  }

  return subClass;
};

exports['default'] = extendFn;
module.exports = exports['default'];

},{"./utils/log":139}],103:[function(_dereq_,module,exports){
/**
 * @file fullscreen-api.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

/*
 * Store the browser-specific methods for the fullscreen API
 * @type {Object|undefined}
 * @private
 */
var FullscreenApi = {};

// browser API methods
// map approach from Screenful.js - https://github.com/sindresorhus/screenfull.js
var apiMap = [
// Spec: https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html
['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
// WebKit
['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
// Old WebKit (Safari 5.1)
['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
// Mozilla
['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
// Microsoft
['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];

var specApi = apiMap[0];
var browserApi = undefined;

// determine the supported set of functions
for (var i = 0; i < apiMap.length; i++) {
  // check for exitFullscreen function
  if (apiMap[i][1] in _globalDocument2['default']) {
    browserApi = apiMap[i];
    break;
  }
}

// map the browser API names to the spec API names
if (browserApi) {
  for (var i = 0; i < browserApi.length; i++) {
    FullscreenApi[specApi[i]] = browserApi[i];
  }
}

exports['default'] = FullscreenApi;
module.exports = exports['default'];

},{"global/document":1}],104:[function(_dereq_,module,exports){
/**
 * @file loading-spinner.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = _dereq_('./component');

var _component2 = _interopRequireDefault(_component);

/* Loading Spinner
================================================================================ */
/**
 * Loading spinner for waiting events
 *
 * @extends Component
 * @class LoadingSpinner
 */

var LoadingSpinner = (function (_Component) {
  _inherits(LoadingSpinner, _Component);

  function LoadingSpinner() {
    _classCallCheck(this, LoadingSpinner);

    _Component.apply(this, arguments);
  }

  /**
   * Create the component's DOM element
   *
   * @method createEl
   */

  LoadingSpinner.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-loading-spinner',
      dir: 'ltr'
    });
  };

  return LoadingSpinner;
})(_component2['default']);

_component2['default'].registerComponent('LoadingSpinner', LoadingSpinner);
exports['default'] = LoadingSpinner;
module.exports = exports['default'];

},{"./component":67}],105:[function(_dereq_,module,exports){
/**
 * @file media-error.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

/*
 * Custom MediaError to mimic the HTML5 MediaError
 *
 * @param {Number} code The media error code
 */
var MediaError = function MediaError(code) {
  if (typeof code === 'number') {
    this.code = code;
  } else if (typeof code === 'string') {
    // default code is zero, so this is a custom error
    this.message = code;
  } else if (typeof code === 'object') {
    // object
    _objectAssign2['default'](this, code);
  }

  if (!this.message) {
    this.message = MediaError.defaultMessages[this.code] || '';
  }
};

/*
 * The error code that refers two one of the defined
 * MediaError types
 *
 * @type {Number}
 */
MediaError.prototype.code = 0;

/*
 * An optional message to be shown with the error.
 * Message is not part of the HTML5 video spec
 * but allows for more informative custom errors.
 *
 * @type {String}
 */
MediaError.prototype.message = '';

/*
 * An optional status code that can be set by plugins
 * to allow even more detail about the error.
 * For example the HLS plugin might provide the specific
 * HTTP status code that was returned when the error
 * occurred, then allowing a custom error overlay
 * to display more information.
 *
 * @type {Array}
 */
MediaError.prototype.status = null;

MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', // = 0
'MEDIA_ERR_ABORTED', // = 1
'MEDIA_ERR_NETWORK', // = 2
'MEDIA_ERR_DECODE', // = 3
'MEDIA_ERR_SRC_NOT_SUPPORTED', // = 4
'MEDIA_ERR_ENCRYPTED' // = 5
];

MediaError.defaultMessages = {
  1: 'You aborted the media playback',
  2: 'A network error caused the media download to fail part-way.',
  3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
  4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
  5: 'The media is encrypted and we do not have the keys to decrypt it.'
};

// Add types as properties on MediaError
// e.g. MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) {
  MediaError[MediaError.errorTypes[errNum]] = errNum;
  // values should be accessible on both the class and instance
  MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
}

exports['default'] = MediaError;
module.exports = exports['default'];

},{"object.assign":45}],106:[function(_dereq_,module,exports){
/**
 * @file menu-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _clickableComponentJs = _dereq_('../clickable-component.js');

var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _menuJs = _dereq_('./menu.js');

var _menuJs2 = _interopRequireDefault(_menuJs);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsToTitleCaseJs = _dereq_('../utils/to-title-case.js');

var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);

/**
 * A button class with a popup menu
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class MenuButton
 */

var MenuButton = (function (_ClickableComponent) {
  _inherits(MenuButton, _ClickableComponent);

  function MenuButton(player) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, MenuButton);

    _ClickableComponent.call(this, player, options);

    this.update();

    this.enabled_ = true;

    this.el_.setAttribute('aria-haspopup', 'true');
    this.el_.setAttribute('role', 'menuitem');
    this.on('keydown', this.handleSubmenuKeyPress);
  }

  /**
   * Update menu
   *
   * @method update
   */

  MenuButton.prototype.update = function update() {
    var menu = this.createMenu();

    if (this.menu) {
      this.removeChild(this.menu);
    }

    this.menu = menu;
    this.addChild(menu);

    /**
     * Track the state of the menu button
     *
     * @type {Boolean}
     * @private
     */
    this.buttonPressed_ = false;
    this.el_.setAttribute('aria-expanded', 'false');

    if (this.items && this.items.length === 0) {
      this.hide();
    } else if (this.items && this.items.length > 1) {
      this.show();
    }
  };

  /**
   * Create menu
   *
   * @return {Menu} The constructed menu
   * @method createMenu
   */

  MenuButton.prototype.createMenu = function createMenu() {
    var menu = new _menuJs2['default'](this.player_);

    // Add a title list item to the top
    if (this.options_.title) {
      var title = Dom.createEl('li', {
        className: 'vjs-menu-title',
        innerHTML: _utilsToTitleCaseJs2['default'](this.options_.title),
        tabIndex: -1
      });
      menu.children_.unshift(title);
      Dom.insertElFirst(title, menu.contentEl());
    }

    this.items = this['createItems']();

    if (this.items) {
      // Add menu items to the menu
      for (var i = 0; i < this.items.length; i++) {
        menu.addItem(this.items[i]);
      }
    }

    return menu;
  };

  /**
   * Create the list of menu items. Specific to each subclass.
   *
   * @method createItems
   */

  MenuButton.prototype.createItems = function createItems() {};

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  MenuButton.prototype.createEl = function createEl() {
    return _ClickableComponent.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass()
    });
  };

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  MenuButton.prototype.buildCSSClass = function buildCSSClass() {
    var menuButtonClass = 'vjs-menu-button';

    // If the inline option is passed, we want to use different styles altogether.
    if (this.options_.inline === true) {
      menuButtonClass += '-inline';
    } else {
      menuButtonClass += '-popup';
    }

    return 'vjs-menu-button ' + menuButtonClass + ' ' + _ClickableComponent.prototype.buildCSSClass.call(this);
  };

  /**
   * When you click the button it adds focus, which
   * will show the menu indefinitely.
   * So we'll remove focus when the mouse leaves the button.
   * Focus is needed for tab navigation.
   * Allow sub components to stack CSS class names
   *
   * @method handleClick
   */

  MenuButton.prototype.handleClick = function handleClick() {
    this.one('mouseout', Fn.bind(this, function () {
      this.menu.unlockShowing();
      this.el_.blur();
    }));
    if (this.buttonPressed_) {
      this.unpressButton();
    } else {
      this.pressButton();
    }
  };

  /**
   * Handle key press on menu
   *
   * @param {Object} event Key press event
   * @method handleKeyPress
   */

  MenuButton.prototype.handleKeyPress = function handleKeyPress(event) {

    // Escape (27) key or Tab (9) key unpress the 'button'
    if (event.which === 27 || event.which === 9) {
      if (this.buttonPressed_) {
        this.unpressButton();
      }
      // Don't preventDefault for Tab key - we still want to lose focus
      if (event.which !== 9) {
        event.preventDefault();
      }
      // Up (38) key or Down (40) key press the 'button'
    } else if (event.which === 38 || event.which === 40) {
        if (!this.buttonPressed_) {
          this.pressButton();
          event.preventDefault();
        }
      } else {
        _ClickableComponent.prototype.handleKeyPress.call(this, event);
      }
  };

  /**
   * Handle key press on submenu
   *
   * @param {Object} event Key press event
   * @method handleSubmenuKeyPress
   */

  MenuButton.prototype.handleSubmenuKeyPress = function handleSubmenuKeyPress(event) {

    // Escape (27) key or Tab (9) key unpress the 'button'
    if (event.which === 27 || event.which === 9) {
      if (this.buttonPressed_) {
        this.unpressButton();
      }
      // Don't preventDefault for Tab key - we still want to lose focus
      if (event.which !== 9) {
        event.preventDefault();
      }
    }
  };

  /**
   * Makes changes based on button pressed
   *
   * @method pressButton
   */

  MenuButton.prototype.pressButton = function pressButton() {
    if (this.enabled_) {
      this.buttonPressed_ = true;
      this.menu.lockShowing();
      this.el_.setAttribute('aria-expanded', 'true');
      this.menu.focus(); // set the focus into the submenu
    }
  };

  /**
   * Makes changes based on button unpressed
   *
   * @method unpressButton
   */

  MenuButton.prototype.unpressButton = function unpressButton() {
    if (this.enabled_) {
      this.buttonPressed_ = false;
      this.menu.unlockShowing();
      this.el_.setAttribute('aria-expanded', 'false');
      this.el_.focus(); // Set focus back to this menu button
    }
  };

  /**
   * Disable the menu button
   *
   * @return {Component}
   * @method disable
   */

  MenuButton.prototype.disable = function disable() {
    // Unpress, but don't force focus on this button
    this.buttonPressed_ = false;
    this.menu.unlockShowing();
    this.el_.setAttribute('aria-expanded', 'false');

    this.enabled_ = false;

    return _ClickableComponent.prototype.disable.call(this);
  };

  /**
   * Enable the menu button
   *
   * @return {Component}
   * @method disable
   */

  MenuButton.prototype.enable = function enable() {
    this.enabled_ = true;

    return _ClickableComponent.prototype.enable.call(this);
  };

  return MenuButton;
})(_clickableComponentJs2['default']);

_componentJs2['default'].registerComponent('MenuButton', MenuButton);
exports['default'] = MenuButton;
module.exports = exports['default'];

},{"../clickable-component.js":65,"../component.js":67,"../utils/dom.js":134,"../utils/fn.js":136,"../utils/to-title-case.js":143,"./menu.js":108}],107:[function(_dereq_,module,exports){
/**
 * @file menu-item.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _clickableComponentJs = _dereq_('../clickable-component.js');

var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

/**
 * The component for a menu item. `<li>`
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class MenuItem
 */

var MenuItem = (function (_ClickableComponent) {
  _inherits(MenuItem, _ClickableComponent);

  function MenuItem(player, options) {
    _classCallCheck(this, MenuItem);

    _ClickableComponent.call(this, player, options);

    this.selectable = options['selectable'];

    this.selected(options['selected']);

    if (this.selectable) {
      // TODO: May need to be either menuitemcheckbox or menuitemradio,
      //       and may need logical grouping of menu items.
      this.el_.setAttribute('role', 'menuitemcheckbox');
    } else {
      this.el_.setAttribute('role', 'menuitem');
    }
  }

  /**
   * Create the component's DOM element
   *
   * @param {String=} type Desc
   * @param {Object=} props Desc
   * @return {Element}
   * @method createEl
   */

  MenuItem.prototype.createEl = function createEl(type, props, attrs) {
    return _ClickableComponent.prototype.createEl.call(this, 'li', _objectAssign2['default']({
      className: 'vjs-menu-item',
      innerHTML: this.localize(this.options_['label']),
      tabIndex: -1
    }, props), attrs);
  };

  /**
   * Handle a click on the menu item, and set it to selected
   *
   * @method handleClick
   */

  MenuItem.prototype.handleClick = function handleClick() {
    this.selected(true);
  };

  /**
   * Set this menu item as selected or not
   *
   * @param  {Boolean} selected
   * @method selected
   */

  MenuItem.prototype.selected = function selected(_selected) {
    if (this.selectable) {
      if (_selected) {
        this.addClass('vjs-selected');
        this.el_.setAttribute('aria-checked', 'true');
        // aria-checked isn't fully supported by browsers/screen readers,
        // so indicate selected state to screen reader in the control text.
        this.controlText(', selected');
      } else {
        this.removeClass('vjs-selected');
        this.el_.setAttribute('aria-checked', 'false');
        // Indicate un-selected state to screen reader
        // Note that a space clears out the selected state text
        this.controlText(' ');
      }
    }
  };

  return MenuItem;
})(_clickableComponentJs2['default']);

_componentJs2['default'].registerComponent('MenuItem', MenuItem);
exports['default'] = MenuItem;
module.exports = exports['default'];

},{"../clickable-component.js":65,"../component.js":67,"object.assign":45}],108:[function(_dereq_,module,exports){
/**
 * @file menu.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsEventsJs = _dereq_('../utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

/**
 * The Menu component is used to build pop up menus, including subtitle and
 * captions selection menus.
 *
 * @extends Component
 * @class Menu
 */

var Menu = (function (_Component) {
  _inherits(Menu, _Component);

  function Menu(player, options) {
    _classCallCheck(this, Menu);

    _Component.call(this, player, options);

    this.focusedChild_ = -1;

    this.on('keydown', this.handleKeyPress);
  }

  /**
   * Add a menu item to the menu
   *
   * @param {Object|String} component Component or component type to add
   * @method addItem
   */

  Menu.prototype.addItem = function addItem(component) {
    this.addChild(component);
    component.on('click', Fn.bind(this, function () {
      this.unlockShowing();
      //TODO: Need to set keyboard focus back to the menuButton
    }));
  };

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  Menu.prototype.createEl = function createEl() {
    var contentElType = this.options_.contentElType || 'ul';
    this.contentEl_ = Dom.createEl(contentElType, {
      className: 'vjs-menu-content'
    });
    this.contentEl_.setAttribute('role', 'menu');
    var el = _Component.prototype.createEl.call(this, 'div', {
      append: this.contentEl_,
      className: 'vjs-menu'
    });
    el.setAttribute('role', 'presentation');
    el.appendChild(this.contentEl_);

    // Prevent clicks from bubbling up. Needed for Menu Buttons,
    // where a click on the parent is significant
    Events.on(el, 'click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    });

    return el;
  };

  /**
   * Handle key press for menu
   *
   * @param {Object} event Event object
   * @method handleKeyPress
   */

  Menu.prototype.handleKeyPress = function handleKeyPress(event) {
    if (event.which === 37 || event.which === 40) {
      // Left and Down Arrows
      event.preventDefault();
      this.stepForward();
    } else if (event.which === 38 || event.which === 39) {
      // Up and Right Arrows
      event.preventDefault();
      this.stepBack();
    }
  };

  /**
   * Move to next (lower) menu item for keyboard users
   *
   * @method stepForward
   */

  Menu.prototype.stepForward = function stepForward() {
    var stepChild = 0;

    if (this.focusedChild_ !== undefined) {
      stepChild = this.focusedChild_ + 1;
    }
    this.focus(stepChild);
  };

  /**
   * Move to previous (higher) menu item for keyboard users
   *
   * @method stepBack
   */

  Menu.prototype.stepBack = function stepBack() {
    var stepChild = 0;

    if (this.focusedChild_ !== undefined) {
      stepChild = this.focusedChild_ - 1;
    }
    this.focus(stepChild);
  };

  /**
   * Set focus on a menu item in the menu
   *
   * @param {Object|String} item Index of child item set focus on
   * @method focus
   */

  Menu.prototype.focus = function focus() {
    var item = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    var children = this.children().slice();
    var haveTitle = children.length && children[0].className && /vjs-menu-title/.test(children[0].className);

    if (haveTitle) {
      children.shift();
    }

    if (children.length > 0) {
      if (item < 0) {
        item = 0;
      } else if (item >= children.length) {
        item = children.length - 1;
      }

      this.focusedChild_ = item;

      children[item].el_.focus();
    }
  };

  return Menu;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('Menu', Menu);
exports['default'] = Menu;
module.exports = exports['default'];

},{"../component.js":67,"../utils/dom.js":134,"../utils/events.js":135,"../utils/fn.js":136}],109:[function(_dereq_,module,exports){
/**
 * @file modal-dialog.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsDom = _dereq_('./utils/dom');

var Dom = _interopRequireWildcard(_utilsDom);

var _utilsFn = _dereq_('./utils/fn');

var Fn = _interopRequireWildcard(_utilsFn);

var _utilsLog = _dereq_('./utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _component = _dereq_('./component');

var _component2 = _interopRequireDefault(_component);

var _closeButton = _dereq_('./close-button');

var _closeButton2 = _interopRequireDefault(_closeButton);

var MODAL_CLASS_NAME = 'vjs-modal-dialog';
var ESC = 27;

/**
 * The `ModalDialog` displays over the video and its controls, which blocks
 * interaction with the player until it is closed.
 *
 * Modal dialogs include a "Close" button and will close when that button
 * is activated - or when ESC is pressed anywhere.
 *
 * @extends Component
 * @class ModalDialog
 */

var ModalDialog = (function (_Component) {
  _inherits(ModalDialog, _Component);

  /**
   * Constructor for modals.
   *
   * @param  {Player} player
   * @param  {Object} [options]
   * @param  {Mixed} [options.content=undefined]
   *         Provide customized content for this modal.
   *
   * @param  {String} [options.description]
   *         A text description for the modal, primarily for accessibility.
   *
   * @param  {Boolean} [options.fillAlways=false]
   *         Normally, modals are automatically filled only the first time
   *         they open. This tells the modal to refresh its content
   *         every time it opens.
   *
   * @param  {String} [options.label]
   *         A text label for the modal, primarily for accessibility.
   *
   * @param  {Boolean} [options.temporary=true]
   *         If `true`, the modal can only be opened once; it will be
   *         disposed as soon as it's closed.
   *
   * @param  {Boolean} [options.uncloseable=false]
   *         If `true`, the user will not be able to close the modal
   *         through the UI in the normal ways. Programmatic closing is
   *         still possible.
   *
   */

  function ModalDialog(player, options) {
    _classCallCheck(this, ModalDialog);

    _Component.call(this, player, options);
    this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = false;

    this.closeable(!this.options_.uncloseable);
    this.content(this.options_.content);

    // Make sure the contentEl is defined AFTER any children are initialized
    // because we only want the contents of the modal in the contentEl
    // (not the UI elements like the close button).
    this.contentEl_ = Dom.createEl('div', {
      className: MODAL_CLASS_NAME + '-content'
    }, {
      role: 'document'
    });

    this.descEl_ = Dom.createEl('p', {
      className: MODAL_CLASS_NAME + '-description vjs-offscreen',
      id: this.el().getAttribute('aria-describedby')
    });

    Dom.textContent(this.descEl_, this.description());
    this.el_.appendChild(this.descEl_);
    this.el_.appendChild(this.contentEl_);
  }

  /*
   * Modal dialog default options.
   *
   * @type {Object}
   * @private
   */

  /**
   * Create the modal's DOM element
   *
   * @method createEl
   * @return {Element}
   */

  ModalDialog.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass(),
      tabIndex: -1
    }, {
      'aria-describedby': this.id() + '_description',
      'aria-hidden': 'true',
      'aria-label': this.label(),
      role: 'dialog'
    });
  };

  /**
   * Build the modal's CSS class.
   *
   * @method buildCSSClass
   * @return {String}
   */

  ModalDialog.prototype.buildCSSClass = function buildCSSClass() {
    return MODAL_CLASS_NAME + ' vjs-hidden ' + _Component.prototype.buildCSSClass.call(this);
  };

  /**
   * Handles key presses on the document, looking for ESC, which closes
   * the modal.
   *
   * @method handleKeyPress
   * @param  {Event} e
   */

  ModalDialog.prototype.handleKeyPress = function handleKeyPress(e) {
    if (e.which === ESC && this.closeable()) {
      this.close();
    }
  };

  /**
   * Returns the label string for this modal. Primarily used for accessibility.
   *
   * @return {String}
   */

  ModalDialog.prototype.label = function label() {
    return this.options_.label || this.localize('Modal Window');
  };

  /**
   * Returns the description string for this modal. Primarily used for
   * accessibility.
   *
   * @return {String}
   */

  ModalDialog.prototype.description = function description() {
    var desc = this.options_.description || this.localize('This is a modal window.');

    // Append a universal closeability message if the modal is closeable.
    if (this.closeable()) {
      desc += ' ' + this.localize('This modal can be closed by pressing the Escape key or activating the close button.');
    }

    return desc;
  };

  /**
   * Opens the modal.
   *
   * @method open
   * @return {ModalDialog}
   */

  ModalDialog.prototype.open = function open() {
    if (!this.opened_) {
      var player = this.player();

      this.trigger('beforemodalopen');
      this.opened_ = true;

      // Fill content if the modal has never opened before and
      // never been filled.
      if (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) {
        this.fill();
      }

      // If the player was playing, pause it and take note of its previously
      // playing state.
      this.wasPlaying_ = !player.paused();

      if (this.wasPlaying_) {
        player.pause();
      }

      if (this.closeable()) {
        this.on(this.el_.ownerDocument, 'keydown', Fn.bind(this, this.handleKeyPress));
      }

      player.controls(false);
      this.show();
      this.el().setAttribute('aria-hidden', 'false');
      this.trigger('modalopen');
      this.hasBeenOpened_ = true;
    }
    return this;
  };

  /**
   * Whether or not the modal is opened currently.
   *
   * @method opened
   * @param  {Boolean} [value]
   *         If given, it will open (`true`) or close (`false`) the modal.
   *
   * @return {Boolean}
   */

  ModalDialog.prototype.opened = function opened(value) {
    if (typeof value === 'boolean') {
      this[value ? 'open' : 'close']();
    }
    return this.opened_;
  };

  /**
   * Closes the modal.
   *
   * @method close
   * @return {ModalDialog}
   */

  ModalDialog.prototype.close = function close() {
    if (this.opened_) {
      var player = this.player();

      this.trigger('beforemodalclose');
      this.opened_ = false;

      if (this.wasPlaying_) {
        player.play();
      }

      if (this.closeable()) {
        this.off(this.el_.ownerDocument, 'keydown', Fn.bind(this, this.handleKeyPress));
      }

      player.controls(true);
      this.hide();
      this.el().setAttribute('aria-hidden', 'true');
      this.trigger('modalclose');

      if (this.options_.temporary) {
        this.dispose();
      }
    }
    return this;
  };

  /**
   * Whether or not the modal is closeable via the UI.
   *
   * @method closeable
   * @param  {Boolean} [value]
   *         If given as a Boolean, it will set the `closeable` option.
   *
   * @return {Boolean}
   */

  ModalDialog.prototype.closeable = function closeable(value) {
    if (typeof value === 'boolean') {
      var closeable = this.closeable_ = !!value;
      var _close = this.getChild('closeButton');

      // If this is being made closeable and has no close button, add one.
      if (closeable && !_close) {

        // The close button should be a child of the modal - not its
        // content element, so temporarily change the content element.
        var temp = this.contentEl_;
        this.contentEl_ = this.el_;
        _close = this.addChild('closeButton');
        this.contentEl_ = temp;
        this.on(_close, 'close', this.close);
      }

      // If this is being made uncloseable and has a close button, remove it.
      if (!closeable && _close) {
        this.off(_close, 'close', this.close);
        this.removeChild(_close);
        _close.dispose();
      }
    }
    return this.closeable_;
  };

  /**
   * Fill the modal's content element with the modal's "content" option.
   *
   * The content element will be emptied before this change takes place.
   *
   * @method fill
   * @return {ModalDialog}
   */

  ModalDialog.prototype.fill = function fill() {
    return this.fillWith(this.content());
  };

  /**
   * Fill the modal's content element with arbitrary content.
   *
   * The content element will be emptied before this change takes place.
   *
   * @method fillWith
   * @param  {Mixed} [content]
   *         The same rules apply to this as apply to the `content` option.
   *
   * @return {ModalDialog}
   */

  ModalDialog.prototype.fillWith = function fillWith(content) {
    var contentEl = this.contentEl();
    var parentEl = contentEl.parentNode;
    var nextSiblingEl = contentEl.nextSibling;

    this.trigger('beforemodalfill');
    this.hasBeenFilled_ = true;

    // Detach the content element from the DOM before performing
    // manipulation to avoid modifying the live DOM multiple times.
    parentEl.removeChild(contentEl);
    this.empty();
    Dom.insertContent(contentEl, content);
    this.trigger('modalfill');

    // Re-inject the re-filled content element.
    if (nextSiblingEl) {
      parentEl.insertBefore(contentEl, nextSiblingEl);
    } else {
      parentEl.appendChild(contentEl);
    }

    return this;
  };

  /**
   * Empties the content element.
   *
   * This happens automatically anytime the modal is filled.
   *
   * @method empty
   * @return {ModalDialog}
   */

  ModalDialog.prototype.empty = function empty() {
    this.trigger('beforemodalempty');
    Dom.emptyEl(this.contentEl());
    this.trigger('modalempty');
    return this;
  };

  /**
   * Gets or sets the modal content, which gets normalized before being
   * rendered into the DOM.
   *
   * This does not update the DOM or fill the modal, but it is called during
   * that process.
   *
   * @method content
   * @param  {Mixed} [value]
   *         If defined, sets the internal content value to be used on the
   *         next call(s) to `fill`. This value is normalized before being
   *         inserted. To "clear" the internal content value, pass `null`.
   *
   * @return {Mixed}
   */

  ModalDialog.prototype.content = function content(value) {
    if (typeof value !== 'undefined') {
      this.content_ = value;
    }
    return this.content_;
  };

  return ModalDialog;
})(_component2['default']);

ModalDialog.prototype.options_ = {
  temporary: true
};

_component2['default'].registerComponent('ModalDialog', ModalDialog);
exports['default'] = ModalDialog;
module.exports = exports['default'];

},{"./close-button":66,"./component":67,"./utils/dom":134,"./utils/fn":136,"./utils/log":139}],110:[function(_dereq_,module,exports){
/**
 * @file player.js
 */
// Subclasses Component
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('./component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _utilsEventsJs = _dereq_('./utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var _utilsDomJs = _dereq_('./utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('./utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsGuidJs = _dereq_('./utils/guid.js');

var Guid = _interopRequireWildcard(_utilsGuidJs);

var _utilsBrowserJs = _dereq_('./utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _utilsLogJs = _dereq_('./utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _utilsToTitleCaseJs = _dereq_('./utils/to-title-case.js');

var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);

var _utilsTimeRangesJs = _dereq_('./utils/time-ranges.js');

var _utilsBufferJs = _dereq_('./utils/buffer.js');

var _utilsStylesheetJs = _dereq_('./utils/stylesheet.js');

var stylesheet = _interopRequireWildcard(_utilsStylesheetJs);

var _fullscreenApiJs = _dereq_('./fullscreen-api.js');

var _fullscreenApiJs2 = _interopRequireDefault(_fullscreenApiJs);

var _mediaErrorJs = _dereq_('./media-error.js');

var _mediaErrorJs2 = _interopRequireDefault(_mediaErrorJs);

var _safeJsonParseTuple = _dereq_('safe-json-parse/tuple');

var _safeJsonParseTuple2 = _interopRequireDefault(_safeJsonParseTuple);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utilsMergeOptionsJs = _dereq_('./utils/merge-options.js');

var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);

var _tracksTextTrackListConverterJs = _dereq_('./tracks/text-track-list-converter.js');

var _tracksTextTrackListConverterJs2 = _interopRequireDefault(_tracksTextTrackListConverterJs);

// Include required child components (importing also registers them)

var _techLoaderJs = _dereq_('./tech/loader.js');

var _techLoaderJs2 = _interopRequireDefault(_techLoaderJs);

var _posterImageJs = _dereq_('./poster-image.js');

var _posterImageJs2 = _interopRequireDefault(_posterImageJs);

var _tracksTextTrackDisplayJs = _dereq_('./tracks/text-track-display.js');

var _tracksTextTrackDisplayJs2 = _interopRequireDefault(_tracksTextTrackDisplayJs);

var _loadingSpinnerJs = _dereq_('./loading-spinner.js');

var _loadingSpinnerJs2 = _interopRequireDefault(_loadingSpinnerJs);

var _bigPlayButtonJs = _dereq_('./big-play-button.js');

var _bigPlayButtonJs2 = _interopRequireDefault(_bigPlayButtonJs);

var _controlBarControlBarJs = _dereq_('./control-bar/control-bar.js');

var _controlBarControlBarJs2 = _interopRequireDefault(_controlBarControlBarJs);

var _errorDisplayJs = _dereq_('./error-display.js');

var _errorDisplayJs2 = _interopRequireDefault(_errorDisplayJs);

var _tracksTextTrackSettingsJs = _dereq_('./tracks/text-track-settings.js');

var _tracksTextTrackSettingsJs2 = _interopRequireDefault(_tracksTextTrackSettingsJs);

var _modalDialog = _dereq_('./modal-dialog');

var _modalDialog2 = _interopRequireDefault(_modalDialog);

// Require html5 tech, at least for disposing the original video tag

var _techTechJs = _dereq_('./tech/tech.js');

var _techTechJs2 = _interopRequireDefault(_techTechJs);

var _techHtml5Js = _dereq_('./tech/html5.js');

var _techHtml5Js2 = _interopRequireDefault(_techHtml5Js);

/**
 * An instance of the `Player` class is created when any of the Video.js setup methods are used to initialize a video.
 * ```js
 * var myPlayer = videojs('example_video_1');
 * ```
 * In the following example, the `data-setup` attribute tells the Video.js library to create a player instance when the library is ready.
 * ```html
 * <video id="example_video_1" data-setup='{}' controls>
 *   <source src="my-source.mp4" type="video/mp4">
 * </video>
 * ```
 * After an instance has been created it can be accessed globally using `Video('example_video_1')`.
 *
 * @param {Element} tag        The original video tag used for configuring options
 * @param {Object=} options    Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends Component
 * @class Player
 */

var Player = (function (_Component) {
  _inherits(Player, _Component);

  /**
   * player's constructor function
   *
   * @constructs
   * @method init
   * @param {Element} tag        The original video tag used for configuring options
   * @param {Object=} options    Player options
   * @param {Function=} ready    Ready callback function
   */

  function Player(tag, options, ready) {
    var _this = this;

    _classCallCheck(this, Player);

    // Make sure tag ID exists
    tag.id = tag.id || 'vjs_video_' + Guid.newGUID();

    // Set Options
    // The options argument overrides options set in the video tag
    // which overrides globally set options.
    // This latter part coincides with the load order
    // (tag must exist before Player)
    options = _objectAssign2['default'](Player.getTagSettings(tag), options);

    // Delay the initialization of children because we need to set up
    // player properties first, and can't use `this` before `super()`
    options.initChildren = false;

    // Same with creating the element
    options.createEl = false;

    // we don't want the player to report touch activity on itself
    // see enableTouchActivity in Component
    options.reportTouchActivity = false;

    // Run base component initializing with new options
    _Component.call(this, null, options, ready);

    // if the global option object was accidentally blown away by
    // someone, bail early with an informative error
    if (!this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) {
      throw new Error('No techOrder specified. Did you overwrite ' + 'videojs.options instead of just changing the ' + 'properties you want to override?');
    }

    this.tag = tag; // Store the original tag used to set options

    // Store the tag attributes used to restore html5 element
    this.tagAttributes = tag && Dom.getElAttributes(tag);

    // Update current language
    this.language(this.options_.language);

    // Update Supported Languages
    if (options.languages) {
      (function () {
        // Normalise player option languages to lowercase
        var languagesToLower = {};

        Object.getOwnPropertyNames(options.languages).forEach(function (name) {
          languagesToLower[name.toLowerCase()] = options.languages[name];
        });
        _this.languages_ = languagesToLower;
      })();
    } else {
      this.languages_ = Player.prototype.options_.languages;
    }

    // Cache for video property values.
    this.cache_ = {};

    // Set poster
    this.poster_ = options.poster || '';

    // Set controls
    this.controls_ = !!options.controls;

    // Original tag settings stored in options
    // now remove immediately so native controls don't flash.
    // May be turned back on by HTML5 tech if nativeControlsForTouch is true
    tag.controls = false;

    /*
     * Store the internal state of scrubbing
     *
     * @private
     * @return {Boolean} True if the user is scrubbing
     */
    this.scrubbing_ = false;

    this.el_ = this.createEl();

    // We also want to pass the original player options to each component and plugin
    // as well so they don't need to reach back into the player for options later.
    // We also need to do another copy of this.options_ so we don't end up with
    // an infinite loop.
    var playerOptionsCopy = _utilsMergeOptionsJs2['default'](this.options_);

    // Load plugins
    if (options.plugins) {
      (function () {
        var plugins = options.plugins;

        Object.getOwnPropertyNames(plugins).forEach(function (name) {
          if (typeof this[name] === 'function') {
            this[name](plugins[name]);
          } else {
            _utilsLogJs2['default'].error('Unable to find plugin:', name);
          }
        }, _this);
      })();
    }

    this.options_.playerOptions = playerOptionsCopy;

    this.initChildren();

    // Set isAudio based on whether or not an audio tag was used
    this.isAudio(tag.nodeName.toLowerCase() === 'audio');

    // Update controls className. Can't do this when the controls are initially
    // set because the element doesn't exist yet.
    if (this.controls()) {
      this.addClass('vjs-controls-enabled');
    } else {
      this.addClass('vjs-controls-disabled');
    }

    // Set ARIA label and region role depending on player type
    this.el_.setAttribute('role', 'region');
    if (this.isAudio()) {
      this.el_.setAttribute('aria-label', 'audio player');
    } else {
      this.el_.setAttribute('aria-label', 'video player');
    }

    if (this.isAudio()) {
      this.addClass('vjs-audio');
    }

    if (this.flexNotSupported_()) {
      this.addClass('vjs-no-flex');
    }

    // TODO: Make this smarter. Toggle user state between touching/mousing
    // using events, since devices can have both touch and mouse events.
    // if (browser.TOUCH_ENABLED) {
    //   this.addClass('vjs-touch-enabled');
    // }

    // iOS Safari has broken hover handling
    if (!browser.IS_IOS) {
      this.addClass('vjs-workinghover');
    }

    // Make player easily findable by ID
    Player.players[this.id_] = this;

    // When the player is first initialized, trigger activity so components
    // like the control bar show themselves if needed
    this.userActive(true);
    this.reportUserActivity();
    this.listenForUserActivity_();

    this.on('fullscreenchange', this.handleFullscreenChange_);
    this.on('stageclick', this.handleStageClick_);
  }

  /*
   * Global player list
   *
   * @type {Object}
   */

  /**
   * Destroys the video player and does any necessary cleanup
   * ```js
   *     myPlayer.dispose();
   * ```
   * This is especially helpful if you are dynamically adding and removing videos
   * to/from the DOM.
   *
   * @method dispose
   */

  Player.prototype.dispose = function dispose() {
    this.trigger('dispose');
    // prevent dispose from being called twice
    this.off('dispose');

    if (this.styleEl_ && this.styleEl_.parentNode) {
      this.styleEl_.parentNode.removeChild(this.styleEl_);
    }

    // Kill reference to this player
    Player.players[this.id_] = null;
    if (this.tag && this.tag.player) {
      this.tag.player = null;
    }
    if (this.el_ && this.el_.player) {
      this.el_.player = null;
    }

    if (this.tech_) {
      this.tech_.dispose();
    }

    _Component.prototype.dispose.call(this);
  };

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  Player.prototype.createEl = function createEl() {
    var el = this.el_ = _Component.prototype.createEl.call(this, 'div');
    var tag = this.tag;

    // Remove width/height attrs from tag so CSS can make it 100% width/height
    tag.removeAttribute('width');
    tag.removeAttribute('height');

    // Copy over all the attributes from the tag, including ID and class
    // ID will now reference player box, not the video tag
    var attrs = Dom.getElAttributes(tag);

    Object.getOwnPropertyNames(attrs).forEach(function (attr) {
      // workaround so we don't totally break IE7
      // http://stackoverflow.com/questions/3653444/css-styles-not-applied-on-dynamic-elements-in-internet-explorer-7
      if (attr === 'class') {
        el.className = attrs[attr];
      } else {
        el.setAttribute(attr, attrs[attr]);
      }
    });

    // Update tag id/class for use as HTML5 playback tech
    // Might think we should do this after embedding in container so .vjs-tech class
    // doesn't flash 100% width/height, but class only applies with .video-js parent
    tag.playerId = tag.id;
    tag.id += '_html5_api';
    tag.className = 'vjs-tech';

    // Make player findable on elements
    tag.player = el.player = this;
    // Default state of video is paused
    this.addClass('vjs-paused');

    // Add a style element in the player that we'll use to set the width/height
    // of the player in a way that's still overrideable by CSS, just like the
    // video element
    if (_globalWindow2['default'].VIDEOJS_NO_DYNAMIC_STYLE !== true) {
      this.styleEl_ = stylesheet.createStyleElement('vjs-styles-dimensions');
      var defaultsStyleEl = Dom.$('.vjs-styles-defaults');
      var head = Dom.$('head');
      head.insertBefore(this.styleEl_, defaultsStyleEl ? defaultsStyleEl.nextSibling : head.firstChild);
    }

    // Pass in the width/height/aspectRatio options which will update the style el
    this.width(this.options_.width);
    this.height(this.options_.height);
    this.fluid(this.options_.fluid);
    this.aspectRatio(this.options_.aspectRatio);

    // Hide any links within the video/audio tag, because IE doesn't hide them completely.
    var links = tag.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      var linkEl = links.item(i);
      Dom.addElClass(linkEl, 'vjs-hidden');
      linkEl.setAttribute('hidden', 'hidden');
    }

    // insertElFirst seems to cause the networkState to flicker from 3 to 2, so
    // keep track of the original for later so we can know if the source originally failed
    tag.initNetworkState_ = tag.networkState;

    // Wrap video tag in div (el/box) container
    if (tag.parentNode) {
      tag.parentNode.insertBefore(el, tag);
    }

    // insert the tag as the first child of the player element
    // then manually add it to the children array so that this.addChild
    // will work properly for other components
    Dom.insertElFirst(tag, el); // Breaks iPhone, fixed in HTML5 setup.
    this.children_.unshift(tag);

    this.el_ = el;

    return el;
  };

  /**
   * Get/set player width
   *
   * @param {Number=} value Value for width
   * @return {Number} Width when getting
   * @method width
   */

  Player.prototype.width = function width(value) {
    return this.dimension('width', value);
  };

  /**
   * Get/set player height
   *
   * @param {Number=} value Value for height
   * @return {Number} Height when getting
   * @method height
   */

  Player.prototype.height = function height(value) {
    return this.dimension('height', value);
  };

  /**
   * Get/set dimension for player
   *
   * @param {String} dimension Either width or height
   * @param {Number=} value Value for dimension
   * @return {Component}
   * @method dimension
   */

  Player.prototype.dimension = function dimension(_dimension, value) {
    var privDimension = _dimension + '_';

    if (value === undefined) {
      return this[privDimension] || 0;
    }

    if (value === '') {
      // If an empty string is given, reset the dimension to be automatic
      this[privDimension] = undefined;
    } else {
      var parsedVal = parseFloat(value);

      if (isNaN(parsedVal)) {
        _utilsLogJs2['default'].error('Improper value "' + value + '" supplied for for ' + _dimension);
        return this;
      }

      this[privDimension] = parsedVal;
    }

    this.updateStyleEl_();
    return this;
  };

  /**
   * Add/remove the vjs-fluid class
   *
   * @param {Boolean} bool Value of true adds the class, value of false removes the class
   * @method fluid
   */

  Player.prototype.fluid = function fluid(bool) {
    if (bool === undefined) {
      return !!this.fluid_;
    }

    this.fluid_ = !!bool;

    if (bool) {
      this.addClass('vjs-fluid');
    } else {
      this.removeClass('vjs-fluid');
    }
  };

  /**
   * Get/Set the aspect ratio
   *
   * @param {String=} ratio Aspect ratio for player
   * @return aspectRatio
   * @method aspectRatio
   */

  Player.prototype.aspectRatio = function aspectRatio(ratio) {
    if (ratio === undefined) {
      return this.aspectRatio_;
    }

    // Check for width:height format
    if (!/^\d+\:\d+$/.test(ratio)) {
      throw new Error('Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.');
    }
    this.aspectRatio_ = ratio;

    // We're assuming if you set an aspect ratio you want fluid mode,
    // because in fixed mode you could calculate width and height yourself.
    this.fluid(true);

    this.updateStyleEl_();
  };

  /**
   * Update styles of the player element (height, width and aspect ratio)
   *
   * @method updateStyleEl_
   */

  Player.prototype.updateStyleEl_ = function updateStyleEl_() {
    if (_globalWindow2['default'].VIDEOJS_NO_DYNAMIC_STYLE === true) {
      var _width = typeof this.width_ === 'number' ? this.width_ : this.options_.width;
      var _height = typeof this.height_ === 'number' ? this.height_ : this.options_.height;
      var techEl = this.tech_ && this.tech_.el();

      if (techEl) {
        if (_width >= 0) {
          techEl.width = _width;
        }
        if (_height >= 0) {
          techEl.height = _height;
        }
      }

      return;
    }

    var width = undefined;
    var height = undefined;
    var aspectRatio = undefined;
    var idClass = undefined;

    // The aspect ratio is either used directly or to calculate width and height.
    if (this.aspectRatio_ !== undefined && this.aspectRatio_ !== 'auto') {
      // Use any aspectRatio that's been specifically set
      aspectRatio = this.aspectRatio_;
    } else if (this.videoWidth()) {
      // Otherwise try to get the aspect ratio from the video metadata
      aspectRatio = this.videoWidth() + ':' + this.videoHeight();
    } else {
      // Or use a default. The video element's is 2:1, but 16:9 is more common.
      aspectRatio = '16:9';
    }

    // Get the ratio as a decimal we can use to calculate dimensions
    var ratioParts = aspectRatio.split(':');
    var ratioMultiplier = ratioParts[1] / ratioParts[0];

    if (this.width_ !== undefined) {
      // Use any width that's been specifically set
      width = this.width_;
    } else if (this.height_ !== undefined) {
      // Or calulate the width from the aspect ratio if a height has been set
      width = this.height_ / ratioMultiplier;
    } else {
      // Or use the video's metadata, or use the video el's default of 300
      width = this.videoWidth() || 300;
    }

    if (this.height_ !== undefined) {
      // Use any height that's been specifically set
      height = this.height_;
    } else {
      // Otherwise calculate the height from the ratio and the width
      height = width * ratioMultiplier;
    }

    // Ensure the CSS class is valid by starting with an alpha character
    if (/^[^a-zA-Z]/.test(this.id())) {
      idClass = 'dimensions-' + this.id();
    } else {
      idClass = this.id() + '-dimensions';
    }

    // Ensure the right class is still on the player for the style element
    this.addClass(idClass);

    stylesheet.setTextContent(this.styleEl_, '\n      .' + idClass + ' {\n        width: ' + width + 'px;\n        height: ' + height + 'px;\n      }\n\n      .' + idClass + '.vjs-fluid {\n        padding-top: ' + ratioMultiplier * 100 + '%;\n      }\n    ');
  };

  /**
   * Load the Media Playback Technology (tech)
   * Load/Create an instance of playback technology including element and API methods
   * And append playback element in player div.
   *
   * @param {String} techName Name of the playback technology
   * @param {String} source Video source
   * @method loadTech_
   * @private
   */

  Player.prototype.loadTech_ = function loadTech_(techName, source) {

    // Pause and remove current playback technology
    if (this.tech_) {
      this.unloadTech_();
    }

    // get rid of the HTML5 video tag as soon as we are using another tech
    if (techName !== 'Html5' && this.tag) {
      _techTechJs2['default'].getTech('Html5').disposeMediaElement(this.tag);
      this.tag.player = null;
      this.tag = null;
    }

    this.techName_ = techName;

    // Turn off API access because we're loading a new tech that might load asynchronously
    this.isReady_ = false;

    // Grab tech-specific options from player options and add source and parent element to use.
    var techOptions = _objectAssign2['default']({
      'nativeControlsForTouch': this.options_.nativeControlsForTouch,
      'source': source,
      'playerId': this.id(),
      'techId': this.id() + '_' + techName + '_api',
      'textTracks': this.textTracks_,
      'autoplay': this.options_.autoplay,
      'preload': this.options_.preload,
      'loop': this.options_.loop,
      'muted': this.options_.muted,
      'poster': this.poster(),
      'language': this.language(),
      'vtt.js': this.options_['vtt.js']
    }, this.options_[techName.toLowerCase()]);

    if (this.tag) {
      techOptions.tag = this.tag;
    }

    if (source) {
      this.currentType_ = source.type;
      if (source.src === this.cache_.src && this.cache_.currentTime > 0) {
        techOptions.startTime = this.cache_.currentTime;
      }

      this.cache_.src = source.src;
    }

    // Initialize tech instance
    var techComponent = _techTechJs2['default'].getTech(techName);
    // Support old behavior of techs being registered as components.
    // Remove once that deprecated behavior is removed.
    if (!techComponent) {
      techComponent = _componentJs2['default'].getComponent(techName);
    }
    this.tech_ = new techComponent(techOptions);

    // player.triggerReady is always async, so don't need this to be async
    this.tech_.ready(Fn.bind(this, this.handleTechReady_), true);

    _tracksTextTrackListConverterJs2['default'].jsonToTextTracks(this.textTracksJson_ || [], this.tech_);

    // Listen to all HTML5-defined events and trigger them on the player
    this.on(this.tech_, 'loadstart', this.handleTechLoadStart_);
    this.on(this.tech_, 'waiting', this.handleTechWaiting_);
    this.on(this.tech_, 'canplay', this.handleTechCanPlay_);
    this.on(this.tech_, 'canplaythrough', this.handleTechCanPlayThrough_);
    this.on(this.tech_, 'playing', this.handleTechPlaying_);
    this.on(this.tech_, 'ended', this.handleTechEnded_);
    this.on(this.tech_, 'seeking', this.handleTechSeeking_);
    this.on(this.tech_, 'seeked', this.handleTechSeeked_);
    this.on(this.tech_, 'play', this.handleTechPlay_);
    this.on(this.tech_, 'firstplay', this.handleTechFirstPlay_);
    this.on(this.tech_, 'pause', this.handleTechPause_);
    this.on(this.tech_, 'progress', this.handleTechProgress_);
    this.on(this.tech_, 'durationchange', this.handleTechDurationChange_);
    this.on(this.tech_, 'fullscreenchange', this.handleTechFullscreenChange_);
    this.on(this.tech_, 'error', this.handleTechError_);
    this.on(this.tech_, 'suspend', this.handleTechSuspend_);
    this.on(this.tech_, 'abort', this.handleTechAbort_);
    this.on(this.tech_, 'emptied', this.handleTechEmptied_);
    this.on(this.tech_, 'stalled', this.handleTechStalled_);
    this.on(this.tech_, 'loadedmetadata', this.handleTechLoadedMetaData_);
    this.on(this.tech_, 'loadeddata', this.handleTechLoadedData_);
    this.on(this.tech_, 'timeupdate', this.handleTechTimeUpdate_);
    this.on(this.tech_, 'ratechange', this.handleTechRateChange_);
    this.on(this.tech_, 'volumechange', this.handleTechVolumeChange_);
    this.on(this.tech_, 'texttrackchange', this.handleTechTextTrackChange_);
    this.on(this.tech_, 'loadedmetadata', this.updateStyleEl_);
    this.on(this.tech_, 'posterchange', this.handleTechPosterChange_);

    this.usingNativeControls(this.techGet_('controls'));

    if (this.controls() && !this.usingNativeControls()) {
      this.addTechControlsListeners_();
    }

    // Add the tech element in the DOM if it was not already there
    // Make sure to not insert the original video element if using Html5
    if (this.tech_.el().parentNode !== this.el() && (techName !== 'Html5' || !this.tag)) {
      Dom.insertElFirst(this.tech_.el(), this.el());
    }

    // Get rid of the original video tag reference after the first tech is loaded
    if (this.tag) {
      this.tag.player = null;
      this.tag = null;
    }
  };

  /**
   * Unload playback technology
   *
   * @method unloadTech_
   * @private
   */

  Player.prototype.unloadTech_ = function unloadTech_() {
    // Save the current text tracks so that we can reuse the same text tracks with the next tech
    this.textTracks_ = this.textTracks();
    this.textTracksJson_ = _tracksTextTrackListConverterJs2['default'].textTracksToJson(this.tech_);

    this.isReady_ = false;

    this.tech_.dispose();

    this.tech_ = false;
  };

  /**
   * Return a reference to the current tech.
   * It will only return a reference to the tech if given an object with the
   * `IWillNotUseThisInPlugins` property on it. This is try and prevent misuse
   * of techs by plugins.
   *
   * @param {Object}
   * @return {Object} The Tech
   * @method tech
   */

  Player.prototype.tech = function tech(safety) {
    if (safety && safety.IWillNotUseThisInPlugins) {
      return this.tech_;
    }
    var errorText = '\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ';
    _globalWindow2['default'].alert(errorText);
    throw new Error(errorText);
  };

  /**
   * Set up click and touch listeners for the playback element
   *
   * On desktops, a click on the video itself will toggle playback,
   * on a mobile device a click on the video toggles controls.
   * (toggling controls is done by toggling the user state between active and
   * inactive)
   * A tap can signal that a user has become active, or has become inactive
   * e.g. a quick tap on an iPhone movie should reveal the controls. Another
   * quick tap should hide them again (signaling the user is in an inactive
   * viewing state)
   * In addition to this, we still want the user to be considered inactive after
   * a few seconds of inactivity.
   * Note: the only part of iOS interaction we can't mimic with this setup
   * is a touch and hold on the video element counting as activity in order to
   * keep the controls showing, but that shouldn't be an issue. A touch and hold
   * on any controls will still keep the user active
   *
   * @private
   * @method addTechControlsListeners_
   */

  Player.prototype.addTechControlsListeners_ = function addTechControlsListeners_() {
    // Make sure to remove all the previous listeners in case we are called multiple times.
    this.removeTechControlsListeners_();

    // Some browsers (Chrome & IE) don't trigger a click on a flash swf, but do
    // trigger mousedown/up.
    // http://stackoverflow.com/questions/1444562/javascript-onclick-event-over-flash-object
    // Any touch events are set to block the mousedown event from happening
    this.on(this.tech_, 'mousedown', this.handleTechClick_);

    // If the controls were hidden we don't want that to change without a tap event
    // so we'll check if the controls were already showing before reporting user
    // activity
    this.on(this.tech_, 'touchstart', this.handleTechTouchStart_);
    this.on(this.tech_, 'touchmove', this.handleTechTouchMove_);
    this.on(this.tech_, 'touchend', this.handleTechTouchEnd_);

    // The tap listener needs to come after the touchend listener because the tap
    // listener cancels out any reportedUserActivity when setting userActive(false)
    this.on(this.tech_, 'tap', this.handleTechTap_);
  };

  /**
   * Remove the listeners used for click and tap controls. This is needed for
   * toggling to controls disabled, where a tap/touch should do nothing.
   *
   * @method removeTechControlsListeners_
   * @private
   */

  Player.prototype.removeTechControlsListeners_ = function removeTechControlsListeners_() {
    // We don't want to just use `this.off()` because there might be other needed
    // listeners added by techs that extend this.
    this.off(this.tech_, 'tap', this.handleTechTap_);
    this.off(this.tech_, 'touchstart', this.handleTechTouchStart_);
    this.off(this.tech_, 'touchmove', this.handleTechTouchMove_);
    this.off(this.tech_, 'touchend', this.handleTechTouchEnd_);
    this.off(this.tech_, 'mousedown', this.handleTechClick_);
  };

  /**
   * Player waits for the tech to be ready
   *
   * @method handleTechReady_
   * @private
   */

  Player.prototype.handleTechReady_ = function handleTechReady_() {
    this.triggerReady();

    // Keep the same volume as before
    if (this.cache_.volume) {
      this.techCall_('setVolume', this.cache_.volume);
    }

    // Look if the tech found a higher resolution poster while loading
    this.handleTechPosterChange_();

    // Update the duration if available
    this.handleTechDurationChange_();

    // Chrome and Safari both have issues with autoplay.
    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
    // This fixes both issues. Need to wait for API, so it updates displays correctly
    if (this.src() && this.tag && this.options_.autoplay && this.paused()) {
      delete this.tag.poster; // Chrome Fix. Fixed in Chrome v16.
      this.play();
    }
  };

  /**
   * Fired when the user agent begins looking for media data
   *
   * @private
   * @method handleTechLoadStart_
   */

  Player.prototype.handleTechLoadStart_ = function handleTechLoadStart_() {
    // TODO: Update to use `emptied` event instead. See #1277.

    this.removeClass('vjs-ended');

    // reset the error state
    this.error(null);

    // If it's already playing we want to trigger a firstplay event now.
    // The firstplay event relies on both the play and loadstart events
    // which can happen in any order for a new source
    if (!this.paused()) {
      this.trigger('loadstart');
      this.trigger('firstplay');
    } else {
      // reset the hasStarted state
      this.hasStarted(false);
      this.trigger('loadstart');
    }
  };

  /**
   * Add/remove the vjs-has-started class
   *
   * @param {Boolean} hasStarted The value of true adds the class the value of false remove the class
   * @return {Boolean} Boolean value if has started
   * @private
   * @method hasStarted
   */

  Player.prototype.hasStarted = function hasStarted(_hasStarted) {
    if (_hasStarted !== undefined) {
      // only update if this is a new value
      if (this.hasStarted_ !== _hasStarted) {
        this.hasStarted_ = _hasStarted;
        if (_hasStarted) {
          this.addClass('vjs-has-started');
          // trigger the firstplay event if this newly has played
          this.trigger('firstplay');
        } else {
          this.removeClass('vjs-has-started');
        }
      }
      return this;
    }
    return !!this.hasStarted_;
  };

  /**
   * Fired whenever the media begins or resumes playback
   *
   * @private
   * @method handleTechPlay_
   */

  Player.prototype.handleTechPlay_ = function handleTechPlay_() {
    this.removeClass('vjs-ended');
    this.removeClass('vjs-paused');
    this.addClass('vjs-playing');

    // hide the poster when the user hits play
    // https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-play
    this.hasStarted(true);

    this.trigger('play');
  };

  /**
   * Fired whenever the media begins waiting
   *
   * @private
   * @method handleTechWaiting_
   */

  Player.prototype.handleTechWaiting_ = function handleTechWaiting_() {
    var _this2 = this;

    this.addClass('vjs-waiting');
    this.trigger('waiting');
    this.one('timeupdate', function () {
      return _this2.removeClass('vjs-waiting');
    });
  };

  /**
   * A handler for events that signal that waiting has ended
   * which is not consistent between browsers. See #1351
   *
   * @private
   * @method handleTechCanPlay_
   */

  Player.prototype.handleTechCanPlay_ = function handleTechCanPlay_() {
    this.removeClass('vjs-waiting');
    this.trigger('canplay');
  };

  /**
   * A handler for events that signal that waiting has ended
   * which is not consistent between browsers. See #1351
   *
   * @private
   * @method handleTechCanPlayThrough_
   */

  Player.prototype.handleTechCanPlayThrough_ = function handleTechCanPlayThrough_() {
    this.removeClass('vjs-waiting');
    this.trigger('canplaythrough');
  };

  /**
   * A handler for events that signal that waiting has ended
   * which is not consistent between browsers. See #1351
   *
   * @private
   * @method handleTechPlaying_
   */

  Player.prototype.handleTechPlaying_ = function handleTechPlaying_() {
    this.removeClass('vjs-waiting');
    this.trigger('playing');
  };

  /**
   * Fired whenever the player is jumping to a new time
   *
   * @private
   * @method handleTechSeeking_
   */

  Player.prototype.handleTechSeeking_ = function handleTechSeeking_() {
    this.addClass('vjs-seeking');
    this.trigger('seeking');
  };

  /**
   * Fired when the player has finished jumping to a new time
   *
   * @private
   * @method handleTechSeeked_
   */

  Player.prototype.handleTechSeeked_ = function handleTechSeeked_() {
    this.removeClass('vjs-seeking');
    this.trigger('seeked');
  };

  /**
   * Fired the first time a video is played
   * Not part of the HLS spec, and we're not sure if this is the best
   * implementation yet, so use sparingly. If you don't have a reason to
   * prevent playback, use `myPlayer.one('play');` instead.
   *
   * @private
   * @method handleTechFirstPlay_
   */

  Player.prototype.handleTechFirstPlay_ = function handleTechFirstPlay_() {
    //If the first starttime attribute is specified
    //then we will start at the given offset in seconds
    if (this.options_.starttime) {
      this.currentTime(this.options_.starttime);
    }

    this.addClass('vjs-has-started');
    this.trigger('firstplay');
  };

  /**
   * Fired whenever the media has been paused
   *
   * @private
   * @method handleTechPause_
   */

  Player.prototype.handleTechPause_ = function handleTechPause_() {
    this.removeClass('vjs-playing');
    this.addClass('vjs-paused');
    this.trigger('pause');
  };

  /**
   * Fired while the user agent is downloading media data
   *
   * @private
   * @method handleTechProgress_
   */

  Player.prototype.handleTechProgress_ = function handleTechProgress_() {
    this.trigger('progress');
  };

  /**
   * Fired when the end of the media resource is reached (currentTime == duration)
   *
   * @private
   * @method handleTechEnded_
   */

  Player.prototype.handleTechEnded_ = function handleTechEnded_() {
    this.addClass('vjs-ended');
    if (this.options_.loop) {
      this.currentTime(0);
      this.play();
    } else if (!this.paused()) {
      this.pause();
    }

    this.trigger('ended');
  };

  /**
   * Fired when the duration of the media resource is first known or changed
   *
   * @private
   * @method handleTechDurationChange_
   */

  Player.prototype.handleTechDurationChange_ = function handleTechDurationChange_() {
    this.duration(this.techGet_('duration'));
  };

  /**
   * Handle a click on the media element to play/pause
   *
   * @param {Object=} event Event object
   * @private
   * @method handleTechClick_
   */

  Player.prototype.handleTechClick_ = function handleTechClick_(event) {
    // We're using mousedown to detect clicks thanks to Flash, but mousedown
    // will also be triggered with right-clicks, so we need to prevent that
    if (event.button !== 0) return;

    // When controls are disabled a click should not toggle playback because
    // the click is considered a control
    if (this.controls()) {
      if (this.paused()) {
        this.play();
      } else {
        this.pause();
      }
    }
  };

  /**
   * Handle a tap on the media element. It will toggle the user
   * activity state, which hides and shows the controls.
   *
   * @private
   * @method handleTechTap_
   */

  Player.prototype.handleTechTap_ = function handleTechTap_() {
    this.userActive(!this.userActive());
  };

  /**
   * Handle touch to start
   *
   * @private
   * @method handleTechTouchStart_
   */

  Player.prototype.handleTechTouchStart_ = function handleTechTouchStart_() {
    this.userWasActive = this.userActive();
  };

  /**
   * Handle touch to move
   *
   * @private
   * @method handleTechTouchMove_
   */

  Player.prototype.handleTechTouchMove_ = function handleTechTouchMove_() {
    if (this.userWasActive) {
      this.reportUserActivity();
    }
  };

  /**
   * Handle touch to end
   *
   * @private
   * @method handleTechTouchEnd_
   */

  Player.prototype.handleTechTouchEnd_ = function handleTechTouchEnd_(event) {
    // Stop the mouse events from also happening
    event.preventDefault();
  };

  /**
   * Fired when the player switches in or out of fullscreen mode
   *
   * @private
   * @method handleFullscreenChange_
   */

  Player.prototype.handleFullscreenChange_ = function handleFullscreenChange_() {
    if (this.isFullscreen()) {
      this.addClass('vjs-fullscreen');
    } else {
      this.removeClass('vjs-fullscreen');
    }
  };

  /**
   * native click events on the SWF aren't triggered on IE11, Win8.1RT
   * use stageclick events triggered from inside the SWF instead
   *
   * @private
   * @method handleStageClick_
   */

  Player.prototype.handleStageClick_ = function handleStageClick_() {
    this.reportUserActivity();
  };

  /**
   * Handle Tech Fullscreen Change
   *
   * @private
   * @method handleTechFullscreenChange_
   */

  Player.prototype.handleTechFullscreenChange_ = function handleTechFullscreenChange_(event, data) {
    if (data) {
      this.isFullscreen(data.isFullscreen);
    }
    this.trigger('fullscreenchange');
  };

  /**
   * Fires when an error occurred during the loading of an audio/video
   *
   * @private
   * @method handleTechError_
   */

  Player.prototype.handleTechError_ = function handleTechError_() {
    var error = this.tech_.error();
    this.error(error && error.code);
  };

  /**
   * Fires when the browser is intentionally not getting media data
   *
   * @private
   * @method handleTechSuspend_
   */

  Player.prototype.handleTechSuspend_ = function handleTechSuspend_() {
    this.trigger('suspend');
  };

  /**
   * Fires when the loading of an audio/video is aborted
   *
   * @private
   * @method handleTechAbort_
   */

  Player.prototype.handleTechAbort_ = function handleTechAbort_() {
    this.trigger('abort');
  };

  /**
   * Fires when the current playlist is empty
   *
   * @private
   * @method handleTechEmptied_
   */

  Player.prototype.handleTechEmptied_ = function handleTechEmptied_() {
    this.trigger('emptied');
  };

  /**
   * Fires when the browser is trying to get media data, but data is not available
   *
   * @private
   * @method handleTechStalled_
   */

  Player.prototype.handleTechStalled_ = function handleTechStalled_() {
    this.trigger('stalled');
  };

  /**
   * Fires when the browser has loaded meta data for the audio/video
   *
   * @private
   * @method handleTechLoadedMetaData_
   */

  Player.prototype.handleTechLoadedMetaData_ = function handleTechLoadedMetaData_() {
    this.trigger('loadedmetadata');
  };

  /**
   * Fires when the browser has loaded the current frame of the audio/video
   *
   * @private
   * @method handleTechLoadedData_
   */

  Player.prototype.handleTechLoadedData_ = function handleTechLoadedData_() {
    this.trigger('loadeddata');
  };

  /**
   * Fires when the current playback position has changed
   *
   * @private
   * @method handleTechTimeUpdate_
   */

  Player.prototype.handleTechTimeUpdate_ = function handleTechTimeUpdate_() {
    this.trigger('timeupdate');
  };

  /**
   * Fires when the playing speed of the audio/video is changed
   *
   * @private
   * @method handleTechRateChange_
   */

  Player.prototype.handleTechRateChange_ = function handleTechRateChange_() {
    this.trigger('ratechange');
  };

  /**
   * Fires when the volume has been changed
   *
   * @private
   * @method handleTechVolumeChange_
   */

  Player.prototype.handleTechVolumeChange_ = function handleTechVolumeChange_() {
    this.trigger('volumechange');
  };

  /**
   * Fires when the text track has been changed
   *
   * @private
   * @method handleTechTextTrackChange_
   */

  Player.prototype.handleTechTextTrackChange_ = function handleTechTextTrackChange_() {
    this.trigger('texttrackchange');
  };

  /**
   * Get object for cached values.
   *
   * @return {Object}
   * @method getCache
   */

  Player.prototype.getCache = function getCache() {
    return this.cache_;
  };

  /**
   * Pass values to the playback tech
   *
   * @param {String=} method Method
   * @param {Object=} arg Argument
   * @private
   * @method techCall_
   */

  Player.prototype.techCall_ = function techCall_(method, arg) {
    // If it's not ready yet, call method when it is
    if (this.tech_ && !this.tech_.isReady_) {
      this.tech_.ready(function () {
        this[method](arg);
      }, true);

      // Otherwise call method now
    } else {
        try {
          this.tech_[method](arg);
        } catch (e) {
          _utilsLogJs2['default'](e);
          throw e;
        }
      }
  };

  /**
   * Get calls can't wait for the tech, and sometimes don't need to.
   *
   * @param {String} method Tech method
   * @return {Method}
   * @private
   * @method techGet_
   */

  Player.prototype.techGet_ = function techGet_(method) {
    if (this.tech_ && this.tech_.isReady_) {

      // Flash likes to die and reload when you hide or reposition it.
      // In these cases the object methods go away and we get errors.
      // When that happens we'll catch the errors and inform tech that it's not ready any more.
      try {
        return this.tech_[method]();
      } catch (e) {
        // When building additional tech libs, an expected method may not be defined yet
        if (this.tech_[method] === undefined) {
          _utilsLogJs2['default']('Video.js: ' + method + ' method not defined for ' + this.techName_ + ' playback technology.', e);
        } else {
          // When a method isn't available on the object it throws a TypeError
          if (e.name === 'TypeError') {
            _utilsLogJs2['default']('Video.js: ' + method + ' unavailable on ' + this.techName_ + ' playback technology element.', e);
            this.tech_.isReady_ = false;
          } else {
            _utilsLogJs2['default'](e);
          }
        }
        throw e;
      }
    }

    return;
  };

  /**
   * start media playback
   * ```js
   *     myPlayer.play();
   * ```
   *
   * @return {Player} self
   * @method play
   */

  Player.prototype.play = function play() {
    this.techCall_('play');
    return this;
  };

  /**
   * Pause the video playback
   * ```js
   *     myPlayer.pause();
   * ```
   *
   * @return {Player} self
   * @method pause
   */

  Player.prototype.pause = function pause() {
    this.techCall_('pause');
    return this;
  };

  /**
   * Check if the player is paused
   * ```js
   *     var isPaused = myPlayer.paused();
   *     var isPlaying = !myPlayer.paused();
   * ```
   *
   * @return {Boolean} false if the media is currently playing, or true otherwise
   * @method paused
   */

  Player.prototype.paused = function paused() {
    // The initial state of paused should be true (in Safari it's actually false)
    return this.techGet_('paused') === false ? false : true;
  };

  /**
   * Returns whether or not the user is "scrubbing". Scrubbing is when the user
   * has clicked the progress bar handle and is dragging it along the progress bar.
   *
   * @param  {Boolean} isScrubbing   True/false the user is scrubbing
   * @return {Boolean}               The scrubbing status when getting
   * @return {Object}                The player when setting
   * @method scrubbing
   */

  Player.prototype.scrubbing = function scrubbing(isScrubbing) {
    if (isScrubbing !== undefined) {
      this.scrubbing_ = !!isScrubbing;

      if (isScrubbing) {
        this.addClass('vjs-scrubbing');
      } else {
        this.removeClass('vjs-scrubbing');
      }

      return this;
    }

    return this.scrubbing_;
  };

  /**
   * Get or set the current time (in seconds)
   * ```js
   *     // get
   *     var whereYouAt = myPlayer.currentTime();
   *     // set
   *     myPlayer.currentTime(120); // 2 minutes into the video
   * ```
   *
   * @param  {Number|String=} seconds The time to seek to
   * @return {Number}        The time in seconds, when not setting
   * @return {Player}    self, when the current time is set
   * @method currentTime
   */

  Player.prototype.currentTime = function currentTime(seconds) {
    if (seconds !== undefined) {

      this.techCall_('setCurrentTime', seconds);

      return this;
    }

    // cache last currentTime and return. default to 0 seconds
    //
    // Caching the currentTime is meant to prevent a massive amount of reads on the tech's
    // currentTime when scrubbing, but may not provide much performance benefit afterall.
    // Should be tested. Also something has to read the actual current time or the cache will
    // never get updated.
    return this.cache_.currentTime = this.techGet_('currentTime') || 0;
  };

  /**
   * Get the length in time of the video in seconds
   * ```js
   *     var lengthOfVideo = myPlayer.duration();
   * ```
   * **NOTE**: The video must have started loading before the duration can be
   * known, and in the case of Flash, may not be known until the video starts
   * playing.
   *
   * @param {Number} seconds Duration when setting
   * @return {Number} The duration of the video in seconds when getting
   * @method duration
   */

  Player.prototype.duration = function duration(seconds) {
    if (seconds === undefined) {
      return this.cache_.duration || 0;
    }

    seconds = parseFloat(seconds) || 0;

    // Standardize on Inifity for signaling video is live
    if (seconds < 0) {
      seconds = Infinity;
    }

    if (seconds !== this.cache_.duration) {
      // Cache the last set value for optimized scrubbing (esp. Flash)
      this.cache_.duration = seconds;

      if (seconds === Infinity) {
        this.addClass('vjs-live');
      } else {
        this.removeClass('vjs-live');
      }

      this.trigger('durationchange');
    }

    return this;
  };

  /**
   * Calculates how much time is left.
   * ```js
   *     var timeLeft = myPlayer.remainingTime();
   * ```
   * Not a native video element function, but useful
   *
   * @return {Number} The time remaining in seconds
   * @method remainingTime
   */

  Player.prototype.remainingTime = function remainingTime() {
    return this.duration() - this.currentTime();
  };

  // http://dev.w3.org/html5/spec/video.html#dom-media-buffered
  // Buffered returns a timerange object.
  // Kind of like an array of portions of the video that have been downloaded.

  /**
   * Get a TimeRange object with the times of the video that have been downloaded
   * If you just want the percent of the video that's been downloaded,
   * use bufferedPercent.
   * ```js
   *     // Number of different ranges of time have been buffered. Usually 1.
   *     numberOfRanges = bufferedTimeRange.length,
   *     // Time in seconds when the first range starts. Usually 0.
   *     firstRangeStart = bufferedTimeRange.start(0),
   *     // Time in seconds when the first range ends
   *     firstRangeEnd = bufferedTimeRange.end(0),
   *     // Length in seconds of the first time range
   *     firstRangeLength = firstRangeEnd - firstRangeStart;
   * ```
   *
   * @return {Object} A mock TimeRange object (following HTML spec)
   * @method buffered
   */

  Player.prototype.buffered = function buffered() {
    var buffered = this.techGet_('buffered');

    if (!buffered || !buffered.length) {
      buffered = _utilsTimeRangesJs.createTimeRange(0, 0);
    }

    return buffered;
  };

  /**
   * Get the percent (as a decimal) of the video that's been downloaded
   * ```js
   *     var howMuchIsDownloaded = myPlayer.bufferedPercent();
   * ```
   * 0 means none, 1 means all.
   * (This method isn't in the HTML5 spec, but it's very convenient)
   *
   * @return {Number} A decimal between 0 and 1 representing the percent
   * @method bufferedPercent
   */

  Player.prototype.bufferedPercent = function bufferedPercent() {
    return _utilsBufferJs.bufferedPercent(this.buffered(), this.duration());
  };

  /**
   * Get the ending time of the last buffered time range
   * This is used in the progress bar to encapsulate all time ranges.
   *
   * @return {Number} The end of the last buffered time range
   * @method bufferedEnd
   */

  Player.prototype.bufferedEnd = function bufferedEnd() {
    var buffered = this.buffered(),
        duration = this.duration(),
        end = buffered.end(buffered.length - 1);

    if (end > duration) {
      end = duration;
    }

    return end;
  };

  /**
   * Get or set the current volume of the media
   * ```js
   *     // get
   *     var howLoudIsIt = myPlayer.volume();
   *     // set
   *     myPlayer.volume(0.5); // Set volume to half
   * ```
   * 0 is off (muted), 1.0 is all the way up, 0.5 is half way.
   *
   * @param  {Number} percentAsDecimal The new volume as a decimal percent
   * @return {Number}              The current volume when getting
   * @return {Player}              self when setting
   * @method volume
   */

  Player.prototype.volume = function volume(percentAsDecimal) {
    var vol = undefined;

    if (percentAsDecimal !== undefined) {
      vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
      this.cache_.volume = vol;
      this.techCall_('setVolume', vol);

      return this;
    }

    // Default to 1 when returning current volume.
    vol = parseFloat(this.techGet_('volume'));
    return isNaN(vol) ? 1 : vol;
  };

  /**
   * Get the current muted state, or turn mute on or off
   * ```js
   *     // get
   *     var isVolumeMuted = myPlayer.muted();
   *     // set
   *     myPlayer.muted(true); // mute the volume
   * ```
   *
   * @param  {Boolean=} muted True to mute, false to unmute
   * @return {Boolean} True if mute is on, false if not when getting
   * @return {Player} self when setting mute
   * @method muted
   */

  Player.prototype.muted = function muted(_muted) {
    if (_muted !== undefined) {
      this.techCall_('setMuted', _muted);
      return this;
    }
    return this.techGet_('muted') || false; // Default to false
  };

  // Check if current tech can support native fullscreen
  // (e.g. with built in controls like iOS, so not our flash swf)
  /**
   * Check to see if fullscreen is supported
   *
   * @return {Boolean}
   * @method supportsFullScreen
   */

  Player.prototype.supportsFullScreen = function supportsFullScreen() {
    return this.techGet_('supportsFullScreen') || false;
  };

  /**
   * Check if the player is in fullscreen mode
   * ```js
   *     // get
   *     var fullscreenOrNot = myPlayer.isFullscreen();
   *     // set
   *     myPlayer.isFullscreen(true); // tell the player it's in fullscreen
   * ```
   * NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
   * property and instead document.fullscreenElement is used. But isFullscreen is
   * still a valuable property for internal player workings.
   *
   * @param  {Boolean=} isFS Update the player's fullscreen state
   * @return {Boolean} true if fullscreen false if not when getting
   * @return {Player} self when setting
   * @method isFullscreen
   */

  Player.prototype.isFullscreen = function isFullscreen(isFS) {
    if (isFS !== undefined) {
      this.isFullscreen_ = !!isFS;
      return this;
    }
    return !!this.isFullscreen_;
  };

  /**
   * Increase the size of the video to full screen
   * ```js
   *     myPlayer.requestFullscreen();
   * ```
   * In some browsers, full screen is not supported natively, so it enters
   * "full window mode", where the video fills the browser window.
   * In browsers and devices that support native full screen, sometimes the
   * browser's default controls will be shown, and not the Video.js custom skin.
   * This includes most mobile devices (iOS, Android) and older versions of
   * Safari.
   *
   * @return {Player} self
   * @method requestFullscreen
   */

  Player.prototype.requestFullscreen = function requestFullscreen() {
    var fsApi = _fullscreenApiJs2['default'];

    this.isFullscreen(true);

    if (fsApi.requestFullscreen) {
      // the browser supports going fullscreen at the element level so we can
      // take the controls fullscreen as well as the video

      // Trigger fullscreenchange event after change
      // We have to specifically add this each time, and remove
      // when canceling fullscreen. Otherwise if there's multiple
      // players on a page, they would all be reacting to the same fullscreen
      // events
      Events.on(_globalDocument2['default'], fsApi.fullscreenchange, Fn.bind(this, function documentFullscreenChange(e) {
        this.isFullscreen(_globalDocument2['default'][fsApi.fullscreenElement]);

        // If cancelling fullscreen, remove event listener.
        if (this.isFullscreen() === false) {
          Events.off(_globalDocument2['default'], fsApi.fullscreenchange, documentFullscreenChange);
        }

        this.trigger('fullscreenchange');
      }));

      this.el_[fsApi.requestFullscreen]();
    } else if (this.tech_.supportsFullScreen()) {
      // we can't take the video.js controls fullscreen but we can go fullscreen
      // with native controls
      this.techCall_('enterFullScreen');
    } else {
      // fullscreen isn't supported so we'll just stretch the video element to
      // fill the viewport
      this.enterFullWindow();
      this.trigger('fullscreenchange');
    }

    return this;
  };

  /**
   * Return the video to its normal size after having been in full screen mode
   * ```js
   *     myPlayer.exitFullscreen();
   * ```
   *
   * @return {Player} self
   * @method exitFullscreen
   */

  Player.prototype.exitFullscreen = function exitFullscreen() {
    var fsApi = _fullscreenApiJs2['default'];
    this.isFullscreen(false);

    // Check for browser element fullscreen support
    if (fsApi.requestFullscreen) {
      _globalDocument2['default'][fsApi.exitFullscreen]();
    } else if (this.tech_.supportsFullScreen()) {
      this.techCall_('exitFullScreen');
    } else {
      this.exitFullWindow();
      this.trigger('fullscreenchange');
    }

    return this;
  };

  /**
   * When fullscreen isn't supported we can stretch the video container to as wide as the browser will let us.
   *
   * @method enterFullWindow
   */

  Player.prototype.enterFullWindow = function enterFullWindow() {
    this.isFullWindow = true;

    // Storing original doc overflow value to return to when fullscreen is off
    this.docOrigOverflow = _globalDocument2['default'].documentElement.style.overflow;

    // Add listener for esc key to exit fullscreen
    Events.on(_globalDocument2['default'], 'keydown', Fn.bind(this, this.fullWindowOnEscKey));

    // Hide any scroll bars
    _globalDocument2['default'].documentElement.style.overflow = 'hidden';

    // Apply fullscreen styles
    Dom.addElClass(_globalDocument2['default'].body, 'vjs-full-window');

    this.trigger('enterFullWindow');
  };

  /**
   * Check for call to either exit full window or full screen on ESC key
   *
   * @param {String} event Event to check for key press
   * @method fullWindowOnEscKey
   */

  Player.prototype.fullWindowOnEscKey = function fullWindowOnEscKey(event) {
    if (event.keyCode === 27) {
      if (this.isFullscreen() === true) {
        this.exitFullscreen();
      } else {
        this.exitFullWindow();
      }
    }
  };

  /**
   * Exit full window
   *
   * @method exitFullWindow
   */

  Player.prototype.exitFullWindow = function exitFullWindow() {
    this.isFullWindow = false;
    Events.off(_globalDocument2['default'], 'keydown', this.fullWindowOnEscKey);

    // Unhide scroll bars.
    _globalDocument2['default'].documentElement.style.overflow = this.docOrigOverflow;

    // Remove fullscreen styles
    Dom.removeElClass(_globalDocument2['default'].body, 'vjs-full-window');

    // Resize the box, controller, and poster to original sizes
    // this.positionAll();
    this.trigger('exitFullWindow');
  };

  /**
   * Check whether the player can play a given mimetype
   *
   * @param {String} type The mimetype to check
   * @return {String} 'probably', 'maybe', or '' (empty string)
   * @method canPlayType
   */

  Player.prototype.canPlayType = function canPlayType(type) {
    var can = undefined;

    // Loop through each playback technology in the options order
    for (var i = 0, j = this.options_.techOrder; i < j.length; i++) {
      var techName = _utilsToTitleCaseJs2['default'](j[i]);
      var tech = _techTechJs2['default'].getTech(techName);

      // Support old behavior of techs being registered as components.
      // Remove once that deprecated behavior is removed.
      if (!tech) {
        tech = _componentJs2['default'].getComponent(techName);
      }

      // Check if the current tech is defined before continuing
      if (!tech) {
        _utilsLogJs2['default'].error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
        continue;
      }

      // Check if the browser supports this technology
      if (tech.isSupported()) {
        can = tech.canPlayType(type);

        if (can) {
          return can;
        }
      }
    }

    return '';
  };

  /**
   * Select source based on tech-order or source-order
   * Uses source-order selection if `options.sourceOrder` is truthy. Otherwise,
   * defaults to tech-order selection
   *
   * @param {Array} sources The sources for a media asset
   * @return {Object|Boolean} Object of source and tech order, otherwise false
   * @method selectSource
   */

  Player.prototype.selectSource = function selectSource(sources) {
    // Get only the techs specified in `techOrder` that exist and are supported by the
    // current platform
    var techs = this.options_.techOrder.map(_utilsToTitleCaseJs2['default']).map(function (techName) {
      // `Component.getComponent(...)` is for support of old behavior of techs
      // being registered as components.
      // Remove once that deprecated behavior is removed.
      return [techName, _techTechJs2['default'].getTech(techName) || _componentJs2['default'].getComponent(techName)];
    }).filter(function (_ref) {
      var techName = _ref[0];
      var tech = _ref[1];

      // Check if the current tech is defined before continuing
      if (tech) {
        // Check if the browser supports this technology
        return tech.isSupported();
      }

      _utilsLogJs2['default'].error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
      return false;
    });

    // Iterate over each `innerArray` element once per `outerArray` element and execute
    // `tester` with both. If `tester` returns a non-falsy value, exit early and return
    // that value.
    var findFirstPassingTechSourcePair = function findFirstPassingTechSourcePair(outerArray, innerArray, tester) {
      var found = undefined;

      outerArray.some(function (outerChoice) {
        return innerArray.some(function (innerChoice) {
          found = tester(outerChoice, innerChoice);

          if (found) {
            return true;
          }
        });
      });

      return found;
    };

    var foundSourceAndTech = undefined;
    var flip = function flip(fn) {
      return function (a, b) {
        return fn(b, a);
      };
    };
    var finder = function finder(_ref2, source) {
      var techName = _ref2[0];
      var tech = _ref2[1];

      if (tech.canPlaySource(source)) {
        return { source: source, tech: techName };
      }
    };

    // Depending on the truthiness of `options.sourceOrder`, we swap the order of techs and sources
    // to select from them based on their priority.
    if (this.options_.sourceOrder) {
      // Source-first ordering
      foundSourceAndTech = findFirstPassingTechSourcePair(sources, techs, flip(finder));
    } else {
      // Tech-first ordering
      foundSourceAndTech = findFirstPassingTechSourcePair(techs, sources, finder);
    }

    return foundSourceAndTech || false;
  };

  /**
   * The source function updates the video source
   * There are three types of variables you can pass as the argument.
   * **URL String**: A URL to the the video file. Use this method if you are sure
   * the current playback technology (HTML5/Flash) can support the source you
   * provide. Currently only MP4 files can be used in both HTML5 and Flash.
   * ```js
   *     myPlayer.src("http://www.example.com/path/to/video.mp4");
   * ```
   * **Source Object (or element):* * A javascript object containing information
   * about the source file. Use this method if you want the player to determine if
   * it can support the file using the type information.
   * ```js
   *     myPlayer.src({ type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" });
   * ```
   * **Array of Source Objects:* * To provide multiple versions of the source so
   * that it can be played using HTML5 across browsers you can use an array of
   * source objects. Video.js will detect which version is supported and load that
   * file.
   * ```js
   *     myPlayer.src([
   *       { type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" },
   *       { type: "video/webm", src: "http://www.example.com/path/to/video.webm" },
   *       { type: "video/ogg", src: "http://www.example.com/path/to/video.ogv" }
   *     ]);
   * ```
   *
   * @param  {String|Object|Array=} source The source URL, object, or array of sources
   * @return {String} The current video source when getting
   * @return {String} The player when setting
   * @method src
   */

  Player.prototype.src = function src(source) {
    if (source === undefined) {
      return this.techGet_('src');
    }

    var currentTech = _techTechJs2['default'].getTech(this.techName_);
    // Support old behavior of techs being registered as components.
    // Remove once that deprecated behavior is removed.
    if (!currentTech) {
      currentTech = _componentJs2['default'].getComponent(this.techName_);
    }

    // case: Array of source objects to choose from and pick the best to play
    if (Array.isArray(source)) {
      this.sourceList_(source);

      // case: URL String (http://myvideo...)
    } else if (typeof source === 'string') {
        // create a source object from the string
        this.src({ src: source });

        // case: Source object { src: '', type: '' ... }
      } else if (source instanceof Object) {
          // check if the source has a type and the loaded tech cannot play the source
          // if there's no type we'll just try the current tech
          if (source.type && !currentTech.canPlaySource(source)) {
            // create a source list with the current source and send through
            // the tech loop to check for a compatible technology
            this.sourceList_([source]);
          } else {
            this.cache_.src = source.src;
            this.currentType_ = source.type || '';

            // wait until the tech is ready to set the source
            this.ready(function () {

              // The setSource tech method was added with source handlers
              // so older techs won't support it
              // We need to check the direct prototype for the case where subclasses
              // of the tech do not support source handlers
              if (currentTech.prototype.hasOwnProperty('setSource')) {
                this.techCall_('setSource', source);
              } else {
                this.techCall_('src', source.src);
              }

              if (this.options_.preload === 'auto') {
                this.load();
              }

              if (this.options_.autoplay) {
                this.play();
              }

              // Set the source synchronously if possible (#2326)
            }, true);
          }
        }

    return this;
  };

  /**
   * Handle an array of source objects
   *
   * @param  {Array} sources Array of source objects
   * @private
   * @method sourceList_
   */

  Player.prototype.sourceList_ = function sourceList_(sources) {
    var sourceTech = this.selectSource(sources);

    if (sourceTech) {
      if (sourceTech.tech === this.techName_) {
        // if this technology is already loaded, set the source
        this.src(sourceTech.source);
      } else {
        // load this technology with the chosen source
        this.loadTech_(sourceTech.tech, sourceTech.source);
      }
    } else {
      // We need to wrap this in a timeout to give folks a chance to add error event handlers
      this.setTimeout(function () {
        this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) });
      }, 0);

      // we could not find an appropriate tech, but let's still notify the delegate that this is it
      // this needs a better comment about why this is needed
      this.triggerReady();
    }
  };

  /**
   * Begin loading the src data.
   *
   * @return {Player} Returns the player
   * @method load
   */

  Player.prototype.load = function load() {
    this.techCall_('load');
    return this;
  };

  /**
   * Reset the player. Loads the first tech in the techOrder,
   * and calls `reset` on the tech`.
   *
   * @return {Player} Returns the player
   * @method reset
   */

  Player.prototype.reset = function reset() {
    this.loadTech_(_utilsToTitleCaseJs2['default'](this.options_.techOrder[0]), null);
    this.techCall_('reset');
    return this;
  };

  /**
   * Returns the fully qualified URL of the current source value e.g. http://mysite.com/video.mp4
   * Can be used in conjuction with `currentType` to assist in rebuilding the current source object.
   *
   * @return {String} The current source
   * @method currentSrc
   */

  Player.prototype.currentSrc = function currentSrc() {
    return this.techGet_('currentSrc') || this.cache_.src || '';
  };

  /**
   * Get the current source type e.g. video/mp4
   * This can allow you rebuild the current source object so that you could load the same
   * source and tech later
   *
   * @return {String} The source MIME type
   * @method currentType
   */

  Player.prototype.currentType = function currentType() {
    return this.currentType_ || '';
  };

  /**
   * Get or set the preload attribute
   *
   * @param {Boolean} value Boolean to determine if preload should be used
   * @return {String} The preload attribute value when getting
   * @return {Player} Returns the player when setting
   * @method preload
   */

  Player.prototype.preload = function preload(value) {
    if (value !== undefined) {
      this.techCall_('setPreload', value);
      this.options_.preload = value;
      return this;
    }
    return this.techGet_('preload');
  };

  /**
   * Get or set the autoplay attribute.
   *
   * @param {Boolean} value Boolean to determine if video should autoplay
   * @return {String} The autoplay attribute value when getting
   * @return {Player} Returns the player when setting
   * @method autoplay
   */

  Player.prototype.autoplay = function autoplay(value) {
    if (value !== undefined) {
      this.techCall_('setAutoplay', value);
      this.options_.autoplay = value;
      return this;
    }
    return this.techGet_('autoplay', value);
  };

  /**
   * Get or set the loop attribute on the video element.
   *
   * @param {Boolean} value Boolean to determine if video should loop
   * @return {String} The loop attribute value when getting
   * @return {Player} Returns the player when setting
   * @method loop
   */

  Player.prototype.loop = function loop(value) {
    if (value !== undefined) {
      this.techCall_('setLoop', value);
      this.options_['loop'] = value;
      return this;
    }
    return this.techGet_('loop');
  };

  /**
   * Get or set the poster image source url
   *
   * ##### EXAMPLE:
   * ```js
   *     // get
   *     var currentPoster = myPlayer.poster();
   *     // set
   *     myPlayer.poster('http://example.com/myImage.jpg');
   * ```
   *
   * @param  {String=} src Poster image source URL
   * @return {String} poster URL when getting
   * @return {Player} self when setting
   * @method poster
   */

  Player.prototype.poster = function poster(src) {
    if (src === undefined) {
      return this.poster_;
    }

    // The correct way to remove a poster is to set as an empty string
    // other falsey values will throw errors
    if (!src) {
      src = '';
    }

    // update the internal poster variable
    this.poster_ = src;

    // update the tech's poster
    this.techCall_('setPoster', src);

    // alert components that the poster has been set
    this.trigger('posterchange');

    return this;
  };

  /**
   * Some techs (e.g. YouTube) can provide a poster source in an
   * asynchronous way. We want the poster component to use this
   * poster source so that it covers up the tech's controls.
   * (YouTube's play button). However we only want to use this
   * soruce if the player user hasn't set a poster through
   * the normal APIs.
   *
   * @private
   * @method handleTechPosterChange_
   */

  Player.prototype.handleTechPosterChange_ = function handleTechPosterChange_() {
    if (!this.poster_ && this.tech_ && this.tech_.poster) {
      this.poster_ = this.tech_.poster() || '';

      // Let components know the poster has changed
      this.trigger('posterchange');
    }
  };

  /**
   * Get or set whether or not the controls are showing.
   *
   * @param  {Boolean} bool Set controls to showing or not
   * @return {Boolean}    Controls are showing
   * @method controls
   */

  Player.prototype.controls = function controls(bool) {
    if (bool !== undefined) {
      bool = !!bool; // force boolean
      // Don't trigger a change event unless it actually changed
      if (this.controls_ !== bool) {
        this.controls_ = bool;

        if (this.usingNativeControls()) {
          this.techCall_('setControls', bool);
        }

        if (bool) {
          this.removeClass('vjs-controls-disabled');
          this.addClass('vjs-controls-enabled');
          this.trigger('controlsenabled');

          if (!this.usingNativeControls()) {
            this.addTechControlsListeners_();
          }
        } else {
          this.removeClass('vjs-controls-enabled');
          this.addClass('vjs-controls-disabled');
          this.trigger('controlsdisabled');

          if (!this.usingNativeControls()) {
            this.removeTechControlsListeners_();
          }
        }
      }
      return this;
    }
    return !!this.controls_;
  };

  /**
   * Toggle native controls on/off. Native controls are the controls built into
   * devices (e.g. default iPhone controls), Flash, or other techs
   * (e.g. Vimeo Controls)
   * **This should only be set by the current tech, because only the tech knows
   * if it can support native controls**
   *
   * @param  {Boolean} bool    True signals that native controls are on
   * @return {Player}      Returns the player
   * @private
   * @method usingNativeControls
   */

  Player.prototype.usingNativeControls = function usingNativeControls(bool) {
    if (bool !== undefined) {
      bool = !!bool; // force boolean
      // Don't trigger a change event unless it actually changed
      if (this.usingNativeControls_ !== bool) {
        this.usingNativeControls_ = bool;
        if (bool) {
          this.addClass('vjs-using-native-controls');

          /**
            * player is using the native device controls
           *
            * @event usingnativecontrols
            * @memberof Player
            * @instance
            * @private
            */
          this.trigger('usingnativecontrols');
        } else {
          this.removeClass('vjs-using-native-controls');

          /**
            * player is using the custom HTML controls
           *
            * @event usingcustomcontrols
            * @memberof Player
            * @instance
            * @private
            */
          this.trigger('usingcustomcontrols');
        }
      }
      return this;
    }
    return !!this.usingNativeControls_;
  };

  /**
   * Set or get the current MediaError
   *
   * @param  {*} err A MediaError or a String/Number to be turned into a MediaError
   * @return {MediaError|null}     when getting
   * @return {Player}              when setting
   * @method error
   */

  Player.prototype.error = function error(err) {
    if (err === undefined) {
      return this.error_ || null;
    }

    // restoring to default
    if (err === null) {
      this.error_ = err;
      this.removeClass('vjs-error');
      this.errorDisplay.close();
      return this;
    }

    // error instance
    if (err instanceof _mediaErrorJs2['default']) {
      this.error_ = err;
    } else {
      this.error_ = new _mediaErrorJs2['default'](err);
    }

    // add the vjs-error classname to the player
    this.addClass('vjs-error');

    // log the name of the error type and any message
    // ie8 just logs "[object object]" if you just log the error object
    _utilsLogJs2['default'].error('(CODE:' + this.error_.code + ' ' + _mediaErrorJs2['default'].errorTypes[this.error_.code] + ')', this.error_.message, this.error_);

    // fire an error event on the player
    this.trigger('error');

    return this;
  };

  /**
   * Returns whether or not the player is in the "ended" state.
   *
   * @return {Boolean} True if the player is in the ended state, false if not.
   * @method ended
   */

  Player.prototype.ended = function ended() {
    return this.techGet_('ended');
  };

  /**
   * Returns whether or not the player is in the "seeking" state.
   *
   * @return {Boolean} True if the player is in the seeking state, false if not.
   * @method seeking
   */

  Player.prototype.seeking = function seeking() {
    return this.techGet_('seeking');
  };

  /**
   * Returns the TimeRanges of the media that are currently available
   * for seeking to.
   *
   * @return {TimeRanges} the seekable intervals of the media timeline
   * @method seekable
   */

  Player.prototype.seekable = function seekable() {
    return this.techGet_('seekable');
  };

  /**
   * Report user activity
   *
   * @param {Object} event Event object
   * @method reportUserActivity
   */

  Player.prototype.reportUserActivity = function reportUserActivity(event) {
    this.userActivity_ = true;
  };

  /**
   * Get/set if user is active
   *
   * @param {Boolean} bool Value when setting
   * @return {Boolean} Value if user is active user when getting
   * @method userActive
   */

  Player.prototype.userActive = function userActive(bool) {
    if (bool !== undefined) {
      bool = !!bool;
      if (bool !== this.userActive_) {
        this.userActive_ = bool;
        if (bool) {
          // If the user was inactive and is now active we want to reset the
          // inactivity timer
          this.userActivity_ = true;
          this.removeClass('vjs-user-inactive');
          this.addClass('vjs-user-active');
          this.trigger('useractive');
        } else {
          // We're switching the state to inactive manually, so erase any other
          // activity
          this.userActivity_ = false;

          // Chrome/Safari/IE have bugs where when you change the cursor it can
          // trigger a mousemove event. This causes an issue when you're hiding
          // the cursor when the user is inactive, and a mousemove signals user
          // activity. Making it impossible to go into inactive mode. Specifically
          // this happens in fullscreen when we really need to hide the cursor.
          //
          // When this gets resolved in ALL browsers it can be removed
          // https://code.google.com/p/chromium/issues/detail?id=103041
          if (this.tech_) {
            this.tech_.one('mousemove', function (e) {
              e.stopPropagation();
              e.preventDefault();
            });
          }

          this.removeClass('vjs-user-active');
          this.addClass('vjs-user-inactive');
          this.trigger('userinactive');
        }
      }
      return this;
    }
    return this.userActive_;
  };

  /**
   * Listen for user activity based on timeout value
   *
   * @private
   * @method listenForUserActivity_
   */

  Player.prototype.listenForUserActivity_ = function listenForUserActivity_() {
    var mouseInProgress = undefined,
        lastMoveX = undefined,
        lastMoveY = undefined;

    var handleActivity = Fn.bind(this, this.reportUserActivity);

    var handleMouseMove = function handleMouseMove(e) {
      // #1068 - Prevent mousemove spamming
      // Chrome Bug: https://code.google.com/p/chromium/issues/detail?id=366970
      if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
        lastMoveX = e.screenX;
        lastMoveY = e.screenY;
        handleActivity();
      }
    };

    var handleMouseDown = function handleMouseDown() {
      handleActivity();
      // For as long as the they are touching the device or have their mouse down,
      // we consider them active even if they're not moving their finger or mouse.
      // So we want to continue to update that they are active
      this.clearInterval(mouseInProgress);
      // Setting userActivity=true now and setting the interval to the same time
      // as the activityCheck interval (250) should ensure we never miss the
      // next activityCheck
      mouseInProgress = this.setInterval(handleActivity, 250);
    };

    var handleMouseUp = function handleMouseUp(event) {
      handleActivity();
      // Stop the interval that maintains activity if the mouse/touch is down
      this.clearInterval(mouseInProgress);
    };

    // Any mouse movement will be considered user activity
    this.on('mousedown', handleMouseDown);
    this.on('mousemove', handleMouseMove);
    this.on('mouseup', handleMouseUp);

    // Listen for keyboard navigation
    // Shouldn't need to use inProgress interval because of key repeat
    this.on('keydown', handleActivity);
    this.on('keyup', handleActivity);

    // Run an interval every 250 milliseconds instead of stuffing everything into
    // the mousemove/touchmove function itself, to prevent performance degradation.
    // `this.reportUserActivity` simply sets this.userActivity_ to true, which
    // then gets picked up by this loop
    // http://ejohn.org/blog/learning-from-twitter/
    var inactivityTimeout = undefined;
    var activityCheck = this.setInterval(function () {
      // Check to see if mouse/touch activity has happened
      if (this.userActivity_) {
        // Reset the activity tracker
        this.userActivity_ = false;

        // If the user state was inactive, set the state to active
        this.userActive(true);

        // Clear any existing inactivity timeout to start the timer over
        this.clearTimeout(inactivityTimeout);

        var timeout = this.options_['inactivityTimeout'];
        if (timeout > 0) {
          // In <timeout> milliseconds, if no more activity has occurred the
          // user will be considered inactive
          inactivityTimeout = this.setTimeout(function () {
            // Protect against the case where the inactivityTimeout can trigger just
            // before the next user activity is picked up by the activityCheck loop
            // causing a flicker
            if (!this.userActivity_) {
              this.userActive(false);
            }
          }, timeout);
        }
      }
    }, 250);
  };

  /**
   * Gets or sets the current playback rate.  A playback rate of
   * 1.0 represents normal speed and 0.5 would indicate half-speed
   * playback, for instance.
   * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-playbackrate
   *
   * @param  {Number} rate    New playback rate to set.
   * @return {Number}         Returns the new playback rate when setting
   * @return {Number}         Returns the current playback rate when getting
   * @method playbackRate
   */

  Player.prototype.playbackRate = function playbackRate(rate) {
    if (rate !== undefined) {
      this.techCall_('setPlaybackRate', rate);
      return this;
    }

    if (this.tech_ && this.tech_['featuresPlaybackRate']) {
      return this.techGet_('playbackRate');
    } else {
      return 1.0;
    }
  };

  /**
   * Gets or sets the audio flag
   *
   * @param  {Boolean} bool    True signals that this is an audio player.
   * @return {Boolean}         Returns true if player is audio, false if not when getting
   * @return {Player}      Returns the player if setting
   * @private
   * @method isAudio
   */

  Player.prototype.isAudio = function isAudio(bool) {
    if (bool !== undefined) {
      this.isAudio_ = !!bool;
      return this;
    }

    return !!this.isAudio_;
  };

  /**
   * Returns the current state of network activity for the element, from
   * the codes in the list below.
   * - NETWORK_EMPTY (numeric value 0)
   *   The element has not yet been initialised. All attributes are in
   *   their initial states.
   * - NETWORK_IDLE (numeric value 1)
   *   The element's resource selection algorithm is active and has
   *   selected a resource, but it is not actually using the network at
   *   this time.
   * - NETWORK_LOADING (numeric value 2)
   *   The user agent is actively trying to download data.
   * - NETWORK_NO_SOURCE (numeric value 3)
   *   The element's resource selection algorithm is active, but it has
   *   not yet found a resource to use.
   *
   * @see https://html.spec.whatwg.org/multipage/embedded-content.html#network-states
   * @return {Number} the current network activity state
   * @method networkState
   */

  Player.prototype.networkState = function networkState() {
    return this.techGet_('networkState');
  };

  /**
   * Returns a value that expresses the current state of the element
   * with respect to rendering the current playback position, from the
   * codes in the list below.
   * - HAVE_NOTHING (numeric value 0)
   *   No information regarding the media resource is available.
   * - HAVE_METADATA (numeric value 1)
   *   Enough of the resource has been obtained that the duration of the
   *   resource is available.
   * - HAVE_CURRENT_DATA (numeric value 2)
   *   Data for the immediate current playback position is available.
   * - HAVE_FUTURE_DATA (numeric value 3)
   *   Data for the immediate current playback position is available, as
   *   well as enough data for the user agent to advance the current
   *   playback position in the direction of playback.
   * - HAVE_ENOUGH_DATA (numeric value 4)
   *   The user agent estimates that enough data is available for
   *   playback to proceed uninterrupted.
   *
   * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-readystate
   * @return {Number} the current playback rendering state
   * @method readyState
   */

  Player.prototype.readyState = function readyState() {
    return this.techGet_('readyState');
  };

  /**
   * Text tracks are tracks of timed text events.
   * Captions - text displayed over the video for the hearing impaired
   * Subtitles - text displayed over the video for those who don't understand language in the video
   * Chapters - text displayed in a menu allowing the user to jump to particular points (chapters) in the video
   * Descriptions - audio descriptions that are read back to the user by a screen reading device
   */

  /**
   * Get an array of associated text tracks. captions, subtitles, chapters, descriptions
   * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-texttracks
   *
   * @return {Array}           Array of track objects
   * @method textTracks
   */

  Player.prototype.textTracks = function textTracks() {
    // cannot use techGet_ directly because it checks to see whether the tech is ready.
    // Flash is unlikely to be ready in time but textTracks should still work.
    return this.tech_ && this.tech_['textTracks']();
  };

  /**
   * Get an array of remote text tracks
   *
   * @return {Array}
   * @method remoteTextTracks
   */

  Player.prototype.remoteTextTracks = function remoteTextTracks() {
    return this.tech_ && this.tech_['remoteTextTracks']();
  };

  /**
   * Get an array of remote html track elements
   *
   * @return {HTMLTrackElement[]}
   * @method remoteTextTrackEls
   */

  Player.prototype.remoteTextTrackEls = function remoteTextTrackEls() {
    return this.tech_ && this.tech_['remoteTextTrackEls']();
  };

  /**
   * Add a text track
   * In addition to the W3C settings we allow adding additional info through options.
   * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
   *
   * @param {String}  kind        Captions, subtitles, chapters, descriptions, or metadata
   * @param {String=} label       Optional label
   * @param {String=} language    Optional language
   * @method addTextTrack
   */

  Player.prototype.addTextTrack = function addTextTrack(kind, label, language) {
    return this.tech_ && this.tech_['addTextTrack'](kind, label, language);
  };

  /**
   * Add a remote text track
   *
   * @param {Object} options    Options for remote text track
   * @method addRemoteTextTrack
   */

  Player.prototype.addRemoteTextTrack = function addRemoteTextTrack(options) {
    return this.tech_ && this.tech_['addRemoteTextTrack'](options);
  };

  /**
   * Remove a remote text track
   *
   * @param {Object} track    Remote text track to remove
   * @method removeRemoteTextTrack
   */
  // destructure the input into an object with a track argument, defaulting to arguments[0]
  // default the whole argument to an empty object if nothing was passed in

  Player.prototype.removeRemoteTextTrack = function removeRemoteTextTrack() {
    var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref3$track = _ref3.track;
    var track = _ref3$track === undefined ? arguments[0] : _ref3$track;
    // jshint ignore:line
    this.tech_ && this.tech_['removeRemoteTextTrack'](track);
  };

  /**
   * Get video width
   *
   * @return {Number} Video width
   * @method videoWidth
   */

  Player.prototype.videoWidth = function videoWidth() {
    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
  };

  /**
   * Get video height
   *
   * @return {Number} Video height
   * @method videoHeight
   */

  Player.prototype.videoHeight = function videoHeight() {
    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
  };

  // Methods to add support for
  // initialTime: function(){ return this.techCall_('initialTime'); },
  // startOffsetTime: function(){ return this.techCall_('startOffsetTime'); },
  // played: function(){ return this.techCall_('played'); },
  // videoTracks: function(){ return this.techCall_('videoTracks'); },
  // audioTracks: function(){ return this.techCall_('audioTracks'); },
  // defaultPlaybackRate: function(){ return this.techCall_('defaultPlaybackRate'); },
  // defaultMuted: function(){ return this.techCall_('defaultMuted'); }

  /**
   * The player's language code
   * NOTE: The language should be set in the player options if you want the
   * the controls to be built with a specific language. Changing the lanugage
   * later will not update controls text.
   *
   * @param {String} code  The locale string
   * @return {String}      The locale string when getting
   * @return {Player}      self when setting
   * @method language
   */

  Player.prototype.language = function language(code) {
    if (code === undefined) {
      return this.language_;
    }

    this.language_ = ('' + code).toLowerCase();
    return this;
  };

  /**
   * Get the player's language dictionary
   * Merge every time, because a newly added plugin might call videojs.addLanguage() at any time
   * Languages specified directly in the player options have precedence
   *
   * @return {Array} Array of languages
   * @method languages
   */

  Player.prototype.languages = function languages() {
    return _utilsMergeOptionsJs2['default'](Player.prototype.options_.languages, this.languages_);
  };

  /**
   * Converts track info to JSON
   *
   * @return {Object} JSON object of options
   * @method toJSON
   */

  Player.prototype.toJSON = function toJSON() {
    var options = _utilsMergeOptionsJs2['default'](this.options_);
    var tracks = options.tracks;

    options.tracks = [];

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      // deep merge tracks and null out player so no circular references
      track = _utilsMergeOptionsJs2['default'](track);
      track.player = undefined;
      options.tracks[i] = track;
    }

    return options;
  };

  /**
   * Creates a simple modal dialog (an instance of the `ModalDialog`
   * component) that immediately overlays the player with arbitrary
   * content and removes itself when closed.
   *
   * @param {String|Function|Element|Array|Null} content
   *        Same as `ModalDialog#content`'s param of the same name.
   *
   *        The most straight-forward usage is to provide a string or DOM
   *        element.
   *
   * @param {Object} [options]
   *        Extra options which will be passed on to the `ModalDialog`.
   *
   * @return {ModalDialog}
   */

  Player.prototype.createModal = function createModal(content, options) {
    var player = this;

    options = options || {};
    options.content = content || '';

    var modal = new _modalDialog2['default'](player, options);

    player.addChild(modal);
    modal.on('dispose', function () {
      player.removeChild(modal);
    });

    return modal.open();
  };

  /**
   * Gets tag settings
   *
   * @param {Element} tag The player tag
   * @return {Array} An array of sources and track objects
   * @static
   * @method getTagSettings
   */

  Player.getTagSettings = function getTagSettings(tag) {
    var baseOptions = {
      'sources': [],
      'tracks': []
    };

    var tagOptions = Dom.getElAttributes(tag);
    var dataSetup = tagOptions['data-setup'];

    // Check if data-setup attr exists.
    if (dataSetup !== null) {
      // Parse options JSON

      var _safeParseTuple = _safeJsonParseTuple2['default'](dataSetup || '{}');

      var err = _safeParseTuple[0];
      var data = _safeParseTuple[1];

      if (err) {
        _utilsLogJs2['default'].error(err);
      }
      _objectAssign2['default'](tagOptions, data);
    }

    _objectAssign2['default'](baseOptions, tagOptions);

    // Get tag children settings
    if (tag.hasChildNodes()) {
      var children = tag.childNodes;

      for (var i = 0, j = children.length; i < j; i++) {
        var child = children[i];
        // Change case needed: http://ejohn.org/blog/nodename-case-sensitivity/
        var childName = child.nodeName.toLowerCase();
        if (childName === 'source') {
          baseOptions.sources.push(Dom.getElAttributes(child));
        } else if (childName === 'track') {
          baseOptions.tracks.push(Dom.getElAttributes(child));
        }
      }
    }

    return baseOptions;
  };

  return Player;
})(_componentJs2['default']);

Player.players = {};

var navigator = _globalWindow2['default'].navigator;
/*
 * Player instance options, surfaced using options
 * options = Player.prototype.options_
 * Make changes in options, not here.
 *
 * @type {Object}
 * @private
 */
Player.prototype.options_ = {
  // Default order of fallback technology
  techOrder: ['html5', 'flash'],
  // techOrder: ['flash','html5'],

  html5: {},
  flash: {},

  // defaultVolume: 0.85,
  defaultVolume: 0.00, // The freakin seaguls are driving me crazy!

  // default inactivity timeout
  inactivityTimeout: 2000,

  // default playback rates
  playbackRates: [],
  // Add playback rate selection by adding rates
  // 'playbackRates': [0.5, 1, 1.5, 2],

  // Included control sets
  children: ['mediaLoader', 'posterImage', 'textTrackDisplay', 'loadingSpinner', 'bigPlayButton', 'controlBar', 'errorDisplay', 'textTrackSettings'],

  language: _globalDocument2['default'].getElementsByTagName('html')[0].getAttribute('lang') || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || 'en',

  // locales and their language translations
  languages: {},

  // Default message to show when a video cannot be played.
  notSupportedMessage: 'No compatible source was found for this media.'
};

/**
 * Fired when the player has initial duration and dimension information
 *
 * @event loadedmetadata
 */
Player.prototype.handleLoadedMetaData_;

/**
 * Fired when the player has downloaded data at the current playback position
 *
 * @event loadeddata
 */
Player.prototype.handleLoadedData_;

/**
 * Fired when the user is active, e.g. moves the mouse over the player
 *
 * @event useractive
 */
Player.prototype.handleUserActive_;

/**
 * Fired when the user is inactive, e.g. a short delay after the last mouse move or control interaction
 *
 * @event userinactive
 */
Player.prototype.handleUserInactive_;

/**
 * Fired when the current playback position has changed *
 * During playback this is fired every 15-250 milliseconds, depending on the
 * playback technology in use.
 *
 * @event timeupdate
 */
Player.prototype.handleTimeUpdate_;

/**
 * Fired when video playback ends
 *
 * @event ended
 */
Player.prototype.handleTechEnded_;

/**
 * Fired when the volume changes
 *
 * @event volumechange
 */
Player.prototype.handleVolumeChange_;

/**
 * Fired when an error occurs
 *
 * @event error
 */
Player.prototype.handleError_;

Player.prototype.flexNotSupported_ = function () {
  var elem = _globalDocument2['default'].createElement('i');

  // Note: We don't actually use flexBasis (or flexOrder), but it's one of the more
  // common flex features that we can rely on when checking for flex support.
  return !('flexBasis' in elem.style || 'webkitFlexBasis' in elem.style || 'mozFlexBasis' in elem.style || 'msFlexBasis' in elem.style || 'msFlexOrder' in elem.style) /* IE10-specific (2012 flex spec)  */;
};

_componentJs2['default'].registerComponent('Player', Player);
exports['default'] = Player;
module.exports = exports['default'];
// If empty string, make it a parsable json object.

},{"./big-play-button.js":63,"./component.js":67,"./control-bar/control-bar.js":68,"./error-display.js":100,"./fullscreen-api.js":103,"./loading-spinner.js":104,"./media-error.js":105,"./modal-dialog":109,"./poster-image.js":114,"./tech/html5.js":119,"./tech/loader.js":120,"./tech/tech.js":121,"./tracks/text-track-display.js":125,"./tracks/text-track-list-converter.js":127,"./tracks/text-track-settings.js":129,"./utils/browser.js":131,"./utils/buffer.js":132,"./utils/dom.js":134,"./utils/events.js":135,"./utils/fn.js":136,"./utils/guid.js":138,"./utils/log.js":139,"./utils/merge-options.js":140,"./utils/stylesheet.js":141,"./utils/time-ranges.js":142,"./utils/to-title-case.js":143,"global/document":1,"global/window":2,"object.assign":45,"safe-json-parse/tuple":54}],111:[function(_dereq_,module,exports){
/**
 * @file plugins.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _playerJs = _dereq_('./player.js');

var _playerJs2 = _interopRequireDefault(_playerJs);

/**
 * The method for registering a video.js plugin
 *
 * @param  {String} name The name of the plugin
 * @param  {Function} init The function that is run when the player inits
 * @method plugin
 */
var plugin = function plugin(name, init) {
  _playerJs2['default'].prototype[name] = init;
};

exports['default'] = plugin;
module.exports = exports['default'];

},{"./player.js":110}],112:[function(_dereq_,module,exports){
/**
 * @file popup-button.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _clickableComponentJs = _dereq_('../clickable-component.js');

var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _popupJs = _dereq_('./popup.js');

var _popupJs2 = _interopRequireDefault(_popupJs);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsToTitleCaseJs = _dereq_('../utils/to-title-case.js');

var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);

/**
 * A button class with a popup control
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends ClickableComponent
 * @class PopupButton
 */

var PopupButton = (function (_ClickableComponent) {
  _inherits(PopupButton, _ClickableComponent);

  function PopupButton(player) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, PopupButton);

    _ClickableComponent.call(this, player, options);

    this.update();
  }

  /**
   * Update popup
   *
   * @method update
   */

  PopupButton.prototype.update = function update() {
    var popup = this.createPopup();

    if (this.popup) {
      this.removeChild(this.popup);
    }

    this.popup = popup;
    this.addChild(popup);

    if (this.items && this.items.length === 0) {
      this.hide();
    } else if (this.items && this.items.length > 1) {
      this.show();
    }
  };

  /**
   * Create popup - Override with specific functionality for component
   *
   * @return {Popup} The constructed popup
   * @method createPopup
   */

  PopupButton.prototype.createPopup = function createPopup() {};

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  PopupButton.prototype.createEl = function createEl() {
    return _ClickableComponent.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass()
    });
  };

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  PopupButton.prototype.buildCSSClass = function buildCSSClass() {
    var menuButtonClass = 'vjs-menu-button';

    // If the inline option is passed, we want to use different styles altogether.
    if (this.options_.inline === true) {
      menuButtonClass += '-inline';
    } else {
      menuButtonClass += '-popup';
    }

    return 'vjs-menu-button ' + menuButtonClass + ' ' + _ClickableComponent.prototype.buildCSSClass.call(this);
  };

  return PopupButton;
})(_clickableComponentJs2['default']);

_componentJs2['default'].registerComponent('PopupButton', PopupButton);
exports['default'] = PopupButton;
module.exports = exports['default'];

},{"../clickable-component.js":65,"../component.js":67,"../utils/dom.js":134,"../utils/fn.js":136,"../utils/to-title-case.js":143,"./popup.js":113}],113:[function(_dereq_,module,exports){
/**
 * @file popup.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsEventsJs = _dereq_('../utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

/**
 * The Popup component is used to build pop up controls.
 *
 * @extends Component
 * @class Popup
 */

var Popup = (function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    _classCallCheck(this, Popup);

    _Component.apply(this, arguments);
  }

  /**
   * Add a popup item to the popup
   *
   * @param {Object|String} component Component or component type to add
   * @method addItem
   */

  Popup.prototype.addItem = function addItem(component) {
    this.addChild(component);
    component.on('click', Fn.bind(this, function () {
      this.unlockShowing();
    }));
  };

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  Popup.prototype.createEl = function createEl() {
    var contentElType = this.options_.contentElType || 'ul';
    this.contentEl_ = Dom.createEl(contentElType, {
      className: 'vjs-menu-content'
    });
    var el = _Component.prototype.createEl.call(this, 'div', {
      append: this.contentEl_,
      className: 'vjs-menu'
    });
    el.appendChild(this.contentEl_);

    // Prevent clicks from bubbling up. Needed for Popup Buttons,
    // where a click on the parent is significant
    Events.on(el, 'click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    });

    return el;
  };

  return Popup;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('Popup', Popup);
exports['default'] = Popup;
module.exports = exports['default'];

},{"../component.js":67,"../utils/dom.js":134,"../utils/events.js":135,"../utils/fn.js":136}],114:[function(_dereq_,module,exports){
/**
 * @file poster-image.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _clickableComponentJs = _dereq_('./clickable-component.js');

var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);

var _componentJs = _dereq_('./component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsFnJs = _dereq_('./utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsDomJs = _dereq_('./utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsBrowserJs = _dereq_('./utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

/**
 * The component that handles showing the poster image.
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class PosterImage
 */

var PosterImage = (function (_ClickableComponent) {
  _inherits(PosterImage, _ClickableComponent);

  function PosterImage(player, options) {
    _classCallCheck(this, PosterImage);

    _ClickableComponent.call(this, player, options);

    this.update();
    player.on('posterchange', Fn.bind(this, this.update));
  }

  /**
   * Clean up the poster image
   *
   * @method dispose
   */

  PosterImage.prototype.dispose = function dispose() {
    this.player().off('posterchange', this.update);
    _ClickableComponent.prototype.dispose.call(this);
  };

  /**
   * Create the poster's image element
   *
   * @return {Element}
   * @method createEl
   */

  PosterImage.prototype.createEl = function createEl() {
    var el = Dom.createEl('div', {
      className: 'vjs-poster',

      // Don't want poster to be tabbable.
      tabIndex: -1
    });

    // To ensure the poster image resizes while maintaining its original aspect
    // ratio, use a div with `background-size` when available. For browsers that
    // do not support `background-size` (e.g. IE8), fall back on using a regular
    // img element.
    if (!browser.BACKGROUND_SIZE_SUPPORTED) {
      this.fallbackImg_ = Dom.createEl('img');
      el.appendChild(this.fallbackImg_);
    }

    return el;
  };

  /**
   * Event handler for updates to the player's poster source
   *
   * @method update
   */

  PosterImage.prototype.update = function update() {
    var url = this.player().poster();

    this.setSrc(url);

    // If there's no poster source we should display:none on this component
    // so it's not still clickable or right-clickable
    if (url) {
      this.show();
    } else {
      this.hide();
    }
  };

  /**
   * Set the poster source depending on the display method
   *
   * @param {String} url The URL to the poster source
   * @method setSrc
   */

  PosterImage.prototype.setSrc = function setSrc(url) {
    if (this.fallbackImg_) {
      this.fallbackImg_.src = url;
    } else {
      var backgroundImage = '';
      // Any falsey values should stay as an empty string, otherwise
      // this will throw an extra error
      if (url) {
        backgroundImage = 'url("' + url + '")';
      }

      this.el_.style.backgroundImage = backgroundImage;
    }
  };

  /**
   * Event handler for clicks on the poster image
   *
   * @method handleClick
   */

  PosterImage.prototype.handleClick = function handleClick() {
    // We don't want a click to trigger playback when controls are disabled
    // but CSS should be hiding the poster to prevent that from happening
    if (this.player_.paused()) {
      this.player_.play();
    } else {
      this.player_.pause();
    }
  };

  return PosterImage;
})(_clickableComponentJs2['default']);

_componentJs2['default'].registerComponent('PosterImage', PosterImage);
exports['default'] = PosterImage;
module.exports = exports['default'];

},{"./clickable-component.js":65,"./component.js":67,"./utils/browser.js":131,"./utils/dom.js":134,"./utils/fn.js":136}],115:[function(_dereq_,module,exports){
/**
 * @file setup.js
 *
 * Functions for automatically setting up a player
 * based on the data-setup attribute of the video tag
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utilsEventsJs = _dereq_('./utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _windowLoaded = false;
var videojs = undefined;

// Automatically set up any tags that have a data-setup attribute
var autoSetup = function autoSetup() {
  // One day, when we stop supporting IE8, go back to this, but in the meantime...*hack hack hack*
  // var vids = Array.prototype.slice.call(document.getElementsByTagName('video'));
  // var audios = Array.prototype.slice.call(document.getElementsByTagName('audio'));
  // var mediaEls = vids.concat(audios);

  // Because IE8 doesn't support calling slice on a node list, we need to loop through each list of elements
  // to build up a new, combined list of elements.
  var vids = _globalDocument2['default'].getElementsByTagName('video');
  var audios = _globalDocument2['default'].getElementsByTagName('audio');
  var mediaEls = [];
  if (vids && vids.length > 0) {
    for (var i = 0, e = vids.length; i < e; i++) {
      mediaEls.push(vids[i]);
    }
  }
  if (audios && audios.length > 0) {
    for (var i = 0, e = audios.length; i < e; i++) {
      mediaEls.push(audios[i]);
    }
  }

  // Check if any media elements exist
  if (mediaEls && mediaEls.length > 0) {

    for (var i = 0, e = mediaEls.length; i < e; i++) {
      var mediaEl = mediaEls[i];

      // Check if element exists, has getAttribute func.
      // IE seems to consider typeof el.getAttribute == 'object' instead of 'function' like expected, at least when loading the player immediately.
      if (mediaEl && mediaEl.getAttribute) {

        // Make sure this player hasn't already been set up.
        if (mediaEl['player'] === undefined) {
          var options = mediaEl.getAttribute('data-setup');

          // Check if data-setup attr exists.
          // We only auto-setup if they've added the data-setup attr.
          if (options !== null) {
            // Create new video.js instance.
            var player = videojs(mediaEl);
          }
        }

        // If getAttribute isn't defined, we need to wait for the DOM.
      } else {
          autoSetupTimeout(1);
          break;
        }
    }

    // No videos were found, so keep looping unless page is finished loading.
  } else if (!_windowLoaded) {
      autoSetupTimeout(1);
    }
};

// Pause to let the DOM keep processing
var autoSetupTimeout = function autoSetupTimeout(wait, vjs) {
  if (vjs) {
    videojs = vjs;
  }

  setTimeout(autoSetup, wait);
};

if (_globalDocument2['default'].readyState === 'complete') {
  _windowLoaded = true;
} else {
  Events.one(_globalWindow2['default'], 'load', function () {
    _windowLoaded = true;
  });
}

var hasLoaded = function hasLoaded() {
  return _windowLoaded;
};

exports.autoSetup = autoSetup;
exports.autoSetupTimeout = autoSetupTimeout;
exports.hasLoaded = hasLoaded;

},{"./utils/events.js":135,"global/document":1,"global/window":2}],116:[function(_dereq_,module,exports){
/**
 * @file slider.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

/**
 * The base functionality for sliders like the volume bar and seek bar
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class Slider
 */

var Slider = (function (_Component) {
  _inherits(Slider, _Component);

  function Slider(player, options) {
    _classCallCheck(this, Slider);

    _Component.call(this, player, options);

    // Set property names to bar to match with the child Slider class is looking for
    this.bar = this.getChild(this.options_.barName);

    // Set a horizontal or vertical class on the slider depending on the slider type
    this.vertical(!!this.options_.vertical);

    this.on('mousedown', this.handleMouseDown);
    this.on('touchstart', this.handleMouseDown);
    this.on('focus', this.handleFocus);
    this.on('blur', this.handleBlur);
    this.on('click', this.handleClick);

    this.on(player, 'controlsvisible', this.update);
    this.on(player, this.playerEvent, this.update);
  }

  /**
   * Create the component's DOM element
   *
   * @param {String} type Type of element to create
   * @param {Object=} props List of properties in Object form
   * @return {Element}
   * @method createEl
   */

  Slider.prototype.createEl = function createEl(type) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    // Add the slider element class to all sub classes
    props.className = props.className + ' vjs-slider';
    props = _objectAssign2['default']({
      tabIndex: 0
    }, props);

    attributes = _objectAssign2['default']({
      'role': 'slider',
      'aria-valuenow': 0,
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      tabIndex: 0
    }, attributes);

    return _Component.prototype.createEl.call(this, type, props, attributes);
  };

  /**
   * Handle mouse down on slider
   *
   * @param {Object} event Mouse down event object
   * @method handleMouseDown
   */

  Slider.prototype.handleMouseDown = function handleMouseDown(event) {
    var doc = this.bar.el_.ownerDocument;

    event.preventDefault();
    Dom.blockTextSelection();

    this.addClass('vjs-sliding');
    this.trigger('slideractive');

    this.on(doc, 'mousemove', this.handleMouseMove);
    this.on(doc, 'mouseup', this.handleMouseUp);
    this.on(doc, 'touchmove', this.handleMouseMove);
    this.on(doc, 'touchend', this.handleMouseUp);

    this.handleMouseMove(event);
  };

  /**
   * To be overridden by a subclass
   *
   * @method handleMouseMove
   */

  Slider.prototype.handleMouseMove = function handleMouseMove() {};

  /**
   * Handle mouse up on Slider
   *
   * @method handleMouseUp
   */

  Slider.prototype.handleMouseUp = function handleMouseUp() {
    var doc = this.bar.el_.ownerDocument;

    Dom.unblockTextSelection();

    this.removeClass('vjs-sliding');
    this.trigger('sliderinactive');

    this.off(doc, 'mousemove', this.handleMouseMove);
    this.off(doc, 'mouseup', this.handleMouseUp);
    this.off(doc, 'touchmove', this.handleMouseMove);
    this.off(doc, 'touchend', this.handleMouseUp);

    this.update();
  };

  /**
   * Update slider
   *
   * @method update
   */

  Slider.prototype.update = function update() {
    // In VolumeBar init we have a setTimeout for update that pops and update to the end of the
    // execution stack. The player is destroyed before then update will cause an error
    if (!this.el_) return;

    // If scrubbing, we could use a cached value to make the handle keep up with the user's mouse.
    // On HTML5 browsers scrubbing is really smooth, but some flash players are slow, so we might want to utilize this later.
    // var progress =  (this.player_.scrubbing()) ? this.player_.getCache().currentTime / this.player_.duration() : this.player_.currentTime() / this.player_.duration();
    var progress = this.getPercent();
    var bar = this.bar;

    // If there's no bar...
    if (!bar) return;

    // Protect against no duration and other division issues
    if (typeof progress !== 'number' || progress !== progress || progress < 0 || progress === Infinity) {
      progress = 0;
    }

    // Convert to a percentage for setting
    var percentage = (progress * 100).toFixed(2) + '%';

    // Set the new bar width or height
    if (this.vertical()) {
      bar.el().style.height = percentage;
    } else {
      bar.el().style.width = percentage;
    }
  };

  /**
   * Calculate distance for slider
   *
   * @param {Object} event Event object
   * @method calculateDistance
   */

  Slider.prototype.calculateDistance = function calculateDistance(event) {
    var position = Dom.getPointerPosition(this.el_, event);
    if (this.vertical()) {
      return position.y;
    }
    return position.x;
  };

  /**
   * Handle on focus for slider
   *
   * @method handleFocus
   */

  Slider.prototype.handleFocus = function handleFocus() {
    this.on(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress);
  };

  /**
   * Handle key press for slider
   *
   * @param {Object} event Event object
   * @method handleKeyPress
   */

  Slider.prototype.handleKeyPress = function handleKeyPress(event) {
    if (event.which === 37 || event.which === 40) {
      // Left and Down Arrows
      event.preventDefault();
      this.stepBack();
    } else if (event.which === 38 || event.which === 39) {
      // Up and Right Arrows
      event.preventDefault();
      this.stepForward();
    }
  };

  /**
   * Handle on blur for slider
   *
   * @method handleBlur
   */

  Slider.prototype.handleBlur = function handleBlur() {
    this.off(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress);
  };

  /**
   * Listener for click events on slider, used to prevent clicks
   *   from bubbling up to parent elements like button menus.
   *
   * @param {Object} event Event object
   * @method handleClick
   */

  Slider.prototype.handleClick = function handleClick(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
  };

  /**
   * Get/set if slider is horizontal for vertical
   *
   * @param {Boolean} bool True if slider is vertical, false is horizontal
   * @return {Boolean} True if slider is vertical, false is horizontal
   * @method vertical
   */

  Slider.prototype.vertical = function vertical(bool) {
    if (bool === undefined) {
      return this.vertical_ || false;
    }

    this.vertical_ = !!bool;

    if (this.vertical_) {
      this.addClass('vjs-slider-vertical');
    } else {
      this.addClass('vjs-slider-horizontal');
    }

    return this;
  };

  return Slider;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('Slider', Slider);
exports['default'] = Slider;
module.exports = exports['default'];

},{"../component.js":67,"../utils/dom.js":134,"object.assign":45}],117:[function(_dereq_,module,exports){
/**
 * @file flash-rtmp.js
 */
'use strict';

exports.__esModule = true;
function FlashRtmpDecorator(Flash) {
  Flash.streamingFormats = {
    'rtmp/mp4': 'MP4',
    'rtmp/flv': 'FLV'
  };

  Flash.streamFromParts = function (connection, stream) {
    return connection + '&' + stream;
  };

  Flash.streamToParts = function (src) {
    var parts = {
      connection: '',
      stream: ''
    };

    if (!src) return parts;

    // Look for the normal URL separator we expect, '&'.
    // If found, we split the URL into two pieces around the
    // first '&'.
    var connEnd = src.search(/&(?!\w+=)/);
    var streamBegin = undefined;
    if (connEnd !== -1) {
      streamBegin = connEnd + 1;
    } else {
      // If there's not a '&', we use the last '/' as the delimiter.
      connEnd = streamBegin = src.lastIndexOf('/') + 1;
      if (connEnd === 0) {
        // really, there's not a '/'?
        connEnd = streamBegin = src.length;
      }
    }
    parts.connection = src.substring(0, connEnd);
    parts.stream = src.substring(streamBegin, src.length);

    return parts;
  };

  Flash.isStreamingType = function (srcType) {
    return srcType in Flash.streamingFormats;
  };

  // RTMP has four variations, any string starting
  // with one of these protocols should be valid
  Flash.RTMP_RE = /^rtmp[set]?:\/\//i;

  Flash.isStreamingSrc = function (src) {
    return Flash.RTMP_RE.test(src);
  };

  /**
   * A source handler for RTMP urls
   * @type {Object}
   */
  Flash.rtmpSourceHandler = {};

  /**
   * Check if Flash can play the given videotype
   * @param  {String} type    The mimetype to check
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */
  Flash.rtmpSourceHandler.canPlayType = function (type) {
    if (Flash.isStreamingType(type)) {
      return 'maybe';
    }

    return '';
  };

  /**
   * Check if Flash can handle the source natively
   * @param  {Object} source  The source object
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */
  Flash.rtmpSourceHandler.canHandleSource = function (source) {
    var can = Flash.rtmpSourceHandler.canPlayType(source.type);

    if (can) {
      return can;
    }

    if (Flash.isStreamingSrc(source.src)) {
      return 'maybe';
    }

    return '';
  };

  /**
   * Pass the source to the flash object
   * Adaptive source handlers will have more complicated workflows before passing
   * video data to the video element
   * @param  {Object} source    The source object
   * @param  {Flash} tech   The instance of the Flash tech
   */
  Flash.rtmpSourceHandler.handleSource = function (source, tech) {
    var srcParts = Flash.streamToParts(source.src);

    tech['setRtmpConnection'](srcParts.connection);
    tech['setRtmpStream'](srcParts.stream);
  };

  // Register the native source handler
  Flash.registerSourceHandler(Flash.rtmpSourceHandler);

  return Flash;
}

exports['default'] = FlashRtmpDecorator;
module.exports = exports['default'];

},{}],118:[function(_dereq_,module,exports){
/**
 * @file flash.js
 * VideoJS-SWF - Custom Flash Player with HTML5-ish API
 * https://github.com/zencoder/video-js-swf
 * Not using setupTriggers. Using global onEvent func to distribute events
 */

'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _tech = _dereq_('./tech');

var _tech2 = _interopRequireDefault(_tech);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsUrlJs = _dereq_('../utils/url.js');

var Url = _interopRequireWildcard(_utilsUrlJs);

var _utilsTimeRangesJs = _dereq_('../utils/time-ranges.js');

var _flashRtmp = _dereq_('./flash-rtmp');

var _flashRtmp2 = _interopRequireDefault(_flashRtmp);

var _component = _dereq_('../component');

var _component2 = _interopRequireDefault(_component);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var navigator = _globalWindow2['default'].navigator;
/**
 * Flash Media Controller - Wrapper for fallback SWF API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Flash
 */

var Flash = (function (_Tech) {
  _inherits(Flash, _Tech);

  function Flash(options, ready) {
    _classCallCheck(this, Flash);

    _Tech.call(this, options, ready);

    // Set the source when ready
    if (options.source) {
      this.ready(function () {
        this.setSource(options.source);
      }, true);
    }

    // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
    // This allows resetting the playhead when we catch the reload
    if (options.startTime) {
      this.ready(function () {
        this.load();
        this.play();
        this.currentTime(options.startTime);
      }, true);
    }

    // Add global window functions that the swf expects
    // A 4.x workflow we weren't able to solve for in 5.0
    // because of the need to hard code these functions
    // into the swf for security reasons
    _globalWindow2['default'].videojs = _globalWindow2['default'].videojs || {};
    _globalWindow2['default'].videojs.Flash = _globalWindow2['default'].videojs.Flash || {};
    _globalWindow2['default'].videojs.Flash.onReady = Flash.onReady;
    _globalWindow2['default'].videojs.Flash.onEvent = Flash.onEvent;
    _globalWindow2['default'].videojs.Flash.onError = Flash.onError;

    this.on('seeked', function () {
      this.lastSeekTarget_ = undefined;
    });
  }

  // Create setters and getters for attributes

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  Flash.prototype.createEl = function createEl() {
    var options = this.options_;

    // If video.js is hosted locally you should also set the location
    // for the hosted swf, which should be relative to the page (not video.js)
    // Otherwise this adds a CDN url.
    // The CDN also auto-adds a swf URL for that specific version.
    if (!options.swf) {
      options.swf = '//vjs.zencdn.net/swf/5.0.1/video-js.swf';
    }

    // Generate ID for swf object
    var objId = options.techId;

    // Merge default flashvars with ones passed in to init
    var flashVars = _objectAssign2['default']({

      // SWF Callback Functions
      'readyFunction': 'videojs.Flash.onReady',
      'eventProxyFunction': 'videojs.Flash.onEvent',
      'errorEventProxyFunction': 'videojs.Flash.onError',

      // Player Settings
      'autoplay': options.autoplay,
      'preload': options.preload,
      'loop': options.loop,
      'muted': options.muted

    }, options.flashVars);

    // Merge default parames with ones passed in
    var params = _objectAssign2['default']({
      'wmode': 'opaque', // Opaque is needed to overlay controls, but can affect playback performance
      'bgcolor': '#000000' // Using bgcolor prevents a white flash when the object is loading
    }, options.params);

    // Merge default attributes with ones passed in
    var attributes = _objectAssign2['default']({
      'id': objId,
      'name': objId, // Both ID and Name needed or swf to identify itself
      'class': 'vjs-tech'
    }, options.attributes);

    this.el_ = Flash.embed(options.swf, flashVars, params, attributes);
    this.el_.tech = this;

    return this.el_;
  };

  /**
   * Play for flash tech
   *
   * @method play
   */

  Flash.prototype.play = function play() {
    if (this.ended()) {
      this.setCurrentTime(0);
    }
    this.el_.vjs_play();
  };

  /**
   * Pause for flash tech
   *
   * @method pause
   */

  Flash.prototype.pause = function pause() {
    this.el_.vjs_pause();
  };

  /**
   * Get/set video
   *
   * @param {Object=} src Source object
   * @return {Object}
   * @method src
   */

  Flash.prototype.src = function src(_src) {
    if (_src === undefined) {
      return this.currentSrc();
    }

    // Setting src through `src` not `setSrc` will be deprecated
    return this.setSrc(_src);
  };

  /**
   * Set video
   *
   * @param {Object=} src Source object
   * @deprecated
   * @method setSrc
   */

  Flash.prototype.setSrc = function setSrc(src) {
    // Make sure source URL is absolute.
    src = Url.getAbsoluteURL(src);
    this.el_.vjs_src(src);

    // Currently the SWF doesn't autoplay if you load a source later.
    // e.g. Load player w/ no source, wait 2s, set src.
    if (this.autoplay()) {
      var tech = this;
      this.setTimeout(function () {
        tech.play();
      }, 0);
    }
  };

  /**
   * Returns true if the tech is currently seeking.
   * @return {boolean} true if seeking
   */

  Flash.prototype.seeking = function seeking() {
    return this.lastSeekTarget_ !== undefined;
  };

  /**
   * Set current time
   *
   * @param {Number} time Current time of video
   * @method setCurrentTime
   */

  Flash.prototype.setCurrentTime = function setCurrentTime(time) {
    var seekable = this.seekable();
    if (seekable.length) {
      // clamp to the current seekable range
      time = time > seekable.start(0) ? time : seekable.start(0);
      time = time < seekable.end(seekable.length - 1) ? time : seekable.end(seekable.length - 1);

      this.lastSeekTarget_ = time;
      this.trigger('seeking');
      this.el_.vjs_setProperty('currentTime', time);
      _Tech.prototype.setCurrentTime.call(this);
    }
  };

  /**
   * Get current time
   *
   * @param {Number=} time Current time of video
   * @return {Number} Current time
   * @method currentTime
   */

  Flash.prototype.currentTime = function currentTime(time) {
    // when seeking make the reported time keep up with the requested time
    // by reading the time we're seeking to
    if (this.seeking()) {
      return this.lastSeekTarget_ || 0;
    }
    return this.el_.vjs_getProperty('currentTime');
  };

  /**
   * Get current source
   *
   * @method currentSrc
   */

  Flash.prototype.currentSrc = function currentSrc() {
    if (this.currentSource_) {
      return this.currentSource_.src;
    } else {
      return this.el_.vjs_getProperty('currentSrc');
    }
  };

  /**
   * Load media into player
   *
   * @method load
   */

  Flash.prototype.load = function load() {
    this.el_.vjs_load();
  };

  /**
   * Get poster
   *
   * @method poster
   */

  Flash.prototype.poster = function poster() {
    this.el_.vjs_getProperty('poster');
  };

  /**
   * Poster images are not handled by the Flash tech so make this a no-op
   *
   * @method setPoster
   */

  Flash.prototype.setPoster = function setPoster() {};

  /**
   * Determine if can seek in media
   *
   * @return {TimeRangeObject}
   * @method seekable
   */

  Flash.prototype.seekable = function seekable() {
    var duration = this.duration();
    if (duration === 0) {
      return _utilsTimeRangesJs.createTimeRange();
    }
    return _utilsTimeRangesJs.createTimeRange(0, duration);
  };

  /**
   * Get buffered time range
   *
   * @return {TimeRangeObject}
   * @method buffered
   */

  Flash.prototype.buffered = function buffered() {
    var ranges = this.el_.vjs_getProperty('buffered');
    if (ranges.length === 0) {
      return _utilsTimeRangesJs.createTimeRange();
    }
    return _utilsTimeRangesJs.createTimeRange(ranges[0][0], ranges[0][1]);
  };

  /**
   * Get fullscreen support -
   * Flash does not allow fullscreen through javascript
   * so always returns false
   *
   * @return {Boolean} false
   * @method supportsFullScreen
   */

  Flash.prototype.supportsFullScreen = function supportsFullScreen() {
    return false; // Flash does not allow fullscreen through javascript
  };

  /**
   * Request to enter fullscreen
   * Flash does not allow fullscreen through javascript
   * so always returns false
   *
   * @return {Boolean} false
   * @method enterFullScreen
   */

  Flash.prototype.enterFullScreen = function enterFullScreen() {
    return false;
  };

  return Flash;
})(_tech2['default']);

var _api = Flash.prototype;
var _readWrite = 'rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted'.split(',');
var _readOnly = 'networkState,readyState,initialTime,duration,startOffsetTime,paused,ended,videoTracks,audioTracks,videoWidth,videoHeight'.split(',');

function _createSetter(attr) {
  var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
  _api['set' + attrUpper] = function (val) {
    return this.el_.vjs_setProperty(attr, val);
  };
}
function _createGetter(attr) {
  _api[attr] = function () {
    return this.el_.vjs_getProperty(attr);
  };
}

// Create getter and setters for all read/write attributes
for (var i = 0; i < _readWrite.length; i++) {
  _createGetter(_readWrite[i]);
  _createSetter(_readWrite[i]);
}

// Create getters for read-only attributes
for (var i = 0; i < _readOnly.length; i++) {
  _createGetter(_readOnly[i]);
}

/* Flash Support Testing -------------------------------------------------------- */

Flash.isSupported = function () {
  return Flash.version()[0] >= 10;
  // return swfobject.hasFlashPlayerVersion('10');
};

// Add Source Handler pattern functions to this tech
_tech2['default'].withSourceHandlers(Flash);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */
Flash.nativeSourceHandler = {};

/**
 * Check if Flash can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Flash.nativeSourceHandler.canPlayType = function (type) {
  if (type in Flash.formats) {
    return 'maybe';
  }

  return '';
};

/*
 * Check Flash can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Flash.nativeSourceHandler.canHandleSource = function (source) {
  var type;

  function guessMimeType(src) {
    var ext = Url.getFileExtension(src);
    if (ext) {
      return 'video/' + ext;
    }
    return '';
  }

  if (!source.type) {
    type = guessMimeType(source.src);
  } else {
    // Strip code information from the type because we don't get that specific
    type = source.type.replace(/;.*/, '').toLowerCase();
  }

  return Flash.nativeSourceHandler.canPlayType(type);
};

/*
 * Pass the source to the flash object
 * Adaptive source handlers will have more complicated workflows before passing
 * video data to the video element
 *
 * @param  {Object} source    The source object
 * @param  {Flash} tech   The instance of the Flash tech
 */
Flash.nativeSourceHandler.handleSource = function (source, tech) {
  tech.setSrc(source.src);
};

/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */
Flash.nativeSourceHandler.dispose = function () {};

// Register the native source handler
Flash.registerSourceHandler(Flash.nativeSourceHandler);

Flash.formats = {
  'video/flv': 'FLV',
  'video/x-flv': 'FLV',
  'video/mp4': 'MP4',
  'video/m4v': 'MP4'
};

Flash.onReady = function (currSwf) {
  var el = Dom.getEl(currSwf);
  var tech = el && el.tech;

  // if there is no el then the tech has been disposed
  // and the tech element was removed from the player div
  if (tech && tech.el()) {
    // check that the flash object is really ready
    Flash.checkReady(tech);
  }
};

// The SWF isn't always ready when it says it is. Sometimes the API functions still need to be added to the object.
// If it's not ready, we set a timeout to check again shortly.
Flash.checkReady = function (tech) {
  // stop worrying if the tech has been disposed
  if (!tech.el()) {
    return;
  }

  // check if API property exists
  if (tech.el().vjs_getProperty) {
    // tell tech it's ready
    tech.triggerReady();
  } else {
    // wait longer
    this.setTimeout(function () {
      Flash['checkReady'](tech);
    }, 50);
  }
};

// Trigger events from the swf on the player
Flash.onEvent = function (swfID, eventName) {
  var tech = Dom.getEl(swfID).tech;
  tech.trigger(eventName);
};

// Log errors from the swf
Flash.onError = function (swfID, err) {
  var tech = Dom.getEl(swfID).tech;

  // trigger MEDIA_ERR_SRC_NOT_SUPPORTED
  if (err === 'srcnotfound') {
    return tech.error(4);
  }

  // trigger a custom error
  tech.error('FLASH: ' + err);
};

// Flash Version Check
Flash.version = function () {
  var version = '0,0,0';

  // IE
  try {
    version = new _globalWindow2['default'].ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

    // other browsers
  } catch (e) {
    try {
      if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
        version = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
      }
    } catch (err) {}
  }
  return version.split(',');
};

// Flash embedding method. Only used in non-iframe mode
Flash.embed = function (swf, flashVars, params, attributes) {
  var code = Flash.getEmbedCode(swf, flashVars, params, attributes);

  // Get element by embedding code and retrieving created element
  var obj = Dom.createEl('div', { innerHTML: code }).childNodes[0];

  return obj;
};

Flash.getEmbedCode = function (swf, flashVars, params, attributes) {
  var objTag = '<object type="application/x-shockwave-flash" ';
  var flashVarsString = '';
  var paramsString = '';
  var attrsString = '';

  // Convert flash vars to string
  if (flashVars) {
    Object.getOwnPropertyNames(flashVars).forEach(function (key) {
      flashVarsString += key + '=' + flashVars[key] + '&amp;';
    });
  }

  // Add swf, flashVars, and other default params
  params = _objectAssign2['default']({
    'movie': swf,
    'flashvars': flashVarsString,
    'allowScriptAccess': 'always', // Required to talk to swf
    'allowNetworking': 'all' // All should be default, but having security issues.
  }, params);

  // Create param tags string
  Object.getOwnPropertyNames(params).forEach(function (key) {
    paramsString += '<param name="' + key + '" value="' + params[key] + '" />';
  });

  attributes = _objectAssign2['default']({
    // Add swf to attributes (need both for IE and Others to work)
    'data': swf,

    // Default to 100% width/height
    'width': '100%',
    'height': '100%'

  }, attributes);

  // Create Attributes string
  Object.getOwnPropertyNames(attributes).forEach(function (key) {
    attrsString += key + '="' + attributes[key] + '" ';
  });

  return '' + objTag + attrsString + '>' + paramsString + '</object>';
};

// Run Flash through the RTMP decorator
_flashRtmp2['default'](Flash);

_component2['default'].registerComponent('Flash', Flash);
_tech2['default'].registerTech('Flash', Flash);
exports['default'] = Flash;
module.exports = exports['default'];

},{"../component":67,"../utils/dom.js":134,"../utils/time-ranges.js":142,"../utils/url.js":144,"./flash-rtmp":117,"./tech":121,"global/window":2,"object.assign":45}],119:[function(_dereq_,module,exports){
/**
 * @file html5.js
 * HTML5 Media Controller - Wrapper for HTML5 Media API
 */

'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _techJs = _dereq_('./tech.js');

var _techJs2 = _interopRequireDefault(_techJs);

var _component = _dereq_('../component');

var _component2 = _interopRequireDefault(_component);

var _utilsDomJs = _dereq_('../utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsUrlJs = _dereq_('../utils/url.js');

var Url = _interopRequireWildcard(_utilsUrlJs);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsLogJs = _dereq_('../utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _utilsBrowserJs = _dereq_('../utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utilsMergeOptionsJs = _dereq_('../utils/merge-options.js');

var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);

/**
 * HTML5 Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Html5
 */

var Html5 = (function (_Tech) {
  _inherits(Html5, _Tech);

  function Html5(options, ready) {
    _classCallCheck(this, Html5);

    _Tech.call(this, options, ready);

    var source = options.source;

    // Set the source if one is provided
    // 1) Check if the source is new (if not, we want to keep the original so playback isn't interrupted)
    // 2) Check to see if the network state of the tag was failed at init, and if so, reset the source
    // anyway so the error gets fired.
    if (source && (this.el_.currentSrc !== source.src || options.tag && options.tag.initNetworkState_ === 3)) {
      this.setSource(source);
    } else {
      this.handleLateInit_(this.el_);
    }

    if (this.el_.hasChildNodes()) {

      var nodes = this.el_.childNodes;
      var nodesLength = nodes.length;
      var removeNodes = [];

      while (nodesLength--) {
        var node = nodes[nodesLength];
        var nodeName = node.nodeName.toLowerCase();

        if (nodeName === 'track') {
          if (!this.featuresNativeTextTracks) {
            // Empty video tag tracks so the built-in player doesn't use them also.
            // This may not be fast enough to stop HTML5 browsers from reading the tags
            // so we'll need to turn off any default tracks if we're manually doing
            // captions and subtitles. videoElement.textTracks
            removeNodes.push(node);
          } else {
            // store HTMLTrackElement and TextTrack to remote list
            this.remoteTextTrackEls().addTrackElement_(node);
            this.remoteTextTracks().addTrack_(node.track);
          }
        }
      }

      for (var i = 0; i < removeNodes.length; i++) {
        this.el_.removeChild(removeNodes[i]);
      }
    }

    if (this.featuresNativeTextTracks) {
      this.handleTextTrackChange_ = Fn.bind(this, this.handleTextTrackChange);
      this.handleTextTrackAdd_ = Fn.bind(this, this.handleTextTrackAdd);
      this.handleTextTrackRemove_ = Fn.bind(this, this.handleTextTrackRemove);
      this.proxyNativeTextTracks_();
    }

    // Determine if native controls should be used
    // Our goal should be to get the custom controls on mobile solid everywhere
    // so we can remove this all together. Right now this will block custom
    // controls on touch enabled laptops like the Chrome Pixel
    if (browser.TOUCH_ENABLED && options.nativeControlsForTouch === true || browser.IS_IPHONE || browser.IS_NATIVE_ANDROID) {
      this.setControls(true);
    }

    this.triggerReady();
  }

  /* HTML5 Support Testing ---------------------------------------------------- */

  /*
  * Element for testing browser HTML5 video capabilities
  *
  * @type {Element}
  * @constant
  * @private
  */

  /**
   * Dispose of html5 media element
   *
   * @method dispose
   */

  Html5.prototype.dispose = function dispose() {
    var tt = this.el().textTracks;
    var emulatedTt = this.textTracks();

    // remove native event listeners
    if (tt && tt.removeEventListener) {
      tt.removeEventListener('change', this.handleTextTrackChange_);
      tt.removeEventListener('addtrack', this.handleTextTrackAdd_);
      tt.removeEventListener('removetrack', this.handleTextTrackRemove_);
    }

    // clearout the emulated text track list.
    var i = emulatedTt.length;

    while (i--) {
      emulatedTt.removeTrack_(emulatedTt[i]);
    }

    Html5.disposeMediaElement(this.el_);
    _Tech.prototype.dispose.call(this);
  };

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  Html5.prototype.createEl = function createEl() {
    var el = this.options_.tag;

    // Check if this browser supports moving the element into the box.
    // On the iPhone video will break if you move the element,
    // So we have to create a brand new element.
    if (!el || this['movingMediaElementInDOM'] === false) {

      // If the original tag is still there, clone and remove it.
      if (el) {
        var clone = el.cloneNode(true);
        el.parentNode.insertBefore(clone, el);
        Html5.disposeMediaElement(el);
        el = clone;
      } else {
        el = _globalDocument2['default'].createElement('video');

        // determine if native controls should be used
        var tagAttributes = this.options_.tag && Dom.getElAttributes(this.options_.tag);
        var attributes = _utilsMergeOptionsJs2['default']({}, tagAttributes);
        if (!browser.TOUCH_ENABLED || this.options_.nativeControlsForTouch !== true) {
          delete attributes.controls;
        }

        Dom.setElAttributes(el, _objectAssign2['default'](attributes, {
          id: this.options_.techId,
          'class': 'vjs-tech'
        }));
      }
    }

    // Update specific tag settings, in case they were overridden
    var settingsAttrs = ['autoplay', 'preload', 'loop', 'muted'];
    for (var i = settingsAttrs.length - 1; i >= 0; i--) {
      var attr = settingsAttrs[i];
      var overwriteAttrs = {};
      if (typeof this.options_[attr] !== 'undefined') {
        overwriteAttrs[attr] = this.options_[attr];
      }
      Dom.setElAttributes(el, overwriteAttrs);
    }

    return el;
    // jenniisawesome = true;
  };

  // If we're loading the playback object after it has started loading
  // or playing the video (often with autoplay on) then the loadstart event
  // has already fired and we need to fire it manually because many things
  // rely on it.

  Html5.prototype.handleLateInit_ = function handleLateInit_(el) {
    var _this = this;

    if (el.networkState === 0 || el.networkState === 3) {
      // The video element hasn't started loading the source yet
      // or didn't find a source
      return;
    }

    if (el.readyState === 0) {
      var _ret = (function () {
        // NetworkState is set synchronously BUT loadstart is fired at the
        // end of the current stack, usually before setInterval(fn, 0).
        // So at this point we know loadstart may have already fired or is
        // about to fire, and either way the player hasn't seen it yet.
        // We don't want to fire loadstart prematurely here and cause a
        // double loadstart so we'll wait and see if it happens between now
        // and the next loop, and fire it if not.
        // HOWEVER, we also want to make sure it fires before loadedmetadata
        // which could also happen between now and the next loop, so we'll
        // watch for that also.
        var loadstartFired = false;
        var setLoadstartFired = function setLoadstartFired() {
          loadstartFired = true;
        };
        _this.on('loadstart', setLoadstartFired);

        var triggerLoadstart = function triggerLoadstart() {
          // We did miss the original loadstart. Make sure the player
          // sees loadstart before loadedmetadata
          if (!loadstartFired) {
            this.trigger('loadstart');
          }
        };
        _this.on('loadedmetadata', triggerLoadstart);

        _this.ready(function () {
          this.off('loadstart', setLoadstartFired);
          this.off('loadedmetadata', triggerLoadstart);

          if (!loadstartFired) {
            // We did miss the original native loadstart. Fire it now.
            this.trigger('loadstart');
          }
        });

        return {
          v: undefined
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    }

    // From here on we know that loadstart already fired and we missed it.
    // The other readyState events aren't as much of a problem if we double
    // them, so not going to go to as much trouble as loadstart to prevent
    // that unless we find reason to.
    var eventsToTrigger = ['loadstart'];

    // loadedmetadata: newly equal to HAVE_METADATA (1) or greater
    eventsToTrigger.push('loadedmetadata');

    // loadeddata: newly increased to HAVE_CURRENT_DATA (2) or greater
    if (el.readyState >= 2) {
      eventsToTrigger.push('loadeddata');
    }

    // canplay: newly increased to HAVE_FUTURE_DATA (3) or greater
    if (el.readyState >= 3) {
      eventsToTrigger.push('canplay');
    }

    // canplaythrough: newly equal to HAVE_ENOUGH_DATA (4)
    if (el.readyState >= 4) {
      eventsToTrigger.push('canplaythrough');
    }

    // We still need to give the player time to add event listeners
    this.ready(function () {
      eventsToTrigger.forEach(function (type) {
        this.trigger(type);
      }, this);
    });
  };

  Html5.prototype.proxyNativeTextTracks_ = function proxyNativeTextTracks_() {
    var tt = this.el().textTracks;

    if (tt) {
      // Add tracks - if player is initialised after DOM loaded, textTracks
      // will not trigger addtrack
      for (var i = 0; i < tt.length; i++) {
        this.textTracks().addTrack_(tt[i]);
      }

      if (tt.addEventListener) {
        tt.addEventListener('change', this.handleTextTrackChange_);
        tt.addEventListener('addtrack', this.handleTextTrackAdd_);
        tt.addEventListener('removetrack', this.handleTextTrackRemove_);
      }
    }
  };

  Html5.prototype.handleTextTrackChange = function handleTextTrackChange(e) {
    var tt = this.textTracks();
    this.textTracks().trigger({
      type: 'change',
      target: tt,
      currentTarget: tt,
      srcElement: tt
    });
  };

  Html5.prototype.handleTextTrackAdd = function handleTextTrackAdd(e) {
    this.textTracks().addTrack_(e.track);
  };

  Html5.prototype.handleTextTrackRemove = function handleTextTrackRemove(e) {
    this.textTracks().removeTrack_(e.track);
  };

  /**
   * Play for html5 tech
   *
   * @method play
   */

  Html5.prototype.play = function play() {
    this.el_.play();
  };

  /**
   * Pause for html5 tech
   *
   * @method pause
   */

  Html5.prototype.pause = function pause() {
    this.el_.pause();
  };

  /**
   * Paused for html5 tech
   *
   * @return {Boolean}
   * @method paused
   */

  Html5.prototype.paused = function paused() {
    return this.el_.paused;
  };

  /**
   * Get current time
   *
   * @return {Number}
   * @method currentTime
   */

  Html5.prototype.currentTime = function currentTime() {
    return this.el_.currentTime;
  };

  /**
   * Set current time
   *
   * @param {Number} seconds Current time of video
   * @method setCurrentTime
   */

  Html5.prototype.setCurrentTime = function setCurrentTime(seconds) {
    try {
      this.el_.currentTime = seconds;
    } catch (e) {
      _utilsLogJs2['default'](e, 'Video is not ready. (Video.js)');
      // this.warning(VideoJS.warnings.videoNotReady);
    }
  };

  /**
   * Get duration
   *
   * @return {Number}
   * @method duration
   */

  Html5.prototype.duration = function duration() {
    return this.el_.duration || 0;
  };

  /**
   * Get a TimeRange object that represents the intersection
   * of the time ranges for which the user agent has all
   * relevant media
   *
   * @return {TimeRangeObject}
   * @method buffered
   */

  Html5.prototype.buffered = function buffered() {
    return this.el_.buffered;
  };

  /**
   * Get volume level
   *
   * @return {Number}
   * @method volume
   */

  Html5.prototype.volume = function volume() {
    return this.el_.volume;
  };

  /**
   * Set volume level
   *
   * @param {Number} percentAsDecimal Volume percent as a decimal
   * @method setVolume
   */

  Html5.prototype.setVolume = function setVolume(percentAsDecimal) {
    this.el_.volume = percentAsDecimal;
  };

  /**
   * Get if muted
   *
   * @return {Boolean}
   * @method muted
   */

  Html5.prototype.muted = function muted() {
    return this.el_.muted;
  };

  /**
   * Set muted
   *
   * @param {Boolean} If player is to be muted or note
   * @method setMuted
   */

  Html5.prototype.setMuted = function setMuted(muted) {
    this.el_.muted = muted;
  };

  /**
   * Get player width
   *
   * @return {Number}
   * @method width
   */

  Html5.prototype.width = function width() {
    return this.el_.offsetWidth;
  };

  /**
   * Get player height
   *
   * @return {Number}
   * @method height
   */

  Html5.prototype.height = function height() {
    return this.el_.offsetHeight;
  };

  /**
   * Get if there is fullscreen support
   *
   * @return {Boolean}
   * @method supportsFullScreen
   */

  Html5.prototype.supportsFullScreen = function supportsFullScreen() {
    if (typeof this.el_.webkitEnterFullScreen === 'function') {
      var userAgent = _globalWindow2['default'].navigator.userAgent;
      // Seems to be broken in Chromium/Chrome && Safari in Leopard
      if (/Android/.test(userAgent) || !/Chrome|Mac OS X 10.5/.test(userAgent)) {
        return true;
      }
    }
    return false;
  };

  /**
   * Request to enter fullscreen
   *
   * @method enterFullScreen
   */

  Html5.prototype.enterFullScreen = function enterFullScreen() {
    var video = this.el_;

    if ('webkitDisplayingFullscreen' in video) {
      this.one('webkitbeginfullscreen', function () {
        this.one('webkitendfullscreen', function () {
          this.trigger('fullscreenchange', { isFullscreen: false });
        });

        this.trigger('fullscreenchange', { isFullscreen: true });
      });
    }

    if (video.paused && video.networkState <= video.HAVE_METADATA) {
      // attempt to prime the video element for programmatic access
      // this isn't necessary on the desktop but shouldn't hurt
      this.el_.play();

      // playing and pausing synchronously during the transition to fullscreen
      // can get iOS ~6.1 devices into a play/pause loop
      this.setTimeout(function () {
        video.pause();
        video.webkitEnterFullScreen();
      }, 0);
    } else {
      video.webkitEnterFullScreen();
    }
  };

  /**
   * Request to exit fullscreen
   *
   * @method exitFullScreen
   */

  Html5.prototype.exitFullScreen = function exitFullScreen() {
    this.el_.webkitExitFullScreen();
  };

  /**
   * Get/set video
   *
   * @param {Object=} src Source object
   * @return {Object}
   * @method src
   */

  Html5.prototype.src = function src(_src) {
    if (_src === undefined) {
      return this.el_.src;
    } else {
      // Setting src through `src` instead of `setSrc` will be deprecated
      this.setSrc(_src);
    }
  };

  /**
   * Set video
   *
   * @param {Object} src Source object
   * @deprecated
   * @method setSrc
   */

  Html5.prototype.setSrc = function setSrc(src) {
    this.el_.src = src;
  };

  /**
   * Load media into player
   *
   * @method load
   */

  Html5.prototype.load = function load() {
    this.el_.load();
  };

  /**
   * Reset the tech. Removes all sources and calls `load`.
   *
   * @method reset
   */

  Html5.prototype.reset = function reset() {
    Html5.resetMediaElement(this.el_);
  };

  /**
   * Get current source
   *
   * @return {Object}
   * @method currentSrc
   */

  Html5.prototype.currentSrc = function currentSrc() {
    if (this.currentSource_) {
      return this.currentSource_.src;
    } else {
      return this.el_.currentSrc;
    }
  };

  /**
   * Get poster
   *
   * @return {String}
   * @method poster
   */

  Html5.prototype.poster = function poster() {
    return this.el_.poster;
  };

  /**
   * Set poster
   *
   * @param {String} val URL to poster image
   * @method
   */

  Html5.prototype.setPoster = function setPoster(val) {
    this.el_.poster = val;
  };

  /**
   * Get preload attribute
   *
   * @return {String}
   * @method preload
   */

  Html5.prototype.preload = function preload() {
    return this.el_.preload;
  };

  /**
   * Set preload attribute
   *
   * @param {String} val Value for preload attribute
   * @method setPreload
   */

  Html5.prototype.setPreload = function setPreload(val) {
    this.el_.preload = val;
  };

  /**
   * Get autoplay attribute
   *
   * @return {String}
   * @method autoplay
   */

  Html5.prototype.autoplay = function autoplay() {
    return this.el_.autoplay;
  };

  /**
   * Set autoplay attribute
   *
   * @param {String} val Value for preload attribute
   * @method setAutoplay
   */

  Html5.prototype.setAutoplay = function setAutoplay(val) {
    this.el_.autoplay = val;
  };

  /**
   * Get controls attribute
   *
   * @return {String}
   * @method controls
   */

  Html5.prototype.controls = function controls() {
    return this.el_.controls;
  };

  /**
   * Set controls attribute
   *
   * @param {String} val Value for controls attribute
   * @method setControls
   */

  Html5.prototype.setControls = function setControls(val) {
    this.el_.controls = !!val;
  };

  /**
   * Get loop attribute
   *
   * @return {String}
   * @method loop
   */

  Html5.prototype.loop = function loop() {
    return this.el_.loop;
  };

  /**
   * Set loop attribute
   *
   * @param {String} val Value for loop attribute
   * @method setLoop
   */

  Html5.prototype.setLoop = function setLoop(val) {
    this.el_.loop = val;
  };

  /**
   * Get error value
   *
   * @return {String}
   * @method error
   */

  Html5.prototype.error = function error() {
    return this.el_.error;
  };

  /**
   * Get whether or not the player is in the "seeking" state
   *
   * @return {Boolean}
   * @method seeking
   */

  Html5.prototype.seeking = function seeking() {
    return this.el_.seeking;
  };

  /**
   * Get a TimeRanges object that represents the
   * ranges of the media resource to which it is possible
   * for the user agent to seek.
   *
   * @return {TimeRangeObject}
   * @method seekable
   */

  Html5.prototype.seekable = function seekable() {
    return this.el_.seekable;
  };

  /**
   * Get if video ended
   *
   * @return {Boolean}
   * @method ended
   */

  Html5.prototype.ended = function ended() {
    return this.el_.ended;
  };

  /**
   * Get the value of the muted content attribute
   * This attribute has no dynamic effect, it only
   * controls the default state of the element
   *
   * @return {Boolean}
   * @method defaultMuted
   */

  Html5.prototype.defaultMuted = function defaultMuted() {
    return this.el_.defaultMuted;
  };

  /**
   * Get desired speed at which the media resource is to play
   *
   * @return {Number}
   * @method playbackRate
   */

  Html5.prototype.playbackRate = function playbackRate() {
    return this.el_.playbackRate;
  };

  /**
   * Returns a TimeRanges object that represents the ranges of the
   * media resource that the user agent has played.
   * @return {TimeRangeObject} the range of points on the media
   * timeline that has been reached through normal playback
   * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-played
   */

  Html5.prototype.played = function played() {
    return this.el_.played;
  };

  /**
   * Set desired speed at which the media resource is to play
   *
   * @param {Number} val Speed at which the media resource is to play
   * @method setPlaybackRate
   */

  Html5.prototype.setPlaybackRate = function setPlaybackRate(val) {
    this.el_.playbackRate = val;
  };

  /**
   * Get the current state of network activity for the element, from
   * the list below
   * NETWORK_EMPTY (numeric value 0)
   * NETWORK_IDLE (numeric value 1)
   * NETWORK_LOADING (numeric value 2)
   * NETWORK_NO_SOURCE (numeric value 3)
   *
   * @return {Number}
   * @method networkState
   */

  Html5.prototype.networkState = function networkState() {
    return this.el_.networkState;
  };

  /**
   * Get a value that expresses the current state of the element
   * with respect to rendering the current playback position, from
   * the codes in the list below
   * HAVE_NOTHING (numeric value 0)
   * HAVE_METADATA (numeric value 1)
   * HAVE_CURRENT_DATA (numeric value 2)
   * HAVE_FUTURE_DATA (numeric value 3)
   * HAVE_ENOUGH_DATA (numeric value 4)
   *
   * @return {Number}
   * @method readyState
   */

  Html5.prototype.readyState = function readyState() {
    return this.el_.readyState;
  };

  /**
   * Get width of video
   *
   * @return {Number}
   * @method videoWidth
   */

  Html5.prototype.videoWidth = function videoWidth() {
    return this.el_.videoWidth;
  };

  /**
   * Get height of video
   *
   * @return {Number}
   * @method videoHeight
   */

  Html5.prototype.videoHeight = function videoHeight() {
    return this.el_.videoHeight;
  };

  /**
   * Get text tracks
   *
   * @return {TextTrackList}
   * @method textTracks
   */

  Html5.prototype.textTracks = function textTracks() {
    return _Tech.prototype.textTracks.call(this);
  };

  /**
   * Creates and returns a text track object
   *
   * @param {String} kind Text track kind (subtitles, captions, descriptions
   *                                       chapters and metadata)
   * @param {String=} label Label to identify the text track
   * @param {String=} language Two letter language abbreviation
   * @return {TextTrackObject}
   * @method addTextTrack
   */

  Html5.prototype.addTextTrack = function addTextTrack(kind, label, language) {
    if (!this['featuresNativeTextTracks']) {
      return _Tech.prototype.addTextTrack.call(this, kind, label, language);
    }

    return this.el_.addTextTrack(kind, label, language);
  };

  /**
   * Creates a remote text track object and returns a html track element
   *
   * @param {Object} options The object should contain values for
   * kind, language, label and src (location of the WebVTT file)
   * @return {HTMLTrackElement}
   * @method addRemoteTextTrack
   */

  Html5.prototype.addRemoteTextTrack = function addRemoteTextTrack() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (!this['featuresNativeTextTracks']) {
      return _Tech.prototype.addRemoteTextTrack.call(this, options);
    }

    var htmlTrackElement = _globalDocument2['default'].createElement('track');

    if (options.kind) {
      htmlTrackElement.kind = options.kind;
    }
    if (options.label) {
      htmlTrackElement.label = options.label;
    }
    if (options.language || options.srclang) {
      htmlTrackElement.srclang = options.language || options.srclang;
    }
    if (options['default']) {
      htmlTrackElement['default'] = options['default'];
    }
    if (options.id) {
      htmlTrackElement.id = options.id;
    }
    if (options.src) {
      htmlTrackElement.src = options.src;
    }

    this.el().appendChild(htmlTrackElement);

    // store HTMLTrackElement and TextTrack to remote list
    this.remoteTextTrackEls().addTrackElement_(htmlTrackElement);
    this.remoteTextTracks().addTrack_(htmlTrackElement.track);

    return htmlTrackElement;
  };

  /**
   * Remove remote text track from TextTrackList object
   *
   * @param {TextTrackObject} track Texttrack object to remove
   * @method removeRemoteTextTrack
   */

  Html5.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
    if (!this['featuresNativeTextTracks']) {
      return _Tech.prototype.removeRemoteTextTrack.call(this, track);
    }

    var tracks = undefined,
        i = undefined;

    var trackElement = this.remoteTextTrackEls().getTrackElementByTrack_(track);

    // remove HTMLTrackElement and TextTrack from remote list
    this.remoteTextTrackEls().removeTrackElement_(trackElement);
    this.remoteTextTracks().removeTrack_(track);

    tracks = this.$$('track');

    i = tracks.length;
    while (i--) {
      if (track === tracks[i] || track === tracks[i].track) {
        this.el().removeChild(tracks[i]);
      }
    }
  };

  return Html5;
})(_techJs2['default']);

Html5.TEST_VID = _globalDocument2['default'].createElement('video');
var track = _globalDocument2['default'].createElement('track');
track.kind = 'captions';
track.srclang = 'en';
track.label = 'English';
Html5.TEST_VID.appendChild(track);

/*
 * Check if HTML5 video is supported by this browser/device
 *
 * @return {Boolean}
 */
Html5.isSupported = function () {
  // IE9 with no Media Player is a LIAR! (#984)
  try {
    Html5.TEST_VID['volume'] = 0.5;
  } catch (e) {
    return false;
  }

  return !!Html5.TEST_VID.canPlayType;
};

// Add Source Handler pattern functions to this tech
_techJs2['default'].withSourceHandlers(Html5);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Html5} tech  The instance of the HTML5 tech
 */
Html5.nativeSourceHandler = {};

/*
 * Check if the video element can play the given videotype
 *
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Html5.nativeSourceHandler.canPlayType = function (type) {
  // IE9 on Windows 7 without MediaPlayer throws an error here
  // https://github.com/videojs/video.js/issues/519
  try {
    return Html5.TEST_VID.canPlayType(type);
  } catch (e) {
    return '';
  }
};

/*
 * Check if the video element can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Html5.nativeSourceHandler.canHandleSource = function (source) {
  var match, ext;

  // If a type was provided we should rely on that
  if (source.type) {
    return Html5.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    // If no type, fall back to checking 'video/[EXTENSION]'
    ext = Url.getFileExtension(source.src);

    return Html5.nativeSourceHandler.canPlayType('video/' + ext);
  }

  return '';
};

/*
 * Pass the source to the video element
 * Adaptive source handlers will have more complicated workflows before passing
 * video data to the video element
 *
 * @param  {Object} source    The source object
 * @param  {Html5} tech   The instance of the Html5 tech
 */
Html5.nativeSourceHandler.handleSource = function (source, tech) {
  tech.setSrc(source.src);
};

/*
* Clean up the source handler when disposing the player or switching sources..
* (no cleanup is needed when supporting the format natively)
*/
Html5.nativeSourceHandler.dispose = function () {};

// Register the native source handler
Html5.registerSourceHandler(Html5.nativeSourceHandler);

/*
 * Check if the volume can be changed in this browser/device.
 * Volume cannot be changed in a lot of mobile devices.
 * Specifically, it can't be changed from 1 on iOS.
 *
 * @return {Boolean}
 */
Html5.canControlVolume = function () {
  var volume = Html5.TEST_VID.volume;
  Html5.TEST_VID.volume = volume / 2 + 0.1;
  return volume !== Html5.TEST_VID.volume;
};

/*
 * Check if playbackRate is supported in this browser/device.
 *
 * @return {Boolean}
 */
Html5.canControlPlaybackRate = function () {
  // Playback rate API is implemented in Android Chrome, but doesn't do anything
  // https://github.com/videojs/video.js/issues/3180
  if (browser.IS_ANDROID && browser.IS_CHROME) {
    return false;
  }
  var playbackRate = Html5.TEST_VID.playbackRate;
  Html5.TEST_VID.playbackRate = playbackRate / 2 + 0.1;
  return playbackRate !== Html5.TEST_VID.playbackRate;
};

/*
 * Check to see if native text tracks are supported by this browser/device
 *
 * @return {Boolean}
 */
Html5.supportsNativeTextTracks = function () {
  var supportsTextTracks;

  // Figure out native text track support
  // If mode is a number, we cannot change it because it'll disappear from view.
  // Browsers with numeric modes include IE10 and older (<=2013) samsung android models.
  // Firefox isn't playing nice either with modifying the mode
  // TODO: Investigate firefox: https://github.com/videojs/video.js/issues/1862
  supportsTextTracks = !!Html5.TEST_VID.textTracks;
  if (supportsTextTracks && Html5.TEST_VID.textTracks.length > 0) {
    supportsTextTracks = typeof Html5.TEST_VID.textTracks[0]['mode'] !== 'number';
  }
  if (supportsTextTracks && browser.IS_FIREFOX) {
    supportsTextTracks = false;
  }
  if (supportsTextTracks && !('onremovetrack' in Html5.TEST_VID.textTracks)) {
    supportsTextTracks = false;
  }

  return supportsTextTracks;
};

/**
 * An array of events available on the Html5 tech.
 *
 * @private
 * @type {Array}
 */
Html5.Events = ['loadstart', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'waiting', 'seeking', 'seeked', 'ended', 'durationchange', 'timeupdate', 'progress', 'play', 'pause', 'ratechange', 'volumechange'];

/*
 * Set the tech's volume control support status
 *
 * @type {Boolean}
 */
Html5.prototype['featuresVolumeControl'] = Html5.canControlVolume();

/*
 * Set the tech's playbackRate support status
 *
 * @type {Boolean}
 */
Html5.prototype['featuresPlaybackRate'] = Html5.canControlPlaybackRate();

/*
 * Set the tech's status on moving the video element.
 * In iOS, if you move a video element in the DOM, it breaks video playback.
 *
 * @type {Boolean}
 */
Html5.prototype['movingMediaElementInDOM'] = !browser.IS_IOS;

/*
 * Set the the tech's fullscreen resize support status.
 * HTML video is able to automatically resize when going to fullscreen.
 * (No longer appears to be used. Can probably be removed.)
 */
Html5.prototype['featuresFullscreenResize'] = true;

/*
 * Set the tech's progress event support status
 * (this disables the manual progress events of the Tech)
 */
Html5.prototype['featuresProgressEvents'] = true;

/*
 * Sets the tech's status on native text track support
 *
 * @type {Boolean}
 */
Html5.prototype['featuresNativeTextTracks'] = Html5.supportsNativeTextTracks();

// HTML5 Feature detection and Device Fixes --------------------------------- //
var canPlayType = undefined;
var mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
var mp4RE = /^video\/mp4/i;

Html5.patchCanPlayType = function () {
  // Android 4.0 and above can play HLS to some extent but it reports being unable to do so
  if (browser.ANDROID_VERSION >= 4.0) {
    if (!canPlayType) {
      canPlayType = Html5.TEST_VID.constructor.prototype.canPlayType;
    }

    Html5.TEST_VID.constructor.prototype.canPlayType = function (type) {
      if (type && mpegurlRE.test(type)) {
        return 'maybe';
      }
      return canPlayType.call(this, type);
    };
  }

  // Override Android 2.2 and less canPlayType method which is broken
  if (browser.IS_OLD_ANDROID) {
    if (!canPlayType) {
      canPlayType = Html5.TEST_VID.constructor.prototype.canPlayType;
    }

    Html5.TEST_VID.constructor.prototype.canPlayType = function (type) {
      if (type && mp4RE.test(type)) {
        return 'maybe';
      }
      return canPlayType.call(this, type);
    };
  }
};

Html5.unpatchCanPlayType = function () {
  var r = Html5.TEST_VID.constructor.prototype.canPlayType;
  Html5.TEST_VID.constructor.prototype.canPlayType = canPlayType;
  canPlayType = null;
  return r;
};

// by default, patch the video element
Html5.patchCanPlayType();

Html5.disposeMediaElement = function (el) {
  if (!el) {
    return;
  }

  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }

  // remove any child track or source nodes to prevent their loading
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }

  // remove any src reference. not setting `src=''` because that causes a warning
  // in firefox
  el.removeAttribute('src');

  // force the media element to update its loading state by calling load()
  // however IE on Windows 7N has a bug that throws an error so need a try/catch (#793)
  if (typeof el.load === 'function') {
    // wrapping in an iife so it's not deoptimized (#1060#discussion_r10324473)
    (function () {
      try {
        el.load();
      } catch (e) {
        // not supported
      }
    })();
  }
};

Html5.resetMediaElement = function (el) {
  if (!el) {
    return;
  }

  var sources = el.querySelectorAll('source');
  var i = sources.length;
  while (i--) {
    el.removeChild(sources[i]);
  }

  // remove any src reference.
  // not setting `src=''` because that throws an error
  el.removeAttribute('src');

  if (typeof el.load === 'function') {
    // wrapping in an iife so it's not deoptimized (#1060#discussion_r10324473)
    (function () {
      try {
        el.load();
      } catch (e) {}
    })();
  }
};

_component2['default'].registerComponent('Html5', Html5);
_techJs2['default'].registerTech('Html5', Html5);
exports['default'] = Html5;
module.exports = exports['default'];

},{"../component":67,"../utils/browser.js":131,"../utils/dom.js":134,"../utils/fn.js":136,"../utils/log.js":139,"../utils/merge-options.js":140,"../utils/url.js":144,"./tech.js":121,"global/document":1,"global/window":2,"object.assign":45}],120:[function(_dereq_,module,exports){
/**
 * @file loader.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentJs = _dereq_('../component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var _techJs = _dereq_('./tech.js');

var _techJs2 = _interopRequireDefault(_techJs);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _utilsToTitleCaseJs = _dereq_('../utils/to-title-case.js');

var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);

/**
 * The Media Loader is the component that decides which playback technology to load
 * when the player is initialized.
 *
 * @param {Object} player  Main Player
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends Component
 * @class MediaLoader
 */

var MediaLoader = (function (_Component) {
  _inherits(MediaLoader, _Component);

  function MediaLoader(player, options, ready) {
    _classCallCheck(this, MediaLoader);

    _Component.call(this, player, options, ready);

    // If there are no sources when the player is initialized,
    // load the first supported playback technology.

    if (!options.playerOptions['sources'] || options.playerOptions['sources'].length === 0) {
      for (var i = 0, j = options.playerOptions['techOrder']; i < j.length; i++) {
        var techName = _utilsToTitleCaseJs2['default'](j[i]);
        var tech = _techJs2['default'].getTech(techName);
        // Support old behavior of techs being registered as components.
        // Remove once that deprecated behavior is removed.
        if (!techName) {
          tech = _componentJs2['default'].getComponent(techName);
        }

        // Check if the browser supports this technology
        if (tech && tech.isSupported()) {
          player.loadTech_(techName);
          break;
        }
      }
    } else {
      // // Loop through playback technologies (HTML5, Flash) and check for support.
      // // Then load the best source.
      // // A few assumptions here:
      // //   All playback technologies respect preload false.
      player.src(options.playerOptions['sources']);
    }
  }

  return MediaLoader;
})(_componentJs2['default']);

_componentJs2['default'].registerComponent('MediaLoader', MediaLoader);
exports['default'] = MediaLoader;
module.exports = exports['default'];

},{"../component.js":67,"../utils/to-title-case.js":143,"./tech.js":121,"global/window":2}],121:[function(_dereq_,module,exports){
/**
 * @file tech.js
 * Media Technology Controller - Base class for media playback
 * technology controllers like Flash and HTML5
 */

'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = _dereq_('../component');

var _component2 = _interopRequireDefault(_component);

var _tracksHtmlTrackElement = _dereq_('../tracks/html-track-element');

var _tracksHtmlTrackElement2 = _interopRequireDefault(_tracksHtmlTrackElement);

var _tracksHtmlTrackElementList = _dereq_('../tracks/html-track-element-list');

var _tracksHtmlTrackElementList2 = _interopRequireDefault(_tracksHtmlTrackElementList);

var _utilsMergeOptionsJs = _dereq_('../utils/merge-options.js');

var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);

var _tracksTextTrack = _dereq_('../tracks/text-track');

var _tracksTextTrack2 = _interopRequireDefault(_tracksTextTrack);

var _tracksTextTrackList = _dereq_('../tracks/text-track-list');

var _tracksTextTrackList2 = _interopRequireDefault(_tracksTextTrackList);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsLogJs = _dereq_('../utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _utilsTimeRangesJs = _dereq_('../utils/time-ranges.js');

var _utilsBufferJs = _dereq_('../utils/buffer.js');

var _mediaErrorJs = _dereq_('../media-error.js');

var _mediaErrorJs2 = _interopRequireDefault(_mediaErrorJs);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

/**
 * Base class for media (HTML5 Video, Flash) controllers
 *
 * @param {Object=} options Options object
 * @param {Function=} ready Ready callback function
 * @extends Component
 * @class Tech
 */

var Tech = (function (_Component) {
  _inherits(Tech, _Component);

  function Tech() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var ready = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

    _classCallCheck(this, Tech);

    // we don't want the tech to report user activity automatically.
    // This is done manually in addControlsListeners
    options.reportTouchActivity = false;
    _Component.call(this, null, options, ready);

    // keep track of whether the current source has played at all to
    // implement a very limited played()
    this.hasStarted_ = false;
    this.on('playing', function () {
      this.hasStarted_ = true;
    });
    this.on('loadstart', function () {
      this.hasStarted_ = false;
    });

    this.textTracks_ = options.textTracks;

    // Manually track progress in cases where the browser/flash player doesn't report it.
    if (!this.featuresProgressEvents) {
      this.manualProgressOn();
    }

    // Manually track timeupdates in cases where the browser/flash player doesn't report it.
    if (!this.featuresTimeupdateEvents) {
      this.manualTimeUpdatesOn();
    }

    if (options.nativeCaptions === false || options.nativeTextTracks === false) {
      this.featuresNativeTextTracks = false;
    }

    if (!this.featuresNativeTextTracks) {
      this.on('ready', this.emulateTextTracks);
    }

    this.initTextTrackListeners();

    // Turn on component tap events
    this.emitTapEvents();
  }

  /*
   * List of associated text tracks
   *
   * @type {Array}
   * @private
   */

  /* Fallbacks for unsupported event types
  ================================================================================ */
  // Manually trigger progress events based on changes to the buffered amount
  // Many flash players and older HTML5 browsers don't send progress or progress-like events
  /**
   * Turn on progress events
   *
   * @method manualProgressOn
   */

  Tech.prototype.manualProgressOn = function manualProgressOn() {
    this.on('durationchange', this.onDurationChange);

    this.manualProgress = true;

    // Trigger progress watching when a source begins loading
    this.one('ready', this.trackProgress);
  };

  /**
   * Turn off progress events
   *
   * @method manualProgressOff
   */

  Tech.prototype.manualProgressOff = function manualProgressOff() {
    this.manualProgress = false;
    this.stopTrackingProgress();

    this.off('durationchange', this.onDurationChange);
  };

  /**
   * Track progress
   *
   * @method trackProgress
   */

  Tech.prototype.trackProgress = function trackProgress() {
    this.stopTrackingProgress();
    this.progressInterval = this.setInterval(Fn.bind(this, function () {
      // Don't trigger unless buffered amount is greater than last time

      var numBufferedPercent = this.bufferedPercent();

      if (this.bufferedPercent_ !== numBufferedPercent) {
        this.trigger('progress');
      }

      this.bufferedPercent_ = numBufferedPercent;

      if (numBufferedPercent === 1) {
        this.stopTrackingProgress();
      }
    }), 500);
  };

  /**
   * Update duration
   *
   * @method onDurationChange
   */

  Tech.prototype.onDurationChange = function onDurationChange() {
    this.duration_ = this.duration();
  };

  /**
   * Create and get TimeRange object for buffering
   *
   * @return {TimeRangeObject}
   * @method buffered
   */

  Tech.prototype.buffered = function buffered() {
    return _utilsTimeRangesJs.createTimeRange(0, 0);
  };

  /**
   * Get buffered percent
   *
   * @return {Number}
   * @method bufferedPercent
   */

  Tech.prototype.bufferedPercent = function bufferedPercent() {
    return _utilsBufferJs.bufferedPercent(this.buffered(), this.duration_);
  };

  /**
   * Stops tracking progress by clearing progress interval
   *
   * @method stopTrackingProgress
   */

  Tech.prototype.stopTrackingProgress = function stopTrackingProgress() {
    this.clearInterval(this.progressInterval);
  };

  /*! Time Tracking -------------------------------------------------------------- */
  /**
   * Set event listeners for on play and pause and tracking current time
   *
   * @method manualTimeUpdatesOn
   */

  Tech.prototype.manualTimeUpdatesOn = function manualTimeUpdatesOn() {
    this.manualTimeUpdates = true;

    this.on('play', this.trackCurrentTime);
    this.on('pause', this.stopTrackingCurrentTime);
  };

  /**
   * Remove event listeners for on play and pause and tracking current time
   *
   * @method manualTimeUpdatesOff
   */

  Tech.prototype.manualTimeUpdatesOff = function manualTimeUpdatesOff() {
    this.manualTimeUpdates = false;
    this.stopTrackingCurrentTime();
    this.off('play', this.trackCurrentTime);
    this.off('pause', this.stopTrackingCurrentTime);
  };

  /**
   * Tracks current time
   *
   * @method trackCurrentTime
   */

  Tech.prototype.trackCurrentTime = function trackCurrentTime() {
    if (this.currentTimeInterval) {
      this.stopTrackingCurrentTime();
    }
    this.currentTimeInterval = this.setInterval(function () {
      this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: true });
    }, 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
  };

  /**
   * Turn off play progress tracking (when paused or dragging)
   *
   * @method stopTrackingCurrentTime
   */

  Tech.prototype.stopTrackingCurrentTime = function stopTrackingCurrentTime() {
    this.clearInterval(this.currentTimeInterval);

    // #1002 - if the video ends right before the next timeupdate would happen,
    // the progress bar won't make it all the way to the end
    this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: true });
  };

  /**
   * Turn off any manual progress or timeupdate tracking
   *
   * @method dispose
   */

  Tech.prototype.dispose = function dispose() {
    // clear out text tracks because we can't reuse them between techs
    var textTracks = this.textTracks();

    if (textTracks) {
      var i = textTracks.length;
      while (i--) {
        this.removeRemoteTextTrack(textTracks[i]);
      }
    }

    // Turn off any manual progress or timeupdate tracking
    if (this.manualProgress) {
      this.manualProgressOff();
    }

    if (this.manualTimeUpdates) {
      this.manualTimeUpdatesOff();
    }

    _Component.prototype.dispose.call(this);
  };

  /**
   * Reset the tech. Removes all sources and resets readyState.
   *
   * @method reset
   */

  Tech.prototype.reset = function reset() {};

  /**
   * When invoked without an argument, returns a MediaError object
   * representing the current error state of the player or null if
   * there is no error. When invoked with an argument, set the current
   * error state of the player.
   * @param {MediaError=} err    Optional an error object
   * @return {MediaError}        the current error object or null
   * @method error
   */

  Tech.prototype.error = function error(err) {
    if (err !== undefined) {
      if (err instanceof _mediaErrorJs2['default']) {
        this.error_ = err;
      } else {
        this.error_ = new _mediaErrorJs2['default'](err);
      }
      this.trigger('error');
    }
    return this.error_;
  };

  /**
   * Return the time ranges that have been played through for the
   * current source. This implementation is incomplete. It does not
   * track the played time ranges, only whether the source has played
   * at all or not.
   * @return {TimeRangeObject} a single time range if this video has
   * played or an empty set of ranges if not.
   * @method played
   */

  Tech.prototype.played = function played() {
    if (this.hasStarted_) {
      return _utilsTimeRangesJs.createTimeRange(0, 0);
    }
    return _utilsTimeRangesJs.createTimeRange();
  };

  /**
   * Set current time
   *
   * @method setCurrentTime
   */

  Tech.prototype.setCurrentTime = function setCurrentTime() {
    // improve the accuracy of manual timeupdates
    if (this.manualTimeUpdates) {
      this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: true });
    }
  };

  /**
   * Initialize texttrack listeners
   *
   * @method initTextTrackListeners
   */

  Tech.prototype.initTextTrackListeners = function initTextTrackListeners() {
    var textTrackListChanges = Fn.bind(this, function () {
      this.trigger('texttrackchange');
    });

    var tracks = this.textTracks();

    if (!tracks) return;

    tracks.addEventListener('removetrack', textTrackListChanges);
    tracks.addEventListener('addtrack', textTrackListChanges);

    this.on('dispose', Fn.bind(this, function () {
      tracks.removeEventListener('removetrack', textTrackListChanges);
      tracks.removeEventListener('addtrack', textTrackListChanges);
    }));
  };

  /**
   * Emulate texttracks
   *
   * @method emulateTextTracks
   */

  Tech.prototype.emulateTextTracks = function emulateTextTracks() {
    var _this = this;

    var tracks = this.textTracks();
    if (!tracks) {
      return;
    }

    if (!_globalWindow2['default']['WebVTT'] && this.el().parentNode != null) {
      (function () {
        var script = _globalDocument2['default'].createElement('script');
        script.src = _this.options_['vtt.js'] || 'https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js';
        script.onload = function () {
          _this.trigger('vttjsloaded');
        };
        script.onerror = function () {
          _this.trigger('vttjserror');
        };
        _this.on('dispose', function () {
          script.onload = null;
          script.onerror = null;
        });
        _this.el().parentNode.appendChild(script);
        _globalWindow2['default']['WebVTT'] = true;
      })();
    }

    var updateDisplay = function updateDisplay() {
      return _this.trigger('texttrackchange');
    };
    var textTracksChanges = function textTracksChanges() {
      updateDisplay();

      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.removeEventListener('cuechange', updateDisplay);
        if (track.mode === 'showing') {
          track.addEventListener('cuechange', updateDisplay);
        }
      }
    };

    textTracksChanges();
    tracks.addEventListener('change', textTracksChanges);

    this.on('dispose', function () {
      tracks.removeEventListener('change', textTracksChanges);
    });
  };

  /*
   * Provide default methods for text tracks.
   *
   * Html5 tech overrides these.
   */

  /**
   * Get texttracks
   *
   * @returns {TextTrackList}
   * @method textTracks
   */

  Tech.prototype.textTracks = function textTracks() {
    this.textTracks_ = this.textTracks_ || new _tracksTextTrackList2['default']();
    return this.textTracks_;
  };

  /**
   * Get remote texttracks
   *
   * @returns {TextTrackList}
   * @method remoteTextTracks
   */

  Tech.prototype.remoteTextTracks = function remoteTextTracks() {
    this.remoteTextTracks_ = this.remoteTextTracks_ || new _tracksTextTrackList2['default']();
    return this.remoteTextTracks_;
  };

  /**
   * Get remote htmltrackelements
   *
   * @returns {HTMLTrackElementList}
   * @method remoteTextTrackEls
   */

  Tech.prototype.remoteTextTrackEls = function remoteTextTrackEls() {
    this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new _tracksHtmlTrackElementList2['default']();
    return this.remoteTextTrackEls_;
  };

  /**
   * Creates and returns a remote text track object
   *
   * @param {String} kind Text track kind (subtitles, captions, descriptions
   *                                       chapters and metadata)
   * @param {String=} label Label to identify the text track
   * @param {String=} language Two letter language abbreviation
   * @return {TextTrackObject}
   * @method addTextTrack
   */

  Tech.prototype.addTextTrack = function addTextTrack(kind, label, language) {
    if (!kind) {
      throw new Error('TextTrack kind is required but was not provided');
    }

    return createTrackHelper(this, kind, label, language);
  };

  /**
   * Creates a remote text track object and returns a emulated html track element
   *
   * @param {Object} options The object should contain values for
   * kind, language, label and src (location of the WebVTT file)
   * @return {HTMLTrackElement}
   * @method addRemoteTextTrack
   */

  Tech.prototype.addRemoteTextTrack = function addRemoteTextTrack(options) {
    var track = _utilsMergeOptionsJs2['default'](options, {
      tech: this
    });

    var htmlTrackElement = new _tracksHtmlTrackElement2['default'](track);

    // store HTMLTrackElement and TextTrack to remote list
    this.remoteTextTrackEls().addTrackElement_(htmlTrackElement);
    this.remoteTextTracks().addTrack_(htmlTrackElement.track);

    // must come after remoteTextTracks()
    this.textTracks().addTrack_(htmlTrackElement.track);

    return htmlTrackElement;
  };

  /**
   * Remove remote texttrack
   *
   * @param {TextTrackObject} track Texttrack to remove
   * @method removeRemoteTextTrack
   */

  Tech.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
    this.textTracks().removeTrack_(track);

    var trackElement = this.remoteTextTrackEls().getTrackElementByTrack_(track);

    // remove HTMLTrackElement and TextTrack from remote list
    this.remoteTextTrackEls().removeTrackElement_(trackElement);
    this.remoteTextTracks().removeTrack_(track);
  };

  /**
   * Provide a default setPoster method for techs
   * Poster support for techs should be optional, so we don't want techs to
   * break if they don't have a way to set a poster.
   *
   * @method setPoster
   */

  Tech.prototype.setPoster = function setPoster() {};

  /*
   * Check if the tech can support the given type
   *
   * The base tech does not support any type, but source handlers might
   * overwrite this.
   *
   * @param  {String} type    The mimetype to check
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */

  Tech.prototype.canPlayType = function canPlayType() {
    return '';
  };

  /*
   * Return whether the argument is a Tech or not.
   * Can be passed either a Class like `Html5` or a instance like `player.tech_`
   *
   * @param {Object} component An item to check
   * @return {Boolean}         Whether it is a tech or not
   */

  Tech.isTech = function isTech(component) {
    return component.prototype instanceof Tech || component instanceof Tech || component === Tech;
  };

  /**
   * Registers a Tech
   *
   * @param {String} name Name of the Tech to register
   * @param {Object} tech The tech to register
   * @static
   * @method registerComponent
   */

  Tech.registerTech = function registerTech(name, tech) {
    if (!Tech.techs_) {
      Tech.techs_ = {};
    }

    if (!Tech.isTech(tech)) {
      throw new Error('Tech ' + name + ' must be a Tech');
    }

    Tech.techs_[name] = tech;
    return tech;
  };

  /**
   * Gets a component by name
   *
   * @param {String} name Name of the component to get
   * @return {Component}
   * @static
   * @method getComponent
   */

  Tech.getTech = function getTech(name) {
    if (Tech.techs_ && Tech.techs_[name]) {
      return Tech.techs_[name];
    }

    if (_globalWindow2['default'] && _globalWindow2['default'].videojs && _globalWindow2['default'].videojs[name]) {
      _utilsLogJs2['default'].warn('The ' + name + ' tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)');
      return _globalWindow2['default'].videojs[name];
    }
  };

  return Tech;
})(_component2['default']);

Tech.prototype.textTracks_;

var createTrackHelper = function createTrackHelper(self, kind, label, language) {
  var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

  var tracks = self.textTracks();

  options.kind = kind;

  if (label) {
    options.label = label;
  }
  if (language) {
    options.language = language;
  }
  options.tech = self;

  var track = new _tracksTextTrack2['default'](options);
  tracks.addTrack_(track);

  return track;
};

Tech.prototype.featuresVolumeControl = true;

// Resizing plugins using request fullscreen reloads the plugin
Tech.prototype.featuresFullscreenResize = false;
Tech.prototype.featuresPlaybackRate = false;

// Optional events that we can manually mimic with timers
// currently not triggered by video-js-swf
Tech.prototype.featuresProgressEvents = false;
Tech.prototype.featuresTimeupdateEvents = false;

Tech.prototype.featuresNativeTextTracks = false;

/*
 * A functional mixin for techs that want to use the Source Handler pattern.
 *
 * ##### EXAMPLE:
 *
 *   Tech.withSourceHandlers.call(MyTech);
 *
 */
Tech.withSourceHandlers = function (_Tech) {
  /*
   * Register a source handler
   * Source handlers are scripts for handling specific formats.
   * The source handler pattern is used for adaptive formats (HLS, DASH) that
   * manually load video data and feed it into a Source Buffer (Media Source Extensions)
   * @param  {Function} handler  The source handler
   * @param  {Boolean}  first    Register it before any existing handlers
   */
  _Tech.registerSourceHandler = function (handler, index) {
    var handlers = _Tech.sourceHandlers;

    if (!handlers) {
      handlers = _Tech.sourceHandlers = [];
    }

    if (index === undefined) {
      // add to the end of the list
      index = handlers.length;
    }

    handlers.splice(index, 0, handler);
  };

  /*
   * Check if the tech can support the given type
   * @param  {String} type    The mimetype to check
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */
  _Tech.canPlayType = function (type) {
    var handlers = _Tech.sourceHandlers || [];
    var can = undefined;

    for (var i = 0; i < handlers.length; i++) {
      can = handlers[i].canPlayType(type);

      if (can) {
        return can;
      }
    }

    return '';
  };

  /*
   * Return the first source handler that supports the source
   * TODO: Answer question: should 'probably' be prioritized over 'maybe'
   * @param  {Object} source The source object
   * @returns {Object}       The first source handler that supports the source
   * @returns {null}         Null if no source handler is found
   */
  _Tech.selectSourceHandler = function (source) {
    var handlers = _Tech.sourceHandlers || [];
    var can = undefined;

    for (var i = 0; i < handlers.length; i++) {
      can = handlers[i].canHandleSource(source);

      if (can) {
        return handlers[i];
      }
    }

    return null;
  };

  /*
   * Check if the tech can support the given source
   * @param  {Object} srcObj  The source object
   * @return {String}         'probably', 'maybe', or '' (empty string)
   */
  _Tech.canPlaySource = function (srcObj) {
    var sh = _Tech.selectSourceHandler(srcObj);

    if (sh) {
      return sh.canHandleSource(srcObj);
    }

    return '';
  };

  /*
   * When using a source handler, prefer its implementation of
   * any function normally provided by the tech.
   */
  var deferrable = ['seekable', 'duration'];

  deferrable.forEach(function (fnName) {
    var originalFn = this[fnName];

    if (typeof originalFn !== 'function') {
      return;
    }

    this[fnName] = function () {
      if (this.sourceHandler_ && this.sourceHandler_[fnName]) {
        return this.sourceHandler_[fnName].apply(this.sourceHandler_, arguments);
      }
      return originalFn.apply(this, arguments);
    };
  }, _Tech.prototype);

  /*
   * Create a function for setting the source using a source object
   * and source handlers.
   * Should never be called unless a source handler was found.
   * @param {Object} source  A source object with src and type keys
   * @return {Tech} self
   */
  _Tech.prototype.setSource = function (source) {
    var sh = _Tech.selectSourceHandler(source);

    if (!sh) {
      // Fall back to a native source hander when unsupported sources are
      // deliberately set
      if (_Tech.nativeSourceHandler) {
        sh = _Tech.nativeSourceHandler;
      } else {
        _utilsLogJs2['default'].error('No source hander found for the current source.');
      }
    }

    // Dispose any existing source handler
    this.disposeSourceHandler();
    this.off('dispose', this.disposeSourceHandler);

    this.currentSource_ = source;
    this.sourceHandler_ = sh.handleSource(source, this);
    this.on('dispose', this.disposeSourceHandler);

    return this;
  };

  /*
   * Clean up any existing source handler
   */
  _Tech.prototype.disposeSourceHandler = function () {
    if (this.sourceHandler_ && this.sourceHandler_.dispose) {
      this.sourceHandler_.dispose();
    }
  };
};

_component2['default'].registerComponent('Tech', Tech);
// Old name for Tech
_component2['default'].registerComponent('MediaTechController', Tech);
Tech.registerTech('Tech', Tech);
exports['default'] = Tech;
module.exports = exports['default'];

},{"../component":67,"../media-error.js":105,"../tracks/html-track-element":123,"../tracks/html-track-element-list":122,"../tracks/text-track":130,"../tracks/text-track-list":128,"../utils/buffer.js":132,"../utils/fn.js":136,"../utils/log.js":139,"../utils/merge-options.js":140,"../utils/time-ranges.js":142,"global/document":1,"global/window":2}],122:[function(_dereq_,module,exports){
/**
 * @file html-track-element-list.js
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsBrowserJs = _dereq_('../utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var HtmlTrackElementList = (function () {
  function HtmlTrackElementList() {
    var trackElements = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, HtmlTrackElementList);

    var list = this;

    if (browser.IS_IE8) {
      list = _globalDocument2['default'].createElement('custom');

      for (var prop in HtmlTrackElementList.prototype) {
        if (prop !== 'constructor') {
          list[prop] = HtmlTrackElementList.prototype[prop];
        }
      }
    }

    list.trackElements_ = [];

    Object.defineProperty(list, 'length', {
      get: function get() {
        return this.trackElements_.length;
      }
    });

    for (var i = 0, _length = trackElements.length; i < _length; i++) {
      list.addTrackElement_(trackElements[i]);
    }

    if (browser.IS_IE8) {
      return list;
    }
  }

  HtmlTrackElementList.prototype.addTrackElement_ = function addTrackElement_(trackElement) {
    this.trackElements_.push(trackElement);
  };

  HtmlTrackElementList.prototype.getTrackElementByTrack_ = function getTrackElementByTrack_(track) {
    var trackElement_ = undefined;

    for (var i = 0, _length2 = this.trackElements_.length; i < _length2; i++) {
      if (track === this.trackElements_[i].track) {
        trackElement_ = this.trackElements_[i];

        break;
      }
    }

    return trackElement_;
  };

  HtmlTrackElementList.prototype.removeTrackElement_ = function removeTrackElement_(trackElement) {
    for (var i = 0, _length3 = this.trackElements_.length; i < _length3; i++) {
      if (trackElement === this.trackElements_[i]) {
        this.trackElements_.splice(i, 1);

        break;
      }
    }
  };

  return HtmlTrackElementList;
})();

exports['default'] = HtmlTrackElementList;
module.exports = exports['default'];

},{"../utils/browser.js":131,"global/document":1}],123:[function(_dereq_,module,exports){
/**
 * @file html-track-element.js
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsBrowserJs = _dereq_('../utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _eventTarget = _dereq_('../event-target');

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _tracksTextTrack = _dereq_('../tracks/text-track');

var _tracksTextTrack2 = _interopRequireDefault(_tracksTextTrack);

var NONE = 0;
var LOADING = 1;
var LOADED = 2;
var ERROR = 3;

/**
 * https://html.spec.whatwg.org/multipage/embedded-content.html#htmltrackelement
 *
 * interface HTMLTrackElement : HTMLElement {
 *   attribute DOMString kind;
 *   attribute DOMString src;
 *   attribute DOMString srclang;
 *   attribute DOMString label;
 *   attribute boolean default;
 *
 *   const unsigned short NONE = 0;
 *   const unsigned short LOADING = 1;
 *   const unsigned short LOADED = 2;
 *   const unsigned short ERROR = 3;
 *   readonly attribute unsigned short readyState;
 *
 *   readonly attribute TextTrack track;
 * };
 *
 * @param {Object} options TextTrack configuration
 * @class HTMLTrackElement
 */

var HTMLTrackElement = (function (_EventTarget) {
  _inherits(HTMLTrackElement, _EventTarget);

  function HTMLTrackElement() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, HTMLTrackElement);

    _EventTarget.call(this);

    var readyState = undefined,
        trackElement = this;

    if (browser.IS_IE8) {
      trackElement = _globalDocument2['default'].createElement('custom');

      for (var prop in HTMLTrackElement.prototype) {
        if (prop !== 'constructor') {
          trackElement[prop] = HTMLTrackElement.prototype[prop];
        }
      }
    }

    var track = new _tracksTextTrack2['default'](options);

    trackElement.kind = track.kind;
    trackElement.src = track.src;
    trackElement.srclang = track.language;
    trackElement.label = track.label;
    trackElement['default'] = track['default'];

    Object.defineProperty(trackElement, 'readyState', {
      get: function get() {
        return readyState;
      }
    });

    Object.defineProperty(trackElement, 'track', {
      get: function get() {
        return track;
      }
    });

    readyState = NONE;

    track.addEventListener('loadeddata', function () {
      readyState = LOADED;

      trackElement.trigger({
        type: 'load',
        target: trackElement
      });
    });

    if (browser.IS_IE8) {
      return trackElement;
    }
  }

  return HTMLTrackElement;
})(_eventTarget2['default']);

HTMLTrackElement.prototype.allowedEvents_ = {
  load: 'load'
};

HTMLTrackElement.NONE = NONE;
HTMLTrackElement.LOADING = LOADING;
HTMLTrackElement.LOADED = LOADED;
HTMLTrackElement.ERROR = ERROR;

exports['default'] = HTMLTrackElement;
module.exports = exports['default'];

},{"../event-target":101,"../tracks/text-track":130,"../utils/browser.js":131,"global/document":1}],124:[function(_dereq_,module,exports){
/**
 * @file text-track-cue-list.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsBrowserJs = _dereq_('../utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

/**
 * A List of text track cues as defined in:
 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcuelist
 *
 * interface TextTrackCueList {
 *   readonly attribute unsigned long length;
 *   getter TextTrackCue (unsigned long index);
 *   TextTrackCue? getCueById(DOMString id);
 * };
 *
 * @param {Array} cues A list of cues to be initialized with
 * @class TextTrackCueList
 */

var TextTrackCueList = (function () {
  function TextTrackCueList(cues) {
    _classCallCheck(this, TextTrackCueList);

    var list = this;

    if (browser.IS_IE8) {
      list = _globalDocument2['default'].createElement('custom');

      for (var prop in TextTrackCueList.prototype) {
        if (prop !== 'constructor') {
          list[prop] = TextTrackCueList.prototype[prop];
        }
      }
    }

    TextTrackCueList.prototype.setCues_.call(list, cues);

    Object.defineProperty(list, 'length', {
      get: function get() {
        return this.length_;
      }
    });

    if (browser.IS_IE8) {
      return list;
    }
  }

  /**
   * A setter for cues in this list
   *
   * @param {Array} cues an array of cues
   * @method setCues_
   * @private
   */

  TextTrackCueList.prototype.setCues_ = function setCues_(cues) {
    var oldLength = this.length || 0;
    var i = 0;
    var l = cues.length;

    this.cues_ = cues;
    this.length_ = cues.length;

    var defineProp = function defineProp(index) {
      if (!('' + index in this)) {
        Object.defineProperty(this, '' + index, {
          get: function get() {
            return this.cues_[index];
          }
        });
      }
    };

    if (oldLength < l) {
      i = oldLength;

      for (; i < l; i++) {
        defineProp.call(this, i);
      }
    }
  };

  /**
   * Get a cue that is currently in the Cue list by id
   *
   * @param {String} id
   * @method getCueById
   * @return {Object} a single cue
   */

  TextTrackCueList.prototype.getCueById = function getCueById(id) {
    var result = null;

    for (var i = 0, l = this.length; i < l; i++) {
      var cue = this[i];

      if (cue.id === id) {
        result = cue;
        break;
      }
    }

    return result;
  };

  return TextTrackCueList;
})();

exports['default'] = TextTrackCueList;
module.exports = exports['default'];

},{"../utils/browser.js":131,"global/document":1}],125:[function(_dereq_,module,exports){
/**
 * @file text-track-display.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = _dereq_('../component');

var _component2 = _interopRequireDefault(_component);

var _menuMenuJs = _dereq_('../menu/menu.js');

var _menuMenuJs2 = _interopRequireDefault(_menuMenuJs);

var _menuMenuItemJs = _dereq_('../menu/menu-item.js');

var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);

var _menuMenuButtonJs = _dereq_('../menu/menu-button.js');

var _menuMenuButtonJs2 = _interopRequireDefault(_menuMenuButtonJs);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var darkGray = '#222';
var lightGray = '#ccc';
var fontMap = {
  monospace: 'monospace',
  sansSerif: 'sans-serif',
  serif: 'serif',
  monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
  monospaceSerif: '"Courier New", monospace',
  proportionalSansSerif: 'sans-serif',
  proportionalSerif: 'serif',
  casual: '"Comic Sans MS", Impact, fantasy',
  script: '"Monotype Corsiva", cursive',
  smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
};

/**
 * The component for displaying text track cues
 *
 * @param {Object} player  Main Player
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready    Ready callback function
 * @extends Component
 * @class TextTrackDisplay
 */

var TextTrackDisplay = (function (_Component) {
  _inherits(TextTrackDisplay, _Component);

  function TextTrackDisplay(player, options, ready) {
    _classCallCheck(this, TextTrackDisplay);

    _Component.call(this, player, options, ready);

    player.on('loadstart', Fn.bind(this, this.toggleDisplay));
    player.on('texttrackchange', Fn.bind(this, this.updateDisplay));

    // This used to be called during player init, but was causing an error
    // if a track should show by default and the display hadn't loaded yet.
    // Should probably be moved to an external track loader when we support
    // tracks that don't need a display.
    player.ready(Fn.bind(this, function () {
      if (player.tech_ && player.tech_['featuresNativeTextTracks']) {
        this.hide();
        return;
      }

      player.on('fullscreenchange', Fn.bind(this, this.updateDisplay));

      var tracks = this.options_.playerOptions['tracks'] || [];
      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        this.player_.addRemoteTextTrack(track);
      }

      var modes = { 'captions': 1, 'subtitles': 1 };
      var trackList = this.player_.textTracks();
      var firstDesc = undefined;
      var firstCaptions = undefined;

      if (trackList) {
        for (var i = 0; i < trackList.length; i++) {
          var track = trackList[i];
          if (track['default']) {
            if (track.kind === 'descriptions' && !firstDesc) {
              firstDesc = track;
            } else if (track.kind in modes && !firstCaptions) {
              firstCaptions = track;
            }
          }
        }

        // We want to show the first default track but captions and subtitles
        // take precedence over descriptions.
        // So, display the first default captions or subtitles track
        // and otherwise the first default descriptions track.
        if (firstCaptions) {
          firstCaptions.mode = 'showing';
        } else if (firstDesc) {
          firstDesc.mode = 'showing';
        }
      }
    }));
  }

  /**
  * Add cue HTML to display
  *
  * @param {Number} color Hex number for color, like #f0e
  * @param {Number} opacity Value for opacity,0.0 - 1.0
  * @return {RGBAColor} In the form 'rgba(255, 0, 0, 0.3)'
  * @method constructColor
  */

  /**
   * Toggle display texttracks
   *
   * @method toggleDisplay
   */

  TextTrackDisplay.prototype.toggleDisplay = function toggleDisplay() {
    if (this.player_.tech_ && this.player_.tech_['featuresNativeTextTracks']) {
      this.hide();
    } else {
      this.show();
    }
  };

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  TextTrackDisplay.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-text-track-display'
    }, {
      'aria-live': 'assertive',
      'aria-atomic': 'true'
    });
  };

  /**
   * Clear display texttracks
   *
   * @method clearDisplay
   */

  TextTrackDisplay.prototype.clearDisplay = function clearDisplay() {
    if (typeof _globalWindow2['default']['WebVTT'] === 'function') {
      _globalWindow2['default']['WebVTT']['processCues'](_globalWindow2['default'], [], this.el_);
    }
  };

  /**
   * Update display texttracks
   *
   * @method updateDisplay
   */

  TextTrackDisplay.prototype.updateDisplay = function updateDisplay() {
    var tracks = this.player_.textTracks();

    this.clearDisplay();

    if (!tracks) {
      return;
    }

    // Track display prioritization model: if multiple tracks are 'showing',
    //  display the first 'subtitles' or 'captions' track which is 'showing',
    //  otherwise display the first 'descriptions' track which is 'showing'

    var descriptionsTrack = null;
    var captionsSubtitlesTrack = null;

    var i = tracks.length;
    while (i--) {
      var track = tracks[i];
      if (track['mode'] === 'showing') {
        if (track['kind'] === 'descriptions') {
          descriptionsTrack = track;
        } else {
          captionsSubtitlesTrack = track;
        }
      }
    }

    if (captionsSubtitlesTrack) {
      this.updateForTrack(captionsSubtitlesTrack);
    } else if (descriptionsTrack) {
      this.updateForTrack(descriptionsTrack);
    }
  };

  /**
   * Add texttrack to texttrack list
   *
   * @param {TextTrackObject} track Texttrack object to be added to list
   * @method updateForTrack
   */

  TextTrackDisplay.prototype.updateForTrack = function updateForTrack(track) {
    if (typeof _globalWindow2['default']['WebVTT'] !== 'function' || !track['activeCues']) {
      return;
    }

    var overrides = this.player_['textTrackSettings'].getValues();

    var cues = [];
    for (var _i = 0; _i < track['activeCues'].length; _i++) {
      cues.push(track['activeCues'][_i]);
    }

    _globalWindow2['default']['WebVTT']['processCues'](_globalWindow2['default'], cues, this.el_);

    var i = cues.length;
    while (i--) {
      var cue = cues[i];
      if (!cue) {
        continue;
      }

      var cueDiv = cue.displayState;
      if (overrides.color) {
        cueDiv.firstChild.style.color = overrides.color;
      }
      if (overrides.textOpacity) {
        tryUpdateStyle(cueDiv.firstChild, 'color', constructColor(overrides.color || '#fff', overrides.textOpacity));
      }
      if (overrides.backgroundColor) {
        cueDiv.firstChild.style.backgroundColor = overrides.backgroundColor;
      }
      if (overrides.backgroundOpacity) {
        tryUpdateStyle(cueDiv.firstChild, 'backgroundColor', constructColor(overrides.backgroundColor || '#000', overrides.backgroundOpacity));
      }
      if (overrides.windowColor) {
        if (overrides.windowOpacity) {
          tryUpdateStyle(cueDiv, 'backgroundColor', constructColor(overrides.windowColor, overrides.windowOpacity));
        } else {
          cueDiv.style.backgroundColor = overrides.windowColor;
        }
      }
      if (overrides.edgeStyle) {
        if (overrides.edgeStyle === 'dropshadow') {
          cueDiv.firstChild.style.textShadow = '2px 2px 3px ' + darkGray + ', 2px 2px 4px ' + darkGray + ', 2px 2px 5px ' + darkGray;
        } else if (overrides.edgeStyle === 'raised') {
          cueDiv.firstChild.style.textShadow = '1px 1px ' + darkGray + ', 2px 2px ' + darkGray + ', 3px 3px ' + darkGray;
        } else if (overrides.edgeStyle === 'depressed') {
          cueDiv.firstChild.style.textShadow = '1px 1px ' + lightGray + ', 0 1px ' + lightGray + ', -1px -1px ' + darkGray + ', 0 -1px ' + darkGray;
        } else if (overrides.edgeStyle === 'uniform') {
          cueDiv.firstChild.style.textShadow = '0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray;
        }
      }
      if (overrides.fontPercent && overrides.fontPercent !== 1) {
        var fontSize = _globalWindow2['default'].parseFloat(cueDiv.style.fontSize);
        cueDiv.style.fontSize = fontSize * overrides.fontPercent + 'px';
        cueDiv.style.height = 'auto';
        cueDiv.style.top = 'auto';
        cueDiv.style.bottom = '2px';
      }
      if (overrides.fontFamily && overrides.fontFamily !== 'default') {
        if (overrides.fontFamily === 'small-caps') {
          cueDiv.firstChild.style.fontVariant = 'small-caps';
        } else {
          cueDiv.firstChild.style.fontFamily = fontMap[overrides.fontFamily];
        }
      }
    }
  };

  return TextTrackDisplay;
})(_component2['default']);

function constructColor(color, opacity) {
  return 'rgba(' +
  // color looks like "#f0e"
  parseInt(color[1] + color[1], 16) + ',' + parseInt(color[2] + color[2], 16) + ',' + parseInt(color[3] + color[3], 16) + ',' + opacity + ')';
}

/**
 * Try to update style
 * Some style changes will throw an error, particularly in IE8. Those should be noops.
 *
 * @param {Element} el The element to be styles
 * @param {CSSProperty} style The CSS property to be styled
 * @param {CSSStyle} rule The actual style to be applied to the property
 * @method tryUpdateStyle
 */
function tryUpdateStyle(el, style, rule) {
  //
  try {
    el.style[style] = rule;
  } catch (e) {}
}

_component2['default'].registerComponent('TextTrackDisplay', TextTrackDisplay);
exports['default'] = TextTrackDisplay;
module.exports = exports['default'];

},{"../component":67,"../menu/menu-button.js":106,"../menu/menu-item.js":107,"../menu/menu.js":108,"../utils/fn.js":136,"global/document":1,"global/window":2}],126:[function(_dereq_,module,exports){
/**
 * @file text-track-enums.js
 */

/**
 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackmode
 *
 * enum TextTrackMode { "disabled",  "hidden",  "showing" };
 */
'use strict';

exports.__esModule = true;
var TextTrackMode = {
  disabled: 'disabled',
  hidden: 'hidden',
  showing: 'showing'
};

/**
 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackkind
 *
 * enum TextTrackKind {
 *   "subtitles",
 *   "captions",
 *   "descriptions",
 *   "chapters",
 *   "metadata"
 * };
 */
var TextTrackKind = {
  subtitles: 'subtitles',
  captions: 'captions',
  descriptions: 'descriptions',
  chapters: 'chapters',
  metadata: 'metadata'
};

/* jshint ignore:start */
// we ignore jshint here because it does not see
// TextTrackMode or TextTrackKind as defined here somehow...
exports.TextTrackMode = TextTrackMode;
exports.TextTrackKind = TextTrackKind;

/* jshint ignore:end */

},{}],127:[function(_dereq_,module,exports){
/**
 * Utilities for capturing text track state and re-creating tracks
 * based on a capture.
 *
 * @file text-track-list-converter.js
 */

/**
 * Examine a single text track and return a JSON-compatible javascript
 * object that represents the text track's state.
 * @param track {TextTrackObject} the text track to query
 * @return {Object} a serializable javascript representation of the
 * @private
 */
'use strict';

exports.__esModule = true;
var trackToJson_ = function trackToJson_(track) {
  var ret = ['kind', 'label', 'language', 'id', 'inBandMetadataTrackDispatchType', 'mode', 'src'].reduce(function (acc, prop, i) {
    if (track[prop]) {
      acc[prop] = track[prop];
    }

    return acc;
  }, {
    cues: track.cues && Array.prototype.map.call(track.cues, function (cue) {
      return {
        startTime: cue.startTime,
        endTime: cue.endTime,
        text: cue.text,
        id: cue.id
      };
    })
  });

  return ret;
};

/**
 * Examine a tech and return a JSON-compatible javascript array that
 * represents the state of all text tracks currently configured. The
 * return array is compatible with `jsonToTextTracks`.
 * @param tech {tech} the tech object to query
 * @return {Array} a serializable javascript representation of the
 * @function textTracksToJson
 */
var textTracksToJson = function textTracksToJson(tech) {

  var trackEls = tech.$$('track');

  var trackObjs = Array.prototype.map.call(trackEls, function (t) {
    return t.track;
  });
  var tracks = Array.prototype.map.call(trackEls, function (trackEl) {
    var json = trackToJson_(trackEl.track);
    if (trackEl.src) {
      json.src = trackEl.src;
    }
    return json;
  });

  return tracks.concat(Array.prototype.filter.call(tech.textTracks(), function (track) {
    return trackObjs.indexOf(track) === -1;
  }).map(trackToJson_));
};

/**
 * Creates a set of remote text tracks on a tech based on an array of
 * javascript text track representations.
 * @param json {Array} an array of text track representation objects,
 * like those that would be produced by `textTracksToJson`
 * @param tech {tech} the tech to create text tracks on
 * @function jsonToTextTracks
 */
var jsonToTextTracks = function jsonToTextTracks(json, tech) {
  json.forEach(function (track) {
    var addedTrack = tech.addRemoteTextTrack(track).track;
    if (!track.src && track.cues) {
      track.cues.forEach(function (cue) {
        return addedTrack.addCue(cue);
      });
    }
  });

  return tech.textTracks();
};

exports['default'] = { textTracksToJson: textTracksToJson, jsonToTextTracks: jsonToTextTracks, trackToJson_: trackToJson_ };
module.exports = exports['default'];

},{}],128:[function(_dereq_,module,exports){
/**
 * @file text-track-list.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _eventTarget = _dereq_('../event-target');

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsBrowserJs = _dereq_('../utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

/**
 * A text track list as defined in:
 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttracklist
 *
 * interface TextTrackList : EventTarget {
 *   readonly attribute unsigned long length;
 *   getter TextTrack (unsigned long index);
 *   TextTrack? getTrackById(DOMString id);
 *
 *   attribute EventHandler onchange;
 *   attribute EventHandler onaddtrack;
 *   attribute EventHandler onremovetrack;
 * };
 *
 * @param {Track[]} tracks A list of tracks to initialize the list with
 * @extends EventTarget
 * @class TextTrackList
 */

var TextTrackList = (function (_EventTarget) {
  _inherits(TextTrackList, _EventTarget);

  function TextTrackList() {
    var tracks = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, TextTrackList);

    _EventTarget.call(this);
    var list = this;

    if (browser.IS_IE8) {
      list = _globalDocument2['default'].createElement('custom');

      for (var prop in TextTrackList.prototype) {
        if (prop !== 'constructor') {
          list[prop] = TextTrackList.prototype[prop];
        }
      }
    }

    list.tracks_ = [];

    Object.defineProperty(list, 'length', {
      get: function get() {
        return this.tracks_.length;
      }
    });

    for (var i = 0; i < tracks.length; i++) {
      list.addTrack_(tracks[i]);
    }

    if (browser.IS_IE8) {
      return list;
    }
  }

  /**
   * change - One or more tracks in the track list have been enabled or disabled.
   * addtrack - A track has been added to the track list.
   * removetrack - A track has been removed from the track list.
   */

  /**
   * Add TextTrack from TextTrackList
   *
   * @param {TextTrack} track
   * @method addTrack_
   * @private
   */

  TextTrackList.prototype.addTrack_ = function addTrack_(track) {
    var index = this.tracks_.length;

    if (!('' + index in this)) {
      Object.defineProperty(this, index, {
        get: function get() {
          return this.tracks_[index];
        }
      });
    }

    track.addEventListener('modechange', Fn.bind(this, function () {
      this.trigger('change');
    }));

    // Do not add duplicate tracks
    if (this.tracks_.indexOf(track) === -1) {
      this.tracks_.push(track);
      this.trigger({
        track: track,
        type: 'addtrack'
      });
    }
  };

  /**
   * Remove TextTrack from TextTrackList
   * NOTE: Be mindful of what is passed in as it may be a HTMLTrackElement
   *
   * @param {TextTrack} rtrack
   * @method removeTrack_
   * @private
   */

  TextTrackList.prototype.removeTrack_ = function removeTrack_(rtrack) {
    var track = undefined;

    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === rtrack) {
        track = this[i];
        if (track.off) {
          track.off();
        }

        this.tracks_.splice(i, 1);

        break;
      }
    }

    if (!track) {
      return;
    }

    this.trigger({
      track: track,
      type: 'removetrack'
    });
  };

  /**
   * Get a TextTrack from TextTrackList by a tracks id
   *
   * @param {String} id - the id of the track to get
   * @method getTrackById
   * @return {TextTrack}
   * @private
   */

  TextTrackList.prototype.getTrackById = function getTrackById(id) {
    var result = null;

    for (var i = 0, l = this.length; i < l; i++) {
      var track = this[i];

      if (track.id === id) {
        result = track;
        break;
      }
    }

    return result;
  };

  return TextTrackList;
})(_eventTarget2['default']);

TextTrackList.prototype.allowedEvents_ = {
  change: 'change',
  addtrack: 'addtrack',
  removetrack: 'removetrack'
};

// emulate attribute EventHandler support to allow for feature detection
for (var _event in TextTrackList.prototype.allowedEvents_) {
  TextTrackList.prototype['on' + _event] = null;
}

exports['default'] = TextTrackList;
module.exports = exports['default'];

},{"../event-target":101,"../utils/browser.js":131,"../utils/fn.js":136,"global/document":1}],129:[function(_dereq_,module,exports){
/**
 * @file text-track-settings.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = _dereq_('../component');

var _component2 = _interopRequireDefault(_component);

var _utilsEventsJs = _dereq_('../utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsLogJs = _dereq_('../utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _safeJsonParseTuple = _dereq_('safe-json-parse/tuple');

var _safeJsonParseTuple2 = _interopRequireDefault(_safeJsonParseTuple);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

/**
 * Manipulate settings of texttracks
 *
 * @param {Object} player  Main Player
 * @param {Object=} options Object of option names and values
 * @extends Component
 * @class TextTrackSettings
 */

var TextTrackSettings = (function (_Component) {
  _inherits(TextTrackSettings, _Component);

  function TextTrackSettings(player, options) {
    _classCallCheck(this, TextTrackSettings);

    _Component.call(this, player, options);
    this.hide();

    // Grab `persistTextTrackSettings` from the player options if not passed in child options
    if (options.persistTextTrackSettings === undefined) {
      this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings;
    }

    Events.on(this.$('.vjs-done-button'), 'click', Fn.bind(this, function () {
      this.saveSettings();
      this.hide();
    }));

    Events.on(this.$('.vjs-default-button'), 'click', Fn.bind(this, function () {
      this.$('.vjs-fg-color > select').selectedIndex = 0;
      this.$('.vjs-bg-color > select').selectedIndex = 0;
      this.$('.window-color > select').selectedIndex = 0;
      this.$('.vjs-text-opacity > select').selectedIndex = 0;
      this.$('.vjs-bg-opacity > select').selectedIndex = 0;
      this.$('.vjs-window-opacity > select').selectedIndex = 0;
      this.$('.vjs-edge-style select').selectedIndex = 0;
      this.$('.vjs-font-family select').selectedIndex = 0;
      this.$('.vjs-font-percent select').selectedIndex = 2;
      this.updateDisplay();
    }));

    Events.on(this.$('.vjs-fg-color > select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.vjs-bg-color > select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.window-color > select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.vjs-text-opacity > select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.vjs-bg-opacity > select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.vjs-window-opacity > select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.vjs-font-percent select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.vjs-edge-style select'), 'change', Fn.bind(this, this.updateDisplay));
    Events.on(this.$('.vjs-font-family select'), 'change', Fn.bind(this, this.updateDisplay));

    if (this.options_.persistTextTrackSettings) {
      this.restoreSettings();
    }
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  TextTrackSettings.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-caption-settings vjs-modal-overlay',
      innerHTML: captionOptionsMenuTemplate()
    });
  };

  /**
   * Get texttrack settings
   * Settings are
   * .vjs-edge-style
   * .vjs-font-family
   * .vjs-fg-color
   * .vjs-text-opacity
   * .vjs-bg-color
   * .vjs-bg-opacity
   * .window-color
   * .vjs-window-opacity
   *
   * @return {Object}
   * @method getValues
   */

  TextTrackSettings.prototype.getValues = function getValues() {
    var textEdge = getSelectedOptionValue(this.$('.vjs-edge-style select'));
    var fontFamily = getSelectedOptionValue(this.$('.vjs-font-family select'));
    var fgColor = getSelectedOptionValue(this.$('.vjs-fg-color > select'));
    var textOpacity = getSelectedOptionValue(this.$('.vjs-text-opacity > select'));
    var bgColor = getSelectedOptionValue(this.$('.vjs-bg-color > select'));
    var bgOpacity = getSelectedOptionValue(this.$('.vjs-bg-opacity > select'));
    var windowColor = getSelectedOptionValue(this.$('.window-color > select'));
    var windowOpacity = getSelectedOptionValue(this.$('.vjs-window-opacity > select'));
    var fontPercent = _globalWindow2['default']['parseFloat'](getSelectedOptionValue(this.$('.vjs-font-percent > select')));

    var result = {
      'backgroundOpacity': bgOpacity,
      'textOpacity': textOpacity,
      'windowOpacity': windowOpacity,
      'edgeStyle': textEdge,
      'fontFamily': fontFamily,
      'color': fgColor,
      'backgroundColor': bgColor,
      'windowColor': windowColor,
      'fontPercent': fontPercent
    };
    for (var _name in result) {
      if (result[_name] === '' || result[_name] === 'none' || _name === 'fontPercent' && result[_name] === 1.00) {
        delete result[_name];
      }
    }
    return result;
  };

  /**
   * Set texttrack settings
   * Settings are
   * .vjs-edge-style
   * .vjs-font-family
   * .vjs-fg-color
   * .vjs-text-opacity
   * .vjs-bg-color
   * .vjs-bg-opacity
   * .window-color
   * .vjs-window-opacity
   *
   * @param {Object} values Object with texttrack setting values
   * @method setValues
   */

  TextTrackSettings.prototype.setValues = function setValues(values) {
    setSelectedOption(this.$('.vjs-edge-style select'), values.edgeStyle);
    setSelectedOption(this.$('.vjs-font-family select'), values.fontFamily);
    setSelectedOption(this.$('.vjs-fg-color > select'), values.color);
    setSelectedOption(this.$('.vjs-text-opacity > select'), values.textOpacity);
    setSelectedOption(this.$('.vjs-bg-color > select'), values.backgroundColor);
    setSelectedOption(this.$('.vjs-bg-opacity > select'), values.backgroundOpacity);
    setSelectedOption(this.$('.window-color > select'), values.windowColor);
    setSelectedOption(this.$('.vjs-window-opacity > select'), values.windowOpacity);

    var fontPercent = values.fontPercent;

    if (fontPercent) {
      fontPercent = fontPercent.toFixed(2);
    }

    setSelectedOption(this.$('.vjs-font-percent > select'), fontPercent);
  };

  /**
   * Restore texttrack settings
   *
   * @method restoreSettings
   */

  TextTrackSettings.prototype.restoreSettings = function restoreSettings() {
    var err = undefined,
        values = undefined;

    try {
      var _safeParseTuple = _safeJsonParseTuple2['default'](_globalWindow2['default'].localStorage.getItem('vjs-text-track-settings'));

      err = _safeParseTuple[0];
      values = _safeParseTuple[1];

      if (err) {
        _utilsLogJs2['default'].error(err);
      }
    } catch (e) {
      _utilsLogJs2['default'].warn(e);
    }

    if (values) {
      this.setValues(values);
    }
  };

  /**
   * Save texttrack settings to local storage
   *
   * @method saveSettings
   */

  TextTrackSettings.prototype.saveSettings = function saveSettings() {
    if (!this.options_.persistTextTrackSettings) {
      return;
    }

    var values = this.getValues();
    try {
      if (Object.getOwnPropertyNames(values).length > 0) {
        _globalWindow2['default'].localStorage.setItem('vjs-text-track-settings', JSON.stringify(values));
      } else {
        _globalWindow2['default'].localStorage.removeItem('vjs-text-track-settings');
      }
    } catch (e) {
      _utilsLogJs2['default'].warn(e);
    }
  };

  /**
   * Update display of texttrack settings
   *
   * @method updateDisplay
   */

  TextTrackSettings.prototype.updateDisplay = function updateDisplay() {
    var ttDisplay = this.player_.getChild('textTrackDisplay');
    if (ttDisplay) {
      ttDisplay.updateDisplay();
    }
  };

  return TextTrackSettings;
})(_component2['default']);

_component2['default'].registerComponent('TextTrackSettings', TextTrackSettings);

function getSelectedOptionValue(target) {
  var selectedOption = undefined;
  // not all browsers support selectedOptions, so, fallback to options
  if (target.selectedOptions) {
    selectedOption = target.selectedOptions[0];
  } else if (target.options) {
    selectedOption = target.options[target.options.selectedIndex];
  }

  return selectedOption.value;
}

function setSelectedOption(target, value) {
  if (!value) {
    return;
  }

  var i = undefined;
  for (i = 0; i < target.options.length; i++) {
    var option = target.options[i];
    if (option.value === value) {
      break;
    }
  }

  target.selectedIndex = i;
}

function captionOptionsMenuTemplate() {
  var template = '<div class="vjs-tracksettings">\n      <div class="vjs-tracksettings-colors">\n        <div class="vjs-fg-color vjs-tracksetting">\n            <label class="vjs-label">Foreground</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-text-opacity vjs-opacity">\n              <select>\n                <option value="">---</option>\n                <option value="1">Opaque</option>\n                <option value="0.5">Semi-Opaque</option>\n              </select>\n            </span>\n        </div> <!-- vjs-fg-color -->\n        <div class="vjs-bg-color vjs-tracksetting">\n            <label class="vjs-label">Background</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-bg-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-bg-color -->\n        <div class="window-color vjs-tracksetting">\n            <label class="vjs-label">Window</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-window-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-window-color -->\n      </div> <!-- vjs-tracksettings -->\n      <div class="vjs-tracksettings-font">\n        <div class="vjs-font-percent vjs-tracksetting">\n          <label class="vjs-label">Font Size</label>\n          <select>\n            <option value="0.50">50%</option>\n            <option value="0.75">75%</option>\n            <option value="1.00" selected>100%</option>\n            <option value="1.25">125%</option>\n            <option value="1.50">150%</option>\n            <option value="1.75">175%</option>\n            <option value="2.00">200%</option>\n            <option value="3.00">300%</option>\n            <option value="4.00">400%</option>\n          </select>\n        </div> <!-- vjs-font-percent -->\n        <div class="vjs-edge-style vjs-tracksetting">\n          <label class="vjs-label">Text Edge Style</label>\n          <select>\n            <option value="none">None</option>\n            <option value="raised">Raised</option>\n            <option value="depressed">Depressed</option>\n            <option value="uniform">Uniform</option>\n            <option value="dropshadow">Dropshadow</option>\n          </select>\n        </div> <!-- vjs-edge-style -->\n        <div class="vjs-font-family vjs-tracksetting">\n          <label class="vjs-label">Font Family</label>\n          <select>\n            <option value="">Default</option>\n            <option value="monospaceSerif">Monospace Serif</option>\n            <option value="proportionalSerif">Proportional Serif</option>\n            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n            <option value="casual">Casual</option>\n            <option value="script">Script</option>\n            <option value="small-caps">Small Caps</option>\n          </select>\n        </div> <!-- vjs-font-family -->\n      </div>\n    </div>\n    <div class="vjs-tracksettings-controls">\n      <button class="vjs-default-button">Defaults</button>\n      <button class="vjs-done-button">Done</button>\n    </div>';

  return template;
}

exports['default'] = TextTrackSettings;
module.exports = exports['default'];

},{"../component":67,"../utils/events.js":135,"../utils/fn.js":136,"../utils/log.js":139,"global/window":2,"safe-json-parse/tuple":54}],130:[function(_dereq_,module,exports){
/**
 * @file text-track.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _textTrackCueList = _dereq_('./text-track-cue-list');

var _textTrackCueList2 = _interopRequireDefault(_textTrackCueList);

var _utilsFnJs = _dereq_('../utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _utilsGuidJs = _dereq_('../utils/guid.js');

var Guid = _interopRequireWildcard(_utilsGuidJs);

var _utilsBrowserJs = _dereq_('../utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _textTrackEnums = _dereq_('./text-track-enums');

var TextTrackEnum = _interopRequireWildcard(_textTrackEnums);

var _utilsLogJs = _dereq_('../utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _eventTarget = _dereq_('../event-target');

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _utilsUrlJs = _dereq_('../utils/url.js');

var _xhr = _dereq_('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

/**
 * takes a webvtt file contents and parses it into cues
 *
 * @param {String} srcContent webVTT file contents
 * @param {Track} track track to addcues to
 */
var parseCues = function parseCues(srcContent, track) {
  var parser = new _globalWindow2['default'].WebVTT.Parser(_globalWindow2['default'], _globalWindow2['default'].vttjs, _globalWindow2['default'].WebVTT.StringDecoder());
  var errors = [];

  parser.oncue = function (cue) {
    track.addCue(cue);
  };

  parser.onparsingerror = function (error) {
    errors.push(error);
  };

  parser.onflush = function () {
    track.trigger({
      type: 'loadeddata',
      target: track
    });
  };

  parser.parse(srcContent);
  if (errors.length > 0) {
    if (console.groupCollapsed) {
      console.groupCollapsed('Text Track parsing errors for ' + track.src);
    }
    errors.forEach(function (error) {
      return _utilsLogJs2['default'].error(error);
    });
    if (console.groupEnd) {
      console.groupEnd();
    }
  }

  parser.flush();
};

/**
 * load a track from a  specifed url
 *
 * @param {String} src url to load track from
 * @param {Track} track track to addcues to
 */
var loadTrack = function loadTrack(src, track) {
  var opts = {
    uri: src
  };
  var crossOrigin = _utilsUrlJs.isCrossOrigin(src);

  if (crossOrigin) {
    opts.cors = crossOrigin;
  }

  _xhr2['default'](opts, Fn.bind(this, function (err, response, responseBody) {
    if (err) {
      return _utilsLogJs2['default'].error(err, response);
    }

    track.loaded_ = true;

    // Make sure that vttjs has loaded, otherwise, wait till it finished loading
    // NOTE: this is only used for the alt/video.novtt.js build
    if (typeof _globalWindow2['default'].WebVTT !== 'function') {
      if (track.tech_) {
        (function () {
          var loadHandler = function loadHandler() {
            return parseCues(responseBody, track);
          };
          track.tech_.on('vttjsloaded', loadHandler);
          track.tech_.on('vttjserror', function () {
            _utilsLogJs2['default'].error('vttjs failed to load, stopping trying to process ' + track.src);
            track.tech_.off('vttjsloaded', loadHandler);
          });
        })();
      }
    } else {
      parseCues(responseBody, track);
    }
  }));
};

/**
 * A single text track as defined in:
 * https://html.spec.whatwg.org/multipage/embedded-content.html#texttrack
 *
 * interface TextTrack : EventTarget {
 *   readonly attribute TextTrackKind kind;
 *   readonly attribute DOMString label;
 *   readonly attribute DOMString language;
 *
 *   readonly attribute DOMString id;
 *   readonly attribute DOMString inBandMetadataTrackDispatchType;
 *
 *   attribute TextTrackMode mode;
 *
 *   readonly attribute TextTrackCueList? cues;
 *   readonly attribute TextTrackCueList? activeCues;
 *
 *   void addCue(TextTrackCue cue);
 *   void removeCue(TextTrackCue cue);
 *
 *   attribute EventHandler oncuechange;
 * };
 *
 * @param {Object=} options Object of option names and values
 * @extends EventTarget
 * @class TextTrack
 */

var TextTrack = (function (_EventTarget) {
  _inherits(TextTrack, _EventTarget);

  function TextTrack() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, TextTrack);

    _EventTarget.call(this);
    if (!options.tech) {
      throw new Error('A tech was not provided.');
    }

    var tt = this;

    if (browser.IS_IE8) {
      tt = _globalDocument2['default'].createElement('custom');

      for (var prop in TextTrack.prototype) {
        if (prop !== 'constructor') {
          tt[prop] = TextTrack.prototype[prop];
        }
      }
    }

    tt.tech_ = options.tech;

    var mode = TextTrackEnum.TextTrackMode[options.mode] || 'disabled';
    var kind = TextTrackEnum.TextTrackKind[options.kind] || 'subtitles';
    var default_ = options['default'];
    var label = options.label || '';
    var language = options.language || options.srclang || '';
    var id = options.id || 'vjs_text_track_' + Guid.newGUID();

    if (kind === 'metadata' || kind === 'chapters') {
      mode = 'hidden';
    }

    tt.cues_ = [];
    tt.activeCues_ = [];

    var cues = new _textTrackCueList2['default'](tt.cues_);
    var activeCues = new _textTrackCueList2['default'](tt.activeCues_);
    var changed = false;
    var timeupdateHandler = Fn.bind(tt, function () {
      this.activeCues;
      if (changed) {
        this.trigger('cuechange');
        changed = false;
      }
    });

    if (mode !== 'disabled') {
      tt.tech_.on('timeupdate', timeupdateHandler);
    }

    Object.defineProperty(tt, 'kind', {
      get: function get() {
        return kind;
      },
      set: function set() {}
    });

    Object.defineProperty(tt, 'label', {
      get: function get() {
        return label;
      },
      set: function set() {}
    });

    Object.defineProperty(tt, 'language', {
      get: function get() {
        return language;
      },
      set: function set() {}
    });

    Object.defineProperty(tt, 'id', {
      get: function get() {
        return id;
      },
      set: function set() {}
    });

    Object.defineProperty(tt, 'default', {
      get: function get() {
        return default_;
      },
      set: function set() {}
    });

    Object.defineProperty(tt, 'mode', {
      get: function get() {
        return mode;
      },
      set: function set(newMode) {
        if (!TextTrackEnum.TextTrackMode[newMode]) {
          return;
        }
        mode = newMode;
        if (mode === 'showing') {
          this.tech_.on('timeupdate', timeupdateHandler);
        }
        this.trigger('modechange');
      }
    });

    Object.defineProperty(tt, 'cues', {
      get: function get() {
        if (!this.loaded_) {
          return null;
        }

        return cues;
      },
      set: function set() {}
    });

    Object.defineProperty(tt, 'activeCues', {
      get: function get() {
        if (!this.loaded_) {
          return null;
        }

        // nothing to do
        if (this.cues.length === 0) {
          return activeCues;
        }

        var ct = this.tech_.currentTime();
        var active = [];

        for (var i = 0, l = this.cues.length; i < l; i++) {
          var cue = this.cues[i];

          if (cue.startTime <= ct && cue.endTime >= ct) {
            active.push(cue);
          } else if (cue.startTime === cue.endTime && cue.startTime <= ct && cue.startTime + 0.5 >= ct) {
            active.push(cue);
          }
        }

        changed = false;

        if (active.length !== this.activeCues_.length) {
          changed = true;
        } else {
          for (var i = 0; i < active.length; i++) {
            if (this.activeCues_.indexOf(active[i]) === -1) {
              changed = true;
            }
          }
        }

        this.activeCues_ = active;
        activeCues.setCues_(this.activeCues_);

        return activeCues;
      },
      set: function set() {}
    });

    if (options.src) {
      tt.src = options.src;
      loadTrack(options.src, tt);
    } else {
      tt.loaded_ = true;
    }

    if (browser.IS_IE8) {
      return tt;
    }
  }

  /**
   * cuechange - One or more cues in the track have become active or stopped being active.
   */

  /**
   * add a cue to the internal list of cues
   *
   * @param {Object} cue the cue to add to our internal list
   * @method addCue
   */

  TextTrack.prototype.addCue = function addCue(cue) {
    var tracks = this.tech_.textTracks();

    if (tracks) {
      for (var i = 0; i < tracks.length; i++) {
        if (tracks[i] !== this) {
          tracks[i].removeCue(cue);
        }
      }
    }

    this.cues_.push(cue);
    this.cues.setCues_(this.cues_);
  };

  /**
   * remvoe a cue from our internal list
   *
   * @param {Object} removeCue the cue to remove from our internal list
   * @method removeCue
   */

  TextTrack.prototype.removeCue = function removeCue(_removeCue) {
    var removed = false;

    for (var i = 0, l = this.cues_.length; i < l; i++) {
      var cue = this.cues_[i];

      if (cue === _removeCue) {
        this.cues_.splice(i, 1);
        removed = true;
      }
    }

    if (removed) {
      this.cues.setCues_(this.cues_);
    }
  };

  return TextTrack;
})(_eventTarget2['default']);

TextTrack.prototype.allowedEvents_ = {
  cuechange: 'cuechange'
};

exports['default'] = TextTrack;
module.exports = exports['default'];

},{"../event-target":101,"../utils/browser.js":131,"../utils/fn.js":136,"../utils/guid.js":138,"../utils/log.js":139,"../utils/url.js":144,"./text-track-cue-list":124,"./text-track-enums":126,"global/document":1,"global/window":2,"xhr":56}],131:[function(_dereq_,module,exports){
/**
 * @file browser.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var USER_AGENT = _globalWindow2['default'].navigator.userAgent;
var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
var appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */
var IS_IPAD = /iPad/i.test(USER_AGENT);

exports.IS_IPAD = IS_IPAD;
// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
exports.IS_IPHONE = IS_IPHONE;
var IS_IPOD = /iPod/i.test(USER_AGENT);
exports.IS_IPOD = IS_IPOD;
var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

exports.IS_IOS = IS_IOS;
var IOS_VERSION = (function () {
  var match = USER_AGENT.match(/OS (\d+)_/i);
  if (match && match[1]) {
    return match[1];
  }
})();

exports.IOS_VERSION = IOS_VERSION;
var IS_ANDROID = /Android/i.test(USER_AGENT);
exports.IS_ANDROID = IS_ANDROID;
var ANDROID_VERSION = (function () {
  // This matches Android Major.Minor.Patch versions
  // ANDROID_VERSION is Major.Minor as a Number, if Minor isn't available, then only Major is returned
  var match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
      major,
      minor;

  if (!match) {
    return null;
  }

  major = match[1] && parseFloat(match[1]);
  minor = match[2] && parseFloat(match[2]);

  if (major && minor) {
    return parseFloat(match[1] + '.' + match[2]);
  } else if (major) {
    return major;
  } else {
    return null;
  }
})();
exports.ANDROID_VERSION = ANDROID_VERSION;
// Old Android is defined as Version older than 2.3, and requiring a webkit version of the android browser
var IS_OLD_ANDROID = IS_ANDROID && /webkit/i.test(USER_AGENT) && ANDROID_VERSION < 2.3;
exports.IS_OLD_ANDROID = IS_OLD_ANDROID;
var IS_NATIVE_ANDROID = IS_ANDROID && ANDROID_VERSION < 5 && appleWebkitVersion < 537;

exports.IS_NATIVE_ANDROID = IS_NATIVE_ANDROID;
var IS_FIREFOX = /Firefox/i.test(USER_AGENT);
exports.IS_FIREFOX = IS_FIREFOX;
var IS_EDGE = /Edge/i.test(USER_AGENT);
exports.IS_EDGE = IS_EDGE;
var IS_CHROME = !IS_EDGE && /Chrome/i.test(USER_AGENT);
exports.IS_CHROME = IS_CHROME;
var IS_IE8 = /MSIE\s8\.0/.test(USER_AGENT);

exports.IS_IE8 = IS_IE8;
var TOUCH_ENABLED = !!('ontouchstart' in _globalWindow2['default'] || _globalWindow2['default'].DocumentTouch && _globalDocument2['default'] instanceof _globalWindow2['default'].DocumentTouch);
exports.TOUCH_ENABLED = TOUCH_ENABLED;
var BACKGROUND_SIZE_SUPPORTED = ('backgroundSize' in _globalDocument2['default'].createElement('video').style);
exports.BACKGROUND_SIZE_SUPPORTED = BACKGROUND_SIZE_SUPPORTED;

},{"global/document":1,"global/window":2}],132:[function(_dereq_,module,exports){
/**
 * @file buffer.js
 */
'use strict';

exports.__esModule = true;
exports.bufferedPercent = bufferedPercent;

var _timeRangesJs = _dereq_('./time-ranges.js');

/**
 * Compute how much your video has been buffered
 *
 * @param  {Object} Buffered object
 * @param  {Number} Total duration
 * @return {Number} Percent buffered of the total duration
 * @private
 * @function bufferedPercent
 */

function bufferedPercent(buffered, duration) {
  var bufferedDuration = 0,
      start,
      end;

  if (!duration) {
    return 0;
  }

  if (!buffered || !buffered.length) {
    buffered = _timeRangesJs.createTimeRange(0, 0);
  }

  for (var i = 0; i < buffered.length; i++) {
    start = buffered.start(i);
    end = buffered.end(i);

    // buffered end can be bigger than duration by a very small fraction
    if (end > duration) {
      end = duration;
    }

    bufferedDuration += end - start;
  }

  return bufferedDuration / duration;
}

},{"./time-ranges.js":142}],133:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _logJs = _dereq_('./log.js');

var _logJs2 = _interopRequireDefault(_logJs);

/**
 * Object containing the default behaviors for available handler methods.
 *
 * @private
 * @type {Object}
 */
var defaultBehaviors = {
  get: function get(obj, key) {
    return obj[key];
  },
  set: function set(obj, key, value) {
    obj[key] = value;
    return true;
  }
};

/**
 * Expose private objects publicly using a Proxy to log deprecation warnings.
 *
 * Browsers that do not support Proxy objects will simply return the `target`
 * object, so it can be directly exposed.
 *
 * @param {Object} target The target object.
 * @param {Object} messages Messages to display from a Proxy. Only operations
 *                          with an associated message will be proxied.
 * @param {String} [messages.get]
 * @param {String} [messages.set]
 * @return {Object} A Proxy if supported or the `target` argument.
 */

exports['default'] = function (target) {
  var messages = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (typeof Proxy === 'function') {
    var _ret = (function () {
      var handler = {};

      // Build a handler object based on those keys that have both messages
      // and default behaviors.
      Object.keys(messages).forEach(function (key) {
        if (defaultBehaviors.hasOwnProperty(key)) {
          handler[key] = function () {
            _logJs2['default'].warn(messages[key]);
            return defaultBehaviors[key].apply(this, arguments);
          };
        }
      });

      return {
        v: new Proxy(target, handler)
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  }
  return target;
};

module.exports = exports['default'];

},{"./log.js":139}],134:[function(_dereq_,module,exports){
/**
 * @file dom.js
 */
'use strict';

exports.__esModule = true;
exports.getEl = getEl;
exports.createEl = createEl;
exports.textContent = textContent;
exports.insertElFirst = insertElFirst;
exports.getElData = getElData;
exports.hasElData = hasElData;
exports.removeElData = removeElData;
exports.hasElClass = hasElClass;
exports.addElClass = addElClass;
exports.removeElClass = removeElClass;
exports.toggleElClass = toggleElClass;
exports.setElAttributes = setElAttributes;
exports.getElAttributes = getElAttributes;
exports.blockTextSelection = blockTextSelection;
exports.unblockTextSelection = unblockTextSelection;
exports.findElPosition = findElPosition;
exports.getPointerPosition = getPointerPosition;
exports.isEl = isEl;
exports.isTextNode = isTextNode;
exports.emptyEl = emptyEl;
exports.normalizeContent = normalizeContent;
exports.appendContent = appendContent;
exports.insertContent = insertContent;

var _templateObject = _taggedTemplateLiteralLoose(['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.'], ['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.']);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _guidJs = _dereq_('./guid.js');

var Guid = _interopRequireWildcard(_guidJs);

var _logJs = _dereq_('./log.js');

var _logJs2 = _interopRequireDefault(_logJs);

var _tsml = _dereq_('tsml');

var _tsml2 = _interopRequireDefault(_tsml);

/**
 * Detect if a value is a string with any non-whitespace characters.
 *
 * @param  {String} str
 * @return {Boolean}
 */
function isNonBlankString(str) {
  return typeof str === 'string' && /\S/.test(str);
}

/**
 * Throws an error if the passed string has whitespace. This is used by
 * class methods to be relatively consistent with the classList API.
 *
 * @param  {String} str
 * @return {Boolean}
 */
function throwIfWhitespace(str) {
  if (/\s/.test(str)) {
    throw new Error('class has illegal whitespace characters');
  }
}

/**
 * Produce a regular expression for matching a class name.
 *
 * @param  {String} className
 * @return {RegExp}
 */
function classRegExp(className) {
  return new RegExp('(^|\\s)' + className + '($|\\s)');
}

/**
 * Creates functions to query the DOM using a given method.
 *
 * @function createQuerier
 * @private
 * @param  {String} method
 * @return {Function}
 */
function createQuerier(method) {
  return function (selector, context) {
    if (!isNonBlankString(selector)) {
      return _globalDocument2['default'][method](null);
    }
    if (isNonBlankString(context)) {
      context = _globalDocument2['default'].querySelector(context);
    }
    return (isEl(context) ? context : _globalDocument2['default'])[method](selector);
  };
}

/**
 * Shorthand for document.getElementById()
 * Also allows for CSS (jQuery) ID syntax. But nothing other than IDs.
 *
 * @param  {String} id  Element ID
 * @return {Element}    Element with supplied ID
 * @function getEl
 */

function getEl(id) {
  if (id.indexOf('#') === 0) {
    id = id.slice(1);
  }

  return _globalDocument2['default'].getElementById(id);
}

/**
 * Creates an element and applies properties.
 *
 * @param  {String} [tagName='div'] Name of tag to be created.
 * @param  {Object} [properties={}] Element properties to be applied.
 * @param  {Object} [attributes={}] Element attributes to be applied.
 * @return {Element}
 * @function createEl
 */

function createEl() {
  var tagName = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];
  var properties = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var el = _globalDocument2['default'].createElement(tagName);

  Object.getOwnPropertyNames(properties).forEach(function (propName) {
    var val = properties[propName];

    // See #2176
    // We originally were accepting both properties and attributes in the
    // same object, but that doesn't work so well.
    if (propName.indexOf('aria-') !== -1 || propName === 'role' || propName === 'type') {
      _logJs2['default'].warn(_tsml2['default'](_templateObject, propName, val));
      el.setAttribute(propName, val);
    } else {
      el[propName] = val;
    }
  });

  Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
    var val = attributes[attrName];
    el.setAttribute(attrName, attributes[attrName]);
  });

  return el;
}

/**
 * Injects text into an element, replacing any existing contents entirely.
 *
 * @param  {Element} el
 * @param  {String} text
 * @return {Element}
 * @function textContent
 */

function textContent(el, text) {
  if (typeof el.textContent === 'undefined') {
    el.innerText = text;
  } else {
    el.textContent = text;
  }
}

/**
 * Insert an element as the first child node of another
 *
 * @param  {Element} child   Element to insert
 * @param  {Element} parent Element to insert child into
 * @private
 * @function insertElFirst
 */

function insertElFirst(child, parent) {
  if (parent.firstChild) {
    parent.insertBefore(child, parent.firstChild);
  } else {
    parent.appendChild(child);
  }
}

/**
 * Element Data Store. Allows for binding data to an element without putting it directly on the element.
 * Ex. Event listeners are stored here.
 * (also from jsninja.com, slightly modified and updated for closure compiler)
 *
 * @type {Object}
 * @private
 */
var elData = {};

/*
 * Unique attribute name to store an element's guid in
 *
 * @type {String}
 * @constant
 * @private
 */
var elIdAttr = 'vdata' + new Date().getTime();

/**
 * Returns the cache object where data for an element is stored
 *
 * @param  {Element} el Element to store data for.
 * @return {Object}
 * @function getElData
 */

function getElData(el) {
  var id = el[elIdAttr];

  if (!id) {
    id = el[elIdAttr] = Guid.newGUID();
  }

  if (!elData[id]) {
    elData[id] = {};
  }

  return elData[id];
}

/**
 * Returns whether or not an element has cached data
 *
 * @param  {Element} el A dom element
 * @return {Boolean}
 * @private
 * @function hasElData
 */

function hasElData(el) {
  var id = el[elIdAttr];

  if (!id) {
    return false;
  }

  return !!Object.getOwnPropertyNames(elData[id]).length;
}

/**
 * Delete data for the element from the cache and the guid attr from getElementById
 *
 * @param  {Element} el Remove data for an element
 * @private
 * @function removeElData
 */

function removeElData(el) {
  var id = el[elIdAttr];

  if (!id) {
    return;
  }

  // Remove all stored data
  delete elData[id];

  // Remove the elIdAttr property from the DOM node
  try {
    delete el[elIdAttr];
  } catch (e) {
    if (el.removeAttribute) {
      el.removeAttribute(elIdAttr);
    } else {
      // IE doesn't appear to support removeAttribute on the document element
      el[elIdAttr] = null;
    }
  }
}

/**
 * Check if an element has a CSS class
 *
 * @function hasElClass
 * @param {Element} element Element to check
 * @param {String} classToCheck Classname to check
 */

function hasElClass(element, classToCheck) {
  if (element.classList) {
    return element.classList.contains(classToCheck);
  } else {
    throwIfWhitespace(classToCheck);
    return classRegExp(classToCheck).test(element.className);
  }
}

/**
 * Add a CSS class name to an element
 *
 * @function addElClass
 * @param {Element} element    Element to add class name to
 * @param {String} classToAdd Classname to add
 */

function addElClass(element, classToAdd) {
  if (element.classList) {
    element.classList.add(classToAdd);

    // Don't need to `throwIfWhitespace` here because `hasElClass` will do it
    // in the case of classList not being supported.
  } else if (!hasElClass(element, classToAdd)) {
      element.className = (element.className + ' ' + classToAdd).trim();
    }

  return element;
}

/**
 * Remove a CSS class name from an element
 *
 * @function removeElClass
 * @param {Element} element    Element to remove from class name
 * @param {String} classToRemove Classname to remove
 */

function removeElClass(element, classToRemove) {
  if (element.classList) {
    element.classList.remove(classToRemove);
  } else {
    throwIfWhitespace(classToRemove);
    element.className = element.className.split(/\s+/).filter(function (c) {
      return c !== classToRemove;
    }).join(' ');
  }

  return element;
}

/**
 * Adds or removes a CSS class name on an element depending on an optional
 * condition or the presence/absence of the class name.
 *
 * @function toggleElClass
 * @param    {Element} element
 * @param    {String} classToToggle
 * @param    {Boolean|Function} [predicate]
 *           Can be a function that returns a Boolean. If `true`, the class
 *           will be added; if `false`, the class will be removed. If not
 *           given, the class will be added if not present and vice versa.
 */

function toggleElClass(element, classToToggle, predicate) {

  // This CANNOT use `classList` internally because IE does not support the
  // second parameter to the `classList.toggle()` method! Which is fine because
  // `classList` will be used by the add/remove functions.
  var has = hasElClass(element, classToToggle);

  if (typeof predicate === 'function') {
    predicate = predicate(element, classToToggle);
  }

  if (typeof predicate !== 'boolean') {
    predicate = !has;
  }

  // If the necessary class operation matches the current state of the
  // element, no action is required.
  if (predicate === has) {
    return;
  }

  if (predicate) {
    addElClass(element, classToToggle);
  } else {
    removeElClass(element, classToToggle);
  }

  return element;
}

/**
 * Apply attributes to an HTML element.
 *
 * @param  {Element} el         Target element.
 * @param  {Object=} attributes Element attributes to be applied.
 * @private
 * @function setElAttributes
 */

function setElAttributes(el, attributes) {
  Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
    var attrValue = attributes[attrName];

    if (attrValue === null || typeof attrValue === 'undefined' || attrValue === false) {
      el.removeAttribute(attrName);
    } else {
      el.setAttribute(attrName, attrValue === true ? '' : attrValue);
    }
  });
}

/**
 * Get an element's attribute values, as defined on the HTML tag
 * Attributes are not the same as properties. They're defined on the tag
 * or with setAttribute (which shouldn't be used with HTML)
 * This will return true or false for boolean attributes.
 *
 * @param  {Element} tag Element from which to get tag attributes
 * @return {Object}
 * @private
 * @function getElAttributes
 */

function getElAttributes(tag) {
  var obj, knownBooleans, attrs, attrName, attrVal;

  obj = {};

  // known boolean attributes
  // we can check for matching boolean properties, but older browsers
  // won't know about HTML5 boolean attributes that we still read from
  knownBooleans = ',' + 'autoplay,controls,loop,muted,default' + ',';

  if (tag && tag.attributes && tag.attributes.length > 0) {
    attrs = tag.attributes;

    for (var i = attrs.length - 1; i >= 0; i--) {
      attrName = attrs[i].name;
      attrVal = attrs[i].value;

      // check for known booleans
      // the matching element property will return a value for typeof
      if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(',' + attrName + ',') !== -1) {
        // the value of an included boolean attribute is typically an empty
        // string ('') which would equal false if we just check for a false value.
        // we also don't want support bad code like autoplay='false'
        attrVal = attrVal !== null ? true : false;
      }

      obj[attrName] = attrVal;
    }
  }

  return obj;
}

/**
 * Attempt to block the ability to select text while dragging controls
 *
 * @return {Boolean}
 * @function blockTextSelection
 */

function blockTextSelection() {
  _globalDocument2['default'].body.focus();
  _globalDocument2['default'].onselectstart = function () {
    return false;
  };
}

/**
 * Turn off text selection blocking
 *
 * @return {Boolean}
 * @function unblockTextSelection
 */

function unblockTextSelection() {
  _globalDocument2['default'].onselectstart = function () {
    return true;
  };
}

/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {Element} el Element from which to get offset
 * @return {Object}
 */

function findElPosition(el) {
  var box = undefined;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  var docEl = _globalDocument2['default'].documentElement;
  var body = _globalDocument2['default'].body;

  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = _globalWindow2['default'].pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft - clientLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = _globalWindow2['default'].pageYOffset || body.scrollTop;
  var top = box.top + scrollTop - clientTop;

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}

/**
 * Get pointer position in element
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {Element} el Element on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */

function getPointerPosition(el, event) {
  var position = {};
  var box = findElPosition(el);
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;

  var boxY = box.top;
  var boxX = box.left;
  var pageY = event.pageY;
  var pageX = event.pageX;

  if (event.changedTouches) {
    pageX = event.changedTouches[0].pageX;
    pageY = event.changedTouches[0].pageY;
  }

  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));

  return position;
}

/**
 * Determines, via duck typing, whether or not a value is a DOM element.
 *
 * @function isEl
 * @param    {Mixed} value
 * @return   {Boolean}
 */

function isEl(value) {
  return !!value && typeof value === 'object' && value.nodeType === 1;
}

/**
 * Determines, via duck typing, whether or not a value is a text node.
 *
 * @param  {Mixed} value
 * @return {Boolean}
 */

function isTextNode(value) {
  return !!value && typeof value === 'object' && value.nodeType === 3;
}

/**
 * Empties the contents of an element.
 *
 * @function emptyEl
 * @param    {Element} el
 * @return   {Element}
 */

function emptyEl(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
  return el;
}

/**
 * Normalizes content for eventual insertion into the DOM.
 *
 * This allows a wide range of content definition methods, but protects
 * from falling into the trap of simply writing to `innerHTML`, which is
 * an XSS concern.
 *
 * The content for an element can be passed in multiple types and
 * combinations, whose behavior is as follows:
 *
 * - String
 *   Normalized into a text node.
 *
 * - Element, TextNode
 *   Passed through.
 *
 * - Array
 *   A one-dimensional array of strings, elements, nodes, or functions (which
 *   return single strings, elements, or nodes).
 *
 * - Function
 *   If the sole argument, is expected to produce a string, element,
 *   node, or array.
 *
 * @function normalizeContent
 * @param    {String|Element|TextNode|Array|Function} content
 * @return   {Array}
 */

function normalizeContent(content) {

  // First, invoke content if it is a function. If it produces an array,
  // that needs to happen before normalization.
  if (typeof content === 'function') {
    content = content();
  }

  // Next up, normalize to an array, so one or many items can be normalized,
  // filtered, and returned.
  return (Array.isArray(content) ? content : [content]).map(function (value) {

    // First, invoke value if it is a function to produce a new value,
    // which will be subsequently normalized to a Node of some kind.
    if (typeof value === 'function') {
      value = value();
    }

    if (isEl(value) || isTextNode(value)) {
      return value;
    }

    if (typeof value === 'string' && /\S/.test(value)) {
      return _globalDocument2['default'].createTextNode(value);
    }
  }).filter(function (value) {
    return value;
  });
}

/**
 * Normalizes and appends content to an element.
 *
 * @function appendContent
 * @param    {Element} el
 * @param    {String|Element|TextNode|Array|Function} content
 *           See: `normalizeContent`
 * @return   {Element}
 */

function appendContent(el, content) {
  normalizeContent(content).forEach(function (node) {
    return el.appendChild(node);
  });
  return el;
}

/**
 * Normalizes and inserts content into an element; this is identical to
 * `appendContent()`, except it empties the element first.
 *
 * @function insertContent
 * @param    {Element} el
 * @param    {String|Element|TextNode|Array|Function} content
 *           See: `normalizeContent`
 * @return   {Element}
 */

function insertContent(el, content) {
  return appendContent(emptyEl(el), content);
}

/**
 * Finds a single DOM element matching `selector` within the optional
 * `context` of another DOM element (defaulting to `document`).
 *
 * @function $
 * @param    {String} selector
 *           A valid CSS selector, which will be passed to `querySelector`.
 *
 * @param    {Element|String} [context=document]
 *           A DOM element within which to query. Can also be a selector
 *           string in which case the first matching element will be used
 *           as context. If missing (or no element matches selector), falls
 *           back to `document`.
 *
 * @return   {Element|null}
 */
var $ = createQuerier('querySelector');

exports.$ = $;
/**
 * Finds a all DOM elements matching `selector` within the optional
 * `context` of another DOM element (defaulting to `document`).
 *
 * @function $$
 * @param    {String} selector
 *           A valid CSS selector, which will be passed to `querySelectorAll`.
 *
 * @param    {Element|String} [context=document]
 *           A DOM element within which to query. Can also be a selector
 *           string in which case the first matching element will be used
 *           as context. If missing (or no element matches selector), falls
 *           back to `document`.
 *
 * @return   {NodeList}
 */
var $$ = createQuerier('querySelectorAll');
exports.$$ = $$;

},{"./guid.js":138,"./log.js":139,"global/document":1,"global/window":2,"tsml":55}],135:[function(_dereq_,module,exports){
/**
 * @file events.js
 *
 * Event System (John Resig - Secrets of a JS Ninja http://jsninja.com/)
 * (Original book version wasn't completely usable, so fixed some things and made Closure Compiler compatible)
 * This should work very similarly to jQuery's events, however it's based off the book version which isn't as
 * robust as jquery's, so there's probably some differences.
 */

'use strict';

exports.__esModule = true;
exports.on = on;
exports.off = off;
exports.trigger = trigger;
exports.one = one;
exports.fixEvent = fixEvent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _domJs = _dereq_('./dom.js');

var Dom = _interopRequireWildcard(_domJs);

var _guidJs = _dereq_('./guid.js');

var Guid = _interopRequireWildcard(_guidJs);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

/**
 * Add an event listener to element
 * It stores the handler function in a separate cache object
 * and adds a generic handler to the element's event,
 * along with a unique id (guid) to the element.
 *
 * @param  {Element|Object}   elem Element or object to bind listeners to
 * @param  {String|Array}   type Type of event to bind to.
 * @param  {Function} fn   Event listener.
 * @method on
 */

function on(elem, type, fn) {
  if (Array.isArray(type)) {
    return _handleMultipleEvents(on, elem, type, fn);
  }

  var data = Dom.getElData(elem);

  // We need a place to store all our handler data
  if (!data.handlers) data.handlers = {};

  if (!data.handlers[type]) data.handlers[type] = [];

  if (!fn.guid) fn.guid = Guid.newGUID();

  data.handlers[type].push(fn);

  if (!data.dispatcher) {
    data.disabled = false;

    data.dispatcher = function (event, hash) {

      if (data.disabled) return;
      event = fixEvent(event);

      var handlers = data.handlers[event.type];

      if (handlers) {
        // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
        var handlersCopy = handlers.slice(0);

        for (var m = 0, n = handlersCopy.length; m < n; m++) {
          if (event.isImmediatePropagationStopped()) {
            break;
          } else {
            handlersCopy[m].call(elem, event, hash);
          }
        }
      }
    };
  }

  if (data.handlers[type].length === 1) {
    if (elem.addEventListener) {
      elem.addEventListener(type, data.dispatcher, false);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + type, data.dispatcher);
    }
  }
}

/**
 * Removes event listeners from an element
 *
 * @param  {Element|Object}   elem Object to remove listeners from
 * @param  {String|Array=}   type Type of listener to remove. Don't include to remove all events from element.
 * @param  {Function} fn   Specific listener to remove. Don't include to remove listeners for an event type.
 * @method off
 */

function off(elem, type, fn) {
  // Don't want to add a cache object through getElData if not needed
  if (!Dom.hasElData(elem)) return;

  var data = Dom.getElData(elem);

  // If no events exist, nothing to unbind
  if (!data.handlers) {
    return;
  }

  if (Array.isArray(type)) {
    return _handleMultipleEvents(off, elem, type, fn);
  }

  // Utility function
  var removeType = function removeType(t) {
    data.handlers[t] = [];
    _cleanUpEvents(elem, t);
  };

  // Are we removing all bound events?
  if (!type) {
    for (var t in data.handlers) {
      removeType(t);
    }return;
  }

  var handlers = data.handlers[type];

  // If no handlers exist, nothing to unbind
  if (!handlers) return;

  // If no listener was provided, remove all listeners for type
  if (!fn) {
    removeType(type);
    return;
  }

  // We're only removing a single handler
  if (fn.guid) {
    for (var n = 0; n < handlers.length; n++) {
      if (handlers[n].guid === fn.guid) {
        handlers.splice(n--, 1);
      }
    }
  }

  _cleanUpEvents(elem, type);
}

/**
 * Trigger an event for an element
 *
 * @param  {Element|Object}      elem  Element to trigger an event on
 * @param  {Event|Object|String} event A string (the type) or an event object with a type attribute
 * @param  {Object} [hash] data hash to pass along with the event
 * @return {Boolean=} Returned only if default was prevented
 * @method trigger
 */

function trigger(elem, event, hash) {
  // Fetches element data and a reference to the parent (for bubbling).
  // Don't want to add a data object to cache for every parent,
  // so checking hasElData first.
  var elemData = Dom.hasElData(elem) ? Dom.getElData(elem) : {};
  var parent = elem.parentNode || elem.ownerDocument;
  // type = event.type || event,
  // handler;

  // If an event name was passed as a string, creates an event out of it
  if (typeof event === 'string') {
    event = { type: event, target: elem };
  }
  // Normalizes the event properties.
  event = fixEvent(event);

  // If the passed element has a dispatcher, executes the established handlers.
  if (elemData.dispatcher) {
    elemData.dispatcher.call(elem, event, hash);
  }

  // Unless explicitly stopped or the event does not bubble (e.g. media events)
  // recursively calls this function to bubble the event up the DOM.
  if (parent && !event.isPropagationStopped() && event.bubbles === true) {
    trigger.call(null, parent, event, hash);

    // If at the top of the DOM, triggers the default action unless disabled.
  } else if (!parent && !event.defaultPrevented) {
      var targetData = Dom.getElData(event.target);

      // Checks if the target has a default action for this event.
      if (event.target[event.type]) {
        // Temporarily disables event dispatching on the target as we have already executed the handler.
        targetData.disabled = true;
        // Executes the default action.
        if (typeof event.target[event.type] === 'function') {
          event.target[event.type]();
        }
        // Re-enables event dispatching.
        targetData.disabled = false;
      }
    }

  // Inform the triggerer if the default was prevented by returning false
  return !event.defaultPrevented;
}

/**
 * Trigger a listener only once for an event
 *
 * @param  {Element|Object}   elem Element or object to
 * @param  {String|Array}   type Name/type of event
 * @param  {Function} fn Event handler function
 * @method one
 */

function one(elem, type, fn) {
  if (Array.isArray(type)) {
    return _handleMultipleEvents(one, elem, type, fn);
  }
  var func = function func() {
    off(elem, type, func);
    fn.apply(this, arguments);
  };
  // copy the guid to the new function so it can removed using the original function's ID
  func.guid = fn.guid = fn.guid || Guid.newGUID();
  on(elem, type, func);
}

/**
 * Fix a native event to have standard property values
 *
 * @param  {Object} event Event object to fix
 * @return {Object}
 * @private
 * @method fixEvent
 */

function fixEvent(event) {

  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }

  // Test if fixing up is needed
  // Used to check if !event.stopPropagation instead of isPropagationStopped
  // But native events return true for stopPropagation, but don't have
  // other expected methods like isPropagationStopped. Seems to be a problem
  // with the Javascript Ninja code. So we're just overriding all events now.
  if (!event || !event.isPropagationStopped) {
    var old = event || _globalWindow2['default'].event;

    event = {};
    // Clone the old object so that we can modify the values event = {};
    // IE8 Doesn't like when you mess with native event properties
    // Firefox returns false for event.hasOwnProperty('type') and other props
    //  which makes copying more difficult.
    // TODO: Probably best to create a whitelist of event props
    for (var key in old) {
      // Safari 6.0.3 warns you if you try to copy deprecated layerX/Y
      // Chrome warns you if you try to copy deprecated keyboardEvent.keyLocation
      // and webkitMovementX/Y
      if (key !== 'layerX' && key !== 'layerY' && key !== 'keyLocation' && key !== 'webkitMovementX' && key !== 'webkitMovementY') {
        // Chrome 32+ warns if you try to copy deprecated returnValue, but
        // we still want to if preventDefault isn't supported (IE8).
        if (!(key === 'returnValue' && old.preventDefault)) {
          event[key] = old[key];
        }
      }
    }

    // The event occurred on this element
    if (!event.target) {
      event.target = event.srcElement || _globalDocument2['default'];
    }

    // Handle which other element the event is related to
    if (!event.relatedTarget) {
      event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
    }

    // Stop the default browser action
    event.preventDefault = function () {
      if (old.preventDefault) {
        old.preventDefault();
      }
      event.returnValue = false;
      old.returnValue = false;
      event.defaultPrevented = true;
    };

    event.defaultPrevented = false;

    // Stop the event from bubbling
    event.stopPropagation = function () {
      if (old.stopPropagation) {
        old.stopPropagation();
      }
      event.cancelBubble = true;
      old.cancelBubble = true;
      event.isPropagationStopped = returnTrue;
    };

    event.isPropagationStopped = returnFalse;

    // Stop the event from bubbling and executing other handlers
    event.stopImmediatePropagation = function () {
      if (old.stopImmediatePropagation) {
        old.stopImmediatePropagation();
      }
      event.isImmediatePropagationStopped = returnTrue;
      event.stopPropagation();
    };

    event.isImmediatePropagationStopped = returnFalse;

    // Handle mouse position
    if (event.clientX != null) {
      var doc = _globalDocument2['default'].documentElement,
          body = _globalDocument2['default'].body;

      event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // Handle key presses
    event.which = event.charCode || event.keyCode;

    // Fix button for mouse clicks:
    // 0 == left; 1 == middle; 2 == right
    if (event.button != null) {
      event.button = event.button & 1 ? 0 : event.button & 4 ? 1 : event.button & 2 ? 2 : 0;
    }
  }

  // Returns fixed-up instance
  return event;
}

/**
 * Clean up the listener cache and dispatchers
*
 * @param  {Element|Object} elem Element to clean up
 * @param  {String} type Type of event to clean up
 * @private
 * @method _cleanUpEvents
 */
function _cleanUpEvents(elem, type) {
  var data = Dom.getElData(elem);

  // Remove the events of a particular type if there are none left
  if (data.handlers[type].length === 0) {
    delete data.handlers[type];
    // data.handlers[type] = null;
    // Setting to null was causing an error with data.handlers

    // Remove the meta-handler from the element
    if (elem.removeEventListener) {
      elem.removeEventListener(type, data.dispatcher, false);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + type, data.dispatcher);
    }
  }

  // Remove the events object if there are no types left
  if (Object.getOwnPropertyNames(data.handlers).length <= 0) {
    delete data.handlers;
    delete data.dispatcher;
    delete data.disabled;
  }

  // Finally remove the element data if there is no data left
  if (Object.getOwnPropertyNames(data).length === 0) {
    Dom.removeElData(elem);
  }
}

/**
 * Loops through an array of event types and calls the requested method for each type.
 *
 * @param  {Function} fn   The event method we want to use.
 * @param  {Element|Object} elem Element or object to bind listeners to
 * @param  {String}   type Type of event to bind to.
 * @param  {Function} callback   Event listener.
 * @private
 * @function _handleMultipleEvents
 */
function _handleMultipleEvents(fn, elem, types, callback) {
  types.forEach(function (type) {
    //Call the event method for each one of the types
    fn(elem, type, callback);
  });
}

},{"./dom.js":134,"./guid.js":138,"global/document":1,"global/window":2}],136:[function(_dereq_,module,exports){
/**
 * @file fn.js
 */
'use strict';

exports.__esModule = true;

var _guidJs = _dereq_('./guid.js');

/**
 * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
 * It also stores a unique id on the function so it can be easily removed from events
 *
 * @param  {*}   context The object to bind as scope
 * @param  {Function} fn      The function to be bound to a scope
 * @param  {Number=}   uid     An optional unique ID for the function to be set
 * @return {Function}
 * @private
 * @method bind
 */
var bind = function bind(context, fn, uid) {
  // Make sure the function has a unique ID
  if (!fn.guid) {
    fn.guid = _guidJs.newGUID();
  }

  // Create the new function that changes the context
  var ret = function ret() {
    return fn.apply(context, arguments);
  };

  // Allow for the ability to individualize this function
  // Needed in the case where multiple objects might share the same prototype
  // IF both items add an event listener with the same function, then you try to remove just one
  // it will remove both because they both have the same guid.
  // when using this, you need to use the bind method when you remove the listener as well.
  // currently used in text tracks
  ret.guid = uid ? uid + '_' + fn.guid : fn.guid;

  return ret;
};
exports.bind = bind;

},{"./guid.js":138}],137:[function(_dereq_,module,exports){
/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */
'use strict';

exports.__esModule = true;
function formatTime(seconds) {
  var guide = arguments.length <= 1 || arguments[1] === undefined ? seconds : arguments[1];
  return (function () {
    seconds = seconds < 0 ? 0 : seconds;
    var s = Math.floor(seconds % 60);
    var m = Math.floor(seconds / 60 % 60);
    var h = Math.floor(seconds / 3600);
    var gm = Math.floor(guide / 60 % 60);
    var gh = Math.floor(guide / 3600);

    // handle invalid times
    if (isNaN(seconds) || seconds === Infinity) {
      // '-' is false for all relational operators (e.g. <, >=) so this setting
      // will add the minimum number of fields specified by the guide
      h = m = s = '-';
    }

    // Check if we need to show hours
    h = h > 0 || gh > 0 ? h + ':' : '';

    // If hours are showing, we may need to add a leading zero.
    // Always show at least one digit of minutes.
    m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

    // Check if leading zero is need for seconds
    s = s < 10 ? '0' + s : s;

    return h + m + s;
  })();
}

exports['default'] = formatTime;
module.exports = exports['default'];

},{}],138:[function(_dereq_,module,exports){
/**
 * @file guid.js
 *
 * Unique ID for an element or function
 * @type {Number}
 * @private
 */
"use strict";

exports.__esModule = true;
exports.newGUID = newGUID;
var _guid = 1;

/**
 * Get the next unique ID
 *
 * @return {String} 
 * @function newGUID
 */

function newGUID() {
  return _guid++;
}

},{}],139:[function(_dereq_,module,exports){
/**
 * @file log.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

/**
 * Log plain debug messages
 */
var log = function log() {
  _logType(null, arguments);
};

/**
 * Keep a history of log messages
 * @type {Array}
 */
log.history = [];

/**
 * Log error messages
 */
log.error = function () {
  _logType('error', arguments);
};

/**
 * Log warning messages
 */
log.warn = function () {
  _logType('warn', arguments);
};

/**
 * Log messages to the console and history based on the type of message
 *
 * @param  {String} type The type of message, or `null` for `log`
 * @param  {Object} args The args to be passed to the log
 * @private
 * @method _logType
 */
function _logType(type, args) {
  // convert args to an array to get array functions
  var argsArray = Array.prototype.slice.call(args);
  // if there's no console then don't try to output messages
  // they will still be stored in log.history
  // Was setting these once outside of this function, but containing them
  // in the function makes it easier to test cases where console doesn't exist
  var noop = function noop() {};

  var console = _globalWindow2['default']['console'] || {
    'log': noop,
    'warn': noop,
    'error': noop
  };

  if (type) {
    // add the type to the front of the message
    argsArray.unshift(type.toUpperCase() + ':');
  } else {
    // default to log with no prefix
    type = 'log';
  }

  // add to history
  log.history.push(argsArray);

  // add console prefix after adding to history
  argsArray.unshift('VIDEOJS:');

  // call appropriate log function
  if (console[type].apply) {
    console[type].apply(console, argsArray);
  } else {
    // ie8 doesn't allow error.apply, but it will just join() the array anyway
    console[type](argsArray.join(' '));
  }
}

exports['default'] = log;
module.exports = exports['default'];

},{"global/window":2}],140:[function(_dereq_,module,exports){
/**
 * @file merge-options.js
 */
'use strict';

exports.__esModule = true;
exports['default'] = mergeOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashCompatObjectMerge = _dereq_('lodash-compat/object/merge');

var _lodashCompatObjectMerge2 = _interopRequireDefault(_lodashCompatObjectMerge);

function isPlain(obj) {
  return !!obj && typeof obj === 'object' && obj.toString() === '[object Object]' && obj.constructor === Object;
}

/**
 * Merge customizer. video.js simply overwrites non-simple objects
 * (like arrays) instead of attempting to overlay them.
 * @see https://lodash.com/docs#merge
 */
var customizer = function customizer(destination, source) {
  // If we're not working with a plain object, copy the value as is
  // If source is an array, for instance, it will replace destination
  if (!isPlain(source)) {
    return source;
  }

  // If the new value is a plain object but the first object value is not
  // we need to create a new object for the first object to merge with.
  // This makes it consistent with how merge() works by default
  // and also protects from later changes the to first object affecting
  // the second object's values.
  if (!isPlain(destination)) {
    return mergeOptions(source);
  }
};

/**
 * Merge one or more options objects, recursively merging **only**
 * plain object properties.  Previously `deepMerge`.
 *
 * @param  {...Object} source One or more objects to merge
 * @returns {Object}          a new object that is the union of all
 * provided objects
 * @function mergeOptions
 */

function mergeOptions() {
  // contruct the call dynamically to handle the variable number of
  // objects to merge
  var args = Array.prototype.slice.call(arguments);

  // unshift an empty object into the front of the call as the target
  // of the merge
  args.unshift({});

  // customize conflict resolution to match our historical merge behavior
  args.push(customizer);

  _lodashCompatObjectMerge2['default'].apply(null, args);

  // return the mutated result object
  return args[0];
}

module.exports = exports['default'];

},{"lodash-compat/object/merge":40}],141:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var createStyleElement = function createStyleElement(className) {
  var style = _globalDocument2['default'].createElement('style');
  style.className = className;

  return style;
};

exports.createStyleElement = createStyleElement;
var setTextContent = function setTextContent(el, content) {
  if (el.styleSheet) {
    el.styleSheet.cssText = content;
  } else {
    el.textContent = content;
  }
};
exports.setTextContent = setTextContent;

},{"global/document":1}],142:[function(_dereq_,module,exports){
'use strict';

exports.__esModule = true;
exports.createTimeRanges = createTimeRanges;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _logJs = _dereq_('./log.js');

var _logJs2 = _interopRequireDefault(_logJs);

/**
 * @file time-ranges.js
 *
 * Should create a fake TimeRange object
 * Mimics an HTML5 time range instance, which has functions that
 * return the start and end times for a range
 * TimeRanges are returned by the buffered() method
 *
 * @param  {(Number|Array)} Start of a single range or an array of ranges
 * @param  {Number} End of a single range
 * @private
 * @method createTimeRanges
 */

function createTimeRanges(start, end) {
  if (Array.isArray(start)) {
    return createTimeRangesObj(start);
  } else if (start === undefined || end === undefined) {
    return createTimeRangesObj();
  }
  return createTimeRangesObj([[start, end]]);
}

exports.createTimeRange = createTimeRanges;

function createTimeRangesObj(ranges) {
  if (ranges === undefined || ranges.length === 0) {
    return {
      length: 0,
      start: function start() {
        throw new Error('This TimeRanges object is empty');
      },
      end: function end() {
        throw new Error('This TimeRanges object is empty');
      }
    };
  }
  return {
    length: ranges.length,
    start: getRange.bind(null, 'start', 0, ranges),
    end: getRange.bind(null, 'end', 1, ranges)
  };
}

function getRange(fnName, valueIndex, ranges, rangeIndex) {
  if (rangeIndex === undefined) {
    _logJs2['default'].warn('DEPRECATED: Function \'' + fnName + '\' on \'TimeRanges\' called without an index argument.');
    rangeIndex = 0;
  }
  rangeCheck(fnName, rangeIndex, ranges.length - 1);
  return ranges[rangeIndex][valueIndex];
}

function rangeCheck(fnName, index, maxIndex) {
  if (index < 0 || index > maxIndex) {
    throw new Error('Failed to execute \'' + fnName + '\' on \'TimeRanges\': The index provided (' + index + ') is greater than or equal to the maximum bound (' + maxIndex + ').');
  }
}

},{"./log.js":139}],143:[function(_dereq_,module,exports){
/**
 * @file to-title-case.js
 *
 * Uppercase the first letter of a string
 *
 * @param  {String} string String to be uppercased
 * @return {String}
 * @private
 * @method toTitleCase
 */
"use strict";

exports.__esModule = true;
function toTitleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

exports["default"] = toTitleCase;
module.exports = exports["default"];

},{}],144:[function(_dereq_,module,exports){
/**
 * @file url.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

/**
 * Resolve and parse the elements of a URL
 *
 * @param  {String} url The url to parse
 * @return {Object}     An object of url details
 * @method parseUrl
 */
var parseUrl = function parseUrl(url) {
  var props = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'];

  // add the url to an anchor and let the browser parse the URL
  var a = _globalDocument2['default'].createElement('a');
  a.href = url;

  // IE8 (and 9?) Fix
  // ie8 doesn't parse the URL correctly until the anchor is actually
  // added to the body, and an innerHTML is needed to trigger the parsing
  var addToBody = a.host === '' && a.protocol !== 'file:';
  var div = undefined;
  if (addToBody) {
    div = _globalDocument2['default'].createElement('div');
    div.innerHTML = '<a href="' + url + '"></a>';
    a = div.firstChild;
    // prevent the div from affecting layout
    div.setAttribute('style', 'display:none; position:absolute;');
    _globalDocument2['default'].body.appendChild(div);
  }

  // Copy the specific URL properties to a new object
  // This is also needed for IE8 because the anchor loses its
  // properties when it's removed from the dom
  var details = {};
  for (var i = 0; i < props.length; i++) {
    details[props[i]] = a[props[i]];
  }

  // IE9 adds the port to the host property unlike everyone else. If
  // a port identifier is added for standard ports, strip it.
  if (details.protocol === 'http:') {
    details.host = details.host.replace(/:80$/, '');
  }
  if (details.protocol === 'https:') {
    details.host = details.host.replace(/:443$/, '');
  }

  if (addToBody) {
    _globalDocument2['default'].body.removeChild(div);
  }

  return details;
};

exports.parseUrl = parseUrl;
/**
 * Get absolute version of relative URL. Used to tell flash correct URL.
 * http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
 *
 * @param  {String} url URL to make absolute
 * @return {String}     Absolute URL
 * @private
 * @method getAbsoluteURL
 */
var getAbsoluteURL = function getAbsoluteURL(url) {
  // Check if absolute URL
  if (!url.match(/^https?:\/\//)) {
    // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
    var div = _globalDocument2['default'].createElement('div');
    div.innerHTML = '<a href="' + url + '">x</a>';
    url = div.firstChild.href;
  }

  return url;
};

exports.getAbsoluteURL = getAbsoluteURL;
/**
 * Returns the extension of the passed file name. It will return an empty string if you pass an invalid path
 *
 * @param {String}    path    The fileName path like '/path/to/file.mp4'
 * @returns {String}          The extension in lower case or an empty string if no extension could be found.
 * @method getFileExtension
 */
var getFileExtension = function getFileExtension(path) {
  if (typeof path === 'string') {
    var splitPathRe = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i;
    var pathParts = splitPathRe.exec(path);

    if (pathParts) {
      return pathParts.pop().toLowerCase();
    }
  }

  return '';
};

exports.getFileExtension = getFileExtension;
/**
 * Returns whether the url passed is a cross domain request or not.
 *
 * @param {String} url The url to check
 * @return {Boolean}   Whether it is a cross domain request or not
 * @method isCrossOrigin
 */
var isCrossOrigin = function isCrossOrigin(url) {
  var winLoc = _globalWindow2['default'].location;
  var urlInfo = parseUrl(url);

  // IE8 protocol relative urls will return ':' for protocol
  var srcProtocol = urlInfo.protocol === ':' ? winLoc.protocol : urlInfo.protocol;

  // Check if url is for another domain/origin
  // IE8 doesn't know location.origin, so we won't rely on it here
  var crossOrigin = srcProtocol + urlInfo.host !== winLoc.protocol + winLoc.host;

  return crossOrigin;
};
exports.isCrossOrigin = isCrossOrigin;

},{"global/document":1,"global/window":2}],145:[function(_dereq_,module,exports){
/**
 * @file video.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalWindow = _dereq_('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _globalDocument = _dereq_('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _setup = _dereq_('./setup');

var setup = _interopRequireWildcard(_setup);

var _utilsStylesheetJs = _dereq_('./utils/stylesheet.js');

var stylesheet = _interopRequireWildcard(_utilsStylesheetJs);

var _component = _dereq_('./component');

var _component2 = _interopRequireDefault(_component);

var _eventTarget = _dereq_('./event-target');

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _utilsEventsJs = _dereq_('./utils/events.js');

var Events = _interopRequireWildcard(_utilsEventsJs);

var _player = _dereq_('./player');

var _player2 = _interopRequireDefault(_player);

var _pluginsJs = _dereq_('./plugins.js');

var _pluginsJs2 = _interopRequireDefault(_pluginsJs);

var _srcJsUtilsMergeOptionsJs = _dereq_('../../src/js/utils/merge-options.js');

var _srcJsUtilsMergeOptionsJs2 = _interopRequireDefault(_srcJsUtilsMergeOptionsJs);

var _utilsFnJs = _dereq_('./utils/fn.js');

var Fn = _interopRequireWildcard(_utilsFnJs);

var _tracksTextTrackJs = _dereq_('./tracks/text-track.js');

var _tracksTextTrackJs2 = _interopRequireDefault(_tracksTextTrackJs);

var _objectAssign = _dereq_('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utilsTimeRangesJs = _dereq_('./utils/time-ranges.js');

var _utilsFormatTimeJs = _dereq_('./utils/format-time.js');

var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);

var _utilsLogJs = _dereq_('./utils/log.js');

var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);

var _utilsDomJs = _dereq_('./utils/dom.js');

var Dom = _interopRequireWildcard(_utilsDomJs);

var _utilsBrowserJs = _dereq_('./utils/browser.js');

var browser = _interopRequireWildcard(_utilsBrowserJs);

var _utilsUrlJs = _dereq_('./utils/url.js');

var Url = _interopRequireWildcard(_utilsUrlJs);

var _extendJs = _dereq_('./extend.js');

var _extendJs2 = _interopRequireDefault(_extendJs);

var _lodashCompatObjectMerge = _dereq_('lodash-compat/object/merge');

var _lodashCompatObjectMerge2 = _interopRequireDefault(_lodashCompatObjectMerge);

var _utilsCreateDeprecationProxyJs = _dereq_('./utils/create-deprecation-proxy.js');

var _utilsCreateDeprecationProxyJs2 = _interopRequireDefault(_utilsCreateDeprecationProxyJs);

var _xhr = _dereq_('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

// Include the built-in techs

var _techTechJs = _dereq_('./tech/tech.js');

var _techTechJs2 = _interopRequireDefault(_techTechJs);

var _techHtml5Js = _dereq_('./tech/html5.js');

var _techHtml5Js2 = _interopRequireDefault(_techHtml5Js);

var _techFlashJs = _dereq_('./tech/flash.js');

var _techFlashJs2 = _interopRequireDefault(_techFlashJs);

// HTML5 Element Shim for IE8
if (typeof HTMLVideoElement === 'undefined') {
  _globalDocument2['default'].createElement('video');
  _globalDocument2['default'].createElement('audio');
  _globalDocument2['default'].createElement('track');
}

/**
 * Doubles as the main function for users to create a player instance and also
 * the main library object.
 * The `videojs` function can be used to initialize or retrieve a player.
 * ```js
 *     var myPlayer = videojs('my_video_id');
 * ```
 *
 * @param  {String|Element} id      Video element or video element ID
 * @param  {Object=} options        Optional options object for config/settings
 * @param  {Function=} ready        Optional ready callback
 * @return {Player}                 A player instance
 * @mixes videojs
 * @method videojs
 */
var videojs = function videojs(id, options, ready) {
  var tag = undefined; // Element of ID

  // Allow for element or ID to be passed in
  // String ID
  if (typeof id === 'string') {

    // Adjust for jQuery ID syntax
    if (id.indexOf('#') === 0) {
      id = id.slice(1);
    }

    // If a player instance has already been created for this ID return it.
    if (videojs.getPlayers()[id]) {

      // If options or ready funtion are passed, warn
      if (options) {
        _utilsLogJs2['default'].warn('Player "' + id + '" is already initialised. Options will not be applied.');
      }

      if (ready) {
        videojs.getPlayers()[id].ready(ready);
      }

      return videojs.getPlayers()[id];

      // Otherwise get element for ID
    } else {
        tag = Dom.getEl(id);
      }

    // ID is a media element
  } else {
      tag = id;
    }

  // Check for a useable element
  if (!tag || !tag.nodeName) {
    // re: nodeName, could be a box div also
    throw new TypeError('The element or ID supplied is not valid. (videojs)'); // Returns
  }

  // Element may have a player attr referring to an already created player instance.
  // If not, set up a new player and return the instance.
  return tag['player'] || _player2['default'].players[tag.playerId] || new _player2['default'](tag, options, ready);
};

// Add default styles
if (_globalWindow2['default'].VIDEOJS_NO_DYNAMIC_STYLE !== true) {
  var style = Dom.$('.vjs-styles-defaults');

  if (!style) {
    style = stylesheet.createStyleElement('vjs-styles-defaults');
    var head = Dom.$('head');
    head.insertBefore(style, head.firstChild);
    stylesheet.setTextContent(style, '\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ');
  }
}

// Run Auto-load players
// You have to wait at least once in case this script is loaded after your video in the DOM (weird behavior only with minified version)
setup.autoSetupTimeout(1, videojs);

/*
 * Current software version (semver)
 *
 * @type {String}
 */
videojs.VERSION = '5.9.2';

/**
 * The global options object. These are the settings that take effect
 * if no overrides are specified when the player is created.
 *
 * ```js
 *     videojs.options.autoplay = true
 *     // -> all players will autoplay by default
 * ```
 *
 * @type {Object}
 */
videojs.options = _player2['default'].prototype.options_;

/**
 * Get an object with the currently created players, keyed by player ID
 *
 * @return {Object} The created players
 * @mixes videojs
 * @method getPlayers
 */
videojs.getPlayers = function () {
  return _player2['default'].players;
};

/**
 * For backward compatibility, expose players object.
 *
 * @deprecated
 * @memberOf videojs
 * @property {Object|Proxy} players
 */
videojs.players = _utilsCreateDeprecationProxyJs2['default'](_player2['default'].players, {
  get: 'Access to videojs.players is deprecated; use videojs.getPlayers instead',
  set: 'Modification of videojs.players is deprecated'
});

/**
 * Get a component class object by name
 * ```js
 *     var VjsButton = videojs.getComponent('Button');
 *     // Create a new instance of the component
 *     var myButton = new VjsButton(myPlayer);
 * ```
 *
 * @return {Component} Component identified by name
 * @mixes videojs
 * @method getComponent
 */
videojs.getComponent = _component2['default'].getComponent;

/**
 * Register a component so it can referred to by name
 * Used when adding to other
 * components, either through addChild
 * `component.addChild('myComponent')`
 * or through default children options
 * `{ children: ['myComponent'] }`.
 * ```js
 *     // Get a component to subclass
 *     var VjsButton = videojs.getComponent('Button');
 *     // Subclass the component (see 'extend' doc for more info)
 *     var MySpecialButton = videojs.extend(VjsButton, {});
 *     // Register the new component
 *     VjsButton.registerComponent('MySepcialButton', MySepcialButton);
 *     // (optionally) add the new component as a default player child
 *     myPlayer.addChild('MySepcialButton');
 * ```
 * NOTE: You could also just initialize the component before adding.
 * `component.addChild(new MyComponent());`
 *
 * @param {String} The class name of the component
 * @param {Component} The component class
 * @return {Component} The newly registered component
 * @mixes videojs
 * @method registerComponent
 */
videojs.registerComponent = function (name, comp) {
  if (_techTechJs2['default'].isTech(comp)) {
    _utilsLogJs2['default'].warn('The ' + name + ' tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)');
  }

  _component2['default'].registerComponent.call(_component2['default'], name, comp);
};

/**
 * Get a Tech class object by name
 * ```js
 *     var Html5 = videojs.getTech('Html5');
 *     // Create a new instance of the component
 *     var html5 = new Html5(options);
 * ```
 *
 * @return {Tech} Tech identified by name
 * @mixes videojs
 * @method getComponent
 */
videojs.getTech = _techTechJs2['default'].getTech;

/**
 * Register a Tech so it can referred to by name.
 * This is used in the tech order for the player.
 *
 * ```js
 *     // get the Html5 Tech
 *     var Html5 = videojs.getTech('Html5');
 *     var MyTech = videojs.extend(Html5, {});
 *     // Register the new Tech
 *     VjsButton.registerTech('Tech', MyTech);
 *     var player = videojs('myplayer', {
 *       techOrder: ['myTech', 'html5']
 *     });
 * ```
 *
 * @param {String} The class name of the tech
 * @param {Tech} The tech class
 * @return {Tech} The newly registered Tech
 * @mixes videojs
 * @method registerTech
 */
videojs.registerTech = _techTechJs2['default'].registerTech;

/**
 * A suite of browser and device tests
 *
 * @type {Object}
 * @private
 */
videojs.browser = browser;

/**
 * Whether or not the browser supports touch events. Included for backward
 * compatibility with 4.x, but deprecated. Use `videojs.browser.TOUCH_ENABLED`
 * instead going forward.
 *
 * @deprecated
 * @type {Boolean}
 */
videojs.TOUCH_ENABLED = browser.TOUCH_ENABLED;

/**
 * Subclass an existing class
 * Mimics ES6 subclassing with the `extend` keyword
 * ```js
 *     // Create a basic javascript 'class'
 *     function MyClass(name){
 *       // Set a property at initialization
 *       this.myName = name;
 *     }
 *     // Create an instance method
 *     MyClass.prototype.sayMyName = function(){
 *       alert(this.myName);
 *     };
 *     // Subclass the exisitng class and change the name
 *     // when initializing
 *     var MySubClass = videojs.extend(MyClass, {
 *       constructor: function(name) {
 *         // Call the super class constructor for the subclass
 *         MyClass.call(this, name)
 *       }
 *     });
 *     // Create an instance of the new sub class
 *     var myInstance = new MySubClass('John');
 *     myInstance.sayMyName(); // -> should alert "John"
 * ```
 *
 * @param {Function} The Class to subclass
 * @param {Object} An object including instace methods for the new class
 *                   Optionally including a `constructor` function
 * @return {Function} The newly created subclass
 * @mixes videojs
 * @method extend
 */
videojs.extend = _extendJs2['default'];

/**
 * Merge two options objects recursively
 * Performs a deep merge like lodash.merge but **only merges plain objects**
 * (not arrays, elements, anything else)
 * Other values will be copied directly from the second object.
 * ```js
 *     var defaultOptions = {
 *       foo: true,
 *       bar: {
 *         a: true,
 *         b: [1,2,3]
 *       }
 *     };
 *     var newOptions = {
 *       foo: false,
 *       bar: {
 *         b: [4,5,6]
 *       }
 *     };
 *     var result = videojs.mergeOptions(defaultOptions, newOptions);
 *     // result.foo = false;
 *     // result.bar.a = true;
 *     // result.bar.b = [4,5,6];
 * ```
 *
 * @param {Object} defaults  The options object whose values will be overriden
 * @param {Object} overrides The options object with values to override the first
 * @param {Object} etc       Any number of additional options objects
 *
 * @return {Object} a new object with the merged values
 * @mixes videojs
 * @method mergeOptions
 */
videojs.mergeOptions = _srcJsUtilsMergeOptionsJs2['default'];

/**
 * Change the context (this) of a function
 *
 *     videojs.bind(newContext, function(){
 *       this === newContext
 *     });
 *
 * NOTE: as of v5.0 we require an ES5 shim, so you should use the native
 * `function(){}.bind(newContext);` instead of this.
 *
 * @param  {*}        context The object to bind as scope
 * @param  {Function} fn      The function to be bound to a scope
 * @param  {Number=}  uid     An optional unique ID for the function to be set
 * @return {Function}
 */
videojs.bind = Fn.bind;

/**
 * Create a Video.js player plugin
 * Plugins are only initialized when options for the plugin are included
 * in the player options, or the plugin function on the player instance is
 * called.
 * **See the plugin guide in the docs for a more detailed example**
 * ```js
 *     // Make a plugin that alerts when the player plays
 *     videojs.plugin('myPlugin', function(myPluginOptions) {
 *       myPluginOptions = myPluginOptions || {};
 *
 *       var player = this;
 *       var alertText = myPluginOptions.text || 'Player is playing!'
 *
 *       player.on('play', function(){
 *         alert(alertText);
 *       });
 *     });
 *     // USAGE EXAMPLES
 *     // EXAMPLE 1: New player with plugin options, call plugin immediately
 *     var player1 = videojs('idOne', {
 *       myPlugin: {
 *         text: 'Custom text!'
 *       }
 *     });
 *     // Click play
 *     // --> Should alert 'Custom text!'
 *     // EXAMPLE 3: New player, initialize plugin later
 *     var player3 = videojs('idThree');
 *     // Click play
 *     // --> NO ALERT
 *     // Click pause
 *     // Initialize plugin using the plugin function on the player instance
 *     player3.myPlugin({
 *       text: 'Plugin added later!'
 *     });
 *     // Click play
 *     // --> Should alert 'Plugin added later!'
 * ```
 *
 * @param {String} name The plugin name
 * @param {Function} fn The plugin function that will be called with options
 * @mixes videojs
 * @method plugin
 */
videojs.plugin = _pluginsJs2['default'];

/**
 * Adding languages so that they're available to all players.
 * ```js
 *     videojs.addLanguage('es', { 'Hello': 'Hola' });
 * ```
 *
 * @param  {String} code The language code or dictionary property
 * @param  {Object} data The data values to be translated
 * @return {Object} The resulting language dictionary object
 * @mixes videojs
 * @method addLanguage
 */
videojs.addLanguage = function (code, data) {
  var _merge;

  code = ('' + code).toLowerCase();
  return _lodashCompatObjectMerge2['default'](videojs.options.languages, (_merge = {}, _merge[code] = data, _merge))[code];
};

/**
 * Log debug messages.
 *
 * @param {...Object} messages One or more messages to log
 */
videojs.log = _utilsLogJs2['default'];

/**
 * Creates an emulated TimeRange object.
 *
 * @param  {Number|Array} start Start time in seconds or an array of ranges
 * @param  {Number} end   End time in seconds
 * @return {Object}       Fake TimeRange object
 * @method createTimeRange
 */
videojs.createTimeRange = videojs.createTimeRanges = _utilsTimeRangesJs.createTimeRanges;

/**
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @method formatTime
 */
videojs.formatTime = _utilsFormatTimeJs2['default'];

/**
 * Resolve and parse the elements of a URL
 *
 * @param  {String} url The url to parse
 * @return {Object}     An object of url details
 * @method parseUrl
 */
videojs.parseUrl = Url.parseUrl;

/**
 * Returns whether the url passed is a cross domain request or not.
 *
 * @param {String} url The url to check
 * @return {Boolean}   Whether it is a cross domain request or not
 * @method isCrossOrigin
 */
videojs.isCrossOrigin = Url.isCrossOrigin;

/**
 * Event target class.
 *
 * @type {Function}
 */
videojs.EventTarget = _eventTarget2['default'];

/**
 * Add an event listener to element
 * It stores the handler function in a separate cache object
 * and adds a generic handler to the element's event,
 * along with a unique id (guid) to the element.
 *
 * @param  {Element|Object}   elem Element or object to bind listeners to
 * @param  {String|Array}   type Type of event to bind to.
 * @param  {Function} fn   Event listener.
 * @method on
 */
videojs.on = Events.on;

/**
 * Trigger a listener only once for an event
 *
 * @param  {Element|Object}   elem Element or object to
 * @param  {String|Array}   type Name/type of event
 * @param  {Function} fn Event handler function
 * @method one
 */
videojs.one = Events.one;

/**
 * Removes event listeners from an element
 *
 * @param  {Element|Object}   elem Object to remove listeners from
 * @param  {String|Array=}   type Type of listener to remove. Don't include to remove all events from element.
 * @param  {Function} fn   Specific listener to remove. Don't include to remove listeners for an event type.
 * @method off
 */
videojs.off = Events.off;

/**
 * Trigger an event for an element
 *
 * @param  {Element|Object}      elem  Element to trigger an event on
 * @param  {Event|Object|String} event A string (the type) or an event object with a type attribute
 * @param  {Object} [hash] data hash to pass along with the event
 * @return {Boolean=} Returned only if default was prevented
 * @method trigger
 */
videojs.trigger = Events.trigger;

/**
 * A cross-browser XMLHttpRequest wrapper. Here's a simple example:
 *
 *     videojs.xhr({
 *       body: someJSONString,
 *       uri: "/foo",
 *       headers: {
 *         "Content-Type": "application/json"
 *       }
 *     }, function (err, resp, body) {
 *       // check resp.statusCode
 *     });
 *
 * Check out the [full
 * documentation](https://github.com/Raynos/xhr/blob/v2.1.0/README.md)
 * for more options.
 *
 * @param {Object} options settings for the request.
 * @return {XMLHttpRequest|XDomainRequest} the request object.
 * @see https://github.com/Raynos/xhr
 */
videojs.xhr = _xhr2['default'];

/**
 * TextTrack class
 *
 * @type {Function}
 */
videojs.TextTrack = _tracksTextTrackJs2['default'];

/**
 * Determines, via duck typing, whether or not a value is a DOM element.
 *
 * @method isEl
 * @param  {Mixed} value
 * @return {Boolean}
 */
videojs.isEl = Dom.isEl;

/**
 * Determines, via duck typing, whether or not a value is a text node.
 *
 * @method isTextNode
 * @param  {Mixed} value
 * @return {Boolean}
 */
videojs.isTextNode = Dom.isTextNode;

/**
 * Creates an element and applies properties.
 *
 * @method createEl
 * @param  {String} [tagName='div'] Name of tag to be created.
 * @param  {Object} [properties={}] Element properties to be applied.
 * @param  {Object} [attributes={}] Element attributes to be applied.
 * @return {Element}
 */
videojs.createEl = Dom.createEl;

/**
 * Check if an element has a CSS class
 *
 * @method hasClass
 * @param {Element} element Element to check
 * @param {String} classToCheck Classname to check
 */
videojs.hasClass = Dom.hasElClass;

/**
 * Add a CSS class name to an element
 *
 * @method addClass
 * @param {Element} element    Element to add class name to
 * @param {String} classToAdd Classname to add
 */
videojs.addClass = Dom.addElClass;

/**
 * Remove a CSS class name from an element
 *
 * @method removeClass
 * @param {Element} element    Element to remove from class name
 * @param {String} classToRemove Classname to remove
 */
videojs.removeClass = Dom.removeElClass;

/**
 * Adds or removes a CSS class name on an element depending on an optional
 * condition or the presence/absence of the class name.
 *
 * @method toggleElClass
 * @param  {Element} element
 * @param  {String} classToToggle
 * @param  {Boolean|Function} [predicate]
 *         Can be a function that returns a Boolean. If `true`, the class
 *         will be added; if `false`, the class will be removed. If not
 *         given, the class will be added if not present and vice versa.
 */
videojs.toggleClass = Dom.toggleElClass;

/**
 * Apply attributes to an HTML element.
 *
 * @method setAttributes
 * @param  {Element} el         Target element.
 * @param  {Object=} attributes Element attributes to be applied.
 */
videojs.setAttributes = Dom.setElAttributes;

/**
 * Get an element's attribute values, as defined on the HTML tag
 * Attributes are not the same as properties. They're defined on the tag
 * or with setAttribute (which shouldn't be used with HTML)
 * This will return true or false for boolean attributes.
 *
 * @method getAttributes
 * @param  {Element} tag Element from which to get tag attributes
 * @return {Object}
 */
videojs.getAttributes = Dom.getElAttributes;

/**
 * Empties the contents of an element.
 *
 * @method emptyEl
 * @param  {Element} el
 * @return {Element}
 */
videojs.emptyEl = Dom.emptyEl;

/**
 * Normalizes and appends content to an element.
 *
 * The content for an element can be passed in multiple types and
 * combinations, whose behavior is as follows:
 *
 * - String
 *   Normalized into a text node.
 *
 * - Element, TextNode
 *   Passed through.
 *
 * - Array
 *   A one-dimensional array of strings, elements, nodes, or functions (which
 *   return single strings, elements, or nodes).
 *
 * - Function
 *   If the sole argument, is expected to produce a string, element,
 *   node, or array.
 *
 * @method appendContent
 * @param  {Element} el
 * @param  {String|Element|TextNode|Array|Function} content
 * @return {Element}
 */
videojs.appendContent = Dom.appendContent;

/**
 * Normalizes and inserts content into an element; this is identical to
 * `appendContent()`, except it empties the element first.
 *
 * The content for an element can be passed in multiple types and
 * combinations, whose behavior is as follows:
 *
 * - String
 *   Normalized into a text node.
 *
 * - Element, TextNode
 *   Passed through.
 *
 * - Array
 *   A one-dimensional array of strings, elements, nodes, or functions (which
 *   return single strings, elements, or nodes).
 *
 * - Function
 *   If the sole argument, is expected to produce a string, element,
 *   node, or array.
 *
 * @method insertContent
 * @param  {Element} el
 * @param  {String|Element|TextNode|Array|Function} content
 * @return {Element}
 */
videojs.insertContent = Dom.insertContent;

/*
 * Custom Universal Module Definition (UMD)
 *
 * Video.js will never be a non-browser lib so we can simplify UMD a bunch and
 * still support requirejs and browserify. This also needs to be closure
 * compiler compatible, so string keys are used.
 */
if (typeof define === 'function' && define['amd']) {
  define('videojs', [], function () {
    return videojs;
  });

  // checking that module is an object too because of umdjs/umd#35
} else if (typeof exports === 'object' && typeof module === 'object') {
    module['exports'] = videojs;
  }

exports['default'] = videojs;
module.exports = exports['default'];

},{"../../src/js/utils/merge-options.js":140,"./component":67,"./event-target":101,"./extend.js":102,"./player":110,"./plugins.js":111,"./setup":115,"./tech/flash.js":118,"./tech/html5.js":119,"./tech/tech.js":121,"./tracks/text-track.js":130,"./utils/browser.js":131,"./utils/create-deprecation-proxy.js":133,"./utils/dom.js":134,"./utils/events.js":135,"./utils/fn.js":136,"./utils/format-time.js":137,"./utils/log.js":139,"./utils/stylesheet.js":141,"./utils/time-ranges.js":142,"./utils/url.js":144,"global/document":1,"global/window":2,"lodash-compat/object/merge":40,"object.assign":45,"xhr":56}]},{},[145])(145)
});


//# sourceMappingURL=video.js.map
/* vtt.js - v0.12.1 (https://github.com/mozilla/vtt.js) built on 08-07-2015 */

(function(root) {
  var vttjs = root.vttjs = {};
  var cueShim = vttjs.VTTCue;
  var regionShim = vttjs.VTTRegion;
  var oldVTTCue = root.VTTCue;
  var oldVTTRegion = root.VTTRegion;

  vttjs.shim = function() {
    vttjs.VTTCue = cueShim;
    vttjs.VTTRegion = regionShim;
  };

  vttjs.restore = function() {
    vttjs.VTTCue = oldVTTCue;
    vttjs.VTTRegion = oldVTTRegion;
  };
}(this));

/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, vttjs) {

  var autoKeyword = "auto";
  var directionSetting = {
    "": true,
    "lr": true,
    "rl": true
  };
  var alignSetting = {
    "start": true,
    "middle": true,
    "end": true,
    "left": true,
    "right": true
  };

  function findDirectionSetting(value) {
    if (typeof value !== "string") {
      return false;
    }
    var dir = directionSetting[value.toLowerCase()];
    return dir ? value.toLowerCase() : false;
  }

  function findAlignSetting(value) {
    if (typeof value !== "string") {
      return false;
    }
    var align = alignSetting[value.toLowerCase()];
    return align ? value.toLowerCase() : false;
  }

  function extend(obj) {
    var i = 1;
    for (; i < arguments.length; i++) {
      var cobj = arguments[i];
      for (var p in cobj) {
        obj[p] = cobj[p];
      }
    }

    return obj;
  }

  function VTTCue(startTime, endTime, text) {
    var cue = this;
    var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
    var baseObj = {};

    if (isIE8) {
      cue = document.createElement('custom');
    } else {
      baseObj.enumerable = true;
    }

    /**
     * Shim implementation specific properties. These properties are not in
     * the spec.
     */

    // Lets us know when the VTTCue's data has changed in such a way that we need
    // to recompute its display state. This lets us compute its display state
    // lazily.
    cue.hasBeenReset = false;

    /**
     * VTTCue and TextTrackCue properties
     * http://dev.w3.org/html5/webvtt/#vttcue-interface
     */

    var _id = "";
    var _pauseOnExit = false;
    var _startTime = startTime;
    var _endTime = endTime;
    var _text = text;
    var _region = null;
    var _vertical = "";
    var _snapToLines = true;
    var _line = "auto";
    var _lineAlign = "start";
    var _position = 50;
    var _positionAlign = "middle";
    var _size = 50;
    var _align = "middle";

    Object.defineProperty(cue,
      "id", extend({}, baseObj, {
        get: function() {
          return _id;
        },
        set: function(value) {
          _id = "" + value;
        }
      }));

    Object.defineProperty(cue,
      "pauseOnExit", extend({}, baseObj, {
        get: function() {
          return _pauseOnExit;
        },
        set: function(value) {
          _pauseOnExit = !!value;
        }
      }));

    Object.defineProperty(cue,
      "startTime", extend({}, baseObj, {
        get: function() {
          return _startTime;
        },
        set: function(value) {
          if (typeof value !== "number") {
            throw new TypeError("Start time must be set to a number.");
          }
          _startTime = value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "endTime", extend({}, baseObj, {
        get: function() {
          return _endTime;
        },
        set: function(value) {
          if (typeof value !== "number") {
            throw new TypeError("End time must be set to a number.");
          }
          _endTime = value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "text", extend({}, baseObj, {
        get: function() {
          return _text;
        },
        set: function(value) {
          _text = "" + value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "region", extend({}, baseObj, {
        get: function() {
          return _region;
        },
        set: function(value) {
          _region = value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "vertical", extend({}, baseObj, {
        get: function() {
          return _vertical;
        },
        set: function(value) {
          var setting = findDirectionSetting(value);
          // Have to check for false because the setting an be an empty string.
          if (setting === false) {
            throw new SyntaxError("An invalid or illegal string was specified.");
          }
          _vertical = setting;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "snapToLines", extend({}, baseObj, {
        get: function() {
          return _snapToLines;
        },
        set: function(value) {
          _snapToLines = !!value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "line", extend({}, baseObj, {
        get: function() {
          return _line;
        },
        set: function(value) {
          if (typeof value !== "number" && value !== autoKeyword) {
            throw new SyntaxError("An invalid number or illegal string was specified.");
          }
          _line = value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "lineAlign", extend({}, baseObj, {
        get: function() {
          return _lineAlign;
        },
        set: function(value) {
          var setting = findAlignSetting(value);
          if (!setting) {
            throw new SyntaxError("An invalid or illegal string was specified.");
          }
          _lineAlign = setting;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "position", extend({}, baseObj, {
        get: function() {
          return _position;
        },
        set: function(value) {
          if (value < 0 || value > 100) {
            throw new Error("Position must be between 0 and 100.");
          }
          _position = value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "positionAlign", extend({}, baseObj, {
        get: function() {
          return _positionAlign;
        },
        set: function(value) {
          var setting = findAlignSetting(value);
          if (!setting) {
            throw new SyntaxError("An invalid or illegal string was specified.");
          }
          _positionAlign = setting;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "size", extend({}, baseObj, {
        get: function() {
          return _size;
        },
        set: function(value) {
          if (value < 0 || value > 100) {
            throw new Error("Size must be between 0 and 100.");
          }
          _size = value;
          this.hasBeenReset = true;
        }
      }));

    Object.defineProperty(cue,
      "align", extend({}, baseObj, {
        get: function() {
          return _align;
        },
        set: function(value) {
          var setting = findAlignSetting(value);
          if (!setting) {
            throw new SyntaxError("An invalid or illegal string was specified.");
          }
          _align = setting;
          this.hasBeenReset = true;
        }
      }));

    /**
     * Other <track> spec defined properties
     */

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
    cue.displayState = undefined;

    if (isIE8) {
      return cue;
    }
  }

  /**
   * VTTCue methods
   */

  VTTCue.prototype.getCueAsHTML = function() {
    // Assume WebVTT.convertCueToDOMTree is on the global.
    return WebVTT.convertCueToDOMTree(window, this.text);
  };

  root.VTTCue = root.VTTCue || VTTCue;
  vttjs.VTTCue = VTTCue;
}(this, (this.vttjs || {})));

/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, vttjs) {

  var scrollSetting = {
    "": true,
    "up": true
  };

  function findScrollSetting(value) {
    if (typeof value !== "string") {
      return false;
    }
    var scroll = scrollSetting[value.toLowerCase()];
    return scroll ? value.toLowerCase() : false;
  }

  function isValidPercentValue(value) {
    return typeof value === "number" && (value >= 0 && value <= 100);
  }

  // VTTRegion shim http://dev.w3.org/html5/webvtt/#vttregion-interface
  function VTTRegion() {
    var _width = 100;
    var _lines = 3;
    var _regionAnchorX = 0;
    var _regionAnchorY = 100;
    var _viewportAnchorX = 0;
    var _viewportAnchorY = 100;
    var _scroll = "";

    Object.defineProperties(this, {
      "width": {
        enumerable: true,
        get: function() {
          return _width;
        },
        set: function(value) {
          if (!isValidPercentValue(value)) {
            throw new Error("Width must be between 0 and 100.");
          }
          _width = value;
        }
      },
      "lines": {
        enumerable: true,
        get: function() {
          return _lines;
        },
        set: function(value) {
          if (typeof value !== "number") {
            throw new TypeError("Lines must be set to a number.");
          }
          _lines = value;
        }
      },
      "regionAnchorY": {
        enumerable: true,
        get: function() {
          return _regionAnchorY;
        },
        set: function(value) {
          if (!isValidPercentValue(value)) {
            throw new Error("RegionAnchorX must be between 0 and 100.");
          }
          _regionAnchorY = value;
        }
      },
      "regionAnchorX": {
        enumerable: true,
        get: function() {
          return _regionAnchorX;
        },
        set: function(value) {
          if(!isValidPercentValue(value)) {
            throw new Error("RegionAnchorY must be between 0 and 100.");
          }
          _regionAnchorX = value;
        }
      },
      "viewportAnchorY": {
        enumerable: true,
        get: function() {
          return _viewportAnchorY;
        },
        set: function(value) {
          if (!isValidPercentValue(value)) {
            throw new Error("ViewportAnchorY must be between 0 and 100.");
          }
          _viewportAnchorY = value;
        }
      },
      "viewportAnchorX": {
        enumerable: true,
        get: function() {
          return _viewportAnchorX;
        },
        set: function(value) {
          if (!isValidPercentValue(value)) {
            throw new Error("ViewportAnchorX must be between 0 and 100.");
          }
          _viewportAnchorX = value;
        }
      },
      "scroll": {
        enumerable: true,
        get: function() {
          return _scroll;
        },
        set: function(value) {
          var setting = findScrollSetting(value);
          // Have to check for false as an empty string is a legal value.
          if (setting === false) {
            throw new SyntaxError("An invalid or illegal string was specified.");
          }
          _scroll = setting;
        }
      }
    });
  }

  root.VTTRegion = root.VTTRegion || VTTRegion;
  vttjs.VTTRegion = VTTRegion;
}(this, (this.vttjs || {})));

/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

(function(global) {

  var _objCreate = Object.create || (function() {
    function F() {}
    return function(o) {
      if (arguments.length !== 1) {
        throw new Error('Object.create shim only accepts one parameter.');
      }
      F.prototype = o;
      return new F();
    };
  })();

  // Creates a new ParserError object from an errorData object. The errorData
  // object should have default code and message properties. The default message
  // property can be overriden by passing in a message parameter.
  // See ParsingError.Errors below for acceptable errors.
  function ParsingError(errorData, message) {
    this.name = "ParsingError";
    this.code = errorData.code;
    this.message = message || errorData.message;
  }
  ParsingError.prototype = _objCreate(Error.prototype);
  ParsingError.prototype.constructor = ParsingError;

  // ParsingError metadata for acceptable ParsingErrors.
  ParsingError.Errors = {
    BadSignature: {
      code: 0,
      message: "Malformed WebVTT signature."
    },
    BadTimeStamp: {
      code: 1,
      message: "Malformed time stamp."
    }
  };

  // Try to parse input as a time stamp.
  function parseTimeStamp(input) {

    function computeSeconds(h, m, s, f) {
      return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
    }

    var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
    if (!m) {
      return null;
    }

    if (m[3]) {
      // Timestamp takes the form of [hours]:[minutes]:[seconds].[milliseconds]
      return computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]);
    } else if (m[1] > 59) {
      // Timestamp takes the form of [hours]:[minutes].[milliseconds]
      // First position is hours as it's over 59.
      return computeSeconds(m[1], m[2], 0,  m[4]);
    } else {
      // Timestamp takes the form of [minutes]:[seconds].[milliseconds]
      return computeSeconds(0, m[1], m[2], m[4]);
    }
  }

  // A settings object holds key/value pairs and will ignore anything but the first
  // assignment to a specific key.
  function Settings() {
    this.values = _objCreate(null);
  }

  Settings.prototype = {
    // Only accept the first assignment to any key.
    set: function(k, v) {
      if (!this.get(k) && v !== "") {
        this.values[k] = v;
      }
    },
    // Return the value for a key, or a default value.
    // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
    // a number of possible default values as properties where 'defaultKey' is
    // the key of the property that will be chosen; otherwise it's assumed to be
    // a single value.
    get: function(k, dflt, defaultKey) {
      if (defaultKey) {
        return this.has(k) ? this.values[k] : dflt[defaultKey];
      }
      return this.has(k) ? this.values[k] : dflt;
    },
    // Check whether we have a value for a key.
    has: function(k) {
      return k in this.values;
    },
    // Accept a setting if its one of the given alternatives.
    alt: function(k, v, a) {
      for (var n = 0; n < a.length; ++n) {
        if (v === a[n]) {
          this.set(k, v);
          break;
        }
      }
    },
    // Accept a setting if its a valid (signed) integer.
    integer: function(k, v) {
      if (/^-?\d+$/.test(v)) { // integer
        this.set(k, parseInt(v, 10));
      }
    },
    // Accept a setting if its a valid percentage.
    percent: function(k, v) {
      var m;
      if ((m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/))) {
        v = parseFloat(v);
        if (v >= 0 && v <= 100) {
          this.set(k, v);
          return true;
        }
      }
      return false;
    }
  };

  // Helper function to parse input into groups separated by 'groupDelim', and
  // interprete each group as a key/value pair separated by 'keyValueDelim'.
  function parseOptions(input, callback, keyValueDelim, groupDelim) {
    var groups = groupDelim ? input.split(groupDelim) : [input];
    for (var i in groups) {
      if (typeof groups[i] !== "string") {
        continue;
      }
      var kv = groups[i].split(keyValueDelim);
      if (kv.length !== 2) {
        continue;
      }
      var k = kv[0];
      var v = kv[1];
      callback(k, v);
    }
  }

  function parseCue(input, cue, regionList) {
    // Remember the original input if we need to throw an error.
    var oInput = input;
    // 4.1 WebVTT timestamp
    function consumeTimeStamp() {
      var ts = parseTimeStamp(input);
      if (ts === null) {
        throw new ParsingError(ParsingError.Errors.BadTimeStamp,
                              "Malformed timestamp: " + oInput);
      }
      // Remove time stamp from input.
      input = input.replace(/^[^\sa-zA-Z-]+/, "");
      return ts;
    }

    // 4.4.2 WebVTT cue settings
    function consumeCueSettings(input, cue) {
      var settings = new Settings();

      parseOptions(input, function (k, v) {
        switch (k) {
        case "region":
          // Find the last region we parsed with the same region id.
          for (var i = regionList.length - 1; i >= 0; i--) {
            if (regionList[i].id === v) {
              settings.set(k, regionList[i].region);
              break;
            }
          }
          break;
        case "vertical":
          settings.alt(k, v, ["rl", "lr"]);
          break;
        case "line":
          var vals = v.split(","),
              vals0 = vals[0];
          settings.integer(k, vals0);
          settings.percent(k, vals0) ? settings.set("snapToLines", false) : null;
          settings.alt(k, vals0, ["auto"]);
          if (vals.length === 2) {
            settings.alt("lineAlign", vals[1], ["start", "middle", "end"]);
          }
          break;
        case "position":
          vals = v.split(",");
          settings.percent(k, vals[0]);
          if (vals.length === 2) {
            settings.alt("positionAlign", vals[1], ["start", "middle", "end"]);
          }
          break;
        case "size":
          settings.percent(k, v);
          break;
        case "align":
          settings.alt(k, v, ["start", "middle", "end", "left", "right"]);
          break;
        }
      }, /:/, /\s/);

      // Apply default values for any missing fields.
      cue.region = settings.get("region", null);
      cue.vertical = settings.get("vertical", "");
      cue.line = settings.get("line", "auto");
      cue.lineAlign = settings.get("lineAlign", "start");
      cue.snapToLines = settings.get("snapToLines", true);
      cue.size = settings.get("size", 100);
      cue.align = settings.get("align", "middle");
      cue.position = settings.get("position", {
        start: 0,
        left: 0,
        middle: 50,
        end: 100,
        right: 100
      }, cue.align);
      cue.positionAlign = settings.get("positionAlign", {
        start: "start",
        left: "start",
        middle: "middle",
        end: "end",
        right: "end"
      }, cue.align);
    }

    function skipWhitespace() {
      input = input.replace(/^\s+/, "");
    }

    // 4.1 WebVTT cue timings.
    skipWhitespace();
    cue.startTime = consumeTimeStamp();   // (1) collect cue start time
    skipWhitespace();
    if (input.substr(0, 3) !== "-->") {     // (3) next characters must match "-->"
      throw new ParsingError(ParsingError.Errors.BadTimeStamp,
                             "Malformed time stamp (time stamps must be separated by '-->'): " +
                             oInput);
    }
    input = input.substr(3);
    skipWhitespace();
    cue.endTime = consumeTimeStamp();     // (5) collect cue end time

    // 4.1 WebVTT cue settings list.
    skipWhitespace();
    consumeCueSettings(input, cue);
  }

  var ESCAPE = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&lrm;": "\u200e",
    "&rlm;": "\u200f",
    "&nbsp;": "\u00a0"
  };

  var TAG_NAME = {
    c: "span",
    i: "i",
    b: "b",
    u: "u",
    ruby: "ruby",
    rt: "rt",
    v: "span",
    lang: "span"
  };

  var TAG_ANNOTATION = {
    v: "title",
    lang: "lang"
  };

  var NEEDS_PARENT = {
    rt: "ruby"
  };

  // Parse content into a document fragment.
  function parseContent(window, input) {
    function nextToken() {
      // Check for end-of-string.
      if (!input) {
        return null;
      }

      // Consume 'n' characters from the input.
      function consume(result) {
        input = input.substr(result.length);
        return result;
      }

      var m = input.match(/^([^<]*)(<[^>]+>?)?/);
      // If there is some text before the next tag, return it, otherwise return
      // the tag.
      return consume(m[1] ? m[1] : m[2]);
    }

    // Unescape a string 's'.
    function unescape1(e) {
      return ESCAPE[e];
    }
    function unescape(s) {
      while ((m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/))) {
        s = s.replace(m[0], unescape1);
      }
      return s;
    }

    function shouldAdd(current, element) {
      return !NEEDS_PARENT[element.localName] ||
             NEEDS_PARENT[element.localName] === current.localName;
    }

    // Create an element for this tag.
    function createElement(type, annotation) {
      var tagName = TAG_NAME[type];
      if (!tagName) {
        return null;
      }
      var element = window.document.createElement(tagName);
      element.localName = tagName;
      var name = TAG_ANNOTATION[type];
      if (name && annotation) {
        element[name] = annotation.trim();
      }
      return element;
    }

    var rootDiv = window.document.createElement("div"),
        current = rootDiv,
        t,
        tagStack = [];

    while ((t = nextToken()) !== null) {
      if (t[0] === '<') {
        if (t[1] === "/") {
          // If the closing tag matches, move back up to the parent node.
          if (tagStack.length &&
              tagStack[tagStack.length - 1] === t.substr(2).replace(">", "")) {
            tagStack.pop();
            current = current.parentNode;
          }
          // Otherwise just ignore the end tag.
          continue;
        }
        var ts = parseTimeStamp(t.substr(1, t.length - 2));
        var node;
        if (ts) {
          // Timestamps are lead nodes as well.
          node = window.document.createProcessingInstruction("timestamp", ts);
          current.appendChild(node);
          continue;
        }
        var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
        // If we can't parse the tag, skip to the next tag.
        if (!m) {
          continue;
        }
        // Try to construct an element, and ignore the tag if we couldn't.
        node = createElement(m[1], m[3]);
        if (!node) {
          continue;
        }
        // Determine if the tag should be added based on the context of where it
        // is placed in the cuetext.
        if (!shouldAdd(current, node)) {
          continue;
        }
        // Set the class list (as a list of classes, separated by space).
        if (m[2]) {
          node.className = m[2].substr(1).replace('.', ' ');
        }
        // Append the node to the current node, and enter the scope of the new
        // node.
        tagStack.push(m[1]);
        current.appendChild(node);
        current = node;
        continue;
      }

      // Text nodes are leaf nodes.
      current.appendChild(window.document.createTextNode(unescape(t)));
    }

    return rootDiv;
  }

  // This is a list of all the Unicode characters that have a strong
  // right-to-left category. What this means is that these characters are
  // written right-to-left for sure. It was generated by pulling all the strong
  // right-to-left characters out of the Unicode data table. That table can
  // found at: http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
  var strongRTLChars = [0x05BE, 0x05C0, 0x05C3, 0x05C6, 0x05D0, 0x05D1,
      0x05D2, 0x05D3, 0x05D4, 0x05D5, 0x05D6, 0x05D7, 0x05D8, 0x05D9, 0x05DA,
      0x05DB, 0x05DC, 0x05DD, 0x05DE, 0x05DF, 0x05E0, 0x05E1, 0x05E2, 0x05E3,
      0x05E4, 0x05E5, 0x05E6, 0x05E7, 0x05E8, 0x05E9, 0x05EA, 0x05F0, 0x05F1,
      0x05F2, 0x05F3, 0x05F4, 0x0608, 0x060B, 0x060D, 0x061B, 0x061E, 0x061F,
      0x0620, 0x0621, 0x0622, 0x0623, 0x0624, 0x0625, 0x0626, 0x0627, 0x0628,
      0x0629, 0x062A, 0x062B, 0x062C, 0x062D, 0x062E, 0x062F, 0x0630, 0x0631,
      0x0632, 0x0633, 0x0634, 0x0635, 0x0636, 0x0637, 0x0638, 0x0639, 0x063A,
      0x063B, 0x063C, 0x063D, 0x063E, 0x063F, 0x0640, 0x0641, 0x0642, 0x0643,
      0x0644, 0x0645, 0x0646, 0x0647, 0x0648, 0x0649, 0x064A, 0x066D, 0x066E,
      0x066F, 0x0671, 0x0672, 0x0673, 0x0674, 0x0675, 0x0676, 0x0677, 0x0678,
      0x0679, 0x067A, 0x067B, 0x067C, 0x067D, 0x067E, 0x067F, 0x0680, 0x0681,
      0x0682, 0x0683, 0x0684, 0x0685, 0x0686, 0x0687, 0x0688, 0x0689, 0x068A,
      0x068B, 0x068C, 0x068D, 0x068E, 0x068F, 0x0690, 0x0691, 0x0692, 0x0693,
      0x0694, 0x0695, 0x0696, 0x0697, 0x0698, 0x0699, 0x069A, 0x069B, 0x069C,
      0x069D, 0x069E, 0x069F, 0x06A0, 0x06A1, 0x06A2, 0x06A3, 0x06A4, 0x06A5,
      0x06A6, 0x06A7, 0x06A8, 0x06A9, 0x06AA, 0x06AB, 0x06AC, 0x06AD, 0x06AE,
      0x06AF, 0x06B0, 0x06B1, 0x06B2, 0x06B3, 0x06B4, 0x06B5, 0x06B6, 0x06B7,
      0x06B8, 0x06B9, 0x06BA, 0x06BB, 0x06BC, 0x06BD, 0x06BE, 0x06BF, 0x06C0,
      0x06C1, 0x06C2, 0x06C3, 0x06C4, 0x06C5, 0x06C6, 0x06C7, 0x06C8, 0x06C9,
      0x06CA, 0x06CB, 0x06CC, 0x06CD, 0x06CE, 0x06CF, 0x06D0, 0x06D1, 0x06D2,
      0x06D3, 0x06D4, 0x06D5, 0x06E5, 0x06E6, 0x06EE, 0x06EF, 0x06FA, 0x06FB,
      0x06FC, 0x06FD, 0x06FE, 0x06FF, 0x0700, 0x0701, 0x0702, 0x0703, 0x0704,
      0x0705, 0x0706, 0x0707, 0x0708, 0x0709, 0x070A, 0x070B, 0x070C, 0x070D,
      0x070F, 0x0710, 0x0712, 0x0713, 0x0714, 0x0715, 0x0716, 0x0717, 0x0718,
      0x0719, 0x071A, 0x071B, 0x071C, 0x071D, 0x071E, 0x071F, 0x0720, 0x0721,
      0x0722, 0x0723, 0x0724, 0x0725, 0x0726, 0x0727, 0x0728, 0x0729, 0x072A,
      0x072B, 0x072C, 0x072D, 0x072E, 0x072F, 0x074D, 0x074E, 0x074F, 0x0750,
      0x0751, 0x0752, 0x0753, 0x0754, 0x0755, 0x0756, 0x0757, 0x0758, 0x0759,
      0x075A, 0x075B, 0x075C, 0x075D, 0x075E, 0x075F, 0x0760, 0x0761, 0x0762,
      0x0763, 0x0764, 0x0765, 0x0766, 0x0767, 0x0768, 0x0769, 0x076A, 0x076B,
      0x076C, 0x076D, 0x076E, 0x076F, 0x0770, 0x0771, 0x0772, 0x0773, 0x0774,
      0x0775, 0x0776, 0x0777, 0x0778, 0x0779, 0x077A, 0x077B, 0x077C, 0x077D,
      0x077E, 0x077F, 0x0780, 0x0781, 0x0782, 0x0783, 0x0784, 0x0785, 0x0786,
      0x0787, 0x0788, 0x0789, 0x078A, 0x078B, 0x078C, 0x078D, 0x078E, 0x078F,
      0x0790, 0x0791, 0x0792, 0x0793, 0x0794, 0x0795, 0x0796, 0x0797, 0x0798,
      0x0799, 0x079A, 0x079B, 0x079C, 0x079D, 0x079E, 0x079F, 0x07A0, 0x07A1,
      0x07A2, 0x07A3, 0x07A4, 0x07A5, 0x07B1, 0x07C0, 0x07C1, 0x07C2, 0x07C3,
      0x07C4, 0x07C5, 0x07C6, 0x07C7, 0x07C8, 0x07C9, 0x07CA, 0x07CB, 0x07CC,
      0x07CD, 0x07CE, 0x07CF, 0x07D0, 0x07D1, 0x07D2, 0x07D3, 0x07D4, 0x07D5,
      0x07D6, 0x07D7, 0x07D8, 0x07D9, 0x07DA, 0x07DB, 0x07DC, 0x07DD, 0x07DE,
      0x07DF, 0x07E0, 0x07E1, 0x07E2, 0x07E3, 0x07E4, 0x07E5, 0x07E6, 0x07E7,
      0x07E8, 0x07E9, 0x07EA, 0x07F4, 0x07F5, 0x07FA, 0x0800, 0x0801, 0x0802,
      0x0803, 0x0804, 0x0805, 0x0806, 0x0807, 0x0808, 0x0809, 0x080A, 0x080B,
      0x080C, 0x080D, 0x080E, 0x080F, 0x0810, 0x0811, 0x0812, 0x0813, 0x0814,
      0x0815, 0x081A, 0x0824, 0x0828, 0x0830, 0x0831, 0x0832, 0x0833, 0x0834,
      0x0835, 0x0836, 0x0837, 0x0838, 0x0839, 0x083A, 0x083B, 0x083C, 0x083D,
      0x083E, 0x0840, 0x0841, 0x0842, 0x0843, 0x0844, 0x0845, 0x0846, 0x0847,
      0x0848, 0x0849, 0x084A, 0x084B, 0x084C, 0x084D, 0x084E, 0x084F, 0x0850,
      0x0851, 0x0852, 0x0853, 0x0854, 0x0855, 0x0856, 0x0857, 0x0858, 0x085E,
      0x08A0, 0x08A2, 0x08A3, 0x08A4, 0x08A5, 0x08A6, 0x08A7, 0x08A8, 0x08A9,
      0x08AA, 0x08AB, 0x08AC, 0x200F, 0xFB1D, 0xFB1F, 0xFB20, 0xFB21, 0xFB22,
      0xFB23, 0xFB24, 0xFB25, 0xFB26, 0xFB27, 0xFB28, 0xFB2A, 0xFB2B, 0xFB2C,
      0xFB2D, 0xFB2E, 0xFB2F, 0xFB30, 0xFB31, 0xFB32, 0xFB33, 0xFB34, 0xFB35,
      0xFB36, 0xFB38, 0xFB39, 0xFB3A, 0xFB3B, 0xFB3C, 0xFB3E, 0xFB40, 0xFB41,
      0xFB43, 0xFB44, 0xFB46, 0xFB47, 0xFB48, 0xFB49, 0xFB4A, 0xFB4B, 0xFB4C,
      0xFB4D, 0xFB4E, 0xFB4F, 0xFB50, 0xFB51, 0xFB52, 0xFB53, 0xFB54, 0xFB55,
      0xFB56, 0xFB57, 0xFB58, 0xFB59, 0xFB5A, 0xFB5B, 0xFB5C, 0xFB5D, 0xFB5E,
      0xFB5F, 0xFB60, 0xFB61, 0xFB62, 0xFB63, 0xFB64, 0xFB65, 0xFB66, 0xFB67,
      0xFB68, 0xFB69, 0xFB6A, 0xFB6B, 0xFB6C, 0xFB6D, 0xFB6E, 0xFB6F, 0xFB70,
      0xFB71, 0xFB72, 0xFB73, 0xFB74, 0xFB75, 0xFB76, 0xFB77, 0xFB78, 0xFB79,
      0xFB7A, 0xFB7B, 0xFB7C, 0xFB7D, 0xFB7E, 0xFB7F, 0xFB80, 0xFB81, 0xFB82,
      0xFB83, 0xFB84, 0xFB85, 0xFB86, 0xFB87, 0xFB88, 0xFB89, 0xFB8A, 0xFB8B,
      0xFB8C, 0xFB8D, 0xFB8E, 0xFB8F, 0xFB90, 0xFB91, 0xFB92, 0xFB93, 0xFB94,
      0xFB95, 0xFB96, 0xFB97, 0xFB98, 0xFB99, 0xFB9A, 0xFB9B, 0xFB9C, 0xFB9D,
      0xFB9E, 0xFB9F, 0xFBA0, 0xFBA1, 0xFBA2, 0xFBA3, 0xFBA4, 0xFBA5, 0xFBA6,
      0xFBA7, 0xFBA8, 0xFBA9, 0xFBAA, 0xFBAB, 0xFBAC, 0xFBAD, 0xFBAE, 0xFBAF,
      0xFBB0, 0xFBB1, 0xFBB2, 0xFBB3, 0xFBB4, 0xFBB5, 0xFBB6, 0xFBB7, 0xFBB8,
      0xFBB9, 0xFBBA, 0xFBBB, 0xFBBC, 0xFBBD, 0xFBBE, 0xFBBF, 0xFBC0, 0xFBC1,
      0xFBD3, 0xFBD4, 0xFBD5, 0xFBD6, 0xFBD7, 0xFBD8, 0xFBD9, 0xFBDA, 0xFBDB,
      0xFBDC, 0xFBDD, 0xFBDE, 0xFBDF, 0xFBE0, 0xFBE1, 0xFBE2, 0xFBE3, 0xFBE4,
      0xFBE5, 0xFBE6, 0xFBE7, 0xFBE8, 0xFBE9, 0xFBEA, 0xFBEB, 0xFBEC, 0xFBED,
      0xFBEE, 0xFBEF, 0xFBF0, 0xFBF1, 0xFBF2, 0xFBF3, 0xFBF4, 0xFBF5, 0xFBF6,
      0xFBF7, 0xFBF8, 0xFBF9, 0xFBFA, 0xFBFB, 0xFBFC, 0xFBFD, 0xFBFE, 0xFBFF,
      0xFC00, 0xFC01, 0xFC02, 0xFC03, 0xFC04, 0xFC05, 0xFC06, 0xFC07, 0xFC08,
      0xFC09, 0xFC0A, 0xFC0B, 0xFC0C, 0xFC0D, 0xFC0E, 0xFC0F, 0xFC10, 0xFC11,
      0xFC12, 0xFC13, 0xFC14, 0xFC15, 0xFC16, 0xFC17, 0xFC18, 0xFC19, 0xFC1A,
      0xFC1B, 0xFC1C, 0xFC1D, 0xFC1E, 0xFC1F, 0xFC20, 0xFC21, 0xFC22, 0xFC23,
      0xFC24, 0xFC25, 0xFC26, 0xFC27, 0xFC28, 0xFC29, 0xFC2A, 0xFC2B, 0xFC2C,
      0xFC2D, 0xFC2E, 0xFC2F, 0xFC30, 0xFC31, 0xFC32, 0xFC33, 0xFC34, 0xFC35,
      0xFC36, 0xFC37, 0xFC38, 0xFC39, 0xFC3A, 0xFC3B, 0xFC3C, 0xFC3D, 0xFC3E,
      0xFC3F, 0xFC40, 0xFC41, 0xFC42, 0xFC43, 0xFC44, 0xFC45, 0xFC46, 0xFC47,
      0xFC48, 0xFC49, 0xFC4A, 0xFC4B, 0xFC4C, 0xFC4D, 0xFC4E, 0xFC4F, 0xFC50,
      0xFC51, 0xFC52, 0xFC53, 0xFC54, 0xFC55, 0xFC56, 0xFC57, 0xFC58, 0xFC59,
      0xFC5A, 0xFC5B, 0xFC5C, 0xFC5D, 0xFC5E, 0xFC5F, 0xFC60, 0xFC61, 0xFC62,
      0xFC63, 0xFC64, 0xFC65, 0xFC66, 0xFC67, 0xFC68, 0xFC69, 0xFC6A, 0xFC6B,
      0xFC6C, 0xFC6D, 0xFC6E, 0xFC6F, 0xFC70, 0xFC71, 0xFC72, 0xFC73, 0xFC74,
      0xFC75, 0xFC76, 0xFC77, 0xFC78, 0xFC79, 0xFC7A, 0xFC7B, 0xFC7C, 0xFC7D,
      0xFC7E, 0xFC7F, 0xFC80, 0xFC81, 0xFC82, 0xFC83, 0xFC84, 0xFC85, 0xFC86,
      0xFC87, 0xFC88, 0xFC89, 0xFC8A, 0xFC8B, 0xFC8C, 0xFC8D, 0xFC8E, 0xFC8F,
      0xFC90, 0xFC91, 0xFC92, 0xFC93, 0xFC94, 0xFC95, 0xFC96, 0xFC97, 0xFC98,
      0xFC99, 0xFC9A, 0xFC9B, 0xFC9C, 0xFC9D, 0xFC9E, 0xFC9F, 0xFCA0, 0xFCA1,
      0xFCA2, 0xFCA3, 0xFCA4, 0xFCA5, 0xFCA6, 0xFCA7, 0xFCA8, 0xFCA9, 0xFCAA,
      0xFCAB, 0xFCAC, 0xFCAD, 0xFCAE, 0xFCAF, 0xFCB0, 0xFCB1, 0xFCB2, 0xFCB3,
      0xFCB4, 0xFCB5, 0xFCB6, 0xFCB7, 0xFCB8, 0xFCB9, 0xFCBA, 0xFCBB, 0xFCBC,
      0xFCBD, 0xFCBE, 0xFCBF, 0xFCC0, 0xFCC1, 0xFCC2, 0xFCC3, 0xFCC4, 0xFCC5,
      0xFCC6, 0xFCC7, 0xFCC8, 0xFCC9, 0xFCCA, 0xFCCB, 0xFCCC, 0xFCCD, 0xFCCE,
      0xFCCF, 0xFCD0, 0xFCD1, 0xFCD2, 0xFCD3, 0xFCD4, 0xFCD5, 0xFCD6, 0xFCD7,
      0xFCD8, 0xFCD9, 0xFCDA, 0xFCDB, 0xFCDC, 0xFCDD, 0xFCDE, 0xFCDF, 0xFCE0,
      0xFCE1, 0xFCE2, 0xFCE3, 0xFCE4, 0xFCE5, 0xFCE6, 0xFCE7, 0xFCE8, 0xFCE9,
      0xFCEA, 0xFCEB, 0xFCEC, 0xFCED, 0xFCEE, 0xFCEF, 0xFCF0, 0xFCF1, 0xFCF2,
      0xFCF3, 0xFCF4, 0xFCF5, 0xFCF6, 0xFCF7, 0xFCF8, 0xFCF9, 0xFCFA, 0xFCFB,
      0xFCFC, 0xFCFD, 0xFCFE, 0xFCFF, 0xFD00, 0xFD01, 0xFD02, 0xFD03, 0xFD04,
      0xFD05, 0xFD06, 0xFD07, 0xFD08, 0xFD09, 0xFD0A, 0xFD0B, 0xFD0C, 0xFD0D,
      0xFD0E, 0xFD0F, 0xFD10, 0xFD11, 0xFD12, 0xFD13, 0xFD14, 0xFD15, 0xFD16,
      0xFD17, 0xFD18, 0xFD19, 0xFD1A, 0xFD1B, 0xFD1C, 0xFD1D, 0xFD1E, 0xFD1F,
      0xFD20, 0xFD21, 0xFD22, 0xFD23, 0xFD24, 0xFD25, 0xFD26, 0xFD27, 0xFD28,
      0xFD29, 0xFD2A, 0xFD2B, 0xFD2C, 0xFD2D, 0xFD2E, 0xFD2F, 0xFD30, 0xFD31,
      0xFD32, 0xFD33, 0xFD34, 0xFD35, 0xFD36, 0xFD37, 0xFD38, 0xFD39, 0xFD3A,
      0xFD3B, 0xFD3C, 0xFD3D, 0xFD50, 0xFD51, 0xFD52, 0xFD53, 0xFD54, 0xFD55,
      0xFD56, 0xFD57, 0xFD58, 0xFD59, 0xFD5A, 0xFD5B, 0xFD5C, 0xFD5D, 0xFD5E,
      0xFD5F, 0xFD60, 0xFD61, 0xFD62, 0xFD63, 0xFD64, 0xFD65, 0xFD66, 0xFD67,
      0xFD68, 0xFD69, 0xFD6A, 0xFD6B, 0xFD6C, 0xFD6D, 0xFD6E, 0xFD6F, 0xFD70,
      0xFD71, 0xFD72, 0xFD73, 0xFD74, 0xFD75, 0xFD76, 0xFD77, 0xFD78, 0xFD79,
      0xFD7A, 0xFD7B, 0xFD7C, 0xFD7D, 0xFD7E, 0xFD7F, 0xFD80, 0xFD81, 0xFD82,
      0xFD83, 0xFD84, 0xFD85, 0xFD86, 0xFD87, 0xFD88, 0xFD89, 0xFD8A, 0xFD8B,
      0xFD8C, 0xFD8D, 0xFD8E, 0xFD8F, 0xFD92, 0xFD93, 0xFD94, 0xFD95, 0xFD96,
      0xFD97, 0xFD98, 0xFD99, 0xFD9A, 0xFD9B, 0xFD9C, 0xFD9D, 0xFD9E, 0xFD9F,
      0xFDA0, 0xFDA1, 0xFDA2, 0xFDA3, 0xFDA4, 0xFDA5, 0xFDA6, 0xFDA7, 0xFDA8,
      0xFDA9, 0xFDAA, 0xFDAB, 0xFDAC, 0xFDAD, 0xFDAE, 0xFDAF, 0xFDB0, 0xFDB1,
      0xFDB2, 0xFDB3, 0xFDB4, 0xFDB5, 0xFDB6, 0xFDB7, 0xFDB8, 0xFDB9, 0xFDBA,
      0xFDBB, 0xFDBC, 0xFDBD, 0xFDBE, 0xFDBF, 0xFDC0, 0xFDC1, 0xFDC2, 0xFDC3,
      0xFDC4, 0xFDC5, 0xFDC6, 0xFDC7, 0xFDF0, 0xFDF1, 0xFDF2, 0xFDF3, 0xFDF4,
      0xFDF5, 0xFDF6, 0xFDF7, 0xFDF8, 0xFDF9, 0xFDFA, 0xFDFB, 0xFDFC, 0xFE70,
      0xFE71, 0xFE72, 0xFE73, 0xFE74, 0xFE76, 0xFE77, 0xFE78, 0xFE79, 0xFE7A,
      0xFE7B, 0xFE7C, 0xFE7D, 0xFE7E, 0xFE7F, 0xFE80, 0xFE81, 0xFE82, 0xFE83,
      0xFE84, 0xFE85, 0xFE86, 0xFE87, 0xFE88, 0xFE89, 0xFE8A, 0xFE8B, 0xFE8C,
      0xFE8D, 0xFE8E, 0xFE8F, 0xFE90, 0xFE91, 0xFE92, 0xFE93, 0xFE94, 0xFE95,
      0xFE96, 0xFE97, 0xFE98, 0xFE99, 0xFE9A, 0xFE9B, 0xFE9C, 0xFE9D, 0xFE9E,
      0xFE9F, 0xFEA0, 0xFEA1, 0xFEA2, 0xFEA3, 0xFEA4, 0xFEA5, 0xFEA6, 0xFEA7,
      0xFEA8, 0xFEA9, 0xFEAA, 0xFEAB, 0xFEAC, 0xFEAD, 0xFEAE, 0xFEAF, 0xFEB0,
      0xFEB1, 0xFEB2, 0xFEB3, 0xFEB4, 0xFEB5, 0xFEB6, 0xFEB7, 0xFEB8, 0xFEB9,
      0xFEBA, 0xFEBB, 0xFEBC, 0xFEBD, 0xFEBE, 0xFEBF, 0xFEC0, 0xFEC1, 0xFEC2,
      0xFEC3, 0xFEC4, 0xFEC5, 0xFEC6, 0xFEC7, 0xFEC8, 0xFEC9, 0xFECA, 0xFECB,
      0xFECC, 0xFECD, 0xFECE, 0xFECF, 0xFED0, 0xFED1, 0xFED2, 0xFED3, 0xFED4,
      0xFED5, 0xFED6, 0xFED7, 0xFED8, 0xFED9, 0xFEDA, 0xFEDB, 0xFEDC, 0xFEDD,
      0xFEDE, 0xFEDF, 0xFEE0, 0xFEE1, 0xFEE2, 0xFEE3, 0xFEE4, 0xFEE5, 0xFEE6,
      0xFEE7, 0xFEE8, 0xFEE9, 0xFEEA, 0xFEEB, 0xFEEC, 0xFEED, 0xFEEE, 0xFEEF,
      0xFEF0, 0xFEF1, 0xFEF2, 0xFEF3, 0xFEF4, 0xFEF5, 0xFEF6, 0xFEF7, 0xFEF8,
      0xFEF9, 0xFEFA, 0xFEFB, 0xFEFC, 0x10800, 0x10801, 0x10802, 0x10803,
      0x10804, 0x10805, 0x10808, 0x1080A, 0x1080B, 0x1080C, 0x1080D, 0x1080E,
      0x1080F, 0x10810, 0x10811, 0x10812, 0x10813, 0x10814, 0x10815, 0x10816,
      0x10817, 0x10818, 0x10819, 0x1081A, 0x1081B, 0x1081C, 0x1081D, 0x1081E,
      0x1081F, 0x10820, 0x10821, 0x10822, 0x10823, 0x10824, 0x10825, 0x10826,
      0x10827, 0x10828, 0x10829, 0x1082A, 0x1082B, 0x1082C, 0x1082D, 0x1082E,
      0x1082F, 0x10830, 0x10831, 0x10832, 0x10833, 0x10834, 0x10835, 0x10837,
      0x10838, 0x1083C, 0x1083F, 0x10840, 0x10841, 0x10842, 0x10843, 0x10844,
      0x10845, 0x10846, 0x10847, 0x10848, 0x10849, 0x1084A, 0x1084B, 0x1084C,
      0x1084D, 0x1084E, 0x1084F, 0x10850, 0x10851, 0x10852, 0x10853, 0x10854,
      0x10855, 0x10857, 0x10858, 0x10859, 0x1085A, 0x1085B, 0x1085C, 0x1085D,
      0x1085E, 0x1085F, 0x10900, 0x10901, 0x10902, 0x10903, 0x10904, 0x10905,
      0x10906, 0x10907, 0x10908, 0x10909, 0x1090A, 0x1090B, 0x1090C, 0x1090D,
      0x1090E, 0x1090F, 0x10910, 0x10911, 0x10912, 0x10913, 0x10914, 0x10915,
      0x10916, 0x10917, 0x10918, 0x10919, 0x1091A, 0x1091B, 0x10920, 0x10921,
      0x10922, 0x10923, 0x10924, 0x10925, 0x10926, 0x10927, 0x10928, 0x10929,
      0x1092A, 0x1092B, 0x1092C, 0x1092D, 0x1092E, 0x1092F, 0x10930, 0x10931,
      0x10932, 0x10933, 0x10934, 0x10935, 0x10936, 0x10937, 0x10938, 0x10939,
      0x1093F, 0x10980, 0x10981, 0x10982, 0x10983, 0x10984, 0x10985, 0x10986,
      0x10987, 0x10988, 0x10989, 0x1098A, 0x1098B, 0x1098C, 0x1098D, 0x1098E,
      0x1098F, 0x10990, 0x10991, 0x10992, 0x10993, 0x10994, 0x10995, 0x10996,
      0x10997, 0x10998, 0x10999, 0x1099A, 0x1099B, 0x1099C, 0x1099D, 0x1099E,
      0x1099F, 0x109A0, 0x109A1, 0x109A2, 0x109A3, 0x109A4, 0x109A5, 0x109A6,
      0x109A7, 0x109A8, 0x109A9, 0x109AA, 0x109AB, 0x109AC, 0x109AD, 0x109AE,
      0x109AF, 0x109B0, 0x109B1, 0x109B2, 0x109B3, 0x109B4, 0x109B5, 0x109B6,
      0x109B7, 0x109BE, 0x109BF, 0x10A00, 0x10A10, 0x10A11, 0x10A12, 0x10A13,
      0x10A15, 0x10A16, 0x10A17, 0x10A19, 0x10A1A, 0x10A1B, 0x10A1C, 0x10A1D,
      0x10A1E, 0x10A1F, 0x10A20, 0x10A21, 0x10A22, 0x10A23, 0x10A24, 0x10A25,
      0x10A26, 0x10A27, 0x10A28, 0x10A29, 0x10A2A, 0x10A2B, 0x10A2C, 0x10A2D,
      0x10A2E, 0x10A2F, 0x10A30, 0x10A31, 0x10A32, 0x10A33, 0x10A40, 0x10A41,
      0x10A42, 0x10A43, 0x10A44, 0x10A45, 0x10A46, 0x10A47, 0x10A50, 0x10A51,
      0x10A52, 0x10A53, 0x10A54, 0x10A55, 0x10A56, 0x10A57, 0x10A58, 0x10A60,
      0x10A61, 0x10A62, 0x10A63, 0x10A64, 0x10A65, 0x10A66, 0x10A67, 0x10A68,
      0x10A69, 0x10A6A, 0x10A6B, 0x10A6C, 0x10A6D, 0x10A6E, 0x10A6F, 0x10A70,
      0x10A71, 0x10A72, 0x10A73, 0x10A74, 0x10A75, 0x10A76, 0x10A77, 0x10A78,
      0x10A79, 0x10A7A, 0x10A7B, 0x10A7C, 0x10A7D, 0x10A7E, 0x10A7F, 0x10B00,
      0x10B01, 0x10B02, 0x10B03, 0x10B04, 0x10B05, 0x10B06, 0x10B07, 0x10B08,
      0x10B09, 0x10B0A, 0x10B0B, 0x10B0C, 0x10B0D, 0x10B0E, 0x10B0F, 0x10B10,
      0x10B11, 0x10B12, 0x10B13, 0x10B14, 0x10B15, 0x10B16, 0x10B17, 0x10B18,
      0x10B19, 0x10B1A, 0x10B1B, 0x10B1C, 0x10B1D, 0x10B1E, 0x10B1F, 0x10B20,
      0x10B21, 0x10B22, 0x10B23, 0x10B24, 0x10B25, 0x10B26, 0x10B27, 0x10B28,
      0x10B29, 0x10B2A, 0x10B2B, 0x10B2C, 0x10B2D, 0x10B2E, 0x10B2F, 0x10B30,
      0x10B31, 0x10B32, 0x10B33, 0x10B34, 0x10B35, 0x10B40, 0x10B41, 0x10B42,
      0x10B43, 0x10B44, 0x10B45, 0x10B46, 0x10B47, 0x10B48, 0x10B49, 0x10B4A,
      0x10B4B, 0x10B4C, 0x10B4D, 0x10B4E, 0x10B4F, 0x10B50, 0x10B51, 0x10B52,
      0x10B53, 0x10B54, 0x10B55, 0x10B58, 0x10B59, 0x10B5A, 0x10B5B, 0x10B5C,
      0x10B5D, 0x10B5E, 0x10B5F, 0x10B60, 0x10B61, 0x10B62, 0x10B63, 0x10B64,
      0x10B65, 0x10B66, 0x10B67, 0x10B68, 0x10B69, 0x10B6A, 0x10B6B, 0x10B6C,
      0x10B6D, 0x10B6E, 0x10B6F, 0x10B70, 0x10B71, 0x10B72, 0x10B78, 0x10B79,
      0x10B7A, 0x10B7B, 0x10B7C, 0x10B7D, 0x10B7E, 0x10B7F, 0x10C00, 0x10C01,
      0x10C02, 0x10C03, 0x10C04, 0x10C05, 0x10C06, 0x10C07, 0x10C08, 0x10C09,
      0x10C0A, 0x10C0B, 0x10C0C, 0x10C0D, 0x10C0E, 0x10C0F, 0x10C10, 0x10C11,
      0x10C12, 0x10C13, 0x10C14, 0x10C15, 0x10C16, 0x10C17, 0x10C18, 0x10C19,
      0x10C1A, 0x10C1B, 0x10C1C, 0x10C1D, 0x10C1E, 0x10C1F, 0x10C20, 0x10C21,
      0x10C22, 0x10C23, 0x10C24, 0x10C25, 0x10C26, 0x10C27, 0x10C28, 0x10C29,
      0x10C2A, 0x10C2B, 0x10C2C, 0x10C2D, 0x10C2E, 0x10C2F, 0x10C30, 0x10C31,
      0x10C32, 0x10C33, 0x10C34, 0x10C35, 0x10C36, 0x10C37, 0x10C38, 0x10C39,
      0x10C3A, 0x10C3B, 0x10C3C, 0x10C3D, 0x10C3E, 0x10C3F, 0x10C40, 0x10C41,
      0x10C42, 0x10C43, 0x10C44, 0x10C45, 0x10C46, 0x10C47, 0x10C48, 0x1EE00,
      0x1EE01, 0x1EE02, 0x1EE03, 0x1EE05, 0x1EE06, 0x1EE07, 0x1EE08, 0x1EE09,
      0x1EE0A, 0x1EE0B, 0x1EE0C, 0x1EE0D, 0x1EE0E, 0x1EE0F, 0x1EE10, 0x1EE11,
      0x1EE12, 0x1EE13, 0x1EE14, 0x1EE15, 0x1EE16, 0x1EE17, 0x1EE18, 0x1EE19,
      0x1EE1A, 0x1EE1B, 0x1EE1C, 0x1EE1D, 0x1EE1E, 0x1EE1F, 0x1EE21, 0x1EE22,
      0x1EE24, 0x1EE27, 0x1EE29, 0x1EE2A, 0x1EE2B, 0x1EE2C, 0x1EE2D, 0x1EE2E,
      0x1EE2F, 0x1EE30, 0x1EE31, 0x1EE32, 0x1EE34, 0x1EE35, 0x1EE36, 0x1EE37,
      0x1EE39, 0x1EE3B, 0x1EE42, 0x1EE47, 0x1EE49, 0x1EE4B, 0x1EE4D, 0x1EE4E,
      0x1EE4F, 0x1EE51, 0x1EE52, 0x1EE54, 0x1EE57, 0x1EE59, 0x1EE5B, 0x1EE5D,
      0x1EE5F, 0x1EE61, 0x1EE62, 0x1EE64, 0x1EE67, 0x1EE68, 0x1EE69, 0x1EE6A,
      0x1EE6C, 0x1EE6D, 0x1EE6E, 0x1EE6F, 0x1EE70, 0x1EE71, 0x1EE72, 0x1EE74,
      0x1EE75, 0x1EE76, 0x1EE77, 0x1EE79, 0x1EE7A, 0x1EE7B, 0x1EE7C, 0x1EE7E,
      0x1EE80, 0x1EE81, 0x1EE82, 0x1EE83, 0x1EE84, 0x1EE85, 0x1EE86, 0x1EE87,
      0x1EE88, 0x1EE89, 0x1EE8B, 0x1EE8C, 0x1EE8D, 0x1EE8E, 0x1EE8F, 0x1EE90,
      0x1EE91, 0x1EE92, 0x1EE93, 0x1EE94, 0x1EE95, 0x1EE96, 0x1EE97, 0x1EE98,
      0x1EE99, 0x1EE9A, 0x1EE9B, 0x1EEA1, 0x1EEA2, 0x1EEA3, 0x1EEA5, 0x1EEA6,
      0x1EEA7, 0x1EEA8, 0x1EEA9, 0x1EEAB, 0x1EEAC, 0x1EEAD, 0x1EEAE, 0x1EEAF,
      0x1EEB0, 0x1EEB1, 0x1EEB2, 0x1EEB3, 0x1EEB4, 0x1EEB5, 0x1EEB6, 0x1EEB7,
      0x1EEB8, 0x1EEB9, 0x1EEBA, 0x1EEBB, 0x10FFFD];

  function determineBidi(cueDiv) {
    var nodeStack = [],
        text = "",
        charCode;

    if (!cueDiv || !cueDiv.childNodes) {
      return "ltr";
    }

    function pushNodes(nodeStack, node) {
      for (var i = node.childNodes.length - 1; i >= 0; i--) {
        nodeStack.push(node.childNodes[i]);
      }
    }

    function nextTextNode(nodeStack) {
      if (!nodeStack || !nodeStack.length) {
        return null;
      }

      var node = nodeStack.pop(),
          text = node.textContent || node.innerText;
      if (text) {
        // TODO: This should match all unicode type B characters (paragraph
        // separator characters). See issue #115.
        var m = text.match(/^.*(\n|\r)/);
        if (m) {
          nodeStack.length = 0;
          return m[0];
        }
        return text;
      }
      if (node.tagName === "ruby") {
        return nextTextNode(nodeStack);
      }
      if (node.childNodes) {
        pushNodes(nodeStack, node);
        return nextTextNode(nodeStack);
      }
    }

    pushNodes(nodeStack, cueDiv);
    while ((text = nextTextNode(nodeStack))) {
      for (var i = 0; i < text.length; i++) {
        charCode = text.charCodeAt(i);
        for (var j = 0; j < strongRTLChars.length; j++) {
          if (strongRTLChars[j] === charCode) {
            return "rtl";
          }
        }
      }
    }
    return "ltr";
  }

  function computeLinePos(cue) {
    if (typeof cue.line === "number" &&
        (cue.snapToLines || (cue.line >= 0 && cue.line <= 100))) {
      return cue.line;
    }
    if (!cue.track || !cue.track.textTrackList ||
        !cue.track.textTrackList.mediaElement) {
      return -1;
    }
    var track = cue.track,
        trackList = track.textTrackList,
        count = 0;
    for (var i = 0; i < trackList.length && trackList[i] !== track; i++) {
      if (trackList[i].mode === "showing") {
        count++;
      }
    }
    return ++count * -1;
  }

  function StyleBox() {
  }

  // Apply styles to a div. If there is no div passed then it defaults to the
  // div on 'this'.
  StyleBox.prototype.applyStyles = function(styles, div) {
    div = div || this.div;
    for (var prop in styles) {
      if (styles.hasOwnProperty(prop)) {
        div.style[prop] = styles[prop];
      }
    }
  };

  StyleBox.prototype.formatStyle = function(val, unit) {
    return val === 0 ? 0 : val + unit;
  };

  // Constructs the computed display state of the cue (a div). Places the div
  // into the overlay which should be a block level element (usually a div).
  function CueStyleBox(window, cue, styleOptions) {
    var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
    var color = "rgba(255, 255, 255, 1)";
    var backgroundColor = "rgba(0, 0, 0, 0.8)";

    if (isIE8) {
      color = "rgb(255, 255, 255)";
      backgroundColor = "rgb(0, 0, 0)";
    }

    StyleBox.call(this);
    this.cue = cue;

    // Parse our cue's text into a DOM tree rooted at 'cueDiv'. This div will
    // have inline positioning and will function as the cue background box.
    this.cueDiv = parseContent(window, cue.text);
    var styles = {
      color: color,
      backgroundColor: backgroundColor,
      position: "relative",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "inline"
    };

    if (!isIE8) {
      styles.writingMode = cue.vertical === "" ? "horizontal-tb"
                                               : cue.vertical === "lr" ? "vertical-lr"
                                                                       : "vertical-rl";
      styles.unicodeBidi = "plaintext";
    }
    this.applyStyles(styles, this.cueDiv);

    // Create an absolutely positioned div that will be used to position the cue
    // div. Note, all WebVTT cue-setting alignments are equivalent to the CSS
    // mirrors of them except "middle" which is "center" in CSS.
    this.div = window.document.createElement("div");
    styles = {
      textAlign: cue.align === "middle" ? "center" : cue.align,
      font: styleOptions.font,
      whiteSpace: "pre-line",
      position: "absolute"
    };

    if (!isIE8) {
      styles.direction = determineBidi(this.cueDiv);
      styles.writingMode = cue.vertical === "" ? "horizontal-tb"
                                               : cue.vertical === "lr" ? "vertical-lr"
                                                                       : "vertical-rl".
      stylesunicodeBidi =  "plaintext";
    }

    this.applyStyles(styles);

    this.div.appendChild(this.cueDiv);

    // Calculate the distance from the reference edge of the viewport to the text
    // position of the cue box. The reference edge will be resolved later when
    // the box orientation styles are applied.
    var textPos = 0;
    switch (cue.positionAlign) {
    case "start":
      textPos = cue.position;
      break;
    case "middle":
      textPos = cue.position - (cue.size / 2);
      break;
    case "end":
      textPos = cue.position - cue.size;
      break;
    }

    // Horizontal box orientation; textPos is the distance from the left edge of the
    // area to the left edge of the box and cue.size is the distance extending to
    // the right from there.
    if (cue.vertical === "") {
      this.applyStyles({
        left:  this.formatStyle(textPos, "%"),
        width: this.formatStyle(cue.size, "%")
      });
    // Vertical box orientation; textPos is the distance from the top edge of the
    // area to the top edge of the box and cue.size is the height extending
    // downwards from there.
    } else {
      this.applyStyles({
        top: this.formatStyle(textPos, "%"),
        height: this.formatStyle(cue.size, "%")
      });
    }

    this.move = function(box) {
      this.applyStyles({
        top: this.formatStyle(box.top, "px"),
        bottom: this.formatStyle(box.bottom, "px"),
        left: this.formatStyle(box.left, "px"),
        right: this.formatStyle(box.right, "px"),
        height: this.formatStyle(box.height, "px"),
        width: this.formatStyle(box.width, "px")
      });
    };
  }
  CueStyleBox.prototype = _objCreate(StyleBox.prototype);
  CueStyleBox.prototype.constructor = CueStyleBox;

  // Represents the co-ordinates of an Element in a way that we can easily
  // compute things with such as if it overlaps or intersects with another Element.
  // Can initialize it with either a StyleBox or another BoxPosition.
  function BoxPosition(obj) {
    var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);

    // Either a BoxPosition was passed in and we need to copy it, or a StyleBox
    // was passed in and we need to copy the results of 'getBoundingClientRect'
    // as the object returned is readonly. All co-ordinate values are in reference
    // to the viewport origin (top left).
    var lh, height, width, top;
    if (obj.div) {
      height = obj.div.offsetHeight;
      width = obj.div.offsetWidth;
      top = obj.div.offsetTop;

      var rects = (rects = obj.div.childNodes) && (rects = rects[0]) &&
                  rects.getClientRects && rects.getClientRects();
      obj = obj.div.getBoundingClientRect();
      // In certain cases the outter div will be slightly larger then the sum of
      // the inner div's lines. This could be due to bold text, etc, on some platforms.
      // In this case we should get the average line height and use that. This will
      // result in the desired behaviour.
      lh = rects ? Math.max((rects[0] && rects[0].height) || 0, obj.height / rects.length)
                 : 0;

    }
    this.left = obj.left;
    this.right = obj.right;
    this.top = obj.top || top;
    this.height = obj.height || height;
    this.bottom = obj.bottom || (top + (obj.height || height));
    this.width = obj.width || width;
    this.lineHeight = lh !== undefined ? lh : obj.lineHeight;

    if (isIE8 && !this.lineHeight) {
      this.lineHeight = 13;
    }
  }

  // Move the box along a particular axis. Optionally pass in an amount to move
  // the box. If no amount is passed then the default is the line height of the
  // box.
  BoxPosition.prototype.move = function(axis, toMove) {
    toMove = toMove !== undefined ? toMove : this.lineHeight;
    switch (axis) {
    case "+x":
      this.left += toMove;
      this.right += toMove;
      break;
    case "-x":
      this.left -= toMove;
      this.right -= toMove;
      break;
    case "+y":
      this.top += toMove;
      this.bottom += toMove;
      break;
    case "-y":
      this.top -= toMove;
      this.bottom -= toMove;
      break;
    }
  };

  // Check if this box overlaps another box, b2.
  BoxPosition.prototype.overlaps = function(b2) {
    return this.left < b2.right &&
           this.right > b2.left &&
           this.top < b2.bottom &&
           this.bottom > b2.top;
  };

  // Check if this box overlaps any other boxes in boxes.
  BoxPosition.prototype.overlapsAny = function(boxes) {
    for (var i = 0; i < boxes.length; i++) {
      if (this.overlaps(boxes[i])) {
        return true;
      }
    }
    return false;
  };

  // Check if this box is within another box.
  BoxPosition.prototype.within = function(container) {
    return this.top >= container.top &&
           this.bottom <= container.bottom &&
           this.left >= container.left &&
           this.right <= container.right;
  };

  // Check if this box is entirely within the container or it is overlapping
  // on the edge opposite of the axis direction passed. For example, if "+x" is
  // passed and the box is overlapping on the left edge of the container, then
  // return true.
  BoxPosition.prototype.overlapsOppositeAxis = function(container, axis) {
    switch (axis) {
    case "+x":
      return this.left < container.left;
    case "-x":
      return this.right > container.right;
    case "+y":
      return this.top < container.top;
    case "-y":
      return this.bottom > container.bottom;
    }
  };

  // Find the percentage of the area that this box is overlapping with another
  // box.
  BoxPosition.prototype.intersectPercentage = function(b2) {
    var x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
        y = Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)),
        intersectArea = x * y;
    return intersectArea / (this.height * this.width);
  };

  // Convert the positions from this box to CSS compatible positions using
  // the reference container's positions. This has to be done because this
  // box's positions are in reference to the viewport origin, whereas, CSS
  // values are in referecne to their respective edges.
  BoxPosition.prototype.toCSSCompatValues = function(reference) {
    return {
      top: this.top - reference.top,
      bottom: reference.bottom - this.bottom,
      left: this.left - reference.left,
      right: reference.right - this.right,
      height: this.height,
      width: this.width
    };
  };

  // Get an object that represents the box's position without anything extra.
  // Can pass a StyleBox, HTMLElement, or another BoxPositon.
  BoxPosition.getSimpleBoxPosition = function(obj) {
    var height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0;
    var width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0;
    var top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;

    obj = obj.div ? obj.div.getBoundingClientRect() :
                  obj.tagName ? obj.getBoundingClientRect() : obj;
    var ret = {
      left: obj.left,
      right: obj.right,
      top: obj.top || top,
      height: obj.height || height,
      bottom: obj.bottom || (top + (obj.height || height)),
      width: obj.width || width
    };
    return ret;
  };

  // Move a StyleBox to its specified, or next best, position. The containerBox
  // is the box that contains the StyleBox, such as a div. boxPositions are
  // a list of other boxes that the styleBox can't overlap with.
  function moveBoxToLinePosition(window, styleBox, containerBox, boxPositions) {

    // Find the best position for a cue box, b, on the video. The axis parameter
    // is a list of axis, the order of which, it will move the box along. For example:
    // Passing ["+x", "-x"] will move the box first along the x axis in the positive
    // direction. If it doesn't find a good position for it there it will then move
    // it along the x axis in the negative direction.
    function findBestPosition(b, axis) {
      var bestPosition,
          specifiedPosition = new BoxPosition(b),
          percentage = 1; // Highest possible so the first thing we get is better.

      for (var i = 0; i < axis.length; i++) {
        while (b.overlapsOppositeAxis(containerBox, axis[i]) ||
               (b.within(containerBox) && b.overlapsAny(boxPositions))) {
          b.move(axis[i]);
        }
        // We found a spot where we aren't overlapping anything. This is our
        // best position.
        if (b.within(containerBox)) {
          return b;
        }
        var p = b.intersectPercentage(containerBox);
        // If we're outside the container box less then we were on our last try
        // then remember this position as the best position.
        if (percentage > p) {
          bestPosition = new BoxPosition(b);
          percentage = p;
        }
        // Reset the box position to the specified position.
        b = new BoxPosition(specifiedPosition);
      }
      return bestPosition || specifiedPosition;
    }

    var boxPosition = new BoxPosition(styleBox),
        cue = styleBox.cue,
        linePos = computeLinePos(cue),
        axis = [];

    // If we have a line number to align the cue to.
    if (cue.snapToLines) {
      var size;
      switch (cue.vertical) {
      case "":
        axis = [ "+y", "-y" ];
        size = "height";
        break;
      case "rl":
        axis = [ "+x", "-x" ];
        size = "width";
        break;
      case "lr":
        axis = [ "-x", "+x" ];
        size = "width";
        break;
      }

      var step = boxPosition.lineHeight,
          position = step * Math.round(linePos),
          maxPosition = containerBox[size] + step,
          initialAxis = axis[0];

      // If the specified intial position is greater then the max position then
      // clamp the box to the amount of steps it would take for the box to
      // reach the max position.
      if (Math.abs(position) > maxPosition) {
        position = position < 0 ? -1 : 1;
        position *= Math.ceil(maxPosition / step) * step;
      }

      // If computed line position returns negative then line numbers are
      // relative to the bottom of the video instead of the top. Therefore, we
      // need to increase our initial position by the length or width of the
      // video, depending on the writing direction, and reverse our axis directions.
      if (linePos < 0) {
        position += cue.vertical === "" ? containerBox.height : containerBox.width;
        axis = axis.reverse();
      }

      // Move the box to the specified position. This may not be its best
      // position.
      boxPosition.move(initialAxis, position);

    } else {
      // If we have a percentage line value for the cue.
      var calculatedPercentage = (boxPosition.lineHeight / containerBox.height) * 100;

      switch (cue.lineAlign) {
      case "middle":
        linePos -= (calculatedPercentage / 2);
        break;
      case "end":
        linePos -= calculatedPercentage;
        break;
      }

      // Apply initial line position to the cue box.
      switch (cue.vertical) {
      case "":
        styleBox.applyStyles({
          top: styleBox.formatStyle(linePos, "%")
        });
        break;
      case "rl":
        styleBox.applyStyles({
          left: styleBox.formatStyle(linePos, "%")
        });
        break;
      case "lr":
        styleBox.applyStyles({
          right: styleBox.formatStyle(linePos, "%")
        });
        break;
      }

      axis = [ "+y", "-x", "+x", "-y" ];

      // Get the box position again after we've applied the specified positioning
      // to it.
      boxPosition = new BoxPosition(styleBox);
    }

    var bestPosition = findBestPosition(boxPosition, axis);
    styleBox.move(bestPosition.toCSSCompatValues(containerBox));
  }

  function WebVTT() {
    // Nothing
  }

  // Helper to allow strings to be decoded instead of the default binary utf8 data.
  WebVTT.StringDecoder = function() {
    return {
      decode: function(data) {
        if (!data) {
          return "";
        }
        if (typeof data !== "string") {
          throw new Error("Error - expected string data.");
        }
        return decodeURIComponent(encodeURIComponent(data));
      }
    };
  };

  WebVTT.convertCueToDOMTree = function(window, cuetext) {
    if (!window || !cuetext) {
      return null;
    }
    return parseContent(window, cuetext);
  };

  var FONT_SIZE_PERCENT = 0.05;
  var FONT_STYLE = "sans-serif";
  var CUE_BACKGROUND_PADDING = "1.5%";

  // Runs the processing model over the cues and regions passed to it.
  // @param overlay A block level element (usually a div) that the computed cues
  //                and regions will be placed into.
  WebVTT.processCues = function(window, cues, overlay) {
    if (!window || !cues || !overlay) {
      return null;
    }

    // Remove all previous children.
    while (overlay.firstChild) {
      overlay.removeChild(overlay.firstChild);
    }

    var paddedOverlay = window.document.createElement("div");
    paddedOverlay.style.position = "absolute";
    paddedOverlay.style.left = "0";
    paddedOverlay.style.right = "0";
    paddedOverlay.style.top = "0";
    paddedOverlay.style.bottom = "0";
    paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
    overlay.appendChild(paddedOverlay);

    // Determine if we need to compute the display states of the cues. This could
    // be the case if a cue's state has been changed since the last computation or
    // if it has not been computed yet.
    function shouldCompute(cues) {
      for (var i = 0; i < cues.length; i++) {
        if (cues[i].hasBeenReset || !cues[i].displayState) {
          return true;
        }
      }
      return false;
    }

    // We don't need to recompute the cues' display states. Just reuse them.
    if (!shouldCompute(cues)) {
      for (var i = 0; i < cues.length; i++) {
        paddedOverlay.appendChild(cues[i].displayState);
      }
      return;
    }

    var boxPositions = [],
        containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
        fontSize = Math.round(containerBox.height * FONT_SIZE_PERCENT * 100) / 100;
    var styleOptions = {
      font: fontSize + "px " + FONT_STYLE
    };

    (function() {
      var styleBox, cue;

      for (var i = 0; i < cues.length; i++) {
        cue = cues[i];

        // Compute the intial position and styles of the cue div.
        styleBox = new CueStyleBox(window, cue, styleOptions);
        paddedOverlay.appendChild(styleBox.div);

        // Move the cue div to it's correct line position.
        moveBoxToLinePosition(window, styleBox, containerBox, boxPositions);

        // Remember the computed div so that we don't have to recompute it later
        // if we don't have too.
        cue.displayState = styleBox.div;

        boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
      }
    })();
  };

  WebVTT.Parser = function(window, vttjs, decoder) {
    if (!decoder) {
      decoder = vttjs;
      vttjs = {};
    }
    if (!vttjs) {
      vttjs = {};
    }

    this.window = window;
    this.vttjs = vttjs;
    this.state = "INITIAL";
    this.buffer = "";
    this.decoder = decoder || new TextDecoder("utf8");
    this.regionList = [];
  };

  WebVTT.Parser.prototype = {
    // If the error is a ParsingError then report it to the consumer if
    // possible. If it's not a ParsingError then throw it like normal.
    reportOrThrowError: function(e) {
      if (e instanceof ParsingError) {
        this.onparsingerror && this.onparsingerror(e);
      } else {
        throw e;
      }
    },
    parse: function (data) {
      var self = this;

      // If there is no data then we won't decode it, but will just try to parse
      // whatever is in buffer already. This may occur in circumstances, for
      // example when flush() is called.
      if (data) {
        // Try to decode the data that we received.
        self.buffer += self.decoder.decode(data, {stream: true});
      }

      function collectNextLine() {
        var buffer = self.buffer;
        var pos = 0;
        while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
          ++pos;
        }
        var line = buffer.substr(0, pos);
        // Advance the buffer early in case we fail below.
        if (buffer[pos] === '\r') {
          ++pos;
        }
        if (buffer[pos] === '\n') {
          ++pos;
        }
        self.buffer = buffer.substr(pos);
        return line;
      }

      // 3.4 WebVTT region and WebVTT region settings syntax
      function parseRegion(input) {
        var settings = new Settings();

        parseOptions(input, function (k, v) {
          switch (k) {
          case "id":
            settings.set(k, v);
            break;
          case "width":
            settings.percent(k, v);
            break;
          case "lines":
            settings.integer(k, v);
            break;
          case "regionanchor":
          case "viewportanchor":
            var xy = v.split(',');
            if (xy.length !== 2) {
              break;
            }
            // We have to make sure both x and y parse, so use a temporary
            // settings object here.
            var anchor = new Settings();
            anchor.percent("x", xy[0]);
            anchor.percent("y", xy[1]);
            if (!anchor.has("x") || !anchor.has("y")) {
              break;
            }
            settings.set(k + "X", anchor.get("x"));
            settings.set(k + "Y", anchor.get("y"));
            break;
          case "scroll":
            settings.alt(k, v, ["up"]);
            break;
          }
        }, /=/, /\s/);

        // Create the region, using default values for any values that were not
        // specified.
        if (settings.has("id")) {
          var region = new (self.vttjs.VTTRegion || self.window.VTTRegion)();
          region.width = settings.get("width", 100);
          region.lines = settings.get("lines", 3);
          region.regionAnchorX = settings.get("regionanchorX", 0);
          region.regionAnchorY = settings.get("regionanchorY", 100);
          region.viewportAnchorX = settings.get("viewportanchorX", 0);
          region.viewportAnchorY = settings.get("viewportanchorY", 100);
          region.scroll = settings.get("scroll", "");
          // Register the region.
          self.onregion && self.onregion(region);
          // Remember the VTTRegion for later in case we parse any VTTCues that
          // reference it.
          self.regionList.push({
            id: settings.get("id"),
            region: region
          });
        }
      }

      // 3.2 WebVTT metadata header syntax
      function parseHeader(input) {
        parseOptions(input, function (k, v) {
          switch (k) {
          case "Region":
            // 3.3 WebVTT region metadata header syntax
            parseRegion(v);
            break;
          }
        }, /:/);
      }

      // 5.1 WebVTT file parsing.
      try {
        var line;
        if (self.state === "INITIAL") {
          // We can't start parsing until we have the first line.
          if (!/\r\n|\n/.test(self.buffer)) {
            return this;
          }

          line = collectNextLine();

          var m = line.match(/^WEBVTT([ \t].*)?$/);
          if (!m || !m[0]) {
            throw new ParsingError(ParsingError.Errors.BadSignature);
          }

          self.state = "HEADER";
        }

        var alreadyCollectedLine = false;
        while (self.buffer) {
          // We can't parse a line until we have the full line.
          if (!/\r\n|\n/.test(self.buffer)) {
            return this;
          }

          if (!alreadyCollectedLine) {
            line = collectNextLine();
          } else {
            alreadyCollectedLine = false;
          }

          switch (self.state) {
          case "HEADER":
            // 13-18 - Allow a header (metadata) under the WEBVTT line.
            if (/:/.test(line)) {
              parseHeader(line);
            } else if (!line) {
              // An empty line terminates the header and starts the body (cues).
              self.state = "ID";
            }
            continue;
          case "NOTE":
            // Ignore NOTE blocks.
            if (!line) {
              self.state = "ID";
            }
            continue;
          case "ID":
            // Check for the start of NOTE blocks.
            if (/^NOTE($|[ \t])/.test(line)) {
              self.state = "NOTE";
              break;
            }
            // 19-29 - Allow any number of line terminators, then initialize new cue values.
            if (!line) {
              continue;
            }
            self.cue = new (self.vttjs.VTTCue || self.window.VTTCue)(0, 0, "");
            self.state = "CUE";
            // 30-39 - Check if self line contains an optional identifier or timing data.
            if (line.indexOf("-->") === -1) {
              self.cue.id = line;
              continue;
            }
            // Process line as start of a cue.
            /*falls through*/
          case "CUE":
            // 40 - Collect cue timings and settings.
            try {
              parseCue(line, self.cue, self.regionList);
            } catch (e) {
              self.reportOrThrowError(e);
              // In case of an error ignore rest of the cue.
              self.cue = null;
              self.state = "BADCUE";
              continue;
            }
            self.state = "CUETEXT";
            continue;
          case "CUETEXT":
            var hasSubstring = line.indexOf("-->") !== -1;
            // 34 - If we have an empty line then report the cue.
            // 35 - If we have the special substring '-->' then report the cue,
            // but do not collect the line as we need to process the current
            // one as a new cue.
            if (!line || hasSubstring && (alreadyCollectedLine = true)) {
              // We are done parsing self cue.
              self.oncue && self.oncue(self.cue);
              self.cue = null;
              self.state = "ID";
              continue;
            }
            if (self.cue.text) {
              self.cue.text += "\n";
            }
            self.cue.text += line;
            continue;
          case "BADCUE": // BADCUE
            // 54-62 - Collect and discard the remaining cue.
            if (!line) {
              self.state = "ID";
            }
            continue;
          }
        }
      } catch (e) {
        self.reportOrThrowError(e);

        // If we are currently parsing a cue, report what we have.
        if (self.state === "CUETEXT" && self.cue && self.oncue) {
          self.oncue(self.cue);
        }
        self.cue = null;
        // Enter BADWEBVTT state if header was not parsed correctly otherwise
        // another exception occurred so enter BADCUE state.
        self.state = self.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
      }
      return this;
    },
    flush: function () {
      var self = this;
      try {
        // Finish decoding the stream.
        self.buffer += self.decoder.decode();
        // Synthesize the end of the current cue or region.
        if (self.cue || self.state === "HEADER") {
          self.buffer += "\n\n";
          self.parse();
        }
        // If we've flushed, parsed, and we're still on the INITIAL state then
        // that means we don't have enough of the stream to parse the first
        // line.
        if (self.state === "INITIAL") {
          throw new ParsingError(ParsingError.Errors.BadSignature);
        }
      } catch(e) {
        self.reportOrThrowError(e);
      }
      self.onflush && self.onflush();
      return this;
    }
  };

  global.WebVTT = WebVTT;

}(this, (this.vttjs || {})));

!function(){!function(a){var b=a&&a.videojs;if(b){b.CDN_VERSION="5.9.2";var c="https:"===a.location.protocol?"https://":"http://";b.options.flash.swf=c+"vjs.zencdn.net/swf/5.0.1/video-js.swf"}}(window),function(a,b,c,d,e,f,g){b&&b.HELP_IMPROVE_VIDEOJS!==!1&&(e.random()>.01||(f=b.location,g=b.videojs||{},a.src="//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-3&utmn=1&utmhn="+d(f.hostname)+"&utmsr="+b.screen.availWidth+"x"+b.screen.availHeight+"&utmul="+(c.language||c.userLanguage||"").toLowerCase()+"&utmr="+d(f.href)+"&utmp="+d(f.hostname+f.pathname)+"&utmcc=__utma%3D1."+e.floor(1e10*e.random())+".1.1.1.1%3B&utme=8(vjsv*cdnv)9("+g.VERSION+"*"+g.CDN_VERSION+")"))}(new Image,window,navigator,encodeURIComponent,Math)}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*** IMPORTS FROM imports-loader ***/


/**
 * videojs-contrib-hls
 * @version 2.0.1
 * @copyright 2016 Brightcove, Inc
 * @license Apache-2.0
 */
!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.videojsContribHls=t()}}(function(){return function t(e,i,n){function r(s,o){if(!i[s]){if(!e[s]){var u="function"==typeof require&&require;if(!o&&u)return require(s,!0);if(a)return a(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var f=i[s]={exports:{}};e[s][0].call(f.exports,function(t){var i=e[s][1][t];return r(i?i:t)},f,f.exports,t,e,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(t,e){return t.start(e)+"-"+t.end(e)},r=function(t,e){var i=t.toString(16);return"00".substring(0,2-i.length)+i+(e%2?" ":"")},a=function(t){return t>=32&&126>t?String.fromCharCode(t):"."},s={hexDump:function(t){for(var e=Array.prototype.slice.call(t),i=16,n="",s=void 0,o=void 0,u=0;u<e.length/i;u++)s=e.slice(u*i,u*i+i).map(r).join(""),o=e.slice(u*i,u*i+i).map(a).join(""),n+=s+" "+o+"\n";return n},tagDump:function(t){return s.hexDump(t.bytes)},textRanges:function(t){var e="",i=void 0;for(i=0;i<t.length;i++)e+=n(t,i)+" ";return e}};i["default"]=s,e.exports=i["default"]},{}],2:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],n=e[4],r=i[4],a=void 0,s=void 0,o=void 0,u=[],d=[],f=void 0,l=void 0,c=void 0,h=void 0,p=void 0,g=void 0;for(a=0;256>a;a++)d[(u[a]=a<<1^283*(a>>7))^a]=a;for(s=o=0;!n[s];s^=f||1,o=d[o]||1)for(h=o^o<<1^o<<2^o<<3^o<<4,h=h>>8^255&h^99,n[s]=h,r[h]=s,c=u[l=u[f=u[s]]],g=16843009*c^65537*l^257*f^16843008*s,p=257*u[h]^16843008*h,a=0;4>a;a++)e[a][s]=p=p<<24^p>>>8,i[a][h]=g=g<<24^g>>>8;for(a=0;5>a;a++)e[a]=e[a].slice(0),i[a]=i[a].slice(0);return t},s=null,o=function(){function t(e){n(this,t),s||(s=a()),this._tables=[[s[0][0].slice(),s[0][1].slice(),s[0][2].slice(),s[0][3].slice(),s[0][4].slice()],[s[1][0].slice(),s[1][1].slice(),s[1][2].slice(),s[1][3].slice(),s[1][4].slice()]];var i=void 0,r=void 0,o=void 0,u=void 0,d=void 0,f=this._tables[0][4],l=this._tables[1],c=e.length,h=1;if(4!==c&&6!==c&&8!==c)throw new Error("Invalid aes key size");for(u=e.slice(0),d=[],this._key=[u,d],i=c;4*c+28>i;i++)o=u[i-1],(i%c===0||8===c&&i%c===4)&&(o=f[o>>>24]<<24^f[o>>16&255]<<16^f[o>>8&255]<<8^f[255&o],i%c===0&&(o=o<<8^o>>>24^h<<24,h=h<<1^283*(h>>7))),u[i]=u[i-c]^o;for(r=0;i;r++,i--)o=u[3&r?i:i-4],4>=i||4>r?d[r]=o:d[r]=l[0][f[o>>>24]]^l[1][f[o>>16&255]]^l[2][f[o>>8&255]]^l[3][f[255&o]]}return r(t,[{key:"decrypt",value:function(t,e,i,n,r,a){var s=this._key[1],o=t^s[0],u=n^s[1],d=i^s[2],f=e^s[3],l=void 0,c=void 0,h=void 0,p=s.length/4-2,g=void 0,y=4,m=this._tables[1],b=m[0],v=m[1],_=m[2],w=m[3],T=m[4];for(g=0;p>g;g++)l=b[o>>>24]^v[u>>16&255]^_[d>>8&255]^w[255&f]^s[y],c=b[u>>>24]^v[d>>16&255]^_[f>>8&255]^w[255&o]^s[y+1],h=b[d>>>24]^v[f>>16&255]^_[o>>8&255]^w[255&u]^s[y+2],f=b[f>>>24]^v[o>>16&255]^_[u>>8&255]^w[255&d]^s[y+3],y+=4,o=l,u=c,d=h;for(g=0;4>g;g++)r[(3&-g)+a]=T[o>>>24]<<24^T[u>>16&255]<<16^T[d>>8&255]<<8^T[255&f]^s[y++],l=o,o=u,u=d,d=f,f=l}}]),t}();i["default"]=o,e.exports=i["default"]},{}],3:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},u=t("../stream"),d=n(u),f=function(t){function e(){r(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,d["default"]),this.jobs=[],this.delay=1,this.timeout_=null}return a(e,t),s(e,[{key:"processJob_",value:function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null}},{key:"push",value:function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))}}]),e}(d["default"]);i["default"]=f,e.exports=i["default"]},{"../stream":13}],4:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("./aes"),o=n(s),u=t("./async-stream"),d=n(u),f=t("pkcs7"),l=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},c=function(t,e,i){var n=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),r=new o["default"](Array.prototype.slice.call(e)),a=new Uint8Array(t.byteLength),s=new Int32Array(a.buffer),u=void 0,d=void 0,f=void 0,c=void 0,h=void 0,p=void 0,g=void 0,y=void 0,m=void 0;for(u=i[0],d=i[1],f=i[2],c=i[3],m=0;m<n.length;m+=4)h=l(n[m]),p=l(n[m+1]),g=l(n[m+2]),y=l(n[m+3]),r.decrypt(h,p,g,y,s,m),s[m]=l(s[m]^u),s[m+1]=l(s[m+1]^d),s[m+2]=l(s[m+2]^f),s[m+3]=l(s[m+3]^c),u=h,d=p,f=g,c=y;return a};i.decrypt=c;var h=function(){function t(e,i,n,a){r(this,t);var s=t.STEP,o=new Int32Array(e.buffer),u=new Uint8Array(e.byteLength),c=0;for(this.asyncStream_=new d["default"],this.asyncStream_.push(this.decryptChunk_(o.subarray(c,c+s),i,n,u)),c=s;c<o.length;c+=s)n=new Uint32Array([l(o[c-4]),l(o[c-3]),l(o[c-2]),l(o[c-1])]),this.asyncStream_.push(this.decryptChunk_(o.subarray(c,c+s),i,n,u));this.asyncStream_.push(function(){a(null,(0,f.unpad)(u))})}return a(t,[{key:"decryptChunk_",value:function(t,e,i,n){return function(){var r=c(t,e,i);n.set(r,t.byteOffset)}}}]),t}();i.Decrypter=h,h.STEP=32e3,i["default"]={Decrypter:h,decrypt:c}},{"./aes":2,"./async-stream":3,pkcs7:18}],5:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var r=t("./decrypter"),a=t("./async-stream"),s=n(a);i["default"]={decrypt:r.decrypt,Decrypter:r.Decrypter,AsyncStream:s["default"]},e.exports=i["default"]},{"./async-stream":3,"./decrypter":4}],6:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var r=t("./line-stream"),a=n(r),s=t("./parse-stream"),o=n(s),u=t("./parser"),d=n(u);i["default"]={LineStream:a["default"],ParseStream:o["default"],Parser:d["default"]},e.exports=i["default"]},{"./line-stream":7,"./parse-stream":8,"./parser":9}],7:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},u=t("../stream"),d=n(u),f=function(t){function e(){r(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.buffer=""}return a(e,t),s(e,[{key:"push",value:function(t){var e=void 0;for(this.buffer+=t,e=this.buffer.indexOf("\n");e>-1;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)}}]),e}(d["default"]);i["default"]=f,e.exports=i["default"]},{"../stream":13}],8:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},u=t("../stream"),d=n(u),f=function(){var t="[^=]*",e='"[^"]*"|[^,]*',i="(?:"+t+")=(?:"+e+")";return new RegExp("(?:^|,)("+i+")")},l=function(t){for(var e=t.split(f()),i=e.length,n={},r=void 0;i--;)""!==e[i]&&(r=/([^=]*)=(.*)/.exec(e[i]).slice(1),r[0]=r[0].replace(/^\s+|\s+$/g,""),r[1]=r[1].replace(/^\s+|\s+$/g,""),r[1]=r[1].replace(/^['"](.*)['"]$/g,"$1"),n[r[0]]=r[1]);return n},c=function(t){function e(){r(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).call(this)}return a(e,t),s(e,[{key:"push",value:function(t){var e=void 0,i=void 0;if(t=t.replace(/^[\u0000\s]+|[\u0000\s]+$/g,""),0!==t.length){if("#"!==t[0])return void this.trigger("data",{type:"uri",uri:t});if(0!==t.indexOf("#EXT"))return void this.trigger("data",{type:"comment",text:t.slice(1)});if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))return void this.trigger("data",{type:"tag",tagType:"m3u"});if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void this.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=l(e[1]),i.attributes.RESOLUTION){var n=i.attributes.RESOLUTION.split("x"),r={};n[0]&&(r.width=parseInt(n[0],10)),n[1]&&(r.height=parseInt(n[1],10)),i.attributes.RESOLUTION=r}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}return void this.trigger("data",i)}return(e=/^#EXT-X-ENDLIST/.exec(t))?void this.trigger("data",{type:"tag",tagType:"endlist"}):(e=/^#EXT-X-DISCONTINUITY/.exec(t))?void this.trigger("data",{type:"tag",tagType:"discontinuity"}):(e=/^#EXT-X-KEY:?(.*)$/.exec(t))?(i={type:"tag",tagType:"key"},e[1]&&(i.attributes=l(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2)&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i)):void this.trigger("data",{type:"tag",data:t.slice(4,t.length)})}}}]),e}(d["default"]);i["default"]=c,e.exports=i["default"]},{"../stream":13}],9:[function(t,e,i){(function(n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},d=t("../stream"),f=r(d),l=t("./line-stream"),c=r(l),h=t("./parse-stream"),p=r(h),g="undefined"!=typeof window?window.videojs:"undefined"!=typeof n?n.videojs:null,y=function(t){function e(){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.lineStream=new c["default"],this.parseStream=new p["default"],this.lineStream.pipe(this.parseStream);var t=this,i=[],n={},r=void 0,s=function(){};this.manifest={allowCache:!0,discontinuityStarts:[]},this.parseStream.on("data",function(e){({tag:function(){(({"allow-cache":function(){this.manifest.allowCache=e.allowed,"allowed"in e||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function a(){var a={};"length"in e&&(n.byterange=a,a.length=e.length,"offset"in e||(this.trigger("info",{message:"defaulting offset to zero"}),e.offset=0)),"offset"in e&&(n.byterange=a,a.offset=e.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),e.duration>=0&&(n.duration=e.duration),this.manifest.segments=i},key:function(){return e.attributes?"NONE"===e.attributes.METHOD?void(r=null):e.attributes.URI?(e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),r={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI},void("undefined"!=typeof e.attributes.IV&&(r.iv=e.attributes.IV))):void this.trigger("warn",{message:"ignoring key declaration without URI"}):void this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){return isFinite(e.number)?void(this.manifest.mediaSequence=e.number):void this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){return isFinite(e.number)?void(this.manifest.discontinuitySequence=e.number):void this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){return/VOD|EVENT/.test(e.playlistType)?void(this.manifest.playlistType=e.playlistType):void this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},"stream-inf":function(){return this.manifest.playlists=i,e.attributes?(n.attributes||(n.attributes={}),void(n.attributes=(0,g.mergeOptions)(n.attributes,e.attributes))):void this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},discontinuity:function(){n.discontinuity=!0,this.manifest.discontinuityStarts.push(i.length)},targetduration:function(){return!isFinite(e.duration)||e.duration<0?void this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):void(this.manifest.targetDuration=e.duration)},totalduration:function(){return!isFinite(e.duration)||e.duration<0?void this.trigger("warn",{message:"ignoring invalid total duration: "+e.duration}):void(this.manifest.totalDuration=e.duration)}})[e.tagType]||s).call(t)},uri:function(){n.uri=e.uri,i.push(n),!this.manifest.targetDuration||"duration"in n||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),n.duration=this.manifest.targetDuration),r&&(n.key=r),n={}},comment:function(){}})[e.type].call(t)})}return s(e,t),o(e,[{key:"push",value:function(t){this.lineStream.push(t)}},{key:"end",value:function(){this.lineStream.push("\n")}}]),e}(f["default"]);i["default"]=y,e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../stream":13,"./line-stream":7,"./parse-stream":8}],10:[function(t,e,i){(function(n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},d=t("./resolve-url"),f=r(d),l=t("./xhr"),c=r(l),h="undefined"!=typeof window?window.videojs:"undefined"!=typeof n?n.videojs:null,p=t("./stream"),g=r(p),y=t("./m3u8"),m=r(y),b=function(t,e){for(var i=!1,n=(0,h.mergeOptions)(t,{}),r=t.playlists.length,a=void 0;r--;)if(a=n.playlists[r],a.uri===e.uri){if(a.segments&&e.segments&&a.segments.length===e.segments.length&&a.mediaSequence===e.mediaSequence)continue;n.playlists[r]=(0,h.mergeOptions)(a,e),n.playlists[e.uri]=n.playlists[r],a.segments&&(n.playlists[r].segments=v(a.segments,e.segments,e.mediaSequence-a.mediaSequence)),i=!0}return i?n:null},v=function(t,e,i){var n=e.slice(),r=void 0,a=void 0;for(i=i||0,r=Math.min(t.length,e.length+i),a=i;r>a;a++)n[a-i]=(0,h.mergeOptions)(t[a],n[a-i]);return n},_=function(t){function e(t,i){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this);var n=this,r=void 0,s=void 0,o=void 0,d=void 0,l=void 0;if(this.trackExpiredTime_=!1,!t)throw new Error("A non-empty playlist URL is required");d=function(t,e,i){n.setBandwidth(o||t),o=null,i&&(n.state=i),n.error={playlist:n.master.playlists[e],status:t.status,message:"HLS playlist request error at URL: "+e,responseText:t.responseText,code:t.status>=500?4:2},n.trigger("error")},l=function(t,e){var i=void 0,r=void 0,a=void 0;n.setBandwidth(o||t),o=null,n.state="HAVE_METADATA",i=new m["default"].Parser,i.push(t.responseText),i.end(),i.manifest.uri=e,a=b(n.master,i.manifest),r=1e3*(i.manifest.targetDuration||10),a?(n.master=a,n.updateMediaPlaylist_(i.manifest)):r/=2,n.media().endList||(window.clearTimeout(s),s=window.setTimeout(function(){n.trigger("mediaupdatetimeout")},r)),n.trigger("loadedplaylist")},n.state="HAVE_NOTHING",this.expired_=0,r=this.dispose,n.dispose=function(){o&&(o.onreadystatechange=null,o.abort(),o=null),window.clearTimeout(s),r.call(this)},n.media=function(t){var e=n.state,r=void 0;if(!t)return n.media_;if("HAVE_NOTHING"===n.state)throw new Error("Cannot switch media playlist from "+n.state);if("string"==typeof t){if(!n.master.playlists[t])throw new Error("Unknown playlist URI: "+t);t=n.master.playlists[t]}if(r=!n.media_||t.uri!==n.media_.uri,n.master.playlists[t.uri].endList)return o&&(o.onreadystatechange=null,o.abort(),o=null),n.state="HAVE_METADATA",n.media_=t,void(r&&n.trigger("mediachange"));if(r){if(n.state="SWITCHING_MEDIA",o){if((0,f["default"])(n.master.uri,t.uri)===o.url)return;o.onreadystatechange=null,o.abort(),o=null}o=(0,c["default"])({uri:(0,f["default"])(n.master.uri,t.uri),withCredentials:i},function(i,r){return i?d(r,t.uri,e):(l(r,t.uri),void("HAVE_MASTER"===e?n.trigger("loadedmetadata"):n.trigger("mediachange")))})}},n.setBandwidth=function(t){n.bandwidth=t.bandwidth},n.on("firstplay",function(){this.trackExpiredTime_=!0}),n.on("mediaupdatetimeout",function(){"HAVE_METADATA"===n.state&&(n.state="HAVE_CURRENT_METADATA",o=(0,c["default"])({uri:(0,f["default"])(n.master.uri,n.media().uri),withCredentials:i},function(t,e){return t?d(e,n.media().uri):void l(e,n.media().uri)}))}),o=(0,c["default"])({uri:t,withCredentials:i},function(e,i){var r=void 0,a=void 0;if(o=null,e)return n.error={status:i.status,message:"HLS playlist request error at URL: "+t,responseText:i.responseText,code:2},n.trigger("error");if(r=new m["default"].Parser,r.push(i.responseText),r.end(),n.state="HAVE_MASTER",r.manifest.uri=t,r.manifest.playlists){for(n.master=r.manifest,a=n.master.playlists.length;a--;)n.master.playlists[n.master.playlists[a].uri]=n.master.playlists[a];return n.trigger("loadedplaylist"),void(o||n.media(r.manifest.playlists[0]))}return n.master={uri:window.location.href,playlists:[{uri:t}]},n.master.playlists[t]=n.master.playlists[0],l(i,t),n.trigger("loadedmetadata")})}return s(e,t),o(e,[{key:"updateMediaPlaylist_",value:function(t){var e=void 0,i=void 0,n=void 0;if(e=this.media_,this.media_=this.master.playlists[t.uri],e&&this.trackExpiredTime_&&t.uri===e.uri){if(t.segments.length){if(void 0!==t.segments[0].start)return void(this.expired_=t.segments[0].start);if(void 0!==t.segments[0].end)return void(this.expired_=t.segments[0].end-t.segments[0].duration)}for(i=t.mediaSequence-e.mediaSequence-1;i>=0;i--)if(n=e.segments[i]){if(void 0!==n.end)return void(this.expired_=n.end);if(void 0!==n.start)return void(this.expired_=n.start+n.duration);this.expired_+=n.duration}else this.expired_+=e.targetDuration||10}}},{key:"getMediaIndexForTime_",value:function(t){var e=void 0,i=void 0,n=t,r=this.media_.segments.length,a=r-1,s=void 0,o=void 0,u=void 0,d=void 0;if(!this.media_)return 0;if(0>t)return 0;for(e=0;r>e;e++)if(i=this.media_.segments[e],i.end){if(i.end>t){d=i.end,o=e;break}u=i.end,s=e+1}if(void 0!==s){for(t-=u,e=s;(o||r)>e;e++)if(i=this.media_.segments[e],t-=i.duration,0>t)return e;return e>=o?s+Math.floor((n-u)/(d-u)*(o-s)):a}if(void 0!==o){for(t=d-t,e=o;e>=0;e--)if(i=this.media_.segments[e],t-=i.duration,0>t)return e;return 0===t?0:-1}if(t-=this.expired_,0>t)return-1;for(e=0;r>e;e++)if(i=this.media_.segments[e],t-=i.duration,0>t)return e;return a}}]),e}(g["default"]);i["default"]=_,e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./m3u8":6,"./resolve-url":12,"./stream":13,"./xhr":14}],11:[function(t,e,i){(function(t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e="undefined"!=typeof window?window.videojs:"undefined"!=typeof t?t.videojs:null,n={UNSAFE_LIVE_SEGMENTS:3},r=function(t,e){var i=0,n=e-t.mediaSequence,r=t.segments[n];if(r){if("undefined"!=typeof r.start)return{result:r.start,precise:!0};if("undefined"!=typeof r.end)return{result:r.end-r.duration,precise:!0}}for(;n--;){if(r=t.segments[n],"undefined"!=typeof r.end)return{result:i+r.end,precise:!0};if(i+=r.duration,"undefined"!=typeof r.start)return{result:i+r.start,precise:!0}}return{result:i,precise:!1}},a=function(t,e){for(var i=0,n=void 0,r=e-t.mediaSequence;r<t.segments.length;r++){if(n=t.segments[r],"undefined"!=typeof n.start)return{result:n.start-i,precise:!0};if(i+=n.duration,"undefined"!=typeof n.end)return{result:n.end-i,precise:!0}}return{result:-1,precise:!1}},s=function(t,e){var i=void 0,n=void 0;return"undefined"==typeof e&&(e=t.mediaSequence+t.segments.length),e<t.mediaSequence?0:(i=r(t,e),i.precise?i.result:(n=a(t,e),n.precise?n.result:i.result))},o=function(t,e,i){if(!t)return 0;if("undefined"==typeof i&&(i=!0),"undefined"==typeof e){if(t.totalDuration)return t.totalDuration;if(!t.endList)return window.Infinity}return s(t,e,i)};i.duration=o;var u=function(t){var i=void 0,r=void 0;return t.segments?t.endList?(0,e.createTimeRange)(0,o(t)):(i=s(t,t.mediaSequence),r=s(t,t.mediaSequence+Math.max(0,t.segments.length-n.UNSAFE_LIVE_SEGMENTS)),(0,e.createTimeRange)(i,r)):(0,e.createTimeRange)()};i.seekable=u,n.duration=o,n.seekable=u,i["default"]=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],12:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var r=t("global/document"),a=n(r),s=function(t,e){var i=a["default"].querySelector("base"),n=a["default"].querySelector("head"),r=a["default"].createElement("a"),s=i,o=void 0,u=void 0;return i?o=i.href:s=n.appendChild(a["default"].createElement("base")),s.href=t,r.href=e,u=r.href,i?i.href=o:n.removeChild(s),u};i["default"]=s,e.exports=i["default"]},{"global/document":16}],13:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t),this.listeners={}}return r(t,[{key:"on",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"off",value:function(t,e){var i=void 0;return this.listeners[t]?(i=this.listeners[t].indexOf(e),this.listeners[t].splice(i,1),i>-1):!1}},{key:"trigger",value:function(t){var e=void 0,i=void 0,n=void 0,r=void 0;if(e=this.listeners[t])if(2===arguments.length)for(n=e.length,i=0;n>i;++i)e[i].call(this,arguments[1]);else for(r=Array.prototype.slice.call(arguments,1),n=e.length,i=0;n>i;++i)e[i].apply(this,r)}},{key:"dispose",value:function(){this.listeners={}}},{key:"pipe",value:function(t){this.on("data",function(e){t.push(e)})}}]),t}();i["default"]=a,e.exports=i["default"]},{}],14:[function(t,e,i){(function(t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n="undefined"!=typeof window?window.videojs:"undefined"!=typeof t?t.videojs:null,r=function(t,e){t=(0,n.mergeOptions)({timeout:45e3},t);var i=(0,n.xhr)(t,function(t,n){!t&&i.response&&(i.responseTime=(new Date).getTime(),i.roundTripTime=i.responseTime-i.requestTime,i.bytesReceived=i.response.byteLength||i.response.length,i.bandwidth||(i.bandwidth=Math.floor(i.bytesReceived/i.roundTripTime*8*1e3))),t||i.timedout?i.timedout=i.timedout||"ETIMEDOUT"===t.code:i.timedout=!1,t||200===n.statusCode||206===n.statusCode||0===n.statusCode||(t=new Error("XHR Failed with a response of: "+(i&&(i.response||i.responseText)))),e(t,i)});return i.requestTime=(new Date).getTime(),i};i["default"]=r,e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(t,e,i){},{}],16:[function(t,e,i){(function(i){var n="undefined"!=typeof i?i:"undefined"!=typeof window?window:{},r=t("min-document");if("undefined"!=typeof document)e.exports=document;else{var a=n["__GLOBAL_DOCUMENT_CACHE@4"];a||(a=n["__GLOBAL_DOCUMENT_CACHE@4"]=r),e.exports=a}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":15}],17:[function(t,e,i){"use strict";var n;e.exports=function(t){var e=n[t.byteLength%16||0],i=new Uint8Array(t.byteLength+e.length);return i.set(t),i.set(e,t.byteLength),i},n=[[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],[14,14,14,14,14,14,14,14,14,14,14,14,14,14],[13,13,13,13,13,13,13,13,13,13,13,13,13],[12,12,12,12,12,12,12,12,12,12,12,12],[11,11,11,11,11,11,11,11,11,11,11],[10,10,10,10,10,10,10,10,10,10],[9,9,9,9,9,9,9,9,9],[8,8,8,8,8,8,8,8],[7,7,7,7,7,7,7],[6,6,6,6,6,6],[5,5,5,5,5],[4,4,4,4],[3,3,3],[2,2],[1]]},{}],18:[function(t,e,i){"use strict";i.pad=t("./pad.js"),i.unpad=t("./unpad.js")},{"./pad.js":17,"./unpad.js":19}],19:[function(t,e,i){"use strict";e.exports=function(t){return t.subarray(0,t.byteLength-t[t.byteLength-1])}},{}],20:[function(t,e,i){(function(t){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var r="undefined"!=typeof window?window.videojs:"undefined"!=typeof t?t.videojs:null,a=n(r),s=function(t){Object.defineProperties(t.frame,{id:{get:function(){return a["default"].log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),t.value.key}},value:{get:function(){return a["default"].log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),t.value.data}},privateData:{get:function(){return a["default"].log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),t.value.data}}})},o=function(t,e,i){var n=window.WebKitDataCue||window.VTTCue;e&&e.forEach(function(t){this.inbandTextTrack_.addCue(new n(t.startTime+this.timestampOffset,t.endTime+this.timestampOffset,t.text))},t),i&&i.forEach(function(t){var e=t.cueTime+this.timestampOffset;t.frames.forEach(function(t){var i=new n(e,e,t.value||t.url||t.data||"");i.frame=t,
i.value=t,s(i),this.metadataTrack_.addCue(i)},this)},t)};i["default"]=o,e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],21:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(t,e,i){i.captions&&i.captions.length&&!t.inbandTextTrack_&&(t.inbandTextTrack_=e.player_.addTextTrack("captions","cc1")),i.metadata&&i.metadata.length&&!t.metadataTrack_&&(t.metadataTrack_=e.player_.addTextTrack("metadata","Timed Metadata"),t.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)};i["default"]=n,e.exports=i["default"]},{}],22:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={TIME_BETWEEN_TICKS:Math.floor(1e3/480),TIME_PER_TICK:Math.floor(1e3/240),BYTES_PER_CHUNK:1024,MIN_CHUNK:1024,MAX_CHUNK:1048576};i["default"]=n,e.exports=i["default"]},{}],23:[function(t,e,i){(function(n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},d="undefined"!=typeof window?window.videojs:"undefined"!=typeof n?n.videojs:null,f=r(d),l=t("./flash-source-buffer"),c=r(l),h=t("./flash-constants"),p=r(h),g=function(t){function e(){var t=this;a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.sourceBuffers=[],this.readyState="closed",this.on(["sourceopen","webkitsourceopen"],function(e){t.swfObj=document.getElementById(e.swfId),t.player_=(0,f["default"])(t.swfObj.parentNode),t.tech_=t.swfObj.tech,t.readyState="open",t.tech_.on("seeking",function(){for(var e=t.sourceBuffers.length;e--;)t.sourceBuffers[e].abort()}),t.swfObj&&t.swfObj.vjs_load()})}return s(e,t),o(e,[{key:"addSeekableRange_",value:function(){}},{key:"addSourceBuffer",value:function(t){var e=void 0;if(0!==t.indexOf("video/mp2t"))throw new Error("NotSupportedError (Video.js)");return e=new c["default"](this),this.sourceBuffers.push(e),e}},{key:"endOfStream",value:function(t){"network"===t?this.tech_.error(2):"decode"===t&&this.tech_.error(3),"ended"!==this.readyState&&(this.readyState="ended",this.swfObj.vjs_endOfStream())}}]),e}(f["default"].EventTarget);i["default"]=g;try{Object.defineProperty(g.prototype,"duration",{get:function(){return this.swfObj?this.swfObj.vjs_getProperty("duration"):NaN},set:function(t){var e=void 0,i=this.swfObj.vjs_getProperty("duration");if(this.swfObj.vjs_setProperty("duration",t),i>t)for(e=0;e<this.sourceBuffers.length;e++)this.sourceBuffers[e].remove(t,i);return t}})}catch(y){g.prototype.duration=NaN}for(var m in p["default"])g[m]=p["default"][m];e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./flash-constants":22,"./flash-source-buffer":24}],24:[function(t,e,i){(function(n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},d="undefined"!=typeof window?window.videojs:"undefined"!=typeof n?n.videojs:null,f=r(d),l=t("mux.js"),c=r(l),h=t("./remove-cues-from-track"),p=r(h),g=t("./create-text-tracks-if-necessary"),y=r(g),m=t("./add-text-track-data"),b=r(m),v=t("./flash-constants"),_=r(v),w=function(t){window.setTimeout(t,_["default"].TIME_BETWEEN_TICKS)},T=function(t){function e(t){var i=this;a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this);var n=void 0;this.chunkSize_=_["default"].BYTES_PER_CHUNK,this.buffer_=[],this.bufferSize_=0,this.basePtsOffset_=NaN,this.mediaSource=t,this.updating=!1,this.timestampOffset_=0,this.segmentParser_=new c["default"].flv.Transmuxer,this.segmentParser_.on("data",this.receiveBuffer_.bind(this)),n=window.btoa(String.fromCharCode.apply(null,Array.prototype.slice.call(this.segmentParser_.getFlvHeader()))),this.mediaSource.swfObj.vjs_appendBuffer(n),Object.defineProperty(this,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&t>=0&&(this.timestampOffset_=t,this.segmentParser_=new c["default"].flv.Transmuxer,this.segmentParser_.on("data",this.receiveBuffer_.bind(this)),this.mediaSource.swfObj.vjs_discontinuity(),this.basePtsOffset_=NaN)}}),Object.defineProperty(this,"buffered",{get:function(){return f["default"].createTimeRanges(this.mediaSource.swfObj.vjs_getProperty("buffered"))}}),this.mediaSource.player_.on("seeked",function(){(0,p["default"])(0,1/0,i.metadataTrack_),(0,p["default"])(0,1/0,i.inbandTextTrack_)})}return s(e,t),o(e,[{key:"appendBuffer",value:function(t){var e=this,i=void 0,n=524288,r=0;if(this.updating)throw i=new Error("SourceBuffer.append() cannot be called while an update is in progress"),i.name="InvalidStateError",i.code=11,i;this.updating=!0,this.mediaSource.readyState="open",this.trigger({type:"update"});var a=function s(){e.segmentParser_.push(t.subarray(r,r+n)),r+=n,w(r<t.byteLength?s:e.segmentParser_.flush.bind(e.segmentParser_))};a()}},{key:"abort",value:function(){this.buffer_=[],this.bufferSize_=0,this.mediaSource.swfObj.vjs_abort(),this.updating&&(this.updating=!1,this.trigger({type:"updateend"}))}},{key:"remove",value:function(t,e){(0,p["default"])(t,e,this.metadataTrack_),(0,p["default"])(t,e,this.inbandTextTrack_),this.trigger({type:"update"}),this.trigger({type:"updateend"})}},{key:"receiveBuffer_",value:function(t){var e=this;(0,y["default"])(this,this.mediaSource,t),(0,b["default"])(this,t.captions,t.metadata),w(function(){var i=e.convertTagsToData_(t);0===e.buffer_.length&&w(e.processBuffer_.bind(e)),i&&(e.buffer_.push(i),e.bufferSize_+=i.byteLength)})}},{key:"processBuffer_",value:function(){var t=void 0,e=void 0,i=void 0,n=void 0,r=void 0,a=0,s=0,o=+new Date,u=void 0;if(!this.buffer_.length)return void(this.updating!==!1&&(this.updating=!1,this.trigger({type:"updateend"})));do{for(s++,t=this.buffer_[0].subarray(a,a+this.chunkSize_),t.byteLength<this.chunkSize_||this.buffer_[0].byteLength===a+this.chunkSize_?(a=0,this.buffer_.shift()):a+=this.chunkSize_,this.bufferSize_-=t.byteLength,n="",i=t.byteLength,e=0;i>e;e++)n+=String.fromCharCode(t[e]);r=window.btoa(n),this.mediaSource.swfObj.CallFunction('<invoke name="vjs_appendBuffer"returntype="javascript"><arguments><string>'+r+"</string></arguments></invoke>"),u=new Date-o}while(this.buffer_.length&&u<_["default"].TIME_PER_TICK);this.buffer_.length&&a&&(this.buffer_[0]=this.buffer_[0].subarray(a)),u>=_["default"].TIME_PER_TICK&&(this.chunkSize_=Math.floor(this.chunkSize_*(s/4))),this.chunkSize_=Math.max(_["default"].MIN_CHUNK,Math.min(this.chunkSize_,_["default"].MAX_CHUNK)),0!==this.bufferSize_?w(this.processBuffer_.bind(this)):(this.updating=!1,this.trigger({type:"updateend"}))}},{key:"convertTagsToData_",value:function(t){var e=0,i=this.mediaSource.tech_,n=0,r=void 0,a=void 0,s=void 0,o=[],u=this.getOrderedTags_(t);for(isNaN(this.basePtsOffset_)&&u.length&&(this.basePtsOffset_=u[0].pts),i.buffered().length&&(n=i.buffered().end(0)-this.timestampOffset),n=Math.max(n,i.currentTime()-this.timestampOffset),n*=1e3,n+=this.basePtsOffset_,r=0;r<u.length;r++)u[r].pts>=n&&o.push(u[r]);if(0!==o.length){for(r=0;r<o.length;r++)e+=o[r].bytes.byteLength;for(s=new Uint8Array(e),r=0,a=0;r<o.length;r++)s.set(o[r].bytes,a),a+=o[r].bytes.byteLength;return s}}},{key:"getOrderedTags_",value:function(t){for(var e=t.tags.videoTags,i=t.tags.audioTags,n=void 0,r=[];e.length||i.length;)n=e.length?i.length&&i[0].dts<e[0].dts?i.shift():e.shift():i.shift(),r.push(n.finalize());return r}}]),e}(f["default"].EventTarget);i["default"]=T,e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./add-text-track-data":20,"./create-text-tracks-if-necessary":21,"./flash-constants":22,"./remove-cues-from-track":26,"mux.js":37}],25:[function(t,e,i){(function(n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},d="undefined"!=typeof window?window.videojs:"undefined"!=typeof n?n.videojs:null,f=r(d),l=t("./virtual-source-buffer"),c=r(l),h=function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t,e,i){var n=("00"+Number(e).toString(16)).slice(-2),r=("00"+Number(i).toString(16)).slice(-2);return"avc1."+n+"00"+r})},p=function(t){function e(){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,f["default"].EventTarget);var t=this,i=void 0;this.mediaSource_=new window.MediaSource;for(i in this.mediaSource_)i in e.prototype||"function"!=typeof this.mediaSource_[i]||(this[i]=this.mediaSource_[i].bind(this.mediaSource_));this.duration_=NaN,Object.defineProperty(this,"duration",{get:function(){return t.duration_===1/0?t.duration_:t.mediaSource_.duration},set:function(e){return t.duration_=e,e!==1/0?void(t.mediaSource_.duration=e):void 0}}),Object.defineProperty(this,"seekable",{get:function(){return this.duration_===1/0?f["default"].createTimeRanges([[0,t.mediaSource_.duration]]):t.mediaSource_.seekable}}),Object.defineProperty(this,"readyState",{get:function(){return t.mediaSource_.readyState}}),this.sourceBuffers=[],["sourceopen","sourceclose","sourceended"].forEach(function(t){this.mediaSource_.addEventListener(t,this.trigger.bind(this))},this),this.on("sourceopen",function(e){var i=document.querySelector('[src="'+t.url_+'"]');i&&(t.player_=(0,f["default"])(i.parentNode))}),this.on("sourceclose",function(t){this.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.terminate()}),this.sourceBuffers.length=0})}return s(e,t),o(e,[{key:"addSeekableRange_",value:function(t,e){var i=void 0;if(this.duration!==1/0)throw i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity"),i.name="InvalidStateError",i.code=11,i;(e>this.mediaSource_.duration||isNaN(this.mediaSource_.duration))&&(this.mediaSource_.duration=e)}},{key:"addSourceBuffer",value:function(t){var e=void 0,i=void 0,n=void 0,r=void 0,a=/avc1\.[\da-f]+/i,s=/mp4a\.\d+.\d+/i;return/^video\/mp2t/i.test(t)?(i=t.split(";").slice(1).join(";"),i=h(i),n=(i.match(a)||[])[0],r=(i.match(s)||[])[0],n&&n.length||(n="avc1.4d400d"),r&&r.length||(r="mp4a.40.2"),e=new c["default"](this,[n,r]),this.sourceBuffers.push(e),e):(e=this.mediaSource_.addSourceBuffer(t),this.sourceBuffers.push(e),e)}}]),e}(f["default"].EventTarget);i["default"]=p,e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./virtual-source-buffer":29}],26:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(t,e,i){var n=void 0,r=void 0;if(i)for(n=i.cues.length;n--;)r=i.cues[n],r.startTime<=e&&r.endTime>=t&&i.removeCue(r)};i["default"]=n,e.exports=i["default"]},{}],27:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var r=t("mux.js"),a=n(r),s=void 0,o={},u=function(t){t.on("data",function(t){var e=t.data;t.data=e.buffer,postMessage({action:"data",segment:t,byteOffset:e.byteOffset,byteLength:e.byteLength},[t.data])}),t.captionStream&&t.captionStream.on("data",function(t){postMessage({action:"caption",data:t})}),t.on("done",function(t){postMessage({action:"done"})})},d={init:function(t){o=t&&t.options||{},this.defaultInit()},defaultInit:function(){s&&s.dispose(),s=new a["default"].mp4.Transmuxer(o),u(s)},push:function(t){var e=new Uint8Array(t.data,t.byteOffset,t.byteLength);s.push(e)},reset:function(){this.defaultInit()},setTimestampOffset:function(t){var e=t.timestampOffset||0;s.setBaseMediaDecodeTime(Math.round(9e4*e))},flush:function(t){s.flush()}},f=function(t){t.onmessage=function(t){s||"init"===t.data.action||d.defaultInit(),t.data&&t.data.action&&d[t.data.action]&&d[t.data.action](t.data)}};i["default"]=f,e.exports=i["default"]},{"mux.js":37}],28:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var r=t("./flash-media-source"),a=n(r),s=t("./html-media-source"),o=n(s),u=window.videojs,d=0,f={mode:"auto"};u.mediaSources={};var l=function(t,e){var i=u.mediaSources[t];if(!i)throw new Error("Media Source not found (Video.js)");i.trigger({type:"sourceopen",swfId:e})},c=function(){return!!window.MediaSource&&window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},h=function(t){var e=u.mergeOptions(f,t);return this.MediaSource={open:l,supportsNativeMediaSources:c},"html5"===e.mode||"auto"===e.mode&&c()?new o["default"]:new a["default"]};i.MediaSource=h,h.open=l,h.supportsNativeMediaSources=c;var p={createObjectURL:function(t){var e="blob:vjs-media-source/",i=void 0;return t instanceof o["default"]?(i=window.URL.createObjectURL(t.mediaSource_),t.url_=i,i):t instanceof a["default"]?(i=e+d,d++,u.mediaSources[i]=t,i):(i=window.URL.createObjectURL(t),t.url_=i,i)}};i.URL=p,u.MediaSource=h,u.URL=p},{"./flash-media-source":23,"./html-media-source":25}],29:[function(t,e,i){(function(n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},d="undefined"!=typeof window?window.videojs:"undefined"!=typeof n?n.videojs:null,f=r(d),l=t("./create-text-tracks-if-necessary"),c=r(l),h=t("./remove-cues-from-track"),p=r(h),g=t("./add-text-track-data"),y=r(g),m=t("webworkify"),b=r(m),v=t("./transmuxer-worker"),_=r(v),w=function(t,e,i){return function(){return t[e]&&t[e].updating?void 0:t.trigger(i)}},T=function(t){function e(t,i){var n=this;a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,f["default"].EventTarget),this.timestampOffset_=0,this.pendingBuffers_=[],this.bufferUpdating_=!1,this.mediaSource_=t,this.codecs_=i,this.transmuxer_=(0,b["default"])(_["default"]),this.transmuxer_.postMessage({action:"init",options:{remux:!1}}),this.transmuxer_.onmessage=function(t){return"data"===t.data.action?n.data_(t):"done"===t.data.action?n.done_(t):void 0},Object.defineProperty(this,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&t>=0&&(this.timestampOffset_=t,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:t}))}}),Object.defineProperty(this,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(t){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=t),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=t)}}),Object.defineProperty(this,"updating",{get:function(){return this.bufferUpdating_||this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating}}),Object.defineProperty(this,"buffered",{get:function(){var t=null,e=null,i=0,n=[],r=[];if(!(this.videoBuffer_&&0!==this.videoBuffer_.buffered.length||this.audioBuffer_&&0!==this.audioBuffer_.buffered.length))return f["default"].createTimeRange();if(!this.videoBuffer_)return this.audioBuffer_.buffered;if(!this.audioBuffer_)return this.videoBuffer_.buffered;for(var a=this.videoBuffer_.buffered,s=this.audioBuffer_.buffered,o=a.length;o--;)n.push({time:a.start(o),type:"start"}),n.push({time:a.end(o),type:"end"});for(o=s.length;o--;)n.push({time:s.start(o),type:"start"}),n.push({time:s.end(o),type:"end"});for(n.sort(function(t,e){return t.time-e.time}),o=0;o<n.length;o++)"start"===n[o].type?(i++,2===i&&(t=n[o].time)):"end"===n[o].type&&(i--,1===i&&(e=n[o].time)),null!==t&&null!==e&&(r.push([t,e]),t=null,e=null);return f["default"].createTimeRanges(r)}})}return s(e,t),o(e,[{key:"data_",value:function(t){var e=t.data.segment,i=this.mediaSource_.mediaSource_;e.data=new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),"video"===e.type?this.videoBuffer_||(this.videoBuffer_=i.addSourceBuffer('video/mp4;codecs="'+this.codecs_[0]+'"'),this.videoBuffer_.addEventListener("updatestart",w(this,"audioBuffer_","updatestart")),this.videoBuffer_.addEventListener("update",w(this,"audioBuffer_","update")),this.videoBuffer_.addEventListener("updateend",w(this,"audioBuffer_","updateend"))):"audio"===e.type?this.audioBuffer_||(this.audioBuffer_=i.addSourceBuffer('audio/mp4;codecs="'+this.codecs_[1]+'"'),this.audioBuffer_.addEventListener("updatestart",w(this,"videoBuffer_","updatestart")),this.audioBuffer_.addEventListener("update",w(this,"videoBuffer_","update")),this.audioBuffer_.addEventListener("updateend",w(this,"videoBuffer_","updateend"))):"combined"===e.type&&(this.videoBuffer_||(this.videoBuffer_=i.addSourceBuffer('video/mp4;codecs="'+this.codecs_.join(",")+'"'),this.videoBuffer_.addEventListener("updatestart",w(this,"videoBuffer_","updatestart")),this.videoBuffer_.addEventListener("update",w(this,"videoBuffer_","update")),this.videoBuffer_.addEventListener("updateend",w(this,"videoBuffer_","updateend")))),(0,c["default"])(this,this.mediaSource_,e),this.pendingBuffers_.push(e)}},{key:"done_",value:function(){this.processPendingSegments_()}},{key:"appendBuffer",value:function(t){this.bufferUpdating_=!0,this.transmuxer_.postMessage({action:"push",data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength},[t.buffer]),this.transmuxer_.postMessage({action:"flush"})}},{key:"remove",value:function(t,e){this.videoBuffer_&&this.videoBuffer_.remove(t,e),this.audioBuffer_&&this.audioBuffer_.remove(t,e),(0,p["default"])(t,e,this.metadataTrack_),(0,p["default"])(t,e,this.inbandTextTrack_)}},{key:"processPendingSegments_",value:function(){var t={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]};t=this.pendingBuffers_.reduce(function(t,e){var i=e.type,n=e.data;return"combined"===i&&(i="video"),t[i].segments.push(n),t[i].bytes+=n.byteLength,e.captions&&(t.captions=t.captions.concat(e.captions)),e.metadata&&(t.metadata=t.metadata.concat(e.metadata)),t},t),(0,y["default"])(this,t.captions,t.metadata),this.concatAndAppendSegments_(t.video,this.videoBuffer_),this.concatAndAppendSegments_(t.audio,this.audioBuffer_),this.pendingBuffers_.length=0,this.bufferUpdating_=!1}},{key:"concatAndAppendSegments_",value:function(t,e){var i=0,n=void 0;t.bytes&&(n=new Uint8Array(t.bytes),t.segments.forEach(function(t){n.set(t,i),i+=t.byteLength}),e.appendBuffer(n))}},{key:"abort",value:function(){this.videoBuffer_&&this.videoBuffer_.abort(),this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1}}]),e}(f["default"].EventTarget);i["default"]=T,e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./add-text-track-data":20,"./create-text-tracks-if-necessary":21,"./remove-cues-from-track":26,"./transmuxer-worker":27,webworkify:50}],30:[function(t,e,i){"use strict";var n,r=t("../utils/stream.js");n=function(){var t,e=0;n.prototype.init.call(this),this.setTimestamp=function(t){e=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9],n=t[e+5],r=(16&n)>>4;return r?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,n=t[e+4]<<3,r=6144&t[e+3];return r|n|i},this.push=function(i){var n,r,a,s=0,o=0;for(void 0!==t&&t.length?(a=t.length,t=new Uint8Array(i.byteLength+a),t.set(t.subarray(0,a)),t.set(i,a)):t=i;t.length-o>=10;)if(t[o]!=="I".charCodeAt(0)||t[o+1]!=="D".charCodeAt(0)||t[o+2]!=="3".charCodeAt(0))if(t[o]&!0&&240===(240&t[o+1])){if(s=this.parseAdtsSize(t,o),s>t.length)break;r={type:"audio",data:t.subarray(o,o+s),pts:e,dts:e},this.trigger("data",r),o+=s}else o++;else{if(s=this.parseId3TagSize(t,o),s>t.length)break;n={type:"timed-metadata",data:t.subarray(o,o+s)},this.trigger("data",n),o+=s}}},n.prototype=new r,e.exports=n},{"../utils/stream.js":49}],31:[function(t,e,i){"use strict";var n,r=t("../utils/stream.js"),a=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];n=function(){var t,e;n.prototype.init.call(this),t=this,this.push=function(t){var i,n,r,s,o,u,d=0,f=0;if("audio"===t.type)for(e?(s=e,e=new Uint8Array(s.byteLength+t.data.byteLength),e.set(s),e.set(t.data,s.byteLength)):e=t.data;d+5<e.length;)if(255===e[d]&&240===(246&e[d+1])){if(n=2*(1&~e[d+1]),i=(3&e[d+3])<<11|e[d+4]<<3|(224&e[d+5])>>5,o=1024*((3&e[d+6])+1),u=9e4*o/a[(60&e[d+2])>>>2],r=d+i,e.byteLength<r)return;if(this.trigger("data",{pts:t.pts+f*u,dts:t.dts+f*u,sampleCount:o,audioobjecttype:(e[d+2]>>>6&3)+1,channelcount:(1&e[d+2])<<3|(192&e[d+3])>>>6,samplerate:a[(60&e[d+2])>>>2],samplingfrequencyindex:(60&e[d+2])>>>2,samplesize:16,data:e.subarray(d+7+n,r)}),e.byteLength===r)return void(e=void 0);f++,e=e.subarray(r)}else d++},this.flush=function(){this.trigger("done")}},n.prototype=new r,e.exports=n},{"../utils/stream.js":49}],32:[function(t,e,i){"use strict";var n,r,a=t("../utils/stream.js"),s=t("../utils/exp-golomb.js");r=function(){var t,e,i=0;r.prototype.init.call(this),this.push=function(n){var r;for(e?(r=new Uint8Array(e.byteLength+n.data.byteLength),r.set(e),r.set(n.data,e.byteLength),e=r):e=n.data;i<e.byteLength-3;i++)if(1===e[i+2]){t=i+5;break}for(;t<e.byteLength;)switch(e[t]){case 0:if(0!==e[t-1]){t+=2;break}if(0!==e[t-2]){t++;break}this.trigger("data",e.subarray(i+3,t-2));do t++;while(1!==e[t]&&t<e.length);i=t-2,t+=3;break;case 1:if(0!==e[t-1]||0!==e[t-2]){t+=3;break}this.trigger("data",e.subarray(i+3,t-2)),i=t-2,t+=3;break;default:t+=3}e=e.subarray(i),t-=i,i=0},this.flush=function(){e&&e.byteLength>3&&this.trigger("data",e.subarray(i+3)),e=null,i=0,this.trigger("done")}},r.prototype=new a,n=function(){var t,e,i,a,o,u,d,f=new r;n.prototype.init.call(this),t=this,this.push=function(t){"video"===t.type&&(e=t.trackId,i=t.pts,a=t.dts,f.push(t))},f.on("data",function(n){var r={trackId:e,pts:i,dts:a,data:n};switch(31&n[0]){case 5:r.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:r.nalUnitType="sei_rbsp",r.escapedRBSP=o(n.subarray(1));break;case 7:r.nalUnitType="seq_parameter_set_rbsp",r.escapedRBSP=o(n.subarray(1)),r.config=u(r.escapedRBSP);break;case 8:r.nalUnitType="pic_parameter_set_rbsp";break;case 9:r.nalUnitType="access_unit_delimiter_rbsp"}t.trigger("data",r)}),f.on("done",function(){t.trigger("done")}),this.flush=function(){f.flush()},d=function(t,e){var i,n,r=8,a=8;for(i=0;t>i;i++)0!==a&&(n=e.readExpGolomb(),a=(r+n+256)%256),r=0===a?r:a},o=function(t){for(var e,i,n=t.byteLength,r=[],a=1;n-2>a;)0===t[a]&&0===t[a+1]&&3===t[a+2]?(r.push(a+2),a+=2):a++;if(0===r.length)return t;e=n-r.length,i=new Uint8Array(e);var s=0;for(a=0;e>a;s++,a++)s===r[0]&&(s++,r.shift()),i[a]=t[s];return i},u=function(t){var e,i,n,r,a,o,u,f,l,c,h,p,g=0,y=0,m=0,b=0;if(e=new s(t),i=e.readUnsignedByte(),r=e.readUnsignedByte(),n=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),(100===i||110===i||122===i||244===i||44===i||83===i||86===i||118===i||128===i||138===i||139===i||134===i)&&(a=e.readUnsignedExpGolomb(),3===a&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(h=3!==a?8:12,p=0;h>p;p++)e.readBoolean()&&(6>p?d(16,e):d(64,e));if(e.skipUnsignedExpGolomb(),o=e.readUnsignedExpGolomb(),0===o)e.readUnsignedExpGolomb();else if(1===o)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),u=e.readUnsignedExpGolomb(),p=0;u>p;p++)e.skipExpGolomb();return e.skipUnsignedExpGolomb(),e.skipBits(1),f=e.readUnsignedExpGolomb(),l=e.readUnsignedExpGolomb(),c=e.readBits(1),0===c&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(g=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb(),m=e.readUnsignedExpGolomb(),b=e.readUnsignedExpGolomb()),{profileIdc:i,levelIdc:n,profileCompatibility:r,width:16*(f+1)-2*g-2*y,height:(2-c)*(l+1)*16-2*m-2*b}}},n.prototype=new a,e.exports={H264Stream:n,NalByteStream:r}},{"../utils/exp-golomb.js":48,"../utils/stream.js":49}],33:[function(t,e,i){e.exports={adts:t("./adts"),h264:t("./h264")}},{"./adts":31,"./h264":32}],34:[function(t,e,i){"use strict";var n;n=function(t,e){var i,r=0,a=16384,s=function(t,e){var i,n=t.position+e;n<t.bytes.byteLength||(i=new Uint8Array(2*n),i.set(t.bytes.subarray(0,t.position),0),t.bytes=i,t.view=new DataView(t.bytes.buffer))},o=n.widthBytes||new Uint8Array("width".length),u=n.heightBytes||new Uint8Array("height".length),d=n.videocodecidBytes||new Uint8Array("videocodecid".length);if(!n.widthBytes){for(i=0;i<"width".length;i++)o[i]="width".charCodeAt(i);for(i=0;i<"height".length;i++)u[i]="height".charCodeAt(i);for(i=0;i<"videocodecid".length;i++)d[i]="videocodecid".charCodeAt(i);n.widthBytes=o,n.heightBytes=u,n.videocodecidBytes=d}switch(this.keyFrame=!1,t){case n.VIDEO_TAG:this.length=16,a*=6;break;case n.AUDIO_TAG:this.length=13,this.keyFrame=!0;break;case n.METADATA_TAG:this.length=29,this.keyFrame=!0;break;default:throw"Error Unknown TagType"}this.bytes=new Uint8Array(a),this.view=new DataView(this.bytes.buffer),this.bytes[0]=t,this.position=this.length,this.keyFrame=e,this.pts=0,this.dts=0,this.writeBytes=function(t,e,i){var n,r=e||0;i=i||t.byteLength,n=r+i,s(this,i),this.bytes.set(t.subarray(r,n),this.position),this.position+=i,this.length=Math.max(this.length,this.position)},this.writeByte=function(t){s(this,1),this.bytes[this.position]=t,this.position++,this.length=Math.max(this.length,this.position)},this.writeShort=function(t){s(this,2),this.view.setUint16(this.position,t),this.position+=2,this.length=Math.max(this.length,this.position)},this.negIndex=function(t){return this.bytes[this.length-t]},this.nalUnitSize=function(){return 0===r?0:this.length-(r+4)},this.startNalUnit=function(){if(r>0)throw new Error("Attempted to create new NAL wihout closing the old one");r=this.length,this.length+=4,this.position=this.length},this.endNalUnit=function(t){var e,i;this.length===r+4?this.length-=4:r>0&&(e=r+4,i=this.length-e,this.position=r,this.view.setUint32(this.position,i),this.position=this.length,t&&t.push(this.bytes.subarray(e,e+i))),r=0},this.writeMetaDataDouble=function(t,e){var i;if(s(this,2+t.length+9),this.view.setUint16(this.position,t.length),this.position+=2,"width"===t)this.bytes.set(o,this.position),this.position+=5;else if("height"===t)this.bytes.set(u,this.position),this.position+=6;else if("videocodecid"===t)this.bytes.set(d,this.position),this.position+=12;else for(i=0;i<t.length;i++)this.bytes[this.position]=t.charCodeAt(i),this.position++;this.position++,this.view.setFloat64(this.position,e),this.position+=8,this.length=Math.max(this.length,this.position),++r},this.writeMetaDataBoolean=function(t,e){var i;for(s(this,2),this.view.setUint16(this.position,t.length),this.position+=2,i=0;i<t.length;i++)s(this,1),this.bytes[this.position]=t.charCodeAt(i),this.position++;s(this,2),this.view.setUint8(this.position,1),this.position++,this.view.setUint8(this.position,e?1:0),this.position++,this.length=Math.max(this.length,this.position),++r},this.finalize=function(){var t,i;switch(this.bytes[0]){case n.VIDEO_TAG:this.bytes[11]=7|(this.keyFrame||e?16:32),this.bytes[12]=e?0:1,t=this.pts-this.dts,this.bytes[13]=(16711680&t)>>>16,this.bytes[14]=(65280&t)>>>8,this.bytes[15]=(255&t)>>>0;break;case n.AUDIO_TAG:this.bytes[11]=175,this.bytes[12]=e?0:1;break;case n.METADATA_TAG:this.position=11,this.view.setUint8(this.position,2),this.position++,this.view.setUint16(this.position,10),this.position+=2,this.bytes.set([111,110,77,101,116,97,68,97,116,97],this.position),this.position+=10,this.bytes[this.position]=8,this.position++,this.view.setUint32(this.position,r),this.position=this.length,this.bytes.set([0,0,9],this.position),this.position+=3,this.length=this.position}return i=this.length-11,this.bytes[1]=(16711680&i)>>>16,this.bytes[2]=(65280&i)>>>8,this.bytes[3]=(255&i)>>>0,this.bytes[4]=(16711680&this.dts)>>>16,this.bytes[5]=(65280&this.dts)>>>8,this.bytes[6]=(255&this.dts)>>>0,this.bytes[7]=(4278190080&this.dts)>>>24,this.bytes[8]=0,this.bytes[9]=0,this.bytes[10]=0,s(this,4),this.view.setUint32(this.length,this.length),this.length+=4,this.position+=4,this.bytes=this.bytes.subarray(0,this.length),this.frameTime=n.frameTime(this.bytes),this}},n.AUDIO_TAG=8,n.VIDEO_TAG=9,n.METADATA_TAG=18,n.isAudioFrame=function(t){return n.AUDIO_TAG===t[0]},n.isVideoFrame=function(t){return n.VIDEO_TAG===t[0]},n.isMetaData=function(t){return n.METADATA_TAG===t[0]},n.isKeyFrame=function(t){return n.isVideoFrame(t)?23===t[11]:n.isAudioFrame(t)?!0:!!n.isMetaData(t);
},n.frameTime=function(t){var e=t[4]<<16;return e|=t[5]<<8,e|=t[6]<<0,e|=t[7]<<24},e.exports=n},{}],35:[function(t,e,i){e.exports={tag:t("./flv-tag"),Transmuxer:t("./transmuxer"),tools:t("../tools/flv-inspector")}},{"../tools/flv-inspector":46,"./flv-tag":34,"./transmuxer":36}],36:[function(t,e,i){"use strict";var n,r,a,s,o,u,d,f=t("../utils/stream.js"),l=t("./flv-tag.js"),c=t("../m2ts/m2ts.js"),h=t("../codecs/adts.js"),p=t("../codecs/h264").H264Stream;o=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts?t.timelineStartInfo.pts=e.pts:t.timelineStartInfo.pts=Math.min(t.timelineStartInfo.pts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts?t.timelineStartInfo.dts=e.dts:t.timelineStartInfo.dts=Math.min(t.timelineStartInfo.dts,e.dts))},u=function(t,e){var i=new l(l.METADATA_TAG);return i.dts=e,i.pts=e,i.writeMetaDataDouble("videocodecid",7),i.writeMetaDataDouble("width",t.width),i.writeMetaDataDouble("height",t.height),i},d=function(t,e){var i,n=new l(l.VIDEO_TAG,!0);for(n.dts=e,n.pts=e,n.writeByte(1),n.writeByte(t.profileIdc),n.writeByte(t.profileCompatibility),n.writeByte(t.levelIdc),n.writeByte(255),n.writeByte(225),n.writeShort(t.sps[0].length),n.writeBytes(t.sps[0]),n.writeByte(t.pps.length),i=0;i<t.pps.length;++i)n.writeShort(t.pps[i].length),n.writeBytes(t.pps[i]);return n},a=function(t){var e,i=[];a.prototype.init.call(this),this.push=function(e){o(t,e),t&&void 0===t.channelcount&&(t.audioobjecttype=e.audioobjecttype,t.channelcount=e.channelcount,t.samplerate=e.samplerate,t.samplingfrequencyindex=e.samplingfrequencyindex,t.samplesize=e.samplesize,t.extraData=t.audioobjecttype<<11|t.samplingfrequencyindex<<7|t.channelcount<<3),e.pts=Math.round(e.pts/90),e.dts=Math.round(e.dts/90),i.push(e)},this.flush=function(){var n,r,a,s=[];if(0===i.length)return void this.trigger("done");for(a=-(1/0);i.length;)n=i.shift(),(t.extraData!==e||n.pts-a>=1e3)&&(r=new l(l.METADATA_TAG),r.pts=n.pts,r.dts=n.dts,r.writeMetaDataDouble("audiocodecid",10),r.writeMetaDataBoolean("stereo",2===t.channelcount),r.writeMetaDataDouble("audiosamplerate",t.samplerate),r.writeMetaDataDouble("audiosamplesize",16),s.push(r),e=t.extraData,r=new l(l.AUDIO_TAG,!0),r.pts=n.pts,r.dts=n.dts,r.view.setUint16(r.position,t.extraData),r.position+=2,r.length=Math.max(r.length,r.position),s.push(r),a=n.pts),r=new l(l.AUDIO_TAG),r.pts=n.pts,r.dts=n.dts,r.writeBytes(n.data),s.push(r);e=null,this.trigger("data",{track:t,tags:s}),this.trigger("done")}},a.prototype=new f,r=function(t){var e,i,n=[];r.prototype.init.call(this),this.finishFrame=function(i,n){n&&(e&&t&&t.newMetadata&&(n.keyFrame||0===i.length)&&(i.push(u(e,n.pts)),i.push(d(t,n.pts)),t.newMetadata=!1),n.endNalUnit(),i.push(n))},this.push=function(e){o(t,e),e.pts=Math.round(e.pts/90),e.dts=Math.round(e.dts/90),n.push(e)},this.flush=function(){for(var r,a=[];n.length&&"access_unit_delimiter_rbsp"!==n[0].nalUnitType;)n.shift();if(0===n.length)return void this.trigger("done");for(;n.length;)r=n.shift(),"seq_parameter_set_rbsp"===r.nalUnitType?(t.newMetadata=!0,e=r.config,t.width=e.width,t.height=e.height,t.sps=[r.data],t.profileIdc=e.profileIdc,t.levelIdc=e.levelIdc,t.profileCompatibility=e.profileCompatibility,i.endNalUnit()):"pic_parameter_set_rbsp"===r.nalUnitType?(t.newMetadata=!0,t.pps=[r.data],i.endNalUnit()):"access_unit_delimiter_rbsp"===r.nalUnitType?(i&&this.finishFrame(a,i),i=new l(l.VIDEO_TAG),i.pts=r.pts,i.dts=r.dts):("slice_layer_without_partitioning_rbsp_idr"===r.nalUnitType&&(i.keyFrame=!0),i.endNalUnit()),i.startNalUnit(),i.writeBytes(r.data);i&&this.finishFrame(a,i),this.trigger("data",{track:t,tags:a}),this.trigger("done")}},r.prototype=new f,s=function(t){this.numberOfTracks=0,this.metadataStream=t.metadataStream,this.videoTags=[],this.audioTags=[],this.videoTrack=null,this.audioTrack=null,this.pendingCaptions=[],this.pendingMetadata=[],this.pendingTracks=0,s.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):("video"===t.track.type&&(this.videoTrack=t.track,this.videoTags=t.tags,this.pendingTracks++),void("audio"===t.track.type&&(this.audioTrack=t.track,this.audioTags=t.tags,this.pendingTracks++)))}},s.prototype=new f,s.prototype.flush=function(){var t,e,i,n,r={tags:{},captions:[],metadata:[]};if(!(this.pendingTracks<this.numberOfTracks)){for(this.videoTrack?n=this.videoTrack.timelineStartInfo.pts:this.audioTrack&&(n=this.audioTrack.timelineStartInfo.pts),r.tags.videoTags=this.videoTags,r.tags.audioTags=this.audioTags,i=0;i<this.pendingCaptions.length;i++)e=this.pendingCaptions[i],e.startTime=e.startPts-n,e.startTime/=9e4,e.endTime=e.endPts-n,e.endTime/=9e4,r.captions.push(e);for(i=0;i<this.pendingMetadata.length;i++)t=this.pendingMetadata[i],t.cueTime=t.pts-n,t.cueTime/=9e4,r.metadata.push(t);r.metadata.dispatchType=this.metadataStream.dispatchType,this.videoTrack=null,this.audioTrack=null,this.videoTags=[],this.audioTags=[],this.pendingCaptions.length=0,this.pendingMetadata.length=0,this.pendingTracks=0,this.trigger("data",r),this.trigger("done")}},n=function(t){var e,i,o,u,d,f,g,y,m,b=this;n.prototype.init.call(this),t=t||{},this.metadataStream=new c.MetadataStream,t.metadataStream=this.metadataStream,e=new c.TransportPacketStream,i=new c.TransportParseStream,o=new c.ElementaryStream,u=new h,d=new p,m=new s(t),e.pipe(i).pipe(o),o.pipe(d),o.pipe(u),o.pipe(this.metadataStream).pipe(m),y=new c.CaptionStream,d.pipe(y).pipe(m),o.on("data",function(t){var e,i,n;if("metadata"===t.type){for(e=t.tracks.length;e--;)"video"===t.tracks[e].type?i=t.tracks[e]:"audio"===t.tracks[e].type&&(n=t.tracks[e]);i&&!f&&(m.numberOfTracks++,f=new r(i),d.pipe(f).pipe(m)),n&&!g&&(m.numberOfTracks++,g=new a(n),u.pipe(g).pipe(m))}}),this.push=function(t){e.push(t)},this.flush=function(){e.flush()},m.on("data",function(t){b.trigger("data",t)}),m.on("done",function(){b.trigger("done")}),this.getFlvHeader=function(t,e,i){var n,r,a,s=new Uint8Array(9),o=new DataView(s.buffer);return t=t||0,e=void 0===e?!0:e,i=void 0===i?!0:i,o.setUint8(0,70),o.setUint8(1,76),o.setUint8(2,86),o.setUint8(3,1),o.setUint8(4,(e?4:0)|(i?1:0)),o.setUint32(5,s.byteLength),0>=t?(r=new Uint8Array(s.byteLength+4),r.set(s),r.set([0,0,0,0],s.byteLength),r):(n=new l(l.METADATA_TAG),n.pts=n.dts=0,n.writeMetaDataDouble("duration",t),a=n.finalize().length,r=new Uint8Array(s.byteLength+a),r.set(s),r.set(o.byteLength,a),r)}},n.prototype=new f,e.exports=n},{"../codecs/adts.js":31,"../codecs/h264":32,"../m2ts/m2ts.js":40,"../utils/stream.js":49,"./flv-tag.js":34}],37:[function(t,e,i){"use strict";var n={codecs:t("./codecs"),mp4:t("./mp4"),flv:t("./flv"),mp2t:t("./m2ts")};e.exports=n},{"./codecs":33,"./flv":35,"./m2ts":39,"./mp4":43}],38:[function(t,e,i){"use strict";var n=4,r=128,a=t("../utils/stream"),s=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},a=0,s=0;e<t.byteLength&&t[e]!==r;){for(;255===t[e];)a+=255,e++;for(a+=t[e++];255===t[e];)s+=255,e++;if(s+=t[e++],!i.payload&&a===n){i.payloadType=a,i.payloadSize=s,i.payload=t.subarray(e,e+s);break}e+=s,a=0,s=0}return i},o=function(t){return 181!==t.payload[0]?null:49!==(t.payload[1]<<8|t.payload[2])?null:"GA94"!==String.fromCharCode(t.payload[3],t.payload[4],t.payload[5],t.payload[6])?null:3!==t.payload[7]?null:t.payload.subarray(8,t.payload.length-1)},u=function(t,e){var i,n,r,a,s=[];if(!(64&e[0]))return s;for(n=31&e[0],i=0;n>i;i++)r=3*i,a={type:3&e[r+2],pts:t},4&e[r+2]&&(a.ccData=e[r+3]<<8|e[r+4],s.push(a));return s},d=function(){d.prototype.init.call(this),this.captionPackets_=[],this.field1_=new k,this.field1_.on("data",this.trigger.bind(this,"data")),this.field1_.on("done",this.trigger.bind(this,"done"))};d.prototype=new a,d.prototype.push=function(t){var e,i;"sei_rbsp"===t.nalUnitType&&(e=s(t.escapedRBSP),e.payloadType===n&&(i=o(e),i&&(this.captionPackets_=this.captionPackets_.concat(u(t.pts,i)))))},d.prototype.flush=function(){return this.captionPackets_.length?(this.captionPackets_.sort(function(t,e){return t.pts-e.pts}),this.captionPackets_.forEach(this.field1_.push,this.field1_),this.captionPackets_.length=0,void this.field1_.flush()):void this.field1_.flush()};var f={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608},l=function(t){return null===t?"":(t=f[t]||t,String.fromCharCode(t))},c=0,h=5152,p=5167,g=5157,y=5158,m=5159,b=5165,v=5153,_=5164,w=5166,T=14,S=function(){for(var t=[],e=T+1;e--;)t.push("");return t},k=function(){k.prototype.init.call(this),this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=S(),this.nonDisplayed_=S(),this.lastControlCode_=null,this.push=function(t){if(0===t.type){var e,i,n,r;if(e=32639&t.ccData,e===this.lastControlCode_)return void(this.lastControlCode_=null);switch(4096===(61440&e)?this.lastControlCode_=e:this.lastControlCode_=null,e){case c:break;case h:this.mode_="popOn";break;case p:this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts;break;case g:this.topRow_=T-1,this.mode_="rollUp";break;case y:this.topRow_=T-2,this.mode_="rollUp";break;case m:this.topRow_=T-3,this.mode_="rollUp";break;case b:this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts;break;case v:"popOn"===this.mode_?this.nonDisplayed_[T]=this.nonDisplayed_[T].slice(0,-1):this.displayed_[T]=this.displayed_[T].slice(0,-1);break;case _:this.flushDisplayed(t.pts),this.displayed_=S();break;case w:this.nonDisplayed_=S();break;default:if(n=e>>>8,r=255&e,n>=16&&23>=n&&r>=64&&127>=r&&(16!==n||96>r)&&(n=32,r=null),(17===n||25===n)&&r>=48&&63>=r&&(n=14850474,r=""),16===(240&n))return;this[this.mode_](t.pts,n,r)}}}};k.prototype=new a,k.prototype.flushDisplayed=function(t){var e,i;for(i=0;i<this.displayed_.length;i++)e=this.displayed_[i],e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e.trim()})},k.prototype.popOn=function(t,e,i){var n=this.nonDisplayed_[T];n+=l(e),n+=l(i),this.nonDisplayed_[T]=n},k.prototype.rollUp=function(t,e,i){var n=this.displayed_[T];""===n&&(this.flushDisplayed(t),this.startPts_=t),n+=l(e),n+=l(i),this.displayed_[T]=n},k.prototype.shiftRowsUp_=function(){var t;for(t=0;t<this.topRow_;t++)this.displayed_[t]="";for(t=this.topRow_;T>t;t++)this.displayed_[t]=this.displayed_[t+1];this.displayed_[T]=""},e.exports={CaptionStream:d,Cea608Stream:k}},{"../utils/stream":49}],39:[function(t,e,i){e.exports=t("./m2ts")},{"./m2ts":40}],40:[function(t,e,i){"use strict";var n,r,a,s=t("../utils/stream.js"),o=t("./caption-stream"),u=t("./stream-types"),s=t("../utils/stream.js"),d=t("./stream-types.js"),f=188,l=71,n=function(){var t=new Uint8Array(f),e=0;n.prototype.init.call(this),this.push=function(i){var n,r=0,a=f;for(e?(n=new Uint8Array(i.byteLength+e),n.set(t.subarray(0,e)),n.set(i,e),e=0):n=i;a<n.byteLength;)n[r]!==l||n[a]!==l?(r++,a++):(this.trigger("data",n.subarray(r,a)),r+=f,a+=f);r<n.byteLength&&(t.set(n.subarray(r),0),e=n.byteLength-r)},this.flush=function(){e===f&&t[0]===l&&(this.trigger("data",t),e=0),this.trigger("done")}};n.prototype=new s,r=function(){var t,e,i,n;r.prototype.init.call(this),n=this,this.packetsWaitingForPmt=[],this.programMapTable=void 0,t=function(t,n){var r=0;n.payloadUnitStartIndicator&&(r+=t[r]+1),"pat"===n.type?e(t.subarray(r),n):i(t.subarray(r),n)},e=function(t,e){e.section_number=t[7],e.last_section_number=t[8],n.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=n.pmtPid},i=function(t,e){var i,r,a,s;if(1&t[5]){for(n.programMapTable={},i=(15&t[1])<<8|t[2],r=3+i-4,a=(15&t[10])<<8|t[11],s=12+a;r>s;)n.programMapTable[(31&t[s+1])<<8|t[s+2]]=t[s],s+=((15&t[s+3])<<8|t[s+4])+5;for(e.programMapTable=n.programMapTable;n.packetsWaitingForPmt.length;)n.processPes_.apply(n,n.packetsWaitingForPmt.shift())}},this.push=function(e){var i={},n=4;i.payloadUnitStartIndicator=!!(64&e[1]),i.pid=31&e[1],i.pid<<=8,i.pid|=e[2],(48&e[3])>>>4>1&&(n+=e[n]+1),0===i.pid?(i.type="pat",t(e.subarray(n),i),this.trigger("data",i)):i.pid===this.pmtPid?(i.type="pmt",t(e.subarray(n),i),this.trigger("data",i)):void 0===this.programMapTable?this.packetsWaitingForPmt.push([e,n,i]):this.processPes_(e,n,i)},this.processPes_=function(t,e,i){i.streamType=this.programMapTable[i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}},r.prototype=new s,r.STREAM_TYPES={h264:27,adts:15},a=function(){var t,e={data:[],size:0},i={data:[],size:0},n={data:[],size:0},r=function(t,e){var i;e.dataAlignmentIndicator=0!==(4&t[6]),i=t[7],192&i&&(e.pts=(14&t[9])<<27|(255&t[10])<<20|(254&t[11])<<12|(255&t[12])<<5|(254&t[13])>>>3,e.pts*=4,e.pts+=(6&t[13])>>>1,e.dts=e.pts,64&i&&(e.dts=(14&t[14])<<27|(255&t[15])<<20|(254&t[16])<<12|(255&t[17])<<5|(254&t[18])>>>3,e.dts*=4,e.dts+=(6&t[18])>>>1)),e.data=t.subarray(9+t[8])},s=function(e,i){var n,a=new Uint8Array(e.size),s={type:i},o=0;if(e.data.length){for(s.trackId=e.data[0].pid;e.data.length;)n=e.data.shift(),a.set(n.data,o),o+=n.data.byteLength;r(a,s),e.size=0,t.trigger("data",s)}};a.prototype.init.call(this),t=this,this.push=function(r){({pat:function(){},pes:function(){var t,a;switch(r.streamType){case u.H264_STREAM_TYPE:case d.H264_STREAM_TYPE:t=e,a="video";break;case u.ADTS_STREAM_TYPE:t=i,a="audio";break;case u.METADATA_STREAM_TYPE:t=n,a="timed-metadata";break;default:return}r.payloadUnitStartIndicator&&s(t,a),t.data.push(r),t.size+=r.data.byteLength},pmt:function(){var e,i,n={type:"metadata",tracks:[]},a=r.programMapTable;for(e in a)a.hasOwnProperty(e)&&(i={timelineStartInfo:{baseMediaDecodeTime:0}},i.id=+e,a[e]===d.H264_STREAM_TYPE?(i.codec="avc",i.type="video"):a[e]===d.ADTS_STREAM_TYPE&&(i.codec="adts",i.type="audio"),n.tracks.push(i));t.trigger("data",n)}})[r.type]()},this.flush=function(){s(e,"video"),s(i,"audio"),s(n,"timed-metadata"),this.trigger("done")}},a.prototype=new s;var c={PAT_PID:0,MP2T_PACKET_LENGTH:f,TransportPacketStream:n,TransportParseStream:r,ElementaryStream:a,CaptionStream:o.CaptionStream,Cea608Stream:o.Cea608Stream,MetadataStream:t("./metadata-stream")};for(var h in u)u.hasOwnProperty(h)&&(c[h]=u[h]);e.exports=c},{"../utils/stream.js":49,"./caption-stream":38,"./metadata-stream":41,"./stream-types":42,"./stream-types.js":42}],41:[function(t,e,i){"use strict";var n,r=t("../utils/stream"),a=t("./stream-types"),s=function(t,e,i){var n,r="";for(n=e;i>n;n++)r+="%"+("00"+t[n].toString(16)).slice(-2);return r},o=function(t,e,i){return decodeURIComponent(s(t,e,i))},u=function(t,e,i){return unescape(s(t,e,i))},d=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},f={TXXX:function(t){var e;if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=o(t.data,1,e),t.value=o(t.data,e+1,t.data.length-1);break}t.data=t.value}},WXXX:function(t){var e;if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=o(t.data,1,e),t.url=o(t.data,e+1,t.data.length);break}},PRIV:function(t){var e;for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=u(t.data,0,e);break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};n=function(t){var e,i={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},r=0,s=[],o=0;if(n.prototype.init.call(this),this.dispatchType=a.METADATA_STREAM_TYPE.toString(16),i.descriptor)for(e=0;e<i.descriptor.length;e++)this.dispatchType+=("00"+i.descriptor[e].toString(16)).slice(-2);this.push=function(t){var e,n,a,u,l,c;if("timed-metadata"===t.type){if(t.dataAlignmentIndicator&&(o=0,s.length=0),0===s.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))return void(i.debug&&console.log("Skipping unrecognized metadata packet"));if(s.push(t),o+=t.data.byteLength,1===s.length&&(r=d(t.data.subarray(6,10)),r+=10),!(r>o)){for(e={data:new Uint8Array(r),frames:[],pts:s[0].pts,dts:s[0].dts},l=0;r>l;)e.data.set(s[0].data.subarray(0,r-l),l),l+=s[0].data.byteLength,o-=s[0].data.byteLength,s.shift();n=10,64&e.data[5]&&(n+=4,n+=d(e.data.subarray(10,14)),r-=d(e.data.subarray(16,20)));do{if(a=d(e.data.subarray(n+4,n+8)),1>a)return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");if(c=String.fromCharCode(e.data[n],e.data[n+1],e.data[n+2],e.data[n+3]),u={id:c,data:e.data.subarray(n+10,n+a+10)},u.key=u.id,f[u.id]&&(f[u.id](u),"com.apple.streaming.transportStreamTimestamp"===u.owner)){var h=u.data,p=(1&h[3])<<30|h[4]<<22|h[5]<<14|h[6]<<6|h[7]>>>2;p*=4,p+=3&h[7],u.timeStamp=p,this.trigger("timestamp",u)}e.frames.push(u),n+=10,n+=a}while(r>n);this.trigger("data",e)}}}},n.prototype=new r,e.exports=n},{"../utils/stream":49,"./stream-types":42}],42:[function(t,e,i){"use strict";e.exports={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21}},{}],43:[function(t,e,i){e.exports={generator:t("./mp4-generator"),Transmuxer:t("./transmuxer").Transmuxer,AudioSegmentStream:t("./transmuxer").AudioSegmentStream,VideoSegmentStream:t("./transmuxer").VideoSegmentStream,tools:t("../tools/mp4-inspector")}},{"../tools/mp4-inspector":47,"./mp4-generator":44,"./transmuxer":45}],44:[function(t,e,i){"use strict";var n,r,a,s,o,u,d,f,l,c,h,p,g,y,m,b,v,_,w,T,S,k,O,U,A,x,D,P,E,C,L,B,M,I,j,R,N;!function(){var t;U={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]};for(t in U)U.hasOwnProperty(t)&&(U[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);A=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),D=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),x=new Uint8Array([0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),E=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),C={video:P,audio:E},M=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),B=new Uint8Array([0,0,0,0,0,0,0,0]),I=new Uint8Array([0,0,0,0,0,0,0,0]),j=I,R=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),N=I,L=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}(),n=function(t){var e,i,n,r=[],a=0;for(e=1;e<arguments.length;e++)r.push(arguments[e]);for(e=r.length;e--;)a+=r[e].byteLength;for(i=new Uint8Array(a+8),n=new DataView(i.buffer,i.byteOffset,i.byteLength),n.setUint32(0,i.byteLength),i.set(t,4),e=0,a=8;e<r.length;e++)i.set(r[e],a),a+=r[e].byteLength;return i},r=function(){return n(U.dinf,n(U.dref,M))},a=function(t){return n(U.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},s=function(){return n(U.ftyp,A,x,A,D)},b=function(t){return n(U.hdlr,C[t])},o=function(t){return n(U.mdat,t)},m=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0]);return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),n(U.mdhd,e)},y=function(t){return n(U.mdia,m(t),b(t.type),d(t))},u=function(t){return n(U.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},d=function(t){return n(U.minf,"video"===t.type?n(U.vmhd,L):n(U.smhd,B),r(),_(t))},f=function(t,e){for(var i=[],r=e.length;r--;)i[r]=S(e[r]);return n.apply(null,[U.moof,u(t)].concat(i))},l=function(t){for(var e=t.length,i=[];e--;)i[e]=p(t[e]);return n.apply(null,[U.moov,h(4294967295)].concat(i).concat(c(t)))},c=function(t){for(var e=t.length,i=[];e--;)i[e]=k(t[e]);return n.apply(null,[U.mvex].concat(i))},h=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return n(U.mvhd,e)},v=function(t){var e,i,r=t.samples||[],a=new Uint8Array(4+r.length);for(i=0;i<r.length;i++)e=r[i].flags,a[i+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy;return n(U.sdtp,a)},_=function(t){return n(U.stbl,w(t),n(U.stts,N),n(U.stsc,j),n(U.stsz,R),n(U.stco,I))},function(){var t,e;w=function(i){return n(U.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===i.type?t(i):e(i))},t=function(t){var e,i=t.sps||[],r=t.pps||[],a=[],s=[];for(e=0;e<i.length;e++)a.push((65280&i[e].byteLength)>>>8),a.push(255&i[e].byteLength),a=a.concat(Array.prototype.slice.call(i[e]));for(e=0;e<r.length;e++)s.push((65280&r[e].byteLength)>>>8),s.push(255&r[e].byteLength),s=s.concat(Array.prototype.slice.call(r[e]));return n(U.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),n(U.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([i.length]).concat(a).concat([r.length]).concat(s))),n(U.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},e=function(t){return n(U.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),a(t))}}(),T=function(){return n(U.styp,A,x,A)},g=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0]);return n(U.tkhd,e)},S=function(t){var e,i,r,a,s;return e=n(U.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),i=n(U.tfdt,new Uint8Array([0,0,0,0,t.baseMediaDecodeTime>>>24&255,t.baseMediaDecodeTime>>>16&255,t.baseMediaDecodeTime>>>8&255,255&t.baseMediaDecodeTime])),s=88,"audio"===t.type?(r=O(t,s),n(U.traf,e,i,r)):(a=v(t),r=O(t,a.length+s),n(U.traf,e,i,r,a))},p=function(t){return t.duration=t.duration||4294967295,n(U.trak,g(t),y(t))},k=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==t.type&&(e[e.length-1]=0),n(U.trex,e)},function(){var t,e,i;i=function(t,e){var i=0,n=0,r=0,a=0;return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(n=2),void 0!==t[0].flags&&(r=4),void 0!==t[0].compositionTimeOffset&&(a=8)),[0,0,i|n|r|a,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},e=function(t,e){var r,a,s,o;for(a=t.samples||[],e+=20+16*a.length,r=i(a,e),o=0;o<a.length;o++)s=a[o],r=r.concat([(4278190080&s.duration)>>>24,(16711680&s.duration)>>>16,(65280&s.duration)>>>8,255&s.duration,(4278190080&s.size)>>>24,(16711680&s.size)>>>16,(65280&s.size)>>>8,255&s.size,s.flags.isLeading<<2|s.flags.dependsOn,s.flags.isDependedOn<<6|s.flags.hasRedundancy<<4|s.flags.paddingValue<<1|s.flags.isNonSyncSample,61440&s.flags.degradationPriority,15&s.flags.degradationPriority,(4278190080&s.compositionTimeOffset)>>>24,(16711680&s.compositionTimeOffset)>>>16,(65280&s.compositionTimeOffset)>>>8,255&s.compositionTimeOffset]);return n(U.trun,new Uint8Array(r))},t=function(t,e){var r,a,s,o;for(a=t.samples||[],e+=20+8*a.length,r=i(a,e),o=0;o<a.length;o++)s=a[o],r=r.concat([(4278190080&s.duration)>>>24,(16711680&s.duration)>>>16,(65280&s.duration)>>>8,255&s.duration,(4278190080&s.size)>>>24,(16711680&s.size)>>>16,(65280&s.size)>>>8,255&s.size]);return n(U.trun,new Uint8Array(r))},O=function(i,n){return"audio"===i.type?t(i,n):e(i,n)}}(),e.exports={ftyp:s,mdat:o,moof:f,moov:l,initSegment:function(t){var e,i=s(),n=l(t);return e=new Uint8Array(i.byteLength+n.byteLength),e.set(i),e.set(n,i.byteLength),e}}},{}],45:[function(t,e,i){"use strict";var n,r,a,s,o,u,d,f,l,c,h=t("../utils/stream.js"),p=t("./mp4-generator.js"),g=t("../m2ts/m2ts.js"),y=t("../codecs/adts.js"),m=t("../codecs/h264").H264Stream,b=t("../aac");o={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0}},l=function(t,e){var i;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},c=function(t){var e,i,n=0;for(e=0;e<t.length;e++)i=t[e],n+=i.data.byteLength;return n},r=function(t){var e=[],i=0,n=0;r.prototype.init.call(this),this.push=function(i){u(t,i),t&&(t.audioobjecttype=i.audioobjecttype,t.channelcount=i.channelcount,t.samplerate=i.samplerate,t.samplingfrequencyindex=i.samplingfrequencyindex,t.samplesize=i.samplesize),e.push(i)},this.setEarliestDts=function(e){n=e-t.timelineStartInfo.baseMediaDecodeTime},this.flush=function(){var n,r,a,s;return 0===e.length?void this.trigger("done"):(n=this.trimAdtsFramesByEarliestDts_(e),t.samples=this.generateSampleTable_(n),a=p.mdat(this.concatenateFrameData_(n)),e=[],f(t),r=p.moof(i,[t]),s=new Uint8Array(r.byteLength+a.byteLength),i++,s.set(r),s.set(a,r.byteLength),d(t),this.trigger("data",{track:t,boxes:s}),void this.trigger("done"))},this.trimAdtsFramesByEarliestDts_=function(e){return t.minSegmentDts>=n?e:(t.minSegmentDts=1/0,e.filter(function(e){return e.dts>=n?(t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),t.minSegmentPts=t.minSegmentDts,!0):!1}))},this.generateSampleTable_=function(t){var e,i,n=[];for(e=0;e<t.length;e++)i=t[e],n.push({size:i.data.byteLength,duration:1024});return n},this.concatenateFrameData_=function(t){var e,i,n=0,r=new Uint8Array(c(t));for(e=0;e<t.length;e++)i=t[e],r.set(i.data,n),n+=i.data.byteLength;return r}},r.prototype=new h,n=function(t){var e,i,r=0,a=[];n.prototype.init.call(this),delete t.minPTS,this.gopCache_=[],this.push=function(n){u(t,n),"seq_parameter_set_rbsp"!==n.nalUnitType||e||(e=n.config,t.width=e.width,t.height=e.height,t.sps=[n.data],t.profileIdc=e.profileIdc,t.levelIdc=e.levelIdc,t.profileCompatibility=e.profileCompatibility),"pic_parameter_set_rbsp"!==n.nalUnitType||i||(i=n.data,t.pps=[n.data]),a.push(n)},this.flush=function(){for(var e,i,n,s,o,d;a.length&&"access_unit_delimiter_rbsp"!==a[0].nalUnitType;)a.shift();return 0===a.length?(this.resetStream_(),void this.trigger("done")):(e=this.groupNalsIntoFrames_(a),n=this.groupFramesIntoGops_(e),n[0][0].keyFrame||(i=this.getGopForFusion_(a[0],t),i?(n.unshift(i),n.byteLength+=i.byteLength,n.nalCount+=i.nalCount,n.pts=i.pts,n.dts=i.dts,n.duration+=i.duration):n=this.extendFirstKeyFrame_(n)),u(t,n),t.samples=this.generateSampleTable_(n),o=p.mdat(this.concatenateNalData_(n)),this.gopCache_.unshift({gop:n.pop(),pps:t.pps,sps:t.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),a=[],f(t),this.trigger("timelineStartInfo",t.timelineStartInfo),s=p.moof(r,[t]),d=new Uint8Array(s.byteLength+o.byteLength),r++,d.set(s),d.set(o,s.byteLength),this.trigger("data",{track:t,boxes:d}),this.resetStream_(),void this.trigger("done"))},this.resetStream_=function(){d(t),e=void 0,i=void 0},this.getGopForFusion_=function(e){var i,n,r,a,s,o=45e3,u=1e4,d=1/0;for(s=0;s<this.gopCache_.length;s++)a=this.gopCache_[s],r=a.gop,t.pps&&l(t.pps[0],a.pps[0])&&t.sps&&l(t.sps[0],a.sps[0])&&(r.dts<t.timelineStartInfo.dts||(i=e.dts-r.dts-r.duration,i>=-u&&o>=i&&(!n||d>i)&&(n=a,d=i)));return n?n.gop:null},this.extendFirstKeyFrame_=function(t){var e;return t[0][0].keyFrame||(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},this.groupNalsIntoFrames_=function(t){var e,i,n=[],r=[];for(n.byteLength=0,e=0;e<t.length;e++)i=t[e],"access_unit_delimiter_rbsp"===i.nalUnitType?(n.length&&(n.duration=i.dts-n.dts,r.push(n)),n=[i],n.byteLength=i.data.byteLength,n.pts=i.pts,n.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(n.keyFrame=!0),n.duration=i.dts-n.dts,n.byteLength+=i.data.byteLength,n.push(i));return(r.length&&!n.duration||n.duration<=0)&&(n.duration=r[r.length-1].duration),r.push(n),r},this.groupFramesIntoGops_=function(t){var e,i,n=[],r=[];for(n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,e=0;e<t.length;e++)i=t[e],i.keyFrame?(n.length&&(r.push(n),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration),n=[i],n.nalCount=i.length,n.byteLength=i.byteLength,n.pts=i.pts,n.dts=i.dts,n.duration=i.duration):(n.duration+=i.duration,n.nalCount+=i.length,n.byteLength+=i.byteLength,n.push(i));return r.length&&n.duration<=0&&(n.duration=r[r.length-1].duration),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration,r.push(n),r},this.generateSampleTable_=function(t,e){var i,n,r,a,s,u=e||0,d=[];for(i=0;i<t.length;i++)for(a=t[i],n=0;n<a.length;n++)s=a[n],r=Object.create(o),r.dataOffset=u,r.compositionTimeOffset=s.pts-s.dts,r.duration=s.duration,r.size=4*s.length,r.size+=s.byteLength,s.keyFrame&&(r.flags.dependsOn=2),u+=r.size,d.push(r);return d},this.concatenateNalData_=function(t){var e,i,n,r,a,s,o=0,u=t.byteLength,d=t.nalCount,f=u+4*d,l=new Uint8Array(f),c=new DataView(l.buffer);for(e=0;e<t.length;e++)for(r=t[e],i=0;i<r.length;i++)for(a=r[i],n=0;n<a.length;n++)s=a[n],c.setUint32(o,s.data.byteLength),o+=4,l.set(s.data,o),o+=s.data.byteLength;return l}},n.prototype=new h,u=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},d=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},f=function(t){var e,i=9e4,n=t.minSegmentDts-t.timelineStartInfo.dts,r=t.minSegmentPts-t.minSegmentDts;t.baseMediaDecodeTime=t.timelineStartInfo.baseMediaDecodeTime,t.baseMediaDecodeTime+=n,t.baseMediaDecodeTime-=r,t.baseMediaDecodeTime=Math.max(0,t.baseMediaDecodeTime),"audio"===t.type&&(e=t.samplerate/i,t.baseMediaDecodeTime*=e,t.baseMediaDecodeTime=Math.floor(t.baseMediaDecodeTime))},s=function(t){this.numberOfTracks=0,this.metadataStream=t.metadataStream,"undefined"!=typeof t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,s.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}},s.prototype=new h,s.prototype.flush=function(){var t,e,i,n,r=0,a={captions:[],metadata:[]},s=0;if(!(0===this.pendingTracks.length||this.remuxTracks&&this.pendingTracks.length<this.numberOfTracks)){for(this.videoTrack?s=this.videoTrack.timelineStartInfo.pts:this.audioTrack&&(s=this.audioTrack.timelineStartInfo.pts),1===this.pendingTracks.length?a.type=this.pendingTracks[0].type:a.type="combined",this.emittedTracks+=this.pendingTracks.length,i=p.initSegment(this.pendingTracks),a.data=new Uint8Array(i.byteLength+this.pendingBytes),a.data.set(i),r+=i.byteLength,n=0;n<this.pendingBoxes.length;n++)a.data.set(this.pendingBoxes[n],r),r+=this.pendingBoxes[n].byteLength;for(n=0;n<this.pendingCaptions.length;n++)t=this.pendingCaptions[n],
t.startTime=t.startPts-s,t.startTime/=9e4,t.endTime=t.endPts-s,t.endTime/=9e4,a.captions.push(t);for(n=0;n<this.pendingMetadata.length;n++)e=this.pendingMetadata[n],e.cueTime=e.pts-s,e.cueTime/=9e4,a.metadata.push(e);a.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",a),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)}},a=function(t){var e,i,o,u,f,l,c,h,p,v,_,w,T,S=this;this.setupAacPipeline=function(){this.metadataStream=new g.MetadataStream,t.metadataStream=this.metadataStream,h=new b,l=new y,w=new s(t),T=h,h.pipe(l),h.pipe(this.metadataStream),this.metadataStream.pipe(w),this.metadataStream.on("timestamp",function(t){h.setTimestamp(t.timestamp)}),this.addAacListener()},this.addAacListener=function(){h.on("data",function(t){if("timed-metadata"===t.type){var e={timelineStartInfo:{baseMediaDecodeTime:0},codec:"adts",type:"audio"};e&&!v&&(w.numberOfTracks++,v=new r(e),l.pipe(v).pipe(w))}})},this.setupTsPipeline=function(){this.metadataStream=new g.MetadataStream,t.metadataStream=this.metadataStream,o=new g.TransportPacketStream,u=new g.TransportParseStream,f=new g.ElementaryStream,l=new y,c=new m,_=new g.CaptionStream,w=new s(t),T=o,o.pipe(u).pipe(f),f.pipe(c),f.pipe(l),f.pipe(this.metadataStream).pipe(w),c.pipe(_).pipe(w),this.addTsListener()},this.addTsListener=function(){f.on("data",function(t){var a;if("metadata"===t.type){for(a=t.tracks.length;a--;)e||"video"!==t.tracks[a].type?i||"audio"!==t.tracks[a].type||(i=t.tracks[a],i.timelineStartInfo.baseMediaDecodeTime=S.baseMediaDecodeTime):(e=t.tracks[a],e.timelineStartInfo.baseMediaDecodeTime=S.baseMediaDecodeTime);e&&!p&&(w.numberOfTracks++,p=new n(e),p.on("timelineStartInfo",function(t){i&&(i.timelineStartInfo=t,v.setEarliestDts(t.dts))}),c.pipe(p).pipe(w)),i&&!v&&(w.numberOfTracks++,v=new r(i),l.pipe(v).pipe(w))}})},a.prototype.init.call(this),t=t||{},this.baseMediaDecodeTime=t.baseMediaDecodeTime||0,void 0===t.aacfile?this.setupTsPipeline():this.setupAacPipeline(),this.setBaseMediaDecodeTime=function(t){this.baseMediaDecodeTime=t,i&&(i.timelineStartInfo.dts=void 0,i.timelineStartInfo.pts=void 0,d(i),i.timelineStartInfo.baseMediaDecodeTime=t),e&&(p.gopCache_=[],e.timelineStartInfo.dts=void 0,e.timelineStartInfo.pts=void 0,d(e),e.timelineStartInfo.baseMediaDecodeTime=t)},this.push=function(t){T.push(t)},this.flush=function(){T.flush()},w.on("data",function(t){S.trigger("data",t)}),w.on("done",function(){S.trigger("done")})},a.prototype=new h,e.exports={Transmuxer:a,VideoSegmentStream:n,AudioSegmentStream:r}},{"../aac":30,"../codecs/adts.js":31,"../codecs/h264":32,"../m2ts/m2ts.js":40,"../utils/stream.js":49,"./mp4-generator.js":44}],46:[function(t,e,i){"use strict";var n={8:"audio",9:"video",18:"metadata"},r=function(t){return"0x"+("00"+t.toString(16)).slice(-2).toUpperCase()},a=function(t){for(var e,i=[];t.byteLength>0;){switch(e=0,t.byteLength){default:i.push(r(t[e++]));case 7:i.push(r(t[e++]));case 6:i.push(r(t[e++]));case 5:i.push(r(t[e++]));case 4:i.push(r(t[e++]));case 3:i.push(r(t[e++]));case 2:i.push(r(t[e++]));case 1:i.push(r(t[e++]))}t=t.subarray(e)}return i.join(" ")},s=function(t,e){var i=["AVC Sequence Header","AVC NALU","AVC End-of-Sequence"],n=t[1]&parseInt("01111111",2)<<16|t[2]<<8|t[3];return e=e||{},e.avcPacketType=i[t[0]],e.CompositionTime=t[1]&parseInt("10000000",2)?-n:n,1===t[0]?e.nalUnitTypeRaw=a(t.subarray(4,100)):e.data=a(t.subarray(4)),e},o=function(t,e){var i=["Unknown","Keyframe (for AVC, a seekable frame)","Inter frame (for AVC, a nonseekable frame)","Disposable inter frame (H.263 only)","Generated keyframe (reserved for server use only)","Video info/command frame"],n=t[0]&parseInt("00001111",2);return e=e||{},e.frameType=i[(t[0]&parseInt("11110000",2))>>>4],e.codecID=n,7===n?s(t.subarray(1),e):e},u=function(t,e){var i=["AAC Sequence Header","AAC Raw"];return e=e||{},e.aacPacketType=i[t[0]],e.data=a(t.subarray(1)),e},d=function(t,e){var i=["Linear PCM, platform endian","ADPCM","MP3","Linear PCM, little endian","Nellymoser 16-kHz mono","Nellymoser 8-kHz mono","Nellymoser","G.711 A-law logarithmic PCM","G.711 mu-law logarithmic PCM","reserved","AAC","Speex","MP3 8-Khz","Device-specific sound"],n=["5.5-kHz","11-kHz","22-kHz","44-kHz"],r=(t[0]&parseInt("11110000",2))>>>4;return e=e||{},e.soundFormat=i[r],e.soundRate=n[(t[0]&parseInt("00001100",2))>>>2],e.soundSize=(t[0]&parseInt("00000010",2))>>>1?"16-bit":"8-bit",e.soundType=t[0]&parseInt("00000001",2)?"Stereo":"Mono",10===r?u(t.subarray(1),e):e},f=function(t){return{tagType:n[t[0]],dataSize:t[1]<<16|t[2]<<8|t[3],timestamp:t[7]<<24|t[4]<<16|t[5]<<8|t[6],streamID:t[8]<<16|t[9]<<8|t[10]}},l=function(t){var e=f(t);switch(t[0]){case 8:d(t.subarray(11),e);break;case 9:o(t.subarray(11),e);break;case 18:}return e},c=function(t){var e,i,n=9,r=[];for(n+=4;n<t.byteLength;)e=t[n+1]<<16,e|=t[n+2]<<8,e|=t[n+3],e+=11,i=t.subarray(n,n+e),r.push(l(i)),n+=e+4;return r},h=function(t){return JSON.stringify(t,null,2)};e.exports={inspectTag:l,inspect:c,textify:h}},{}],47:[function(t,e,i){(function(t){"use strict";var i,n,r=function(t){var e="";return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),e+=String.fromCharCode(t[2]),e+=String.fromCharCode(t[3])},a=function(t){return new Date(1e3*t-20828448e5)},s=function(t){return{isLeading:(12&t[0])>>>2,dependsOn:3&t[0],isDependedOn:(192&t[1])>>>6,hasRedundancy:(48&t[1])>>>4,paddingValue:(14&t[1])>>>1,isNonSyncSample:1&t[1],degradationPriority:t[2]<<8|t[3]}},o=function(t){var e,i,n=new DataView(t.buffer,t.byteOffset,t.byteLength),r=[];for(e=0;e+4<t.length;e+=i){if(i=n.getUint32(e),e+=4,0>=i)return;switch(31&t[e]){case 1:r.push("slice_layer_without_partitioning_rbsp");break;case 5:r.push("slice_layer_without_partitioning_rbsp_idr");break;case 6:r.push("sei_rbsp");break;case 7:r.push("seq_parameter_set_rbsp");break;case 8:r.push("pic_parameter_set_rbsp");break;case 9:r.push("access_unit_delimiter_rbsp");break;default:r.push(31&t[e])}}return r},u={avc1:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{dataReferenceIndex:e.getUint16(6),width:e.getUint16(24),height:e.getUint16(26),horizresolution:e.getUint16(28)+e.getUint16(30)/16,vertresolution:e.getUint16(32)+e.getUint16(34)/16,frameCount:e.getUint16(40),depth:e.getUint16(74),config:i(t.subarray(78,t.byteLength))}},avcC:function(t){var e,i,n,r,a=new DataView(t.buffer,t.byteOffset,t.byteLength),s={configurationVersion:t[0],avcProfileIndication:t[1],profileCompatibility:t[2],avcLevelIndication:t[3],lengthSizeMinusOne:3&t[4],sps:[],pps:[]},o=31&t[5];for(n=6,r=0;o>r;r++)i=a.getUint16(n),n+=2,s.sps.push(new Uint8Array(t.subarray(n,n+i))),n+=i;for(e=t[n],n++,r=0;e>r;r++)i=a.getUint16(n),n+=2,s.pps.push(new Uint8Array(t.subarray(n,n+i))),n+=i;return s},btrt:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{bufferSizeDB:e.getUint32(0),maxBitrate:e.getUint32(4),avgBitrate:e.getUint32(8)}},esds:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),esId:t[6]<<8|t[7],streamPriority:31&t[8],decoderConfig:{objectProfileIndication:t[11],streamType:t[12]>>>2&63,bufferSize:t[13]<<16|t[14]<<8|t[15],maxBitrate:t[16]<<24|t[17]<<16|t[18]<<8|t[19],avgBitrate:t[20]<<24|t[21]<<16|t[22]<<8|t[23],decoderConfigDescriptor:{tag:t[24],length:t[25],audioObjectType:t[26]>>>3&31,samplingFrequencyIndex:(7&t[26])<<1|t[27]>>>7&1,channelConfiguration:t[27]>>>3&15}}}},ftyp:function(t){for(var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={majorBrand:r(t.subarray(0,4)),minorVersion:e.getUint32(4),compatibleBrands:[]},n=8;n<t.byteLength;)i.compatibleBrands.push(r(t.subarray(n,n+4))),n+=4;return i},dinf:function(t){return{boxes:i(t)}},dref:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),dataReferences:i(t.subarray(8))}},hdlr:function(e){var i=new DataView(e.buffer,e.byteOffset,e.byteLength),n={version:i.getUint8(0),flags:new Uint8Array(e.subarray(1,4)),handlerType:r(e.subarray(8,12)),name:""},a=8;for(a=24;a<e.byteLength;a++){if(0===e[a]){a++;break}n.name+=String.fromCharCode(e[a])}return n.name=decodeURIComponent(t.escape(n.name)),n},mdat:function(t){return{byteLength:t.byteLength,nals:o(t)}},mdhd:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=4,r={version:i.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),language:""};return 1===r.version?(n+=4,r.creationTime=a(i.getUint32(n)),n+=8,r.modificationTime=a(i.getUint32(n)),n+=4,r.timescale=i.getUint32(n),n+=8,r.duration=i.getUint32(n)):(r.creationTime=a(i.getUint32(n)),n+=4,r.modificationTime=a(i.getUint32(n)),n+=4,r.timescale=i.getUint32(n),n+=4,r.duration=i.getUint32(n)),n+=4,e=i.getUint16(n),r.language+=String.fromCharCode((e>>10)+96),r.language+=String.fromCharCode(((960&e)>>5)+96),r.language+=String.fromCharCode((31&e)+96),r},mdia:function(t){return{boxes:i(t)}},mfhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sequenceNumber:t[4]<<24|t[5]<<16|t[6]<<8|t[7]}},minf:function(t){return{boxes:i(t)}},mp4a:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),n={dataReferenceIndex:e.getUint16(6),channelcount:e.getUint16(16),samplesize:e.getUint16(18),samplerate:e.getUint16(24)+e.getUint16(26)/65536};return t.byteLength>28&&(n.streamDescriptor=i(t.subarray(28))[0]),n},moof:function(t){return{boxes:i(t)}},moov:function(t){return{boxes:i(t)}},mvex:function(t){return{boxes:i(t)}},mvhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))};return 1===n.version?(i+=4,n.creationTime=a(e.getUint32(i)),i+=8,n.modificationTime=a(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=8,n.duration=e.getUint32(i)):(n.creationTime=a(e.getUint32(i)),i+=4,n.modificationTime=a(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=4,n.duration=e.getUint32(i)),i+=4,n.rate=e.getUint16(i)+e.getUint16(i+2)/16,i+=4,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,i+=8,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,i+=24,n.nextTrackId=e.getUint32(i),n},pdin:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),rate:e.getUint32(4),initialDelay:e.getUint32(8)}},sdtp:function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]};for(e=4;e<t.byteLength;e++)i.samples.push({dependsOn:(48&t[e])>>4,isDependedOn:(12&t[e])>>2,hasRedundancy:3&t[e]});return i},sidx:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),references:[],referenceId:i.getUint32(4),timescale:i.getUint32(8),earliestPresentationTime:i.getUint32(12),firstOffset:i.getUint32(16)},r=i.getUint16(22);for(e=24;r;e+=12,r--)n.references.push({referenceType:(128&t[e])>>>7,referencedSize:2147483647&i.getUint32(e),subsegmentDuration:i.getUint32(e+4),startsWithSap:!!(128&t[e+8]),sapType:(112&t[e+8])>>>4,sapDeltaTime:268435455&i.getUint32(e+8)});return n},smhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),balance:t[4]+t[5]/256}},stbl:function(t){return{boxes:i(t)}},stco:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),chunkOffsets:[]},r=i.getUint32(4);for(e=8;r;e+=4,r--)n.chunkOffsets.push(i.getUint32(e));return n},stsc:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=i.getUint32(4),r={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleToChunks:[]};for(e=8;n;e+=12,n--)r.sampleToChunks.push({firstChunk:i.getUint32(e),samplesPerChunk:i.getUint32(e+4),sampleDescriptionIndex:i.getUint32(e+8)});return r},stsd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleDescriptions:i(t.subarray(8))}},stsz:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleSize:i.getUint32(4),entries:[]};for(e=12;e<t.byteLength;e+=4)n.entries.push(i.getUint32(e));return n},stts:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),timeToSamples:[]},r=i.getUint32(4);for(e=8;r;e+=8,r--)n.timeToSamples.push({sampleCount:i.getUint32(e),sampleDelta:i.getUint32(e+4)});return n},styp:function(t){return u.ftyp(t)},tfdt:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),baseMediaDecodeTime:t[4]<<24|t[5]<<16|t[6]<<8|t[7]}},tfhd:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:i.getUint32(4)},r=1&n.flags[2],a=2&n.flags[2],s=8&n.flags[2],o=16&n.flags[2],u=32&n.flags[2];return e=8,r&&(e+=4,n.baseDataOffset=i.getUint32(12),e+=4),a&&(n.sampleDescriptionIndex=i.getUint32(e),e+=4),s&&(n.defaultSampleDuration=i.getUint32(e),e+=4),o&&(n.defaultSampleSize=i.getUint32(e),e+=4),u&&(n.defaultSampleFlags=i.getUint32(e)),n},tkhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))};return 1===n.version?(i+=4,n.creationTime=a(e.getUint32(i)),i+=8,n.modificationTime=a(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=8,n.duration=e.getUint32(i)):(n.creationTime=a(e.getUint32(i)),i+=4,n.modificationTime=a(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=4,n.duration=e.getUint32(i)),i+=4,i+=8,n.layer=e.getUint16(i),i+=2,n.alternateGroup=e.getUint16(i),i+=2,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,n.width=e.getUint16(i)+e.getUint16(i+2)/16,i+=4,n.height=e.getUint16(i)+e.getUint16(i+2)/16,n},traf:function(t){return{boxes:i(t)}},trak:function(t){return{boxes:i(t)}},trex:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:e.getUint32(4),defaultSampleDescriptionIndex:e.getUint32(8),defaultSampleDuration:e.getUint32(12),defaultSampleSize:e.getUint32(16),sampleDependsOn:3&t[20],sampleIsDependedOn:(192&t[21])>>6,sampleHasRedundancy:(48&t[21])>>4,samplePaddingValue:(14&t[21])>>1,sampleIsDifferenceSample:!!(1&t[21]),sampleDegradationPriority:e.getUint16(22)}},trun:function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]},n=new DataView(t.buffer,t.byteOffset,t.byteLength),r=1&i.flags[2],a=4&i.flags[2],o=1&i.flags[1],u=2&i.flags[1],d=4&i.flags[1],f=8&i.flags[1],l=n.getUint32(4),c=8;for(r&&(i.dataOffset=n.getUint32(c),c+=4),a&&l&&(e={flags:s(t.subarray(c,c+4))},c+=4,o&&(e.duration=n.getUint32(c),c+=4),u&&(e.size=n.getUint32(c),c+=4),f&&(e.compositionTimeOffset=n.getUint32(c),c+=4),i.samples.push(e),l--);l--;)e={},o&&(e.duration=n.getUint32(c),c+=4),u&&(e.size=n.getUint32(c),c+=4),d&&(e.flags=s(t.subarray(c,c+4)),c+=4),f&&(e.compositionTimeOffset=n.getUint32(c),c+=4),i.samples.push(e);return i},"url ":function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4))}},vmhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),graphicsmode:e.getUint16(4),opcolor:new Uint16Array([e.getUint16(6),e.getUint16(8),e.getUint16(10)])}}};i=function(t){for(var e,i,n,a,s,o=0,d=[],f=new ArrayBuffer(t.length),l=new Uint8Array(f),c=0;c<t.length;++c)l[c]=t[c];for(e=new DataView(f);o<t.byteLength;)i=e.getUint32(o),n=r(t.subarray(o+4,o+8)),a=i>1?o+i:t.byteLength,s=(u[n]||function(t){return{data:t}})(t.subarray(o+8,a)),s.size=i,s.type=n,d.push(s),o=a;return d},n=function(t,e){var i;return e=e||0,i=new Array(2*e+1).join(" "),t.map(function(t,r){return i+t.type+"\n"+Object.keys(t).filter(function(t){return"type"!==t&&"boxes"!==t}).map(function(e){var n=i+"  "+e+": ",r=t[e];if(r instanceof Uint8Array||r instanceof Uint32Array){var a=Array.prototype.slice.call(new Uint8Array(r.buffer,r.byteOffset,r.byteLength)).map(function(t){return" "+("00"+t.toString(16)).slice(-2)}).join("").match(/.{1,24}/g);return a?1===a.length?n+"<"+a.join("").slice(1)+">":n+"<\n"+a.map(function(t){return i+"  "+t}).join("\n")+"\n"+i+"  >":n+"<>"}return n+JSON.stringify(r,null,2).split("\n").map(function(t,e){return 0===e?t:i+"  "+t}).join("\n")}).join("\n")+(t.boxes?"\n"+n(t.boxes,e+1):"")}).join("\n")},e.exports={inspect:i,textify:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],48:[function(t,e,i){"use strict";var n;n=function(t){var e=t.byteLength,i=0,n=0;this.length=function(){return 8*e},this.bitsAvailable=function(){return 8*e+n},this.loadWord=function(){var r=t.byteLength-e,a=new Uint8Array(4),s=Math.min(4,e);if(0===s)throw new Error("no bytes available");a.set(t.subarray(r,r+s)),i=new DataView(a.buffer).getUint32(0),n=8*s,e-=s},this.skipBits=function(t){var r;n>t?(i<<=t,n-=t):(t-=n,r=Math.floor(t/8),t-=8*r,e-=r,this.loadWord(),i<<=t,n-=t)},this.readBits=function(t){var r=Math.min(n,t),a=i>>>32-r;return n-=r,n>0?i<<=r:e>0&&this.loadWord(),r=t-r,r>0?a<<r|this.readBits(r):a},this.skipLeadingZeros=function(){var t;for(t=0;n>t;++t)if(0!==(i&2147483648>>>t))return i<<=t,n-=t,t;return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros();return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb();return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()},e.exports=n},{}],49:[function(t,e,i){"use strict";var n=function(){this.init=function(){var t={};this.on=function(e,i){t[e]||(t[e]=[]),t[e].push(i)},this.off=function(e,i){var n;return t[e]?(n=t[e].indexOf(i),t[e].splice(n,1),n>-1):!1},this.trigger=function(e){var i,n,r,a;if(i=t[e])if(2===arguments.length)for(r=i.length,n=0;r>n;++n)i[n].call(this,arguments[1]);else{for(a=[],n=arguments.length,n=1;n<arguments.length;++n)a.push(arguments[n]);for(r=i.length,n=0;r>n;++n)i[n].apply(this,a)}},this.dispose=function(){t={}}}};n.prototype.pipe=function(t){return this.on("data",function(e){t.push(e)}),this.on("done",function(){t.flush()}),t},n.prototype.push=function(t){this.trigger("data",t)},n.prototype.flush=function(){this.trigger("done")},e.exports=n},{}],50:[function(t,e,i){var n=arguments[3],r=arguments[4],a=arguments[5],s=JSON.stringify;e.exports=function(t){for(var e,i=Object.keys(a),o=0,u=i.length;u>o;o++){var d=i[o];if(a[d].exports===t){e=d;break}}if(!e){e=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var f={},o=0,u=i.length;u>o;o++){var d=i[o];f[d]=d}r[e]=[Function(["require","module","exports"],"("+t+")(self)"),f]}var l=Math.floor(Math.pow(16,8)*Math.random()).toString(16),c={};c[e]=e,r[l]=[Function(["require"],"require("+s(e)+")(self)"),c];var h="("+n+")({"+Object.keys(r).map(function(t){return s(t)+":["+r[t][0]+","+s(r[t][1])+"]"}).join(",")+"},{},["+s(l)+"])",p=window.URL||window.webkitURL||window.mozURL||window.msURL;return new Worker(p.createObjectURL(new Blob([h],{type:"text/javascript"})))}},{}],51:[function(t,e,i){(function(n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(t,e,i){for(var n=!0;n;){var r=t,a=e,s=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(s)}var d=Object.getPrototypeOf(r);if(null===d)return;t=d,e=a,i=s,n=!0,o=d=void 0}},d=t("./playlist-loader"),f=r(d),l=t("./playlist"),c=r(l),h=t("./xhr"),p=r(h),g=t("./decrypter"),y=t("./bin-utils"),m=r(y),b=t("videojs-contrib-media-sources"),v=t("./m3u8"),_=r(v),w="undefined"!=typeof window?window.videojs:"undefined"!=typeof n?n.videojs:null,T=r(w),S=t("./resolve-url"),k=r(S),O={PlaylistLoader:f["default"],Playlist:c["default"],Decrypter:g.Decrypter,AsyncStream:g.AsyncStream,decrypt:g.decrypt,utils:m["default"],xhr:p["default"]};O.GOAL_BUFFER_LENGTH=30,O.canPlaySource=function(){return T["default"].log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")},O.findSoleUncommonTimeRangesEnd_=function(t,e){var i=void 0,n=void 0,r=void 0,a=[],s=[],o=function(t){return t[0]<=r&&t[1]>=r};if(t)for(i=0;i<t.length;i++)n=t.start(i),r=t.end(i),s.push([n,r]);if(e)for(i=0;i<e.length;i++)n=e.start(i),r=e.end(i),s.some(o)||a.push(r);return 1!==a.length?null:a[0]},O.supportsNativeHls=function(){var t=document.createElement("video"),e=void 0,i=void 0;return T["default"].getComponent("Html5").isSupported()?(e=t.canPlayType("application/x-mpegURL"),i=t.canPlayType("application/vnd.apple.mpegURL"),/probably|maybe/.test(e)||/probably|maybe/.test(i)):!1}(),O.isSupported=function(){return T["default"].log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")},O.comparePlaylistBandwidth=function(t,e){var i=void 0,n=void 0;return t.attributes&&t.attributes.BANDWIDTH&&(i=t.attributes.BANDWIDTH),i=i||window.Number.MAX_VALUE,e.attributes&&e.attributes.BANDWIDTH&&(n=e.attributes.BANDWIDTH),n=n||window.Number.MAX_VALUE,i-n},O.comparePlaylistResolution=function(t,e){var i=void 0,n=void 0;return t.attributes&&t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(i=t.attributes.RESOLUTION.width),i=i||window.Number.MAX_VALUE,e.attributes&&e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(n=e.attributes.RESOLUTION.width),n=n||window.Number.MAX_VALUE,i===n&&t.attributes.BANDWIDTH&&e.attributes.BANDWIDTH?t.attributes.BANDWIDTH-e.attributes.BANDWIDTH:i-n};var U=1.2,A=3e5,x=1/30,D=T["default"].getComponent("Component"),P=500,E=function(t){return t.retries&&t.retries>=2},C=function(t,e){var i=void 0;return t?(i=getComputedStyle(t),i?i[e]:""):""},L=function(t,e,i){if(t){var n=t.segments[e],r=t.segments[e-1];i&&n&&(n.end=i,r?r.end&&(n.duration=n.end-r.end):n.duration=n.end)}},B=function(t,e,i,n){if(!t)return!1;var r=t.segments,a=i===r.length-1,s=n.length&&r[r.length-1].end<=n.end(0);return t.endList&&"open"===e.readyState&&(a||s)},M=function(t){var e={codecCount:0,videoCodec:null,audioProfile:null};return e.codecCount=t.split(",").length,e.codecCount=e.codecCount||2,e.videoCodec=/(^|\s|,)+(avc1)[^ ,]*/i.exec(t),e.videoCodec=e.videoCodec&&e.videoCodec[2],e.audioProfile=/(^|\s|,)+mp4a.\d+\.(\d+)/i.exec(t),e.audioProfile=e.audioProfile&&e.audioProfile[2],e},I=function(t){return function(e){var i=void 0,n=[],r=this.tech_,a=r.buffered();if("undefined"==typeof e&&(e=r.currentTime()),!this.mediaSource||!this.mediaSource.mediaSource_||!this.mediaSource.mediaSource_.sourceBuffers.length)return T["default"].createTimeRanges([]);if(a&&a.length)for(i=0;i<a.length;i++)t(a.start(i),a.end(i),e)&&n.push([a.start(i),a.end(i)]);return T["default"].createTimeRanges(n)}},j=function(t){function e(t,i){var n=this;a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var r=void 0;t.options_&&t.options_.playerId&&(r=(0,T["default"])(t.options_.playerId),r.hls||Object.defineProperty(r,"hls",{get:function(){return T["default"].log.warn("player.hls is deprecated. Use player.tech.hls instead."),n}})),this.tech_=t,this.source_=i.source,this.mode_=i.mode,this.pendingSegment_=null,this.bandwidth=i.bandwidth||4194304,this.bytesReceived=0,this.loadingState_="none","none"!==this.tech_.preload()&&(this.loadingState_="meta"),this.startCheckingBuffer_(),this.on(this.tech_,"seeking",function(){this.setCurrentTime(this.tech_.currentTime())}),this.on(this.tech_,"error",function(){this.stopCheckingBuffer_()}),this.on(this.tech_,"play",this.play)}return s(e,t),o(e,[{key:"src",value:function(t){var e=this,i=void 0;t&&(this.mediaSource=new T["default"].MediaSource({mode:this.mode_}),this.mediaSource.addEventListener("sourceopen",this.handleSourceOpen.bind(this)),this.options_={},"undefined"!=typeof this.source_.withCredentials?this.options_.withCredentials=this.source_.withCredentials:T["default"].options.hls&&(this.options_.withCredentials=T["default"].options.hls.withCredentials),this.playlists=new O.PlaylistLoader(this.source_.src,this.options_.withCredentials),this.tech_.one("canplay",this.setupFirstPlay.bind(this)),this.playlists.on("loadedmetadata",function(){i=e.playlists.media(),i.endList&&"metadata"!==e.tech_.preload()&&"none"!==e.tech_.preload()&&(e.loadingState_="segments"),e.setupSourceBuffer_(),e.setupFirstPlay(),e.fillBuffer(),e.tech_.trigger("loadedmetadata")}),this.playlists.on("error",function(){e.blacklistCurrentPlaylist_(e.playlists.error)}),this.playlists.on("loadedplaylist",function(){var t=e.playlists.media(),n=void 0;return t?(e.updateDuration(e.playlists.media()),n=e.seekable(),e.duration()===1/0&&0!==n.length&&e.mediaSource.addSeekableRange_(n.start(0),n.end(0)),void(i=t)):void e.playlists.media(e.selectPlaylist())}),this.playlists.on("mediachange",function(){e.tech_.trigger({type:"mediachange",bubbles:!0})}),this.tech_.el()&&this.tech_.src(T["default"].URL.createObjectURL(this.mediaSource)))}},{key:"handleSourceOpen",value:function(){this.sourceBuffer||this.setupSourceBuffer_(),this.tech_.autoplay()&&this.play()}},{key:"excludeIncompatibleVariants_",value:function(t){var e=this.playlists.master,i=2,n=null,r=null,a=void 0;t.attributes&&t.attributes.CODECS&&(a=M(t.attributes.CODECS),n=a.videoCodec,r=a.audioProfile,i=a.codecCount),e.playlists.forEach(function(t){var e={codecCount:2,videoCodec:null,audioProfile:null};t.attributes&&t.attributes.CODECS&&(e=M(t.attributes.CODECS)),e.codecCount!==i&&(t.excludeUntil=1/0),e.videoCodec!==n&&(t.excludeUntil=1/0),("5"===e.audioProfile&&"5"!==r||"5"===r&&"5"!==e.audioProfile)&&(t.excludeUntil=1/0)})}},{key:"setupSourceBuffer_",value:function(){var t=this.playlists.media(),e=void 0;t&&"open"===this.mediaSource.readyState&&(e="video/mp2t",t.attributes&&t.attributes.CODECS&&(e+='; codecs="'+t.attributes.CODECS+'"'),this.sourceBuffer=this.mediaSource.addSourceBuffer(e),this.excludeIncompatibleVariants_(t),this.sourceBuffer.addEventListener("updateend",this.updateEndHandler_.bind(this)))}},{key:"setupFirstPlay",value:function(){var t=void 0,e=this.playlists.media();this.duration()===1/0&&0===this.tech_.played().length&&!this.tech_.paused()&&this.sourceBuffer&&e&&this.tech_.readyState()>=1&&(this.playlists.trigger("firstplay"),t=this.seekable(),t.length&&this.tech_.setCurrentTime(t.end(0)))}},{key:"play",value:function(){return this.loadingState_="segments",this.tech_.ended()&&this.tech_.setCurrentTime(0),0===this.tech_.played().length?this.setupFirstPlay():void(this.duration()===1/0&&this.tech_.currentTime()<this.seekable().start(0)&&this.tech_.setCurrentTime(this.seekable().start(0)))}},{key:"setCurrentTime",value:function(t){var e=this.findBufferedRange_();return this.playlists&&this.playlists.media()&&this.playlists.media().segments?e&&e.length?t:this.pendingSegment_&&this.pendingSegment_.buffered?t:(this.lastSegmentLoaded_=null,this.cancelSegmentXhr(),this.keyXhr_&&(this.keyXhr_.aborted=!0,this.cancelKeyXhr()),void this.fillBuffer(this.playlists.getMediaIndexForTime_(t))):0}},{key:"duration",value:function(){var t=this.playlists;return t?this.mediaSource?this.mediaSource.duration:O.Playlist.duration(t.media()):0}},{key:"seekable",value:function i(){var t=void 0,i=void 0;return this.playlists&&(t=this.playlists.media())?(i=O.Playlist.seekable(t),0===i.length?i:0===i.start(0)?T["default"].createTimeRanges([[this.playlists.expired_,this.playlists.expired_+i.end(0)]]):i):T["default"].createTimeRanges()}},{key:"updateDuration",value:function(t){var e=this,i=this.mediaSource.duration,n=O.Playlist.duration(t),r=this.tech_.buffered(),a=function s(){e.mediaSource.duration=n,e.tech_.trigger("durationchange"),e.mediaSource.removeEventListener("sourceopen",s)};r.length>0&&(n=Math.max(n,r.end(r.length-1))),i!==n&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",a):this.sourceBuffer&&this.sourceBuffer.updating||(this.mediaSource.duration=n,this.tech_.trigger("durationchange")))}},{key:"resetSrc_",value:function(){this.cancelSegmentXhr(),this.cancelKeyXhr(),this.sourceBuffer&&"open"===this.mediaSource.readyState&&this.sourceBuffer.abort()}},{key:"cancelKeyXhr",value:function(){this.keyXhr_&&(this.keyXhr_.onreadystatechange=null,this.keyXhr_.abort(),this.keyXhr_=null)}},{key:"cancelSegmentXhr",value:function(){this.segmentXhr_&&(this.segmentXhr_.onreadystatechange=null,this.segmentXhr_.abort(),this.segmentXhr_=null),this.pendingSegment_=null}},{key:"dispose",value:function(){this.stopCheckingBuffer_(),this.playlists&&this.playlists.dispose(),this.resetSrc_(),u(Object.getPrototypeOf(e.prototype),"dispose",this).call(this)}},{key:"selectPlaylist",value:function(){var t=void 0,e=this.playlists.master.playlists.slice(),i=[],n=+new Date,r=void 0,a=void 0,s=void 0,o=void 0,u=void 0,d=void 0,f=void 0,l=void 0;for(e.sort(O.comparePlaylistBandwidth),e=e.filter(function(t){return"undefined"!=typeof t.excludeUntil?n>=t.excludeUntil:!0}),r=e.length;r--;)a=e[r],a.attributes&&a.attributes.BANDWIDTH&&(t=a.attributes.BANDWIDTH*U,t<this.bandwidth&&(i.push(a),s||(s=a)));for(r=i.length,i.sort(O.comparePlaylistResolution),a=null,f=parseInt(C(this.tech_.el(),"width"),10),l=parseInt(C(this.tech_.el(),"height"),10);r--;)if(a=i[r],a.attributes&&a.attributes.RESOLUTION&&a.attributes.RESOLUTION.width&&a.attributes.RESOLUTION.height){var c=a.attributes.RESOLUTION;if(c.width===f&&c.height===l){o=null,d=a;break}if(c.width<f&&c.height<l)break;(!o||c.width<u.width&&c.height<u.height)&&(o=a,u=o.attributes.RESOLUTION)}return o||d||s||e[0]}},{key:"checkBuffer_",value:function(){this.checkBufferTimeout_&&(window.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null),this.fillBuffer(),this.drainBuffer(),this.checkBufferTimeout_=window.setTimeout(this.checkBuffer_.bind(this),P)}},{key:"startCheckingBuffer_",value:function(){this.checkBuffer_()}},{key:"stopCheckingBuffer_",value:function(){this.checkBufferTimeout_&&(window.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)}},{key:"fillBuffer",value:function(t){var e=this.tech_,i=e.currentTime(),n=0!==this.tech_.buffered().length,r=this.findBufferedRange_(),a=!(r&&r.length),s=0,o=0,u=void 0,d=void 0,f=void 0;if("segments"===this.loadingState_&&e.currentSrc()&&this.playlists&&!this.segmentXhr_&&!this.pendingSegment_&&"HAVE_NOTHING"!==this.playlists.state&&this.playlists.media()&&this.playlists.media().segments&&"SWITCHING_MEDIA"!==this.playlists.state){if("undefined"==typeof t)if(r&&r.length){if(s=r.end(0),t=this.playlists.getMediaIndexForTime_(s),o=Math.max(0,s-i),o>=O.GOAL_BUFFER_LENGTH)return}else t=this.playlists.getMediaIndexForTime_(this.tech_.currentTime());if(u=this.playlists.media().segments[t]){if(this.lastSegmentLoaded_&&this.playlistUriToUrl(this.lastSegmentLoaded_.uri)===this.playlistUriToUrl(u.uri)&&this.lastSegmentLoaded_.byterange===u.byterange)return this.fillBuffer(t+1);d={uri:this.playlistUriToUrl(u.uri),mediaIndex:t,mediaSequence:this.playlists.media().mediaSequence,playlist:this.playlists.media(),currentBufferedEnd:s,bytes:null,encryptedBytes:null,decrypter:null,buffered:null,timestampOffset:null},t>0&&(f=O.Playlist.duration(d.playlist,d.playlist.mediaSequence+t)+this.playlists.expired_),
this.tech_.seeking()&&a?d.playlist.discontinuityStarts.length&&(d.timestampOffset=f):u.discontinuity&&r.length?d.timestampOffset=r.end(0):!n&&this.tech_.currentTime()>.05&&(d.timestampOffset=f),this.loadSegment(d)}}}},{key:"playlistUriToUrl",value:function(t){var e=void 0;return e=this.playlists.media().uri===this.source_.src?(0,k["default"])(this.source_.src,t):(0,k["default"])((0,k["default"])(this.source_.src,this.playlists.media().uri||""),t)}},{key:"byterangeStr_",value:function(t){var e=void 0,i=void 0;return i=t.offset+t.length-1,e=t.offset,"bytes="+e+"-"+i}},{key:"segmentXhrHeaders_",value:function(t){var e={};return"byterange"in t&&(e.Range=this.byterangeStr_(t.byterange)),e}},{key:"setBandwidth",value:function(t){this.segmentXhrTime=t.roundTripTime,this.bandwidth=t.bandwidth,this.bytesReceived+=t.bytesReceived||0,this.tech_.trigger("bandwidthupdate")}},{key:"blacklistCurrentPlaylist_",value:function(t){var e=void 0,i=void 0;return(e=t.playlist||this.playlists.media())?(e.excludeUntil=Date.now()+A,(i=this.selectPlaylist())?(T["default"].log.warn("Problem encountered with the current HLS playlist. Switching to another playlist."),this.playlists.media(i)):(T["default"].log.warn("Problem encountered with the current HLS playlist. No suitable alternatives found."),this.error=t,this.mediaSource.endOfStream("network"))):(this.error=t,this.mediaSource.endOfStream("network"))}},{key:"loadSegment",value:function(t){var e=this,i=t.playlist.segments[t.mediaIndex],n=0,r=this.seekable(),a=this.tech_.currentTime();this.sourceBuffer&&!this.sourceBuffer.updating&&(n=r.length&&r.start(0)>0&&r.start(0)<a?r.start(0):a-60,n>0&&this.sourceBuffer.remove(0,n)),i.key&&this.fetchKey_(i),this.segmentXhr_=O.xhr({uri:t.uri,responseType:"arraybuffer",withCredentials:this.source_.withCredentials,timeout:1.5*i.duration*1e3,headers:this.segmentXhrHeaders_(i)},function(n,r){return e.segmentXhr_&&r===e.segmentXhr_?(e.segmentXhr_=null,r.timedout?(e.bandwidth=1,e.playlists.media(e.selectPlaylist())):!r.aborted&&n?e.blacklistCurrentPlaylist_({status:r.status,message:"HLS segment request error at URL: "+t.uri,code:r.status>=500?4:2}):void(r.response&&(e.lastSegmentLoaded_=i,e.setBandwidth(r),i.key?t.encryptedBytes=new Uint8Array(r.response):t.bytes=new Uint8Array(r.response),e.pendingSegment_=t,e.tech_.trigger("progress"),e.drainBuffer(),e.playlists.media(e.selectPlaylist())))):void 0})}},{key:"drainBuffer",value:function(){var t=void 0,e=void 0,i=void 0,n=void 0,r=void 0,a=void 0,s=void 0;if(this.pendingSegment_&&this.sourceBuffer&&!this.pendingSegment_.buffered&&!this.sourceBuffer.updating){if(t=this.pendingSegment_,e=t.mediaIndex,i=t.playlist,n=t.bytes,r=i.segments[e],r.key&&!n){if(E(r.key))return this.blacklistCurrentPlaylist_({message:"HLS segment key request error.",code:4});if(!r.key.bytes)return;if(t.decrypter)return;return s=r.key.iv||new Uint32Array([0,0,0,e+i.mediaSequence]),a=new O.Decrypter(t.encryptedBytes,r.key.bytes,s,function(e,i){e&&T["default"].log.warn(e),t.bytes=i}),void(t.decrypter=a)}this.pendingSegment_.buffered=this.tech_.buffered(),null!==t.timestampOffset&&(this.sourceBuffer.timestampOffset=t.timestampOffset),this.sourceBuffer.appendBuffer(n)}}},{key:"updateEndHandler_",value:function(){var t=this.pendingSegment_,e=void 0,i=void 0,n=void 0,r=void 0,a=void 0,s=void 0;if(!t)return void(this.pendingSegment_=null);if(t.buffered){if(this.pendingSegment_=null,e=t.playlist,i=t.mediaIndex+(t.mediaSequence-e.mediaSequence),n=this.findBufferedRange_(),s=B(e,this.mediaSource,i,n),t.playlist.uri!==this.playlists.media().uri)return s?this.mediaSource.endOfStream():this.fillBuffer();if(r=this.seekable(),this.tech_.seeking()&&0===n.length&&r.length&&this.tech_.currentTime()<r.start(0)){var o=this.findNextBufferedRange_();o.length&&(T["default"].log("tried seeking to",this.tech_.currentTime(),"but that was too early, retrying at",o.start(0)),this.tech_.setCurrentTime(o.start(0)+x))}return a=O.findSoleUncommonTimeRangesEnd_(t.buffered,this.tech_.buffered()),L(e,i,a),s?this.mediaSource.endOfStream():null!==a||t.buffered.length!==this.tech_.buffered().length?(this.updateDuration(e),void this.fillBuffer()):void this.fillBuffer(i+1)}}},{key:"fetchKey_",value:function(t){var e=this,i=void 0,n=void 0,r=void 0;return!this.keyXhr_&&(n=this.options_,r=function(i){return function(n,r){var a=void 0;return e.keyXhr_=null,n||!r.response||16!==r.response.byteLength?(i.retries=i.retries||0,i.retries++,void(r.aborted||e.fetchKey_(t))):(a=new DataView(r.response),i.bytes=new Uint32Array([a.getUint32(0),a.getUint32(4),a.getUint32(8),a.getUint32(12)]),void e.checkBuffer_())}},i=t.key)?i.bytes||E(i)?void 0:void(this.keyXhr_=O.xhr({uri:this.playlistUriToUrl(i.uri),responseType:"arraybuffer",withCredentials:n.withCredentials},r(i))):void 0}}]),e}(D);i["default"]=j,j.prototype.findBufferedRange_=I(function(t,e,i){return i>=t-x&&e+x>=i}),j.prototype.findNextBufferedRange_=I(function(t,e,i){return t-x>=i});var R=function N(t){return{canHandleSource:function(t){return N.canPlayType(t.type)},handleSource:function(e,i){return"flash"===t&&i.setTimeout(function(){i.trigger("loadstart")},1),i.hls=new j(i,{source:e,mode:t}),i.hls.src(e.src),i.hls},canPlayType:function(t){return N.canPlayType(t)}}};R.canPlayType=function(t){var e=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;return O.supportsNativeHls?!1:e.test(t)},"undefined"!=typeof T["default"].MediaSource&&"undefined"!=typeof T["default"].URL||(T["default"].MediaSource=b.MediaSource,T["default"].URL=b.URL),b.MediaSource.supportsNativeMediaSources()&&T["default"].getComponent("Html5").registerSourceHandler(R("html5")),window.Uint8Array&&T["default"].getComponent("Flash").registerSourceHandler(R("flash")),T["default"].HlsHandler=j,T["default"].HlsSourceHandler=R,T["default"].Hls=O,T["default"].m3u8=_["default"],i["default"]={Hls:O,HlsHandler:j,HlsSourceHandler:R},e.exports=i["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./bin-utils":1,"./decrypter":5,"./m3u8":6,"./playlist":11,"./playlist-loader":10,"./resolve-url":12,"./xhr":14,"videojs-contrib-media-sources":28}]},{},[51])(51)});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);