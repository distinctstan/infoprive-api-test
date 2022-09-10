const userModel = require('../models/users')
const jwt = require('jsonwebtoken')

module.exports = {
    signup: async (req, res, next) => {
        try {

            const { username, password } = req.body
            
            const oldUser = await userModel.findOne({ 'username': username })
            
            if (oldUser) {
                return
            }

            const user = await userModel.create(req.body)

            if (user) {
                res.status(200).json({ 'message': 'user created successfully!', data: user })
            }
        } catch (error) {
            console.log('user not created..', error);
        }
    },

    login: async (req, res, next) => {
        try {

            const user = await userModel.create(req.body)

            if (user) {
                res.status(200).json({ 'message': 'user created successfully!', data: user })
            }
        } catch (error) {
            console.log('user not created..', error);
        }
    },
}