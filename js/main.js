/* 
 * Require JS Main Configuration 
 */

require.config({
    paths: {
        jquery: "libs/jquery-1.8.0.min",
        underscore: "underscore-1.3.3.min",
        backbone: "backbone-0.9.2.min",
        appConfig: "appConfig"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        appConfig: {
            exports: "appConfig"
        }
    }
});
require(['jquery', 'underscore'],
        function($, _) {
            require(['init']);
        }
);
