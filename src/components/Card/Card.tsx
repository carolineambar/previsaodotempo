import React from 'react';
import {
  Container,
  Header,
  Info,
  AdditionalInfoContainer,
  Row,
  InfoRow,
  Line,
  TemperatureWeekly,
  Day,
  DayWeek,
  TemperatureDay,
  Arrow,
} from './Card.styles';
import { City } from '../../types/city';

const Card: React.FC<{ city: City }> = ({ city }) => (
  <Container>
    <Header>{city.location}</Header>
    <Info> 20ºC Nublado </Info>
    <AdditionalInfoContainer>
      <Row>
        <InfoRow>
          <Row>
            <Arrow small />
            <b>16º</b>
          </Row>
          <Row>
            <Arrow />
            <b>25º</b>
          </Row>
        </InfoRow>
        <InfoRow>
          <span>Sensação</span>
          <b>19ºC</b>
        </InfoRow>
      </Row>
      <Row>
        <InfoRow>
          <span>Vento</span>
          <b>18km/h</b>
        </InfoRow>
        <InfoRow>
          <span>Umidade</span>
          <b>89%</b>
        </InfoRow>
      </Row>
    </AdditionalInfoContainer>
    <Line />
    <TemperatureWeekly>
      <Day>
        <DayWeek>Terça</DayWeek>
        <TemperatureDay>
          <span>18°</span>
          <span>26°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Quarta</DayWeek>
        <TemperatureDay>
          <span>18°</span>
          <span>28°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Quinta</DayWeek>
        <TemperatureDay>
          <span>19°</span>
          <span>30°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Sexta</DayWeek>
        <TemperatureDay>
          <span>23°</span>
          <span>35°</span>
        </TemperatureDay>
      </Day>
      <Day>
        <DayWeek>Sábado</DayWeek>
        <TemperatureDay>
          <span>23°</span>
          <span>37°</span>
        </TemperatureDay>
      </Day>
    </TemperatureWeekly>
  </Container>
);

export default Card;
