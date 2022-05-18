import sharp, { Sharp } from 'sharp'

export const newResize = async (
    width: number | null,
    height: number | null,
    filename: string | null
): Promise<Sharp> => {
    const editedImg = await sharp(`src/full/${filename}.jpg`).resize(
        width,
        height
    )
    return editedImg
}

export default newResize
