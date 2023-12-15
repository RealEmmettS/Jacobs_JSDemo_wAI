function changeColor() {
	let currentText = document.getElementById("\u03B1").textContent;
	if (currentText.toLowerCase() === "hello world") {
			document.getElementById("\u03B1").textContent = "Hello iCode";
			document.getElementById("\u03B1").style.color = "#126790";
	} else if (currentText.toLowerCase() === "hello icode") {
			document.getElementById("\u03B1").textContent = "Hello World";
			document.getElementById("\u03B1").style.color = "#169493";
	}
}







// GETS AI RESPONSE
async function useAI(query) {
try {
		const response = await fetch('https://gemini-demo.replit.app/reply', {
				method: 'POST',
				headers: {
						'Content-Type': 'application/json'
				},
				body: JSON.stringify({ query }) // Ensure the body is correctly structured as per the API requirements
		});
		if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
		}
		const textResponse = await response.text(); // Changed from response.json() to response.text()
		return textResponse;
} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
}
}







// CHANGES THE HTML
async function displayAIResponse(question) {
	try {
		const aiResponse = await useAI(question);
		if (aiResponse) {
			document.getElementById("a").innerHTML = aiResponse;
		}
	} catch (error) {
		console.error('Error fetching AI response:', error);
	}
}// end method




window.onload = async function() {
await displayAIResponse("Reply with one random word of your choosing. Do not include any extra text.");
};


import 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

document.querySelector("#submitInput").addEventListener('click', async function() {
	let userInput = document.querySelector("#userInput").value.trim();
	let markdown = await useAI(userInput);

	// Use marked.js to convert markdown to HTML
	//let html = marked(markdown);

	// Set the innerHTML of the mdDisplay element to the converted HTML
	document.querySelector("#mdDisplay").innerHTML = markdown;
});


