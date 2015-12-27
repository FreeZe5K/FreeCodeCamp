function drop( arr, func ) {
    while( true ) {
        if( 0 === arr.length)
            return arr;

        if( !func( arr[ 0 ] ) )
            arr.shift( );
        else
          return arr;
    }
}

drop( [1, 2, 3], function( n ) { return n < 3; } );