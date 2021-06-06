export type SeriesMarkerPosition = 'aboveBar' | 'belowBar' | 'inBar' | number;

export type SeriesMarkerShape = 'circle' | 'square' | 'arrowUp' | 'arrowDown' | 'triangleUp' | 'triangleDown';

export interface SeriesMarker<TimeType> {
	time: TimeType;
	position: SeriesMarkerPosition;
	shape: SeriesMarkerShape;
	color: string;
	id?: string;
	text?: string;
	size?: number;
	borderColor?: string;
	borderSize?: number;
}

export interface InternalSeriesMarker<TimeType> extends SeriesMarker<TimeType> {
	internalId: number;
}
