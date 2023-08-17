var express = require('express');
var router = express.Router();

// GET cats index
router.get('/', function(req, res, next) {
  res.redirect("/cats/fact")
});
// GET cats/fact
router.get("/fact", async function(req, res, next) {
  let catFact = await fetch("https://catfact.ninja/fact")
    .then(res => res.json())
  res.render("cat/fact", { title: "Cat Fact!", fact: catFact.fact })
})

module.exports = router;


// router.get('/', async function(req, res, next) {
//   const username = req.query.username
//   if (!username) return res.render("index", { userData: null })
//   const options = {
//       headers: {
//         Authorization: `token ${token}`
//       }
//   }
//   const userData = await fetch(`${ROOT_URL}/users/${username}`, options)
//     .then(res => res.json())

//   userData.repos = await fetch(userData.repos_url, options)
//     .then(res => res.json())
//   res.render('index', { userData });
//     })