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
    var $canvas = getElememtById('your-canvas-id');
    var canvasData = canvas.toDataURL();
    if (canvasData === 'data:,' || canvasData.length < 10) {
        window.canvasplugin(canvas, function(val) {
            canvasData = val.data;
        });
    }
```


method is synchronous and callback for function may not use.
