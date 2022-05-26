import express from "express";
const router = express.Router();
import * as merchantController from '../controller/merchantControlller.js';
import { authenthicateToken } from '../middleware/authenthicate.js';

router.get('/', authenthicateToken, merchantController.merchant_get);

export default router;
