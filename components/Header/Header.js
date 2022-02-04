import { Image, Menu, MenuButton, Divider, Text, Center, Container, Link } from "@chakra-ui/react";
import logo from "../../images/studioghiblilogo.png";

export default function Header() {
    return (
        <Container>
            <Center>
                <Image
                    src={logo.src}
                    m={3}
                    width="300px"
                    alt="Studio Ghibli"
                    top="0" />
            </Center>
            <Center>
                <Menu>
                    <Link href="/about">
                        <MenuButton m={3} fontSize="2xl">About</MenuButton>
                    </Link>
                    <Center height="30px">
                        <Divider orientation="vertical" borderColor="black" />
                    </Center>
                    <Link href="/movies">
                        <MenuButton m={3} fontSize="2xl">Movies</MenuButton>
                    </Link>
                </Menu>
            </Center>
        </Container >
    )
}