import type { HPClient } from "../index.js"

export async function startJob(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/start`
	return this._fetch<string>("POST", url)
}

export async function cancelJob(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/cancel`
	return this._fetch<string>("POST", url)
}

export async function deviceDoors(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/doors`
	return this._fetch<string>("GET", url)
}

export async function deviceDoor(
	this: HPClient,
	deviceId: string,
	doorId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/doors/${doorId}`
	return this._fetch<string>("GET", url)
}

export async function updateDoor(
	this: HPClient,
	deviceId: string,
	doorId: string,
	status: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/doors/${doorId}`
	return this._fetch<string>("PATCH", url, status)
}

export async function deviceSensors(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/sensors`
	return this._fetch<string>("GET", url)
}

export async function deviceSensor(
	this: HPClient,
	deviceId: string,
	sensorId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/sensors/${sensorId}`
	return this._fetch<string>("GET", url)
}
