const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Init", () => {
        it("should take in three arguments of name, id, and email respectively and create a new object with those properties", () => {
            const employee = new Employee("Fred", 123456789, "fred@company.com");

            expect(employee instanceof Employee).toEqual(true);
            expect(employee.name).toEqual("Fred");
            expect(employee.id).toEqual(123456789);
            expect(employee.email).toEqual("fred@company.com");
        })
    })

    describe("getName", () => {
        it("should return the name that was passed in during object creation", () => {
            const employee = new Employee("Fred", 123456789, "fred@company.com");

            expect(employee.getName()).toEqual("Fred");
        })
    })

    describe("getId", () => {
        it("should return the ID that was passed in during object creation", () => {
            const employee = new Employee("Fred", 123456789, "fred@company.com");

            expect(employee.getId()).toEqual(123456789);
        })
    })

    describe("getEmail", () => {
        it("should return the email that was passed in during object creation", () => {
            const employee = new Employee("Fred", 123456789, "fred@company.com");

            expect(employee.getEmail()).toEqual("fred@company.com");
        })
    })

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const employee = new Employee("Fred", 123456789, "fred@company.com");

            expect(employee.getRole()).toEqual("Employee");
        })
    })
})