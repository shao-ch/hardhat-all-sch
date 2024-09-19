const {deployments,ethers,network} =require("hardhat");


describe("SchERC20", async function () {

    let schERC20;
    let deployer;
    before(async function () {
        const ercDeploy = await deployments.get("SchERC20");
        deployer = network.config.accounts[0];
        schERC20 = await ethers.getContractAt("SchERC20", ercDeploy.address);
    })



    it("test name", async function () {

       const name =await schERC20.name();
        console.log(name)
    });


    it("test symbol", async function () {

        const symbol =await schERC20.symbol();
        console.log(symbol)
    });

    it("test totalSupply", async function () {

        const totalSupply =await schERC20.totalSupply();

        const totalSupplyStr =ethers.formatEther(totalSupply);
        console.log(totalSupplyStr)
    });
})