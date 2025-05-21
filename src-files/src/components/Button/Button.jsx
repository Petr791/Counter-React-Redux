import './Button.css'

function Button({text, onClick, onDisabled, className}) {

			return (
				<button
					disabled={onDisabled}
					onClick={onClick}
					className={(className) ? 'counter__btn ' + className :  'counter__btn'}
					type='button'>
					{text}
				</button>
			)
}

export default Button
