import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";

export default class Server {
    constructor(port = 3000) {
        this.port = port;
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(express.static("public"));
        this.app.use(cors());
    }
    routes() {
        this.app.use("/", routes);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
}