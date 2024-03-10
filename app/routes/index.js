const express = require("express");
const router = express.Router();

// HTTP GET method
router.get("/", (req,res) => {
    res.status(200).json({
        message: "GET - api",
        metadata: {
            hostname: req.hostname, method: req.method,
        }
    })
});

// HTTP GET by Id method
router.get("/:id", (req,res) => {
    const { id }  = req.params;
    res.status(200).json({
        message: "GET by ID for /api",
        metadata: { hostname: req.hostname, id, method: req.method },
    });
});

// HTTP POST method
router.post("/", (req,res) => {
   const { data } = req.body;
   res.status(200).json({message: "POST to /api",
   data,
   metadata: {hostname: req.hostname, method: req.method },
});
});

// HTTP PATCH by Id method
router.patch("/:id", (req,res) => {
    const { id }  = req.params;
    res.status(200).json({
        message: "PATCH by ID for /api",
        metadata: { hostname: req.hostname, id, method: req.method },
    });
});

// HTTP DELETE by Id method
router.delete("/:id", (req,res) => {
    const { id }  = req.params;
    res.status(200).json({
        message: "DELETE by ID for /api",
        metadata: { hostname: req.hostname, id, method: req.method },
    });
});

module.exports = router;