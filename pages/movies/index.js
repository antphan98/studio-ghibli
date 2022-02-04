import { Text, Center } from "@chakra-ui/react";
import Movie from "../../components/Movie/Movie";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import totoro from "../../images/totoro.jpeg";

export default function movies() {

  return (

    <>
      <Header />
      <Hero img={totoro.src} />
      <Center>
        <Text fontSize="3xl" mt="25px">Movies</Text>
      </Center>
      <Movie />
    </>
  );
}