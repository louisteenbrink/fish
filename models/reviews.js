'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('reviews', {
    content: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    ownership: {
      type: DataTypes.BOOLEAN,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.bookings, {
          foreignKey: 'booking_id',
          
          as: 'relbookings',
        });
        
        Model.belongsTo(models.users, {
          foreignKey: 'user_id',
          
          as: 'relusers',
        });
        
      }
    },
    tableName: 'reviews',
    underscored: true,
    
  });

  return Model;
};

