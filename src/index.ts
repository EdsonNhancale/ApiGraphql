import "reflect-metadata";
import { startServer } from "./app";

async function main() {
    const app = await startServer();
    app.listen(4000)
    console.log("server na porta", 40000)
}

main();