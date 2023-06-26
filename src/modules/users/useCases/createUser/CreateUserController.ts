//VALIDAÇAO BASICA PARA ENVIAR A SERVICE P/ USECASE
import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
    async handle(req: Request, res: Response){
        const { name, email } = req.body //resposta da requisição

        const createUserUseCase = new CreateUserUseCase //criacao de user

        const result = await createUserUseCase.execute({name, email}) //executa o método execute() criado no CreateUserUseCase()

        return res.status(201).json(result)
    }
}