import ParsedLocation from "../types/ParsedLocation"

export function parseURL(url: string): ParsedLocation | undefined {
	const _url = new URL(url)
	const [,,, label, coordinates] = _url.pathname.split("/")

	if (!coordinates) return

	const labelFixed = label
		.replaceAll("+", " ")

	const [latitude, longitude, zoom] = coordinates.slice(1).split(",")

	return {
		label: decodeURIComponent(labelFixed),
		latitude: parseFloat(latitude),
		longitude: parseFloat(longitude)
	}
}

export const getURL = ({ latitude, longitude, label }: ParsedLocation): string => {
	// TODO
	return ""
}
