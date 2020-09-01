var express     = require( 'express' );
var app         = express( );
var useragent   = require( 'express-useragent' );
var locale      = require( 'locale' );
var port        = process.env.PORT || 8080;

app.get( '/', function( req, res ) {
    res.sendfile( process.cwd( ) + '/public/index.html' );
} );

app.get( '/api/whoami', function( req, res ) {
    var json    = { 'ipaddress': null, 'language': null, 'software': null };
    var source  = req.headers[ 'user-agent' ], ua = useragent.parse( source );
    
    json.ipaddress  = req.connection.remoteAddress;
    json.language   = ( new locale.Locales( 'en_US' ) ).toString( );
    json.software   = ua.source.match( /\(([^)]+)\)/ )[ 1 ];
    
    res.send( json );
} );

app.listen( port, function( ) {
    console.log( 'Node.js listening on port ' + port );
} );