import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login-signup/login";
import SignUp from "./components/login-signup/signup";
import DashboardCustomer from "./components/laundry-customer/dashboard";
import DashboardManager from "./components/laundry-manager/dashboard";
import OrderHistoryCustomer from "./components/laundry-customer/order-history";
import OrderHistoryManager from "./components/laundry-manager/order-history";
import LaundryRegistration from "./components/login-signup/laundry-register";
import Laundry from "./components/laundry-customer/view-laundry/view-all-laundry";
import LaundryDetails from "./components/laundry-customer/laundry-details/laundry-details";
import Pricing from "./components/laundry-manager/set-pricing/pricing";
import CustomerRegistration from "./components/login-signup/customer-register";
import Landing from "./components/login-signup/landing";
import ViewReviewsManager from "./components/laundry-manager/viewReviews";
import ManagerNotifications from "./components/laundry-manager/notifications";
import EmailVerification from "./components/login-signup/email-verification";
import PhoneVerification from "./components/login-signup/phone-verification";
import ForgotPassword from "./components/login-signup/otp-components/forgotPassword";
import CustomerNotifications from "./components/laundry-customer/notifications";
import DeliveryRegistration from "./components/login-signup/delivery-registration";
import DashboardDelivery from "./components/delivery/dashboard/dashboard";
import OngoingDelivery from "./components/delivery/ongoing/ongoing";
import DeliveryHistory from "./components/delivery/history/history";
import ChatPage from "./components/chats/chat-page/chatRoom";
import AddNewOrderCustomer from "./components/laundry-customer/laundry-details/newOrderPage";

// Uchchash Start
import AccountSettingsCustomer from "./components/laundry-customer/account-settings";
import AccountSettingsManager from "./components/laundry-manager/dashboard";
// Uchchash End

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/email/verify/:email" element={<EmailVerification />} />
          <Route path="/phone/verify/:phone" element={<PhoneVerification />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manager/register" element={<LaundryRegistration />} />
          <Route path="/customer/register" element={<CustomerRegistration />} />
          <Route path="/delivery/register" element={<DeliveryRegistration />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/customer/dashboard" element={<DashboardCustomer />} />
          <Route path="/manager/dashboard" element={<DashboardManager />} />
          <Route path="/delivery/dashboard" element={<DashboardDelivery />} />
          <Route path="/delivery/ongoing" element={<OngoingDelivery />} />
          <Route path="/delivery/history" element={<DeliveryHistory />} />
          <Route path="/customer/history" element={<OrderHistoryCustomer />} />
          <Route path="/customer/laundries" element={<Laundry />} />

{/* Uchchash Start */}
          <Route path="/customer/dashboard" element={<AccountSettingsCustomer />} />
          <Route path="/manager/dashboard" element={<AccountSettingsManager />} />
{/* Uchchash End */}

          <Route
            path="/customer/laundryDetails/:id"
            element={<LaundryDetails />}
          />
          <Route
            path="/customer/laundryDetails/:id/order"
            element={<AddNewOrderCustomer />}
          />
          <Route path="/manager/history" element={<OrderHistoryManager />} />
          <Route path="/manager/fee" element={<Pricing />} />
          <Route path="/manager/dashboard" element={<DashboardManager />} />
          <Route path="/manager/review" element={<ViewReviewsManager />} />
          <Route path="/manager/chat" element={<ChatPage />} />
          <Route
            path="/manager/notifications"
            element={<ManagerNotifications />}
          />
          <Route
            path="/customer/notifications"
            element={<CustomerNotifications />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
