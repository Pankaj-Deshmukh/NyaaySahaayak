// const express = require("express")
// const app = express()
// const path = require("path")
// const hbs = require("hbs")
// const tempelatePath = path.join(__dirname, './components/LoginPage.js')
// const collection =require('./mongo')
// const port = process.env.PORT || 3000
// app.use(express.json())

// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({ extended: true }));


// const publicPath = path.join(__dirname)
// console.log(publicPath);

// app.set('view engine', 'hbs')
// app.set('views', tempelatePath)
// app.use(express.static(publicPath))



// app.get('/', (req, res) => {
//     res.render('LoginPage.js')
// })
// app.get('/signup', (req, res) => {
//     res.render('signup')
// })
// app.post('/home_page', (req, res) => {
//     res.render('home_page')
// })

// app.post('/',(req, res) => {
    
//     const data ={
//         name: req.body.name,
//         password: req.body.password
//     }
//     collection.create(data);
    

//     res.render("login")
// }
// )




// app.listen(port, () => {
//     console.log('port connected');
// })