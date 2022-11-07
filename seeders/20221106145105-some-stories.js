"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stories", [
      {
        name: "Banana-apple-cucumber",
        content: "How to make a banana-apple-cucumber smoothie",
        imageUrl:
          "https://www.cathysglutenfree.com/wp-content/uploads/2021/11/green-apple-smoothie-f-720x720.jpg",
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Banana milkshake",
        content: "Just add some milk, blend and you're done",
        imageUrl:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/banana-milkshake-9c56237.jpg",
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diana beach coconuts",
        content:
          "The best place in the world for coconuts, kitesuring and relaxing",
        imageUrl:
          "https://cf.bstatic.com/xdata/images/hotel/max500/261233046.jpg?k=0b6e38a0f75c291d976bcbd7bf5a7518debcdc9726cf180ce23089af7a3a9143&o=&hp=1",
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "drinking from the coconut",
        content: "How to make a coconut ready for drinking",
        imageUrl:
          "https://truffle-assets.imgix.net/b520d44c-411-coconutpineapplefloats-dishland1.jpg",
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
