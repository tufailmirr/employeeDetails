import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import NoDataFound from "../../components/NoDataFound";
import { useIndexedDB } from "react-indexed-db-hook";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import SwipeToDelete from "react-swipe-to-delete-component";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";

const EmployeeList = () => {
  const { getAll, deleteRecord } = useIndexedDB("employee");
  const [currentEmployees, setCurrentEmployees] = useState<any>([]);
  const [previousEmployees, setPreviousEmployees] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getAll().then((employeesFromDB) => {
      const currentEmployeesData = employeesFromDB.filter(
        (employee) => employee.toDate == null
      );
      const previousEmployeesData = employeesFromDB.filter(
        (employee) => employee.toDate != null
      );
      setCurrentEmployees(currentEmployeesData);
      setPreviousEmployees(previousEmployeesData);
    });
  }, [loading]);

  const handleDelete = (id: string) => {
    deleteRecord(id).then((event) => {
      console.log("event", event);
      setLoading((prev) => !prev);
    });
  };

  const curentEmployessList = currentEmployees.map((employee: any) => {
    return (
      <>
        <SwipeToDelete
          key={employee.id}
          onDelete={() => {
            handleDelete(employee.id);
          }}
        >
          <ListItem
            onClick={() => {
              navigate(`updateEmployee/${employee.id}`);
            }}
            name={employee.name}
            role={employee.role.title}
            fromDate={employee.fromDate}
          />
        </SwipeToDelete>
      </>
    );
  });

  const previousEmployeesList = previousEmployees.map((employee: any) => {
    return (
      <SwipeToDelete
        key={employee.id}
        onDelete={() => {
          handleDelete(employee.id);
        }}
      >
        <ListItem
          onClick={() => {
            navigate(`updateEmployee/${employee.id}`);
          }}
          name={employee.name}
          role={employee.role.title}
          fromDate={employee.fromDate}
          toDate={employee.toDate}
        />
      </SwipeToDelete>
    );
  });

  const isEmployeeListEmpty =
    currentEmployees.length == 0 && previousEmployees.length == 0;

  return (
    <div className="h-screen bg-white container  items-center content-center">
      <Header title="Employee List" classes="bg-[#1DA1F2] text-[#FFFFFF]" />
      {isEmployeeListEmpty ? (
        <NoDataFound />
      ) : (
        <div>
          <div className="current-employees">
            <Header
              title="Current Employees"
              classes="text-sm bg-[#F2F2F2] text-[#1DA1F2] font-medium"
            />
            <div className=" max-h-72 overflow-scroll">
              {currentEmployees.length ? (
                <div className="list-group">{curentEmployessList}</div>
              ) : (
                <NoDataFound />
              )}
            </div>
          </div>
          <div className="previous employees">
            <Header
              title="Previous Employees"
              classes="text-sm bg-[#F2F2F2] text-[#1DA1F2] font-medium"
            />
            <div className=" max-h-72 overflow-scroll">
              {previousEmployees.length ? (
                <div className="list-group">{previousEmployeesList}</div>
              ) : (
                <NoDataFound />
              )}
            </div>
          </div>
        </div>
      )}
      <Link to="/addemployee">
        <div
          className={`bottom-0 p-2 z-50 fixed w-full max-w-3xl ${
            isEmployeeListEmpty ? "" : "bg-[#F2F2F2]"
          }  h-[76px]`}
        >
          <h4
            className={`font-roboto font-normal text-sm ${
              isEmployeeListEmpty && "hidden"
            } text-[#949C9E]`}
          >
            Swipe Left to Delete
          </h4>
          <Button className="w-[50px] h-[50px] bg-[#1DA1F2] rounded-md text-2xl text-white z-50  absolute right-2 top-2">
            +
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default EmployeeList;
