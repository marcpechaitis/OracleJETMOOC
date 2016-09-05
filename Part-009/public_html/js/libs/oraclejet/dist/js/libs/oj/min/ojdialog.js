/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore","jqueryui-amd/draggable","jqueryui-amd/mouse"],function(a,f){(function(){a.ya("oj.ojResizable",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,resize:null,start:null,
stop:null},QK:function(a){return parseInt(a,10)||0},Ke:function(a){return!isNaN(parseInt(a,10))},QX:function(a,d){if("hidden"===f(a).css("overflow"))return!1;var c=d&&"left"===d?"scrollLeft":"scrollTop",e=!1;if(0<a[c])return!0;a[c]=1;e=0<a[c];a[c]=0;return e},_ComponentCreate:function(){this._super();var a,d,c,e,g,h=this;a=this.options;d=this.element.mouse.bind(this.element);d();this.Jm=d("instance");this.Jm._mouseCapture=function(a){return h.xia(a)};this.Jm._mouseStart=function(a){return h.Aia(a)};
this.Jm._mouseDrag=function(a){return h.yia(a)};this.Jm._mouseStop=function(a){return h.sx(a)};this.element.addClass("oj-resizable");f.extend(this,{GE:this.element,PC:[],Bk:null});this.handles=a.handles||(f(".oj-resizable-handle",this.element).length?{Psa:".oj-resizable-n",Dsa:".oj-resizable-e",Ysa:".oj-resizable-s",Xf:".oj-resizable-w",$sa:".oj-resizable-se",bta:".oj-resizable-sw",Qsa:".oj-resizable-ne",Ssa:".oj-resizable-nw"}:"e,s,se");if(this.handles.constructor===String)for("all"===this.handles&&
(this.handles="n,e,s,w,se,sw,ne,nw"),a=this.handles.split(","),this.handles={},d=0;d<a.length;d++)c=f.trim(a[d]),g="oj-resizable-"+c,e=f("\x3cdiv class\x3d'oj-resizable-handle "+g+"'\x3e\x3c/div\x3e"),this.handles[c]=".oj-resizable-"+c,this.element.append(e);this.Bka=function(){for(var a in this.handles)this.handles[a].constructor===String&&(this.handles[a]=this.element.children(this.handles[a]).first().show())};this.Bka();this.zga=f(".oj-resizable-handle",this.element);this.zga.mouseover(function(){h.q5||
(this.className&&(e=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=e&&e[1]?e[1]:"se")});this.Jm._mouseInit()},_destroy:function(){this.Jm&&this.Jm._mouseDestroy();try{this.Jm.destroy(),this.Jm=null}catch(a){}f(this.GE).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();return this},xia:function(a){var d,c,e=!1;for(d in this.handles)if(c=f(this.handles[d])[0],
c===a.target||f.contains(c,a.target))e=!0;return!this.options.disabled&&e},Aia:function(a){var d,c,e;e=this.options;d=this.element.position();var g=this.element;this.q5=!0;/absolute/.test(g.css("position"))?g.css({position:"absolute",top:g.css("top"),left:g.css("left")}):g.is(".oj-draggable")&&g.css({position:"absolute",top:d.top,left:d.left});this.Cka();d=this.QK(this.helper.css("left"));c=this.QK(this.helper.css("top"));e.containment&&(d+=f(e.containment).scrollLeft()||0,c+=f(e.containment).scrollTop()||
0);this.offset=this.helper.offset();this.position={left:d,top:c};this.size={width:g.width(),height:g.height()};this.Vj={width:g.width(),height:g.height()};this.cp={left:d,top:c};this.SE={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()};this.dqa={left:a.pageX,top:a.pageY};this.Qk=this.Vj.width/this.Vj.height||1;e=f(".oj-resizable-"+this.axis).css("cursor");f("body").css("cursor","auto"===e?this.axis+"-resize":e);g.addClass("oj-resizable-resizing");this.jL("start",a);this.W$(a);this.rba(a);
return!0},yia:function(a){var d,c=this.helper,e={},g=this.dqa;d=a.pageX-g.left||0;var g=a.pageY-g.top||0,h=this.Eh[this.axis];this.Uu={top:this.position.top,left:this.position.left};this.Vu={width:this.size.width,height:this.size.height};if(!h)return!1;d=h.apply(this,[a,d,g]);this.Yma(a.shiftKey);a.shiftKey&&(d=this.Xma(d,a));d=this.Pka(d,a);this.Qma(d);this.jL("resize",a);this.V$(a,this.ui());this.qba(a,this.ui());this.position.top!==this.Uu.top&&(e.top=this.position.top+"px");this.position.left!==
this.Uu.left&&(e.left=this.position.left+"px");this.size.width!==this.Vu.width&&(e.width=this.size.width+"px");this.size.height!==this.Vu.height&&(e.height=this.size.height+"px");c.css(e);!this.Bk&&this.PC.length&&this.yja();f.isEmptyObject(e)||this._trigger("resize",a,this.ui());return!1},sx:function(a){this.q5=!1;f("body").css("cursor","auto");this.element.removeClass("oj-resizable-resizing");this.jL("stop",a);this.X$(a);this.sba(a);return!1},Yma:function(a){var d,c,e,f;f=this.options;f={minWidth:this.Ke(f.minWidth)?
f.minWidth:0,maxWidth:this.Ke(f.maxWidth)?f.maxWidth:Infinity,minHeight:this.Ke(f.minHeight)?f.minHeight:0,maxHeight:this.Ke(f.maxHeight)?f.maxHeight:Infinity};a&&(a=f.minHeight*this.Qk,c=f.minWidth/this.Qk,d=f.maxHeight*this.Qk,e=f.maxWidth/this.Qk,a>f.minWidth&&(f.minWidth=a),c>f.minHeight&&(f.minHeight=c),d<f.maxWidth&&(f.maxWidth=d),e<f.maxHeight&&(f.maxHeight=e));this.ana=f},Qma:function(a){this.offset=this.helper.offset();this.Ke(a.left)&&(this.position.left=a.left);this.Ke(a.top)&&(this.position.top=
a.top);this.Ke(a.height)&&(this.size.height=a.height);this.Ke(a.width)&&(this.size.width=a.width)},Xma:function(a){var d=this.position,c=this.size,e=this.axis;this.Ke(a.height)?a.width=a.height*this.Qk:this.Ke(a.width)&&(a.height=a.width/this.Qk);"sw"===e&&(a.left=d.left+(c.width-a.width),a.top=null);"nw"===e&&(a.top=d.top+(c.height-a.height),a.left=d.left+(c.width-a.width));return a},Pka:function(a){var d=this.ana,c=this.axis,e=this.Ke(a.width)&&d.maxWidth&&d.maxWidth<a.width,f=this.Ke(a.height)&&
d.maxHeight&&d.maxHeight<a.height,h=this.Ke(a.width)&&d.minWidth&&d.minWidth>a.width,k=this.Ke(a.height)&&d.minHeight&&d.minHeight>a.height,l=this.cp.left+this.Vj.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(c),c=/nw|ne|n/.test(c);h&&(a.width=d.minWidth);k&&(a.height=d.minHeight);e&&(a.width=d.maxWidth);f&&(a.height=d.maxHeight);h&&n&&(a.left=l-d.minWidth);e&&n&&(a.left=l-d.maxWidth);k&&c&&(a.top=m-d.minHeight);f&&c&&(a.top=m-d.maxHeight);a.width||a.height||a.left||!a.top?a.width||
a.height||a.top||!a.left||(a.left=null):a.top=null;return a},yja:function(){if(this.PC.length){var a,d,c,e,f,h=this.helper||this.element;for(a=0;a<this.PC.length;a++){f=this.PC[a];if(!this.xu)for(this.xu=[],c=[f.css("borderTopWidth"),f.css("borderRightWidth"),f.css("borderBottomWidth"),f.css("borderLeftWidth")],e=[f.css("paddingTop"),f.css("paddingRight"),f.css("paddingBottom"),f.css("paddingLeft")],d=0;d<c.length;d++)this.xu[d]=(parseInt(c[d],10)||0)+(parseInt(e[d],10)||0);f.css({height:h.height()-
this.xu[0]-this.xu[2]||0,width:h.width()-this.xu[1]-this.xu[3]||0})}}},Cka:function(){this.element.offset();this.helper=this.element},Eh:{e:function(a,d){return{width:this.Vj.width+d}},w:function(a,d){return{left:this.cp.left+d,width:this.Vj.width-d}},n:function(a,d,c){return{top:this.cp.top+c,height:this.Vj.height-c}},s:function(a,d,c){return{height:this.Vj.height+c}},se:function(a,d,c){return f.extend(this.Eh.s.apply(this,arguments),this.Eh.e.apply(this,[a,d,c]))},sw:function(a,d,c){return f.extend(this.Eh.s.apply(this,
arguments),this.Eh.w.apply(this,[a,d,c]))},ne:function(a,d,c){return f.extend(this.Eh.n.apply(this,arguments),this.Eh.e.apply(this,[a,d,c]))},nw:function(a,d,c){return f.extend(this.Eh.n.apply(this,arguments),this.Eh.w.apply(this,[a,d,c]))}},jL:function(a,d){"resize"!==a&&this._trigger(a,d,this.ui())},W$:function(){function a(b){f(b).each(function(){var a=f(this);a.data("oj-resizable-alsoresize",{width:parseInt(a.width(),10),height:parseInt(a.height(),10),left:parseInt(a.css("left"),10),top:parseInt(a.css("top"),
10)})})}var d=this.options;"object"!==typeof d.alsoResize||d.alsoResize.parentNode?a(d.alsoResize):d.alsoResize.length?(d.alsoResize=d.alsoResize[0],a(d.alsoResize)):f.each(d.alsoResize,function(c){a(c)})},V$:function(a,d){function c(a,b){f(a).each(function(){var a=f(this),c=f(this).data("oj-resizable-alsoresize"),e={};f.each(b&&b.length?b:a.parents(d.GE[0]).length?["width","height"]:["width","height","top","left"],function(a,b){var d=(c[b]||0)+(k[b]||0);d&&0<=d&&(e[b]=d||null)});a.css(e)})}var e=
this.options,g=this.Vj,h=this.cp,k={height:this.size.height-g.height||0,width:this.size.width-g.width||0,top:this.position.top-h.top||0,left:this.position.left-h.left||0};"object"!==typeof e.alsoResize||e.alsoResize.nodeType?c(e.alsoResize,null):f.each(e.alsoResize,function(a,b){c(a,b)})},X$:function(){f(this).removeData("oj-resizable-alsoresize")},rba:function(){var a,d,c,e,g,h=this,k=h.element;c=h.options.containment;if(k=c instanceof f?c.get(0):/parent/.test(c)?k.parent().get(0):c)h.SD=f(k),/document/.test(c)||
c===document?(h.TD={left:0,top:0},h.o2={left:0,top:0},h.dp={element:f(document),left:0,top:0,width:f(document).width(),height:f(document).height()||document.body.parentNode.scrollHeight}):(a=f(k),d=[],f(["Top","Right","Left","Bottom"]).each(function(c,e){d[c]=h.QK(a.css("padding"+e))}),h.TD=a.offset(),h.o2=a.position(),h.p2={height:a.innerHeight()-d[3],width:a.innerWidth()-d[1]},c=h.TD,e=h.p2.height,g=h.p2.width,g=h.QX(k,"left")?k.scrollWidth:g,e=h.QX(k)?k.scrollHeight:e,h.dp={element:k,left:c.left,
top:c.top,width:g,height:e})},qba:function(a,d){var c,e,f,h;c=this.options;e=this.TD;h=this.position;var k=a.shiftKey;f={top:0,left:0};var l=this.SD,m=!0;l[0]!==document&&/static/.test(l.css("position"))&&(f=e);h.left<(this.Bk?e.left:0)&&(this.size.width+=this.Bk?this.position.left-e.left:this.position.left-f.left,k&&(this.size.height=this.size.width/this.Qk,m=!1),this.position.left=c.helper?e.left:0);h.top<(this.Bk?e.top:0)&&(this.size.height+=this.Bk?this.position.top-e.top:this.position.top,k&&
(this.size.width=this.size.height*this.Qk,m=!1),this.position.top=this.Bk?e.top:0);this.offset.left=this.dp.left+this.position.left;this.offset.top=this.dp.top+this.position.top;c=Math.abs((this.Bk?this.offset.left-f.left:this.offset.left-e.left)+this.SE.width);e=Math.abs((this.Bk?this.offset.top-f.top:this.offset.top-e.top)+this.SE.height);f=this.SD.get(0)===this.element.parent().get(0);h=/relative|absolute/.test(this.SD.css("position"));f&&h&&(c-=Math.abs(this.dp.left));c+this.size.width>=this.dp.width&&
(this.size.width=this.dp.width-c,k&&(this.size.height=this.size.width/this.Qk,m=!1));e+this.size.height>=this.dp.height&&(this.size.height=this.dp.height-e,k&&(this.size.width=this.size.height*this.Qk,m=!1));m||(this.position.left=d.Uu.left,this.position.top=d.Uu.top,this.size.width=d.Vu.width,this.size.height=d.Vu.height)},sba:function(){var a=this.options,d=this.TD,c=this.o2,e=this.SD,g=f(this.helper),h=g.offset(),k=g.outerWidth()-this.SE.width,g=g.outerHeight()-this.SE.height;this.Bk&&!a.animate&&
/relative/.test(e.css("position"))&&f(this).css({left:h.left-c.left-d.left,width:k,height:g});this.Bk&&!a.animate&&/static/.test(e.css("position"))&&f(this).css({left:h.left-c.left-d.left,width:k,height:g})},ui:function(){return{GE:this.GE,element:this.element,helper:this.helper,position:this.position,size:this.size,Vj:this.Vj,cp:this.cp,Vu:this.Vu,Uu:this.Uu}}})})();(function(){a.ya("oj.ojDialog",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",
initialVisibility:"hide",modality:"modal",position:{my:"center",at:"center",of:window,collision:"fit",eta:function(a){var d=f(this).css(a).offset().top;0>d&&f(this).css("top",a.top-d)}},resizeBehavior:"resizable",role:"dialog",title:null,beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_ComponentCreate:function(){this._super();this.cqa={display:this.element[0].style.display,width:this.element[0].style.width,height:this.element[0].style.height};
this.cp={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.QO=this.element.attr("title");this.options.title=this.options.title||this.QO;this.ica();this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.Qb);this.uz=!1;if(this.element.find(".oj-dialog").length){var a=this;this.element.find(".oj-dialog-header").each(function(d,c){var e=f(c);if(!e.closest(".oj-dialog-body").length)return a.Eo=e,a.uz=!0,
!1})}else this.Eo=this.element.find(".oj-dialog-header"),this.Eo.length&&(this.uz=!0);this.uz?(this.Yba(this.Eo),this.Eo.prependTo(this.Qb),"icon"===this.options.cancelBehavior&&(this.YA(this.Eo),this.oy=this.Eo.find(".oj-dialog-title"),this.oy.length&&this.oy.insertAfter(this.lp))):this.hca();this.Wm=this.element.children(".oj-dialog-footer");this.Xba(this.Wm);this.Wm.length&&(this.Wm.addClass("oj-helper-clearfix"),this.Wm.appendTo(this.Qb));"title-bar"===this.options.dragAffordance&&f.fn.draggable&&
this.Rt();this.io=!1},LQ:function(){"show"===this.options.initialVisibility&&this.open()},_destroy:function(){this.sca&&window.clearTimeout(this.sca);this.isOpen()&&this.aq();this.im&&(this.im("instance")&&this.im("destroy"),this.im=null);this.Wm.length&&(this.Wm.removeClass("oj-helper-clearfix"),f("#"+this.EZ).replaceWith(this.Wm));this.gB();if(this.uz){var a=this.Qb.find(".oj-dialog-header");a&&f("#"+this.FZ).replaceWith(a)}this.i6&&(this.i6.remove(),this.i6=null);this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.cqa);
this.Qb&&this.Qb.stop(!0,!0);this.element.unwrap();this.QO&&this.element.attr("title",this.QO);this.Xm&&(this.Xm.remove(),this.Xm=null);delete this.Aj;delete this.io;this._super()},widget:function(){return this.Qb},disable:f.noop,enable:f.noop,close:function(b){if(this.isOpen()&&(!1!==this._trigger("beforeClose",b)||this.bx)){this.io=!1;this.vda=null;this.opener.filter(":focusable").focus().length||f(this.document[0].activeElement).blur();var d={};d[a.N.Ra.lf]=this.Qb;a.N.re().close(d);this._trigger("close",
b)}},isOpen:function(){return this.io},open:function(b){if(!1!==this._trigger("beforeOpen",b)){if(!this.isOpen()){this.io=!0;this.opener=f(this.document[0].activeElement);"resizable"===this.options.resizeBehavior&&this.fZ();b="rtl"===this.dc();b=a.oc.Hg(this.options.position,b);var d={};d[a.N.Ra.lf]=this.Qb;d[a.N.Ra.mv]=this.opener;d[a.N.Ra.qv]=b;d[a.N.Ra.bi]=this.options.modality;d[a.N.Ra.qp]=this.ut();d[a.N.Ra.gn]="oj-dialog-layer";d[a.N.Ra.en]=a.N.en.KF;a.N.re().open(d);this._trigger("open")}this.TV()}},
refresh:function(){this._super()},TV:function(){var b=this.vda;b&&0<b.length&&a.v.To(this.Qb[0],b[0])||(b||(b=this.element.find("[autofocus]")),b.length||(b=this.element.find(":tabbable")),b.length||this.Wm.length&&(b=this.Wm.find(":tabbable")),b.length||this.uP&&(b=this.uP.filter(":tabbable")),b.length||(b=this.Qb),b.eq(0).focus(),this._trigger("focus"))},_keepFocus:function(a){a.preventDefault();a=this.document[0].activeElement;this.Qb[0]===a||f.contains(this.Qb[0],a)||this.TV()},Ke:function(a){return!isNaN(parseInt(a,
10))},ica:function(){this.JY=!1;this.element.uniqueId();this.zI=this.element.attr("id");this.gna="ojDialogWrapper-"+this.zI;this.Qb=f("\x3cdiv\x3e");this.Qb.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1,role:this.options.role,id:this.gna});this.Qb.insertBefore(this.element);this._on(this.Qb,{keyup:function(){},keydown:function(a){if("none"!=this.options.cancelBehavior&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===f.ui.keyCode.ESCAPE)a.preventDefault(),a.stopImmediatePropagation(),
this.close(a);else if(a.keyCode===f.ui.keyCode.TAB&&"modeless"!==this.options.modality){var d=this.Qb.find(":tabbable"),c=d.filter(":first"),e=d.filter(":last");a.shiftKey?a.shiftKey&&(a.target===c[0]||a.target===this.Qb[0]?(e.focus(),a.preventDefault()):(c=d.index(document.activeElement),1==c&&d[0]&&(d[0].focus(),a.preventDefault()))):a.target===e[0]||a.target===this.Qb[0]?(c.focus(),a.preventDefault()):(c=d.index(document.activeElement),0==c&&d[1]&&(d[1].focus(),a.preventDefault()))}}});this.element.find("[aria-describedby]").length||
this.Qb.attr({"aria-describedby":this.element.uniqueId().attr("id")})},gB:function(){this.lp&&(this.lp.remove(),this.uP=this.lp=null)},YA:function(a){this.lp=f("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex","1").attr("aria-label","close").attr("role","button").appendTo(a);this.uP=f("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt","close icon").prependTo(this.lp);this._on(this.lp,{click:function(a){a.preventDefault();a.stopImmediatePropagation();
this.close(a)},mousedown:function(a){f(a.currentTarget).addClass("oj-active")},mouseup:function(a){f(a.currentTarget).removeClass("oj-active")},mouseenter:function(a){f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){a=a.currentTarget;f(a).removeClass("oj-hover");f(a).removeClass("oj-active")},keyup:function(a){if(a.keyCode&&a.keyCode===f.ui.keyCode.SPACE||a.keyCode===f.ui.keyCode.ENTER)a.preventDefault(),a.stopImmediatePropagation(),this.close(a)}})},hca:function(){var a;this.Xm=f("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.Qb);
this._on(this.Xm,{mousedown:function(a){f(a.target).closest(".oj-dialog-close-icon")||this.Qb.focus()}});"icon"===this.options.cancelBehavior&&this.YA(this.Xm);a=f("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.Xm);this.r1(a);this.Qb.attr({"aria-labelledby":a.attr("id")})},r1:function(a){this.options.title||a.html("\x26#160;");a.text(this.options.title)},Rt:function(){function a(b){return{position:b.position,offset:b.offset}}var d=this,c=this.options;this.Qb.draggable({xsa:!1,
cancel:".oj-dialog-content, .oj-dialog-header-close",handle:".oj-dialog-header",containment:"document",start:function(c,g){f(this).addClass("oj-dialog-dragging");d.BT();d._trigger("dragStart",c,a(g))},drag:function(c,f){d._trigger("drag",c,a(f))},stop:function(e,g){c.position=[g.position.left-d.document.scrollLeft(),g.position.top-d.document.scrollTop()];f(this).removeClass("oj-dialog-dragging");d.z1();d._trigger("dragStop",e,a(g))}});this.Qb.addClass("oj-draggable")},fZ:function(){function a(b){return{originalPosition:b.cp,
originalSize:b.Vj,position:b.position,size:b.size}}var d=this;this.Qb.css("position");this.im=this.Qb.ojResizable.bind(this.Qb);this.im({cancel:".oj-dialog-content",containment:"document",handles:"n,e,s,w,se,sw,ne,nw",start:function(c,e){d.JY=!0;f(this).addClass("oj-dialog-resizing");d.BT();d._trigger("resizeStart",c,a(e))},resize:function(c,e){d._trigger("resize",c,a(e))},stop:function(c,e){d.JY=!1;f(this).removeClass("oj-dialog-resizing");d.z1();d._trigger("resizeStop",c,a(e))}})},bL:function(){var b=
"rtl"===this.dc(),b=a.oc.Hg(this.options.position,b);this.Qb.position(b);this.GZ()},GZ:function(){a.N.re().tP(this.Qb,a.N.Bc.jn)},_setOption:function(b,d,c){var e;e=this.Qb;if("disabled"!==b)switch(this._super(b,d,c),b){case "dragAffordance":(b=e.hasClass("oj-draggable"))&&"none"===d&&(e.draggable("destroy"),this.Qb.removeClass("oj-draggable"));b||"title-bar"!==d||this.Rt();break;case "position":this.bL();break;case "resizeBehavior":e=!1;this.im&&(e=!0);e&&"resizable"!=d&&(this.im("instance")&&this.im("destroy"),
this.im=null);e||"resizable"!==d||this.fZ();break;case "title":this.r1(this.Xm.find(".oj-dialog-title"));break;case "role":e.attr("role",d);break;case "modality":this.isOpen()&&(e={},e[a.N.Ra.lf]=this.Qb,e[a.N.Ra.bi]=d,a.N.re().yu(e));break;case "cancelBehavior":"none"===d||"escape"===d?this.gB():"icon"===d&&(this.uz?(this.gB(),this.YA(this.Eo),this.oy=this.Eo.find(".oj-dialog-title"),this.oy.length&&this.oy.insertAfter(this.lp)):(this.gB(),this.YA(this.Xm),this.O5=this.Xm.find(".oj-dialog-title"),
this.O5.length&&this.O5.insertAfter(this.lp)))}},BT:function(){this.bO=this.document.find("iframe").map(function(){var a=f(this),d=a.offset();return f("\x3cdiv\x3e").css({width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(d)[0]})},z1:function(){this.bO&&(this.bO.remove(),delete this.bO)},Xba:function(a){this.EZ="ojDialogPlaceHolderFooter-"+this.zI;this.bja=f("\x3cdiv\x3e").hide().attr({id:this.EZ});this.bja.insertBefore(a)},Yba:function(a){this.FZ="ojDialogPlaceHolderHeader-"+
this.zI;this.cja=f("\x3cdiv\x3e").hide().attr({id:this.FZ});this.cja.insertBefore(a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;switch(a){case "oj-dialog-header":case "oj-dialog-body":case "oj-dialog-footer":case "oj-dialog-content":case "oj-dialog-header-close-wrapper":case "oj-resizable-n":case "oj-resizable-e":case "oj-resizable-s":case "oj-resizable-w":case "oj-resizable-se":case "oj-resizable-sw":case "oj-resizable-ne":case "oj-resizable-nw":a="."+
a;if(!this.widget().find(a))break;return this.widget().find(a)[0];case "oj-dialog-close-icon":case "oj-dialog-close":if(!this.widget().find(".oj-dialog-close-icon"))break;return this.widget().find(".oj-dialog-close-icon")[0]}return null},getSubIdByNode:function(a){if(null!=a){a=f(a);if(a.hasClass("oj-dialog-header"))return{subId:"oj-dialog-header"};if(a.hasClass("oj-dialog-footer"))return{subId:"oj-dialog-footer"};if(a.hasClass("oj-dialog-content"))return{subId:"oj-dialog-content"};if(a.hasClass("oj-dialog-header-close-wrapper"))return{subId:"oj-dialog-header-close-wrapper"};
if(a.hasClass("oj-dialog-close-icon"))return{subId:"oj-dialog-close"};if(a.hasClass("oj-resizable-n"))return{subId:"oj-resizable-n"};if(a.hasClass("oj-resizable-e"))return{subId:"oj-resizable-e"};if(a.hasClass("oj-resizable-s"))return{subId:"oj-resizable-s"};if(a.hasClass("oj-resizable-w"))return{subId:"oj-resizable-w"};if(a.hasClass("oj-resizable-se"))return{subId:"oj-resizable-se"};if(a.hasClass("oj-resizable-sw"))return{subId:"oj-resizable-sw"};if(a.hasClass("oj-resizable-ne"))return{subId:"oj-resizable-ne"};
if(a.hasClass("oj-resizable-nw"))return{subId:"oj-resizable-nw"}}return null},Xq:function(){this.element.remove()},ut:function(){if(!this.Aj){var b=this.Aj={};b[a.N.Bc.bs]=f.proxy(this.aq,this);b[a.N.Bc.ds]=f.proxy(this.Xq,this);b[a.N.Bc.jn]=f.proxy(this.GZ,this)}return this.Aj},aq:function(){this.bx=!0;this.close();delete this.bx}})})()});