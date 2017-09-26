(function () {
    'use strict';

    const listOfPublications = angular.module('listOfPublications', []);
    listOfPublications.filter('startFrom', function () {
       return function (input, start) {
           start = +start;
           return input.slice(start);
       } 
    });
    listOfPublications.controller('listOfPublicationsCtrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: '/entry'
        }).then(function (success) {
            console.log("I got the data I requested");
            $scope.data = success.data;
            $scope.contact = null;
        }, function (error) {
            console.log("Error");
        });


        $scope.addInformation = function () {
            if($scope.data.length) {
                $scope.contact.nameUser = $scope.data[0].nameUser;
                $scope.contact.city = $scope.data[0].city;
                $scope.contact.country = $scope.data[0].country;
            } else {
                $scope.contact.nameUser = 'User';
                $scope.contact.city = 'Paris';
                $scope.contact.country = 'French';
            }

            const dateTime = new Date();

            const options = {
                era: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };

            $scope.contact.date = dateTime.toLocaleString("ru", options);

            $scope.contact.commentCounter = '0';

            $http.post('/entry', $scope.contact);
        };

        $scope.remove = function(id) {
            console.log(id);
            $http.delete('/entry/' + id);
        };

        $scope.edit = function() {
            console.log($scope.contact);
            $http.get('/entry');
        };

        $scope.update = function () {
            // for(let i = 0; i < $scope.data.length; i++) {
            //     console.log($scope.contact.nameUser);
            //     $scope.data[i].nameUser = $scope.contact.nameUser;
            //     $scope.data[i].city = $scope.contact.city;
            //     $scope.data[i].country = $scope.contact.country;
            // }

            console.log($scope.contact);
            $http.put('/entry', $scope.contact);
        };




        $scope.currentPage = 0;
        $scope.itemsPerPage = 5;
        $scope.items = [];

        for(let i = 0; i < 25; i++) {
            $scope.items.push('Product ' + 1);
        }

        $scope.firstPage = function () {
            return $scope.currentPage == 0;
        };

        $scope.lastPage = function () {
            let lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
            return $scope.currentPage == lastPageNum;
        };

        $scope.numberOfPages = function () {
            return Math.ceil($scope.items.length / $scope.itemsPerPage);
        };

        $scope.startingItem = function () {
            return $scope.currentPage * $scope.itemsPerPage;
        };

        $scope.pageBack = function () {
            $scope.currentPage = $scope.currentPage - 1;
        };

        $scope.pageForward = function () {
            $scope.currentPage = $scope.currentPage + 1;
        };
    });
})();

