import Landing from "./components/Pages/Landing/Landing";
import EmpLogin from "./components/Pages/EmpLogin/EmpLogin";
import EmpRegister from "./components/Pages/EmpRegister/EmpRegister";
import Employers from "./components/CommonComponent/Footer/Employers";
import PrivacyPolicy from "./components/CommonComponent/Footer/PrivacyPolicy";
import Support from "./components/CommonComponent/Footer/Support";
import QRcode from "./components/Pages/QR Download Section/QRcode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndCondition from "./components/CommonComponent/Footer/TermsAndCondition";
import AfterLogin from "./components/Pages/After Login/AfterLogin";
import NewUser from "./components/Pages/After Login/Profile/NewUser";
import ViewUser from "./components/Pages/After Login/Profile/ViewUser";
import Edit from "./components/Pages/After Login/Profile/Edit";
import Messages from "./components/Pages/After Login/Messages";
import ChangePassword from "./components/Pages/After Login/Settings/ChangePassword";
import JobCreate from "./components/Pages/After Login/Jobs/JobCreate";
import JobView from "./components/Pages/After Login/Jobs/JobView";
import CreateJob from "./components/Pages/After Login/Jobs/CreateJob/CreateJob";
import AddUser from "./components/Pages/After Login/Profile/AddUser";
import BasicDetails from "./components/Pages/After Login/Jobs/CreateJob/BasicDetails";
import CandidateDetails from "./components/Pages/After Login/Jobs/CreateJob/CandidateDetails";
import InterviewQues from "./components/Pages/After Login/Jobs/CreateJob/InterviewQues";
import Cart from "./Redux/components/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/EmpLogin" element={<EmpLogin />} />
        <Route path="/QRcode" element={<QRcode />} />
        <Route path="/EmpRegister" element={<EmpRegister />} />
        <Route path="/Employers" element={<Employers />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/AfterLogin" element={<AfterLogin />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/ViewUser" element={<ViewUser />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/CreateJob" element={<CreateJob />} />
        <Route path="/JobCreate" element={<JobCreate />} />
        <Route path="/JobView" element={<JobView />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/BasicDetails" element={<BasicDetails />} />
        <Route path="/CandidateDetails" element={<CandidateDetails />} />
        <Route path="/InterviewQues" element={<InterviewQues />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/JobView" element={<JobView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
