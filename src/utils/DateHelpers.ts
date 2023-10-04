export function getDayName(date : Date, offset:number = 0) :string {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = (date.getDay() + offset) % 7;
    return days[dayIndex];
  }

  export const formattedDate = (dateString : Date) => {
    const date = new Date(dateString)
    return date?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
  }


export const getCalendarFormattedDate = (date:Date | number) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const currentDate = new Date(date);
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();
  
    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
  
    return formattedDate;
  }

   