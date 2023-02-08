import type { HPClient, HttpResponse } from "./index.js"

export async function augmentedFetch<T>(
	this: HPClient,
	method: "GET" | "POST" | "PUT" | "DELETE",
	url: string,
	bodyArgs: { [k: string]: any } = {}
) {
	const config: RequestInit = {
		method: method,
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${this._accessToken}`,
		},
		body: JSON.stringify(bodyArgs),
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.data = null
	if (r.ok && r.status === 200) {
		r.data = await r.json()
	}
	return r
}
