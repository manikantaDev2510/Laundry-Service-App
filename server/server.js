const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get all vendors
app.get('/vendors', (req, res) => {
    db.query('SELECT * FROM vendors', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Search vendors by location
app.get('/vendors/location/:city', (req, res) => {
    const city = req.params.city;
    db.query('SELECT * FROM vendors WHERE location = ?', [city], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Search vendors by service
app.get('/vendors/service/:service', (req, res) => {
    const service = req.params.service;
    db.query(
        'SELECT v.* FROM vendors v JOIN services s ON v.id = s.vendor_id WHERE s.service_name = ?',
        [service],
        (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        }
    );
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
