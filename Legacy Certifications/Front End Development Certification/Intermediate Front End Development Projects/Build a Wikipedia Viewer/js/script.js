$( function( ) {
    $( '.search-field' ).on( 'keyup', function( e ) { 
        if( $( '.search-field' ).val( ).length > 0 ) {
            $.ajax( {
                url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $( '.search-field' ).val( ),
                dataType: 'jsonp',
                type: 'post',
                headers: {
                    'Api-User-Agent': 'CodePen/1.0'
                },
                success: function( data ) {
                    var _search = data.query.search;
                  
                    for( var _item in _search ) {
                        var formatted = '<div class="well articles">';
                        formatted += '<a href="https://en.wikipedia.org/wiki/' + _search[ _item ].title + '" target="_blank""><h3>';
                        formatted += _search[ _item ].title + '</h3><p>' + _search[ _item ].snippet + '</p></a></div>';
                      
                        $( '.results' ).html( formatted );
                    }
                }
            } );
          
            $( '.results' ).show( );
        } else {
            $( '.results' ).html( '' );
            $( '.results' ).hide( );
        }
    } );
} );