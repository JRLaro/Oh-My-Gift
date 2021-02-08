var sequelize = new Sequelize('omg_db', 'root', 'rootroot', {
    host: "localhost", //your server
    port: 8080, //server port
    dialect: 'mysql'
  });

  module.exports = sequelize;