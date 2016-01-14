var express     = require( 'express' );
var app         = express( );
var port        = process.env.PORT || 8080;
var urls        = [ ];

app.get( '/', function( req, res ) {
    res.sendfile( process.cwd( ) + '/public/index.html' );
} );

app.get( /\/new\/(http|https):\/\//, function( req, res ) {
    var url     = req.url.substr( 5 );
    var json    = { 'original_url': url, 'short_url': 'https://url-shortener-microservice-freeze5k.c9users.io/' + urls.length };

    if( urls.indexOf( url ) ) {
        urls.push( url );
        res.send( json );
    }

    res.send( 'That URL already exists' );
} );

app.get( /^\/\d+$/, function( req, res ) {
    res.redirect( urls[ req.url.substr( 1 ) ] );
} );

app.listen( port, function( ) {
    console.log( 'Node.js listening on port ' + port );
} );