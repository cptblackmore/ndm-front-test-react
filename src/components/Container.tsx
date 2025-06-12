import { css } from "@emotion/react";

interface ContainerProps {
  children: React.ReactNode;
}

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div css={containerStyles}>{children}</div>
  );
};
