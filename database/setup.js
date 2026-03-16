// Import Seqelize and dotenv
const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

// Step 6: Initialize Sequelize
const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/music_library.db',
    logging: console.log
});

// Step 7: Define Track Model
const Track = db.define('Book', {
    trackId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    songTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artistName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    albumName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER
    },
    releaseYear: {
        type: DataTypes.INTEGER
    }
});

// Step 8: Create Database and Tables
async function setupDatabase() {
    try {
        await db.authenticate();
        console.log('Connection to database established successfully.');

        await db.sync({ force: true });
        console.log('Database and tables created successfully.');

        await db.close();
    } catch (error) {
        console.error('Unable to connect or create database:', error);
    }
}

// Run if File Executed Directly
if (require.main === module) {
    setupDatabase();
}

// Export Database and Track Model for Other Files
module.exports = { db, Track};