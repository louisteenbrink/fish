'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
    },
    encrypted_password: {
      type: DataTypes.STRING,
    },
    reset_password_token: {
      type: DataTypes.STRING,
    },
    reset_password_sent_at: {
      type: DataTypes.DATE,
    },
    remember_created_at: {
      type: DataTypes.DATE,
    },
    sign_in_count: {
      type: DataTypes.INTEGER,
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    provider: {
      type: DataTypes.STRING,
    },
    uid: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    token_expiry: {
      type: DataTypes.DATE,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'users',
    underscored: true,
    
  });

  return Model;
};

