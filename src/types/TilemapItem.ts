export type TileSchema = {
    id: string;
};

export class Sprite {
    private spriteId: string; 
    private htmlImage: HTMLImageElement;

    constructor(spriteId: string, imageSrc: string) {
        this.spriteId = spriteId;
        this.htmlImage = new Image();
        this.htmlImage.src = imageSrc;
    }

    get id() {
        return this.spriteId;
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