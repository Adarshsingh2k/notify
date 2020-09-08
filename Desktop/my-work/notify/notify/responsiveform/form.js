/*fire base  initialization */
var firebaseConfig = {
    apiKey: "AIzaSyAU2fsihdYvuhgEdsgPfuUCqCvWgAE3k6o",
    authDomain: "notifyform.firebaseapp.com",
    databaseURL: "https://notifyform.firebaseio.com",
    projectId: "notifyform",
    storageBucket: "notifyform.appspot.com",
    messagingSenderId: "1057989623991",
    appId: "1:1057989623991:web:b4c27c17256e441df44d32",
    measurementId: "G-T1E7NP6WDC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //reference messages collection
  var messagesRef = firebase.database().ref('messages');

/**firebase ends */

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var purpose = getInputVal('purpose');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone,purpose, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
 setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, purpose, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    purpose: purpose,
    message:message
  });
}
