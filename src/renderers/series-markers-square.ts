import { Coordinate } from '../model/coordinate';

import { shapeSize } from './series-markers-utils';

export function drawSquare(
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	borderSize?: number,
	borderColor?: string
): void {
	const currentColor = ctx.fillStyle;
	const squareSize = shapeSize('square', size);
	const halfSize = (squareSize - 1) / 2;
	const left = centerX - halfSize;
	const top = centerY - halfSize;

	if (borderColor) {
		ctx.fillStyle = borderColor;
	}

	ctx.fillRect(left, top, squareSize, squareSize);

	if (borderColor) {
		const thickNess = borderSize || 2;
		const thickNess2 = thickNess * 2;
		ctx.fillStyle = currentColor;
		ctx.fillRect(left + thickNess, top + thickNess, squareSize - thickNess2, squareSize - thickNess2);
	}
}

export function hitTestSquare(
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	const squareSize = shapeSize('square', size);
	const halfSize = (squareSize - 1) / 2;
	const left = centerX - halfSize;
	const top = centerY - halfSize;

	return x >= left && x <= left + squareSize &&
		y >= top && y <= top + squareSize;
}
