import React from'react';
//styles
import { Wrapper,Content,Text } from './HeroImage.styled';
import PropTypes from 'prop-types';
const HeroImage = ({image,title,text}) =>(
    <Wrapper image= {image}>
        <Content>
        <Text>
            <h1>
                {title}
            </h1>
            <p>{text}</p>
        </Text>

        </Content>

    </Wrapper>
);
HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  };
export default HeroImage;