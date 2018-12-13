
const myMiddleware = (req, res, next) => {
    if (req.body) {
        req.body.hello = "hello"
        next()
    } else {
        next()
    }
}

module.exports = myMiddleware