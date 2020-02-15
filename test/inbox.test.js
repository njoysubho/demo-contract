const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface,bytecode} = require('../compile');
beforeEach(async ()=>{
    // fetch accounts from ganache local accounts
    accounts = await web3.eth.getAccounts();
    demo = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['Hi there !']})
    .send({from:accounts[0],gas:'1000000'});
    // Use one of the accoubts to deploy the contract
});

describe('demo',()=>{
    it('deploys a contract',()=>{
        console.log(demo.options.address);
        assert.ok(demo.options.address);
    });

    it('has a default message',async ()=>{
        const message = await demo.methods.message().call();
        assert.equal(message,"Hi there !");
    });

    it('can change message',async ()=>{
        await demo.methods.setMessage("bye").send({from:accounts[0],gas:'1000000'});
        const message = await demo.methods.message().call();
        assert.equal(message,"bye");
        
    });
});