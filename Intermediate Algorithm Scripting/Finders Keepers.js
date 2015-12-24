function find( arr, func ) {
    for( var index = 0; index < arr.length; index++ )
        if( func( arr[ index ] ) )
          return arr[ index ];
}

find( [1, 2, 3, 4], function( num ) { return num % 2 === 0; } );