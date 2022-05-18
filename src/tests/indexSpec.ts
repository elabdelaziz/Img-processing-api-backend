import app from '../index'
import supertest from 'supertest'

const req = supertest(app)

describe('test endpoint response error', () => {
    it('gets the api endpoint', async () => {
        const res = await req.get('/process')
        expect(res.status).toBe(400)
    })

    it('gets the endpoint with img', async () => {
        const res = await req.get(
            '/process?filename=full-img&width=600&height=600'
        )
        expect(res.ok).toBeTruthy()
    })
})
