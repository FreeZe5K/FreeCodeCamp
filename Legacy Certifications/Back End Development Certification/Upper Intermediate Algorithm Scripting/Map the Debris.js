function orbitalPeriod( arr ) {
    var GM          = 398600.4418;
    var earthRadius = 6367.4447;

    arr.map( function( element ) {
        arr[ arr.indexOf( element ) ].orbitalPeriod = Math.round( ( Math.PI * 2 ) * ( Math.sqrt( ( Math.pow( earthRadius + arr[ arr.indexOf( element ) ].avgAlt, 3 ) ) / GM ) ) );
      
        delete arr[ arr.indexOf( element ) ].avgAlt;
    } );

    return arr;
}

orbitalPeriod( [{name : "sputnik", avgAlt : 35873.5553}] );