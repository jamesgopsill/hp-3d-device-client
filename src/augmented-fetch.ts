import type { HPClient, HttpResponse, ObjectOrStringOrBuffer } from "./index.js"

export async function augmentedFetch<T>(
	this: HPClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
	url: string,
	bodyArgs: ObjectOrStringOrBuffer = ""
) {
	let config: any = {
		method,
		mode: "cors",
		headers: {},
	}
	if (this._accessToken) {
		config.headers["Authorization"] = `Bearer ${this._accessToken}`
	}
	if (typeof bodyArgs === "string") {
		if (bodyArgs.startsWith("<")) {
			config.headers["Content-Type"] = "text/xml"
		} else {
			config.headers["Content-Type"] = "text/plain"
		}
		config.body = bodyArgs
	}
	if (typeof bodyArgs === "object") {
		config.headers["Content-Type"] = "application/json"
		config.body = JSON.stringify(bodyArgs)
	}
	if (Buffer.isBuffer(bodyArgs)) {
		config.headers["Content-Type"] = "application/ocetet-stream"
		config.body = bodyArgs
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.data = undefined
	if (r.ok && r.status === 200) {
		if (r.headers.get("Content-Type") === "application/json") {
			r.data = await r.json()
		}
		if (
			r.headers.get("Content-Type") === "text/xml" ||
			r.headers.get("Content-Type") === "text/plain"
		) {
			r.data = (await r.text()) as any
		}
	}
	return r
}
