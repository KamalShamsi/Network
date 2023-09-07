// Import necessary components from Chakra UI
import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Flex
} from "@chakra-ui/react";

import Login from "../Components/Authentication/Login";
import SignUp from "../Components/Authentication/SignUp";

// Define the Homepage functional component
function Homepage() { 
    return (
        // Main container for the homepage with a max width and content centered
        <Container maxW="xl" centerContent>
        
            {/* Flex box used to center the 'Network' text both horizontally and vertically */}
            <Flex
                justifyContent="center"
                alignItems="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                height="100px" 
            >
                <Text fontSize="4xl" fontFamily="Work sans">
                    Network
                </Text>
            </Flex>
            
            {/* Box containing the Login and Sign Up tabs */}
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs isFitted variant="soft-rounded">
                    {/* Tab titles */}
                    <TabList mb="1em">
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    {/* Tab content */}
                    <TabPanels>
                        {/* Login tab content */}
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        {/* Sign Up tab content */}
                        <TabPanel>
                            <SignUp/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

// Export the Homepage component for use in other parts of the app
export default Homepage;
