function findLongestWord( str ) {
    return str.split( ' ' ).reduce( function( left, right ) { return ( left.length > right.length ) ? left : right; } ).length;
}

findLongestWord( 'The quick brown fox jumped over the lazy dog' );