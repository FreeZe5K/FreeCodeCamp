function sumAll( arr ) {
    var _min = Math.min( arr[ 0 ], arr[ 1 ] );
    var _max = Math.max( arr[ 0 ], arr[ 1 ] );
    return ( (_max - _min ) + 1 ) * ( _min + _max ) / 2;
}

sumAll( [1, 4] );