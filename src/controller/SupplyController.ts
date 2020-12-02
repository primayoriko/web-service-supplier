import { Request, Response } from "express";
import { getRepository, getManager } from "typeorm";

import { Supply } from '../entity/Supply';

export class SupplyController {
    private supplyRepository = getRepository(Supply);

    async checkTransaction(req : Request, res: Response): Promise<Response>{
        /* Handler to check if transaction is successful or not */
        const results = await this.supplyRepository.find();
        const { balance, order } = req.body;
        if (!balance) {
            const msg = "Balance not included"
            console.log(msg)
            return res.status(400).send({
                error: msg
            })
        }
        if (order) {
            let cost = 0
            let items = 0
            let err = false
            let msg = ""
            order.every((ord) => {
                const ingredient = results.find((res) => res.name === ord.name)
                if (ingredient) {
                    if (ord.quantity && ord.quantity > 0) {
                        cost += ingredient.price * ord.quantity
                        items += ord.quantity
                        return true
                    } else {
                        msg = "Quantity not included"
                        err = true
                        return false   
                    }
                } else {
                    let item = (ord.name) ? ord.name : ""
                    msg = "Item " + item + " is not in supply list"
                    err = true
                    return false   
                }
            })
            if (err) {
                console.log(msg)
                return res.status(400).send({
                    error: msg
                })
            }
            if (cost <= balance) {
                const change = balance-cost;
                const msg = "Transaction successful. " + items + " item(s) purchased with Rp " + change.toLocaleString("id") + ",00 in change."
                console.log(msg)
                return res.status(200).send({
                    status: "Success",
                    change: change,
                    message: msg
                })
            } else {
                const change = cost-balance;
                const msg = "Transaction failed. Insufficient balance, Rp " + change.toLocaleString("id") + ",00 left needed."
                console.log(msg)
                return res.status(200).send({
                    status: "Failed",
                    change: change,
                    message: msg
                })
            }
        } else {
            const msg = "Order not included"
            console.log(msg)
            return res.status(400).send({
                error: msg
            });
        }
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
