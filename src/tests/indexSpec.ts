import app from '../index'
import supertest from 'supertest'

const req = supertest(app)

describe('test endpoint response error', () => {
    it('gets the api endpoint', async () => {
        const res = await req.get('/process')
        expect(res.status).toBe(400)
    })

})
