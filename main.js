import Web3 from 'web3';
import { soliditySha3 } from 'web3-utils';

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

console.log(soliditySha3(512, web3.eth.accounts[0]))
console.log(web3.eth.accounts[0]);
window.soliditySha3 = soliditySha3;
web3.eth.defaultAccount = web3.eth.accounts[0];
const GreeterContract = web3.eth.contract([{
    "constant": false,
    "inputs": [{
        "name": "number",
        "type": "uint16"
    }],
    "name": "buyTicket",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "int256"
    }, {
        "name": "",
        "type": "uint256"
    }],
    "name": "numbers",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "number",
        "type": "uint16"
    }],
    "name": "numberBoughtCount",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}]);
const Greeter = GreeterContract.at('0xd7944fc8e63aeb974d540b67211349c987d12f17');

Greeter.buyTicket(2, {
    gas: 300000,
    from: web3.eth.accounts[0],
    value: web3.toWei(0.1, 'ether')
}, (err, result) => {
    console.log(err, result)
})