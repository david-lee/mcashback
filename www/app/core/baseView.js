
define([
	"backbone",
	"handlebars",
	"underscore"
],
function(Backbone, Handlebars, _) {
	"use strict";
	
	return Backbone.View.extend({
		_compiledTemplate: "",
		_locale: "",
		
		initialize: function(options, template, locale) {
			this._compiledTemplate = Handlebars.compile(template);
			this._locale = locale;
		},
		
		// TODO add _beforeRender and _afterRender: use wrapper, events/callback or deferred
		// render: function() {
// 			
		// },
		
		remove: function() {
			this.trigger('view:removed');
			return Backbone.View.prototype.remove.call(this);
		},
		
		getViewModel: function() {
			
		}
	});
});
