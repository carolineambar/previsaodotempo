import React from 'react';
import {
  ToggleContainer,
  Line,
  InfoOne,
  MinMax,
  InfoTwo,
  InfoThree,
  InfoFour,
  InfoFive,
} from './Toggle.styles';

const Toggle = () => (
  <ToggleContainer>
    <h6>Niterói, RJ - Brasil</h6>
    <div> 20ºC Nublado </div>
    <InfoOne>
      <MinMax>
        <div>
          <div>16º</div>
        </div>
        <div>
          <div>25º</div>
        </div>
      </MinMax>
      <div>Sensação 19ºC</div>
    </InfoOne>
    <InfoTwo>
      <div>Vento 18km/h</div>
      <div>Umidade 89%</div>
    </InfoTwo>
    <Line />
    <InfoThree>
      <InfoFour>
        <div>Terça</div>
        <div>Quarta</div>
        <div>Quinta</div>
        <div>Sexta</div>
        <div>Sábado</div>
      </InfoFour>
      <InfoFive>
        <div>18º 26º</div>
        <div>18º 28º</div>
        <div>19º 30º</div>
        <div>23º 35º</div>
        <div>23º 37º</div>
      </InfoFive>
    </InfoThree>
  </ToggleContainer>
);

export default Toggle;
