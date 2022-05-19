import sharp, { Sharp } from 'sharp'
import path from 'path'

export const newResize = async (
    width: number | null,
    height: number | null,
    filename: string | null,
    currentDir: string
): Promise<Sharp> => {
    const current = path.join(currentDir, `${filename}.jpg`)
    const editedImg = await sharp(current).resize(width, height)
    return editedImg
}

export default newResize
