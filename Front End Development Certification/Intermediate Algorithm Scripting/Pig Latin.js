function translate( str ) {
    var pattern = /[aeiou]/gi, indice = str.indexOf( str.match( pattern )[ 0 ]  );
    return ( str[ 0 ].match( pattern ) ) ? ( str + 'way' ) : ( str.substr( indice ) + str.substr( 0, indice ) + 'ay' );
}

translate( 'consonant' );