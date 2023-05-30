interface btnProps{
    icon: string, 
    placeholder: string,
    isDropdown: boolean
}

const ButtonOne = ({icon, placeholder, isDropdown}:btnProps) => {
    return (
        <div className="mainBtn">
            <i className={icon}></i>
            <span>{placeholder}</span>
            {isDropdown && <i className="fa fa-sort dropdown"></i>}
        </div>
    );
}

ButtonOne.defaultProps = {
    isDropdown: false,
}

export default ButtonOne;