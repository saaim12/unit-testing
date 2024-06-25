import {describe, expect, test,it} from 'vitest';
import { permission,max,factorial } from '../src/index';


describe('max',()=>{
    it('should return the max number',()=>{
        expect(max(1,2)).toBe(2);
    })
    it('should return the max number',()=>{
        expect(max(2,1)).toBe(2);
    })
    it('should return the max number',()=>{
        expect(max(1,1)).toBe(1);
    })
})

describe('permission', () => {
    it('should return "allowed" for age 18 or above', () => {
        expect(permission(18)).toBe("allowed");
    });
    it('should return "allowed" for age above 18', () => {
        expect(permission(19)).toBe("allowed");
    });
    it('should return "not allowed" for age below 18', () => {
        expect(permission(17)).toBe("not allowed");
    });
});
describe('factorial',()=>{
    it('should return right factorial',()=>{
        expect(factorial(0)).toBe(1);
    })
    it('should return right factorial',()=>{
        expect(factorial(1)).toBe(1);
    })
    it('should return right factorial',()=>{
        expect(factorial(3)).toBe(6);
    })
})