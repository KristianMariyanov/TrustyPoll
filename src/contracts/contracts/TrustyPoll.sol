pragma solidity ^0.4.24;

contract SafeMath {
  function safeMul(uint a, uint b) internal pure returns (uint) {
    uint c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

  function safeSub(uint a, uint b) internal pure returns (uint) {
    assert(b <= a);
    return a - b;
  }

  function safeAdd(uint a, uint b) internal pure returns (uint) {
    uint c = a + b;
    assert(c>=a && c>=b);
    return c;
  }
}

contract TrustyPoll is SafeMath {
  address public admin; //the admin address
  address public feeAccount; //the account that will receive fees
  uint public fee;
  uint private optionsId;
  uint private pollId;

  constructor(address admin_, address feeAccount_, uint fee_) public {
    admin = admin_;
    feeAccount = feeAccount_;
    fee = fee_;
  }
  
  struct Poll {
      uint id,
      string title
    }

 struct Option {
      uint id,
      string title,
      string pollId
    }
    
    mapping(bytes32 => mapping(address, bytes32)) public votes; (poll -> (user -> option)
  
  modifier onlyAdmin() {
    require(msg.sender == admin);
    _;
  } 

  function changeAdmin(address admin_) onlyAdmin public {
    admin = admin_;
  }
  
  function changeFeeAccount(address feeAccount_) onlyAdmin public {
    feeAccount = feeAccount_;
  }  

  function changeFee(uint fee_) onlyAdmin public {
    require (fee_ < fee);
    fee = fee_;
  }
  
  function createPoll() {
      pollId++
      new Poll() {}
  }
}
