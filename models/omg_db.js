'use strict';

module.exports = function(sequelize, DataTypes){
    let omg_db = sequelize.define('omg_db', {
        UniqId: DataTypes.STRING,
        CrawlTimestamp: DataTypes.STRING,
        ProductUrl: DataTypes.STRING,
        ProductName: DataTypes.STRING,
        Description: DataTypes.STRING,
        ListPrice: DataTypes.STRING,
        SalePrice: DataTypes.STRING,
        ItemNumber: DataTypes.STRING,
        Gtin: DataTypes.STRING,
        PackageSize: DataTypes.STRING,
        Category: DataTypes.STRING,
        PostalCode: DataTypes.STRING,
        Available: DataTypes.STRING,

    }, {
        classMethods: {
            associate: function(models){

            }
        }
    });
    return omg_db;
}