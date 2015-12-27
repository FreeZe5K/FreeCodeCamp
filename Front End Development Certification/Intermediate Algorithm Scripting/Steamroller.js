function steamroller( arr ) {
    return arr.reduce( function( flat, toFlatten ) {
        return flat.concat( Array.isArray( toFlatten ) ? steamroller( toFlatten ) : toFlatten );
    }, [ ] );
}

steamroller( [1, [2], [3, [[4]]]] );