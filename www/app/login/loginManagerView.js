define([
	"login/view/loginView",
	"login/model/loginModel"
], 
function(LoginView, LoginModel) {
	"use strict";
	
	new LoginView({model: new LoginModel}).render().$el.appendTo('#content');
});
