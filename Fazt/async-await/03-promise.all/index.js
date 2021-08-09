const { taskOne, taskTwo } = require('./tasks');

const main = async () => {
    try{

        console.time('Measuring time');
        const results = await Promise.all([taskOne(), taskTwo()]);
        console.timeEnd('Measuring time');

        console.log(`Task One returned, ${ results[0] }`);
        console.log(`Task Two returned, ${ results[1] }`);
    }catch(e){
        console.log(e);
    }

}
main();