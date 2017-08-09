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
  vm.addMedication = function(med, dosage) {
    var newMed = {
      medication: med,
      dosage: dosage
    }
    console.log(vm.newPerson.medication);
    vm.allMeds.push(newMed);
    console.log(dosage);
    console.log(vm.allMeds);
  }
  function addHyphen() {
    var t = document.forms['the_form'].elements['the_text'];
      if (t.value.length > 0) {
        t.value = t.value.substring(0,4) + "-" + t.value.substring(4, t.value.length);
      }
}
}]);
