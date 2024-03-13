chrome.runtime.onMessage.addListener((request) => {
	if (request.contentScriptQuery == "fetchPageDetail") {
		sendPageDetails();
	}
});

function sendPageDetails() {
	const url = window.location.href;
	const title = document.title;
	const year = new Date().getFullYear();

	const bibtex = `@Electronic{key,\n author={author}, \n title = {${title}},\n url = {${url}},\n year = {${year}},\n urldate={${new Date().toISOString().slice(0, 10)}}, \n}`;

	// Copy to Clipboard
	navigator.clipboard.writeText(bibtex).then(() => {
		console.log('BibTex copied to clipboard');
	}, (err) => {
		console.error('Error while copying to clipboard: ', err);
	});
}
