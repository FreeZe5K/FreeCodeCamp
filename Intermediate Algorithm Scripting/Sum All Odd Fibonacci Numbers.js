function sumFibs( num ) {
    var _prev = 0, _curr = 1, _next = 0, _res = 0;

    while( _curr <= num ) {
        if( 0 !== _curr % 2 )
            _res += _curr;

        _next = _curr + _prev;
        _prev = _curr;
        _curr = _next;
    }

    return _res;
}

sumFibs( 4 );