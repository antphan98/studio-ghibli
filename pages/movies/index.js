import Movie from "../../components/Movie/Movie";
import Header from "../../components/Header/Header";

export default function movies() {
  return (

    <>
    <Header />

    <div className="container">
      <Movie />
    </div>
    </>
  );
}