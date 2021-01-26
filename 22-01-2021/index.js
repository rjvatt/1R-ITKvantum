const express = require('express')
const app = express()
const port = 3000

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('please ddos grisha!')
})

app.get('/get', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    let ticket = getRandomInt(1000);

    res.send(JSON.stringify({
        'ticket': ticket.toString(),
        'status': 200
    }))
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})