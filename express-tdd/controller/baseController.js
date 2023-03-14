const hello = (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Hello World'
    })
}

const sum = (req, res) => {
    const { x, y } = req.body
    const resp = x + y

    res.status(200).json({
        status: true,
        message: 'success',
        data: {
            sum: resp
        }
    })
    return
}

const checkHealth = (req, res) => {
    res.status(200).json({
        status: true,
        message: 'PONG'
    })
}


module.exports = {
    hello,
    sum,
    checkHealth
}