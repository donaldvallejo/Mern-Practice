const app = require("express")
const { Model } = require("../models/model")
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
    const {names, words} = req.body
    if (!names || !words || names === "" || words === "") {
      return res.status(400).json({success: false, message: "invalid input" })
    }
    const newPost = new Post({names, words});
    res.json({success: "true", data: {names: newPost.names, words: newPost.words} })
})

module.exports = router
