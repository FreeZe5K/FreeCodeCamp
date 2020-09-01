function inventory( arr1, arr2 ) {
    var stock = { }, arr = [ ];
    
    arr1.forEach( function( element ) { stock[ element[ 1 ] ] = element[ 0 ] || 0; } );
    
    arr2.forEach( function( element ) {
        if( !stock[ element[ 1 ] ] )
            stock[ element[ 1 ] ] = 0;
        
        stock[ element[ 1 ] ] += element[ 0 ];
    } );
    
    Object.keys( stock ).forEach( function( element ) { arr.push( [ stock[ element ], element ] ); } );
    
    return arr.sort( function( left, right ) {
        return ( ( left[ 1 ] < right[ 1 ] ) ? -1 : ( left[ 1 ] > right[ 1 ] ? 1 : 0 ) );
    } );
}

// Example inventory lists
var curInv = [
    [ 21, 'Bowling Ball' ],
    [ 2, 'Dirty Sock' ],
    [ 1, 'Hair Pin' ],
    [ 5, 'Microphone' ]
];

var newInv = [
    [ 2, 'Hair Pin' ],
    [ 3, 'Half-Eaten Apple' ],
    [ 67, 'Bowling Ball' ],
    [ 7, 'Toothpaste' ]
];

inventory( curInv, newInv );