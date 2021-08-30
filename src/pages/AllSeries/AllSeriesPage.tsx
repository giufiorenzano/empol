import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { axios, apiUrl, apiKey } from '../../helpers/helpers';

const AllSeriesPage = () => {
  const [serieList, setSerieList] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    axios.get(`${apiUrl}trending/tv/week?api_key=${apiKey}&language=pt-BR`)
      .then((response: any) => {
        setSerieList(response.data.results);
      }).catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1>SÉRIES</h1>
      <ul>
        { serieList && serieList.map((serie: any) => (
          <li key={serie.name}>
            <Link to={`${url}/${serie.id}`} className="series-list-item">
              {serie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSeriesPage;
