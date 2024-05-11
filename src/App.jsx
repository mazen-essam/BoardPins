import "./App.css";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import MyBoard from "./components/dashboard/main/MyBoard";
import BoardItems from "./components/dashboard/main/BoardItems";
import Landing from "./components/landing/Landing";
import ServiceProvider from "./components/serviceProvider/ServiceProvider";
import Setting from "./components/dashboard/setting/Setting";
import DashPage from "./components/admin/dashboard/DashPage";
import Catigories from "./components/admin/dashboard/Categories";
import ServiceName from "./components/admin/dashboard/ServiceName";
import Users from "./components/admin/dashboard/Users";
import { MainBoard } from "./components/store/BoarderMainContext";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import NotFound from "./components/common/NotFound";
// import { Task } from "@mui/icons-material";
import Tasks from "./components/taskmangment/Tasks";
import Chat from "./components/dashboard/chat/Chat";
import SubscriptionPlan from "./components/dashboard/setting/SubscriptionPlan";

function Logout() {
   localStorage.clear();
   return <Navigate to="/login" replace />;
}

function App() {
   return (
      <main>
         <section>
            <MainBoard>
               <Router>
                  <Routes>
                     <Route path="/" element={<Landing />} />
                     <Route
                        path="/login"
                        element={
                           <Login
                              route="/api/user/register/"
                              method="register"
                           />
                        }
                     />
                     <Route
                        path="/signup"
                        element={
                           <Signup route="api/users/" method="register" />
                        }
                     />
                     <Route path="/dashboard/myboard" element={<MyBoard />} />
                     <Route path="/dashboard/search" element={<BoardItems />} />
                     <Route
                        path="/dashboard/service"
                        element={<ServiceProvider />}
                     />
                     <Route path="/dashboard/setting" element={<Setting />} />
                     <Route path="/dashboard/subscriptionplan" element={<SubscriptionPlan />} />
                     <Route path="/admin/dashpage" element={<DashPage />} />
                     <Route path="/admin/categories" element={<Catigories />} />
                     <Route path="/admin/service" element={<ServiceName />} />
                     <Route path="/admin/users" element={<Users />} />
                     <Route path="/register" element={<Signup />} />
                     <Route path="/dashboard/tasks" element={<Tasks />} />
                     <Route path="/dashboard/chat" element={<Chat />} />
                     <Route path="*" element={<NotFound />} />
                  </Routes>
               </Router>
            </MainBoard>
         </section>
      </main>
   );
}

export default App;
