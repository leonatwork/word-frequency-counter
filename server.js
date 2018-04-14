const express = require('express');
var request = require('request');
var cheerio = require('cheerio');

const app = express();
const port = process.env.PORT || 5001;

// app.get('/h', (req, res) => {
//   res.send({ express: 'Hello World' });
// });
app.get('/scrape', function(req, res){

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
            var wordCounts = { };
			var words = str.split(/\s+/);

			for(var i = 0; i < words.length; i++){
    			wordCounts[words[i].toLowerCase()] = (wordCounts[words[i].toLowerCase()] || 0) + 1;
			}

			keysSorted = Object.keys(wordCounts).sort(function(a,b){return wordCounts[b]-wordCounts[a]});
             res.send({ express: keysSorted });
             for (var i = 0; i < 60; i++) {
               console.log(keysSorted[i],wordCounts[keysSorted[i]]);
             }

        }


    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
