
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDqDEmPjAhFjsXkN5zwMLKRfh5bwH8sGVQ",
      authDomain: "kwitter-6153c.firebaseapp.com",
      databaseURL: "https://kwitter-6153c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6153c",
      storageBucket: "kwitter-6153c.appspot.com",
      messagingSenderId: "120006334299",
      appId: "1:120006334299:web:5a17c46768c3fa0d11ec7e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr> ";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "index.html";
}

