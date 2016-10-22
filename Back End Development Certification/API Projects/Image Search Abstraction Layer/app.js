var express = require( 'express' );
var url     = require( 'url' );
var fs      = require( 'fs' );
var bing    = require( 'node-bing-api' )( { accKey : '' } );
var app     = express( );
var port    = process.env.PORT || 8080;

app.use( express.static( __dirname ) );
app.get( '/api/imagesearch/:text', function( req, res ) {
    var parseURL        = url.parse( req.url );
    var searchString    = parseURL.pathname.substring( 17 );
    var offset          = 0;
    
    if( parseURL.query.substring( 0,7 ) == 'offset=' && !isNaN( parseURL.query.substring( 7 ) ) ) {
        offset = parseInt( parseURL.query.substring( 7 ) );
    } else {
        if( parseURL.pathname.length == parseURL.path.length ) {
            offset = 0;
        } else {
            res.writeHead( 200, { 'Content-Type' : 'application/json' } );
            res.write( JSON.stringify( { 'error' : 'offset must is an integer' } ) );
            res.end( );
            return;
        }
    }
    
    searchString = searchString.replace( /%20/g, ' ' );
    
    bing.images( searchString, { skip : offset }, function( respon, body ) {
        var bod     = body.d.results;
        var result  = [ ];

        for( var i = 0; i < bod.length; i++ ) {
            var b = bod[ i ];
            var obj = {
                url         : b.MediaUrl,
                snippet     : b.Title,
                thumbnail   : b.Thumbnail.MediaUrl,
                context     : b.SourceUrl,
            }

            result.push( obj );
        }

        res.json( result );
        res.end( );
        return;
    } );
} );

app.get( '/latest/imagesearch/', function( req, res ) {
    fs.readFile( __dirname + '/search.json', function( data ) {
       var result = JSON.parse( data );
        res.json( result );
        res.end( );
    } );
} );

app.listen( port, function( ) {
    console.log( 'Node.js listening on port ' + port );
} );