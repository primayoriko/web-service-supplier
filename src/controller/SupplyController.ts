import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";

import { Supply } from '../entity/Supply'

export class SupplyController {
    private supplyRepository = getRepository(Supply);

    async checkTransaction(req : Request, res: Response){

    }

    async getSupplyList(req: Request, res: Response){

    }
}
