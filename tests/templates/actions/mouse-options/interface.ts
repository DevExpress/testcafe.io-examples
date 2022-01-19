export interface MouseOptions {
    modifiers: {
        ctrl: boolean;
        alt: boolean;
        shift: boolean;
        meta: boolean;
    };

    offsetX: number;
    offsetY: number;
    speed: number;
}
