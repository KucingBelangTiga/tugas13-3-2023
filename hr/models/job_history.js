const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_history', {
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'jobs',
        key: 'job_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    }
  }, {
    sequelize,
    tableName: 'job_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "history_and_start_date_pk",
        unique: true,
        fields: [
          { name: "employee_id" },
          { name: "start_date" },
        ]
      },
    ]
  });
};
