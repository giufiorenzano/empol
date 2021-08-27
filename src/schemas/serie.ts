import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {faCheckCircle, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

export interface CartazSchema {
	base64: string | ArrayBuffer | null;
	lastModified: number;
	lastModifiedDate: string;
	name: string;
	size: number;
	type: string
}

export const CartazDefault: CartazSchema = {
	base64: '',
	lastModified: 0,
	lastModifiedDate: '',
	name: '',
	size: 0,
	type: '',
}

export interface SerieSchema {
	ano: string | number;
	atores: string;
	cartaz: CartazSchema;
	dia: string | number;
	mes: string;
	origem: string;
	sinopse: string;
	tempo: string;
	temporada?: string;
	cartazurl?: string;
	diretor?: string;
	titulo: string;
	slug?: string;
}

export const SerieDefault: SerieSchema = {
	ano: '',
	atores: '',
	cartaz: CartazDefault,
	dia: '',
	mes: '',
	origem: '',
	sinopse: '',
	tempo: '',
	temporada: '',
	diretor: '',
	titulo: '',
	slug: '',
	cartazurl: ''
}

export interface Buttons {
	className: string;
	color: string;
	iconName: IconDefinition;
	name?: string;
}

export const SerieButtons: Buttons[] = [
	{
		className: 'btn btn-outline-success watched m-1',
		color: 'sucess',
		iconName: faCheckCircle,
		name: 'Já vi',
	},
	{
		className: 'btn btn-outline-danger loved m-1',
		color: 'danger',
		iconName: faHeart,
	},
	{
		className: 'btn btn-outline-info share m-1',
		color: 'info',
		iconName: faShare,
		name: 'Compartilhar',
	},
];
