import './Heading.css'

function Heading({level, className, text, statusList, arrayLength}) {

	if (level ==='h1') {
		return(
				<h1 className={className}>{text}</h1>
		)
	}

	if (level ==='h2' && className ==='counter__status-title') {
		return(
				<h2 className={className}>{(statusList && arrayLength > 1) ? 'Были сохранены числа:'  : ((statusList && arrayLength === 1) ? 'Было сохранено число:' : 'Здесь будут сохранненые числа' ) }</h2>
		)
	}

}

export default Heading
