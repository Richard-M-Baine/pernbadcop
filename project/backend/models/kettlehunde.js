module.exports = (sequelize, DataTypes) => {

const Kettlehundes = sequelize.define("Kettlehundes", {

id: {
    type: DataTypes.INTEGER,
    primaryKey: true
},
year: {
    type: DataTypes.INTEGER
},
department: {
    type: DataTypes.STRING
},
county: {
    type: DataTypes.STRING
},
title: {
    type: DataTypes.STRING
},
firstName: {
    type: DataTypes.STRING
},
lastName: {
    type: DataTypes.STRING
},
terminated: {
    type: DataTypes.STRING
},
demoted: {
    type: DataTypes.STRING
},
suspended: {
    type: DataTypes.STRING
},
suspendedDays: {
    type: DataTypes.INTEGER
},
reason: {
    type: DataTypes.STRING
},
description: {
    type: DataTypes.STRING
}


})


return Kettlehundes
}