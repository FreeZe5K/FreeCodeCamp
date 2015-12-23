function slasher( arr, howMany ) {
    return arr.splice( howMany, arr.length );
}

slasher( [1, 2, 3], 2 );