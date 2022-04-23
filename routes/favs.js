const { create, getFavs, getFavId, deleteFavId } = require('../controllers/favs')
const favsRouter = require('express').Router()
const isAuthenticated = require('../middlewares/auth')

favsRouter.post('/', isAuthenticated, create)
favsRouter.get('/', isAuthenticated, getFavs)
favsRouter.get('/', isAuthenticated, getFavId)
favsRouter.delete('/', isAuthenticated,deleteFavId)

module.exports = favsRouter