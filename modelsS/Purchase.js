const {
    Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Purchase extends Model {
        static associate(models) {
            Purchase.belongsTo(models.Product, {
                foreignKey: "productId",
                as: "product",
            });
        }
    }
    Purchase.init({
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        invoiceNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: "Purchase",
        tableName: "purchases",
        timestamps: false
    });
    return Purchase;
}