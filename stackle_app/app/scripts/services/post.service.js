(function () {
    'use strict';

    angular.module('stackleAppApp')
        .service('postService', ['$http', postService]);

    function postService($http) {
        var server = 'http://localhost:8080/';

        var getAllPosts = function (callback) {
            var apiurl = server + 'api/posts';

            $http.get(apiurl).then(function (response) {
                callback(response.data);
            })
        }

        var getPost = function (postid, callback) {
            var apiUrl = server + 'api/post/' + postid;

            $http.get(apiUrl).then(function(response){
                callback(response.data);
            });
        }

        return {
            getAllPosts: getAllPosts,
            getPost : getPost
        }
    }

})();