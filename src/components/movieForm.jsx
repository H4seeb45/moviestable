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
      <div className="p-4 m-4 rounded border border-blue-400 container h-2/3  mx-auto bg-gray-100">
        <div className="mx-auto">
          
          <form onSubmit={this.handleSubmit} className="mt-2">
            <h1 className="text-4xl inline-block text-blue-500 font-medium text-bold mr-4">Add New Movie</h1>
            {this.renderButton("Add Movie")}
            {this.renderInput("title", "Title")}
            {this.renderSelect("genreId", "Genre", "select")}
            {this.renderInput("numberInStock", "Stock Quantity", "number")}
            {this.renderInput("dailyRentalRate", "Rate", "number")}
            
          </form>
        </div>
      </div>
    );
  }
}
export default MovieForm;
