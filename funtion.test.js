import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './function.js'

test('Testing Capitalize', ()=>{
    expect(capitalize("test")).toBe("Test");
});

test('Testing Capitalize', ()=>{
    expect(capitalize("odin")).toBe("Odin");
});

test('Testing Capitalize', ()=>{
    expect(capitalize("project")).toBe("Project");
});

test('Testing Reverse of String', ()=>{
    expect(reverseString("test")).toBe("tset");
});

test('Testing Reverse of String', ()=>{
    expect(reverseString("oDiN")).toBe("NiDo");
});

test('Testing Reverse of String', ()=>{
    expect(reverseString("PROJECT")).toBe("TCEJORP");
});

test('Testing Addition 1', ()=>{
    expect(calculator.addition(2,2)).toBe(4);
});

test('Testing Addition 2', ()=>{
    expect(calculator.addition(0.2,0.2)).toBe(0.4);
});

test('Testing Addition 3', ()=>{
    expect(calculator.addition(2,-0.2)).toBe(1.8);
});

test('Testing Subtraction 1', ()=>{
    expect(calculator.subtraction(2,2)).toBe(0);
});

test('Testing Subtraction 2', ()=>{
    expect(calculator.subtraction(0.2,0.2)).toBe(0);
});

test('Testing Subtraction 3', ()=>{
    expect(calculator.subtraction(2,-0.2)).toBe(2.2);
});

test('Testing Multiplication 1', ()=>{
    expect(calculator.multiplication(2,2)).toBe(4);
});

test('Testing Multiplication 2', ()=>{
    expect(calculator.multiplication(0.2,0.2)).toBeCloseTo(0.04);
});

test('Testing Multiplication 3', ()=>{
    expect(calculator.multiplication(2,0.2)).toBe(0.4);
});

test('Testing Division 1', ()=>{
    expect(calculator.division(2,2)).toBe(1);
});

test('Testing Division 2', ()=>{
    expect(calculator.division(0.2,0.2)).toBe(1);
});

test('Testing Division 3', ()=>{
    expect(calculator.division(2,0.2)).toBe(10);
});

test('Testing Division Zero', ()=>{
    expect(() => calculator.division(1,0)).toThrow("Can't divide by zero");
});

test('Testing caesarCipher 1', ()=>{
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz',1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Testing caesarCipher 2', ()=>{
    expect(caesarCipher('DEFEND THE EAST WALL OF THE CASTLE',2)).toBe('FGHGPF VJG GCUV YCNN QH VJG ECUVNG');
});

test('Testing caesarCipher 3', ()=>{
    expect(caesarCipher('what a surprise!',3)).toBe('zkdw d vxusulvh!');
});

test('Testing Analyze Array', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})