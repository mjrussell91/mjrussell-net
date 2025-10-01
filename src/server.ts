import {
	AngularNodeAppEngine,
	createNodeRequestHandler,
	isMainModule,
	writeResponseToNodeResponse,
} from "@angular/ssr/node";
import express from "express";
import { IncomingMessage, ServerResponse } from "node:http";
import type { AngularSSRResponse } from "./server.types";
import { join } from "node:path";

const browserDistFolder = join(import.meta.dirname, "../browser");

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
	express.static(browserDistFolder, {
		maxAge: "1y",
		index: false,
		redirect: false,
	}),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req: Express.Request, res: Express.Response, next: express.NextFunction) => {
	angularApp
		.handle(req as IncomingMessage)
		.then(async (response: unknown) => {
			// narrow explicit nullish check so linters don't allow implicit any in conditional
			if (response != null) {
				// The Angular SSR response is expected to match AngularSSRResponse
				const webRes = response as AngularSSRResponse;
				await writeResponseToNodeResponse(webRes as unknown as Response, res as ServerResponse);
			} else {
				next();
			}
		})
		.catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
	const port = process.env["PORT"] ?? 4000;
	app.listen(port, (error?: Error) => {
		if (error) {
			throw error;
		}

		// console.log(`Node Express server listening on http://localhost:${port.toString()}`);
	});
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
