const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);

describe("test", () => {
  describe("POST /create", () => {
    it("should return an array", (done) => {
      chai
        .request(app)
        .get("/create")
        .end((err, res) => {
          expect(err).to.be.null;
          done();
        });
    });
  });
});
