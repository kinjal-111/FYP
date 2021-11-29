import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdminDashboard from './admin/admindashboard';
import AdminSignin from './admin/Signin';
import AdminSignup from './admin/Signup';
import AddCategory from './admin/add_category';
import ManageCategory from './admin/manage_category';
import UpdateCategory from './admin/update_category';
import ViewCategory from './admin/view_category';
import AddProduct from './admin/add_product';
import ManageProduct from './admin/manage_product';
import UpdateProduct from './admin/update_product';
import ViewProduct from './admin/view_product';
import OrderDetails from './admin/orderdetails';
import ShipmentDetails from './admin/shipmentdetails';

import arshelf from './customer/arshelf';
import CustomerSignin from './customer/CustomerSignin';
import CustomerSignup from './customer/CustomerSignup';

import Furniture from './customer/furniture';
import Electronics from './customer/electronics';
import Showpiece from './customer/showpiece';
import ProductPage from './customer/product'

function Routes(){
	return(
		<BrowserRouter>
			<Switch>

				<Route path="/admindashboard" exact component={AdminDashboard} />
				<Route path="/admin/login" exact component={AdminSignin} / >
				<Route path="/admin/register" exact component={AdminSignup} / >
				<Route path="/admin/addcategory" exact component={AddCategory} />
				<Route path="/admin/managecategory" exact component={ManageCategory} />
				<Route path="/admin/updatecategory/:id" exact component={UpdateCategory} />
				<Route path="/admin/viewcategory/:id" exact component={ViewCategory} />
				<Route path="/admin/addproduct" exact component={AddProduct} />
				<Route path="/admin/manageproduct" exact component={ManageProduct} />
				<Route path="/admin/updateproduct/:id" exact component={UpdateProduct} />
				<Route path="/admin/viewproduct/:id" exact component={ViewProduct} />
				<Route path="/admin/orderlist" exact component={OrderDetails} />
				<Route path="/admin/shipment" exact component={ShipmentDetails} />

				<Route path="/arshelf" exact component={arshelf} />
				<Route path="/arshelf/login" exact component={CustomerSignin} / >
				<Route path="/arshelf/register" exact component={CustomerSignup} / >

				<Route path="/arshelf/furniture" exact component={Furniture} />
				<Route path="/arshelf/electronics" exact component={Electronics} />
				<Route path="/arshelf/showpiece" exact component={Showpiece} />
				<Route path="/arshelf/product" exact component={ProductPage} />

			</Switch>
		</BrowserRouter>
	);
}
export default Routes;
