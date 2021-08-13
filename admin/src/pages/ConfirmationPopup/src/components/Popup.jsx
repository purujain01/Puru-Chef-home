import React from "react";

const Popup = () =>{

    return (
        <div id="popup1" class="overlay">
        <div class="popup">
        <p className="headText">Confirmation</p>
            <p className="paraText">Upload the image of the packed product</p>
                <a href="#123" className="uploadButton">Upload</a>
                <div class="popupcontent">
                    <input type="checkbox" id="confirmation" />
                         <label for="confirmation">I confirm that the product is packed and is ready to be shipped
                        </label>	
                </div>
            <div className="confirmButton">
                <a className="confirmPublish" href="#123"><p>Publish</p></a>
                <a className="confirmExit" href="#123"><p>Exit</p></a>
            </div>
    
    
        </div>
    </div>
    )
}

export default Popup;