function diff( arr1, arr2 ) {
    var all_elements = arr1.concat( arr2 );
  
    return all_elements.filter( function( element ) { 
        return -1 == arr1.indexOf( element ) || -1 == arr2.indexOf( element ); 
    });
}

diff( [1, 2, 3, 5], [1, 2, 3, 4, 5] );