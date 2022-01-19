export interface TypeTextOptions {
    modifiers: {
        ctrl: boolean;
        alt: boolean;
        shift: boolean;
        meta: boolean;
    };

    offsetX: number;
    offsetY: number;
    caretPos: number;
    replace: boolean;
    paste: boolean;
    speed: number;
}
