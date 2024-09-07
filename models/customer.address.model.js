module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cart_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        finished: {
            type: DataTypes.STRING,
            allowNull: false
        },
        payment_method_id: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        delivery_method_id: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        discount_coupon_id: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        status_id: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    
    

    return CustomerAddress;
};