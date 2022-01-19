export interface DragToElementOptions {
    modifiers: {
        ctrl: boolean;
        alt: boolean;
        shift: boolean;
        meta: boolean;
    };

    offsetX: number;
    offsetY: number;
    destinationOffsetX: number;
    destinationOffsetY: number;
    speed: number;
}
