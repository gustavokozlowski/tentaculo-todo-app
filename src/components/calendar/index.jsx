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
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth", // will normally be on the right. if RTL, will be on the left
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="50vh"
        events={todos}
      />
      {/* ADICIONE OS DIAS DAS TASKS COM UM MAP */}
    </main>
  );
}
