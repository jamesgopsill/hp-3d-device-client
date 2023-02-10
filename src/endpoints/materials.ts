import type { HPClient } from "../index.js"

export async function deviceMaterials(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/materials`
	return this._fetch<string>("GET", url)
}

export async function deviceMaterial(
	this: HPClient,
	deviceId: string,
	materialId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/materials/${materialId}`
	return this._fetch<string>("GET", url)
}
