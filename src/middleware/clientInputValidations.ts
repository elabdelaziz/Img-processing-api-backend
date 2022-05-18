import { RequestHandler } from 'express'

export const clientInputValidations: RequestHandler = (req, res, next) => {
    const { query } = req

    if (!query || !query.width || !query.height || !query.filename) {
        res.status(400).send(
            "Error: Please provide parameters in this form 'filename=full-img&width=200&height=200' "
        )
        return
    }
    next()
}
