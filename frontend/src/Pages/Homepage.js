import React from "react";
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Center } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createContext, useContext, useEffect, useState } from "react";

const Homepage = () => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (userInfo) history.push("/chats");
  }, [history]);


  return <Container maxW="xl" centerContent>
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
    >
      <Text fontSize="4xl" fontFamily="work sans" color="black"> Chit-Chat</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
      <Tabs variant='soft-rounded'>
        <TabList mb="1em">
          <Tab width="50%">Login</Tab>
          <Tab width="50%">SignUp</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container >;
};

export default Homepage;
