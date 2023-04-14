tokenABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "makeUnchangeable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_poolAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_CDburnerAddress",
				"type": "address"
			}
		],
		"name": "setPoolAndBurner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unchangeable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];    

SauceABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "exists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getMetaData",
		"outputs": [
			{
				"internalType": "string",
				"name": "_metaData",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getSpice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_spice",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_timeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "spice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_metaData",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_spice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_metaData",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "operatorApprovals",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "ownershipTokenCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_dipper",
				"type": "address"
			}
		],
		"name": "setDipper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_minter",
				"type": "address"
			}
		],
		"name": "setMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenIndexToApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenIndexToOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "tokensOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "ownerTokens",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_total",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
    
DipperABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Bwings",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_NumNums",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_Sauce",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "buySauce",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "wingId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBwings",
				"type": "uint256"
			}
		],
		"name": "dipWings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var userAddress = "";
var ethBalance = "";
var COIN = 10**18;

ethereum.autoRefreshOnNetworkChange = false;

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            //await eth_requestAccounts();
            // Acccounts now exposed
            web3.eth.getAccounts().then(e => start(e[0]) );
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.getAccounts().then(e => start(e[0]) );
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

//Addresses
Bwings = "0xdEF752c128498F6e01C667163013C554957D816c";
NumNums = "0xdEa7BD6D23c1d4D1547371794765A7bF97e470fa";
SaucePackets = "0x7a8F4dBD0fCe9734A7c2949002F89a3Bf0d86BBc";
Dipper = "0x0F61CF848E3219fA49e1F473cFEE6A3E7AAc33D1";


const SauceContract = web3.eth.contract(SauceABI);
const Sauce = SauceContract.at(SaucePackets);

const DipperContract = web3.eth.contract(DipperABI);
const Dip = DipperContract.at(Dipper);

const tokenContract = web3.eth.contract(tokenABI);
//const token = tokenContract.at(address);


function start(_address) {
    userAddress = _address;
    getETHbalance();
    getTokensOfUser();
    getBalanceBwings();
    getBalanceNumNums();
}
    
function getETHbalance() {
    web3.eth.getBalance(userAddress,(err, res) => {
      if (!err) {
		console.log(res.toString()/COIN);
        ethBalance = res.toString()/COIN;
      } else {
        output = "Error";
      }
    })
}

    
function goHome() {
    window.location.search = "";
}

/*====================================read Functions===================================*/

function getBalanceBwings() {
    var token = tokenContract.at(Bwings);
    token.balanceOf(userAddress,(err, res) => {
        if (!err) {
            console.log(res.toString());
            document.getElementById("Bwing").innerHTML = res/COIN;
        } else {
            output = "Error";
        }
    })
}

function getBalanceNumNums() {
    var token = tokenContract.at(NumNums);
    token.balanceOf(userAddress,(err, res) => {
        if (!err) {
            console.log(res.toString());
            document.getElementById("NumNum").innerHTML = res/COIN;
        } else {
            output = "Error";
        }
    })
}

function getBalanceSauce() {
    Sauce.balanceOf(userAddress,(err, res) => {
    if (!err) {
        console.log(parseInt(res));
    } else {
        output = "Error";
    }
    })
}

function getTokensOfUser() {
    Sauce.tokensOfOwner(userAddress,(err, res) => {
    if (!err) {
        //console.log(res);
        if(res.length!=0) {
            console.log("Owned Tokens: " + res.length);
        }
        for (i = 0; i < res.length; i++) {
            console.log("Sauce ID: " + res[i]);
            document.getElementById("wallet").innerHTML += '<div class="tokenBox" id="token' + parseInt(res[i]) + '"> <div class="title"> Sauce: ' + parseInt(res[i]) + ' </div>  </div>'
            getSpice(res[i]);
        }
        
    } else {
        output = "Error";
    }
    })
    setTimeout(function(){  
    document.getElementById("wallet").innerHTML += '<div class="tokenBox" id="buySauce" onClick="buySauce()"> <div class="title"> Buy Sauce </div> <div class="title"> 5 NumNums </div> <div class="imgBox2" id="imgBoxBuy"></div> </div>'
    document.getElementById("imgBoxBuy").style.backgroundImage = "url('https://i.ibb.co/CvGM6CT/unnamed-1.png')";
    }, 300);
}
 
function getSpice(tokenId) {
    Sauce.getSpice(tokenId,(err, res) => {
        if (!err) {
            document.getElementById("token" + tokenId).innerHTML += ' <div class="title"> Multiplier ' + parseInt(res) + '%</div> <div class="imgBox" id="imgBox' + tokenId + '"></div> <div class="sendButton" onClick="send(' + tokenId + ')"> Send </div> <div class="burnButton" onClick="burn(' + tokenId + ')"> Burn </div>';
            getBackground(tokenId);
        } else {
            output = "Error";
        }
    })
}

function getBackground(tokenId) {
    Sauce.getMetaData(tokenId,(err, res) => {
    if (!err) {
        console.log(res.toString());
        document.getElementById("imgBox" + tokenId).style.backgroundImage = 'url(' + res.toString() + ')';
    } else {
        output = "Error";
    }
    })
}

function getTxImg(tokenId) {
    Sauce.getMetaData(tokenId,(err, res) => {
    if (!err) {
        console.log(res.toString());
        document.getElementById("txImg").style.backgroundImage = 'url(' + res.toString() + ')';
    } else {
        output = "Error";
    }
    })
}

function getTxSpice(tokenId) {
    Sauce.getSpice(tokenId,(err, res) => {
        if (!err) {
            document.getElementById("sauceSpice").innerHTML = "Multiplier " + parseInt(res) + "%";
        } else {
            output = "Error";
        }
    })
}



/*====================================write Functions===================================*/

function approveBwings(amountBwings) {
    token = tokenContract.at(Bwings);
    token.approve(Dipper, amountBwings*COIN,(error, result) => (console.log(result))); 
}

function approveSauce(sauceId) {
    Sauce.approve(Dipper, sauceId,(error, result) => (console.log(result))); 
}

function dipWings(wingId, amountBwings) {
    Sauce.dipWings(wingId, amountBwings,(error, result) => (console.log(result)));
}

function burn(tokenId) {
    console.log("Burn: " + tokenId);
    burnWings(tokenId);
    showFade(tokenId);
    
}

function sendToken(tokenId) {
    Dip.dipWings(tokenId, document.getElementById("numberInput").value,(error, result) => (console.log(result)));
}

function send(tokenId) {
    console.log("Send: " + tokenId);
    sendWings(tokenId);
    showFade(tokenId);
    
}

function buySauce() {
    console.log("Buy Sauce");
    Dip.buySauce((error, result) => (console.log(result)));
}

var selectedToken;

function sendToken(tokenId) {
    Sauce.transfer(document.getElementById("addressInput").value, tokenId,(error, result) => (console.log(result)));
}

function burnTokens(tokenId) {
    Dip.dipWings(tokenId, document.getElementById("numberInput").value*COIN,(error, result) => (console.log(result)));
}

function burnWings(tokenId) {
    document.getElementById("rightBox").innerHTML = '<div class="title" id="sauceIdNum1"> Burn Sauce: ' + tokenId + '</div> <div class="title" id="sauceSpice"> 120% </div><div class="inputLabel"id="inputLabel"> Amount of Bwings to Burn </div><input class="addressInput" type="number" id="numberInput" placeholder="6"><div class="txBurnButton" onClick= "burnTokens(' + tokenId + ')"> Burn </div>'
}

function sendWings(tokenId) {
    document.getElementById("rightBox").innerHTML = '<div class="title" id="sauceIdNum2"> Send Sauce: ' + tokenId + ' </div><div class="title" id="sauceSpice"> 120% </div><div class="inputLabel"id="inputLabel"> Recipient </div><input class="addressInput" type="text" id="addressInput" placeholder="0x00dFA7...."><div class="txSendButton" onClick= "sendToken(' + tokenId + ')"> Send </div>'
}

/*==========================Page Functions===========================*/

function hideFade() {
    document.getElementById("fadeOut").style.display = "none";
    document.getElementById("txBox").style.display = "none";
}

function showFade(tokenId) {
    selectedToken = tokenId;
    getTxImg(tokenId);
    getTxSpice(tokenId);
    //document.getElementById("sauceIdNum1").innerHTML = "Burn Sauce: " + tokenId;
    //document.getElementById("sauceIdNum2").innerHTML = "Send Sauce: " + tokenId;
    
    document.getElementById("fadeOut").style.display = "block";
    document.getElementById("txBox").style.display = "block";
}

