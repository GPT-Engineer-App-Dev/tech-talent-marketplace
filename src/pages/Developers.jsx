import React, { useState } from "react";
import { Box, Heading, Input, Stack, Text, Button, Badge } from "@chakra-ui/react";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, NY",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "San Francisco, CA",
    technologies: ["Angular", "Express", "PostgreSQL"],
  },
];

function Developers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDevelopers = developers.filter((dev) => dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || dev.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <Box>
      <Heading mb={4}>Developers</Heading>
      <Input placeholder="Search by name or technology" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mb={4} />
      <Stack spacing={4}>
        {filteredDevelopers.map((dev) => (
          <Box key={dev.id} p={4} borderWidth={1} rounded="md">
            <Heading size="md">{dev.name}</Heading>
            <Text>{dev.location}</Text>
            <Stack direction="row" mt={2}>
              {dev.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </Stack>
            <Button mt={4} colorScheme="blue">
              Message
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Developers;
