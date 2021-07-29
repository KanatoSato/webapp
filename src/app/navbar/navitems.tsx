import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.div`
    ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li`
    ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        
        

    `};
`;

export function NavItems() {

}