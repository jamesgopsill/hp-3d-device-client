import type { DeviceProxy, HPClient } from "../index.js"

export async function devices(this: HPClient) {
	const url = `${this._baseUrl}/devices`
	return this._fetch<string>("GET", url)
}

export async function login(
	this: HPClient,
	username: string,
	password: string
) {
	const discoverUrl = `${this._ccServerUrl}:8443/discovery`
	const r1 = await this._fetch<DeviceProxy>("GET", discoverUrl)
	if (!r1.ok || r1.status != 200) {
		console.log(`Could not find discovery service at ${discoverUrl}`)
		return false
	}
	this._baseUrl = r1.data.DeviceProxy.href
	const authUrl = `${this._baseUrl}/authenticate`
	const body = { username, password }
	const r2 = await this._fetch<string>("POST", authUrl, body)
	if (!r2.ok || r2.status != 200) {
		console.log(`${r2.status}: ${await r2.text()}`)
		return false
	}
	this._accessToken = await r2.text()
	return true
}

export async function refreshToken(this: HPClient) {
	const url = `${this._baseUrl}/authentication/refresh`
	const r = await this._fetch("POST", url, this._accessToken)
	if (r.ok) return true
	return false
}
