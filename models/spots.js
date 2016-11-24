'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('spots', {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price_per_day: {
      type: DataTypes.INTEGER,
    },
    street_number: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DOUBLE,
    },
    longitude: {
      type: DataTypes.DOUBLE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    photo: {
      type: DataTypes.STRING,
    },
    average_rating: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.users, {
          foreignKey: 'user_id',
          
          as: 'relusers',
        });
        
      }
    },
    tableName: 'spots',
    underscored: true,
    
  });

  return Model;
};

