function mutation( arr ) {
    var word = arr[ 0 ].toLowerCase( ), letters = arr[ 1 ].toLowerCase( ), lettersfound = true;

    letters.split( '' ).map( function( index ) { 
        if( word.indexOf( index ) < 0 ) 
            lettersfound = false; 
    } );

    return lettersfound;
}

mutation( ['hello', 'hey'] );