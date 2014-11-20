define([
    'backbone',
    'jquery',
    'routers/routers',
],
        function(Backbone, $, AppRouter) {
            var initialize = function(options) {
                try {
                    historyStart = Backbone.history.start({root: "index.html"}) //pushState: true,
                    console.log(historyStart);
                } catch (e) {
                    console.log("Backbone.history.start error: " + e + "\n" + e.stack);
                }
            }
            return {
                initialize: initialize
            };
        });