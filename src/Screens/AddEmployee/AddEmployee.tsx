import  { useEffect, useState } from "react";
import Input from "../../components/Input";

import { MdOutlinePerson, MdOutlineArrowDropDown } from "react-icons/md";
import { PiBagSimple } from "react-icons/pi";
import BottomSheetFilter from "../../components/BottomSheets";
import Button from "../../components/Button";
import { rolesAvailable } from "../../utils/rolesData";
import CustomDatePicker from "../../components/DatePickerCustom";
import { useIndexedDB } from "react-indexed-db-hook";
import {BsArrowRight} from 'react-icons/bs'
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../../components/Header";
import DeleteIcon from '../../assets/DeleteIcon.svg'
import { Notification } from "../../components/Notifications";


type IRole = {
    title: string;
    value: string;
  };
  
  interface Employee {
    name: string;
    role: IRole | null;
    fromDate: Date | null;
    toDate: Date | null;
  }
const AddEmployee = () => {
    let timeoutID: number;
    const { id } = useParams();
    const { add,getByID , update, deleteRecord} = useIndexedDB("employee");
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false)
    const [name, setName] = useState('')
    const [role, setRole] = useState<IRole | null>(null)
    const [fromDate, setFromDate] = useState<Date | null>(null)
    const [toDate, setToDate] = useState<Date | null>(null)
    const navigate = useNavigate();


     // Check if an ID is provided in the URL, if yes, fetch the employee data for updating
  useEffect(() => {
    if (id) {
      getByID(Number(id)).then((employee: Employee) => {
        console.log(employee,employee.fromDate)
        if (employee) {
          setName(employee.name);
          setRole(employee.role);
          setFromDate(employee.fromDate);
          setToDate(employee.toDate);
        }
      }).catch((error : Error) => {
        console.log(error)
      });
    }
  }, [id]);

    const handleFilterClick = (role :any) => {
        setRole(role)
        setBottomSheetOpen(false)
    }
   
  
    const addEmployee = () => {
      add({ name: name, role: role, fromDate : fromDate, toDate : toDate }).then(
        (event:any) => {
          toast.success("Employee Added Successfully", {
            style: {
              borderRadius: '6px',
              background: '#333',
              color: '#fff',
              bottom : "0px"
            },
          })
          navigate("/")
        },
        (error) => {
          console.log("error ocurred",error);
        },
        
      );
    };

    const DeleteEmployee = () => {
        if(id){
            timeoutID =  setTimeout(() => {
                deleteRecord(Number(id)).then((event) => {
                    toast.success(`Employee Deleted Successfully`, {
                        style: {
                          borderRadius: '6px',
                          background: '#333',
                          color: '#fff',
                          bottom : "0px"
                        },
                      })
                      navigate('/')
                });
               },1100)
               Notification(timeoutID)
        }
    }

    const updateEmployee = () => {
        update({ id: Number(id), name: name, role: role, fromDate : fromDate, toDate : toDate }).then((event) => {
            toast.success("Employee Updated Successfully", {
                style: {
                  borderRadius: '6px',
                  background: '#333',
                  color: '#fff',
                  bottom : "0px"
                },
              })
              setTimeout(() => {
                navigate('/')
              },1000)
          });
    }

    const handleCancel = () => {
        navigate('/')
    }
  return (
    <main className="">
         <Header  title={`${id ? 'Edit Employee Details' : "Add Employee Details"}`} classes='bg-[#1DA1F2] text-[#FFFFFF]' rightButton={id ? <img src={DeleteIcon} alt="deleteIcon" onClick={DeleteEmployee}/> : null} />
      <form className="flex flex-col justify-between h-full " onSubmit={(e) => {
        e.preventDefault()
        console.log("ff")
        if (!fromDate) {
            console.log("ff")
            // If fromDate is not selected, show an error message and prevent form submission
            toast.error("Please select a from date.", {
                style: {
                  borderRadius: '6px',
                  background: '#333',
                  color: '#fff',
                  bottom : "0px !important"
                },
              })
            return;
          }
      
        if(id) {
            updateEmployee()
        } else{
            addEmployee()
        }
       
      }}>
        <section className="grid gap-6 px-4 py-8">
        <Input
         required
          placeholder="Joseph moaden"
          value={name}
          onChange={(evt) => setName(evt.currentTarget.value)}
          leftIcon={<MdOutlinePerson color="#1DA1F2" size={24} />}
        />
        <Input
          required
          placeholder="Flutter Developer"
          value={role?.title || ''}
          contentEditable={false}
          onClick={() => setBottomSheetOpen(true)}
          leftIcon={<PiBagSimple color="#1DA1F2" size={24} />}
          rightIcon={<MdOutlineArrowDropDown color="#1DA1F2" size={24} />}
        />
        </section>
        <div className="flex gap-10 items-center px-4 justify-between">
        <CustomDatePicker id={id}  onSave={(date : any) => setFromDate(date)} date={fromDate}  />
        <BsArrowRight/>
        <CustomDatePicker id={id} onSave={(date : any) => setToDate(date)}  date={toDate} minDate={fromDate} toDate />
        </div>
        <section className="absolute bottom-0 w-full border-t-[0.5px] flex justify-end gap-4 p-4 max-w-3xl mx-auto border-[#f2f2f2] ">
          <Button type="button" variant="secondary"  onClick={handleCancel}>Cancel</Button>
          <Button type="submit" >{id ? "Update"  : "Save"}</Button>
        </section>
      </form>
      <BottomSheetFilter  roles={rolesAvailable} open={isBottomSheetOpen} onClose={() => setBottomSheetOpen(false)} onClick={handleFilterClick} />
    </main>
  );
};

export default AddEmployee;
