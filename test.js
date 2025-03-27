describe('to check euros to dollars', () => {
    test("One euro should be 1.07 dollars", function () {
        // Import the function from app.js
        const { fromEuroToDollar } = require('./app.js');

        // Use the function like its supposed to be used
        const dollars = fromEuroToDollar(1);

        // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
        const expected = 1 * 1.07;

        // This is the comparison for the unit test
        expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
    })

    test('ten euros should be 10.700000000000001 dollars', () => {
        const { fromEuroToDollar } = require('./app.js');
        const dollars = fromEuroToDollar(10);
        const expected = 10 * 1.07;
        expect(fromEuroToDollar(10)).toBe(10.700000000000001);

    });

    test('ten euros should be around 10.70 dollars', () => {
        const { fromEuroToDollar } = require('./app.js');
        const dollars = fromEuroToDollar(10);
        const expected = 10 * 1.07;
        expect(fromEuroToDollar(10)).toBeCloseTo(10.70);

    })

});


describe('to check dollars to yenes', () => {
    test('one dollar should be 146.26168224299064 yenes ', function () {
        const { fromDollarToYen } = require('./app.js');
        const yenes = fromDollarToYen(1);
        const expected = 1 / 1.07 * 156.5;
        expect(fromDollarToYen(1)).toBe(146.26168224299064)
    })
    test('one dollar should be around 146.26 yenes ', function () {
        const { fromDollarToYen } = require('./app.js');
        const yenes = fromDollarToYen(1);
        const expected = 1 / 1.07 * 156.5;
        expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2)
    })



    test('ten dollars should be 1462.6168224299064 yenes ', function () {
        const { fromDollarToYen } = require('./app.js');
        expect(fromDollarToYen(10)).toBe(1462.6168224299064)
    })

    test('ten dollars should be around 1462.62 yenes ', function () {
        const { fromDollarToYen } = require('./app.js');
        expect(fromDollarToYen(10)).toBeCloseTo(1462.62, 2)
    })
})



describe('to check yenes to pounds', () => {
    test('one yen should be 0.0055591054313099035 pounds', function () {
        const { fromYenToPound } = require('./app.js');
        expect(fromYenToPound(1)).toBe(0.0055591054313099035)


    })
    test('ten yen should be around 0.05559 pounds', function () {
        const { fromYenToPound } = require('./app.js');
        expect(fromYenToPound(10)).toBeCloseTo(0.05559, 5)


    })
})

