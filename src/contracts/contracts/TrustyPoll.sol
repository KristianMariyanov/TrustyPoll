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

  function assert(bool assertion) internal pure {
    require(assertion);
  }
}

contract TrustyPoll is SafeMath {
  address public admin; //the admin address
  address public feeAccount; //the account that will receive fees
  uint public fee;

  function DexETH(address admin_, address feeAccount_, uint fee_) public {
    admin = admin_;
    feeAccount = feeAccount_;
    fee = fee_;
  }
  
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
}
