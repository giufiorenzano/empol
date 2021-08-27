import { SerieSchema } from "../schemas/serie"

export const getList = (type: string)  => {
	let list = localStorage.getItem(type)
	if (list !== null) {
		return JSON.parse(atob(list))
	}
	else {
		return false
	}
}

export const seriesList = getList('series')


export const sendList = (list: SerieSchema[], type: string ) => {
	const jsonList = JSON.stringify(list)
	const finalList = btoa(jsonList)
	localStorage.setItem(type, finalList)
}

export const createSlug = (word: string) => word.toLowerCase().replace(/[^a-z]+/g, '-')

export const axios = require('axios')
export const apiUrl = 'https://api.themoviedb.org/3/'
export const apiKey = '3950d0dc7901f214cb4c0750451e4e57'

