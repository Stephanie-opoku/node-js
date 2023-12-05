// const { readFileSync } = require('fs')
// const fs = require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    // resquesting for the url at the front end side
    // console.log('url',req.url);

    // res.write('hello')
    // res.end()

// resquesting for the url at the front end side
    const url = req.url
    
    let page = ''
    switch(url){
        case '/':
            page = fs.readFileSync('index.html')
            break
        case '/about':
            page = fs.readFileSync('about.html')
            break
        case '/contact':
            page = fs.readFileSync('contact.html')
            break
    }
res.write(page)
res.end()
})

// IP, PORT
server.listen(1000, ()=>{
    console.log('server started on http://127.0.0.1:1000');
})