export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [400, 'Bad Request'],
            [404, 'Not Found'],
            [423, 'Locked'],            
        ]);
    }

    translate(code) {
        if (!this.errors.has(code)) {
            throw new Error('Unknown error');
        } else {
            return this.errors.get(code);
        }
    }
}
