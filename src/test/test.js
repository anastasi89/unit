import showLevelOfLife from '../life';

test.each([
	['user1 - health: 90', { name: 'Маг', health: 90 }, 'healthy'],
	['user3 - health: 49', { name: 'Боец', health: 49 }, 'wounded'],
	['user5 - health: 1', { name: 'Мертвец', health: 1 }, 'critical'],
])('testing showLevelOfLife function for %s user with %i health', (_, user, expected) => {
	const result = showLevelOfLife(user);
	expect(result).toBe(expected);
});