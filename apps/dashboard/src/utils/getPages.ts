import fs, { read, readdirSync } from "fs";
const getPages = (dir: string) => {
  const pages = fs.readdirSync(dir).filter((file) => {
    return file.endsWith('.tsx') && !file.startsWith('_')
  })
  return pages
}

export default getPages