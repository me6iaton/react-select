"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function defaultPlaceholderDisplay(valueArray, isOpen, inputValue) {
	return !valueArray.length && !inputValue;
}

exports.default = defaultPlaceholderDisplay;