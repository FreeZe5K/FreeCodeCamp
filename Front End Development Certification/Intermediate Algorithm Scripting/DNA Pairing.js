function pair( str ) {
    var arr = [ ];
    
    str = str.split( '' ).map( function( element ) {
        switch ( element ) {
        case 'G':
            arr.push( ['G', 'C'] );
            break;
        case 'C':
            arr.push( ['C', 'G'] );
            break;
        case 'A':
            arr.push( ['A', 'T'] );
            break;
        case 'T':
            arr.push( ['T', 'A'] );
            break;
        }
    } );

    return arr;
}

pair( 'GCG' );