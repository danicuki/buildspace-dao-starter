import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x9717e7F8c35f3C76b54C56dc161f5C07f66467F8",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Member Pass",
        description: "This NFT will give you access to SingerDAO! A community of singers, who love learning new techniques and express themselves through the most beautiful instrument of all: the human voice. Token holders get access to free singing classes, workshops, voice hearings, gig spaces and more.",
        image: readFileSync("scripts/assets/membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
