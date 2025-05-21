import './DisplayValue.css'

function DisplayValue({counter}) {

			return (
				<div className='counter__display-value'>
					<hr></hr>
					<p>{counter}</p>
				</div>
			)
}

export default DisplayValue