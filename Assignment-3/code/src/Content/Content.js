import Customer_Info from "./Customer_Info";
import Order_Info from "./Order_Info";
import Product_List from "./ProductList";

function Content({employee}) {
    return (
      
      <div className="Content">
          <Customer_Info employee={employee}/>
          <Order_Info employee={employee}/>
          <Product_List employee={employee}/>
       
      
    
       
  
      
      </div>
    );
  }
   export default Content