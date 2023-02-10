import type { HPClient } from "../index.js"

export async function jobs(this: HPClient, deviceId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs`
	return this._fetch<string>("GET", url)
}

export async function job(this: HPClient, deviceId: string, jobId: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}`
	return this._fetch<string>("GET", url)
}

export async function jobStatus(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/status`
	return this._fetch<string>("GET", url)
}

export async function jobCompletionDetails(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/completiondetails`
	return this._fetch<string>("GET", url)
}

export async function jobBuildPackageStatus(
	this: HPClient,
	deviceId: string,
	jobId: string,
	buildPackageId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/buildpackages/${buildPackageId}/status`
	return this._fetch<string>("GET", url)
}

export async function jobPartStatus(
	this: HPClient,
	deviceId: string,
	jobId: string,
	partId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/parts/${partId}/status`
	return this._fetch<string>("GET", url)
}
