if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const connectionString = process.env.MONGO_CONNECTION_STRING
const databaseName = process.env.MONGO_DATABASE_NAME


const app = express()
app.listen(3000, function(){
    console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))

MongoClient.connect(connectionString, {
  useUnifiedTopology: true
}).then(client => {
    console.log('Connected to database')
    const db = client.db(databaseName)
    const quotesCollection = db.collection('quotes')
    
    app.get('/', (req, res) => {
        const cursor = quotesCollection.find().toArray().then(results => {res.render('index.ejs', {quotes: results})}).catch(error => console.error(error)) 
    })

    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body).then(result => {res.redirect('/')}).catch(error => console.log(error))

    app.put('/quotes', (req, res) => {
        console.log(req.body)
    })
})
}).catch(error => console.error(error))





