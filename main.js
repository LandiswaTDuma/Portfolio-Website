// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBxO2wpwTpEpMllb12YP2X4W624FhD98W4",
    authDomain: "contact-form-6c1e1.firebaseapp.com",
    databaseURL: "https://contact-form-6c1e1.firebaseio.com",
    projectId: "contact-form-6c1e1",
    storageBucket: "contact-form-6c1e1.appspot.com",
    messagingSenderId: "302668306618",
    appId: "1:302668306618:web:6953838c33177487a88a83",
    measurementId: "G-8DKFCBEYRB"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }