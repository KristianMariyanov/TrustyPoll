import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../core/storage.service'
import { Web3Service } from "./web3.service"
import { UtilsService } from "../core/utils.service"
import { IdentityService } from "../core/identity.service"
declare var Buffer;

@Injectable()
export class TrustyPollService {
    @Output() update = new EventEmitter();
    private contractAddr: string = '0x008edbc96cde9427925f161bf209ff282709ce32';
    private tokenAddr: string = '0xb5e15631d41b5b32b0d792cba83e83e63d530e4c';
    private abi = [{ "constant": true, "inputs": [], "name": "feeAccount", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "fee_", "type": "uint256" }], "name": "changeFee", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "feeAccount_", "type": "address" }], "name": "changeFeeAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "poll", "type": "uint256" }, { "name": "optionIndex", "type": "uint256" }], "name": "getOptionIdForPoll", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "pollAuthors", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "admin_", "type": "address" }], "name": "changeAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "poll", "type": "uint256" }, { "name": "optionIndex", "type": "uint256" }], "name": "getOptionTitleForPoll", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "polls", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "poll", "type": "uint256" }, { "name": "option", "type": "uint256" }], "name": "vote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "pollVotesCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "title", "type": "bytes32" }], "name": "createPoll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "name": "votes", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "fee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "poll", "type": "uint256" }, { "name": "title", "type": "bytes32" }], "name": "createOption", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "pollOptions", "outputs": [{ "name": "id", "type": "uint256" }, { "name": "title", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "admin_", "type": "address" }, { "name": "feeAccount_", "type": "address" }, { "name": "tokenAddress_", "type": "address" }, { "name": "fee_", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];

    // get this dynamically
    public static FEE: string = '100000000000000000000';
    public static FEE_NUMBER: number = parseInt(TrustyPollService.FEE) / 1000000000000000000;

    constructor(
        private identityService: IdentityService,
        private web3Service: Web3Service,
        private storageService: StorageService) { }

    createPoll(title: string, gasPriceInGwei: number): Observable<any> {
        const trustyPoll = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);

        const tokenContract = new this.web3Service.web3.eth.Contract(Web3Service.ERC_20_TOKEN_ABI, this.tokenAddr);
        const approveTx = tokenContract.methods.approve(this.contractAddr, TrustyPollService.FEE);
        debugger;
        const tx = trustyPoll.methods.createPoll(this.web3Service.web3.utils.asciiToHex(title));
        if (Web3Service.USING_HTTP_NODE) {
            const txData = tx.encodeABI();
            const approveTxData = approveTx.encodeABI();
            return UtilsService.observableFromCb(done =>
                this.identityService.getAddress().subscribe(address => {
                    this.web3Service.getNonce(address).subscribe(
                        nonce => {
                            this.identityService.getPk().subscribe(pk => {
                                const approveTransaction = {
                                    from: address,
                                    to: this.tokenAddr,
                                    gasPrice: this.web3Service.web3.utils.numberToHex(
                                        this.web3Service.web3.utils.toWei(gasPriceInGwei.toString(), 'gwei')),
                                    gasLimit: Web3Service.DEFAULT_GAS_PRICE,
                                    data: approveTxData,
                                    nonce: nonce
                                };

                                const pkWithoutOx = pk.slice(2);
                                const pkBuffer = Buffer.from(pkWithoutOx, 'hex');
                                const approveSingedTransaction =
                                    this.web3Service.signTransaction(approveTransaction, pkBuffer);
                                this.web3Service.sendSignedTransaction(approveSingedTransaction)
                                    .subscribe(receipt => {
                                        console.log(receipt);
                                        this.web3Service.getNonce(address).subscribe(
                                            nonce => {
                                                this.identityService.getPk().subscribe(pk => {
                                                    const transaction = {
                                                        from: address,
                                                        to: this.contractAddr,
                                                        gasPrice: this.web3Service.web3.utils.numberToHex(
                                                            this.web3Service.web3.utils.toWei(gasPriceInGwei.toString(),
                                                                'gwei')),
                                                        gasLimit: Web3Service.DEFAULT_GAS_PRICE,
                                                        data: txData,
                                                        nonce: nonce
                                                    };

                                                    var pkWithoutOx = pk.slice(2);
                                                    var pkBuffer = Buffer.from(pkWithoutOx, 'hex');
                                                    var singedTransaction =
                                                        this.web3Service.signTransaction(transaction, pkBuffer);
                                                    this.web3Service.sendSignedTransaction(singedTransaction)
                                                        .subscribe(transaction => done(true, transaction));
                                                });
                                            });
                                    });
                            });
                        });
                }));
        } else {
            return UtilsService.observableFromCb(done => {
                this.sendWalletTransaction(approveTx, gasPriceInGwei).subscribe(receipt => {
                    console.log(receipt);

                    this.sendWalletTransaction(tx, gasPriceInGwei)
                        .subscribe(depositTx => done(true, depositTx));
                });
            });
        }
    }

    createOption(pollId: number, title: string, gasPriceInGwei: number): Observable<any> {
        const trustyPoll = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);

        const tx = trustyPoll.methods.createOption(pollId, this.web3Service.web3.utils.asciiToHex(title));
        if (Web3Service.USING_HTTP_NODE) {

            var txData = txData.encodeABI();
            return UtilsService.observableFromCb(done =>
                this.identityService.getAddress().subscribe(address => {
                    this.web3Service.getNonce(address).subscribe(
                        nonce => {
                            this.identityService.getPk().subscribe(pk => {
                                const transaction = {
                                    from: address,
                                    to: this.contractAddr,
                                    gasPrice: this.web3Service.web3.utils.numberToHex(
                                        this.web3Service.web3.utils.toWei(gasPriceInGwei.toString(), 'gwei')),
                                    gasLimit: Web3Service.DEFAULT_GAS_PRICE,
                                    data: txData,
                                    nonce: nonce
                                };

                                var pkWithoutOx = pk.slice(2);
                                var pkBuffer = Buffer.from(pkWithoutOx, 'hex');
                                var singedTransaction = this.web3Service.signTransaction(transaction, pkBuffer);
                                this.web3Service.sendSignedTransaction(singedTransaction).subscribe(transaction => done(true, transaction));
                            });
                        });
                }));
        } else {
            return this.sendWalletTransaction(tx, gasPriceInGwei);
        }
    }

    vote(pollId: number, optionId: number, gasPriceInGwei: number): Observable<any> {
        const trustyPoll = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);

        const tx = trustyPoll.methods.vote(pollId, optionId);
        if (Web3Service.USING_HTTP_NODE) {

            var txData = txData.encodeABI();
            return UtilsService.observableFromCb(done =>
                this.identityService.getAddress().subscribe(address => {
                    this.web3Service.getNonce(address).subscribe(
                        nonce => {
                            this.identityService.getPk().subscribe(pk => {
                                const transaction = {
                                    from: address,
                                    to: this.contractAddr,
                                    gasPrice: this.web3Service.web3.utils.numberToHex(
                                        this.web3Service.web3.utils.toWei(gasPriceInGwei.toString(), 'gwei')),
                                    gasLimit: Web3Service.DEFAULT_GAS_PRICE,
                                    data: txData,
                                    nonce: nonce
                                };

                                var pkWithoutOx = pk.slice(2);
                                var pkBuffer = Buffer.from(pkWithoutOx, 'hex');
                                var singedTransaction = this.web3Service.signTransaction(transaction, pkBuffer);
                                this.web3Service.sendSignedTransaction(singedTransaction).subscribe(transaction => done(true, transaction));
                            });
                        });
                }));
        } else {
            return this.sendWalletTransaction(tx, gasPriceInGwei);
        }
    }

    public getPollById(pollId: number): Observable<any> {
        const contract = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);
        return Observable.fromPromise(this.web3Service.web3.eth.call({
            to: this.contractAddr,
            data: contract.methods.polls(pollId).encodeABI()
        })).map(pollTitle => this.web3Service.web3.utils.toUtf8(pollTitle));
    }

    public getPollOptionTitle(pollId: number, optionIndex: number): Observable<any> {
        const contract = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);
        return Observable.fromPromise(this.web3Service.web3.eth.call({
            to: this.contractAddr,
            data: contract.methods.getOptionTitleForPoll(pollId, optionIndex).encodeABI()
        })).map(option => this.web3Service.web3.utils.toUtf8(option));
    }

    public getOptionVotesCount(pollId: number, optionId: number): Observable<any> {
        const contract = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);
        return Observable.fromPromise(this.web3Service.web3.eth.call({
            to: this.contractAddr,
            data: contract.methods.pollVotesCount(pollId, optionId).encodeABI()
        })).map(votesCount => this.web3Service.web3.utils.toDecimal(votesCount));
    }

    public getPollOptionId(pollId: number, optionIndex: number): Observable<any> {
        const contract = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);
        return Observable.fromPromise(this.web3Service.web3.eth.call({
            to: this.contractAddr,
            data: contract.methods.getOptionIdForPoll(pollId, optionIndex).encodeABI()
        })).map(option => this.web3Service.web3.utils.toDecimal(option));
    }

    public getUserVotedOptionForPoll(pollId: number, user: string): Observable<any> {
        const contract = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);
        return Observable.fromPromise(this.web3Service.web3.eth.call({
            to: this.contractAddr,
            data: contract.methods.votes(pollId, user).encodeABI()
        })).map(option => this.web3Service.web3.utils.toDecimal(option));
    }

    public getPollAuthor(pollId: number): Observable<any> {
        const contract = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);
        return Observable.fromPromise(this.web3Service.web3.eth.call({
            to: this.contractAddr,
            data: contract.methods.pollAuthors(pollId).encodeABI()
        })).map(address => `0x${(<any>address).slice(-40)}`);
    }

    private sendWalletTransaction(tx: any, gasPriceInGwei: number): Observable<any> {
        // unlock account
        return UtilsService.observableFromCb(done => {
            this.identityService.getAddress().subscribe(address => {
                tx.send({
                    from: address,
                    gasPrice: this.web3Service.web3.utils.numberToHex(
                        this.web3Service.web3.utils.toWei(gasPriceInGwei.toString(), 'gwei')),
                    gas: Web3Service.DEFAULT_GAS_PRICE
                })
                    .on('transactionHash', hash => console.log(`https://ropsten.etherscan.io/tx/${hash}`))
                    .on('receipt', receipt => done(true, receipt));
            });
        });
    }
}
