import * as repository from "../../src/repositories/cv.json.repository.js";

import fs from "fs/promises";

beforeEach(() => {
    jest.clearAllMocks();
});

const source = "src/data/cvs.json";

/*  Mock the fs.readFile function so we don’t hit the real file system.
    Tells Jest to replace that module with his own (for mocking) */
jest.mock('fs/promises');
const mockedFs = jest.mocked(fs);

// Notice how jest.mock mocks an entire module, not just a function.

/* As general rule :
-- Mock everything that your function depends on but isn't itself being tested --
*/


// -------------- Testing selectAll()
describe('selectAll()', () => {
    // It's a string because we're simulating the action of reading from a file
    const dataMock = '[{"firstName":"James", "lastName":"Hunt", "jobTitle":"Racer"},{"firstName":"Nikki", "lastName":"Lauda", "jobTitle":"Racer"}]';


    // Configure the mock to resolve with fake JSON
    mockedFs.readFile.mockResolvedValue(dataMock);

    test('reads the JSON file and returns parsed data', async () => {
        // Testing 'selectAll()' function
        const result = await repository.default();

        // Assert that fs.readFile was called by selectAll with the expected path and encoding
        expect(fs.readFile).toHaveBeenCalledWith(
        source,
        'utf-8'
        );

        // Assert that wwe get thet the same result
        expect(result).toEqual([
        { jobTitle: "Racer", firstName: "James", lastName: "Hunt"},
        { jobTitle: "Racer", lastName: "Lauda", firstName:"Nikki"}
        ]);
    });
});