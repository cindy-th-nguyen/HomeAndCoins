import React from "react";

const FormSell = () => {
  return (
    <div className="section-title">
        <h4>Sell home</h4>
        <div />
        <br></br>
        <form className="form-sell"> 
            <p>What type of property do you want to rent?</p>
            <ul id="filter1" class="filter-switch">
                <li class="filter-switch-item">
                    <input type="radio" name="propertyType" id="filter1-0" class="sr-only" checked/>
                    <label for="filter1-0">
                    Apartment
                    </label>
                </li>
                <li class="filter-switch-item">
                    <input type="radio" name="propertyType" id="filter1-1" class="sr-only"/>
                    <label for="filter1-1">
                    House
                    </label>
                </li>
            </ul>

            <p>What is the surface of your property?</p>
            <input type="number" id="surface" name="surface" placeholder="m²"/>

            <p>How many rooms does your proprety have?</p>
            <input type="number" id="nbRooms" name="nbRooms"  min="1" max="100"/>

            <p>How much do you want to sell your proprety?</p>
            <input type="number" id="price" name="price"/>
            <br></br>
            <input className="connect-button" type="submit" value="Submit"/>
        </form>
    </div>
  );
};

export default FormSell;
