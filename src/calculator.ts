
export default class Calc {
    public splitter(str: string, delimeters: string[] = [',', '\n']): number[] {
        return str.split(new RegExp(delimeters.join('|'), 'g')).map(v => parseInt(v, 10));
    }
    
    public sum(str: string, delimeters?: string[]): number {
        if (str === '') return 0;
        const numArr: number[] = this.splitter(str, delimeters);
        if (numArr.filter((num) => isNaN(num)).length) {
            throw new Error('1')
        }
    
        if (numArr.length > 1) return numArr.reduce((acc, v) => acc + v, 0);
    
        const num = parseInt(str, 10);
        if (num) return num;
    
        return 0;
    }
}