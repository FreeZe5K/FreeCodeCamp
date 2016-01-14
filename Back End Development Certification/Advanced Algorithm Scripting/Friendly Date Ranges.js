function friendly( str ) {
    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    var date_first = str[ 0 ].split( '-' ), date_second = str[ 1 ].split( '-' );

    date_first  = new Date( Date.UTC( date_first[ 0 ], date_first[ 1 ] - 1, date_first[ 2 ] ) );
    date_second = new Date( Date.UTC( date_second[ 0 ], date_second[ 1 ] - 1, date_second[ 2 ] ) );

    function ending( val ) {
        switch( val ) {
            case 1:
            case 21:
            case 31:
                return val + 'st';
            case 2:
            case 22:
                return val + 'nd';
            case 3:
            case 23:
                return val + 'rd';
            default:
                return val + 'th';
        }
    }
    
    if( 0 === date_second.getTime( ) - date_first.getTime( ) )
        return [ months[ date_first.getUTCMonth( ) ] + ' ' + ending( date_first.getUTCDate( ) ) + ', ' + date_first.getUTCFullYear( ) ];
    
    if( date_first.getUTCMonth( ) === date_second.getUTCMonth( ) )
        if( date_first.getUTCFullYear( ) === date_second.getUTCFullYear( ) )
            return [ months[ date_first.getUTCMonth( ) ] + ' ' + ending( date_first.getUTCDate( ) ), ending( date_second.getUTCDate( ) ) ];
    
    if( ( ( date_second.getUTCFullYear( ) * 12 + date_second.getUTCMonth( ) ) - ( date_first.getUTCFullYear( ) * 12 + date_first.getUTCMonth( ) ) ) < 12 )
        return [ months[ date_first.getUTCMonth( ) ] + ' ' + ending( date_first.getUTCDate( ) ), months[ date_second.getUTCMonth( ) ] + ' ' + ending( date_second.getUTCDate( ) ) ];
    
    return [ months[ date_first.getUTCMonth( ) ] + ' ' + ending( date_first.getUTCDate( ) ) + ', ' + date_first.getUTCFullYear( ), months[ date_second.getUTCMonth( ) ] + ' ' + ending( date_second.getUTCDate( ) ) + ', ' + date_second.getUTCFullYear( ) ];
}

friendly( [ '2015-07-01', '2015-07-04' ] );