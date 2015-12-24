function destroyer( arr ) {
    var argument_list = Array.prototype.slice.call( arguments ).splice( 1 );
    return arr.filter( function( element ) { return -1 === argument_list.indexOf( element ); } );
}

destroyer( [1, 2, 3, 1, 2, 3], 2, 3 );