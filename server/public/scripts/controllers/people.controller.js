myApp.controller('PeopleController', ['$http', function($http) {
    var vm = this;
    vm.newPerson = {};
    vm.medications = [];
    // get the people data from the server and fill the DOM
    getPeople();

    vm.addPerson = function() {
      console.log('add person', vm.newPerson);
      $http.post('/person', vm.newPerson)
        .then(function(response) {
          console.log('added person', response);
          getPeople();
        });
    }

    vm.deletePerson = function(id) {
      console.log('delete person with id: ', id);
      $http.delete('/person/' + id)
        .then(function(response) {
          getPeople();
        });
    }
    function getPeople() {
      $http.get('/person').then(function(response) {
        console.log(response.data);
        vm.people = response.data;
      });
    }
function addMedication() {
  
}
}]);
