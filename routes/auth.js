var express = require('express');
var router = express.Router();

const axios = require('axios');


var key = "AIzaSyBBKbVpsJQrP1HSN04zi7lX1uhBahZE0FM";
var apiUrl = "https://www.googleapis.com/youtube/v3/search?&order=date&part=snippet"+'&key='+key;
var apiUrlPlayList = "https://www.googleapis.com/youtube/v3/playlists?part=id,snippet,contentDetails"+'&key='+key;

router.get('/getChannel', function(req, res, next) {
    if (req.query.nextPageToken) {
        apiUrl = apiUrl + "&pageToken="+req.query.nextPageToken;
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


router.get('/getNextChannel', function(req, res, next) {
    axios.get(apiUrl+'&maxResults='+req.query.maxResults+"&channelId="+req.query.channelId+"&pageToken="+req.query.nextPageToken)
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

router.get('/getNextPlaylist', function(req, res, next) {
    axios.get(apiUrlPlayList+'&maxResults='+req.query.maxResults+"&channelId="+req.query.channelId+"&pageToken="+req.query.nextPageToken)
        .then(response => {
            res.json( response.data );
        })
        .catch(error => {
            res.json( error );
            console.log(error);
        });

});


module.exports = router;