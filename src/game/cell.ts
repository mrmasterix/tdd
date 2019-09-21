import { uniq } from "lodash";

export default class Cell {
    public isAlive: boolean = false;
    public x: number = 0;
    public y: number = 0;
    public neighbours: Cell[] = [];

    constructor(isAlive: boolean) {
        this.isAlive = isAlive || this.isAlive;
    }

    public setCoordinates(x: number, y: number) {
        this.x = x;
        this.y = y;

        return this;
    }

    public setNeighbours(neighbours: Cell[]) {
        const neighboursCoords = neighbours.map(cell => `${cell.x}.${cell.y}`);
        const uniqueCoords = uniq(neighboursCoords);
        if (neighboursCoords.length !== uniqueCoords.length) {
            throw new Error('neighboursCoords are not unique');
        }

        this.neighbours = neighbours;
    }
}