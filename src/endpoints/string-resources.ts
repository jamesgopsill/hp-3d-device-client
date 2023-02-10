import type { HPClient } from "../index.js"

export async function deviceStringResources(this: HPClient, id: string) {
	const url = `${this._baseUrl}/devices/${id}/stringresources`
	return this._fetch<string>("GET", url)
}

export async function deviceStringResource(
	this: HPClient,
	deviceId: string,
	languageId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/stringresources/${languageId}`
	return this._fetch<{ [k: string]: string }>("GET", url)
}
