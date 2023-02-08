export type HttpResponse<T> =
	| ({
			ok: true
			status: 200
			data: T
	  } & Response)
	| ({
			ok: true
			status: 204
			data: undefined
	  } & Response)
	| ({
			ok: false
			data: undefined
	  } & Response)

export interface DeviceProxy {
	DeviceProxy: {
		rel: string
		href: string
	}
}
