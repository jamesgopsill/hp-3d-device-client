import type { HPClient } from "../index.js"

export async function deviceOperations(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/deviceoperations`
	return this._fetch<string>("GET", url)
}

export async function deviceOperation(
	this: HPClient,
	deviceId: string,
	operationId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/deviceoperations/${operationId}`
	return this._fetch<string>("GET", url)
}
