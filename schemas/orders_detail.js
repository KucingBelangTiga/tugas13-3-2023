const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders_detail', {
    ordet_order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    ordet_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'prod_id'
      }
    },
    ordet_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    ordet_quantity: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ordet_discount: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders_detail',
    schema: 'sales',
    timestamps: false
  });
};
