import type { HPClient } from "../index.js"

export async function buildPackages(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/buildpackages`
	return this._fetch<string>("GET", url)
}

export async function buildPackage(
	this: HPClient,
	deviceId: string,
	jobId: string,
	buildPackageId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/buildpackages/${buildPackageId}`
	return this._fetch<string>("GET", url)
}

export async function buildPackageParts(
	this: HPClient,
	deviceId: string,
	jobId: string,
	buildPackageId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/buildpackages/${buildPackageId}/parts`
	return this._fetch<string>("GET", url)
}

export async function buildPackageAssemblies(
	this: HPClient,
	deviceId: string,
	jobId: string,
	buildPackageId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/buildpackages/${buildPackageId}/assemblies`
	return this._fetch<string>("GET", url)
}

export async function jobParts(
	this: HPClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/parts`
	return this._fetch<string>("GET", url)
}

export async function jobPart(
	this: HPClient,
	deviceId: string,
	jobId: string,
	partId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/parts/${partId}`
	return this._fetch<string>("GET", url)
}

export async function buildPackageThumbnail(
	this: HPClient,
	deviceId: string,
	jobId: string,
	buildpackageId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/buildpackages/${buildpackageId}/thumbnail`
	return this._fetch<undefined>("GET", url)
}

export async function partThumbnail(
	this: HPClient,
	deviceId: string,
	jobId: string,
	partId: string
) {
	const url = `${this._baseUrl}/devices/${deviceId}/jobs/${jobId}/parts/${partId}/thumbnail`
	return this._fetch<undefined>("GET", url)
}
