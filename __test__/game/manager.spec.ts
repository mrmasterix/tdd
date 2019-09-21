import Manager from '../../src/game/manager';
import Cell from '../../src/game/cell';

describe('FEATURE: Manager', () => {
    describe('SCENARIO: Manager creation', () => {
        describe('WHEN: Creating Manager', () => {
            it('THEN: It should be instance of Manager class', () => {
                const manager = new Manager();

                expect(manager).toBeInstanceOf(Manager);
            });
        });
    });

    describe('SCENARIO: Cell creation by Manager', () => {
        describe('WHEN: Manager creats cell', () => {
            it('THEN: cell should be created with random isAlive flag', () => {
                const manager = new Manager();
                const cell = manager.createCell();

                expect(cell).toBeInstanceOf(Cell);
                expect(typeof cell.isAlive).toBe('boolean');
            });
        });
    });

    describe('SCENARIO: calculateNeighbours for cells', () => {
        describe('WHEN: passing a list of all cells', () => {
            it('THEN: cell should be created with random isAlive flag', () => {
                const manager = new Manager();
                const cell = manager.createCell();

                expect(cell).toBeInstanceOf(Cell);
                expect(typeof cell.isAlive).toBe('boolean');
            });
        });
    });
});