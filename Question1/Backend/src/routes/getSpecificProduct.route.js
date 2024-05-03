import {Router} from 'express'
import { getSpecificProduct } from '../controllers/getSpecificProduct.controller.js'
const router = Router()
router.route('/categories/:categoryname/products/:productid').get(getSpecificProduct)

export default router