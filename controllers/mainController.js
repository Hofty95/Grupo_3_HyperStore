module.exports={
    Home:(req, res) => {
        return res.render('home')
      },
    Help:(req, res) => {
      return res.render('help')
    },
    p404:(req, res) => {
      return res.render('404')
    }
}