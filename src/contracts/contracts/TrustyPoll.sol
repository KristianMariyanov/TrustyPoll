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
  uint private optionId;
  uint private pollId;

  constructor(address admin_, address feeAccount_, uint fee_) public {
    admin = admin_;
    feeAccount = feeAccount_;
    fee = fee_;
  }
  
  struct Poll {
      uint id;
      string title;
    }

 struct Option {
      uint id;
      string title;
      uint pollId;
    }
    
    mapping(uint => mapping(address => uint)) public votes; //(poll -> (user -> option)
    mapping(uint => mapping(uint => uint)) public pollVotesCount; //(poll -> (option -> votesCount)
    mapping(uint => Option[]) public pollOptions; //(poll -> (user -> option)
    mapping(uint => address) public pollAuthors; //(poll -> (user -> option)
    Poll[] public polls;
  
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
  
  function createPoll(string title) public {
      pollId++;
      polls.push(Poll(pollId, title));
      pollAuthors[pollId] = msg.sender;
  }
  
  function createOption(uint poll, string title) public {
      require(pollAuthors[poll] == msg.sender);
      optionId++;
      pollOptions[poll].push(Option(optionId, title, poll));
  }
  
  function vote (uint poll, uint option) public {
    require(pollAuthors[poll] != msg.sender); // authors cannot vote
    require(option > 0);
    require(poll > 0);
    
    // if user already vote, remove the old vote;
    if (votes[poll][msg.sender] != 0) {
        pollVotesCount[poll][votes[poll][msg.sender]]--;
    }
    
    pollVotesCount[poll][option]++;
    
    // override previous response
    votes[poll][msg.sender] = option;
  }
}
