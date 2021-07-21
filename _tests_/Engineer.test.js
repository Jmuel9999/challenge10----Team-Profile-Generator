const Engineer = require("../lib/Engineer");

test("creates Engineer object", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object"); 

});

test("verifies if Name, ID, Email and Github are valid", () => {
    const engineer = new Engineer();

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getGitHub()).toEqual(engineer.github);

});

test("verifies role of Engineer", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");

});