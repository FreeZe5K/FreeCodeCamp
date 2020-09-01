function palindrome( str ) {
    str = str.replace( /[_\W]/g, '' ).toLowerCase( );
    return str == str.split( '' ).reverse( ).join( '' );
}

palindrome( 'eye' );