import { RequestHandler } from 'express'
import { Response, Request, NextFunction } from 'express'

export const clientInputValidations: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const mainParameters = ['filename', 'height', 'width']

    for (let i = 0; i < mainParameters.length; i++) {
        const paramType = mainParameters[i]

        if (!req.query[paramType]) {
            res.status(400).send('Error: Parameter(s) missing..')
            return
        }

        if (paramType === 'width' || paramType === 'height') {
            const value = parseInt(req.query[paramType] as string)

            if (!value || isNaN(value)) {
                res.status(400).send('width and height should be numbers')
                return
            }
        }
    }
    next()
}
