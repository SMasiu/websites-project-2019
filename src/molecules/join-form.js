import React from 'react';
import Input from '../atoms/input';
import Submit from '../atoms/button-secondary';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-top: 15px;
`;

const Form = () => (
    <form>

        <Input placeholder="Enter your emal here*" required/>

        <InputWrapper>
            <Submit>Subscribe Now</Submit>
        </InputWrapper>
    </form>
);

export default Form;