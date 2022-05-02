import React from 'react';
import { MemoryRouter } from 'react-router';
import { Header } from './header';

export const BasicHeader = () => (
  <MemoryRouter>
    <Header
      logoText="Guidance Space"
      src="https://static.bit.dev/bit-logo.svg"
      alt="GuySpace Logo"
    >
      Guidance Space
    </Header>
  </MemoryRouter>
);
