

// refactored file


// container element HTML will display by name 
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const container = document.getElementById('message-container');
const messageBox = document.getElementById('message-box');


async function handleZipSearch() {

	// take user input and sanatize zipcode
	const rawInput = searchInput.value.trim();
	const sanitizedZip = rawInput.replace(/\D/g, '');
	
	// check if zipcode is proper length
	if (sanitizedZip.length !== 5) {
		messageBox.textContent = 'Please enter a valid 5-digit zipcode';
		return;
	}
	
	// explore.js -> endpoint
	const endpoint = `/api/v1.0/search/${sanitizedZip}`;
	try {
		const response = await fetch(endpoint);
	
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
	
		// process and render data 
		const data = await response.json();
		const locations = data.locations || []; // falls back to [] if data missing
	
		// check if list is empty
		if (locations.length === 0) {
			messageBox.textContent = 'No matching locations found for this zipcode.';
			return;
		}
	
		// display items on page
		const listElement = document.createElement('ul');
		locations.forEach((loc) => {
			const item = document.createElement('li');
			const category = loc.secondary_type
			? `${loc.type} (${loc.secondary_type})`
			: loc.type;
	
			item.innerHTML = `<strong>${loc.name}</strong> — ${category}<br><small>${loc.address}</small>`
			listElement.appendChild(item);
		}); 
	
		container.appendChild(listElement);
	
	} catch (error) {
		messageBox.textContent = error.message || 'An errror occured while fetching data.';
	}
}

// button logic
searchBtn.addEventListener('click', handleZipSearch);

searchInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		handleZipSearch();
	}
});