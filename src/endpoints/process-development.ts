import type { HPClient } from "../index.js"

export async function buildPackageBinary(
	this: HPClient,
	deviceId: string,
	jobId: string,
	buildpackageId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/buildpackages/${buildpackageId}`
	return this._fetch<undefined>("GET", url)
}

export async function startJobTelemetry(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/telemetry`
	return this._fetch<string>("POST", url)
}

export async function jobTelemetry(
	this: HPClient,
	deviceId: string,
	jobId: string,
	telemetryId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/telemetry/${telemetryId}`
	return this._fetch<undefined>("GET", url)
}

export async function sliceJob(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/slices`
	return this._fetch<string>("POST", url)
}

export async function jobSlices(
	this: HPClient,
	deviceId: string,
	jobId: string,
	sliceId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/slices/${sliceId}`
	return this._fetch<undefined>("GET", url)
}

export async function startDeviceTelemetry(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/telemetry`
	return this._fetch<string>("POST", url)
}

export async function deviceTelemetry(
	this: HPClient,
	deviceId: string,
	telemetryId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/telemetry/${telemetryId}`
	return this._fetch<undefined>("GET", url)
}
