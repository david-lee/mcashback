define([
	"underscore",
	"core/baseView",
	"text!login/template/loginTemplate.html!strip",
    "i18n!core/nls/mcashback-nls",
	
    "bootstrap"

], 
function(_, BaseView, template, locale) {
	"use strict";
	
	return BaseView.extend({
		events: {
			"click #login-btn": function() { alert('login...'); }
		},

        initialize: function (options) {
            BaseView.prototype.initialize.call(this, options, template, locale);
        }
		
	});
});
