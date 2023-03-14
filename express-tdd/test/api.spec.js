const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    test('Return status 200 and hello message', (done) => {
        request(app).get('/')
            .then(res => {
                expect(res.statusCode).toBe(200)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body.status).toBe(true)
                expect(res.body.message).toEqual('Hello World')
                done()
            })
    })
})

describe('POST /sum', () => {
    test('Return status 200 and sum data', (done) => {
        request(app).post('/sum')
            .then(res => {
                expect(res.statusCode).toBe(200)
                expect(res.body).toHaveProperty('status')
                expect(res.body).toHaveProperty('message')
                expect(res.body).toHaveProperty('data')
                expect(res.body.status).toBe(true)
                expect(res.body.x).toEqual(5)
                expect(res.body.y).toEqual(10)
                expect(res.body.data.sum).toEqual(15)

                done()
            })
    })
})