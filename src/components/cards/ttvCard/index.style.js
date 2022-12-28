import styled from "styled-components";

export const Card = styled.div`
  background: radial-gradient(
    120.59% 122.95% at 40.22% -11.06%,
    rgba(232, 247, 255, 0.15) 0%,
    rgba(183, 206, 224, 0.15) 16.15%,
    rgba(139, 152, 185, 0.15) 32.82%,
    rgba(34, 80, 92, 0.15) 60.37%,
    rgba(0, 9, 17, 0.15) 100%
  );
  border-radius: 0.9375rem;
  padding: 1rem 3rem;
  border-bottom: 1px solid var(--Accent);
  margin: 2rem 0;
  & {
    @media (max-width: 1400px) {
      padding: 1rem 0.75rem;
    }
  }
`;
