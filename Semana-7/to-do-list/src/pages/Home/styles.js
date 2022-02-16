import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const ButtonLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  font-size: 24pt;
  color:white;
  background: purple;
  border-radius: 15px;
  padding: 8px 16px;
  margin-top: 14px;
`
export const Title = styled.h1`
  font-size: 72px;
  text-align: center;
  color: #5E5E5E;
`;
export const Subtitle = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #5E5E5E;
`;
export const Page = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;


`