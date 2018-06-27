import Web3 from 'web3';
import {
    soliditySha3
} from 'web3-utils';

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

window.soliditySha3 = soliditySha3;
web3.eth.defaultAccount = web3.eth.accounts[0];
const GreeterContract = web3.eth.contract([{
        "constant": false,
        "inputs": [{
            "name": "ticketNumber",
            "type": "uint256"
        }],
        "name": "enterTicket",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "k",
            "type": "uint256"
        }],
        "name": "test",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "number",
            "type": "uint256"
        }],
        "name": "yas",
        "outputs": [{
            "name": "",
            "type": "bytes32"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "hash",
            "type": "bytes32"
        }],
        "name": "YasEmitted",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "tArr",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "test2",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ticketNumberToPlayers",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]);
const Greeter = GreeterContract.at('0xa25498a51f770708d6697951630732354907e2a7');

Greeter.enterTicket(52, {
    gas: 300000,
    from: web3.eth.accounts[0],
    value: web3.toWei(0.01, 'ether')
}, (err, result) => {
    console.log(err, result)
})

// const event = Greeter.YasEmitted();
// event.watch((e, r) => {
//     console.log(e, r);
// })