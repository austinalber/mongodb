// Dependencies
const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const mongoose = require("mongoose");

// Run app
startApp();

// Functions
function startApp() {
    // Start app by connecting to mongoose
    var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

    mongoose.connect(MONGODB_URI);
    // On page load: run axios news grab
    // Following the grab, save information in db
    axiosGrab().then(saveArticle());
}

function axiosGrab() {
    
}

function saveArticle() {
    // After axiosGrab(), save article information into db and log saved info

}

