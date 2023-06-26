//REGRA DE NEGÓCIO
import { AppError } from "../../../../error/AppError";
import {User} from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
export class CreateUserUseCase {
    //Essa função cria e verifica se já tem usuário criado
    async execute({name, email}: CreateUserDTO ): Promise<User>{
        //Verificar se o usuario já existe:
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(userAlreadyExists){
            //se já existe? Cai no erro criado
            throw new AppError("User already exists!")
        }
        
        //Criar usuário novo
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        })
        return user
    }
}