const { ethers, upgrades } = require("hardhat")
const proxyAddress = "0x7cCc799d6E5122262f50d6691dfF7dfe9701D3Dd"
async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    let box = await upgrades.upgradeProxy(proxyAddress, BoxV2)
    console.log("Your upgraded proxy is done!", box.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
