import './ButtonsRow.css'
import Button from '../Button/Button'

function ButtonsRow(
			{ onIncrementBtnClick, onDecrementBtnClick, onResetBtnClick, onSaveBtnClick, isSaveLoading}
	) {
			return (
				<div className='counter__btns-row'>
						<Button
								className='btn__short'
								onClick={onIncrementBtnClick}
								text='+1' />

							<Button
								className='btn__short'
								onClick={onDecrementBtnClick}
								text='-1' />

							<Button
								onClick={onResetBtnClick}
								text='Сброс счетчика' />

							<Button
								onClick={onSaveBtnClick}
								onDisabled={isSaveLoading}
								text='Сохранение счетчика' />
				</div>
			)
}

export default ButtonsRow