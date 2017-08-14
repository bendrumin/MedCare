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
      successMessage();

    });
  }
  vm.updatePerson = function(patient) {
    console.log('updating person:', patient);
    $http.put('/person', patient)
      .then(function(response) {
        getPeople();
        saveMessage();
      });
  }
  vm.deletePerson = function(id) {
    console.log('delete person with id: ', id);
    $http.delete('/person/' + id)
    .then(function(response) {
      getPeople();
      deleteMessage();
    });
  }
  function successMessage() {
    swal({
      title: "Success!",
      text: "The patient has been added",
      confirmButtonText: "View Patients",
      type: "success"
    }).then(function() {
           window.location.href = "#/info";
       })
  }
  function saveMessage() {
    swal('Great!', 'Your changes have been saved!', 'success')

  }
  function deleteMessage() {
    swal('Deleted','Your patient has been deleted', 'error')
  }
  function getPeople() {
    $http.get('/person').then(function(response) {
      console.log('This is what logs out:', response.data);
      vm.people = response.data;
    });
  }
  vm.addMedication = function(med, dosage, eight, ten, twelve, two, four, six, eightPm, tenPm) {
    var newMed = {
      medication: med,
      dosage: dosage,
      eight: eight,
      ten: ten,
      twelve: twelve,
      two: two,
      four: four,
      six: six,
      eightPm: eightPm,
      tenPm: tenPm
    }
    console.log('button clicked');
    console.log(vm.newPerson.medication);
    vm.allMeds.push(newMed);
    console.log(dosage);
    console.log(vm.allMeds);
  }
}]);
