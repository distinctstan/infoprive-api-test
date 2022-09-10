const articleModel = require('../models/articles')

module.exports = {
    create: async (req, res, next) => {
        try {
            const article = await articleModel.create(req.body)

            if (article) {
                res.status(200).json({ 'message': 'Article created successfully!', data: article})
            }
        } catch (error) {
            console.log('Article not created..', error);
        }
    },

    all: async (req, res, next) => {
        try {
            const allArticle = await articleModel.find()
            if (allArticle) {
                res.status('200').json({'message': 'Articles found!', data: allArticle})
            } else {
                res.status('404').json({ 'message': 'Articles not found!', data: null })
            }
        } catch (error) {
            console.log('Could not get articles..', error);
        }
    },

    single: async (req, res, next) => {
        try {
            const article = await articleModel.findById(req.params.id)
            if (article) {
                res.status('200').json({ 'message': 'Article found!', data: article })
            } else {
                res.status('404').json({ 'message': 'Article not found!', data: null })
            }
        } catch (error) {
            console.log('Could not get the article..', error);
        }
    },

    update: async (req, res, next) => {
        try {
            const article = await articleModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
            if (article) {
                res.status('200').json({ 'message': 'Article updated successfullt!', data: article })
            } else {
                res.status('404').json({ 'message': 'Article not updated!', data: null })
            }
        } catch (error) {
            console.log('Could not update the article..', error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const article = await articleModel.findByIdAndRemove(req.params.id)
            if (article) {
                res.status('200').json({ 'message': 'Article deleted successfullt!' })
            } else {
                res.status('404').json({ 'message': 'Article not deleted!'})
            }
        } catch (error) {
            console.log('Could not delete the article..', error);
        }
    }
}