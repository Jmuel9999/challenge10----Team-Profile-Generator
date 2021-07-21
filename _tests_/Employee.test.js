const Employee = require("../lib/Employee");

test("can create an employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object"); 

});

test("verifies if Name, ID and Email are valid", () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
});

test("verifies role of Employee", () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");

});
