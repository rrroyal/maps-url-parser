import ParsedLocation from "../types/ParsedLocation"

export function parseURL(url: string): ParsedLocation | undefined {
	return
}

export const getURL = ({ latitude, longitude, label }: ParsedLocation): string => {
	const labelFixed = label
		?.replaceAll(" ", "+")

	const components = [
		labelFixed ? `q=${encodeURIComponent(labelFixed)}` : undefined,
		`ll=${latitude},${longitude}`,
		// "z=10"
	].filter(Boolean)

	return `https://maps.apple.com/?${components.join("&")}`
}
