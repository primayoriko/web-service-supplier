import { Request, Response } from "express";
import { getMongoRepository, getMongoManager } from "typeorm";

import { Supply } from '../entity/Supply';

export class SupplyController {
    private supplyRepository = getMongoRepository(Supply);

    async checkTransaction(req : Request, res: Response){

    }

    async getSupplyList(req: Request, res: Response){

    }
}
