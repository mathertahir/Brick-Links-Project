import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action  cl-blue"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action   cl-blue"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action  cl-blue"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action  cl-blue"
          >
            Orders
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
