const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
    '<mnemonic>',
    '<infura key>',
    1
);

const web3 = new Web3(provider);

const deploy = async()=>{

    const accounts = await web3.eth.getAccounts();
    console.log("All accounts",accounts);
    console.log("deploying from ",accounts[0]);
    
    const demo = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['Hi there !']})
    .send({from:accounts[0],gas:'1000000'});
    
    console.log("Deployed successfully with contract address "
    ,demo.options.address);
};

deploy();

