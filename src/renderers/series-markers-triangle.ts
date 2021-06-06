import { Coordinate } from '../model/coordinate';

import { hitTestSquare } from './series-markers-square';
import { shapeSize } from './series-markers-utils';

export function drawTriangle(
	up: boolean,
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	borderSize?: number,
	borderColor?: string
): void {
	const currentColor = ctx.fillStyle;
	const triangleSize = shapeSize('triangleUp', size);
	const halfTriangleSize = (triangleSize - 1) / 2;

	const left = centerX - halfTriangleSize;
	const right = centerX + halfTriangleSize;
	const bottom = centerY - halfTriangleSize;
	const top = centerY + halfTriangleSize;

	ctx.beginPath();

	if (borderColor) {
		ctx.fillStyle = borderColor;
	}

	if (up) {
		ctx.moveTo(left, top);
		ctx.lineTo(centerX, bottom);
		ctx.lineTo(right, top);
	} else {
		ctx.moveTo(left, bottom);
		ctx.lineTo(centerX, top);
		ctx.lineTo(right, bottom);
	}

	if (borderColor) {
		const thickNess = borderSize || 2;
		const thickNess2 = thickNess * 2;

		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = currentColor;

		if (up) {
			ctx.moveTo(left + thickNess, top - thickNess);
			ctx.lineTo(centerX, bottom + thickNess2);
			ctx.lineTo(right - thickNess, top - thickNess);
		} else {
			ctx.moveTo(left + thickNess, bottom + thickNess);
			ctx.lineTo(centerX, top - thickNess2);
			ctx.lineTo(right - thickNess, bottom + thickNess);
		}
	}

	ctx.fill();
}

export function hitTestTriangle(
	up: boolean,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	// TODO: implement triangle hit test
	return hitTestSquare(centerX, centerY, size, x, y);
}
