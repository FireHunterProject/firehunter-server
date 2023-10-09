const express = require('express');
const { getPointsBasedOnLocation } = require('./getpoints');
const { save } = require('./pointsRepo');
const app = express()
const port = 3000

app.get('/points', (req, res) => {
    const points = getPointsBasedOnLocation(req.data.lat, req.data.long);
    res.send(points);
});

app.post('/points', (req, res) => {
    await save(req.data.point);
    res.send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})