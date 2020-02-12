/**
 * padding: Inner canvas padding
 *
 * canvasWidth: Width of Canvas in px
 * canvasHeight: Height of Canvas in px
 * strokeColor: Canvas stroke color
 *
 * chunks: Chunk bucket size for vtk points
 * waitTime: Time in ms between chunk draws
 *
 * @type {ISettings}
 */
import { pointDrawFunction } from './control/renderer-interface';
export interface ISettings {
    readonly padding: number | Padding;
    readonly canvasWidth: number;
    readonly canvasHeight: number;
    readonly strokeStyle: string;
    readonly fillStyle: string;
    readonly chunks: number;
    readonly waitTime: number;
    readonly pointDrawFunction: pointDrawFunction | undefined;
    readonly enableSelection: boolean;
    readonly enableSlider: boolean;
    readonly enableAxes: boolean;
    readonly axesTickCount: number | number[];
    readonly axesTickLength: number | number[];
    readonly axesColor: string;
    readonly axesTickColor: string;
    /**
     * Accessor for settings padding
     * If pos is undefined padding.left or padding will be returned
     *
     * @param type {string|undefined} left / top / right / bottom
     * @throws {Error} If key does not exist on padding
     */
    getPadding(type?: string): number;
}
export declare type Padding = {
    [key: string]: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export declare const DefaultSettings: ISettings;
