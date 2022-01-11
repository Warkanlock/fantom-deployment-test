//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Cave {
    string private message;

    constructor(string memory _message) {
        message = _message;
    }

    function messageOnWalls() public view returns (string memory) {
        return message;
    }

    function setMessageInCave(string memory _message) public {
        message = _message;
    }
}
