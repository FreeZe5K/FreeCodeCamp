function end( str, target ) {
    return -1 !== str.indexOf( target, str.length - target.length );
}

end( 'Bastian', 'n' );