import type { HPClient } from "../index.js"

export async function deviceServiceDiscovery(this: HPClient, id: string) {
	const url = `${this._baseUrl}/devices/${id}/servicediscovery`
	return this._fetch<string>("GET", url)
}
