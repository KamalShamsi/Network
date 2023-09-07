// Importing necessary React and Chakra UI components
import React, { useState } from 'react';
import { VStack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Button } from "@chakra-ui/button";

const SignUp = () => {
  // State hooks for password visibility toggling
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State hooks for form input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");

  // Function to handle picture upload (yet to be implemented)
  const postDetails = (pics) => {};

  // Function to handle form submission (yet to be implemented)
  const submitHandler = () => {};

  return (   
    <VStack spacing='5px'>
      {/* Name Input Field */}
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
          placeholder='Enter Your Name'
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

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

      {/* Confirm Password Input Field with visibility toggle */}
      <FormControl id='confirm-password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input 
            pr="4.5rem"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirm Your Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* Picture Upload Field */}
      <FormControl id='pic' isRequired>
        <FormLabel>Upload your Picture</FormLabel>
        <Input 
          type='file'
          p={1.5}
          accept='image/*'
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      {/* Submit Button */}
      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15}}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
}
 
export default SignUp;
