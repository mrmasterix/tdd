import Universe from '../../src/game/universe';
import { uniq } from 'lodash';

describe('FEATURE: Universe', () => {
    describe('SCENARIO: Method "create" should create new universe', () => {
        describe('WHEN: Fire "create"', () => {
            it('THEN: Universe instance will be created with default parametes', () => {
                const universe = Universe.create();
                expect(universe).toBeInstanceOf(Universe);
                expect(universe.width).toEqual(100);
                expect(universe.height).toEqual(100);
            });
            it('THEN: Universe instance will be created with specified parametes', () => {
                const universe = Universe.create(50, 50);
                expect(universe).toBeInstanceOf(Universe);
                expect(universe.width).toEqual(50);
                expect(universe.height).toEqual(50);
            });
            it('THEN: Universe will be created with the list of cells', () => {
                const universe = Universe.create();
                
                const expectCellLength = universe.height * universe.width;
                expect(universe.cellList.length).toEqual(expectCellLength);

                expect(universe.aliveCells.length).toBeGreaterThan(0);
                expect(universe.deadCells.length).toBeGreaterThan(0);

                expect(universe.aliveCells.length + universe.deadCells.length).toEqual(expectCellLength);
            });

            it('THEN: Universe will be created with placed initial cells with coordinates', () => {
                const universe = Universe.create(10, 10);
                
                const expectCellLength = universe.height * universe.width;
                expect(universe.cellList.length).toEqual(expectCellLength);

                universe.cellList.forEach(cell => {
                    expect(cell.x).toBeGreaterThanOrEqual(0);
                    expect(cell.x).toBeLessThan(universe.width);
                    expect(cell.y).toBeGreaterThanOrEqual(0);
                    expect(cell.y).toBeLessThan(universe.height);
                });

                const allCoords = universe.cellList.map(cell => `${cell.x}.${cell.y}`);
                const uniqueCoords = uniq(allCoords);
                expect(uniqueCoords.length).toEqual(allCoords.length);
            });

            it('THEN: Universe will be created with placed initial cells with neighbours', () => {
                const universe = Universe.create(10, 10);
                
                const expectCellLength = universe.height * universe.width;
                expect(universe.cellList.length).toEqual(expectCellLength);

                universe.cellList.forEach(cell => {
                    expect(cell.neighbours.length).toEqual(8);

                    const neighboursCoords = cell.neighbours.map(cell => `${cell.x}.${cell.y}`);
                    const uniqueCoords = uniq(neighboursCoords);
                    expect(neighboursCoords.length).toEqual(uniqueCoords.length);
                });
            });
        });
    });
});