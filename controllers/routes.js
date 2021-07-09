/**
 * Setting up routes and requests
 */

const app = require("express")
const router = app.Router()

router.get("/", (req, res) => {
    res.send(`
    <html>
    <body>
    <h1> Yoo </h1>
    <div>
      <p> Check this out</p>
      <a href="/api">API</a>
    </div>
    </body>
    </html>
    `)
    console.log("Yoo")
})

module.exports = router;