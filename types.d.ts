type FloatingElement = string | (() => HTMLElement);

type Options = {
    elements: FloatingElement[];
    maxElements?: number; // Optional: Maximum number of elements
    interval?: number; // Optional: Interval in milliseconds
};

type Settings = {
    elements: FloatingElement[];
    maxElements: number; // Maximum number of elements
    interval: number; // Interval in milliseconds
    root: HTMLElement; // Root element for floating elements
};

type State = {
    elements: HTMLElement[]; // Array of currently floating elements
};

declare class Floating {
    private settings: Settings; // Internal settings for the instance
    private currentState: State; // Current state of floating elements
    private interval: number | undefined; // ID of the interval for `start()`

    /**
     * Creates a new Floating instance.
     * @param options - Configuration options for the instance
     */
    constructor(options: Options);

    /**
     * Creates a floating element containing a character.
     * @param char - The character to display in the floating element
     * @returns A new HTMLElement with the character
     */
    private createCharElement(char: string): HTMLElement;

    /**
     * Creates a floating element from a given input.
     * @param element - The element to float, either a string or a function returning an HTMLElement
     * @returns A new HTMLElement
     */
    private createElement(element: FloatingElement): HTMLElement;

    /**
     * Applies styles to a floating element.
     * @param element - The HTMLElement to style
     */
    private applyStyle(element: HTMLElement): void;

    /**
     * Executes the floating logic and adds an element to the DOM.
     */
    run(): void;

    /**
     * Starts the floating effect.
     */
    start(): void;

    /**
     * Stops the floating effect and removes all floating elements.
     */
    stop(): void;
}

declare function animate(element: HTMLElement): void;

export { Floating };
export default Floating;
