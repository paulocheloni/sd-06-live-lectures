const { Router } = require('express');

const router = Router();

const { Campaign, Product } = require('../models');

router.get('/', async (req, res) => {
  const campaigns = await Campaign.findAll()

  res.status(200).json(campaigns);
});

router.get('/:id', async (req, res) => {
  const campaign = await Campaign.findByPk(req.params.id, {
    include: { model: Product, as: 'products', through: { attributes: [] } }
  })

  res.status(200).json(campaign);
});

router.post('/', async (req, res) => {
  const { name, startAt, endAt } = req.body;

  const campaign = await Campaign.create({ name, startAt, endAt})

  res.status(200).json(campaign);
});

router.post('/:id/add-product', async (req, res) => {
  const campaign = await Campaign.findByPk(req.params.id)

  const { productId } = req.body;
  
  const product = await Product.findByPk(productId);

  await campaign.addProduct(product);


  res.status(200).json({ ok: true });
});

router.post('/:id/add-products', async (req, res) => {
  const campaign = await Campaign.findByPk(req.params.id);

  const { productId } = req.body;

  const product = await Product.findByPk(productId);

  await campaign.addProduct(product);

  res.status(200).json({ok: true});
});

module.exports = router;