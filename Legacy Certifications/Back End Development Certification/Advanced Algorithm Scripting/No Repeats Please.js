function permAlone( str ) {
    var arr = str.split( '' ), perms = [ ];
    
    function perm( num ) {
        if( 1 === num )
            perms.push( arr.join( '' ) );
        else {
            for( var index = 0; index != num; ++index ) {
                var left = num % 2 ? 0 : index, right = num - 1;
                
                perm( right );
                arr[ right ] = [ arr[ left ], arr[ left ] = arr[ right ] ][ 0 ];
            }
        }
    }
    
    perm( arr.length );
    
    return perms.filter( function( str ) { return !str.match( /(.)\1+/g ); } ).length;
}

permAlone( 'aab' );