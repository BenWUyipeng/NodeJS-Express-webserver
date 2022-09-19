const express = require('express')
const dayjs = require('dayjs')

const app = express()

app.use((req, res, next)=>{
    console.log(`${req.hostname}, ${req.path}`)
    next()
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', 'page')

app.get('/', (req, res)=>{
    let now = `${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`
    res.render('index', {courseName: 'NodeJS', time: now})
})

app.post('/', (req, res)=>{
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.password)
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.use((req, res)=>{
    res.status(404).render('404')
})

app.listen(3000)

