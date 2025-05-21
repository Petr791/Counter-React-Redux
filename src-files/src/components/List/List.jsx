import './List.css'
import { v4 as uuidv4 } from 'uuid';

function List({arrayNumbers}) {

	return (
		<div className='list-wrapper'>

				<ul className='list'>
					{arrayNumbers && arrayNumbers.map((item)=> (
							<li key={uuidv4()}  className='list__item'>
								 {item}
							</li>
					))}
				</ul>

		</div>
	)
}

export default List
