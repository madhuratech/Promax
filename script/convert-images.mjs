import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs-extra";

const inputFolder = "src/assets";
const outputFolder = "src/assets-avif";

fs.ensureDirSync(outputFolder);

async function convertImages() {
  try {
    const files = await glob(
      `${inputFolder}/**/*.{png,jpg,jpeg,webp}`
    );

    for (const file of files) {
      try {
        const relativePath = path.relative(inputFolder, file);

        const outputPath = path.join(
          outputFolder,
          relativePath.replace(/\.(png|jpg|jpeg|webp)$/i, ".avif")
        );

        fs.ensureDirSync(path.dirname(outputPath));

        await sharp(file)
          .avif({
            quality: 50,
          })
          .toFile(outputPath);

        console.log(`✅ Converted: ${outputPath}`);
      } catch (error) {
        console.error(`❌ Error converting ${file}`, error);
      }
    }
  } catch (error) {
    console.error("Glob Error:", error);
  }
}

convertImages();