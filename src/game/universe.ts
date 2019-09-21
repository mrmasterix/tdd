import Cell from "./cell";
import Manager from "./manager";

export default class Universe {
    public width: number = 100;
    public height: number = 100;
    public cellList: Cell[] = [];

    private manager: Manager;

    private constructor(width?: number, height?: number) {
        this.width = width || this.width;
        this.height = height || this.height;
        this.manager = new Manager();
    }

    static create(width?: number, height?: number) {
        const universe = new Universe(width, height);
        universe.createCells();
        universe.placeCells();
        universe.calculateNeighbours();


        return universe;
    }

    public get aliveCells(): Cell[] {
        return this.cellList.filter(cell => cell.isAlive);
    }

    public get deadCells(): Cell[] {
        return this.cellList.filter(cell => !cell.isAlive);
    }

    private createCells(): void {
        this.cellList = new Array(this.width * this.height)
            .fill('')
            .map(() => this.manager.createCell());
    }

    private placeCells() {
        let n = 0; 
        for (let x=0; x < this.width; x++) {
            for (let y=0; y < this.height; y++) {
                this.cellList[n].setCoordinates(x, y);
                n += 1;
            }
        }
    }


    public calculateNeighbours(): any {
        return this.cellList.reduce<Cell[]>((acc, cell: Cell, index, arr): any => {
            const curX: number = cell.x;
            const curY: number = cell.y;

            const n1 = arr.find((cell) => (cell.x === curX - 1) && (cell.y === curY - 1));
            console.log(n1);
        }, []);
    }
}