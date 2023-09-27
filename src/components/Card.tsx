import {Component} from 'react'
import {
    Stack,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Image,
    Divider,
    ButtonGroup,
    Grid,
  } from "@chakra-ui/react";

class CardMenu extends Component {
    render() {
        return (
            <>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="food 1.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="food 2.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="food 3.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="50px">
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="food 1.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="food 2.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="food 3.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Grid>
            </>
        )
    }
}
export default CardMenu