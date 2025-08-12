import Server from "./server/config";
import router from "./src/routes/index.routes";
const server = new Server();
//agregar las rutas
server.app.use('/api', router)
server.listen()