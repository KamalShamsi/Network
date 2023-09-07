// Importing necessary React and Chakra UI components
import React, { useState } from 'react';
import { VStack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Button } from "@chakra-ui/button";

const Login = () => {
  // State hooks for password visibility toggling
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State hooks for form input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission (yet to be implemented)
  const submitHandler = () => {};

  return (   
    <VStack spacing='5px'>
      {/* Email Input Field */}
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl> 

      {/* Password Input Field with visibility toggle */}
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input 
            pr="4.5rem"
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* Submit Button */}
      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15}}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
}
 
export default Login;
