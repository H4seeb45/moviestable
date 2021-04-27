import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.string().required().min(1).label("Stock Quantity"),
    dailyRentalRate: Joi.string().required().min(2).label("Rate"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container mt-5 mx-auto">
        <div className="ml-8">
          <h1 className="text-primary">Login</h1>
          <form onSubmit={this.handleSubmit} className="mt-5">
            {this.renderInput("title", "Title")}
            {this.renderSelect("genreId", "Genre", "select")}
            {this.renderInput("numberInStock", "Stock Quantity", "number")}
            {this.renderInput("dailyRentalRate", "Rate", "number")}
            {this.renderButton("Add Movie")}
          </form>
        </div>
      </div>
    );
  }
}
export default MovieForm;
