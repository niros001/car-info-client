import styled, {css} from 'styled-components';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 100%;
`

export const Responsive = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
`;

export const Title = styled.div`
  font-size: 49px;
  font-weight: bold;
  color: #1F2737;
  margin-bottom: 10px;
`

export const Subtitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: #1F2737;
`

export const Label = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #555FDE;
  margin-top: 35px;
  margin-bottom: 10px;
`

export const Info = styled.div`
  font-size: 16px;
  color: #1F2737;
`
