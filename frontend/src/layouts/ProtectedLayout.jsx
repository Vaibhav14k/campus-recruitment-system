import Navbar from "../components/Navbar";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProtectedLayout;
