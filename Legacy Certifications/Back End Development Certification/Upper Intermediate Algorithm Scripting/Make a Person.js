var Person = function( firstAndLast ) {
    var _name           = firstAndLast.split( ' ' );
    
    this.getFirstName   = function( ) { return _name[ 0 ]; };
    this.setFirstName   = function( name ) { _name[ 0 ] = name; };
    
    this.getLastName    = function( ) { return _name[ 1 ]; };
    this.setLastName    = function( name ) { _name[ 1 ] = name; };
    
    this.getFullName    = function( ) { return _name.join( ' ' ); };
    this.setFullName    = function( name ) { _name = name.split( ' ' ); };
};

var bob = new Person( 'Bob Ross' );
bob.getFullName( );