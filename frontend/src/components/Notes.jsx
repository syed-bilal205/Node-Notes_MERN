import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Notes = () => {
  //   const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/notes");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setData(data);
        setLoading(false);

        // return data;
      } catch (error) {
        setError("Error fetching the data please try later");
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading.....</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="books">
            <li className="add-note-button">
              <Link to={"/add-note"}>
                <h1>+</h1>
              </Link>
            </li>
            {data.map((item) => (
              <li key={item._id}>
                <Link to={`/notes/${item._id}`}>
                  <h3>{item.title}</h3>
                  <p className="bookdetails">
                    {/* if description in greater than 50 then we do substring like trim */}
                    {item.description.length > 50
                      ? `${item.description.substring(0, 50)}...`
                      : item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Notes;
