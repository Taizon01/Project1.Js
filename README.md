# Solidity Project
This Solidity program is a simple token contract that demonstrates the basic syntax and functionality of the Solidity programming language in the context of a token economy. The purpose of this program is to serve as a starting point for those who are new to Solidity and want to get a feel for how it works in a real-world scenario.

# Description
This Solidity program is a simple token contract that demonstrates the basic syntax and functionality of the Solidity programming language in the context of a token economy. The contract defines a Token struct that contains a name, symbol, and totalSupply variable, as well as a balanceOf mapping that tracks the balance of each address. The contract also includes a transfer function that allows users to transfer tokens to other addresses. This program serves as a starting point for those who are new to Solidity and want to get a feel for how it works in a real-world scenario. By deploying this contract on the Ethereum blockchain, users can create and transfer tokens, demonstrating the basic functionality of Solidity and smart contracts in a token economy

# Getting Started 

## Executing Project
* To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at  https://remix.ethereum.org/.
  
* Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., SolidityProject.sol). Copy and paste the following code into the file
  
  '''
  
  // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract MyToken {
    
 // public variables here
    string public TokenName="Majo Coin";
    string public TokenAbbrv="MC";
    uint public TotalSupply=0;

    // mapping variable here
    mapping (address => uint) public balances;

    // mint function
    function mint(address _address, uint _value) public {
        TotalSupply += _value;
        balances[_address] += _value;
    }

    // burn function
    function burn(address _address, uint _value) public {
      if (balances[_address] >= _value) {
        TotalSupply -= _value;
        balances[_address] -= _value;
    }
}
}

  '''
  

## Assistant
You encounter any issues with my Solidity project, I kindly suggest visiting the following link: (https://academy.metacrafters.io/). There, you will have the opportunity to expand your knowledge on the subject matter.

## Author 
Taizon 
