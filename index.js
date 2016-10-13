const express = require('express')
const app = express()

// 引入文件系统模块
var fs = require('fs')
fs.writeFileSync('./data/index.json','')

var bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extend: false}))
app.use(bodyParser.json())


var template = require('art-template')
template.config('base','')
template.config('extname','.html')
app.engine('.html',template.__express)
app.set('view engine','html')
app.set('views','./views')

// 设置静态目录路径
app.use(express.static('./public'))


app.get('/api/get_artlist',function(req,res){
    // 输出一个json数据
    fs.readFile('./data/data-art.json', (err, data)=>{
        if(err){
            console.log(err)
            res.json({
                status:"n",
                msg:"获取数据失败",
                data:""
            })
        } else {
            res.json({
                status:"y",
                msg:"获取数据成功",
                data:JSON.parse(data)
            })

        }
    })
})


app.get('/api/get_childlist',function(req,res){
    // 输出一个json数据
    fs.readFile('./data/data-child.json', (err, data)=>{
        if(err){
            console.log(err)
            res.json({
                status:"n",
                msg:"获取数据失败",
                data:""
            })
        } else {
            res.json({
                status:"y",
                msg:"获取数据成功",
                data:JSON.parse(data)
            })

        }
    })
})

app.get('/api/get_comiclist',function(req,res){
    // 输出一个json数据
    fs.readFile('./data/data-comic.json', (err, data)=>{
        if(err){
            console.log(err)
            res.json({
                status:"n",
                msg:"获取数据失败",
                data:""
            })
        } else {
            res.json({
                status:"y",
                msg:"获取数据成功",
                data:JSON.parse(data)
            })

        }
    })
})

app.get('/api/get_historylist',function(req,res){
    // 输出一个json数据
    fs.readFile('./data/data-history.json', (err, data)=>{
        if(err){
            console.log(err)
            res.json({
                status:"n",
                msg:"获取数据失败",
                data:""
            })
        } else {
            res.json({
                status:"y",
                msg:"获取数据成功",
                data:JSON.parse(data)
            })

        }
    })
})

app.get('/api/get_languagelist',function(req,res){
    // 输出一个json数据
    fs.readFile('./data/data-language.json', (err, data)=>{
        if(err){
            console.log(err)
            res.json({
                status:"n",
                msg:"获取数据失败",
                data:""
            })
        } else {          
            res.json({
                status:"y",
                msg:"获取数据成功",
                data:JSON.parse(data)
            })

        }
    })
})




app.listen(3000,()=>{

    
    console.log('服务器运行于3000端口...')


})