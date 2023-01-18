const {
    Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {

        }
    }
    Product.init({
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inventory: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: false
    });
    return Product;
}