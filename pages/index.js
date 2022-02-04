import Head from 'next/head';
import Link from 'next/link'
import { Button, Heading, Image, Text } from "@chakra-ui/react";
import layout from '../images/sglayout.jpeg'
import { useState, useEffect } from 'react';
const _ = require("lodash");

export default function Home() {

  return (
    <>
      <Image
        src={layout.src}
        width="100vw"
        height="100vh"
        display="block"
        position="relative" />

      <Heading
        fontFamily="Ghibli-Bold"
        position="absolute"
        color="white"
        fontSize="7rem"
        top="20%"
        left="50%"
        textShadow="2px 2px black"
        transform="translate(-50%, -50%)"
      >Studio Ghibli</Heading>
      <Link href="/movies">
        <Button
          color="white"
          mt="20px"
          p="30px"
          position="absolute"
          fontFamily="Ghibli"
          fontSize="2rem"
          top="30%"
          left="50%"
          transform="translate(-50%, -50%)"
          variant="outline"
          transition="0.5s"
          _hover={{
            backgroundColor: "white",
            color: "grey"
          }}
        >Find Movies</Button>
      </Link>

    </>
  )
}
