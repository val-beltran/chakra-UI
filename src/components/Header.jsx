import React from "react";
import { Box, Button, Heading, Flex, Stack } from "@chakra-ui/react";
import images from "../assets/images/banner.jpg";

export default function Header() {
    return (
        <Box
            height="40vh"
            bg="grey"
            bgImage={imagen}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
        >
            <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            h={"100%"}
            bg="rgb(0 0 0 /40%)"
            p={["0 5%", null, "0 20%"]}
            >
                <Heading variant="banner">No bajes la cabeza!</Heading>
                <Stack
                direction={{ base: "column", md: "row" }}
                spacing="50px"
                mt="30px"
                w={["100%", null, "auto"]}
                >
                    <Button variant="outline" size="lg">
                        Ver mas
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
}