window.canvasplugin = function(canvasEl, offset, type, callback) {
    var mineType = (type ? type : "image/png");
    var xpos = canvasEl.offsetLeft;
    var ypos = canvasEl.offsetTop;
    var width = canvasEl.width;
    var height = canvasEl.height;
    var screenWidth = window.innerWidth; // no WebView.getContentWidth(), use this instead

    if (typeof (offset) !== 'undefined' && offset) {
        xpos = offset.left;
        ypos = offset.top;
        width = offset.width;
        height = offset.height;
        screenWidth = offset.screenWidth ? offset.screenWidth : screenWidth;
    }
    ;
    var canvasProps = {
        mimeType: mineType,
        xpos: xpos,
        ypos: ypos,
        width: width,
        height: height,
        screenWidth: screenWidth
    };

    //call the Plugin execute method()
    cordova.exec(callback, function(err) {
        callback('Error: ' + err);
    }, "CanvasToDataURL", "toDataURL", [canvasProps.mimeType,
        canvasProps.xpos,
        canvasProps.ypos,
        canvasProps.width,
        canvasProps.height,
        canvasProps.screenWidth]);
};
