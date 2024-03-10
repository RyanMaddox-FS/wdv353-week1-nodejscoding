const express = require("express");
const app = express();

const router = require('./routes');

// parsing json request
app.use(express.json());

// GET request checking if server is running
app.get("/", (req,res) => {
    res.status(200).json({
        message: "Service is up",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        }
    })
});

// route 
app.use("/api", router);

// error handling
app.use((req,res,next) => {
    const error = new Error("not found");
    error.status(404);
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
});

module.exports = app;
