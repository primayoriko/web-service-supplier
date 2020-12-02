import { Router } from "express";

import { SupplyController } from '../controller/SupplyController';

export default () => {
	const router = Router();
	const supplyController = new SupplyController();

	router.get('/api/supply', [],
		supplyController.getSupplyList.bind(supplyController));

	router.get('/api/supply/withprice', [],
		supplyController.getSupplyListWithPrice.bind(supplyController));

	router.post('/api/check', [], 
		supplyController.checkTransaction.bind(supplyController));

	return router;
}