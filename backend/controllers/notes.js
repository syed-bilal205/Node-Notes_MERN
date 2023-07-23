const Notes = require("../model/notes");

// Get All The Notes
const getAllTheNotes = async (req, res) => {
  try {
    const notes = await Notes.find({});
    if (!notes) {
      throw new Error("An error occured white fetching");
    }
    res.json(notes).status(201);
  } catch (error) {
    res.json({ error: "An error occured white fetching" }).status(500);
  }
};

// Get Notes By The ID
const getNotesBtTheId = async (req, res) => {
  try {
    const id = req.params.id;
    const notes = await Notes.findById(id);
    if (!notes) {
      throw new Error("An error occured white fetching");
    }
    res.status(200).json(notes);
  } catch (error) {
    res.json({ error: "An error occured white fetching" }).status(500);
  }
};

// Create Notes
const createNotes = async (req, res) => {
  try {
    const { title, description } = req.body;
    const notes = await Notes.create({ title, description });

    if (!notes) {
      throw new Error("An error occured white fetching");
    }
    res.status(200).json(notes);
  } catch (error) {
    res.json({ error: "An error occured white fetching" }).status(500);
  }
};

// Update the notes
const updateTheNotes = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;

    const notes = await Notes.findByIdAndUpdate(id, { title, description });

    if (!notes) {
      throw new Error("An error occured white fetching");
    }
    res.status(200).json(notes);
  } catch (error) {
    res.json({ error: "An error occured white fetching" }).status(500);
  }
};

// Delete The Notes
const deleteTheNotes = async (req, res) => {
  try {
    const id = req.params.id;
    const notes = await Notes.findByIdAndDelete(id);
    if (!notes) {
      throw new Error("An error occured white fetching");
    }
    res.status(200).json(notes);
  } catch (error) {
    res.json({ error: "An error occured white fetching" }).status(500);
  }
};

module.exports = {
  getAllTheNotes,
  getNotesBtTheId,
  createNotes,
  updateTheNotes,
  deleteTheNotes,
};
