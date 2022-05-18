import fs from 'fs'

const fileExistsChecker = async (path: string): Promise<boolean> => {
    const isExists = await fs.existsSync(path)
    return isExists
}
export default fileExistsChecker
