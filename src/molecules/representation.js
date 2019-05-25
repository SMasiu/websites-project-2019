import React from 'react';
import styled from 'styled-components';
import RepCard from '../atoms/rep-card';
import BlackList from '../atoms/black-list';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Representation = () => (
    <Wrapper>
        <RepCard title="Label">
            <BlackList>
                <li>atomic Records, Jake Coldham</li>
                <li>info@mysite.com, 123-456-7890</li>
            </BlackList>
        </RepCard>
        <RepCard title="Booking">
            <BlackList>
                <li>The Bookerz, Daniel Ku</li>
                <li>info@mysite.com, 123-456-7890</li>
            </BlackList>
        </RepCard>
        <RepCard title="Menagment">
            <BlackList>
                <li>Karen Blanche</li>
                <li>info@mysite.com, 123-456-7890</li>
            </BlackList>
        </RepCard>
        <RepCard title="PR">
            <BlackList>
                <li>That Girl Pr, Sarah Brookstone</li>
                <li>info@mysite.com, 123-456-7890</li>
            </BlackList>
        </RepCard>
    </Wrapper>
);

export default Representation;