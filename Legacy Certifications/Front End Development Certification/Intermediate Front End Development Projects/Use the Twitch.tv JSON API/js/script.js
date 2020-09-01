$( function( ) {
    var _streamers = [ 
        { 'account': 'freecodecamp', 'streaming': false, 'status': 'Offline'  }, 
        { 'account': 'storbeck', 'streaming': false, 'status': 'Offline' },
        { 'account': 'terakilobyte', 'streaming': false, 'status': 'Offline' },
        { 'account': 'habathcx', 'streaming': false, 'status': 'Offline' },
        { 'account': 'RobotCaleb', 'streaming': false, 'status': 'Offline' },
        { 'account': 'thomasballinger', 'streaming': false, 'status': 'Offline' },
        { 'account': 'noobs2ninjas', 'streaming': false, 'status': 'Offline' }, 
        { 'account': 'beohoff', 'streaming': false, 'status': 'Offline' },
        { 'account': 'ducksauce', 'streaming': false, 'status': 'Offline' }
    ];

    _streamers.forEach( function( stream ) {
          $.getJSON( 'https://api.twitch.tv/kraken/streams/' + stream.account + '?callback=?', function( user_data ) {
              if( null !== user_data.stream ) {
                  stream.status     = user_data.stream.game;
                  stream.streaming  = true;
              }

              var formatted = '<li class="clearfix"><h3>';
              formatted     += '<i class="fa fa-wifi ' + ( stream.streaming ? 'green' : 'red' ) + '"></i> ';
              formatted     += stream.account + ' <span>' + stream.status + '</span></h3></li>';

              $( '.list-unstyled' ).append( formatted );
        } );
    } );
} );