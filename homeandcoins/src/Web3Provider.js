import Web3 from "web3";
import {ContractABI} from "./ContractAbi"

const SMART_CONTRACT_ADDRESS = "0xE65f1B994C11287c1734f448348d85D59a99F7bD";

export class Web3Provider {

    static provider;
    async helloWorld() {
        console.log(await Web3.givenProvider.enable());
        const { ethereum } = window;
        console.log(ethereum);
        await Web3.givenProvider.request({method: "eth_requestAccounts"});
        let addresse = await Web3.givenProvider.enable();
        console.log(addresse[0]);
        var client = new Web3(Web3.givenProvider || "ws://localhost:8545");
        var AtysHome = new client.eth.Contract(ContractABI, SMART_CONTRACT_ADDRESS);
        var helloworld = await AtysHome.methods.createAnnouncement(150, "Vrai baraque", "10 rue verneuil", 100, "Vrai maison gang").send({from: addresse[0]});
        console.log(helloworld);

        return this.provider;
    }

}