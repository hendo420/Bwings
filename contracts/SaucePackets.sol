pragma solidity ^0.7.4;
//"SPDX-License-Identifier: UNLICENSED" 

library AddressUtils {
    function isContract(address addr) internal view returns (bool) {
        // for accounts without code, i.e. `keccak256('')`:
        bytes32 accountHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;

        bytes32 codehash;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            codehash := extcodehash(addr)
        }
        return (codehash != 0x0 && codehash != accountHash);
    }
}

library SafeMath {
    /**
    * @dev Multiplies two numbers, throws on overflow.
    */
    function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
        // Gas optimization: this is cheaper than asserting 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }

        c = a * b;
        assert(c / a == b);
        return c;
    }

    /**
    * @dev Integer division of two numbers, truncating the quotient.
    */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        // uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return a / b;
    }

    /**
    * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
    */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    /**
    * @dev Adds two numbers, throws on overflow.
    */
    function add(uint256 a, uint256 b) internal pure returns (uint256 c) {
        c = a + b;
        assert(c >= a);
        return c;
    }
}

contract saucePackets {
    
    using AddressUtils for address;
    using SafeMath for uint256;
    
    address dev = 0x00dFA7af339771dc58d9b2975f45D54f563F2Da0;
    address dipper = 0x00dFA7af339771dc58d9b2975f45D54f563F2Da0;
    
    mapping (address => uint256) public ownershipTokenCount;
    mapping (uint256 => address) public tokenIndexToOwner;
    mapping (uint256 => address) public tokenIndexToApproved;
    mapping (address => mapping(address => bool)) public operatorApprovals;
    
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
    event Burn(uint indexed tokenId, address indexed account);
    event Mint(uint indexed tokenId, address indexed account);
    
    uint _totalSupply = 0;
    
    
    
    constructor() {
        dev = msg.sender;
        dipper = msg.sender;
    }

    Sauce[] sauces;
    
    struct Sauce{
        uint timeStamp;
        uint spice;
        string metaData;
    }
    
    function mint(address account, uint _spice, string memory _metaData) public {
        require(msg.sender == dipper);
        _mint(account, _spice, _metaData);
    }
    
    function _mint(address account, uint _spice, string memory _metaData) internal returns (uint tokenId){
        tokenId = sauces.length;
        Sauce memory _token = Sauce({
            timeStamp: block.timestamp,
            spice: _spice,
            metaData: _metaData
        });
        _totalSupply = _totalSupply.add(1);
        tokenIndexToOwner[tokenId] = account; 
        ownershipTokenCount[account] = ownershipTokenCount[account].add(1);
        sauces.push(_token);
        emit Mint(tokenId, account);
    }
    
    function burn(uint tokenId) public {
        require(tokenIndexToOwner[tokenId] == msg.sender);
        _burn(tokenId);
    }
    
    
    
    function setDipper(address _dipper) public {
        require(msg.sender == dev);
        dipper = _dipper;
    }
    
    function burnFrom(address account, uint tokenId) public{
        require(account != address(0));
        require(tokenIndexToApproved[tokenId] == msg.sender || operatorApprovals[account][msg.sender] == true || tokenIndexToOwner[tokenId] == msg.sender || msg.sender == dipper);
        _burn(tokenId);
    }
    
    function _burn(uint tokenId) internal{
        address _owner = tokenIndexToOwner[tokenId];
        _totalSupply = _totalSupply.sub(1);
        delete tokenIndexToOwner[tokenId]; 
        ownershipTokenCount[_owner] = ownershipTokenCount[_owner].sub(1);
        delete sauces[tokenId];
        emit Burn(tokenId, _owner);
    }
    
    function getToken(uint _tokenId) public view returns ( uint _timeStamp, uint spice, string memory _metaData){
        Sauce storage _token = sauces[_tokenId];
        _timeStamp = _token.timeStamp;
        spice = _token.spice;
        _metaData = _token.metaData;
    }
    
    function getSpice(uint _tokenId) public view returns (uint _spice) {
        _spice = sauces[_tokenId].spice;
    }
    
    function getMetaData(uint _tokenId) public view returns (string memory _metaData){
        _metaData = sauces[_tokenId].metaData;
    }
   
    function ownerOf(uint256 _tokenId) external view returns (address _owner){
        _owner = tokenIndexToOwner[_tokenId];
    }
 
    function exists(uint256 _tokenId) external view returns (bool _exists){
        if(tokenIndexToOwner[_tokenId] == address(0)) {
            _exists = false;
        } else {
            _exists = true;
        }
    }

    function approve(address _to, uint256 _tokenId) external {
        // Only an owner can grant transfer approval.
        require(tokenIndexToOwner[_tokenId] == msg.sender);

        // Register the approval (replacing any previous approval).
        tokenIndexToApproved[_tokenId] = _to;

        // Emit approval event.
        emit Approval(msg.sender, _to, _tokenId);
    }

    function getApproved(uint256 _tokenId) external view returns (address _operator){
        _operator = tokenIndexToApproved[_tokenId];
    }
    
    function setApprovalForAll(address _to, bool _approved) external {
        require(_to != msg.sender);
        operatorApprovals[msg.sender][_to] = _approved;
        emit ApprovalForAll(msg.sender, _to, _approved);
    }
    
    function isApprovedForAll(address _owner, address _to) external view returns (bool){
        return operatorApprovals[_owner][_to];
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) external {
        require(_to != address(0) || _from != address(0));
        require(tokenIndexToApproved[_tokenId] == msg.sender || operatorApprovals[_from][msg.sender] == true || tokenIndexToOwner[_tokenId] == msg.sender);
        _transferFrom(_from, _to, _tokenId);
    }
    
    function _transferFrom(address _from, address _to, uint256 _tokenId) internal {
        tokenIndexToOwner[_tokenId] = _to;
        ownershipTokenCount[_from] = ownershipTokenCount[_from].sub(1);
        ownershipTokenCount[_to] = ownershipTokenCount[_to].add(1);
        delete tokenIndexToApproved[_tokenId];
    }
    
    function transfer(address _to, uint256 _tokenId) external{
        require(tokenIndexToOwner[_tokenId] == msg.sender);
        tokenIndexToOwner[_tokenId] = _to;
        ownershipTokenCount[msg.sender] = ownershipTokenCount[msg.sender].sub(1);
        ownershipTokenCount[_to] = ownershipTokenCount[_to].add(1);
    }
    
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata _data) external {
        require(AddressUtils.isContract(_to) == false);
        require(_to != address(0) || _from != address(0));
        require(tokenIndexToApproved[_tokenId] == msg.sender || operatorApprovals[_from][msg.sender] == true || tokenIndexToOwner[_tokenId] == msg.sender);
        _transferFrom(_from, _to, _tokenId);
    }
    
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external {
        require(AddressUtils.isContract(_to) == false);
        require(_to != address(0) || _from != address(0));
        require(tokenIndexToApproved[_tokenId] == msg.sender || operatorApprovals[_from][msg.sender] == true || tokenIndexToOwner[_tokenId] == msg.sender);
        _transferFrom(_from, _to, _tokenId);
    }

    function totalSupply() external view returns (uint _total){
        //_total = sauces.length;
        _total = _totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 count) {
        return ownershipTokenCount[_owner];
    }

    function tokensOfOwner(address _owner) external view returns(uint256[] memory ownerTokens) {
        uint256 tokenCount = balanceOf(_owner);

        if (tokenCount == 0) {
            // Return an empty array
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](tokenCount);
            uint256 totalTokens = sauces.length;
            uint256 resultIndex = 0;
            // We count on the fact that all tokens have IDs starting at 1 and increasing
            // sequentially up to the total count.
            uint256 tokenId;

            for (tokenId = 1; tokenId <= totalTokens; tokenId++) {
                if (tokenIndexToOwner[tokenId] == _owner) {
                    result[resultIndex] = tokenId;
                    resultIndex++;
                }
            }

            return result;
        }
    }
    
    
}