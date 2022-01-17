interface TypeTextOptions {
    modifiers: {
        ctrl: Boolean;
        alt: Boolean;
        shift: Boolean;
        meta: Boolean;
    };

    offsetX: Number;
    offsetY: Number;
    caretPos: Number;
    replace: Boolean;
    paste: Boolean;
    speed: Number;
}
