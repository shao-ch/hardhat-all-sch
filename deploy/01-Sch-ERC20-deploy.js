const {ethers,network} = require("hardhat");


module.exports = async ({deployments}) => {

    const {deploy} = deployments;

    let deployer=network.config.accounts[0];

    let initialSupply = ethers.parseEther("1");

    console.log(deployer)
    await deploy("SchERC20", {
        contract: "SchERC20",
        from: deployer,
        args: [initialSupply],
        log: true,
        waitConfirmations: 1
    });

    console.log("SchERC20 deployed success...")
}


 module.exports.tags=["schERC20"];