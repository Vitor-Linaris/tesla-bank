import styled from 'styled-components'
import Colors from '../../theme/theme.color'

export const Container = styled.div`
  width: 100%;
  margin: 132px auto 0px auto;
  max-width: 1246px;
  padding: 0 15px;
  display: flex;
`

export const TextArea = styled.div`
  width: 100%;
  max-width: 685px;
`

export const Title = styled.h1`
  color: ${Colors.neutra.dark};
  font-family: 'DM Sans';
  font-size: 88px;
  font-weight: 500;
  line-height: 110%; /* 96.8px */
  letter-spacing: -2.64px;
  padding-bottom: 16px;
`

export const Description = styled.h4`
  max-width: 592px;
  color: ${Colors.neutra.dark};
  font-size: 24px;
  font-weight: 500;
  line-height: 170%; /* 40.8px */
  padding-bottom: 40px;
`

export const List = styled.ul`
  max-width: 619px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  gap: 16px 48px;
  margin-bottom: 56px;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  color: ${Colors.neutra.dark};
  font-size: 18px;
  font-weight: 500;
  line-height: 180%;
`

export const IconBg = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #fff8f9;
  margin-right: 16px;
`

export const CtaDownload = styled.div`
  max-width: 422px;
  display: flex;
  align-items: center;
  gap: 48px;
`
export const DownloadMobile = styled.div`
  display: flex;
  align-items: end;
  gap: 40px;
`

export const CreaditCardArea = styled.div`
  position: relative;
`
