import Cell from '../../src/game/cell';

describe('FEATURE: Cell', () => {
    describe('SCENARIO: Cell creation', () => {
        describe('WHEN: Creating cell', () => {
            it('THEN: It should be created with specified isAlive flag', () => {
                const cell = new Cell(true);

                expect(cell).toBeInstanceOf(Cell);
                expect(cell.isAlive).toBeTruthy();
            });
        });
    });

    describe('SCENARIO: Cell setCoordinates', () => {
        describe('WHEN: Creating cell', () => {
            it('THEN: It should set x and y coordinates', () => {
                const cell = new Cell(true);

                const x = 0;
                const y = 1;
                cell.setCoordinates(x,y);

                expect(cell.x).toEqual(x);
                expect(cell.y).toEqual(y);
            });
        })
    })

    describe('SCENARIO: Cell setNeighbours', () => {
        describe('WHEN: Creating neighbours', () => {
            it('THEN: It should create unique neighbours', () => {
                const cell = new Cell(true);
                cell.setCoordinates(1,1);

                const neighbours = [
                    new Cell(true).setCoordinates(0,0),
                    new Cell(true).setCoordinates(0,1),
                    new Cell(true).setCoordinates(0,2),
                    new Cell(true).setCoordinates(1,2),
                    new Cell(true).setCoordinates(2,2),
                    new Cell(true).setCoordinates(2,1),
                    new Cell(true).setCoordinates(2,0),
                    new Cell(true).setCoordinates(1,0),
                ];

                cell.setNeighbours(neighbours);

                expect(cell.neighbours.length).toEqual(8);
            });

            it('THEN: It should create throw Error for not unique coords', () => {
                const cell = new Cell(true);
                cell.setCoordinates(1,1);

                const neighbours = [
                    new Cell(true).setCoordinates(0,0),
                    new Cell(true).setCoordinates(0,0),
                    new Cell(true).setCoordinates(0,2),
                    new Cell(true).setCoordinates(1,2),
                    new Cell(true).setCoordinates(2,2),
                    new Cell(true).setCoordinates(2,1),
                    new Cell(true).setCoordinates(2,0),
                    new Cell(true).setCoordinates(1,0),
                ];

                expect(() => cell.setNeighbours(neighbours)).toThrowError('neighboursCoords are not unique');
            });
        })
    })

    
});