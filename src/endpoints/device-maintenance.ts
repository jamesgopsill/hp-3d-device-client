import type { HPClient } from "../index.js"

export async function deviceMaintenance(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/devicemaintenance`
	return this._fetch<string>("GET", url)
}

export async function filteredDeviceMaintenance(
	this: HPClient,
	deviceId: string,
	filterId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/devicemaintenance/filters/${filterId}`
	return this._fetch<string>("GET", url)
}
