let friend = "carolyn"

switch (friend){
    case 'tom':
        console.log('hey tom what up');
        break;
    case 'kenn':
        console.log('hey ken, what to play');
        break;
    case 'carolyn':
        console.log('hey carolyn, why you  leaving');
        break;
    default:
    console.log(`i am sorry, ${friend}, do i know you`);
}

// if you use the back ticks you can replace with the var 


let dessert = 'pie'

switch(dessert){
    case 'pie':
        console.log('pie, pie, me oh my');
        break;
    case 'cake':
        console.log('cake is great');
        break;
    case 'ice cream':
        console.log('i scream for ice cream');
        break;
    default: 
        console.log(`${dessert} not on the menu`);

}

let yep = 0;

switch (true){
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked here');
        break;
    default:
        console.log('didn\'t work');
}