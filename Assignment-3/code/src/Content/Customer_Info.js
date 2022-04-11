function Customer_Info({employee}){
    return(
        <div className='Customer_Info'>
            <div className="Info">
             <strong><p>Appointment:</p></strong>
                <p>{employee.Appointment}</p>
            </div>
            <div className="Info">
            <strong><p>Email:</p></strong>
            <p>{employee.Email}</p>
            </div>
            <div className="Info">
            <strong><p>Phone:</p></strong>
            <p>{employee.Phone}</p>
            </div>

           
        </div>
    )
}
export default Customer_Info