import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #FF5252;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #ff7676;
      border-color: #ff7676;
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #1976D2;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #64B5F6;
      border-color: #64B5F6;
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #00838F;
    color: white;
    &:hover {
      background-color: #00acc1;
      border-color: #00acc1;
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #1976D2;
    color: #fff;
    &:hover {
      background-color: #2196F3;
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #3949AB;
    color: #fff;
    &:hover {
      background-color: #5C6BC0;
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background-color: #1976D2;
    color: #fff;
    &:hover {
      background-color: #2196F3;
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #00838F;
    color: #fff;
    &:hover {
      background-color: #00ACC1;
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #455A64;
    color: white;
    &:hover {
      background-color: #607D8B;
      border-color: #607D8B;
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #303F9F;
    color: white;
    &:hover {
      background-color: #3F51B5;
      border-color: #3F51B5;
      box-shadow: none;
    }
  }
`;
