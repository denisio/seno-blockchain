import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Seno } from '@seno/icons';

const StyledSeno = styled(Seno)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledSeno />
    </Box>
  );
}
