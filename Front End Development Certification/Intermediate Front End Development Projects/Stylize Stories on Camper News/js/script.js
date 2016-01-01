$( function( ) {
    $.get( 'http://www.freecodecamp.com/news/hot', function( posts ) {
        for( var post in posts ) {
            var styled_post = '<div class="col-md-6 col-md-offset-3">';
            styled_post += '<div class="pull-left"><blockquote><p>';
            styled_post += '<a href="' + posts[ post ].link + '" target="_blank">' + posts[ post ].headline + '</a>';
            styled_post += ' <span class="label label-success">' + posts[ post ].upVotes.length + ' UpVotes</span></p>';
            styled_post += '<footer>' + posts[ post ].author.username + '</footer>';
            styled_post += '</blockquote></div>';
            $( '.posts' ).append( styled_post );
        }
    } );
} );