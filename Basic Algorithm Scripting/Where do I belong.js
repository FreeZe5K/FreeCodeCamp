function where( arr, num ) {
    arr.push( num );
    arr.sort( function( left, right ) { return left - right; } );
    return arr.indexOf( num );
}

where( [40, 60], 50 );