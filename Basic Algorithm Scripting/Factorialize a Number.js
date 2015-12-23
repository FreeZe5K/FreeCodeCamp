function factorialize( num ) {
    return ( 0 === num ) ? 1 : ( num * factorialize( num - 1 ) );
}

factorialize( 5 );