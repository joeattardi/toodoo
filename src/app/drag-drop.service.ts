import getElementClientRect from 'element-client-rect';

export enum Region {
  TOP,
  BOTTOM
};

export class DragDropService {
  currentDraggedItem: Element;
}
