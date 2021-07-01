const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Init", () => {
        it("should take in four arguments of name, id, email, and office number respectively and create a new object with those properties", () => {
            const manager = new Manager("Katie", 123456, "katie@company.com", 123);

            expect(manager instanceof Manager).toEqual(true);
            expect(manager.name).toEqual("Katie");
            expect(manager.id).toEqual(123456);
            expect(manager.email).toEqual("katie@company.com");
            expect(manager.officeNumber).toEqual(123);
        })
    })

    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const manager = new Manager("Katie", 123456, "katie@company.com", 123);

            expect(manager.getRole()).toEqual("Manager");
        })
    })
})