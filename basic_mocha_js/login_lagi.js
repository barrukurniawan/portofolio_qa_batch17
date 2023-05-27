const endpoint = require("supertest")("http://barru.pythonanywhere.com");
const validasi = require("chai").expect;

describe("Verify Login Function it works", function () { 
  it("Verify Success Login with valid email and password", async function () { 
    const resp = await endpoint 
      .post("/login")
      .send({ email: "jago@gmail.com", password: "jagoqa" });
      
      console.log(resp.body);
  });
});

describe("Verify Register Function it works", function () { 
  it("Verify Success Register with valid email and password", async function () { 
    const resp = await endpoint 
      .post("/register")
      .send({ email: "blablabla@gmail.com", password: "blablabla", name: "blablabla" });
      
      console.log(resp.body);
  });
});