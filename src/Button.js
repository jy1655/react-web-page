import propTypes from "prop-types";
import './style.css';


function Button({ text }) {
    return 
    <div>
        <button className="nav-item">{text}</button>;
    </div>
    
}

Button.propTypes = {
    text : propTypes.string.isRequired
};

export default Button;

