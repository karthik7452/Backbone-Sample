/* 
 * Application Routers 
 */

define(['jquery', 'backbone', 'appConfig','views/userView'], function($, Backbone, AppConfig,userView) {

    var ApplicationRouters = Backbone.Router.extend({
        routes: {
            '': 'userDetails',
            'main': 'main'
        },
        userDetails: function() {
            var user = new userView();
            console.log('user view load');
        },
        main: function() {
            console.log('main view load');
        }
    });
    return new ApplicationRouters();
});
