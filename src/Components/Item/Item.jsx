import {ReactComponent as ClickerSVG} from '../../SVGs/clicker.svg'

function Item(props){    
    return(
        <div className="item-container">
            <div className="item-wrapper">
                <p className="item-name">Item 1</p>
                <div className="item-price-wrapper">
                    <p className="item-price"> 10k </p>
                    <ClickerSVG className="item-svg"/>
                </div>
            </div>
            <p className="item-counter">30</p>
        </div>
    );
}

export default Item 