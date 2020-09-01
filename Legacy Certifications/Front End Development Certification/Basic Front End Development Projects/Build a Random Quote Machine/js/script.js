$( function( ) {
    var quotes = [
            { quote: '"You want weapons? We\'re in a library. Books are the best weapon in the world. This room\'s the greatest arsenal we could have. Arm yourself!"', author: 'The Doctor' },
            { quote: '"There\'s something that doesn\'t make sense. Let\'s go and poke it with a stick."', author: 'The Doctor' },
            { quote: '"We\'re all stories, in the end."', author: 'The Doctor' },
            { quote: '"Bow ties are cool."', author: 'The Doctor' },
            { quote: '"Come on, Rory! It isn\'t rocket science, it\'s just quantum physics!"', author: 'The Doctor' },
            { quote: '"Biting\'s excellent. It\'s like kissing - only there is a winner."', author: 'The Doctor' },
            { quote: '"You know, the very powerful and the very stupid have one thing in common: they don\'t alter their views to fit the facts; they alter the facts to fit their views."', author: 'The Doctor' },
            { quote: '"Big flashy things have my name written all over them. Well... not yet, give me time and a crayon."', author: 'The Doctor' },
            { quote: '"You should always waste time when you don\'t have any. Time is not the boss of you. Rule 408."', author: 'The Doctor' },
            { quote: '"Rule 1: The Doctor lies."', author: 'The Doctor' },
            { quote: '"You don\'t want to take over the universe. You wouldn\'t know what to do with it beyond shout at it."', author: 'The Doctor' },
            { quote: '"Never run when you\'re scared. Rule 7."', author: 'The Doctor' },
            { quote: '"Never knowingly be serious. Rule 27."', author: 'The Doctor' },
            { quote: '"See the bowtie? I wear it and I don\'t care. That\'s why it\'s cool."', author: 'The Doctor' },
            { quote: '"I am and always will be the optimist, the hoper of far-flung hopes and the dreamer of improblable dreams."', author: 'The Doctor' },
            { quote: '"I don\'t know. I can\'t tell the future I just work there."', author: 'The Doctor' }
        ];

    var selected_quote = Math.round( Math.random( ) * quotes.length - 1 );
  
    $( '.quote' ).html( quotes[ selected_quote ][ 'quote' ] );
    $( '.author' ).html( quotes[ selected_quote ][ 'author' ] );

    $( '.btn-generate' ).on( 'click', function( e ) {
        e.preventDefault( );

        selected_quote = Math.round( Math.random( ) * quotes.length - 1 );
      
        $( '.quote' ).html( quotes[ selected_quote ][ 'quote' ] );
        $( '.author' ).html( quotes[ selected_quote ][ 'author' ] );
        $( '.anchor-tweet' ).attr( 'href', 'https://twitter.com/intent/tweet?text=' + quotes[ selected_quote ][ 'quote' ] + ' -- ' + quotes[ selected_quote ][ 'author' ] );
    } );
} );