import { useReducer, useState, useEffect } from "react";
import { seriesList } from "../../helpers/helpers";
import { SerieSchema } from "../../schemas/serie";
import IconButton from "../IconButton/IconButton";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CarouselPropTypesDefault, { CarouselPropTypes } from "./Carousel.schema";

const Carousel = (props: CarouselPropTypes) => {
	const [imagesList, setImagesList] = useState([]);
	const [imgRender, setImgRender] = useState([]);
	let initialIndex: number[] = Array.from(
		{ length: props.length },
		(y, z) => z
	);

	useEffect(() => {
		setImagesList(
			seriesList.map((serie: SerieSchema) => {
				return serie.cartaz.base64;
			})
		);
	}, []);

	const setIndex = (index: number[], type: string) => {
		if (type === "increment") {
			return index.map((number) =>
				number + 1 > imagesList.length - 1 ? 0 : number + 1
			);
		} else {
			return index.map((number) =>
				number - 1 < 0 ? imagesList.length - 1 : number - 1
			);
		}
	};

	const [index, dispatch] = useReducer(setIndex, initialIndex);

	useEffect(() => {
		setImgRender(index.map((number) => imagesList[number]));
	}, [imagesList, index]);

	return (
		<div className="empol-carousel d-flex flex-row no-wrap">
			<IconButton
				functionName={() => dispatch("decrement")}
				iconName={faAngleLeft}
			/>

			{imgRender &&
				imgRender.map((image, index) => {
					return (
						<img
							className="carousel-img"
							src={image}
							alt="cartaz"
							key={index}
						/>
					);
				})}

			<IconButton
				functionName={() => dispatch("increment")}
				iconName={faAngleRight}
			/>
		</div>
	);
};

Carousel.defaultProps = CarouselPropTypesDefault

export default Carousel;
