const { v4: uuidv4 } = require('uuid');
const express = require("express");
const router = express.Router();

const dbzChar = [];

// HTTP GET method
router.get("/", (req,res) => {
    res.status(200).json({
        message: "GET - api",
        data: dbzChar,
        metadata: {
            hostname: req.hostname, method: req.method,
        }
    })
});

// HTTP GET by Id method
router.get("/:id", (req,res) => {
    const { id }  = req.params;
    const item = dbzChar.find(item => item.id === id);
    if(item) {
    res.status(200).json({
            message: "GET by ID for /api",
            data: item,
            metadata: { hostname: req.hostname, method: req.method },
        });
    }
});

// HTTP POST method
router.post("/", (req,res) => {
   const { data } = req.body;
   dbzChar.push({
    id: uuidv4(),
    ...data
   })
   res.status(201).json({message: "POST to /api",
   data: dbzChar[dbzChar.length-1],
   metadata: {hostname: req.hostname, method: req.method },
});
});

// HTTP PATCH by Id method
router.patch("/:id", (req,res) => {
    const { id }  = req.params;
    const{data} = req.body;
    const idx = dbzChar.findIndex(item => item.id ===id);
    dbzChar.push({id,...data});
    if(idx !== 1){
        dbzChar[idx] = data;
     res.status(200).json({
            message: "PATCH by ID for /api",
            data,
            metadata: { hostname: req.hostname, method: req.method },
        });
    }
});

// HTTP DELETE by Id method
router.delete("/:id", (req,res) => {
    const { id }  = req.params;
    dbzChar = dbzChar.filter(item => item.id !== id);
    res.status(204).json({
        message: "DELETE by ID for /api",
        metadata: { hostname: req.hostname, method: req.method },
    });
});

module.exports = router;