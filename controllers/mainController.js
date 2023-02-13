const products = require('../data/products.json');
const categories = require('../data/categories.json');

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    Home:(req, res) => {
        return res.render('home',{
          title: 'Hyper Store | Home',
          products,
          toThousand
        })
      },
    Help:(req, res) => {
      return res.render('help',{
        title:'Help'
      })
    },
    p404:(req, res) => {
      return res.render('404')
    }
}