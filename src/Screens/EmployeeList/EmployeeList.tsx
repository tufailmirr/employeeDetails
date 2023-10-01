import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import NoDataFound from "../../components/NoDataFound";
import SwipeToDeleteItem from "../../components/SwipableListItem";
import employeesData from "../../utils/employeeData";

const EmployeeList = () => {
  const currentEmployees = employeesData.filter(
    (employee) => employee.to == null
  );
  const previousEmployees = employeesData.filter(
    (employee) => employee.to != null
  );
  if (employeesData.length == 0) {
    return <NoDataFound />;
  }
  return (
    <div className="h-full  bg-white w-full ">
     <div className={`${employeesData.length ? "" : "hidden"}`}>
    
      <div className="previous employees">
        <Header title="Current Employees"  classes="text-sm bg-[#F2F2F2] text-[#1DA1F2] font-medium" />
       <ul>
       {currentEmployees.map((employee) => {
          return (
            <>
              <li>
              <SwipeToDeleteItem id={employee.id} onDelete={() => {}}> 
              <ListItem/>
              </SwipeToDeleteItem>
              </li>
            </>
          );
        })}
       </ul>
      </div>
      <div className="previous employees ">
      <Header title="Previous Employees"  classes="text-sm bg-[#F2F2F2] text-[#1DA1F2] font-medium" />
       <ul>
       {previousEmployees.map((employee) => {
          return (
            <>
              <li>
              <SwipeToDeleteItem id={employee.id} onDelete={() => {}}> 
              <ListItem/>
              </SwipeToDeleteItem>
               
            
              </li>
            </>
          );
        })}
       </ul>
      </div>
     </div>
    </div>
  );
};

export default EmployeeList;
