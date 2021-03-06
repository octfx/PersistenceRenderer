/**
 * Wrapper class for min/max bounds
 */
export default class Bounds {
    readonly min: number;
    readonly max: number;
    readonly width: number;
    constructor(min: number, max: number, width?: number);
    /**
     * Compares two bounds
     *
     * @param other {Bounds}
     */
    equals(other: Bounds): boolean;
    toString(): string;
}
