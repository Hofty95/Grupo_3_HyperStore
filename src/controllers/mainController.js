const db = require('../database/models');
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    Home:(req, res) => {

      db.Product.findAll()
        .then( (products)=>{
          return res.render('home',{
            title : 'Hyper Store | Home',
            products,
            toThousand
          })
        })
        .catch(error => console.log(error))
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