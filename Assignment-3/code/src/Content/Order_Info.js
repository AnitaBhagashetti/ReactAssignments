function Order_Info({employee}){
    return(
        <div className="Order_Info">
            <div className="OrderInfo1">
                
                <strong><p>Status</p></strong>
                
                <div className='blackhole'></div>
                <p className='status'>{employee.Status}</p>
                
            </div>
            <div className="OrderInfo1">
            <strong><p>Door</p></strong>
                <p>{employee.Door}</p>
            </div>
            <div className="OrderInfo1">
            <strong><p>Time</p></strong>
                <p>{employee.Time}</p>
            </div>
           
        </div>
    )
}
export default Order_Info