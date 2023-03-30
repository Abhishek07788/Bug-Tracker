import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Critical from "./Boxs/Critical";
import Low from "./Boxs/Low";
import Major from "./Boxs/Major";
import Medium from "./Boxs/Medium";

const DashBoard = () => {
  return (
    <SimpleGrid w="95%" m="auto" mt={100} columns={[1, 2, 2, 4]} spacing="4">
      <Box borderRadius={8} color="#ffff" fontSize="18">
        <Button colorScheme="blue" float="right">
          Report Bug
        </Button>
        <br />
        <Text bg="#f65251" borderTopRadius={8} mt="6" textAlign="left" p="3">
          Critical Severity
        </Text>
        <Critical />
      </Box>
      <Box borderRadius={8} color="#ffff" fontSize="18">
        <Button colorScheme="blue" float="right">
          Report Bug
        </Button>
        <br />
        <Text bg="#f4b452" borderTopRadius={8} mt="6" textAlign="left" p="3">
          Major Severity
        </Text>
        <Major />
      </Box>
      <Box borderRadius={8} color="#ffff" fontSize="18">
        <Button colorScheme="blue" float="right">
          Report Bug
        </Button>
        <br />
        <Text bg="#5f55d0" borderTopRadius={8} mt="6" textAlign="left" p="3">
          Medium Severity
        </Text>
        <Medium />
      </Box>
      <Box borderRadius={8} color="#ffff" fontSize="18">
        <Button colorScheme="blue" float="right">
          Report Bug
        </Button>
        <br />
        <Text bg="#277c53" borderTopRadius={8} mt="6" textAlign="left" p="3">
          Low Severity
        </Text>
        <Low />
      </Box>
    </SimpleGrid>
  );
};

export default DashBoard;
