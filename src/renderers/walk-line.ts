import { SeriesItemsIndexesRange } from '../model/time-data';

import { LineType } from './draw-line';
import { LineItem } from './line-renderer';

/**
 * BEWARE: The method must be called after beginPath and before stroke/fill/closePath/etc
 */
export function walkLine(
	ctx: CanvasRenderingContext2D,
	points: readonly LineItem[],
	lineType: LineType,
	visibleRange: SeriesItemsIndexesRange
): void {
	if (points.length === 0) {
		return;
	}

	let i = visibleRange.from;
	const x = points[i].x as number;
	const y = points[i].y as number;
	ctx.moveTo(x, y);

	i++;

	if (lineType === LineType.WithSteps) {
		for (; i < visibleRange.to; i++) {
			const currItem = points[i];
			const prevY = points[i - 1].y;
			ctx.lineTo(currItem.x, prevY);
			ctx.lineTo(currItem.x, currItem.y);
		}
	} else if (lineType === LineType.WithGaps) {
		let isGap = true;
		for (; i < visibleRange.to; i++) {
			const currItem = points[i];
			const currPrice = currItem.price;

			if (currPrice === null) {
				isGap = true;
				continue;
			}

			if (isGap) {
				ctx.moveTo(currItem.x, currItem.y);
				isGap = false;
			}

			ctx.lineTo(currItem.x, currItem.y);
		}
	} else {
		for (; i < visibleRange.to; i++) {
			const currItem = points[i];
			ctx.lineTo(currItem.x, currItem.y);
		}
	}
}
