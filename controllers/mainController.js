const products = require('../data/products.json')
const categories = require('../data/categories.json')

module.exports={
    Home:(req, res) => {
        return res.render('home',{
          title: 'Hyper Store | Home',
          products
        })
      },
    Help:(req, res) => {
      return res.render('help')
    },
    p404:(req, res) => {
      return res.render('404')
    }
}