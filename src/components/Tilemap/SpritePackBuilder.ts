import mergeImages from 'merge-images';
import { Sprite } from '../..';

export type SpritePack = {
    /**
     * Base64 image/png
     */
    base64: string;
    packDefinition: SpritePackDefinition;
};

/**
 * sprite id key based dictionary with sprite positions
 */
export type SpritePackDefinition = {
    [spriteId: string]: BuildedSpriteDefinition;
};

/**
 * Sprite position on packed image
 */
export type BuildedSpriteDefinition = {
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
};

/**
 * 
 * @param sprites 
 * @returns spritePack
 */
export async function buildSpritePack(
    sprites: Sprite[],
): Promise<SpritePack> {
    const buildedPack: SpritePackDefinition = {};
    const imageSources: mergeImages.ImageSource[] = [];

    let totalHeight = 0;
    let totalWidht = 0;

    sprites.forEach((sprite, index) => {
        const width = sprite.width;
        const height = sprite.height;

        if (totalHeight < height) {
            totalHeight = height;
        }

        const imageSource: mergeImages.ImageSource = {
            src: sprite.src,
            x: totalWidht,
            y: 0,
        };
        const buildedSprite: BuildedSpriteDefinition = {
            index,
            x: totalWidht,
            y: 0,
            width,
            height,
        };

        buildedPack[sprite.id] = buildedSprite;

        totalWidht += width;

        imageSources.push(imageSource);
    })

    const options: mergeImages.Options = {
        format: 'image/png',
        width: totalWidht,
        height: totalHeight,
    };

    const base64Pack = await mergeImages(imageSources, options);

    const result: SpritePack = {
        base64: base64Pack,
        packDefinition: buildedPack,
    };

    console.log(result);

    return result;
}