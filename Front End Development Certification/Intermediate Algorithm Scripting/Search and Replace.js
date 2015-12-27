function myReplace( str, before, after ) {
    if( str[ str.indexOf( before ) ] === str[ str.indexOf( before ) ].toUpperCase( ) )
        after = after.charAt( 0 ).toUpperCase( ) + after.slice( 1 );

    return str.replace( before, after );
}

myReplace( 'A quick brown fox jumped over the lazy dog', 'jumped', 'leaped' );