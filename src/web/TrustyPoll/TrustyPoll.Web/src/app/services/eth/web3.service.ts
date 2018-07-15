import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Transaction from 'ethereumjs-tx';

import { NotificationsService } from '../core/notifications.service';
import { UtilsService } from '../core/utils.service';

@Injectable()
export class Web3Service {
    public static USING_HTTP_NODE: boolean;
    public static DEFAULT_GAS_PRICE: string = '0x94190';
    public static ERC_20_TOKEN_ABI: any = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "totalSupply", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "ethers", "type": "uint256" }], "name": "withdrawEthers", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint8" }], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": false, "name": "_amount", "type": "uint256" }], "name": "TokensCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }];

    private defaultNodeIP: string = "https://ropsten.infura.io/MPry1enKxV4zfRdLnhH5";
    private web3Instance: any;   // Current instance of web3

    intializeWeb3(): void {
        this.connectToNode();
    }

    signTransaction(transaction, privateKey) {
        const tx = new Transaction(transaction);
        tx.sign(privateKey);
        return tx.serialize();
    }

    signMessage(message, privateKey) {
        return this.web3.eth.accounts.sign(message, privateKey);
    }

    getNonce(address): Observable<any> {
        return Observable.fromPromise(this.web3.eth.getTransactionCount(address));
    }

    sendSignedTransaction(transaction): Observable<any> {
        return Observable.fromPromise(
            this.web3.eth.sendSignedTransaction('0x' + transaction.toString('hex'))
                .on('transactionHash', hash => console.log(hash))
                .on('error', console.error));
    }

    getBalance(address: string): Observable<string> {
        return Observable.fromPromise(this.web3.eth.getBalance(address)).map(value => this.web3.utils.hexToNumberString(value));
    }

    ////getTokenBalance(token: string, address: string): Observable<any> {
    ////    const balanceFunctionAbi = [{ "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }];
    ////    const contract = new this.web3.eth.Contract(balanceFunctionAbi, token);
    ////    const obs = Observable.fromPromise(contract.methods.balanceOf(address).call({ from: address }));
    ////    return obs;
    ////}

    // TODO Change with upper function when bug in web3 is resolved
    getTokenBalance(token: string, address: string): Observable<any> {
        const balanceFunctionAbi = [{ "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }];
        const contract = new this.web3.eth.Contract(balanceFunctionAbi, token);
        return Observable.fromPromise(this.web3.eth.call({
            to: token,
            data: contract.methods.balanceOf(address).encodeABI()
        })).map(value => this.web3.utils.hexToNumberString(value));
    }

    getBlockNumber(): Observable<any> {
        return Observable.fromPromise(this.web3.eth.getBlockNumber());
    }

    createAccount(): any {
        return this.web3.eth.accounts.create();
    }

    privateKeyToAccount(privateKey: string): any {
        return this.web3.eth.accounts.privateKeyToAccount(privateKey);
    }

    weiToEth(wei: number): number {
        return parseFloat(this.web3.fromWei(wei, 'ether'));
    }

    connectToNode(): void {
        if (typeof window['web3'] !== 'undefined') {
            Web3Service.USING_HTTP_NODE = false;
            console.log('Using injected web3');
            this.web3 = new this.Web3(window['web3'].currentProvider);

            this.walletAccount().subscribe(address => {
                if (!address) {
                    NotificationsService.warning('Please unlock your metamask account and refresh the page.', null, 'WARNING', 0);
                }
            });
        } else {
            Web3Service.USING_HTTP_NODE = true;
            console.log('Using HTTP node');
            this.web3 = new this.Web3();
            this.web3.setProvider(new this.web3.providers.HttpProvider(this.defaultNodeIP));
        }
    }

    // Metamask related
    walletAccount(): Observable<string> {
        if (!Web3Service.USING_HTTP_NODE) {
            return Observable.fromPromise(this.web3.eth.getAccounts()).map(accounts => accounts[0]);
        }

        return Observable.empty();
    }

    public static isValidPk(pk: string): boolean {
        return pk && /^[0-9a-f]{64}$/i.test(pk.toLowerCase());
    }

    public addressFromPk(pk: string): string {
        const account = this.privateKeyToAccount(pk);
        return account.address;
    }

    public isValidAddress(addr: string): boolean {
        return this.web3.utils.isAddress(addr);
    }

    public generatePk(): string {
        const account = this.createAccount();
        let pk = account.privateKey;
        if (pk.startsWith("0x")) {
            pk = pk.substring(2);
        }

        return pk;
    }

    get web3(): any {
        if (!this.web3Instance) {
            this.intializeWeb3();
        }
        return this.web3Instance;
    }
    set web3(web3: any) {
        this.web3Instance = web3;
    }

    get Web3(): any {
        return window['Web3'];
    }
}
