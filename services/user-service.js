const Sequelize = require('sequelize'),
      sequelize = new Sequelize({
        host    : 'localhost',
        port    : 3307,
        database: 'vting',
        username: 'root',
        password: 'demopass'
      });

const Constellation = sequelize.define('Constellation', {
  id         : {type: Sequelize.INTEGER, primaryKey: true},
  name       : Sequelize.STRING,
  egname     : Sequelize.STRING,
  starttime  : Sequelize.INTEGER,
  endtime    : Sequelize.INTEGER,
  description: Sequelize.STRING
}, {
  timestamps     : false,
  freezeTableName: true,
  tableName      : 'tb_constellation'
});

module.exports = {
  getById: async() => {
    return await Constellation.findAll({limit: 20});
  }
};