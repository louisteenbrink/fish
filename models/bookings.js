'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('bookings', {
    checkin: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    number_of_people: {
      type: DataTypes.INTEGER,
    },
    number_of_day: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.users, {
          foreignKey: 'user_id',
          
          as: 'relusers',
        });
        
        Model.belongsTo(models.spots, {
          foreignKey: 'spot_id',
          
          as: 'relspots',
        });
        
      }
    },
    tableName: 'bookings',
    underscored: true,
    
  });

  return Model;
};

