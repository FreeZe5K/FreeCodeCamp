function where( collection, source ) {
    return collection.filter( function( obj ) {
        return Object.keys( source ).every( function( key ) {
            return source[ key ] === obj[ key ] && obj.hasOwnProperty( key );
        } );
    } );
}

where( [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" } );