var express = require('express');
var router = express.Router();

const axios = require('axios');


var key = "AIzaSyBBKbVpsJQrP1HSN04zi7lX1uhBahZE0FM";
var apiUrl = "https://www.googleapis.com/youtube/v3/search?&order=date&part=snippet"+'&key='+key;
var apiUrlPlayList = "https://www.googleapis.com/youtube/v3/playlists?part=id,snippet,contentDetails"+'&key='+key;
var apiSearchUrl = "https://www.googleapis.com/youtube/v3/search?part=id,snippet"+'&key='+key;

router.get('/getChannel', function(req, res, next) {
    if (req.query.channelId) {
        apiUrl = apiUrl + "&pageToken="+req.query.pageToken;
    }

    axios.get(apiUrl+'&maxResults='+req.query.maxResults+"&channelId="+req.query.channelId)
        .then(response => {
            res.json( response.data );
        })
        .catch(error => {
            res.json( error );
            console.log(error);
    });
});

router.get('/getPlaylist', function(req, res, next) {
    if (req.query.nextPageToken) {
        apiUrlPlayList = apiUrlPlayList + "&pageToken="+req.query.nextPageToken;
    }

    axios.get(apiUrlPlayList+'&maxResults='+req.query.maxResults+"&channelId="+req.query.channelId)
        .then(response => {
            res.json( response.data );
        })
        .catch(error => {
            res.json( error );
            console.log(error);
        });

});

router.get('/searchChannel', function(req, res, next) {
    axios.get(apiSearchUrl+'&maxResults='+req.query.maxResults+"&q="+ req.query.textSearch+"&type="+req.query.Type)
        .then(response => {
            res.json( response.data );
        })
        .catch(error => {
            res.json( error );
            console.log(error);
        });

});


module.exports = router;