function add( ) {
    var args = Array.prototype.slice.call( arguments );

    if( args.length !== 2 ) {
        if( typeof args[ 0 ] !== 'number' )
            return undefined;

        return function( num ) {
            if( typeof num !== 'number' )
              return undefined;

            return args[ 0 ] + num;
        };
    } else {
        if( typeof args[ 1 ] !== 'number' )
            return undefined;

        return args[ 0 ] + args[ 1 ];
    }
}

add( 2, 3 );