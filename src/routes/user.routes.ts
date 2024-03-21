import { create, get, getId, update, remove } from "../controllers/user.controller"
import { verifyToken } from "../middlewares/auth";

const userRoutes = (app: any) => {
    app.post("/user", create); //Cria um novo usuário no banco
    app.get("/user", verifyToken, get) //Obter usuarios do banco
    app.get("/user/:id", verifyToken, getId) //Obter usuario pelo ID
    app.put("/user/:id", verifyToken, update) //Atualizar informações do usuario com base no ID
    app.delete("/user/:id", verifyToken, remove) //Deletar um usuário com base no ID
}

export default userRoutes;