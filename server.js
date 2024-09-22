const express= require('express')

var app = express()

app.use('/',function(req, res){
    res.send('hello world')
})
app.listen(3000)
console.log('server is running at port http://localhost:3000')