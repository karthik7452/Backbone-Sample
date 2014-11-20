/* 
 * Application Configurations here
 */
define(['jquery', 'backbone'], function() {
    var appConfig = {};
    appConfig.Porotocol = 'http://';
    appConfig.Host = 'localhost';
    appConfig.ApiBasePath = '/backbone_practice/apis/';
    appConfig.RootApiUrl = appConfig.Porotocol + appConfig.Host + appConfig.ApiBasePath;
    appConfig.UserListApiUrl = appConfig.RootApiUrl + 'userService.php';
    return appConfig;
});

