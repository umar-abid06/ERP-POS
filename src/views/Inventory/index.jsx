import Navbar from "../../components/navbar/Navbar";

const Inventory = () => {
  return (
    <div>
      <Navbar
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />
      <h1>This is the inventory management screen</h1>
    </div>
  );
};
export default Inventory;
