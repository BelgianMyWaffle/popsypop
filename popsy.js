$.fn.popsy = function(messageOrimage, button, textImage) {
	this.attr("href", "Javascript:showLightbox()");
	$("<div id='lightbox_bg'></div>").insertAfter(this);
	$("#lightbox_bg").append("<div id='lightbox' style='display: none'></div>");
	$("#lightbox").append("<table id='table_popsy' cellpadding='5' cellspacing='0' border='0' width='100%' style='font: 12px Verdana, Arial, Helvetica; color: #004080'></table>");
	$("#table_popsy").append("<tr id= 'tr_popsy' valign='top'></tr>");
	$("#tr_popsy").append("<td id='td_popsy' colspan=2><p id='content_popsy'><p/></td>");
	$("<div class='finished'><input id='finished_button' type='button' onClick='hideLightbox()'; /></div>").insertAfter("<div class='finished'><input id='finished_button' type='button' value='Close' onClick='hideLightbox()'; style = 'background: red; border-radius: 0px;'/></div>").insertAfter("#tr_popsy");
	$("#finished_button").val("" + button);
	
	if(textImage == "image"){
		var str= '<img id="popsy_theImg" src="' + messageOrimage + '"; />';
		$("#content_popsy").prepend(str);
	}else{
		$("#content_popsy").text("" + messageOrimage + "\n\n");
	}

	
	$("#lightbox").css({
			'position': 'fixed',
			'top': '33%',
			'left': '50%',
			'z-index': '350',
			'width': '475px',
			'padding': '20px',
			'border': '2px solid',
			'border-radius': '25px',
			'background-color': '#fff',
			'margin-left': '-236px',
			'margin-top': '-100px',
			'text-align':'center',
			'overflow': 'auto',
			'display': 'none'
	});
	$("#lightbox_bg").css({
			'background': '#000',
			'opacity': '0.8',
			'filter': 'alpha(opacity = 80)',
			'-moz-opacity': '0.8',
			'-khtml-opacity':'0.8',
			'z-index': '300',
			'width': '100%',
			'height': '100%',
			'position': 'fixed',
			'top': '0px',
			'left': '0px',
			'display': 'none'
	});

	cssButton();
	
	function cssButton() {
		$("#finished_button").css({
		'-moz-box-shadow':'inset 0px 1px 0px 0px #54a3f7',
		'-webkit-box-shadow':'inset 0px 1px 0px 0px #54a3f7',
		'box-shadow':'inset 0px 1px 0px 0px #54a3f7',
		'background':'-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7))',
		'background':'-moz-linear-gradient(top, #007dc1 5%, #0061a7 100%)',
		'background':'-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%)',
		'background':'-o-linear-gradient(top, #007dc1 5%, #0061a7 100%)',
		'background':'-ms-linear-gradient(top, #007dc1 5%, #0061a7 100%)',
		'background':'linear-gradient(to bottom, #007dc1 5%, #0061a7 100%)',
		'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr="#007dc1", endColorstr="#0061a7",GradientType=0)',
		'background-color':'#007dc1',
		'-moz-border-radius':'3px',
		'-webkit-border-radius':'3px',
		'border-radius':'3px',
		'border':'1px solid #124d77',
		'display':'inline-block',
		'cursor':'pointer',
		'color':'#ffffff',
		'font-family':'arial',
		'font-size':'13px',
		'padding':'6px 24px',
		'text-decoration':'none',
		'text-shadow':'0px 1px 0px #154682'
		});
	}	   
	
	
	$("#finished_button").hover(function(){
			  $("#finished_button").css({
				'background':'-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0061a7), color-stop(1, #007dc1))',
				'background':'-moz-linear-gradient(top, #0061a7 5%, #007dc1 100%)',
				'background':'-webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%)',
				'background':'-o-linear-gradient(top, #0061a7 5%, #007dc1 100%)',
				'background':'-ms-linear-gradient(top, #0061a7 5%, #007dc1 100%)',
				'background':'linear-gradient(to bottom, #0061a7 5%, #007dc1 100%)',
				'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr="#0061a7", endColorstr="#007dc1",GradientType=0)',
				'background-color':'#0061a7'
			  });
		  
		  },function(){});
	return this;
};

function showLightbox() {
	$("#lightbox_bg").css("display", "block");
	$("#lightbox").css("display", "block");
	document.body.style.overflow = 'hidden';
}

function hideLightbox() {
	$("#lightbox_bg").css("display", "none");
	$("#lightbox").css("display", "none");
	document.body.style.overflow = 'hidden';
}