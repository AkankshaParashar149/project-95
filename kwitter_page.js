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

 user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();


function send() {
      console.log("inside send")
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}