import { Component } from "react";
import {
  Stack,
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Grid,
  Divider
} from "@chakra-ui/react";
import axios from "axios";

interface Data {
  data: {
    name: string;
    imageUrl: string;
    categories: string;
    description: string;
    badge: string;
  }[];
}

class CardMenu extends Component<{ value?: null | undefined }, Data> {
  constructor(props: { value?: null | undefined }) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.npoint.io/624c99ed50dcd45fb160")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <>
      <Divider w={{ base: '100%', md: 'none' }}
      mb={{ base: '20px', md: 'none' }}/>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {this.state.data.map((item, index) => (
            <Card key={index} maxW="sm">
              <CardBody>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "0px 10px",
                      marginTop: "-10px",
                      position: "absolute",
                      backgroundColor: "#186F65",
                      borderRadius: "5px",
                      color:"white",
                      fontWeight: "bold"
                    }}
                  >
                    {item.badge}
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "120px",
                  }}
                >
                  <Image
                    src={item.imageUrl}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    w="100%"
                    h="100%"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.name}</Heading>
                  <Text color="blue.600" fontSize="sm">
                    {item.categories}
                  </Text>
                  <div>
                    <Text fontSize="sm">{item.description}</Text>
                  </div>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </>
    );
  }
}
export default CardMenu;
