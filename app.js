

var Crawler = require("crawler")
var url = require("url")
var fs = require("fs")
// 数据采集要求:最少5个分类,每个分类最少3页数据。需要书名、作者、发布时间、价格、出版社、图片、书籍详情链接

fs.writeFile('./data/data-language.json', '')
var c = new Crawler({
    maxConnection: 10,
    forceUTF8: true,
    incomingEncoding: 'gb2312',
    callback: function (error, result, $) {

        var arr = []
        var strData = fs.readFileSync('./data/data-language.json')
        if (strData != "") {
            arr = JSON.parse(strData)
        }
        $('.bang_list li').each(function (index, li) {
            var obj = {}

            var bookName = $($(li).find('.name a')[0]).text()
            var author = $($(li).find('.publisher_info a').first()).attr('title')
            var publishTime = $($(li).find('.publisher_info span')[0]).text()
            var publisher = $($(li).find('.publisher_info a').last()).text()
            var bookImg = $($(li).find('.pic img')[0]).attr('src')
            var bookDetail = $($(li).find('.pic a')[0]).attr('href')
            var price = $($(li).find('.price .price_n')).text()
            
            obj.bookName = bookName
            obj.author = author
            obj.publishTime = publishTime
            obj.publisher = publisher
            obj.bookImg = bookImg
            obj.bookDetail = bookDetail
            obj.price = price
            arr.push(obj)
        })
        console.log('总纪录数为：' + arr.length)
        fs.writeFileSync('./data/data-language.json', JSON.stringify(arr))
    }
})

var arrUrls = []
for (var i = 1; i < 4; i++) {
    if (i == 1) {
        arrUrls.push('http://bang.dangdang.com/books/newhotsales/01.45.00.00.00.00-recent7-0-0-2-'+ i)
    } else {
        arrUrls.push('http://bang.dangdang.com/books/newhotsales/01.45.00.00.00.00-recent7-0-0-2-'+ i)
    }
}
c.queue(arrUrls)


// new dataArt = getData('./data-art.json', 'http://bang.dangdang.com/books/newhotsales/01.07.00.00.00.00-recent7-0-0-2-')
// new dataCue = getData('./data-cue.json', 'http://bang.dangdang.com/books/newhotsales/01.09.00.00.00.00-recent7-0-0-2-')