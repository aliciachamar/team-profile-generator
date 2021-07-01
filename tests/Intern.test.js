const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Init", () => {
        it("should take in four arguments of name, id, email, and school respectively and create a new object with those properties", () => {
            const intern = new Intern("Sasha", 1234567, "sasha@company.com", "UCLA");

            expect(intern instanceof Intern).toEqual(true);
            expect(intern.name).toEqual("Sasha");
            expect(intern.id).toEqual(1234567);
            expect(intern.email).toEqual("sasha@company.com");
            expect(intern.school).toEqual("UCLA");
        })
    })

    describe("getSchool", () => {
        it("should return the school that was entered during object creation", () => {
            const intern = new Intern("Sasha", 1234567, "sasha@company.com", "UCLA");

            expect(intern.getSchool()).toEqual("UCLA");
        })
    })

    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const intern = new Intern("Sasha", 1234567, "sasha@company.com", "UCLA");

            expect(intern.getRole()).toEqual("Intern");
        })
    })
})