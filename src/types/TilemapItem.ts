export type TileSchema = {
    id?: string;
};

export type SpriteDefinition = {
    id: string;
    sprite: Sprite;
};

export class Sprite {
    private htmlImage: HTMLImageElement;

    constructor(imageSrc: string) {
        this.htmlImage = new Image();
        this.htmlImage.src = imageSrc;
    }

    get width() {
        return this.htmlImage.width;
    }

    get height() {
        return this.htmlImage.height;
    }

    get src() {
        return this.htmlImage.src;
    }
}