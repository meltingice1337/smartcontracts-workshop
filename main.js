import Web3 from 'web3';
import {
    soliditySha3
} from 'web3-utils';
const abi = require('./abi.json');

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

window.soliditySha3 = soliditySha3;
web3.eth.defaultAccount = web3.eth.accounts[0];
const GreeterContract = web3.eth.contract(abi);
// web3.eth.subscribe('pendingTransactions', function (error, result) {})
//     .on("data", function (trxData) {
//         web3.eth.getTransaction(trxData).then(console.log);
//     });
const Greeter = GreeterContract.at('0x66e4be6573ab28a60d6df109036596ef146ba099');

Greeter.runLottery.call((err, result) => {
    console.log(err, result.toNumber())
})
// Greeter.enterTicket(52, {
//     gas: 300000,
//     from: web3.eth.accounts[0],
//     value: web3.toWei(0.01, 'ether')
// }, (err, result) => {
//     console.log(err, result)
// })
// const event = Greeter.YasEmitted();
// event.watch((e, r) => {
//     console.log(e, r);
// })