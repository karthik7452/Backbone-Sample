define([
    'backbone',
    'jquery',
    'routers/routers',
],
    function( Backbone, $, AppRouter, AppUtils, Version) {
        var initialize = function(options){
            options || (options = {});
            var histOptions = {root: "index.html"};
            Backbone.history.options = histOptions;
            var historyStart = false;
            try {
                historyStart = Backbone.history.start(histOptions) 
            } catch (e) {
                console.log("Backbone.history.start error: " + e + "\n" + e.stack);
            }
        }
                

        return {
            initialize: initialize
        };
    });