import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';

export class UsuariosController {

    async list(req: Request, res: Response): Promise<Response> {

        let users: Usuario[] = await Usuario.find();

        return res.status(200).json(users);
    }

    async find(req: Request, res: Response): Promise<Response> {
        let id = Number(req.params.id);

        let usuario: Usuario | null = await Usuario.findOneBy({
            id: id
        });

        if (usuario) {
            return res.status(200).json(usuario);
        } else {
            return res.status(404).send("Not found");
        }

    }

    async create(req: Request, res: Response): Promise<Response> {
        let body = req.body;

        let usuario: Usuario = await Usuario.create({
            nome: body.nome,
        }).save();

        return res.status(201).json(usuario);
    }

    async update(req: Request, res: Response): Promise<Response> {
        let id = Number(req.params.id);
        let body = req.body;
        let usuario: Usuario | null = await Usuario.findOneBy({
            id: id
        });
        if (usuario) {
            usuario.nome = body.nome;
            await usuario.save();

            return res.status(200).json(usuario);
        } else {
            return res.status(404).send("Not found");
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        let id = Number(req.params.id);
        let usuario: Usuario | null = await Usuario.findOneBy({
            id: id
        });
        if (usuario) {
            await usuario.remove();

            return res.status(204).json();
        } else {
            return res.status(404).send("Not found");
        }
    }

}