function repeat( str, num ) {
    return num > 0 ? Array( num + 1 ).join( str ) : '';
}

repeat( 'abc', 3 );