'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('messages', {
    content: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
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
    tableName: 'messages',
    underscored: true,
    
  });

  return Model;
};

