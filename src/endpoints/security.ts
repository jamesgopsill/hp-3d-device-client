import type { HPClient } from "../index.js"

export async function devicePublicKey(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/key`
	return this._fetch<string>("GET", url)
}
