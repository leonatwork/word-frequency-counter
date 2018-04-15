const express = require('express');
var request = require('request');
var cheerio = require('cheerio');

const app = express();
const port = process.env.PORT || 5001;

// app.get('/h', (req, res) => {
//   res.send({ express: 'Hello World' });
// });
app.get('/h', function(req, res){

    url = 'http://terriblytinytales.com/test.txt';
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title;
            var json = { title : ""};
            $('body').filter(function(){
                var data = $(this);
                title = data.text();
                json.title = title;
            })
            var str = json.title;



             res.send({ express: str });
             

        }


    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
