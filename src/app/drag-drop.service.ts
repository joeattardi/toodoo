import getElementClientRect from 'element-client-rect';

export enum Region {
  TOP,
  BOTTOM
};

export class DragDropService {
  currentDraggedItem: Element;

  getRegion(event: DragEvent): Region {
    const rect = getElementClientRect(event.target);
    const top = rect.top;
    const bottom = rect.top + rect.height;
    const midpoint = (bottom - top) / 2;
    const relativeY = event.clientY - rect.top;

    return relativeY <= midpoint ? Region.TOP : Region.BOTTOM;
  }

  handleDropLogic(srcIndex: number, destIndex: number, event: DragEvent,
      callback: (insertionIndex: number) => void) {
    let insertionIndex = destIndex;
    const region = this.getRegion(event);
    const bottomOfPrevious = region === Region.BOTTOM && destIndex === srcIndex - 1;
    const topOfNext = region === Region.TOP && destIndex === srcIndex + 1;

    if (region === Region.BOTTOM) {
      insertionIndex += 1;
    }

    if (srcIndex !== destIndex && !bottomOfPrevious && !topOfNext) {
      console.log('region', region, 'src', srcIndex, 'dest', destIndex, 'insertion', insertionIndex);
      callback(insertionIndex);
    }
  }
}
