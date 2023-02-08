import { augmentedFetch } from "./augmented-fetch.js"
import * as Auth from "./endpoints/authentication.js"

//export * from "./definitions/enums.js"
export * from "./definitions/interfaces.js"

export class HPClient {
	protected _ccServerUrl: string = ""
	protected _baseUrl: string = ""
	protected _accessToken: string = ""

	constructor(ccServerUrl: string) {
		this._ccServerUrl = ccServerUrl
	}

	protected _fetch = augmentedFetch

	public login = Auth.login
}
