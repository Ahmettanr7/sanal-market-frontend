import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import CategoryService from '../../../../services/CategoryService';

export default function CategoryManagement() {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, []);


    return (
        <div
        style={{
          marginLeft:"-50px",
          marginTop:"25px"  
        }}
        >
            <Table
            striped  hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Kategori Adı</th>
      <th>Resim Yolu</th>
      <th>Düzenle</th>
      <th>Sil</th>
    </tr>
  </thead>
  <tbody>
  {categories.map((category, index) => (
    <tr key={index}>
      <td>{category.id}</td>
      <td>{category.categoryName}</td>
      <td>{category.imageUrl}</td>
      <td>
        <Button variant="warning">Düzenle</Button>
      </td>
      <td>
        <Button variant="danger">Sil</Button>
      </td>
    </tr>
    ))}
  </tbody>
</Table>
        </div>
    )
}
