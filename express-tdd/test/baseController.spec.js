const baseController = require('../controller/baseController')

const mockRequest = (body = {}, params = {}, query = {}) => {
    return {
        body: body,
        params: params,
        query: query
    }
}

const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
}

describe('Base controller hello world', () => {
    test(`res.json called with {status: true, message: 'hello world' }`, (done) => {
        const req = mockRequest()
        const res = mockResponse()

        baseController.hello(req, res)

        expect(res.status).toBeCalledWith(200);

        expect(res.json).toBeCalledWith({
            status: true,
            message: 'Hello World'
        })
        // expect(res.json).toBeCalledWith({ status: true, message: 'hello world' })
        done()
    })
})

describe('Base controller to do sum', () => {
    test(`res.json called with {status:true, message: 'parameters summarized!', data:{sum:x+y}}`, (done) => {
        const req = mockRequest({ x: 5, y: 10 })
        const res = mockResponse()
        baseController.sum(req, res)

        expect(res.status).toBeCalledWith(200);

        expect(res.json).toBeCalledWith({
            status: true,
            message: 'success',
            data: {
                sum: req.body.x + req.body.y
            }
        })
        done()
    })
})

describe('Base controller to check healthj', () => {
    test(`res.json called with {status:true, message: 'PONG'`, (done) => {
        const req = mockRequest()
        const res = mockResponse()
        baseController.checkHealth(req, res)

        expect(res.status).toBeCalledWith(200);

        expect(res.json).toBeCalledWith({
            status: true,
            message: 'PONG',
        })
        done()
    })
})


