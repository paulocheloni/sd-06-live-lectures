const createCampaignProduct = (sequelize, DataTypes) => {
  const CampaignProduct = sequelize.define('CampaignProduct', {}, { timestamps: false });

  CampaignProduct.associate = (models) => {
    models.Product.belongsToMany(models.Campaign, {
      as: 'campaigns',
      through: CampaignProduct,
      foreignKey: 'productId',
      otherKey: 'campaignId'
    });

    models.Campaign.belongsToMany(models.Product, {
      as: 'products',
      through: CampaignProduct,
      foreignKey: 'campaignId',
      otherKey: 'productId'
    });
  };

  return CampaignProduct;
};

module.exports = createCampaignProduct;