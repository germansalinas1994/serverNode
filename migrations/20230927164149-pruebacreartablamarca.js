'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // await queryInterface.createTable('Marca', {
    //   Id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    //   },
    //   Nombre: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    //   },
    //   Descripcion: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    //   },

    // },

    //   {
    //     freezeTableName: true,
    //     timestamps: false,
    //     tableName: 'Marca' //ACA PUEDO DEFINIR EL NOMBRE DE LA TABLA EN LA BASE DE DATOS

    //   });



  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // await queryInterface.dropTable('Marca');
  }
};
