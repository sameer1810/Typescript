const read = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout,
});

read.question('What do you prefer?', preference => {
    console.log(`Your preference is $(preference}`);
    read.close();
});