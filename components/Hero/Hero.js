import { Image, Center, Container } from "@chakra-ui/react";

export default function Hero(props) {
    return (
        <Container maxW="container.xl" mt="25px">
            <Center>
                <Image src={props.img} />
            </Center>
        </Container >
    )
}