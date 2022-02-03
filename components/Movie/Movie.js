import { Image, SimpleGrid, Container, Text } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
const _ = require("lodash");

export default function Movie() {
    const [movies, setMovies] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
                setLoading(false);
            });
    }, [])

    if (isLoading) return <h1>Loading...</h1>
    if (!movies) return <h1>No movies found</h1>

    const orderedMovies = _.orderBy(movies, ['title'], ['asc']);

    return (
        <Container maxW="container.xl">
            <SimpleGrid columns={3} spacing={10} p="100px">
                {orderedMovies.map((movie) => (
                    <div className="movie" key={movie.id}>
                        <Image width="300px" src={movie.image} />
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                    </div>
                ))}
            </SimpleGrid>
        </Container>
    )
}
