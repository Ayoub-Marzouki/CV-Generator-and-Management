import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";

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

        this.app.set("views", path.join(process.cwd(), "src/views"));
        this.app.set("view engine", "ejs");
        this.app.use(expressEjsLayouts);
        this.app.set("layout", "layouts/main-layout");

        this.app.set('layout extractScripts', true);
        this.app.set('layout extractStyles', true);
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