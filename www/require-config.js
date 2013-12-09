var require = {
	baseUrl: "/app",
	paths: {
		styles: "styles",
		text: "../libs/requirejs/plugins/text",
		i18n: "../libs/requirejs/plugins/i18n",
		domReady: "../libs/requirejs/plugins/domReady",
		bootstrap: "../libs/bootstrap3/js/bootstrap",
		handlebars: "../libs/handlebars-v1.1.2",
		jquery: "../libs/jquery-1.10.2",
		underscore: "../libs/lodash.compat",
		backbone: "../libs/backbone-1.1.0",
		"require-css": "../libs/requirejs/plugins/require-css/css",
		"jquery.dataTables": "../libs/jquery.dataTables.min",
		
		// core: "app/core",
		// login: "app/login",
		// category: "app/category",
		// main: "app/main",
		// member: "app/member",
		// order: "app/order",
		// store: "app/store"
	},
	
	map: {
		"*": { css: "require-css" }
	},
	
	shim: {
		jquery: {
			exports: "jQuery"
		},
		
		underscore: {
			exports: "_"
		},
		
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		
		bootstrap: {
			deps: ["jquery"]
		},
		
		handlebars: {
			exports: "Handlebars"
		},
		
		"jquery.dataTables": {
			deps: ["jquery"]
		}
	}
};