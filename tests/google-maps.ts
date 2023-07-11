import { parseURL, getURL } from "../src/util/GoogleMaps"

const EXPECTED_RESULT = {
	label: "New York City",
	_label: "New+York+City",
	latitude: 40.6971494,
	longitude: -74.2598655
}
const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/${EXPECTED_RESULT._label}/@${EXPECTED_RESULT.latitude},${EXPECTED_RESULT.longitude},10z`

const result = parseURL(GOOGLE_MAPS_URL)

const _label = result?.label == EXPECTED_RESULT.label
console.log("Label:", _label)

const _latitude = result?.latitude == EXPECTED_RESULT.latitude
console.log("Latitude:", _latitude)

const _longitude = result?.longitude == EXPECTED_RESULT.longitude
console.log("Longitude:", _longitude)

console.log("\nAll:", _label && _latitude && _longitude)
