
module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        address: DataTypes.STRING,
        currentValue: DataTypes.FLOAT,
        loanAmount: DataTypes.FLOAT,
        risk: DataTypes.FLOAT,
    });


    House.prototype.calculateRisk = function () {
        let risk = this.loanAmount / this.currentValue;
        if (risk > 0.5) {
            risk += 0.1;
        }
        this.risk = Math.min(risk, 1); // Ensure risk is between 0 and 1
    };

    return House;
};