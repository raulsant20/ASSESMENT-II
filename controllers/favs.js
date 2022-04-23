const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Fav = require('../models/Fav')
const mongoose = require('mongoose')

const create = async (req, res) => {
    const { name, favs } = req.body
    const email = req.email
    
    //function find a user
    try{
        const user = await User.findOne({email})
        //saved the docs
        const fav = new Fav({
            name,
            favs
        })
        const favSaved = await fav.save()
        const favId = favSaved._id
        const favArray = [...user.favsId, favId]
        const userUpdated = await User.findOneAndUpdate(
            { email },
            {favsId: favArray},
            {new: true}
        )
        res.status(200).json({
            "message": "Fav created",
            userUpdated,
            favSaved
        })
    } catch(e){
        res.status(500).send({
            "message": "Something wrong"
        })
    }

}

const getFavs = async (req, res) => {
    const email = req.email
    //look for email favorite list
    try{
        const user  = await User.findOne({email}).populate("favsId")
        res.status(203).json({
            "message": "Favs found",
            "favs": user.favsId
        })
    } catch(e){
        res.status(400).json({
            "message": "Fav not found"
        })
    }
}

const getFavId = async (req, res) => {
    const email = req.email
    const { id } = req.params
    //verify if id belongs to the user
    const user  = await User.findOne({email})
    const idList = user.favsId

    if(!idList.includes(id)){
        res.status(400).json({
            "message": "id doesn't belong to user",
        })
    } else{
        //looks for a list by id inside the email
        const Favs = await Fav.findById(id)
        res.status(200).json({
            "message": "Favs found by id with a correct user",
            Favs
        })
    }
}

const deleteFavId = async (req, res) => {
    const email = req.email
    const { id } = req.params
    //looks a list with the id inside the email and deletes
    const user  = await User.findOne({email})
    const idList = user.favsId

    if(!idList.includes(id)){
        res.status(400).json({
            "message": "id doesn't belong to user",
        })
    } else{
        //looks a list by id inside the email
        const Favs = await Fav.findByIdAndDelete(id)
        const favArray = idList.filter(x => x.toString() !== id)
        console.log(favArray)
        const userUpdated = await User.findOneAndUpdate(
            { email },
            {favsId: favArray},
            {new: true}
        )
        res.status(200).json({
            "message": "Favs deleted by id with a correct user",
            "Favs deleted": Favs
        })
    }
}

module.exports = {create, getFavs, getFavId, deleteFavId}