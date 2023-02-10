import type { HPClient } from "../index.js"

export async function submitJob(this: HPClient, deviceId: string, job: string) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs`
	return this._fetch<string>("POST", url, job)
}

export async function submitJobBuildPackage(
	this: HPClient,
	deviceId: string,
	jobId: string,
	uploadUri: string,
	buildPackage: Buffer
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/${uploadUri}`
	return this._fetch<string>("POST", url, buildPackage)
}
