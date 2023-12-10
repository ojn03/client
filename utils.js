export function formatTime(time) {
	let hr = time.hr;
	let min = time.min;
	let ampm = " am";
	if (hr > 12) {
		hr -= 12;
		ampm = " pm";
	}
	return hr + ":" + min.toString().padStart(2, "0") + ampm;
}