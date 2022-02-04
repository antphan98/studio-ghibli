import { useState, useEffect } from "react";
import { Container, Input } from "@chakra-ui/react";

export default function SearchBar() {

    return (
        <Container maxW="container.sm">
            <Input placeholder="Search movies..." size="md" />
        </Container >
    )
}