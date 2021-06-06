import { ceiledOdd } from '../helpers/mathex';

import { Coordinate } from '../model/coordinate';

import { hitTestSquare } from './series-markers-square';
import { shapeSize } from './series-markers-utils';

export function drawArrow(
	up: boolean,
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	borderSize?: number,
	borderColor?: string
): void {
	const currentColor = ctx.fillStyle;
	const arrowSize = shapeSize('arrowUp', size);
	const halfArrowSize = (arrowSize - 1) / 2;
	const baseSize = ceiledOdd(size / 2);
	const halfBaseSize = (baseSize - 1) / 2;

	if (borderColor) {
		ctx.fillStyle = borderColor;
	}

	ctx.beginPath();
	if (up) {
		ctx.moveTo(centerX - halfArrowSize, centerY);
		ctx.lineTo(centerX, centerY - halfArrowSize);
		ctx.lineTo(centerX + halfArrowSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY + halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY + halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY);
	} else {
		ctx.moveTo(centerX - halfArrowSize, centerY);
		ctx.lineTo(centerX, centerY + halfArrowSize);
		ctx.lineTo(centerX + halfArrowSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY - halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY - halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY);
	}

	if (borderColor) {
		const thickNess = borderSize || 2;
		const thickNess2 = thickNess * 2;

		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = currentColor;

		if (up) {
			ctx.moveTo(centerX - halfArrowSize + thickNess2, centerY - thickNess);
			ctx.lineTo(centerX, centerY - halfArrowSize + thickNess);
			ctx.lineTo(centerX + halfArrowSize - thickNess2, centerY - thickNess);
			ctx.lineTo(centerX + halfBaseSize - thickNess, centerY - thickNess);
			ctx.lineTo(centerX + halfBaseSize - thickNess, centerY + halfArrowSize - thickNess);
			ctx.lineTo(centerX - halfBaseSize + thickNess, centerY + halfArrowSize - thickNess);
			ctx.lineTo(centerX - halfBaseSize + thickNess, centerY - thickNess);
		} else {
			ctx.moveTo(centerX - halfArrowSize + thickNess2, centerY + thickNess);
			ctx.lineTo(centerX, centerY + halfArrowSize - thickNess);
			ctx.lineTo(centerX + halfArrowSize - thickNess2, centerY + thickNess);
			ctx.lineTo(centerX + halfBaseSize - thickNess, centerY + thickNess);
			ctx.lineTo(centerX + halfBaseSize - thickNess, centerY - halfArrowSize + thickNess);
			ctx.lineTo(centerX - halfBaseSize + thickNess, centerY - halfArrowSize + thickNess);
			ctx.lineTo(centerX - halfBaseSize + thickNess, centerY + thickNess);
		}
	}

	ctx.fill();
}

export function hitTestArrow(
	up: boolean,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	// TODO: implement arrow hit test
	return hitTestSquare(centerX, centerY, size, x, y);
}
