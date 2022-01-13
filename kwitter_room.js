var firebaseConfig = {
      apiKey: "AIzaSyCO1qwdQ_dh4adA1L0i2MHTtRVNdeRAoYY",
      authDomain: "harshn-ab082.firebaseapp.com",
      databaseURL: "https://harshn-ab082-default-rtdb.firebaseio.com",
      projectId: "harshn-ab082",
      storageBucket: "harshn-ab082.appspot.com",
      messagingSenderId: "522148396402",
      appId: "1:522148396402:web:d0d2848a703b667f5f31eb"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class=' room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}