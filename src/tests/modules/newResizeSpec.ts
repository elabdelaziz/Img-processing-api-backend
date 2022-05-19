import newResize from '../../utils/newResize'
import path from 'path'
import { currentDir } from '../../modules/resizeImage'
describe('Sharp', () => {
    it('should return an error message if file not provided', async () => {
        const filename = 'noImg'
        const height = 100
        const width = 100
        const imagePath = `${filename}${width}x${height}.jpg`

        const response = await newResize(width, height, filename, currentDir)
        response.toFile(
            path.join(currentDir, `/thumb/${imagePath}`),
            (err: Error) => {
                expect(err.message).toEqual(
                    `Input file is missing: ${path.join(
                        currentDir,
                        `${filename}.jpg`
                    )}`
                )
            }
        )
    })

    it('should return file if it exists', async () => {
        const filename = 'full-img'
        const height = 100
        const width = 100
        const imagePath = `${filename}${width}x${height}.jpg`

        const response = await newResize(width, height, filename, currentDir)
        response.toFile(
            path.join(currentDir, `/thumb/${imagePath}`),
            (err: Error) => {
                expect(err.message).toBeFalsy()
            }
        )
    })
})
