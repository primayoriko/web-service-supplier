import { Request, Response, Router } from "express";

import { SupplyController } from '../controller/SupplyController';

export default () => {
    const router = Router();
    const supplyController = new SupplyController();

    router.get('', [], 
            supplyController.getSupplyList.bind(supplyController));

    router.get('', [],
            supplyController.checkTransaction.bind(supplyController));

    return router;
}