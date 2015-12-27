function pairwise( arr, arg ) {
    var pairs = [ ];

    for( var element in arr ) {
        var temp_element = arr[ element ];

        for( var index = 1; index < arr.length; index++ ) {
            if( temp_element + arr[ index ] === arg && index > element && pairs.indexOf( +element ) === -1 && pairs.indexOf( +index ) === -1 ) {
                pairs.push( +element, +index );
                break;
            }
        }
    }

    return ( 1 <= pairs.length ) ? pairs.reduce( function( left, right ) { return left + right; } ) : 0;
}

pairwise( [1, 4, 2, 3, 0, 5], 7 );
