PhonegapCanvasToImgAndroid
==========================

on Android 2.x method toDataURL() of HTML5 Canvas returns a string "data:,"

this plugin needs to resolve this problem.

##How to install
```
cordova plugin add https://github.com/chuwak/PhonegapCanvasToImgAndroid.git
```

or, if you using Netbeans 7.4+,
then go to folder  nbproject, find file plugins.properties, and add new line
```
com.apes.plugins.CanvasToDataURL=https://github.com/chuwak/PhonegapCanvasToImgAndroid.git
```


##How to use
```
    var canvas = getElememtById('your-canvas-id');
    var canvasData = canvas.toDataURL();
    if (canvasData === 'data:,' || canvasData.length < 10) {
        window.canvasplugin(canvas, offset, 'image/png', function(val) {
            canvasData = val.data;
        });
    }
```

parameters for function  canvasplugin(canvas, offset, type, callback)
canvas - canvas html element
offset - js object, which contains bounds of screen image
```
// includes jquery
	var offset = {
		left: $canvas.offset().left,
		top: $canvas.offset().top,
		width: $canvas.width(),
		height: $canvas.height()
	};
```
this object need, when canvas element is absolute positioned, and functions canvas.offsetTop and canvas.offset returns 0.

type is mimeType of returned image, by default is 'png',  allowed values is 'image/png'  and 'image/jpeg'

callback - synchronous callback îf plugin

