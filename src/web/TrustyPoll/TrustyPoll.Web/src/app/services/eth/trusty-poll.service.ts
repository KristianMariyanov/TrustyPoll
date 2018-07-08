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
    private contractAddr: string = "0xab7e8909f8a9c0b4e4ad5558f8beebb75679ceb0";
    private abi = [{ "constant": false, "inputs": [{ "name": "poll", "type": "uint256" }, { "name": "title", "type": "string" }], "name": "createOption", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "feeAccount", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "fee_", "type": "uint256" }], "name": "changeFee", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "feeAccount_", "type": "address" }], "name": "changeFeeAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "title", "type": "string" }], "name": "createPoll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "pollAuthors", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "admin_", "type": "address" }], "name": "changeAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "polls", "outputs": [{ "name": "id", "type": "uint256" }, { "name": "title", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "poll", "type": "uint256" }, { "name": "option", "type": "uint256" }], "name": "vote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "pollVotesCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "name": "votes", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "fee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "pollOptions", "outputs": [{ "name": "id", "type": "uint256" }, { "name": "title", "type": "string" }, { "name": "pollId", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "admin_", "type": "address" }, { "name": "feeAccount_", "type": "address" }, { "name": "fee_", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];
    
    constructor(
        private identityService: IdentityService,
        private web3Service: Web3Service,
        private storageService: StorageService) { }

    createPoll(title: string, gasPriceInGwei: number): Observable<any> {
        const trustyPoll = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);

        const tx = trustyPoll.methods.createPoll(title);
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

    public getPollWithIndex(pollIndex: number): Observable<any> {
       const contract = new this.web3Service.web3.eth.Contract(this.abi, this.contractAddr);
        return Observable.fromPromise(this.web3Service.web3.eth.call({
            to: this.contractAddr,
            data: contract.methods.polls(pollIndex).encodeABI()
        })).map(poll => this.web3Service.web3.utils.toAscii(poll));
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
                    .on('transactionHash', hash => console.log(hash))
                    .on('receipt', receipt => done(true, receipt));
            });
        });
    }
}
