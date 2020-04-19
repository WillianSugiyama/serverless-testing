const AccessGroupId = (sequelize, DataTypes) => {
  const accessGroup = sequelize.define('accessGroups', {
    id: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {});

  accessGroup.associate = (models) => {};

  return accessGroup;
};

export default AccessGroup;