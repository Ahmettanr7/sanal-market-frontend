import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AddressService from "../../services/AddressService";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";

export default function Address() {
  const { addToast } = useToasts();
  const [address, setAddress] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    let addressService = new AddressService();
    addressService
      .getAddressByUserId(56)
      .then((result) => setAddress(result.data.data));

    addressService
      .getAllCountries()
      .then((result) => setCountries(result.data.data));

    addressService
      .getCitiesByCountryId(formik.values.countryId)
      .then((result) => setCities(result.data.data));

    addressService
      .getTownsByCityId(formik.values.cityId)
      .then((result) => setTowns(result.data.data));

    addressService
      .getDistrictsByTownId(formik.values.townId)
      .then((result) => setDistricts(result.data.data));
  }, []);

    const NewAddressAddSchema = Yup.object().shape({
      countryId: Yup.string().required("Ülke seçimi zorunludur"),
      cityId: Yup.string().required("Şehir seçimi zorunludur"),
      townId: Yup.string().required("İlçe seçimi zorunludur"),
      districtId: Yup.string().required("Mahalle seçimi zorunludur"),
      postalCode: Yup.string().required("Posta kodu zorunludur"),
      addressText: Yup.string().required("Adres açıklaması zorunludur"),
    });

  let addressService = new AddressService();
  const formik = useFormik({
    initialValues: {
        userId: "59",
        countryId: "1",
        cityId: "42",
        townId: "732",
        districtId: "22147",
        // postalCode: "",
        // addressText: "",
    },
    validationSchema: NewAddressAddSchema,
    onSubmit: (values) => {
      console.log(values);
      //   addressService.addAddress(values).then((result) =>
      //     addToast(result.data.message, {
      //       appearance: result.data.success ? "success" : "error",
      //       autoDismiss: true,
      //     })
      //   );
    },
  });

  return (
    <div>
      <Form.Label className="m-4">
        <h4>Kayıtlı Adreslerim</h4>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          Siparişin getirileceği adresi seçiniz. Siparişiniz kayıtlı adreslerden
          farklı adrese gelecekse yeni adres ekleyiniz.
        </p>
      </Form.Label>
      <Form.Select>
        {address.map((address, index) => (
          <option key={index} value={address.id}>
            {address.addressText}
          </option>
        ))}
      </Form.Select>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Label className="m-4">
            <h4>Yeni Adres ekle</h4>
          </Form.Label>
          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.onBlur}
            id="countryId"
            value={formik.values.countryId}
          >
              
            {countries.map((country, index) => (
              <option value={country.id} key={index}>
                {country.country}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.onBlur}
            id="cityId"
            value={formik.values.cityId}
          >
            {cities.map((city, index) => (
              <option value={city.id} key={index}>
                {city.city}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.onBlur}
            id="townId"
            value={formik.values.townId}
          >
            {towns.map((town, index) => (
              <option value={town.id} key={index}>
                {town.town}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            onChange={formik.handleChange}
            onBlur={formik.onBlur}
            id="districtId"
            value={formik.values.districtId}
          >
            {districts.map((district, index) => (
              <option value={district.id} key={index}>
                {district.district}
              </option>
            ))}
          </Form.Select>
          <Button type="submit">gönder</Button>
        </Form>
      </Formik>
    </div>
  );
}
