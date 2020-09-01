function truncate( str, num ) {
    return str.length > num ? str.substring( 0, num > 3 ? num - 3 : num ) + '...' : str;
}

truncate( 'A-tisket a-tasket A green and yellow basket', 11 );