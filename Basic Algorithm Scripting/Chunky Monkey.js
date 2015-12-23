function chunk( arr, size ) {
    var container = [ ];

    while( arr.length > 0 )
        container.push( arr.splice( 0, size ) );

    return container;
}

chunk( ['a', 'b', 'c', 'd'], 2 );