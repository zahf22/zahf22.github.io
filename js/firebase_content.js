

(function($) {
				"use strict";
				// Your web app's Firebase configuration
				$(window).on('load', function() {
								var test = location.search.substring(1);
								var firebaseConfig = {
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
				
				var desc =firebase.database().ref('addons');
				desc.once("value", function(snapshot) {
								var data = snapshot.val();
								var addon_desc = snapshot.child(test+"/description").val()
								document.querySelector('#addon_description').innerHTML += `
												<div>${addon_desc}</div>
								`
				})
				var entities =firebase.database().ref('/wiki/'+test+'/entities');
				var item =firebase.database().ref('/wiki/'+test+'/items');
				entities.once("value", function(snapshot) {
					var data = snapshot.val();
						document.querySelector('#addon_name').innerHTML += `
							<h1>${test.replace('_',' ').toUpperCase()}</h1>
						`
					for(let s in data) {
						document.querySelector('#entities').innerHTML += `
							<div class="container-addons">
								<img src="${data[s].image}"  class="profile-img">
								<h2>${data[s].name}</h2>
								<a data-toggle="collapse" href="#${s}" aria-expanded="false">Details</a>
								<div class="collapse" id="${s}">
									<div class="description">${data[s].description}
									</div>
								</div>
							</div>
						`	
					}   
				})
				item.once("value", function(snapshot) {
					var data = snapshot.val();
					for(let a in data) {
						document.querySelector('#items').innerHTML += `
							<div class="container-addons">
								<img src="images/${test}/items/${a}.png"  class="profile-img">
								<h1>${data[a].name}</h1>
								<a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
								<a href="#details-lightbox-1">Details</a>
								<div class="description">${data[a].description}</div>
							</div>
						`	
					}   
				})
			});
})(jQuery);
