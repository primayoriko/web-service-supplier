import { Request, Response } from "express";
import { getRepository, getManager } from "typeorm";

import { Supply } from '../entity/Supply';

export class SupplyController {
    private supplyRepository = getRepository(Supply);

    async checkTransaction(req : Request, res: Response): Promise<Response>{
        /* Add here handler */
        return res;
    }

    async getSupplyList(req: Request, res: Response, withoutPrice: boolean = true): Promise<Response>{
        // const select  = [ "name" ];
        // if(!withoutPrice){ 
        //     select.push("price");
        // }
        const results = await this.supplyRepository.find();

        const supplies = [];

        results.forEach(result => {
            const supply: any = { name: result.name }
            if(!withoutPrice){ 
                supply.price = result.price
            }

            supplies.push(supply)
        })

        return res.status(200).send({
            supplies: supplies
        });
    }

    async getSupplyListWithPrice(req: Request, res: Response): Promise<Response>{
        return this.getSupplyList(req, res, false);
    }
}
