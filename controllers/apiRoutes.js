const app = require("express")
const router = app.Router()

const { Post } = require("../models")

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
        route: "/api/post/new",
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

/*
router.post("/new", (req, res) => {
    const newpost = req.body;
    availableRoutes.push(newpost)
    res.json(availableRoutes)
})
//*/

router.post("/post/new", (req, res) => {
    const {title, description} = req.body
    if (!title || !description || title === "" || description === "") {
      return res.status(400).json({success: false, message: "invalid input" })
    }
    const newPost = new Post({title, description});
    res.json({success: true, data: {title: newPost.title, description: newPost.description} })
})

module.exports = router
