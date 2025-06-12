import { css, Global } from "@emotion/react";

export const GlobalStyles: React.FC = () => {
  return (
    <Global 
      styles={(theme) => css`
        * {
          box-sizing: border-box;

          &:focus {
            outline: 2px solid ${theme.colors.grey[300]};
          }
        }
        body {
          margin: 0;
          padding: 0;
          font-family: ${theme.font.family};
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
        }
      `}
    />
  );
};
