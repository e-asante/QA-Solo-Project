module.exports = (sequelize, DataTypes) => {
    return sequelize.define('recommendations', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });
}
