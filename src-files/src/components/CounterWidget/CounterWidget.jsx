import "./CounterWidget.css"
import Message from "../Message/Message"
import List from "../List/List"
import Heading from "../Heading/Heading"
import ButtonsRow from "../ButtonsRow/ButtonsRow"
import Button from "../Button/Button"
import DisplayValue from "../DisplayValue/DisplayValue"


export function CounterWidget({
	isLoading,
	isError,
	counter,
	statusList,
	arrayNumbers,
	isSaveLoading,
	isSaveSuccess,
	isSaveError,
	onIncrementBtnClick,
	onDecrementBtnClick,
	onResetBtnClick,
	onRetryBtnClick,
	onSaveBtnClick
}) {

	return (

		<div className="page">
			<div className="container">

				{(isLoading) ? <p className="message__loading">Загрузка...</p> : <>
					{(isError) ? <> <p className="message__loading">Ошибка...</p> <Button
						onClick={onRetryBtnClick}
						text='Повторить' />
					</> : 
						<>
							<Heading 
								className='page__title'
								level='h1'
								text='Счетчик (React Redux)' />

							<DisplayValue
							counter={counter} />

							<ButtonsRow
								onIncrementBtnClick={onIncrementBtnClick}
								onDecrementBtnClick={onDecrementBtnClick}
								onResetBtnClick={onResetBtnClick}
								onSaveBtnClick={onSaveBtnClick}
								isSaveLoading={isSaveLoading} />
						
							<Message 
								isSaveLoading={isSaveLoading}
								isSaveError={isSaveError}
								isSaveSuccess={isSaveSuccess}
								className='message' />

							<Heading
								className='counter__status-title'
								level='h2'
								statusList={statusList}
								arrayLength={arrayNumbers.length} />

							<List
							arrayNumbers={arrayNumbers} />
					
						</>
					}
				</>}
			</div>
		</div>

	)
}




