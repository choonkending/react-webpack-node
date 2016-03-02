module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Topic', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    text: DataTypes.STRING,
    count: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    timestamps: false
  });
};
