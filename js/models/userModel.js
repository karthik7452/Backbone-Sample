define(['jquery', 'backbone', 'appConfig'], function($, Backbone, AppConfig) {
    var userModel = Backbone.Model.extend({
        defaults:{
            name: "default Name",
            department:"default department"
        },
        initialize: function(){
            console.log("user model initialize");
        }
    });
   return new userModel();
});


