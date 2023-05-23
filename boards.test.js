const boardManager = require('./boards');

beforeEach(() => {
    boardManager.create({ name: "Lateral", w: 2, h: 1, d: 1 });
    boardManager.create({ name: "Superior", w: 5, h: 1, d: 10 });
    boardManager.create({ name: "Bottom", w: 5, h: 1, d: 10 });
});

test('Check if each bord saved correcty', () => {
    expect(boardManager.get()).toStrictEqual([
        { name: 'Lateral', "dimension": { "width": 2, "height": 1, "deeph": 1 } },
        { name: 'Superior', "dimension": { "width": 5, "height": 1, "deeph": 10 } },
        { name: 'Bottom', "dimension": { "width": 5, "height": 1, "deeph": 10 } }
    ])
})

test('Removing a specific board', () => {
    expect(boardManager.remove('Superior')).toBe(true)
})
 test('Removing a specific board eith a invalid name', () => {
    expect(boardManager.remove('Not Valid Name')).toBe(true)
})


