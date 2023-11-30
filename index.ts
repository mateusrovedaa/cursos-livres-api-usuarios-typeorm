import express, { Express } from 'express';
import usuariosRoutes from './routes/usuarios';
import DB from './db';

async function main() {
    await DB.initialize();
    let app: Express = express();
    app.use(express.json());

    app.use(usuariosRoutes);

    app.listen(3000, () => {
        console.log("Servidor iniciado na porta 3000");
    });
}
main();