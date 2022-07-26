const firebaseConfig = {
  apiKey: 'AIzaSyB8h6EMOObOAWkeno0uBmGhTYs-PBHzPFw',

  authDomain: 'yoga-c-form.firebaseapp.com',

  databaseURL: 'https://yoga-c-form-default-rtdb.firebaseio.com',

  projectId: 'yoga-c-form',

  storageBucket: 'yoga-c-form.appspot.com',

  messagingSenderId: '407328038146',

  appId: '1:407328038146:web:7522bcea5b793ae5a4361b',
}

firebase.initializeApp(firebaseConfig)

var messagesRef = firebase.database().ref('messages')

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

// Submit form
function submitForm(e) {
  e.preventDefault()

  // Get values
  var name = getInputVal('yourName')
  var gender = getInputVal('gender')
  var message = getInputVal('input-area2')

  // Save message
  saveMessage(name, gender, message)

  // Show alert
  document.querySelector('.alert').style.display = 'block'

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none'
  }, 3000)

  // Clear form
  document.getElementById('contactForm').reset()
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// Save message to firebase
function saveMessage(name, gender, message) {
  var newMessageRef = messagesRef.push()
  newMessageRef.set({
    name: name,
    gender: gender,
    message: message,
  })
}
