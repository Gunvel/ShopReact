import { userReducer } from "../userReducer";
import * as Action from '../../../action';

describe('userReducer tests', () => {
    it("returns state with status loading after loginStart action",
        () => {
            const expected = {
                loading: true,
                error: null,
                user: null
            };

            const received = userReducer(undefined, Action.loginStart());
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after loginSuccess action",
        () => {
            const expected = {
                loading: false,
                error: null,
                user: 'sergey'
            };

            const received = userReducer(undefined, Action.loginSuccess('sergey'));
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after loginError action",
        () => {
            const expected = {
                loading: false,
                error: 'error',
                user: null
            };

            const received = userReducer(undefined, Action.loginError('error'));
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after registerStart action",
        () => {
            const expected = {
                loading: true,
                error: null,
                user: null
            };

            const received = userReducer(undefined, Action.registerStart());
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after registerSuccess action",
        () => {
            const expected = {
                loading: false,
                error: null,
                user: 'sergey'
            };

            const received = userReducer(undefined, Action.registerSuccess('sergey'));
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after registerError action",
        () => {
            const expected = {
                loading: false,
                error: 'error',
                user: null
            };

            const received = userReducer(undefined, Action.registerError('error'));
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after logoutStart action",
        () => {
            const expected = {
                loading: true,
                error: null,
                user: null
            };

            const received = userReducer(undefined, Action.logoutStart());
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after logoutSuccess action",
        () => {
            const expected = {
                loading: false,
                error: null,
                user: null
            };

            const received = userReducer(undefined, Action.logoutSuccess());
            expect(received).toEqual(expected);
        });

    it("returns state with status loading after logoutError action",
        () => {
            const expected = {
                loading: false,
                error: 'error',
                user: null
            };

            const received = userReducer(undefined, Action.logoutError('error'));
            expect(received).toEqual(expected);
        });
});

