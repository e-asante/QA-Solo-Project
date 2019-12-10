module.exports = (sequelize, DataTypes) => {
    return sequelize.define('item2', {
        name: {
            type: DataTypes.STRING
        }
    });
}
