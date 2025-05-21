import {
	createServer,
	Response
} from "miragejs"

const INITIAL_COUNTER = 10;

createServer({

	routes() {
		this.namespace = "api";
		this.post("/counter/save", (schema, request) => {
			//return new Response(500);
			const counter = JSON.parse(request.requestBody).counter;
			return {
				reminder: counter
				//status: 'ok' 
			}
		})

		this.get("/counter", () => {
			//return new Response(500);
			return {
				counter: INITIAL_COUNTER
			}
		})
	},
})