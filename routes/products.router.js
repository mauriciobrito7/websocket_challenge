import { Router } from 'express'
const router = Router()
import { __dirname } from '../utils.js';
import ProductManager from '../models/productManager.js'

const productManager = new ProductManager(`${__dirname}/db/products.json`);

router.get('/', async (req, res) => {
  let products = await productManager.getProducts()
  res.json(products)
})

router.post('/', async(req, res) => {
  const body = req.body;

  const { title, description, price, thumbnail, code, stock } = body;
  const products = await productManager.addProduct(
    title,
    description,
    price,
    thumbnail,
    code,
    stock
  );

  if(products) {
    res.json({ message:'product added successfully', products});
  }
});

router.get('/realtimeproducts', async (req, res) => {
  let products = await productManager.getProducts()
  res.json(products)
})

router.post('/realtimeproducts', async(req, res) => {
  const body = req.body;

  const { title, description, price, thumbnail, code, stock } = body;
  const products = await productManager.addProduct(
    title,
    description,
    price,
    thumbnail,
    code,
    stock
  );

  res.redirect('/realtimeproducts')
});

export default router