import ErrorRepository  from '../app';

test('translate', () => {       
    const errorNew = new ErrorRepository();
expect(errorNew.translate(400)).toBe('Bad Request')});


test('translateThrow', () => {       
    expect(() => {
        const errorNew = new ErrorRepository();
        errorNew.translate(100)}).toThrow();
    }) 
   
