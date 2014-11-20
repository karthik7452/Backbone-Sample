define(['jquery', 'backbone', 'appConfig', "text!tmpl/user_tmpl.html","collections/userCollection"], function($, Backbone, AppConfig, userTmpl,userCollection) {
    var userView = Backbone.View.extend({
        el: "#page-container",
        initialize: function() {
            this.render();
        },
        render: function() {
            console.log(this.el); // without jquery object 
            console.log(this.$el); // with jquery object 
            var userData = new userCollection();
            var userData = userData.fetch();
            console.log(userData)
            var users = [
                {name: "karthik", department: "Js Developer"},
                {name: "Reddy", department: "JD"}
            ];
            this.$el.html(_.template(userTmpl, {userData: users}));
        },
        sample: function() {
            console.log(' main view sample');
        }
    });
    return userView;
});