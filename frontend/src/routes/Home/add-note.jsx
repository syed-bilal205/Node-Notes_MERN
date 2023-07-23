import { useState } from "react";
import { Link } from "react-router-dom";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addNote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 200);
        alert("Your note has been Created");
        setTitle("");
        setDescription("");
      } else {
        console.log("failed to submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to="/">Go back</Link>
      <form onSubmit={addNote}>
        <div className="single-note">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="title"
            />
          </div>
          <div>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="description"
              rows="4"
              cols="50"
            />
          </div>
        </div>
        <input
          type="submit"
          value={submitted ? "Saving Notes....." : "save note"}
          disabled={submitted}
        />
      </form>
    </div>
  );
};

export default AddNote;
