'use strict';


module.exports = function (sequelize, DataTypes) {
    let Omg = sequelize.define('Omg', {
        CrawlTimestamp: {
            type: DataTypes.STRING,
        },
        ProductUrl: {
            type: DataTypes.STRING,
        },
        ProductName: {
            type: DataTypes.STRING,
        },
        Description: {
            type: DataTypes.STRING,
        },
        ListPrice: {
            type: DataTypes.STRING,
        },
        SalePrice: {
            type: DataTypes.STRING,
        },
        ItemNumber: {
            type: DataTypes.STRING,
        },
        Gtin: {
            type: DataTypes.STRING,
        },
        PackageSize: {
            type: DataTypes.STRING,
        },
        Category: {
            type: DataTypes.STRING,
        },
        PostalCode: {
            type: DataTypes.STRING,
        },
        Available: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
          },
          updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
          }
    });
        
    return Omg;
}