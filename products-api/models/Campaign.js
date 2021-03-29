const createCampaign = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    name:DataTypes.STRING,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
  });

  return Campaign;
};

module.exports = createCampaign;