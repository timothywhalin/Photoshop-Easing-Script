var easing = {
	easeInQuad: function (t, b, c, d) {
		return c*(t/=d)*t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
        return c - easing.easeOutBounce (d-t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (t, b, c, d) {
        if (t < d/2) return easing.easeInBounce (t*2, 0, c, d) * .5 + b;
        return easing.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
};



	var w = new Window("dialog", 'Photoshop Easing Script');
		w.orientation = "column";
		w.margins = 20;
	var options = w.add ("panel  {orientation: 'row', text: 'Options'}", undefined, "Options");
		options.preferredSize.width = 300;
	var optionstext = options.add('group {orientation: "column", margins: 5, alignChildren: "right"}');
		optionstext.preferredSize.width = 130;
		optionstext.add ("statictext", undefined, "Type of Ease:");
		optionstext.add ("statictext", undefined, "Number of Frames:");
	var optionsset = options.add ('group {orientation: "column", alignment: ["fill", "fill"], alignChildren: "fill"}');
		var typeofEase = optionsset.add ("dropdownlist", undefined, ['easeInQuad','easeOutQuad','easeInOutQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeInQuart','easeOutQuart','easeInOutQuart','easeInQuint','easeOutQuint','easeInOutQuint','easeInSine','easeOutSine','easeInOutSine','easeInExpo','easeOutExpo','easeInOutExpo','easeInCirc','easeOutCirc','easeInOutCirc','easeInElastic','easeOutElastic','easeInOutElastic','easeInBack','easeOutBack','easeInOutBack','easeInBounce','easeOutBounce','easeInOutBounce'] );
		typeofEase.selection = 0;
		var numberofFrames = optionsset.add ("edittext", undefined, "10");

	var scale = w.add ("panel  {orientation: 'column', text: 'Scale', alignChildren: 'fill'}", undefined, "Scale/Resize");
		scale.preferredSize.width = 300;
	/*var togglescale = scale.add('group {orientation: "row"}');
		togglescale.margins = 5;
		togglescale.add ("radiobutton", undefined, "Pixels");
		togglescale.add ("radiobutton", undefined, "Percentages");
		togglescale.children[0].value = true;
		togglescale.addEventListener ("click", function (event) {
			if (event.target == togglescale.children[0]) {
				scalepx.visible = true;
				scaleperct.visible = false;
			} else {
				scalepx.visible = false;
				scaleperct.visible = true;
			}
		});*/
	var scalepx = scale.add('group {orientation: "row"}');
	var scaletext = scalepx.add('group {orientation: "column", margins: 5, alignChildren: "right"}');
		scaletext.preferredSize.width = 130;
		scaletext.add ("statictext", undefined, "Width:");
		scaletext.add ("statictext", undefined, "Height:");
	var scalepxinput = scalepx.add('group {orientation: "column", alignment: ["fill", "fill"], alignChildren: "fill"}}');
		var scalepxhorz = scalepxinput.add ("edittext", undefined, "");
		var scalepxvert = scalepxinput.add ("edittext", undefined, "");

	/*evar scaleperct = scale.add('group {orientation: "row"}');
		scaleperct.visible = false;
	var scaletext = scaleperct.add('group {orientation: "column", margins: 5, alignChildren: "right"}');
		scaletext.preferredSize.width = 130;
		scaletext.add ("statictext", undefined, "Horizontal:");
		scaletext.add ("statictext", undefined, "Vertical:");
	var scaleset = scaleperct.add ('group {orientation: "column", alignment: ["fill", "fill"], alignChildren: "fill"}');
		var vertslider = scaleset.add("slider {minValue: -100, maxValue: 100, value: 50}", undefined);
		var horzslider = scaleset.add("slider {minValue: -100, maxValue: 100, value: 0}", undefined);
	var scaleperctinput = scaleperct.add('group {orientation: "column"}');
		scaleperctinput.preferredSize.height = 0;
		var vertperct = scaleperctinput.add("edittext", undefined, "100%");
			vertperct.preferredSize.width = 40;
		var horzperct = scaleperctinput.add("edittext", undefined, "100%");
			horzperct.preferredSize.width = 40;
	*/
	var translate = w.add ("panel  {orientation: 'row', text: 'Translate'}", undefined, "Translate (Move)");
		translate.preferredSize.width = 300;
	var transtext = translate.add('group {orientation: "column", margins: 5, alignChildren: "right"}');
		transtext.preferredSize.width = 130;
		transtext.add ("statictext", undefined, "Horizontal:");
		transtext.add ("statictext", undefined, "Vertical:");
	var transinput = translate.add('group {orientation: "column", alignment: ["fill", "fill"], alignChildren: "fill"}}');
		var transhorz = transinput.add ("edittext", undefined, "");
		var transvert = transinput.add ("edittext", undefined, "");

	var rotate = w.add ("panel  {orientation: 'row', text: 'Rotate (Does not Ease)'}", undefined, "Rotate");
		rotate.preferredSize.width = 300;
	var rotatetext = rotate.add('group {orientation: "column", margins: 5, alignChildren: "right"}');
		rotatetext.preferredSize.width = 130;
		rotatetext.add ("statictext", undefined, "Rotate:");
	var rotateinput = rotate.add('group {orientation: "column", alignment: ["fill", "fill"], alignChildren: "fill"}}');
		var rotateinput = rotateinput.add ("edittext", undefined, "");

	//Opacity
	var opacity = w.add ("panel  {orientation: 'row', text: 'Opacity'}", undefined, "Opacity");
		opacity.preferredSize.width = 300;
	var opacitytext = opacity.add('group {orientation: "column", margins: 5, alignChildren: "right"}');
		opacitytext.preferredSize.width = 130;
		opacitytext.add ("statictext", undefined, "Opacity:");
	var opacityinput = opacity.add('group {orientation: "column", alignment: ["fill", "fill"], alignChildren: "fill"}}');
		var opacity = opacityinput.add ("edittext", undefined, "");

	var myButtonGroup = w.add ("group {orientation: 'row'}");
		var aboutbtngroup = myButtonGroup.add ("group");
		aboutbtngroup.preferredSize.width = 120;
			aboutbtngroup.alignment = "left";
			var aboutbtn = aboutbtngroup.add ("button", undefined, "?");
			aboutbtn.onClick= function() {
				alert('Photoshop Easing Script (BETA v0.1)\n\nCreated by Timothy Whalin\nwhalint@amazon.com');
			}
		var okcancel = myButtonGroup.add ("group");
			okcancel.alignment = "right";
			var cancel = okcancel.add ("button", undefined, "Cancel");
			cancel.onClick= function() {
				w.close();
			}
			var okay = okcancel.add ("button", undefined, "OK");
			okay.onClick= function() {
				w.close();
				runeasing();
		}
	w.center();
	w.show();

function runeasing() {
	//Detect if a document is open
	if (documents.length == 0) {
    	alert("There are no documents open.");
    	return;
	}
	numberofFrames = numberofFrames.text;
	typeofEase = typeofEase.selection.text;
	preferences.rulerUnits = Units.PIXELS;
	var activeLayer = app.activeDocument.activeLayer;

	if (numberofFrames == '' || numberofFrames == null) {
		alert('Number of Frames cannot be blank.')
		return;
	}
	if (numberofFrames >= 100) {
		var answer = confirm('You have input ' + numberofFrames + ' and this could take a while. Are you sure you want to continue?')
		if (!answer) return;
	}



	for(var i=1; i<=numberofFrames; i++) {
		GotoNextFrame();
		var bounds = activeLayer.bounds;
		 if(i==1) {
			var xinitial = bounds[0].value,
			yinitial = bounds[1].value,
			wInitial = bounds[2].value - bounds[0].value,
			hInitial = bounds[3].value - bounds[1].value,
			initialOpacity = activeLayer.opacity;
		}
		var elapsed = i;

		//Translate
		if(transhorz.text != '') {
			var xchange = bounds[0].value-easing[typeofEase](elapsed, xinitial, transhorz.text, numberofFrames);
		} else {
			var xchange = null;
		}
		if(transvert.text != '') {
			var ychange = bounds[1].value-easing[typeofEase](elapsed, yinitial, transvert.text, numberofFrames);
		} else {
			var ychange = null;
		}
		activeLayer.translate(-(xchange),-(ychange));


		//Scale
		if(scalepxhorz.text != '') {
			var xresize = easing[typeofEase](elapsed, 0, scalepxhorz.text, numberofFrames),
			lWidth = (bounds[2].value - bounds[0].value),
			newWidth = (100/lWidth) * (xresize+wInitial);
		} else {
			var newWidth = 100;
		}
		if(scalepxvert.text != '') {
			var yresize = easing[typeofEase](elapsed, 0, scalepxvert.text, numberofFrames),
			lHeight = (bounds[3].value - bounds[1].value),
			newHeight = (100/lHeight) * (yresize+hInitial);
		} else {
			var newHeight = 100;
		}
		activeLayer.resize(Number(newWidth),Number(newHeight),AnchorPosition.MIDDLECENTER);


		//Rotate
		if(rotateinput.text != '') {
			//var rotateNum = easing[typeofEase](elapsed, 0, rotateinput.text, numberofFrames);
			activeLayer.rotate(rotateinput.text/numberofFrames, AnchorPosition.MIDDLECENTER);
		}

		if(opacity.text != ''){
			opacityChange = easing[typeofEase](elapsed, initialOpacity, (opacity.text - initialOpacity), numberofFrames);
			activeLayer.opacity = opacityChange;
		}
	}

	function GotoNextFrame() {
		var desc = new ActionDescriptor();
	    desc.putBoolean( stringIDToTypeID('toNextWholeSecond'), false );
	    executeAction( stringIDToTypeID('nextFrame'), desc, DialogModes.NO );
	}
//end main function
};
