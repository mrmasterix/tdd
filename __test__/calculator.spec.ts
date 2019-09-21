import Calc from '../src/calculator';

const calculator = new Calc();

describe('FEATURE: Calculator', () => {

    describe('GIVEN: Function "sum" for addition numbers from string', () => {

        describe('WHEN: String is empty', () => {
            it('THEN: Should return 0', () => {
                expect(calculator.sum('')).toEqual(0);
            });
        });

        describe('WHEN: String contains one number', () => {
            it('THEN: Should return number 1', () => {
                expect(calculator.sum('1')).toEqual(1);
            });
            it('THEN: Should return number 2', () => {
                expect(calculator.sum('2')).toEqual(2);
            });
            it('THEN: Should return number 0', () => {
                expect(calculator.sum('0')).toEqual(0);
            });
        });

        describe('WHEN: String contains several numbers devided with comma', () => {
            it('THEN: Should return sum of (1,2) = 3', () => {
                expect(calculator.sum('1,2')).toEqual(3);
            });
            it('THEN: Should return number (2,4) = 6', () => {
                expect(calculator.sum('2,4')).toEqual(6);
            });
            it('THEN: Should return number (0,2) = 2', () => {
                expect(calculator.sum('0,2')).toEqual(2);
            });
            it('THEN: Should return number (0,0) = 0', () => {
                expect(calculator.sum('0,0')).toEqual(0);
            });
            it('THEN: Should return number (1,2,3) = 6', () => {
                expect(calculator.sum('1,2,3')).toEqual(6);
            });
        });


        describe('WHEN: String contains several numbers devided with comma and \\n', () => {
            it('THEN: Should return sum of (1,2\n3) = 6', () => {
                expect(calculator.sum('1,2\n3')).toEqual(6);
            });
            it('THEN: Should return number (2\n2,4) = 8', () => {
                expect(calculator.sum('2\n2,4')).toEqual(8);
            });
        });

        describe('WHEN: String contains several numbers devided with comma and \\n one after another', () => {
            it('THEN: Should throw and error for (1\\n,2)', () => {
                expect(() => calculator.sum('1\n,2')).toThrowError('1');
            });
        });

        describe('WHEN: String contains several numbers devided with specified delimiters', () => {
            it('THEN: Should return sum of (1,2\n3) = 6', () => {
                const splitterSpy = jest.spyOn(calculator, 'splitter');
                const str = '1,2\n3!1';
                const dels = [',', '\n', '!'];
                const result = calculator.sum(str, dels);
                expect(result).toEqual(7);
                expect(splitterSpy).toHaveBeenCalledWith(str, dels);
            });
        });
    });
});