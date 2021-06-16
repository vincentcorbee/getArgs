import { getArgs } from "./get-args";

const argv = process.argv;

const setArgv = (args: any[]) => (process.argv = [...process.argv.slice(0, 2), ...args]);

beforeEach(() => (process.argv = argv));

describe("getArgs", () => {
  test("Should parse cmd arguments correctly", () => {
    setArgv(["--name", "Mike", "--age", "20", "--boolean", "--list", "one,", "two,", "three"]);

    const expected = {
      name: "Mike",
      age: 20,
      boolean: true,
      list: ["one", "two", "three"],
    };
    const provided = getArgs("--");

    expect(provided).toEqual(expected);
  });
});
