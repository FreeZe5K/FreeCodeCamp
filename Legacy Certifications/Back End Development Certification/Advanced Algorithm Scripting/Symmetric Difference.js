function sym( args ) {
    var arr = Array.prototype.slice.call( arguments );

    return arr.reduce( function( first, next ) {
        var one = first.filter( function( ele ) { return -1 === next.indexOf( ele ); } );
        var two = next.filter( function( ele ) { return -1 === first.indexOf( ele ); } );

        return one.concat( two );
    } ).reduce( function( left, right ) {
        if( left.indexOf( right ) < 0 )
            left.push( right );

        return left;
    }, [ ] );
}

sym( [ 1, 2, 3 ], [ 5, 2, 1, 4 ] );