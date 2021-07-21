const Intern = require("../lib/Intern");

test("creates Intern object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object"); 

});

test("verifies if Name, ID, Email and School are valid", () => {
    const intern = new Intern();

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getSchool()).toEqual(intern.school);

});

test("verifies role of Intern", () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");

});