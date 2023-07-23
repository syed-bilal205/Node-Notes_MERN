const router = require("express").Router();
const {
  getAllTheNotes,
  getNotesBtTheId,
  createNotes,
  updateTheNotes,
  deleteTheNotes,
} = require("../controllers/notes");

router.get("/", getAllTheNotes);

router.get("/:id", getNotesBtTheId);

router.post("/", createNotes);

router.put("/:id", updateTheNotes);

router.delete("/:id", deleteTheNotes);

module.exports = router;
