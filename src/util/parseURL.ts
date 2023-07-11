import ParsedLocation from "@/types/ParsedLocation"
import * as AppleMaps from "@/util/AppleMaps"
import * as GoogleMaps from "@/util/GoogleMaps"

const parseURL = (url: string): ParsedLocation | undefined => {
	const _url = new URL(url)
	switch (_url.host.toLowerCase()) {
	case "google.com":
	case "www.google.com":
	case "maps.google.com": {
		const parsed = GoogleMaps.parseURL(url)
		if (!parsed) return
		return {
			...parsed,
			appleMapsURL: AppleMaps.getURL(parsed)
		}
	}
	case "maps.apple.com": {
		const parsed = AppleMaps.parseURL(url)
		if (!parsed) return
		return {
			...parsed,
			googleMapsURL: GoogleMaps.getURL(parsed)
		}
	}
	default:
		return
	}
}

export default parseURL
