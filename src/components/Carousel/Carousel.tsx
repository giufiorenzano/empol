import React, { useReducer, useState, useEffect } from 'react';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { seriesList } from '../../helpers/helpers';
import { SerieSchema } from '../../schemas/serie';
import IconButton from '../IconButton/IconButton';
import CarouselPropTypesDefault, { CarouselPropTypes } from './Carousel.schema';

const Carousel = (props: CarouselPropTypes) => {
  const { length } = props;
  const [imagesList, setImagesList] = useState([]);
  const [imgRender, setImgRender] = useState([]);
  const initialIndex: number[] = Array.from(
    { length },
    (y, z) => z,
  );

  useEffect(() => {
    setImagesList(
      seriesList.map((serie: SerieSchema) => serie.cartaz.base64),
    );
  }, []);

  const setIndex = (index: number[], type: string) => {
    if (type === 'increment') {
      return index.map((number) => (number + 1 > imagesList.length - 1 ? 0 : number + 1));
    }
    return index.map((number) => (number - 1 < 0 ? imagesList.length - 1 : number - 1));
  };

  const [index, dispatch] = useReducer(setIndex, initialIndex);

  useEffect(() => {
    setImgRender(index.map((number) => imagesList[number]));
  }, [imagesList, index]);

  return (
    <div className="empol-carousel d-flex flex-row no-wrap">
      <IconButton
        functionName={() => dispatch('decrement')}
        iconName={faAngleLeft}
      />

      {imgRender && imgRender.map((image) => (
        <img
          className="carousel-img"
          src={image}
          alt="cartaz"
          key="carousel-img"
        />
      ))}

      <IconButton
        functionName={() => dispatch('increment')}
        iconName={faAngleRight}
      />
    </div>
  );
};

Carousel.defaultProps = CarouselPropTypesDefault;

export default Carousel;
