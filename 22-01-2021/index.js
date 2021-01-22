const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('please ddos grisha!')
})

app.get('/grisha', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('DDOS GRISHA!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})