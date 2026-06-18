import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const folders = [
  'src/assets',
  'src/assets/portfolio/editorial',
  'src/assets/portfolio/fitness',
  'src/assets/portfolio/brand',
  'src/assets/portfolio/campaign',
]

async function compressFolder(folder) {
  if (!fs.existsSync(folder)) return

  const files = fs.readdirSync(folder)

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

    const filePath = path.join(folder, file)
    const tempPath = filePath + '.temp'

    await sharp(filePath)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(tempPath)

    fs.unlinkSync(filePath)
    fs.renameSync(tempPath, filePath.replace(ext, '.jpg'))

    console.log(`Compressed: ${file}`)
  }
}

for (const folder of folders) {
  await compressFolder(folder)
}

console.log('Done!')