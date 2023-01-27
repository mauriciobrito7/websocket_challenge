import { Router } from 'express'
const router = Router()
import { __dirname } from '../utils.js';
import ProductManager from '../models/productManager.js'

const productManager = new ProductManager(`${__dirname}/db/products.json`);

router.get('/', async (req, res) => {
  let products = await productManager.getProducts()
  res.render('home', { products })
})

router.get('/realtimeproducts', async (req, res) => {
  let products = await productManager.getProducts()
  res.render('realTimeProducts', { products })
})

export default router