import Styles from '../../styles/components/GoogleButton.module.css';

export const GoogleButton = ({width= "50%", type="sign-in", ...props}) => {

	let className = Styles.button;
	let text = "Sign in with google";

	if(type === "sign-up") {
		className = Styles.button + " " + Styles.signUpButton;
		text = "Sign up with google"
	}

	return (
		<div
      className = {className}
      style={{
        width: width
      }}
			{...props}
    >
			<div className={Styles.imageContainer}>
    	<img
      	src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      	alt="Google icon"
      	className={Styles.image}
    	/>
			</div>

      {text}
    </div>
	)
}
