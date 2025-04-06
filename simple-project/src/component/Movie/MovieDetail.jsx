import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY ="75fe583eb3a66516a987b8482f69071e";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);


  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`);
      const data = await res.json();
      setMovie(data);
    };

    const fetchTrailer = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`);
        const data = await res.json();
        const youtubeTrailer = data.results.find(video => video.site === "YouTube" && video.type === "Trailer");
        setTrailerKey(youtubeTrailer?.key || null);
      };

    fetchMovie();
    fetchTrailer();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (

    <>

    {trailerKey && (
         <div style={{ width: "100%", backgroundColor: "black" }}>
         <h2 style={{
           color: "white",
           textAlign: "center",
           paddingTop: "2rem",
           marginBottom: "1rem"
         }}>
           🎬 예고편
         </h2>
         <div style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            }}></div>
          <iframe
            width="90%"
            height="500"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
      )}

      <br/><br/><br/><br/><br/>

        <div
            style={{
                display: "flex",
                gap: "2rem",
                padding: "2rem 5vw",
                color: "white",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "center",
                width : "100%",
                boxSizing: "border-box",
            }}
            >
        {/* 왼쪽: 포스터 */}
        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "300px", borderRadius: "8px" }}
        />

        {/* 오른쪽: 정보 */}
        <div style={{ maxWidth: "600px" }}>
            <h1>{movie.title}</h1>
            <p><strong>개봉일:</strong> {movie.release_date}</p>
            <p><strong>평점:</strong> {movie.vote_average} / 10</p>
            <p><strong>줄거리:</strong> {movie.overview}</p>
        </div>
        </div>
    </>
    );
};

export default MovieDetail;
