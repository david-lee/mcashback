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
			
			if(this.model)			 this.setModel(this.model);
			else if(this.collection) this.setCollection(this.collection);
		},
		
		// TODO add _beforeRender and _afterRender: use wrapper, events/callback or deferred
		render: function() {
			this.$el.html(this._compiledTemplate( _.extend({L: this._locale}, this.getViewModel())) );
			
			return this;
		},
		
		remove: function() {
			this.trigger('view:removed');
			
			return Backbone.View.prototype.remove.call(this);
		},
		
		getViewModel: function() {
			if(this.model)				return this.model.toJSON();
			else if(this.collection)	return this.collection.toJSON();
		},
		
		setModel: function(model) {
            this.model = model;
            
            _.isFunction(this._delegateModelEvents) && this._delegateModelEvents();

            return this;			
		},
		
		setCollection: function(collection) {
            this.collection = collection;
            
            _.isFunction(this._delegateCollectionEvents) && this._delegateCollectionEvents();

            return this;
		}
	});
});
