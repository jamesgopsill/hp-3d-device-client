import type { DeviceProxy, HPClient } from "../index.js"

export async function login(
	this: HPClient,
	username: string,
	password: string
) {
	const discoverUrl = `${this._ccServerUrl}:8443/discovery`
	const r1 = await fetch(discoverUrl)
	if (!r1.ok) {
		console.log(`Could not find discovery service at ${discoverUrl}`)
		return false
	}
	const dp: DeviceProxy = await r1.json()
	this._baseUrl = dp.DeviceProxy.href
	const authUrl = `${this._baseUrl}/authenticate`
	const body = { username, password }
	const config: RequestInit = {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(body),
	}
	const r2 = await fetch(authUrl, config)
	if (!r2.ok) {
		console.log(`${r2.status}: ${await r2.text()}`)
		return false
	}
	this._accessToken = await r2.text()
	return true
}

export async function refreshToken(this: HPClient) {
	const url = `${this._baseUrl}/authentication/refresh`
	const config: RequestInit = {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: this._accessToken,
	}
	const r = await fetch(url, config)
	if (r.ok) return true
	return false
}
