import express from "express";
const router = express.Router();
router.post("/minute", (req, res) => {
   console.log(req.body);
   res.send("ok");
});

router.post("/fifteen", (req, res) => {
   console.log(req.body);
   res.send("ok");
});

router.post("/hour", (req, res) => {
   console.log(req.body);
   res.send("ok");
});

export default router;
