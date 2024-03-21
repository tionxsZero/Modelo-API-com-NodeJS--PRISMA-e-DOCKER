import jwt from "jsonwebtoken"
import { Request, Response } from "express"


//Verifica se o token foi enviado no header e se ele é válido!
export const verifyToken = (req: Request, res: Response, next: any) => {
    
    const token = req.headers.authorization;

    if(!token) return res.status(401).send({message: "Não autorizado! Token obrigatório."})

    try {
        const replace = token.replace("Bearer ", "");
        jwt.verify(replace, String(process.env.TOKEN_KEY))
        next();
    } catch (e) {
        res.status(401).send({message: "Credenciais inválidas! Verifique seu Token."})
    }
}