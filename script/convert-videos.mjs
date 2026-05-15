import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import { glob } from "glob";
import path from "path";
import fs from "fs-extra";

ffmpeg.setFfmpegPath(ffmpegPath);

const inputFolder = "src/assets/Gallery";
const outputFolder = "src/assets/Gallery-webm";

fs.ensureDirSync(outputFolder);

async function convertVideos() {
  try {
    const files = await glob(
      `${inputFolder}/**/*.{mp4,mov,avi,mkv}`
    );

    console.log("🎥 Found Video Files:", files);

    if (files.length === 0) {
      console.log("❌ No video files found");
      return;
    }

    for (const file of files) {
      try {
        const relativePath = path.relative(inputFolder, file);

        const outputPath = path.join(
          outputFolder,
          relativePath.replace(/\.(mp4|mov|avi|mkv)$/i, ".webm")
        );

        fs.ensureDirSync(path.dirname(outputPath));

        console.log(`🚀 Converting: ${file}`);

        await new Promise((resolve, reject) => {
          ffmpeg(file)
            .output(outputPath)
            .videoCodec("libvpx-vp9")
            .noAudio()
            .outputOptions([
              "-crf 30",
              "-b:v 0"
            ])
            .on("end", () => {
              console.log(`✅ Converted: ${outputPath}`);
              resolve();
            })
            .on("error", (err) => {
              console.error(`❌ FFmpeg Error:`, err);
              reject(err);
            })
            .run();
        });

      } catch (error) {
        console.error("❌ Conversion Error:", error);
      }
    }
  } catch (error) {
    console.error("❌ Glob Error:", error);
  }
}

convertVideos();