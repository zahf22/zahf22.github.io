(function($) {
    "use strict";

    // Your web app's Firebase configuration

    $(window).on('load', function() {
        var test = "addons";
	    const firebaseConfig = {
  apiKey: "AIzaSyDE9BhlQioOlCesS-ZWRTrh1HafoC_wWok",
  authDomain: "dragon-force-studio-cacd6.firebaseapp.com",
  databaseURL: "https://dragon-force-studio-cacd6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dragon-force-studio-cacd6",
  storageBucket: "dragon-force-studio-cacd6.appspot.com",
  messagingSenderId: "615867973802",
  appId: "1:615867973802:web:5865bec554911c7324d0d3",
  measurementId: "G-GB95LZPBQD"
};
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        var firebaseRef = firebase.database().ref(test);
        firebaseRef.once("value", function(snapshot) {
            var data = snapshot.val();
            for (let i in data) {
                console.log(i)
                document.querySelector('#addons').innerHTML += `
			<div class="container-addons">
				<img src="${data[i].image}"  class="profile-img"></img>
					  <a class="name" href="privacy.html?${i}"><h1 class="name">${data[i].name}</h1></a>
					   	<p class="description">${data[i].description}</p>
					</div>
				`
            }
        })
    });

})(jQuery);
