define(['jquery', 'backbone', 'appConfig', 'models/userModel'], function($, Backbone, AppConfig, userModel) {
    var userCollection = Backbone.Collection.extend({
        model: userModel,
        url: AppConfig.UserListApiUrl,
        parse:function(response){
            return response;
        },
       /* fetch:function(){
            
        }*/
    });
    return userCollection;
});


