import Server from "./src/server.js";

function main() {
    let server = new Server(1000);
    server.start();
}

main();