



var data = [['STAMP', 'MCKELDIN LIBRARY'], 
	['EDWARD ST. JOHN', 'PLANT SCIENCES BUILDING'],
	['PRINCE FREDERICK HALL','SOUTH CAMPUS DINING HALL'],
];

let val1 = "";

function getZipcode() {
	val1 = document.getElementById("zipcode").value;
	if (val1) {
		return val1;
	} 
	return "";
}
	
const button = document.getElementById("button");

// checks if code is empty
function checkValidity1() {
    const zip = getZipcode();
    return zip.length > 0;
}

// checks if code has 5 characters + 0-9 only
function checkValidity2() {
    const zip = getZipcode();
    const fiveDigitRegex = /^\d{5}$/;
    return fiveDigitRegex.test(zip);
}

// checks if value is 00501 or higher
function checkValidity3() {
    const zip = getZipcode();
    const zipNumber = parseInt(zip, 10);
    return zipNumber >= 501;
}

function checkIfStored() {
	if (checkValidity1() && checkValidity2() && checkValidity3()) {
		const zip = getZipcode();
		if (zip == 23227) {
			return true;
		} 
		/*const storedValue = localStorage.getItem(zip);
		if (storedValue) {
			return true;
		} else {
			return false;
		}*/
	}
	return false;
}
	

function updateButton() {
	refreshText();
	refreshImages();
	if (!checkValidity1()) {
		displayError1();
	} else if (!checkValidity2()) {
		displayError2();
	} else if (!checkValidity3()) {
		displayError3();
	} else if (!checkIfStored()) {
		displayError4();
	} else {
		displayHeader();
		displayFound();
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


function displayError1() {
	var text = document.getElementById("error1");
	text.style.display = "block";
}
function displayError4() {
	var text = document.getElementById("error4");
    var zip = getZipcode(); 
    text.innerHTML = `No food resources found for ZIP code ${zip}.`;
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


