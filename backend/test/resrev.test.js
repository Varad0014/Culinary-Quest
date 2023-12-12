import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

const { expect } = chai;
chai.use(chaiHttp);

describe("Restaurant API endpoints", () => {
  // Test for GET /restaurants
  it("should get all restaurants", (done) => {
    chai
      .request(app)
      .get("/restaurants")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("restaurants");
        expect(res.body).to.have.property("page");
        expect(res.body).to.have.property("filters");
        expect(res.body).to.have.property("entriesPerPage");
        expect(res.body).to.have.property("totalResults").eql(15);

        done();
      });
  });

  // Test for GET /restaurants/:restaurantId
  it("should get a specific restaurant by ID", (done) => {
    chai
      .request(app)
      .get("/restaurants/6574a6698faa9633480ed92c")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("address");
        expect(res.body).to.have.property("name").to.equal("Pad Thai Paradise");
        expect(res.body).to.have.property("cuisine");
        expect(res.body).to.have.property("contact");
        done();
      });
  });

  describe("Reviews API endpoints", () => {
    // Test for GET /restaurants/:restaurantId/reviews
    it("should get reviews of a specific restaurant", (done) => {
      chai
        .request(app)
        .get("/restaurants/6574a6698ed92c/reviews")
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          // expect(res).to.have.status(500);
          expect(res.body).to.have.property("reviews");
          expect(res.body).to.have.property("totalResults").eql(+0);
          // expect(res.body).to.be.an("object");

          done();
        });
    });
  });
});
