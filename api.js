const Web3 = require('web3');
const w3 = new Web3('https://matic-mumbai.chainstacklabs.com');

const Time = require('./build/contracts/Time.json');
const address = '0x502F66d163a68d1Ce7A84194f1fcC79E7b94ACE0';
const abi = Time.abi;
const time = new w3.eth.Contract(abi, address);


async function get_BornTime() {
     console.log( 'Time of deployment: ' + await time.methods.bornDate().call());
}

async function get_secondsAgo() {
    console.log("Seconds after deployment: " + await time.methods.secondsAgo().call());
}

async function get_minutesAgo() {
    console.log("Minutes after deployment: " + await time.methods.minutesAgo().call());
}

async function get_hoursAgo() {
    let minutesPassed  = await time.methods.minutesAgo().call();
    console.log("Hours after deployment: " + minutesPassed / 60 );
}

async function get_daysAgo() {
    console.log("Days after deployment: " + await time.methods.daysAgo().call());
}


async function get_weeksAgo() {
    console.log("Weeks after deployment: " + await time.methods.weeksAgo().call());
}

async function get_monthsAgo() {
    console.log("Months after deployment: " + await time.methods.monthsAgo().call());
}

async function get_yearsAgo() {
    console.log("Years after deployment: " + await time.methods.yearsAgo().call());
}


async function main () {
    await get_BornTime()
    await get_secondsAgo()
    await get_minutesAgo()
    await get_hoursAgo()
    await get_daysAgo()
    await get_monthsAgo()
    await get_yearsAgo()
}

main()