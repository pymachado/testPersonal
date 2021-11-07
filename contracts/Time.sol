// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @author Pedro Machado
 * @title Time
 * @notice You can see how long have been passed in different time scales after deploy the current contract
 * @custom:address Mumbai 0x502F66d163a68d1Ce7A84194f1fcC79E7b94ACE0
*/

contract Time {
    
    uint256 public bornDate;
    
    constructor() {
        bornDate = block.timestamp;
    }
    
    function secondsAgo() view public returns(uint256) {
        return (block.timestamp - bornDate) / 1 seconds;
    }
    
    function minutesAgo() view public returns(uint256) {
        return (block.timestamp - bornDate) / 1 minutes;
    }
    
    function daysAgo() view public returns(uint256) {
        return (block.timestamp - bornDate) / 1 days;
    }
    
    function weeksAgo() view public returns(uint256) {
        return (block.timestamp - bornDate) / 1 weeks;
    }

    function monthsAgo() view public returns(uint256) {
      require(weeksAgo() % 4 == 0, "Error");
      return weeksAgo() / 4;
    }

    function yearsAgo() view public returns(uint256) {
      require(monthsAgo() % 12 == 0, "Error");
      return monthsAgo() / 12;
    }
            
}