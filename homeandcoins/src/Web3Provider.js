import Web3 from "web3";
import {ContractABI} from "./ContractAbi"

const SMART_CONTRACT_ADDRESS = "0x19d29a838B6Fd1382d5b16775cD4D1dc0fdED057";

export class Web3Provider {

    provider;
    addresse;
    atysContract;

    async init() {
        const { ethereum } = window;
        await Web3.givenProvider.request({method: "eth_requestAccounts"});
        this.addresse = await Web3.givenProvider.enable();
        var client = new Web3(Web3.givenProvider || "ws://localhost:8545");
        this.atysContract = new client.eth.Contract(ContractABI, SMART_CONTRACT_ADDRESS);
    }

    async createAnnouncement(price, title, adresse, size, description) {
        var request = await this.atysContract.methods.createAnnouncement(price, title, adresse, size, description).send({from: this.addresse[0]});
        console.log(request);
        return request;
    }

    async getAnnouncements() {
        var request = await this.atysContract.methods.getAnnouncements().call();
        console.log(request);
        return request;
    }

    async buyAnnouncement(id, price){
        var request = await this.atysContract.methods.buyAnnouncement(id, price).send({from: this.addresse[0]});
        return request;
    }

    async getIdOwner(idAnnouncement) {
        var adressOfOwner = await this.atysContract.methods.announcementToOwner(idAnnouncement).call();
        console.log("Owner of the house ",idAnnouncement, " is : ", adressOfOwner);
        return adressOfOwner;
    }

}