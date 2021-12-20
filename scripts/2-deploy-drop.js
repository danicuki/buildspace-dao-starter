import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x249E9f6384aBBEDE4651aDC87113f8DB7F6d5524");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "SingerDAO Membership",
      // A description for the collection.
      description: "SingerDAO - a community of singers, who love learning new techniques and express themselves through the most beautiful instrument of all: the human voice. Token holders get access to free singing classes, workshops, voice hearings, gig spaces and many more.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/singer.jpg"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()
