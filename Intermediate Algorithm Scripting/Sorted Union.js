function unite( arr1, arr2, arr3 ) {
    var arr = [ ];

    for( var index = 0; index < arguments.length; index++ )
        for( var subindex = 0; subindex < arguments[ index ].length; subindex++ )
            arr.push( arguments[ index ][ subindex ] );

    return arr.filter( function( number, position ) { return arr.indexOf( number ) === position; } );
}

unite( [1, 3, 2], [5, 2, 1, 4], [2, 1] );