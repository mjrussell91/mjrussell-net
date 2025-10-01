// Minimal shape of the web-standard Response that Angular SSR produces.
// This matches the properties `writeResponseToNodeResponse` reads: `status`, `headers`, and `body`.
export interface AngularSSRResponse {
	status: number;
	// headers must support `entries()` which returns an iterator of [name, value]
	headers: { entries(): IterableIterator<[string, string]> };
	// body may be a ReadableStream or other stream-like object; keep as unknown
	body?: unknown;
}
