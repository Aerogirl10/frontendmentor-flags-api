import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';


console.log("test");

class FlagList extends React.Component {
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((json) => {
                console.log("ładuje");
                console.log(json);
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const {DataisLoaded, items} = this.state;
        if (!DataisLoaded) return <div>
            <h1> Loading Flags.... </h1></div>;

        return (
            <div id="flag-list">
                {
                    items.map((item) => (
                        <div id={item.cca2} class="flag-item">
                            <div className="flag">
                                <picture>
                                    <img src={item.flags.png} alt=""/>
                                </picture>
                                <div className="info">
                                    <p><span>Country</span>: {item.name.common}</p>
                                    <p><span>Population</span>: {item.population}</p>
                                    <p><span>Region</span>: {item.region}</p>
                                    <p><span>Capital</span>: {item.capital}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const domContainer = document.querySelector('#flag-container');
//
const root = ReactDOM.createRoot(domContainer);
// root.render(<ShoppingList name="Mark"></ShoppingList>);
root.render(<FlagList/>);
