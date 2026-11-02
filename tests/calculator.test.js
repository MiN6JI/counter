import { describe, it, expect } from 'vitest';

describe('Calculator', () => {
    it('should add two numbers', () => {
        const result = 10 + 20;

        expect(result).toBe(30);
    });
});