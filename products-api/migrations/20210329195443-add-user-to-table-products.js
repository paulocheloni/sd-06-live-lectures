'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('products', 'userId', {
     type: Sequelize.INTEGER,
     allowNull: false,
     defaultValue: 1,
     references: {
       model: 'users',
       key: 'id'
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('products', 'userId');
  }
};
