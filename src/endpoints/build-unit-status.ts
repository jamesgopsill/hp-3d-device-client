import type { HPClient } from "../index.js"

export async function deviceTrolleys(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/trolleys`
	return this._fetch<string>("GET", url)
}

export async function deviceTrolley(
	this: HPClient,
	deviceId: string,
	trolleyId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/trolleys/${trolleyId}`
	return this._fetch<string>("GET", url)
}
