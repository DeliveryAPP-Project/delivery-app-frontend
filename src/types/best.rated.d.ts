declare type IBestRated = {
  id: number;
	name: string;
	assessment: number;
	status: 'Aberto' | 'Fechado';
	imageUrl?: string;
}