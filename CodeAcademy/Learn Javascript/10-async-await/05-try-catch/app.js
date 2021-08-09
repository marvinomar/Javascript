const cookBeanSouffle = require('./library.js');

// Write your code below:


const hostDinnerParty = async () => {
  try{
    let value =  await cookBeanSouffle();
    console.log(`${ value } is served!` );
  }catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();
