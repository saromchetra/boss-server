var express = require('express');
var router = express.Router();

const axios = require('axios');

var key = "AIzaSyBBKbVpsJQrP1HSN04zi7lX1uhBahZE0FM";
var apiUrl = "https://www.googleapis.com/youtube/v3/search?";

router.get('/getChannel', function(req, res, next) {
    axios.get(this.apiUrl+'maxResults='+req.query.maxResults+'&key='+key+"&order=date&part=snippet&channelId="+req.query.channelId)
        .then(response => {
            res.json( response.data );
        })
        .catch(error => {
            res.json( error );
            console.log(error);
        });
});


module.exports = router;