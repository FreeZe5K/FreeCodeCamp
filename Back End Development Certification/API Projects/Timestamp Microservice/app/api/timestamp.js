var moment = require( 'moment' );

module.exports = function( app ) {
    app.get( '/:query', function( req, res ) {
        var date = req.params.query, unix = null, natural = null;

        if( +date >= 0 ) {
            unix    = +date;
            natural = unixToNat( unix );
        } 

        if( isNaN( +date ) && moment( date, 'MMMM D, YYYY' ).isValid( ) ) {
            unix    = natToUnix( date );
            natural = unixToNat( unix );
        }

        res.send( JSON.stringify( { 'unix': unix, 'natural': natural } ) );
    } );

    function natToUnix( date ) {
        return moment( date, 'MMMM D, YYYY' ).format( 'X' );
    }

    function unixToNat( unix ) {
        return moment.unix( unix ).format( 'MMMM D, YYYY' );
    }
};