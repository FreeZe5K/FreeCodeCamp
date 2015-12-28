function every( collection, pre ) {
    return collection.every( function( ele ) { return Boolean( ele[ pre ] ) && ele.hasOwnProperty( pre ); } );
}

every( [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex" );