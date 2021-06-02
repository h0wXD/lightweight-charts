import { Coordinate } from '../model/coordinate';

import { hitTestSquare } from './series-markers-square';
import { shapeSize } from './series-markers-utils';

export function drawTriangle(
	up: boolean,
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number
): void {
	const triangleSize = shapeSize('triangleUp', size);
	const halfTriangleSize = (triangleSize - 1) / 2;

	const left = centerX - halfTriangleSize;
	const right = centerX + halfTriangleSize;
	const bottom = centerY - halfTriangleSize;
	const top = centerY + halfTriangleSize;

	ctx.beginPath();
	if (up) {
		ctx.moveTo(left, top);
		ctx.lineTo(centerX, bottom);
		ctx.lineTo(right, top);
	} else {
		ctx.moveTo(left, bottom);
		ctx.lineTo(centerX, top);
		ctx.lineTo(right, bottom);
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
