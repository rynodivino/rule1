// Assumes costs are starting capital
module.exports = function(capital, sales, costs) { 
    return Math.floor(100 * (sales - costs)/capital); 
};
