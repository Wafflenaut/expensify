import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
	const uid = 'dfg45tedgf45';
	const state = authReducer(undefined, { type: 'LOGIN', uid});
	expect(state.uid).toBe(uid);
});

test('should clear uid on logout', () => {
	const currentState = {
		uid: 'fdjgldfjgldfjgd'
	}
	const state = authReducer(currentState, { type: 'LOGOUT'});
	expect(state.uid).toBeUndefined();
});
