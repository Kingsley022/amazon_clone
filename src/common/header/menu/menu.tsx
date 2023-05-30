import { useRef, useEffect, useContext } from 'react';
import { amazonmenu } from '../../../data';
import { AppContext } from '../../../App';
import './menu.css';


const Menu = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const {isMenuToggled,  handleMenuToggle}  = useContext(AppContext)


    useEffect(() => {
        if (menuRef.current) {
            if (isMenuToggled) {
                menuRef.current.classList.add('fadeIn');
            } else {
                menuRef.current.classList.add('fadeOut');
            }
        }
    }, [isMenuToggled]);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = event =>  handleMenuToggle(); 

    return (
        <>
            <button className='close' onClick={handleClick}>X</button>

            <div ref={menuRef} className="menuContainer">
                <div className="hc">
                    <div className="header">
                        <i className="fa fa-user"></i>
                        <h3>Hello, sign in</h3>
                    </div>
                </div>
                <div className="subMenuContainer">
                    {amazonmenu.map(menu => (
                        <div className='menu' key={menu.id}>
                            <p className="menuHeader">{menu.title}</p>

                            {menu.menuList.map(menuItem => (
                                <div className="subMenu" key={menuItem.id}>
                                    <small>{menuItem.title}</small>
                                    <i>&#062;</i>
                                </div> 
                            ))}
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    );
}
 
export default Menu;