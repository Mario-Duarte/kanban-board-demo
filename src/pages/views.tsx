import { RiTicketLine } from "react-icons/ri";
import TopBar from "../components/topBar/topBar";
import ViewsNav from "../components/viewsNav/viewsNav";
import { KanbanBoard } from "../views/tickets";

function ViewsPage() {
  return (
    <div className="flex flex-row justify-flexStart min-h-screen bg-gray-100">
      <ViewsNav />
      <div className="flex-1 flex flex-col justify-flexStart min-h-screen bg-white overflow-hidden">
        <TopBar
          pageTitle="Tickets"
          pageIcon={<RiTicketLine size={24} />}
          userName="Alex Hartman"
          userImageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          notificationCount={2}
        />
        <KanbanBoard />
      </div>
    </div>
  );
}

export default ViewsPage;
