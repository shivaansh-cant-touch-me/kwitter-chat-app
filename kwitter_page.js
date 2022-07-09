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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            likes: 0
      });
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png></h4>";
message_with_tag = "<h4> class='message-h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + "onclick= 'updatelike(.id)'";
span_with_tag = "<span class='glypjicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button +span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updatelike(message_id) {

      console.log("clicked on like button - " + message_id);
      button_id  = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(messahe_id).update({
            likes: updated_likes
      });

}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}
