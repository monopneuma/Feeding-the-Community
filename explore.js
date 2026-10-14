



var data = [['STAMP', 'MCKELDIN LIBRARY'], 
	['EDWARD ST. JOHN', 'PLANT SCIENCES BUILDING'],
	['PRINCE FREDERICK HALL','SOUTH CAMPUS DINING HALL'],
];

let val1 = "";
let val2 = "";

function getFirstVal() {
	val1 = document.getElementById("firstval").value;
	if (val1) {
		val1 = val1.toUpperCase();
		return val1;
	}
	return "";
}
function getSecondVal() {
	val2 = document.getElementById("secondval").value;
	if (val2) {
		val2 = val2.toUpperCase();
		return val2;
	}
	return "";
}		
const button = document.getElementById("button");


//button.addEventListener("click", updateButton());

function updateButton() {
	var index = 0;
	refreshText();
	refreshImages();
	let found = false;
	if (!getFirstVal() && !getSecondVal()) {
		displayError4();
	}
	else if (!getFirstVal()) {
		console.log("error1");
		displayError1();
	}
	else if (!getSecondVal()) {
		console.log("error2");
		displayError2();
	} 
	for (let i = 0; i < data.length; i++) {		
		if (getFirstVal()===data[i][0] && getSecondVal()===data[i][1]) {
			console.log("Search found!");
			found = true;
			index = i;
			break;
		}
	}
	if (found) {
		if (index == 0) {
			displayHeader();
			displayImage1();
			displayName();
			displayComments();
		}
		if (index == 1) {
			displayHeader();
			displayImage2();
			displayName();
			displayComments();
		}
		else if (index == 2) {
			displayHeader();
			displayImage3();
			displayName();
			displayComments();
		}
	}
	else if (getSecondVal() && getFirstVal()) {
		console.log("Not found");
		displayError3();
	}
} 

function refreshText() {
	var text1 = document.getElementById("error1");
	var text2 = document.getElementById("error2");
	var text3 = document.getElementById("error3");
	var text5 = document.getElementById("error4");
	var text4 = document.getElementById("found");
	var result = document.getElementById("result");
	text1.style.display = "none";
	text2.style.display = "none";
	text3.style.display = "none";
	text4.style.display = "none";
	text5.style.display = "none";	
	result.style.display = "none";
}
function refreshImages() {
	var img1 = document.getElementById("stampmckeldin");
	var img2 = document.getElementById("esjplantscience");
	var img3 = document.getElementById("princefredericksouthcampus");
	img1.style.display = 'none';
	img2.style.display = 'none';
	img3.style.display = 'none';
}

function addToFavorites() {

}

function displayError1() {
	var text = document.getElementById("error1");
	text.style.display = "block";
}
function displayError4() {
	var text = document.getElementById("error4");
	text.style.display = "block";
}
function displayError2() {
	var text = document.getElementById("error2");
	text.style.display = "block";
}
function displayError3() {
	var text = document.getElementById("error3");
	text.style.display = "block";
}
function displayHeader() {
	var text = document.getElementById("result");
	text.style.display = "block";
}
function displayFound() {
	var text = document.getElementById("found");
	text.style.display = "block";
}
function displayImage1() {
	var img = document.getElementById('stampmckeldin');
    img.style.display = 'initial';
}
function displayImage2() {
	var img = document.getElementById('esjplantscience');
    img.style.display = 'initial';
}
function displayImage3() {
	var img = document.getElementById('princefredericksouthcampus');
    img.style.display = 'initial';
}


function submitForm() {
	var name = document.getElementById('feedback').value;

	var formData = {
	  name: name,
	};
}
	/*fetch('http://localhost:3000/submit-form', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(formData)
	})
	.then(response => response.json())
	.then(data => {
	  console.log('Server Response:', data);
	  // Optionally, you can update the UI or redirect the user after successful submission
	})
	.catch(error => {
	  console.error('Error:', error);
	  // Handle errors or provide feedback to the user
	}); 
  } */
 
/*import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const analytics = getAnalytics(app);

import { getDatabase, ref, set } from "firebase/database";
function writeUserData(userId, name, email, imageUrl) {
	const db = getDatabase();
	set(ref(db, 'users/' + userId), {
	  username: name,
	  email: email,
	  profile_picture : imageUrl
	});
  }

import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
}); */

