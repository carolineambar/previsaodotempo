import React from 'react';
import {
  ToggleContainer,
  Line,
  TempSens,
  MinMax,
  VenUm,
  TempWeek,
  NextDays,
  TempNextDays,
  ArrowMax,
  ArrowMin,
  MaxMin,
  Temp,
  Head,
  SenVenUm,
} from './Toggle.styles';

const Toggle = () => (
  <ToggleContainer>
    <Head>Niterói, RJ - Brasil</Head>
    <Temp> 20ºC Nublado </Temp>
    <TempSens>
      <MinMax>
        <MaxMin>
          <ArrowMin />
          <b>16º</b>
        </MaxMin>
        <MaxMin>
          <ArrowMax />
          <b>25º</b>
        </MaxMin>
      </MinMax>
      <SenVenUm>
        <span>Sensação</span>
        <b>19ºC</b>
      </SenVenUm>
    </TempSens>
    <VenUm>
      <SenVenUm>
        <span>Vento</span>
        <b>18km/h</b>
      </SenVenUm>
      <SenVenUm>
        <span>Umidade</span>
        <b>89%</b>
      </SenVenUm>
    </VenUm>
    <Line />
    <TempWeek>
      <NextDays>
        <b>Terça</b>
        <TempNextDays>
          <span>18°</span>
          <span>26°</span>
        </TempNextDays>
      </NextDays>
      <NextDays>
        <b>Quarta</b>
        <TempNextDays>
          <span>18°</span>
          <span>28°</span>
        </TempNextDays>
      </NextDays>
      <NextDays>
        <b>Quinta</b>
        <TempNextDays>
          <span>19°</span>
          <span>30°</span>
        </TempNextDays>
      </NextDays>
      <NextDays>
        <b>Sexta</b>
        <TempNextDays>
          <span>23°</span>
          <span>35°</span>
        </TempNextDays>
      </NextDays>
      <NextDays>
        <b>Sábado</b>
        <TempNextDays>
          <span>23°</span>
          <span>37°</span>
        </TempNextDays>
      </NextDays>
    </TempWeek>
  </ToggleContainer>
);

export default Toggle;
