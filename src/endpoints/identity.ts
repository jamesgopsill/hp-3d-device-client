import type { HPClient } from "../index.js"

export async function deviceIdentification(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/identification`
	return this._fetch<string>("GET", url)
}
