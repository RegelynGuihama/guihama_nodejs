const http = require('http')
const port = 4001

const server = http.createServer(function(req,res)
    {
        res.write('Hello World!')
        res.end()
    })

    server.listen(port, function(error)
    {
        if (error){
            console.log('Something went wrong', error)
        }
        else{
            console.log('Server is listening to port', + port)
        }

    })