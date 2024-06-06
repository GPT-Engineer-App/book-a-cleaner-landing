import { Container, Text, VStack, Button, Heading, Image } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Book a Cleaner for Your Apartment
        </Heading>
        <Image src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2V8ZW58MHx8fHwxNzE3NjY4NzY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cleaning Service" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Experience the best cleaning service at the comfort of your home. Book a professional cleaner in just a few clicks.
        </Text>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg">
          Pick your time
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
