'use strict';

var sequelize = new Sequelize('omg_db', 'root', 'rootroot', {
    host: "localhost", //your server
    port: 8080, //server port
    dialect: 'mysql'
  });

module.exports = function ( DataTypes) {
    let omg_db = sequelize.define('omg_db', {
        UniqId: {
            type: DataTypes.STRING,
        },
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

    }, {
        tableName: 'marketing_sample_for_walmart_com_product_details'
    });
    return omg_db;
}