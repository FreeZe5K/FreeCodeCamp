function fearNotLetter( str ) {
    for( var index = 0; index < str.length - 1; index++ )
        if( str.charCodeAt( index ) !== str.charCodeAt( index + 1 ) - 1 )
            return String.fromCharCode( str.charCodeAt( index ) + 1 );

    return undefined;
}

fearNotLetter( 'abce' );