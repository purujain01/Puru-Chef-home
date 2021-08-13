import React from "react";
import SubImage from "./SubImage";


const App = () => {
    return (
        <>
    <h1 className="mainText">Review Product Details</h1>
    <div className="image1">
    <SubImage  />
    </div>
    <div className="image2">
    <SubImage />
    </div>
    <div className="image3">
    <SubImage />
    </div>
    <div className="mainImage">
    <img src="./images/pocm.png" width="420px" height="380" alt="mainimage"></img>
    </div>
    <h1 className="productName">Product Name</h1>
    <p className="price">₹ 123</p>
    <button className="edit">Edit</button>

    <div className="serve">
    <label for="servings">Servings:</label>
    <select name="servings" id="servings">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </div>

    <div className="cookTime">
        <p>Cooking Time: <span className="time"> x min</span></p>
        <p>Storage Life:<span className="time"> x days</span></p>
    </div>

<div className="ingredients">
        <p className="ingtitle">Ingredients Inside:</p>
    <div class="ingredientlist">
	<ul>
		<li>Ingredient 1</li>
		<li>Ingredient 2</li>
		<li>Ingredient 3</li>
		<li>Ingredient 4</li>
		<li>Ingredient 5</li>
		<li>Ingredient 6</li>
		<li>Ingredient 7</li>
		<li>Ingredient 8</li>
		<li>Ingredient 9</li>
	</ul>
</div>
</div>

    <div className="foodSymbol">
        <img src="./images/NonvegetarianFoodSymbol.png" alt="NonVegSymbol" className="NonVegSymbol"></img>
        <p> This Is A Non-Vegetarian Product</p>
        </div>
    <div className="productDesc">
        <p className="descTitle">Product Description:</p>
        <p className="descContent">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
    </div>

     <div className="video">
        <p>Tutorial Video:</p>
        <video width="400" controls>
        <source src="#123" type="video/mp4" />
        <source src="#123" type="video/ogg" /> 
            Your browser does not support HTML video.
        </video>
    </div>
    <div className="instructions">
        <p className="instructionTitle">Step By Step Instructions:</p>
        <p className="instructionContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            .
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>

        <div className="mainButton">
        <a className="publish" href="#popup1"><p>Publish</p></a>
        <button className="backButton">Back</button>

        </div>

        <div id="popup1" class="overlay">
	<div class="popup">
		<h3>Confirm publishing of the product</h3>
		<div class="popupcontent">
        <input type="checkbox" id="confirmation" />
        <label for="confirmation">I confirm that the product is reviewed and ready to publish</label>	
        </div>
        <div className="confirmButton">
        <a className="confirmPublish" href="#123"><p>Publish</p></a>
        <a className="confirmExit" href="#123"><p>Exit</p></a>
        </div>


	</div>
</div>
    </>
    )
}

export default App;