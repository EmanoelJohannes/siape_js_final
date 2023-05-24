import React from 'react'
import NextNProgress from 'nextjs-progressbar'
import styled from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { Toaster } from 'react-hot-toast'

import ContextProvider from '@/context/index'
import ThemesProvider from '@/theme/index'

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.2s ease-in-out;
`;

export default function Providers({ children }) {
  return (
    <ContextProvider>
      <ModalProvider backgroundComponent={FadingBackground}>
        <ThemesProvider>
          <NextNProgress
            color="#FFD789"
            stopDelayMs={200}
            height={3}
          />
          <Toaster position="bottom-right" />
          {children}
        </ThemesProvider>
      </ModalProvider>
    </ContextProvider>
  )
}
