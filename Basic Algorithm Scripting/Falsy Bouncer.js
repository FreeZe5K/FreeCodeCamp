function bouncer( arr ) {
    return arr.filter( function( element ) { return Boolean( element ); } );
}

bouncer( [7, "ate", "", false, 9] );