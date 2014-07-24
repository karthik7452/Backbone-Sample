define([
    'backbone',
    'jquery',
    'routers/routers',
],
        function(Backbone, $, AppRouter) {
            var initialize = function(options) {
                try {
                    historyStart = Backbone.history.start({pushState: true, root: "index.html"})
                    console.log(Backbone.history.fragment);
                } catch (e) {
                    console.log("Backbone.history.start error: " + e + "\n" + e.stack);
                }
            }
            return {
                initialize: initialize
            };
        });