import type { HPClient } from "../index.js"

export async function deviceAgents(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/agents`
	return this._fetch<string>("GET", url)
}

export async function deviceAgentSupply(
	this: HPClient,
	deviceId: string,
	supplyId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/agents/supplies/${supplyId}`
	return this._fetch<string>("GET", url)
}

export async function deviceAgentReservoirs(
	this: HPClient,
	deviceId: string,
	reservoirId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/agents/reservoirs/${reservoirId}`
	return this._fetch<string>("GET", url)
}

export async function devicePowderSupplies(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/powdersupplies`
	return this._fetch<string>("GET", url)
}

export async function deviceHeaters(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/heaters`
	return this._fetch<string>("GET", url)
}

export async function deviceHeater(
	this: HPClient,
	deviceId: string,
	heaterType: string,
	heaterId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/heaters/${heaterType}/${heaterId}`
	return this._fetch<string>("GET", url)
}

export async function devicePrintHeads(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/printheads`
	return this._fetch<string>("GET", url)
}

export async function devicePrintHead(
	this: HPClient,
	deviceId: string,
	printheadId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/printheads/${printheadId}`
	return this._fetch<string>("GET", url)
}

export async function devicePowdertanks(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/powdertanks`
	return this._fetch<string>("GET", url)
}
