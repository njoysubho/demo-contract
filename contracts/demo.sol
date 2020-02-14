pragma solidity ^0.4.17;

contract demo {
    string public message;

    function demo(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string inputMessage) public {
        message = inputMessage;
    }

}