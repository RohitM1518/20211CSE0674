import {Router} from 'express'
import { getProducts } from '../controllers/getProducts.controller.js'
const router = Router()
router.route('/companies/:companyname/categorie/:categoryname').get(getProducts)

export default router