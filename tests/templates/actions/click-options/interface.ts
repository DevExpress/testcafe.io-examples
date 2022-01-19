export interface ClickOptions {
    modifiers: {
        ctrl: boolean;
        alt: boolean;
        shift: boolean;
        meta: boolean;
    };

    offsetX: number;
    offsetY: number;
    caretPos: number;
    speed: number;
}
