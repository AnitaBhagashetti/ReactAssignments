const Header=({employee})=>{
    return(
        <div className="HeaderWrapper">
            <div className="arrow">&lt;</div>
            <div className="Details">
                <p>{employee.Name}</p>
                <p>{employee. EmployeeId}</p>
            </div>
            <div className="btn">
                <button>Print</button>
            </div>
            
            

        </div>
    )
}
export default Header