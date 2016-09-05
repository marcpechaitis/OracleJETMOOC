/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(a,f){(function(){a.ya("oj.ojCheckboxset",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,value:void 0},refresh:function(){this._super();this.Ba()},widget:function(){return this.dra},ae:function(b,c){var e=[],g;this._super(b,c);a.ze.al([{W:"disabled",xc:!0},{W:"title"},{W:"placeholder"},{W:"required",ef:!0,xc:!0}],c,this);this.uh=this.EI();void 0===c.value&&
(g=this.uh.filter(":checked"),0<g.length&&(g.each(function(){e.push(f(this).val())}),this.option("value",e,{_context:{Hc:!0,Wa:!0}})),void 0===this.options.value&&(this.options.value=[]))},_ComponentCreate:function(){this._super();if(this.element.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");this.uh._ojRadioCheckbox();this.dra=this.element.addClass("oj-checkboxset oj-component").attr("role","group").wrapInner("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");
this._on(this.Pl);this.Ba()},BG:function(){this.uh=this.EI();this.uh.filter(".oj-checkbox").each(function(){var a=void 0!==f(this).attr("disabled")?!!f(this).prop("disabled"):!1;f(this)._ojRadioCheckbox("option","disabled",a)});this.uh.not(".oj-checkbox")._ojRadioCheckbox()},Focus:function(){this.$d().first().focus();return!0},EG:function(){},EI:function(){var b=this.element.find("input[type\x3dcheckbox]:first");0===b.length&&a.q.warn("Could not find any input type\x3dcheckbox within this element");
b=b.attr("name");return void 0===b?(b=this.element.find("input[type\x3dcheckbox]"),b.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+b+"]")},uf:function(a,b,e){a=this.element.find("input[type\x3dcheckbox]:tabbable").first();this.wf(b,e,{launcher:a})},_GetMessagingLauncherElement:function(){var b=this.$d(),c=a.Ee.Yk("radioset").renderInputAs;return c&&"html"!==c?this.widget():b},Ba:function(){this.uo(this.options.disabled)},Pl:{change:function(a){this.Uz(a)}},Uz:function(a){var c=
this.kg();this.gc(c,a,b)},kg:function(){return this.vs()},qi:function(a){var b;this.uh._ojRadioCheckbox("option","checked",!1);if(null!=a)for(var e=0;e<a.length;e++)b=a[e],b="[value\x3d'"+b+"']",b=this.uh.filter(b),void 0!==b&&0<b.length&&(b.prop("checked")||b._ojRadioCheckbox("option","checked",!0))},vs:function(){var a=[],b=this.uh.filter(":checked");if(0===b.length)return[];b.each(function(){a.push(f(this).val())});return a},_GetDefaultStyleClass:function(){return"oj-checkboxset"},$d:function(){return this.EI()},
AG:function(){},Iz:function(){return!0},uo:function(a){a=!!a;this.uh.each(function(){f(this).data("oj-_ojRadioCheckbox").Wv(a)});this.uh._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,b,e){this._super(a,b,e);"disabled"===a&&this.uo(b)},getNodeBySubId:function(a){var b=this._super(a);return b||(a=a.subId,"oj-checkboxset-inputs"!==a)?b||null:this.uh.get()},_destroy:function(){var a=this._super(),b=this.element[0].firstChild;this.uh&&this.uh._ojRadioCheckbox("destroy");f(b).contents().unwrap();
return a}});var b={jr:!1}})()});