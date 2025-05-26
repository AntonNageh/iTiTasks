
export default function Movie({ movies }) {
  return (
    <div style={{ padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          padding: 0,
          listStyle: "none",
        }}
      >
        {Object.keys(movies).length > 0 &&
          Object.keys(movies).map((key, index) => (
            <li
              key={index}
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  background: "#eee",
                }}
                src={`https://image.tmdb.org/t/p/w500${movies[key].poster_path}`}
                alt={movies[key].original_title}
              />
              <div style={{ padding: "1rem" }}>
                <h2 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem 0" }}>
                  {parseInt(key) + 1}.{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {movies[key].original_title}
                  </span>
                </h2>
                <p style={{ fontSize: "0.95rem", margin: "0 0 0.5rem 0" }}>
                  <span style={{ fontWeight: "bold" }}>Release date:</span>{" "}
                  {movies[key].release_date}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#444",
                    margin: 0,
                    textAlign: "justify",
                    lineHeight: 1.5,
                  }}
                >
                  {movies[key].overview}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
