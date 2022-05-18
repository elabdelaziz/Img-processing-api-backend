import sharp from 'sharp'
import path from 'path'
import { Response, Request } from 'express'
import fileExistsChecker from '../utils/fileExistsChecker'
import newResize from '../utils/newResize'

const resizeImage = async (req: Request, res: Response): Promise<void> => {
    const { filename, height, width } = req.query

    const f: string = filename as unknown as string
    const w: number | null = width ? parseInt(width as string) : null
    const h: number | null = height ? parseInt(height as string) : null

    try {
        const imagePath = `${f}${w}x${h}.jpg`
        const isFileExists = await fileExistsChecker(
            path.join('src/thumb', imagePath)
        )

        if (isFileExists) {
            res.sendFile(`/${imagePath}`, { root: path.join('src/thumb/') })
        } else {
            const resized = await newResize(w, h, f)
            resized.toFile(`src/thumb/${imagePath}`, (err: Error) => {
                if (err) {
                    res.status(403).send({
                        ok: 'failed',
                        message: err.message,
                    })
                } else {
                    res.sendFile(`${imagePath}`, {
                        root: path.join('./src/thumb'),
                    })
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}
export default resizeImage
