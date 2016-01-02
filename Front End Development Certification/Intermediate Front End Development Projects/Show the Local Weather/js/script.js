$( function( ) {
    var _config = {
        app: '286600ce2f8db061bd86e878ac07e4d4',
        units: 'imperial'
    }, monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    $.getJSON( 'http://ip-api.com/json', function( locationData ) {
        $( '#city' ).html( locationData.city + ', ' + locationData.region );
        
        $.getJSON( 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + locationData.lat + '&lon=' + locationData.lon + '&appid=' + _config.app + '&units=' + _config.units, function( weatherData ) {
            var _dt = new Date( ), _unit = ( ( 'metric' === _config.units ) ? 'C' : 'F' ), _id = weatherData.weather[ 0 ].id, _icon = 'wi wi-day-sunny';
          
            if( _id >= 200 && _id < 300 )
                _icon = 'wi wi-day-thunderstorm';
            else if( _id >= 300 && _id < 400 )
                _icon = 'wi wi-day-sprinkle';
            else if( _id >= 500 && _id < 600 )
                _icon = 'wi wi-day-rain';
            else if( _id >= 600 && _id < 700 )
                _icon = 'wi wi-day-snow';
            else if( _id === 800 )
                _icon = 'wi wi-day-sunny';
            else if( _id > 800 && _id < 900 )
                _icon = 'wi wi-day-cloudy';
          
            $( '#desc' ).html( weatherData.weather[ 0 ].description );
            $( '#date' ).html( monthNames[ _dt.getMonth( ) ] + ' ' + _dt.getDate( ) + ', ' + _dt.getFullYear( ) );
            $( '#temp' ).html( '<strong>' + weatherData.main.temp + '</strong>' + '&deg;' + _unit + '&nbsp;<br /><br />' );
            $( '#highlow' ).html( '<strong>HIGH: </strong>' + weatherData.main.temp_max + '&deg;' + _unit + '&nbsp;|&nbsp;<strong>LOW: </strong>' + weatherData.main.temp_min + '&deg;' + _unit + '&nbsp;' );
            $( '#weather-icon' ).attr( 'class', _icon );
        } );
    } );
} );