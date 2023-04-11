console.log( 'js' );

let bagel = [ 'bacon', 'lettuce', 'tomato' ];

let deck = [ '2C', '4S', '5D', 'KD', '7H', 'AC' ];

let index = 0;
const max = 10;


// while loop
while ( index < max ){
    console.log( 'in while loop. index:', index )
    index++; // incrementing so index will eventually reach max, keeps from infinite loop
} // end while
console.log( 'index after while loop:', index )

//for loop
for( let i=0; i<max; i++ ){
    console.log( 'in for loop. i:', i );
} //end for


let hand = [ 'Q', '3', 'J', '9', '6', 'K', 'A' ]

for( let i=0; i<hand.length; i++ ){
    console.log( 'for loop', hand[ i ] );
    if( hand[ i ] === '9' ){  // if index = 9, logs out match
        console.log( 'Match!' );
    }
}

// for in loop
for( i in hand ){
    console.log( 'for in loop', hand[ i ] );
    if( hand[ i ] === '9' ){
        console.log( 'Match!' ); 
    }
}

// for of loop
for( card of hand ){
    console.log( 'for of loop', card );
    if( card === '9' ){
        console.log( 'Match!' );
    }
}