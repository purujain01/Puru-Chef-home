import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/style.scss'
// import Menubar from './components/Menubar/index.js'
// import Buttons from './components/Buttons/index.js'

class Outside extends React.Component {
    state ={
        Products : [
        // { 
        //     Image: 'Image',
        //     ProductName: 'Product Name',
        //     EnteredOn: 'Entered On',
        //     EnteredBy: 'Entered By',
        //     Reviewed: 'Reviewed And Published By'
        // },
        { 
            Image: <img src = '../images/chahipaneer.jpg' width="95" height="95" margin="0" ></img>,
            ProductName: 'Product Name',
            EnteredOn: '20-01-2021',
            Time: '3:45pm',
            EnteredBy: 'mrnobody@gmail.com',
            Reviewed: 'mrnobody@gmail.com'
        },
        { 
            Image: <img src = '../images/chahipaneer.jpg' width="95" height="95"></img>,
            ProductName: 'Product Name',
            EnteredOn: '20-01-2021',
            Time: '3:45pm',
            EnteredBy: 'mrnobody@gmail.com',
            Reviewed: 'mrnobody@gmail.com'
        },
        { 
            Image: <img src = '../images/chahipaneer.jpg' width="95" height="95"></img>,
            ProductName: 'Product Name',
            EnteredOn: '20-01-2021',
            Time: '3:45pm',
            EnteredBy: 'mrnobody@gmail.com',
            Reviewed: 'mrnobody@gmail.com'
        }]
    }
    render(){
        return (
            <Options Products={this.state.Products} />
        )
    }
}

const Options = (props) => {
    return (
        <div className="line">
            {props.Products.map((product) =>{
            return (
                <Option key={product.ProductName} prod={product} /> 
            )}
            )}
        </div>
    )
}

const Option = (props) => {
    return (
        <div  className="option">
            <div>{props.prod.Image}</div>
            <div>{props.prod.ProductName}</div>
            <div class="time">
                <div>{props.prod.EnteredOn}</div>
                <div>{props.prod.Time}</div>
            </div>
            <div>{props.prod.EnteredBy}</div>
            <div>{props.prod.Reviewed}</div>
            <div>
                <button className="edit-button" onClick={(e) => {
                    e.preventDefault()
                    window.location="/editproduct/productId"
                }}>Edit</button>
            </div>
        </div>
    )
}
ReactDOM.render(<Outside />, document.getElementById('ps'))