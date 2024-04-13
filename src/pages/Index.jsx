import { Box, Heading, Text, Button, Stack, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.50" py={20}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h1" size="3xl" mb={4}>
            Hire World-Class Software Developers
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles connects you with the top 1% of global tech talent. Supercharge your team with pre-vetted experts in days, not months.
          </Text>
          <Button size="lg" colorScheme="blue">
            View Developer Listings
          </Button>
        </Box>
      </Box>

      {/* Features */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading textAlign="center" size="xl" mb={16}>
            Effortless Hiring for Software Teams
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1531506527841-6befe8901440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWduaWZ5aW5nJTIwZ2xhc3MlMjBpY29ufGVufDB8fHx8MTcxMzA1MDg4OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Search" w={20} h={20} mx="auto" mb={6} />
              <Heading size="lg" mb={2}>
                Search
              </Heading>
              <Text>Quickly find the perfect developer for your project based on skills, experience, and availability.</Text>
            </Box>

            <Box>
              <Image src="https://images.unsplash.com/photo-1533798300764-c6027a771b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGVja21hcmslMjBiYWRnZSUyMGljb258ZW58MHx8fHwxNzEzMDUwODg5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vet" w={20} h={20} mx="auto" mb={6} />
              <Heading size="lg" mb={2}>
                Vet
              </Heading>
              <Text>Every developer on Particles is pre-vetted for technical skills and professional experience.</Text>
            </Box>

            <Box>
              <Image src="https://images.unsplash.com/photo-1636819488533-1ec3cfb9c798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBpY29ufGVufDB8fHx8MTcxMzA1MDg5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hire" w={20} h={20} mx="auto" mb={6} />
              <Heading size="lg" mb={2}>
                Hire
              </Heading>
              <Text>Start working with your new team member in days. Particles makes contracts and onboarding a breeze.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* CTA */}
      <Box bg="blue.600" py={20}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading color="white" size="2xl" mb={6}>
            Build Your Dream Team
          </Heading>
          <Text color="blue.100" fontSize="xl" mb={8}>
            The most brilliant developers are waiting to help you achieve your vision. Let's get started!
          </Text>
          <Button size="lg" colorScheme="white" color="blue.600">
            View Developer Listings
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
