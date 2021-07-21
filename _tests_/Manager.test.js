const Manager = require("../lib/Manager");

test("creates Manager object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object"); 

});

test("verifies if Name, ID, Email and Office are valid", () => {
    const manager = new Manager();

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getofficeNumber()).toEqual(manager.office);

});

test("verifies role of Manager", () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");

});