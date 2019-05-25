import React from 'react';
import img from '../assets/album.png';
import play from '../assets/play.png';
import back from '../assets/back.png';
import next from '../assets/next.png';
import List from '../atoms/black-list';
import styled from 'styled-components';
import Button from '../atoms/button-light';
import sound from '../assets/sound.png'
import playlist from '../assets/playlist.png';
import share from '../assets/share.png'

const Wrapper  = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-gap: 20px;
  
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`

const PlayWrapper = styled.div`
  height: 145px;  
  width: 145px;
  margin: 0 auto 10px auto;
  cursor: pointer;
`;

const ChangeWrapper = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-around;
`;

const ImgBoxSm = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Info = styled.div`
  height: 155px;
  display: flex;
`;

const Li = styled.li`
  margin: 10px 0;
`;

const MusicControl = styled.div`
  display: flex;
`;

const Slide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const InnerSlide = styled.div`
  height: 10px;
  width: 90%;
  background-color: ${({theme}) => theme.light};
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    height: 20px;
    width: 10px;
    background-color: ${({theme}) => theme.dark};
    position: absolute;
    top: -5px;
    left: 0;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

const Buy = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Music = () => (

    <Wrapper>

        <div>
            <img src={img} alt="album"/>
        </div>

        <div>
            <PlayWrapper>
                <img src={play} alt="play"/>
            </PlayWrapper>
            <ChangeWrapper>
                <ImgBoxSm>
                    <img src={back} alt="back"/>
                </ImgBoxSm>
                <ImgBoxSm>
                    <img src={next} alt="next"/>
                </ImgBoxSm>
            </ChangeWrapper>
        </div>

        <div>
            <Info>
                <List>
                    <Li>Dark Soul</Li>
                    <Li>Dark Soul</Li>
                    <Li>Atomic music</Li>
                </List>

                <Buy>

                    <Button>Album $10.99</Button>
                    <Button>Track $1.99</Button>

                </Buy>
            </Info>
            <MusicControl>

                <Slide>
                    <InnerSlide/>
                </Slide>
                <BtnWrapper>

                    0:00/3:27

                    <ImgBoxSm>
                        <img src={sound} alt="back"/>
                    </ImgBoxSm>
                    <ImgBoxSm>
                        <img src={playlist} alt="next"/>
                    </ImgBoxSm>
                    <ImgBoxSm>
                        <img src={share} alt="next"/>
                    </ImgBoxSm>
                </BtnWrapper>

            </MusicControl>
        </div>

    </Wrapper>

);

export default Music;