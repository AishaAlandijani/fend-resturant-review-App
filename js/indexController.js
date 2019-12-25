if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Service Worker Registration successful!');
	})
	.catch(function() {
		console.log('Service Worker Registration failed!');
	});
}
