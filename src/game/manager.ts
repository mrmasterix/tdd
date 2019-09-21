import Cell from './cell';

export default class Manager {
    public createCell(): Cell {
        const isAlive = this.getRandomFlag();
        return new Cell(isAlive);
    }

    public killCell() {}

    public reviveCell() {}

    private getRandomFlag(): boolean {
        return Boolean(Math.round(Math.random()));
    }

    calculateNeighbours() {
        
    }
}