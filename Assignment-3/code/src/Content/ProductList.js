function Product_List({employee}){
    return(
        <div className="Product_List">
            <input type='checkbox'></input>
            <img src={employee.profileImg} alt='img'/>
            <div className="ProfileInfo">
             <strong><p>{employee.profile}</p></strong>
                <p> Lorem2 This is my Profile Please read it Its very imop for me</p>
            </div>
            <div className="ForwardArrow">&gt;</div>
        </div>
    )
}
export default Product_List