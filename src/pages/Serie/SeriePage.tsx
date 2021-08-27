import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, apiUrl, apiKey } from '../../helpers/helpers';
import { Buttons, SerieButtons } from '../../schemas/serie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SeriePage = () => {
	const { slug } = useParams<{slug: string}>();
	const [serie, setSerie] = useState<any>();

	useEffect(() => {
		axios.get(`${apiUrl}tv/${slug}?api_key=${apiKey}&language=pt-BR`)
		.then((response: any) => {
			setSerie(response.data)
		})
		.catch((error: any) => {
			console.log(error)
		})
	}, [slug])

	return (
		<Fragment>
			{serie && (
				<>
				<section className='first empol-serie-header p-3 d-flex justify-content-center '>
					<img src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`} alt='cartaz da série' className='shadow serie-poster col-xl-3 col-md-4 col-md empol-serie-poster'  />

							<div className='d-flex flex-column align-items-end h-100 col-auto'>
								<h1 className='text-center empol-serie-title'>
									{serie.name}
								</h1>
								<div className='text-right empol-serie-information justify-content-between'>
									<div className='row no-gutters justify-content-between'>
										<h5 className='empol-serie-rate text-stars'>
											Nota: {serie.vote_average}
										</h5>
										<span className='empol-serie-stars'>
											<FontAwesomeIcon icon={faStar} />
											<FontAwesomeIcon icon={faStar}/>
											<FontAwesomeIcon icon={faStar} />
											<FontAwesomeIcon icon={faStar} />
											<FontAwesomeIcon icon={faStar} />
										</span>
									</div>

									<p className='empol-serie-director'>
										Temporadas: {serie.number_of_seasons}
									</p>

									<p className='empol-serie-director'>
										Episódios: {serie.number_of_episodes}
									</p>

									<p className='empol-serie-time'>
										Duração média dos episódios: {serie.episode_run_time[0]} minutos
									</p>
								</div>

								<div className='mt-auto empol-serie-buttons'>
									{SerieButtons.map((button: Buttons, index: number) => {
										return (
											<Button
												outline
												color={button.color}
												className={button.className}
												key={`${button.name}-${index}`}
											> <FontAwesomeIcon icon={button.iconName} />
											{button.name}
											</Button>
										);
									})}
								</div>
							</div>
					</section>

					<section className='serie-info'>
						<div className='row no-gutters'>
							<div className='col serie-info-title'>
								<h2 className='text-center p-3 title'>Sobre</h2>
							</div>
						</div>

						<div className='row p-3 no-gutters justify-content-center d-flex flex-wrap'>
							<div className='col-xl-4 col-lg-6 col-md-8 col-sm-8'>
								<h4 className='text-center'>Sinopse</h4>

								<p className='text-justify'>{serie.overview}</p>
							</div>

							<div className='col-xl-2 col-lg-2 col-md-4 col-sm-4'>
								<h4 className='text-center'>Gêneros</h4>
								{serie.genres.map((genre: any) => (
									<p className='text-center serie-actor' key={genre.name}>
											{genre.name}
									</p>
								))}
							</div>
						</div>
					</section>
				</>
			)}
		</Fragment>
	)
}

export default SeriePage
