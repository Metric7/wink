/*--------------------------------------------------------
 * Copyright (c) 2011, The Dojo Foundation
 * This software is distributed under the "Simplified BSD license",
 * the text of which is available at http://www.winktoolkit.org/licence.txt
 * or see the "license.txt" file for more details.
 *--------------------------------------------------------*/

/**
 * @fileOverview graphic features detection.
 * 
 * @compatibility Iphone OS2, Iphone OS3, Iphone OS4, Android 1.1, Android 1.5, Android 2.1, Android 2.2, Android 2.3, Android 3.0, Android 3.1, BlackBerry 6, BlackBerry 7, Bada 1.0, Windows Phone 7.5
 * @author Sylvain LALANDE
 * 
 * @features:
 * 	--> TODO canvas
 * 	--> TODO canvas-webgl
 * 	--> TODO svg
 * 	--> TODO svg-inlinesvg
 * 
 */

define(['../../../_base/_base/js/base', './feat'], function(wink)
{
	var winkhas = wink.has,
		inquireMap = winkhas.inquireMap,
		w = window;
	
	inquireMap({
		"canvas": function() {
			return !!w['CanvasRenderingContext2D'];
		}
	});

	return winkhas;
});