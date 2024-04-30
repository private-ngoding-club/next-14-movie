import AuthProvider from "@/provider/auth";
import TanstackProvider from "@/provider/tanstack";

const Providers = ({ children }) => (
  <TanstackProvider>
    <AuthProvider>{children}</AuthProvider>
  </TanstackProvider>
);

export default Providers;
