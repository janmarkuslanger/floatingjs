import animate from "./animate";

type FloatingElement = string | (() => HTMLElement);

type Options = {
    elements: FloatingElement[];
    maxElements?: number;
    interval?: number;
};

type Settings = {
    elements: FloatingElement[];
    maxElements: number;
    interval: number;
    root: HTMLElement;
};

type State = {
    elements: HTMLElement[],
};

const DEFAULTS = {
    elements: [],
    maxElements: 10,
    interval: 2000,
    root: document.body
};


class Floating {
    private settings: Settings;
    private currentState: State;
    private interval: number | undefined;

    constructor(options: Options) {
        this.currentState = {
            elements: [],
        };
        this.settings = Object.assign({}, DEFAULTS, options);
    }

    updateRoot(root: HTMLElement) {
        this.settings.root = root;
    }

    createCharElement(char: string) {
        const element = document.createElement('div');
        element.classList.add('floatingjs-element');
        element.appendChild(document.createTextNode(char));
        return element;
    }

    createElement(element: FloatingElement): HTMLElement {
        if (typeof element === 'string') {
            return this.createCharElement(element);
        }

        return element();
    }

    applyStyle(element: HTMLElement) {
        element.style.position = "fixed";
        element.style.color = "white";
        element.style.top = `-50%`;
        element.style.left = `100px`;
        element.style.pointerEvents = "none";
        element.style.zIndex = "9999";
    }

    run() {
        const isMax = this.currentState.elements.length >= this.settings.maxElements;
        
        if (isMax) {
            return;
        }

        const elementIndex = Math.floor(Math.random() * this.settings.elements.length);
        const element = this.createElement(this.settings.elements[elementIndex]);
        this.applyStyle(element);
        this.settings.root.appendChild((element));
        this.currentState.elements.push(element);
        animate(element);
        element.addEventListener('outer', () => {
            element.parentElement?.removeChild(element);
            const index = this.currentState.elements.indexOf(element);
            if (index !== -1) {
                this.currentState.elements.splice(index, 1);
            }
        })
    }

    start() {
        this.interval = setInterval(this.run.bind(this), this.settings.interval);
    }

    stop() {
        this.currentState.elements.forEach(element => element.parentElement?.removeChild(element));
        this.currentState = {
            elements: [],
        };

        clearInterval(this.interval);
    }
}

export default Floating;