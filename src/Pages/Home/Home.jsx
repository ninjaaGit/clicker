import React from 'react'
import Item from '../../Components/Item/Item'
import {ReactComponent as ClickerSVG} from '../../SVGs/clicker.svg'
import {ReactComponent as MenuSVG} from '../../SVGs/menu.svg'

function Home(){
    const [clicks, setClicks] = React.useState(localStorage.getItem('clicks'))
    const [menuHide, setMenuHide] = React.useState(false)

    if (localStorage.getItem('clicks') === null){
        localStorage.setItem('clicks', 0)
    }

    function add(){
        setClicks(Number(clicks) + 1)
        localStorage.setItem('clicks', clicks)
    }

    function switchMenu(){
        var menu = document.querySelector('.items-container')
        var button = document.querySelector('.items-svg')
        if (menuHide === false){
            menu.style.animation = 'move-left 1s forwards';
            button.style.animation = 'rotate 1s forwards'
            setMenuHide(true)
        } else {
            menu.style.animation = 'move-right 1s forwards';
            button.style.animation = 'rotate-back 1s forwards'
            setMenuHide(false)
        }
    }

    return(
        <div className="home-page">
            <div className="items-container">
                <div className="items-header">
                    <p className="items-title">Items</p>
                    <MenuSVG className="items-svg" onClick={switchMenu}/>
                </div>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className="clicker-container">
                <p className="clicker-counter">{clicks} clicks</p>
                <ClickerSVG onClick={add} className="clicker-svg"/>
            </div>
        </div>
    );
}

export default Home