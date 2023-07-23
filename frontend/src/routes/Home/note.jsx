import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Note = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const baseUrl = `http://localhost:4000/api/notes/${id}`;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);

        // return data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotes();
  }, [baseUrl]);

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseUrl, {
        method: "PUT",
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
        alert("Your note has been Updated");
        setTitle("");
        setDescription("");
      } else {
        console.log("failed to submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeNote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/notes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/");
        alert("DELETED");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="breadcrump-nav">
          <Link to="/">Go back</Link>{" "}
          <button onClick={removeNote} className="delete">
            remove
          </button>
        </div>

        <form onSubmit={updateNote}>
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
    </>
  );
};

export default Note;
