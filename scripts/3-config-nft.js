import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xaCEE036a03f830b2899d5828a320e95EF0827260",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Access NFT",
        description: "This NFT will give you access to PokeDAO!",
        image: readFileSync("scripts/assets/d.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()