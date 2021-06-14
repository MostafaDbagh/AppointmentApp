const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routes/route')
const path = require('path')
const Port = 4050 || process.env.PORT;

const db = require('./database/mongodb')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:'false'}))




app.use('/api',router)

if(process.env.NODE_ENV ==='production'){
   app.use(express.static('client/build'))
   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, './frontend', 'build', 'index.html'));
     });
}

app.listen(Port,()=>console.log('we Are listening to the Port '+Port))




