import { Image, Menu, MenuButton, Divider, Text, Center, Container, HStack } from "@chakra-ui/react";
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
                    <MenuButton m={2} fontSize="2xl">About</MenuButton>
                    <Center height="30px">
                        <Divider orientation='vertical' />
                    </Center>
                    <MenuButton m={2} fontSize="2xl">Movies</MenuButton>
                </Menu>
            </Center>
        </Container >
    )
}