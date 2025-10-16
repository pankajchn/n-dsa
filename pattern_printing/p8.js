


const n = 5;

for ( let i = 0; i <= n; i++ ) {
    let row = "";
    let swtch = 1;
    for ( let j = 0; j <= i; j++ ) {
        row = row + swtch;
        if ( swtch == 1) {
            swtch = 0
        } else {
            swtch = 1
        }
    }
    console.log(row);
}