import { Image, Input, SimpleGrid, Container, VStack, Text, Center, Box } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import SearchBar from "../SearchBar/SearchBar";

const _ = require("lodash");

export default function Movie(props) {
    const [movies, setMovies] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [searchMovie, setSearchMovie] = useState('');
    const handleChange = (e) => {
        setSearchMovie(e.target.value);
    }

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then((res) => res.json())
            .then((data) => {
                const results = data.filter((movie) =>
                    movie.title.toUpperCase().includes(searchMovie.toUpperCase()));
                setMovies(results);

            });
    }, [searchMovie]);

    console.log(searchMovie);

    // useEffect(() => {
    //     const results = orderedMovies.filter((movie) =>
    //         movie.title.toUppercase().includes(searchMovie.toUppercase()));
    //     setMovies(results);
    // }, [searchMovie]);

    if (isLoading) return <h1>Loading...</h1>
    if (!movies) return <h1>No movies found</h1>

    return (
        <>
            <Container maxW="container.sm">
                <Input value={searchMovie} onChange={handleChange} placeholder="Search movies..." size="md" />
            </Container >

            <Container maxW="container.xl">
                <SimpleGrid columns={3} spacing={10} p="100px">
                    {movies.map((movie) => (
                        <Box
                            transition="all .2s ease-in-out"
                            cursor="pointer"
                            _hover={{ transform: "scale(1.1)" }}
                            key={movie.id}
                            onClick={props.modal}
                        >
                            <Image width="300px" src={movie.image} />
                            <VStack>
                                <Center>
                                    <Text fontSize="3xl">{movie.title}</Text>
                                </Center>
                                <Text>{movie.release_date}</Text>
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}
