function rot13( encodedStr ) {
    var codeArr     = encodedStr.split( '' );
    var decodedArr  = [];

    codeArr.map( function( element ) {
        if( /[A-Za-z]/g.test( element ) )
            decodedArr.push( String.fromCharCode( element.charCodeAt( 0 ) + ( element.toUpperCase( ) <= 'M' ? 13 : -13 ) ) );
        else if( /[ \.\!\?\"\-]/g.test( element ) )
            decodedArr.push( element );
    } );

    return decodedArr.join( '' );
}

rot13( 'SERR PBQR PNZC' );