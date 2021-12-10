const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
describe("test", () => {
  describe("POST /create", () => {
    it("Tjek om der er fejl i koden", (done) => {
      chai
        .request(app)
        .post("/create")
        .end((err, res) => {
            expect(err).to.be.null;
          expect(res.status).to.equal(200)
          done();
        });
    });
  });
});

