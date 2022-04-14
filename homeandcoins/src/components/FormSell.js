import React from "react";

const FormSell = () => {
  return (
    <div className="section-title">
        <h4>Sell home</h4>
        <div />
        <br></br>
        <form className="form-sell"> 
            <p>What type of property do you want to rent?</p>
            <input type="radio" id="apartment" name="propertyType" value="apartment"/>
            <label for="apartment">Apartment</label>
            <input type="radio" id="house" name="propertyType" value="house"/>
            <label for="house">House</label>

            <p>What is the surface of your property?</p>
            <input type="number" id="surface" name="surface" placeholder="m²"/>

            <p>How many rooms does your proprety have?</p>
            <input type="number" id="nbRooms" name="nbRooms"  min="1" max="100"/>

            <p>What price do you want to sell your proprety?</p>
            <input type="number" id="price" name="price"/>
            <br></br>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
};

export default FormSell;
