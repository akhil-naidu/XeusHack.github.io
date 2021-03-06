/*!
 * jQuery TextChange Plugin
 * http://www.zurb.com/playground/jquery-text-change-custom-event
 *
 * Copyright 2010, ZURB
 * Released under the MIT License
 */
 (function(a){a.event.special.textchange={setup:function(){a(this).data("lastValue",this.contentEditable==="true"?a(this).html():a(this).val());a(this).bind("keyup.textchange",a.event.special.textchange.handler);a(this).bind("cut.textchange paste.textchange input.textchange",a.event.special.textchange.delayedHandler)},teardown:function(){a(this).unbind(".textchange")},handler:function(){a.event.special.textchange.triggerIfChanged(a(this))},delayedHandler:function(){var c=a(this);setTimeout(function(){a.event.special.textchange.triggerIfChanged(c)},
 25)},triggerIfChanged:function(a){var b=a[0].contentEditable==="true"?a.html():a.val();b!==a.data("lastValue")&&(a.trigger("textchange",[a.data("lastValue")]),a.data("lastValue",b))}};a.event.special.hastext={setup:function(){a(this).bind("textchange",a.event.special.hastext.handler)},teardown:function(){a(this).unbind("textchange",a.event.special.hastext.handler)},handler:function(c,b){b===""&&b!==a(this).val()&&a(this).trigger("hastext")}};a.event.special.notext={setup:function(){a(this).bind("textchange",
 a.event.special.notext.handler)},teardown:function(){a(this).unbind("textchange",a.event.special.notext.handler)},handler:function(c,b){a(this).val()===""&&a(this).val()!==b&&a(this).trigger("notext")}}})(jQuery);

 // PrettyNumber
(function($) {
	$.fn.prettynumber = function(options) {
		var opts = $.extend({}, $.fn.prettynumber.defaults, options);
		return this.each(function() {
			$this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			var str = $this.html();
			$this.html($this.html().toString().replace(new RegExp("(^\\d{"+($this.html().toString().length%3||-1)+"})(?=\\d{3})"),"$1"+o.delimiter).replace(/(\d{3})(?=\d)/g,"$1"+o.delimiter));
		});
	};
	$.fn.prettynumber.defaults = {
		delimiter       : ','	
	};
})(jQuery);

/*!
 * ScrewDefaultButtons! v1.2.3
 * http://screwdefaultbuttons.com/
 *
 * Licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License  
 * http://creativecommons.org/licenses/by-sa/3.0/
 *
 * by Matt Solano 
 * http://mattsolano.com
 *
 * Date: Fri September 2 2011
 *
 */		
(function(a){a.fn.screwDefaultButtons=function(b){b=a.extend(a.fn.screwDefaultButtons.defaults,b);var c=b.checked;var d=b.unchecked;var e=b.disabled;var f=b.disabledChecked;var g=b.selectAll;var h=b.width;var i=b.height;var j=c.slice(4,-1);var k=d.slice(4,-1);a("body").append('<img class="preloadCheck" src="'+j+'" width="0" height="0" />');a("body").append('<img class="preloadUnCheck" src="'+k+'" width="0" height="0"  />');a(".preloadCheck").fadeOut(0);a(".preloadUnCheck").fadeOut(0);if(a(this).is(":radio")){var l=a(this);a(l).wrap('<div class="styledRadio" ></div>').hide();a(".styledRadio").css({backgroundImage:d,width:h,height:i});a(l).filter(":checked").parent().addClass("checked").css({"background-image":c});if(e!==false||f!==false){a(l).filter(":disabled").each(function(){if(a(this).is(":checked")){a(this).parent().addClass("disabled").css({"background-image":f})}else{a(this).parent().addClass("disabled").css({"background-image":e})}})}a(l).each(function(){var b=a(this).attr("class");var c=a(this).attr("onclick");a(this).parent().addClass(b);a(this).parent().attr("onclick",c)});a(".styledRadio").click(function(){if(!a(this).hasClass("disabled")){thisCheckName=a(this).find("input:radio").attr("name");if(!a(this).hasClass("checked")){a(".selected").removeClass("selected");a(this).addClass("checked").addClass("selected").css({backgroundImage:c}).find("input:radio").attr("checked","checked").trigger("change");a(".styledRadio").each(function(){otherCheckName=a(this).find("input:radio").attr("name");if(otherCheckName==thisCheckName){if(!a(this).hasClass("selected")){if(a(this).hasClass("disabled")){a(this).removeClass("checked").css({backgroundImage:e})}else{a(this).removeClass("checked").css({backgroundImage:d})}}}})}}});a("label").click(function(){var b=a(this).attr("for");var f=a("input:radio").filter("#"+b);if(!a(f).is(":disabled")){var g=f.attr("name");if(!f.parent().hasClass("checked")){a(".selected").removeClass("selected");f.attr("checked","checked").trigger("change");f.parent().addClass("checked").addClass("selected").css({backgroundImage:c});a(".styledRadio").each(function(){otherCheckName=a(this).find("input:radio").attr("name");if(otherCheckName==g){if(!a(this).hasClass("selected")){if(a(this).hasClass("disabled")){a(this).removeClass("checked").css({backgroundImage:e})}else{a(this).removeClass("checked").css({backgroundImage:d})}}}})}}})}else if(a(this).is(":checkbox")){var m=a(this);a(m).wrap('<div class="styledCheckbox" ></div').hide();a(".styledCheckbox").css({backgroundImage:d,width:h,height:i});a(m).filter(":checked").parent().addClass("checked").css({"background-image":c});if(e!==false||f!==false){a(m).filter(":disabled").each(function(){if(a(this).is(":checked")){a(this).parent().addClass("disabled").css({"background-image":f})}else{a(this).parent().addClass("disabled").css({"background-image":e})}})}a(m).each(function(){var b=a(this).attr("class");var c=a(this).attr("onclick");a(this).parent().addClass(b);a(this).parent().attr("onclick",c)});a(".styledCheckbox").click(function(){if(!a(this).hasClass("disabled")){if(!a(this).hasClass("checked")){a(this).addClass("checked").css({"background-image":c}).find("input:checkbox").attr("checked","checked").trigger("change")}else{a(this).removeClass("checked").css({"background-image":d}).find("input:checkbox").removeAttr("checked","checked").trigger("change");a(g).removeAttr("checked","checked").parent(".styledCheckbox").removeClass("checked").css({"background-image":d})}if(g!=null){if(a(this).find("input:checkbox").is(g)){if(a(this).hasClass("checked")){a(m).each(function(){a(this).attr("checked","checked").trigger("change").parent(".styledCheckbox").addClass("checked").css({"background-image":c})})}else{a(m).each(function(){a(this).removeAttr("checked","checked").trigger("change").parent(".styledCheckbox").removeClass("checked").css({"background-image":d})})}}}}});a("label").click(function(){var b=a(this).attr("for");var e=a("input:checkbox").filter("#"+b);if(!e.parent().hasClass("checked")){if(a.browser.msie){if(a.browser.version==7||a.browser.version==8){e.attr("checked","checked").trigger("change").parent(".styledCheckbox").addClass("checked").css({"background-image":c});if(e.is(g)){a(m).each(function(){a(this).attr("checked","checked").trigger("change").parent(".styledCheckbox").addClass("checked").css({"background-image":c})})}}}}else if(e.parent().hasClass("checked")){if(a.browser.msie){if(a.browser.version==7||a.browser.version==8){e.removeAttr("checked","checked").trigger("change").parent(".styledCheckbox").removeClass("checked").css({"background-image":d});a(g).removeAttr("checked","checked").trigger("change").parent(".styledCheckbox").removeClass("checked").css({"background-image":d})}}}})}a(".styledRadio").css({cursor:"pointer","background-repeat":"no-repeat"});a(".styledCheckbox").css({cursor:"pointer","background-repeat":"no-repeat"})};a.fn.screwDefaultButtons.defaults={checked:"url(images/radio_Checked.jpg)",unchecked:"url(images/radio_Unchecked.jpg)",disabled:false,disabledChecked:false,selectAll:null,width:20,height:20}})(jQuery)