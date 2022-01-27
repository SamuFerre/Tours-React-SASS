
const Button = props => {
    return (
        <button
          type={props.type || 'button'} 
          onClick={props.onClick}
          className={props.classes}
          
        >
          {props.children}
        </button>
      );
}  

export default Button;