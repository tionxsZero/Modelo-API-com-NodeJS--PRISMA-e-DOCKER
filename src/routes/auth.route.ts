import { authenticate } from "../controllers/auth.controller";

const authRoute = (app: any) => {
    app.post("/login", authenticate); //Gera um token valido pra uso nas outras rotas, verificando se o email passado existe.
}

export default authRoute;