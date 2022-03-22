
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expense-item'>
            <div className='expense-item-container'>
            <div className='expense-item-date'>
                    <div className='expense-item-date-day'>{day}</div>
                    <div className='expense-item-date-month'>{month}</div>
                    <div className='expense-item-date-year'>{year}</div>
            </div>
            <div className='expense-item-title'>{props.title}
            </div>
            <div className='expense-item-amount'>Rs {props.amount}
            </div>
        </div>
    </div>
    );
}

export default ExpenseItem;