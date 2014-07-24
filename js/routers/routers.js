/* 
 * Application Routers 
 */

define(['jquery', 'backbone', 'appConfig'], function($, Backbone, AppConfig) {

    var ApplicationRouters = Backbone.Router.extend({
        routes: {
            '': 'index',
            'main': 'main'
        },
        index: function() {
            console.log('index view load');
        },
        main: function() {
            console.log('main view load');
        }
    });
    return new ApplicationRouters();
});
