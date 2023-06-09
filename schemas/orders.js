const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_required_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_shipped_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_freight: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    order_subtotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    order_total_qty: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    order_ship_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    order_ship_address: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    order_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    order_employee_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_ship_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shippers',
        key: 'ship_id'
      }
    },
    order_cust_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
