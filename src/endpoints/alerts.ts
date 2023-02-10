import type { HPClient } from "../index.js"

export async function deviceStatus(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/devicestatus`
	return this._fetch<string>("GET", url)
}

export async function deviceAlerts(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/alerts`
	return this._fetch<string>("GET", url)
}
