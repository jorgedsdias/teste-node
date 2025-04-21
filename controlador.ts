import { Request, Response } from 'express';

export default class Controlador {
    async index(req: Request, res: Response): Promise<Response> {
        return res.json({ "Testando" : "Testando..." });
    }
}