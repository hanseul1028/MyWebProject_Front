import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledWrap, StyledTitle, StyledInnerWrap, StyledImage, StyledStoreName, StyledCard, StyledMoreButton } from "./Movies.style";
import MovieDetail from "./MovieDetail";

function Movies() {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '75fe583eb3a66516a987b8482f69071e',
              language: 'en-US',
              page: 1
            }
          }
        );
        console.log("전체 응답:", response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    };

    fetchMovies();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // 오른쪽으로 스크롤
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300, // 이동 거리(픽셀) 조절 가능
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative", padding: "0 40px" }}>
      <StyledTitle>Popular Movies</StyledTitle>
            {/* 왼쪽 버튼 */}
      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor : "black",
          color : "white",
        }}
      >
        {"<"}
      </button>
      
      {/* 슬라이더 컨테이너 */}
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "10px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        // 크롬에서 스크롤바 숨기기 위한 추가 CSS
        className="no-scrollbar"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{
              flex: "0 0 20%",
              boxSizing: "border-box",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <h2 style={{ fontSize: "16px", textAlign: "center" }}>
              {movie.title}
            </h2>
          </div>
        ))}
      </div>
      
      {/* 오른쪽 버튼 */}
      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor : "black",
          color : "white",
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default Movies;