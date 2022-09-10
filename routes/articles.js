const express = require('express')
const articleController = require('../controllers/articles')

const router = express.Router()

router.post('/', articleController.create)

router.get('/', articleController.all)

router.get('/:article', articleController.single)

router.put('/:article', articleController.update)

router.delete('/:article', articleController.delete)

module.exports = router