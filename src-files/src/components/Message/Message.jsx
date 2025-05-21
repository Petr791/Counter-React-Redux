import './Message.css'

function Message({className, isSaveLoading,
	isSaveSuccess,
	isSaveError}) {

		if (className === 'message') {
			return (
				<div className='message-wrapper'>
						{isSaveLoading && <p className='message'>Сохраняю счетчик...</p>}
						{isSaveError && <p className='message'>Ошибка сохранения</p>}
						{isSaveSuccess && <p className='message'>Счетчик сохранен</p>}
				</div>
			)
		}
}

export default Message