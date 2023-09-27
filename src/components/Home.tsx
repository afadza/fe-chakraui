import { Component, Fragment } from "react";
import {
  Checkbox,
  Stack,
  Button,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CardMenu from "./Card";

interface Foods {
  BurgerChecked: boolean
      PizzaChecked: boolean
      SeblakChecked: boolean
      SpagetiChecked: boolean
      NasiUdukChecked: boolean
      PecelLeleChecked: boolean
      isCheckboxVisible: boolean
      name: string[]
      checked: boolean
}

class Home extends Component<{value?: null | undefined}, Foods> {
  constructor(props: {value?: null | undefined}) {
    super(props);
    this.state = {
      BurgerChecked: false,
      PizzaChecked: false,
      SeblakChecked: false,
      SpagetiChecked: false,
      NasiUdukChecked: false,
      PecelLeleChecked: false,
      isCheckboxVisible: true, 
      name: [],
      checked: false
    };
  }

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  handleButtonClick = () => {
    const {
      BurgerChecked,
      PizzaChecked,
      SeblakChecked,
      SpagetiChecked,
      NasiUdukChecked,
      PecelLeleChecked,
    } = this.state;

    let message = "";

    if (BurgerChecked) {
      message += "Burger, ";
    }
    if (PizzaChecked) {
      message += "Pizza, ";
    }
    if (SeblakChecked) {
      message += "Seblak, ";
    }
    if (SpagetiChecked) {
      message += "Spageti, ";
    }
    if (NasiUdukChecked) {
      message += "Nasi Uduk, ";
    }
    if (PecelLeleChecked) {
      message += "Pecel Lele, ";
    }

    if (message) {
      alert(`Anda memilih: ${message}`);
    } else {
      alert("Tidak ada pilihan yang dipilih.");
    }
  };

  toggleCheckboxVisibility = () => {
    this.setState((prevState) => ({
      isCheckboxVisible: !prevState.isCheckboxVisible,
    }));
  };

  render() {
    const { isCheckboxVisible } = this.state;

    return (
      <Fragment>
        <Flex>
          <Box
            w="30%"
            position="fixed"
            top="0"
            left="0"
            height="100%"
            borderRight="1px"
          >
            <Stack direction="column" p="50px">
              <Flex align="center">
                <Heading as="h1" mb="20px">
                  Pilihan menu
                </Heading>
                <Button
                  size="sm"
                  onClick={this.toggleCheckboxVisibility}
                  ml={2}
                  mb='10px'
                >
                  {isCheckboxVisible ? (
                    <FontAwesomeIcon icon={faArrowUp} />
                  ) : (
                    <FontAwesomeIcon icon={faArrowDown} />
                  )}
                </Button>
              </Flex>

              {isCheckboxVisible && (
                <>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    type="checkbox"
                    name="BurgerChecked"
                    checked={this.state.BurgerChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Burger
                  </Checkbox>

                  <Checkbox
                    size="md"
                    colorScheme="red"
                    type="checkbox"
                    name="PizzaChecked"
                    checked={this.state.PizzaChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Pizza
                  </Checkbox>

                  <Checkbox
                    size="md"
                    colorScheme="red"
                    type="checkbox"
                    name="SeblakChecked"
                    checked={this.state.SeblakChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Seblak
                  </Checkbox>

                  <Checkbox
                    size="md"
                    colorScheme="red"
                    type="checkbox"
                    name="SpagetiChecked"
                    checked={this.state.SpagetiChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Spageti
                  </Checkbox>

                  <Checkbox
                    size="md"
                    colorScheme="red"
                    type="checkbox"
                    name="NasiUdukChecked"
                    checked={this.state.NasiUdukChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Nasi Uduk
                  </Checkbox>

                  <Checkbox
                    size="md"
                    colorScheme="red"
                    type="checkbox"
                    name="PecelLeleChecked"
                    checked={this.state.PecelLeleChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Pecel Lele
                  </Checkbox>
                

              <Button
                colorScheme="teal"
                variant="solid"
                w="50%"
                mt="20px"
                onClick={() => this.handleButtonClick()}
              >
                Tampilkan menu
              </Button>
              </>
              )}
            </Stack>
          </Box>

          <Box w="100%" p="50px" ml="30%">
            <CardMenu />
          </Box>
        </Flex>
      </Fragment>
    );
  }
}

export default Home;
