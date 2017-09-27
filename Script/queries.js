// $http({
//     method: 'GET',
//     url: '/entry'
// }).then(function (success) {
//     console.log("I got the data I requested");
//     $scope.data = success.data;
//     $scope.contact = null;
// }, function (error) {
//     console.log("Error");
// });
//
//
// $scope.addInformation = function () {
//     if($scope.data.length) {
//         $scope.contact.nameUser = $scope.data[0].nameUser;
//         $scope.contact.city = $scope.data[0].city;
//         $scope.contact.country = $scope.data[0].country;
//     } else {
//         $scope.contact.nameUser = 'User';
//         $scope.contact.city = 'Paris';
//         $scope.contact.country = 'French';
//     }
//
//     const dateTime = new Date();
//
//     const options = {
//         era: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         weekday: 'long',
//         timezone: 'UTC',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     };
//
//     $scope.contact.date = dateTime.toLocaleString("ru", options);
//
//     $scope.contact.commentCounter = '0';
//
//     $http.post('/entry', $scope.contact);
// };
//
// $scope.remove = function(id) {
//     console.log(id);
//     $http.delete('/entry/' + id);
// };
//
// $scope.edit = function() {
//     console.log($scope.contact);
//     $http.get('/entry');
// };
//
// $scope.update = function () {
//     for(let i = 0; i < $scope.data.length; i++) {
//         console.log($scope.contact.nameUser);
//         $scope.data[i].nameUser = $scope.contact.nameUser;
//         $scope.data[i].city = $scope.contact.city;
//         $scope.data[i].country = $scope.contact.country;
//     }
//
//     console.log($scope.contact);
//     $http.put('/entry', $scope.contact);
// };
