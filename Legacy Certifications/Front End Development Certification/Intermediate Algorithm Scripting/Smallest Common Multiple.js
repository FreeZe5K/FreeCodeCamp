function smallestCommons( arr ) {
    var lowest = arr[ 0 ], highest = arr[ 1 ], number = highest;
  
    if( lowest > highest )
        number = highest = [lowest, lowest = highest][ 0 ];
  
    while( true ) {
        var common = true;
      
        for( var index = lowest; index < highest; index++ )
            common = common && ( 0 === number % index );
      
        if( common )
            return number;
      
        number += highest;
    }
}

smallestCommons( [1,5] );