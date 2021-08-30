import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, Route } from "react-router-dom";
import AdminNavi from "../../layouts/base/Admin/adminNavi/AdminNavi";
import CategoryAdd from "../../layouts/base/Admin/CategoryAdd/CategoryAdd";
import CategoryManagement from "../../layouts/base/Admin/CategoryManagement/CategoryManagement";
import ItemAdd from "../../layouts/base/Admin/itemAdd/ItemAdd";
import AdminItemSearchList from "../../layouts/base/Admin/itemManagement/AdminItemSearchList";
import ItemNameSearch from "../../layouts/base/Admin/itemManagement/ItemNameSearch";

export default function AdminPage() {
  return (
    <div>
      <Row>
        <Col sm={3}>
            
          <AdminNavi
            li={[
              [
                "Ürün Ekle",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630325078/eCommerce/add_wrqeb1.svg",
                "/admin/itemAdd",
              ],
              [
                "Ürün Yönetimi",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630346770/eCommerce/edit_begty1.png",
                "/admin/itemManagement",
              ],
              [
                "Kategori Ekle",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630325078/eCommerce/add_wrqeb1.svg",
                "/admin/categoryAdd",
              ],
              [
                "Kategori Yönetimi",
                "https://res.cloudinary.com/ahmettanrikulu/image/upload/v1630346770/eCommerce/edit_begty1.png",
                "/admin/categoryManagement",
              ],
            ]}
          />
        </Col>
        <Col sm={8}>
        <Route exact path="/admin/itemAdd" component={ItemAdd} />
        <Route exact path="/admin/itemManagement" component={ItemNameSearch} />
        <Route exact path="/admin/itemManagement/:itemName" component={ItemNameSearch} />
        <Route exact path="/admin/itemManagement/:itemName" component={AdminItemSearchList} />
        <Route exact path="/admin/categoryAdd" component={CategoryAdd} />
        <Route exact path="/admin/categoryManagement" component={CategoryManagement} />
        </Col>
      </Row>
    </div>
  );
}
