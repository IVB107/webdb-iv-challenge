const router = require('express').Router();

const Dishes = require('./dishes-model.js');

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.find()
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // get the dishes from the database
  try {
    const dish = await Dishes.getDish(req.params.id);
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const dish = await Dishes.addDish(req.body);
    res.status(201).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;