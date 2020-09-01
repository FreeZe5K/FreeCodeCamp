function convert( num ) {
    var output  = '';
    var roman   = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var arabic  = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    
    for( var index = 0; index < roman.length; index++ ) {
        while( num >= arabic[ index ] ) {
            output += roman[ index ];
            num -= arabic[ index ];
        }
    }
  
    return output;
}

convert( 36 );