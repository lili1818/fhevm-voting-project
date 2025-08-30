// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@fhenixprotocol/contracts/FHE.sol";

contract FHEVoting {
    mapping(address => euint32) private _votes;
    euint32 private _totalVotes;
    address private _owner;
    
    event VoteCast(address indexed voter);
    event ResultsRevealed(uint256 totalVotes);
    
    constructor() {
        _owner = msg.sender;
    }
    
    function castVote(euint32 encryptedVote) public {
        _votes[msg.sender] = encryptedVote;
        _totalVotes = FHE.add(_totalVotes, encryptedVote);
        emit VoteCast(msg.sender);
    }
    
    function getMyEncryptedVote() public view returns (euint32) {
        return _votes[msg.sender];
    }
    
    // 使用简单的所有权检查
    function revealResults() public {
        require(msg.sender == _owner, "Only owner can reveal results");
        
        uint256 decryptedTotal = FHE.decrypt(_totalVotes);
        emit ResultsRevealed(decryptedTotal);
    }
}