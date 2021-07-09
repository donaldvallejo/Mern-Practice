const app = require("express")
const router = app.Router()

const availableRoutes = [
    {
        route: "/api",
        request: "GET",
        description: "get all api routes"
    },
    {
        route: "/api/secondRoute",
        request: "GET",
        description: "get the second route"
    },
    {
        route: "/api/new",
        request: "POST",
        description: "create new post"
    },
]

router.get("/", (req, res) => {
    res.json({
        routes: availableRoutes
    })
})

router.get("/secondRoute", (req, res) => {
    res.send("second route")
})

router.post("/new", (req, res) => {
    const newpost = req.body;
    availableRoutes.push(newpost)
    res.json(availableRoutes)
})

module.exports = router;