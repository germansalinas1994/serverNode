'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // await queryInterface.addColumn('Producto', 'Id_Marca', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     // This is a reference to another model
    //     model: 'Marca',

    //     // This is the column name of the referenced model
    //     key: 'Id'

    //   }
    // });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // await queryInterface.removeColumn('Producto', 'Id_Marca');
  }
};
