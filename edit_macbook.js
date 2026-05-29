const { Jimp } = require("jimp");
const fs = require("fs");

async function run() {
    try {
        const imagePath = "public/macbook-mockup.png";
        console.log("Reading image:", imagePath);
        
        const image = await Jimp.read(imagePath);
        
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        
        console.log(`Image size: ${width}x${height}`);
        
        const startX = Math.floor(width * 0.145);
        const startY = Math.floor(height * 0.122);
        const endX = Math.floor(width * (1 - 0.145));
        const endY = Math.floor(height * (1 - 0.185));
        
        console.log(`Cutting out hole: x=${startX}, y=${startY} to x=${endX}, y=${endY}`);
        
        // Let's use the older syntax for jimp if it's 0.x. Or 1.x.
        // Usually image.scan works in all versions.
        image.scan(startX, startY, endX - startX, endY - startY, function (x, y, idx) {
            this.bitmap.data[idx + 3] = 0; // Set alpha to 0
        });
        
        const outPath = "public/macbook-transparent.png";
        image.write(outPath, () => {
            console.log("Saved to:", outPath);
        });
    } catch (e) {
        console.error("Error editing image:", e);
    }
}

run();
