module.exports = {
    getRandomDiscount : function(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.round(randomNum / 5) * 5;
  } 
}
