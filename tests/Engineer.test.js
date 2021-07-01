const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Init", () => {
        it("should take in four arguments of name, id, email, and GitHub username respectively and create a new object with those properties", () => {
            const engineer = new Engineer("Justin", 12345678, "justin@company.com", "justincoder");

            expect(engineer instanceof Engineer).toEqual(true);
            expect(engineer.name).toEqual("Justin");
            expect(engineer.id).toEqual(12345678);
            expect(engineer.email).toEqual("justin@company.com");
            expect(engineer.github).toEqual("justincoder");
        })
    })

    describe("getGithub", () => {
        it("should return the GitHub username that was entered during object creation", () => {
            const engineer = new Engineer("Justin", 12345678, "justin@company.com", "justincoder");

            expect(engineer.getGithub()).toEqual("justincoder");
        })
    })

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const engineer = new Engineer("Justin", 12345678, "justin@company.com", "justincoder");

            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})