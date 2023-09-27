import { Component, Fragment } from "react";
import {
  Checkbox,
  Stack,
  Button,
  Box,
  Flex,
  Heading,
  Input,
  Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CardMenu from "./Card";

interface Foods {
  BurgerChecked: boolean;
  PizzaChecked: boolean;
  SeblakChecked: boolean;
  SpagetiChecked: boolean;
  NasiUdukChecked: boolean;
  PecelLeleChecked: boolean;
  HotChecked: boolean;
      NewChecked: boolean;
      PromoChecked: boolean;
  isCheckboxVisible: boolean;
  name: string[];
  checked: boolean;
}

class Home extends Component<{ value?: null | undefined }, Foods> {
  constructor(props: { value?: null | undefined }) {
    super(props);
    this.state = {
      BurgerChecked: false,
      PizzaChecked: false,
      SeblakChecked: false,
      SpagetiChecked: false,
      NasiUdukChecked: false,
      PecelLeleChecked: false,
      HotChecked: false,
      NewChecked: false,
      PromoChecked: false,
      isCheckboxVisible: true,
      name: [],
      checked: false,
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
      HotChecked,
      NewChecked,
      PromoChecked,
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
    if (NewChecked) {
      message += "New, ";
    }
    if (HotChecked) {
      message += "Hot, ";
    }
    if (PromoChecked) {
      message += "Promo, ";
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
  <Flex flexDir={{ base: 'column', md: 'row' }}>
    <Box
      w={{ base: '100%', md: '30%' }}
      position={{ base: 'relative', md: 'fixed' }}
      top="0"
      left="0"
      height={{ base: 'auto', md: '100%' }}
      borderRight={{ base: 'none', md: '1px' }}
    >
      <Heading mb="10px" ml="10px">
                Restoran serba
              </Heading>
              <Divider width="90%"/>
            <Stack direction="column" p="20px 50px 50px 50px">
              
              <Flex align="center">
                <Heading mb="10px" fontSize="20px">
                  Show menu
                </Heading>
                <Button
                  size="xs"
                  onClick={this.toggleCheckboxVisibility}
                  ml={2}
                  mb="10px"
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
                  <Flex>
                    <Input placeholder="Mau makan apa hari ini?" mb="10px" />
                    <Button
                      colorScheme="teal"
                      variant="solid"
                      onClick={() => this.handleButtonClick()}
                    >
                      search
                    </Button>
                  </Flex>
                  <Heading fontSize="20px">
                  Foods
                </Heading>
                  <Checkbox
                    size="md"
                    ml="5px"
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
                    ml="5px"
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
                    ml="5px"
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
                    ml="5px"
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
                    ml="5px"
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
                    ml="5px"
                    colorScheme="red"
                    type="checkbox"
                    name="PecelLeleChecked"
                    checked={this.state.PecelLeleChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Pecel Lele
                  </Checkbox>
                  <Divider mt="10px"/>
                  <Heading fontSize="20px" mt="20px">
                  Tags
                </Heading>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="red"
                    type="checkbox"
                    name="HotChecked"
                    checked={this.state.HotChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Hot
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="red"
                    type="checkbox"
                    name="NewChecked"
                    checked={this.state.NewChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    New
                  </Checkbox>
                  <Checkbox
                    size="md"
                    ml="5px"
                    colorScheme="red"
                    type="checkbox"
                    name="PromoChecked"
                    checked={this.state.PromoChecked}
                    onChange={this.handleCheckboxChange}
                  >
                    Promo
                  </Checkbox>
                </>
              )}
            </Stack>
          </Box>

          <Box w="100%" p="50px" ml={{ base: '0', md: '30%' }}>
      <CardMenu />
    </Box>
        </Flex>
      </Fragment>
    );
  }
}

export default Home;
