const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("would return charles", () => {
            const employee = new Employee("charles", "26", "charles@aol.com");
            expect(employee.getName()).toBe("charles");
        })
    });
    describe("getId method", () => {
        it("would return user's id", () => {
            const employee = new Employee("charles", "26", "charles@aol.com");
            expect(employee.getId()).toBe("26");
        })
    });
    describe("getEmail method", () => {
        it("would return user's email", () => {
            const employee = new Employee("charles", "26", "charles@aol.com");
            expect(employee.getEmail()).toBe("charles@aol.com");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const employee = new Employee("charles", "26", "charles@aol.com");
            expect(employee.getRole()).toBe("Employee");
        })
    });
})