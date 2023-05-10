import debounce from '@/helpers/debounce';
import { describe, expect, it } from '@jest/globals';

type FunctionType = (a: number, b: number) => number;

describe('testing: debounce', function () {
    function testing(a: number, b: number) {
        return a + b;
    }

    it('Waiting function', function () {
        const debounceTesting = debounce<FunctionType>(testing);

        debounceTesting(3, 4)
            .then((args: number[]) => {
                const result = Number(args[0]) + Number(args[1]);
                expect(result).toBe(7);
            })
            .catch(error => {
                console.log(error);
            });
    });

    it('Type of return value', function () {
        const debounceTesting = debounce(testing);

        const result = debounceTesting(3, 4);
        expect(result instanceof Promise).toBeTruthy();
    });
});
