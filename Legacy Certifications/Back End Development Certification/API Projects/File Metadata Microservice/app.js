var express     = require( 'express' );
var app         = express( );
var port        = process.env.PORT || 8080;
var multer      = require( 'multer' );
var upload      = multer( { dest: 'uploads/' } );

app.use( '/', express.static( 'public' ) );

app.post( '/get-file-size', upload.single( 'file' ), ( req, res ) => {
  res.writeHead( 200, { 'Content-Type': 'text/json' } );
  res.end( JSON.stringify( { size: req.file.size } ) );
} );

app.listen( port, function( ) {
    console.log( 'Node.js listening on port ' + port );
} );