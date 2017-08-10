myApp.controller('PeopleController', ['$http', function($http) {
  var vm = this;
  vm.newPerson = {};
  vm.allMeds = [];
  // vm.addMedication = {};
  // get the people data from the server and fill the DOM
  getPeople();

  vm.addPerson = function(name, phoneNumber, notes) {
    vm.newPerson = {
      name: name,
      phoneNumber: phoneNumber,
      notes: notes,
      allMeds: vm.allMeds
    };
    console.log('data object going to server: ', vm.newPerson);
    $http.post('/person', vm.newPerson)
    .then(function(response) {
      console.log('added person: ', response);
      getPeople();
    });
  }
  vm.updatePerson = function(patient) {
    console.log('updating person:', patient);
    $http.put('/person', patient)
      .then(function(response) {
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
      console.log('This is what logs out:', response.data);
      vm.people = response.data;
    });
  }
  vm.addMedication = function(med, dosage, howOften) {
    var newMed = {
      medication: med,
      dosage: dosage,
      howOften: howOften
    }
    console.log(vm.newPerson.medication);
    vm.allMeds.push(newMed);
    console.log(dosage);
    console.log(vm.allMeds);
  }
}]);
