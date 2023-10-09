import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import  ptBr from "@fullcalendar/core/locales/pt-br";
import { TodosContext } from "../../contexts/todos";
import { useContext } from "react";
import "../../assets/css/calendar.css";

export function Calendar() {
  const { todos } = useContext(TodosContext);
  return (
    <main className="calendar-container">
      <FullCalendar
        locale={ptBr}
        headerToolbar={{
          start: "today", 
          center: "title",
          end: "prev,next,dayGridMonth",
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="50vh"
        events={todos}
      />
    
    </main>
  );
}
