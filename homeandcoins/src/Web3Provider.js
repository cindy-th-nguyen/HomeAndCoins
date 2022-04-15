import Web3 from "web3";
import {ContractABI} from "./ContractAbi"

const SMART_CONTRACT_ADDRESS = "0x8308fC5aC6A50DedeaA4EDC87bE960388a9387f1";

export class Web3Provider {

    provider;
    addresse;
    atysContract;

    async init() {
        const { ethereum } = window;
        console.log(ethereum);
        await Web3.givenProvider.request({method: "eth_requestAccounts"});
        this.addresse = await Web3.givenProvider.enable();
        console.log(this.addresse[0]);
        var client = new Web3(Web3.givenProvider || "ws://localhost:8545");
        this.atysContract = new client.eth.Contract(ContractABI, SMART_CONTRACT_ADDRESS);
    }

    async createAnnouncement(price, title, adresse, size, description) {
        var request = await this.atysContract.methods.createAnnouncement(price, title, adresse, size, description).send({from: this.addresse[0]});
        console.log(request);
        return this.provider;
    }

    async getAnnouncements() {
        var request = await this.atysContract.methods.getAnnouncements().call();
        console.log(request);
        return this.provider;
    }

}