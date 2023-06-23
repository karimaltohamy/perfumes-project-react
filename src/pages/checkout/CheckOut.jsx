import React, { useEffect, useState } from "react";
import "./checkOut.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { productsData } from "../../data";
import { useParams, useSearchParams } from "react-router-dom";
import imgProduct1 from "../../images/product1.webp";

const CheckOut = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const quantity = searchParams.get("quantity");
  const Shipping = 20;
  const [data, setData] = useState({});
  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    apartment: "",
    city: "",
    governorate: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  useEffect(() => {
    const d = productsData.find((item) => item.id === Number(id));
    setData(d);
  }, []);

  return (
    <div className="checkout">
      <div className="container mx-auto">
        <div className="line">
          <div className="left">
            <div className="logo">
              <h4>Odour</h4>
              <p className="flex items-center gap-1 text-[12px] mdtext-[15px] text-gray-600">
                <span>Cart</span> <MdKeyboardArrowRight size={18} />{" "}
                <span>Information</span> <MdKeyboardArrowRight size={18} />
                <span>Shipping</span> <MdKeyboardArrowRight size={18} />{" "}
                <span>Payment</span>
              </p>
              <form action="">
                <div className="input_item">
                  <label htmlFor="">Contact</label>
                  <input
                    type="text"
                    placeholder="Email or mobile phone number"
                    className="m-0 focus:border-blue-500"
                    id="email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <h5 className="title_Shipping">Shipping address</h5>
                <div className="input_item">
                  <select
                    name="countryCode"
                    id="country"
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AG">Antigua &amp; Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AC">Ascension Island</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia &amp; Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="VG">British Virgin Islands</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="BQ">Caribbean Netherlands</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo - Brazzaville</option>
                    <option value="CD">Congo - Kinshasa</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d’Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czechia</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="SZ">Eswatini</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong SAR</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao SAR</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar (Burma)</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MK">North Macedonia</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PS">Palestinian Territories</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn Islands</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">São Tomé &amp; Príncipe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia &amp; South Sandwich Islands
                    </option>
                    <option value="KR">South Korea</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="BL">St. Barthélemy</option>
                    <option value="SH">St. Helena</option>
                    <option value="KN">St. Kitts &amp; Nevis</option>
                    <option value="LC">St. Lucia</option>
                    <option value="MF">St. Martin</option>
                    <option value="PM">St. Pierre &amp; Miquelon</option>
                    <option value="VC">St. Vincent &amp; Grenadines</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard &amp; Jan Mayen</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad &amp; Tobago</option>
                    <option value="TA">Tristan da Cunha</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks &amp; Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UM">U.S. Outlying Islands</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican City</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="WF">Wallis &amp; Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                  <span className="text_country">Country/Region</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="input_item w-full md:w-[50%]">
                    <input
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input_item w-full md:w-[50%]">
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="input_item">
                  <input
                    type="text"
                    placeholder="Address"
                    id="address"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input_item">
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    id="apartment"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="input_item w-full md:w-[33%]">
                    <input
                      type="text"
                      placeholder="City"
                      id="city"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input_item w-full md:w-[33%]">
                    <input
                      type="text"
                      placeholder="Governorate"
                      id="governorate"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input_item w-full md:w-[33%]">
                    <input
                      type="text"
                      placeholder="Postal code"
                      id="postalCode"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <button className="btn_submit">Payment</button>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="details_Product md:max-w-[400px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="image relative">
                    <img
                      src={imgProduct1}
                      alt="img-product"
                      className="w-[90px] h-[90px] rounded border border-gray-200"
                    />
                    <span className="-top-1 -right-1 absolute w-[20px] h-[20px] rounded-[50%] flex items-center justify-center text-white bg-gray-800 text-[12px]">
                      {quantity}
                    </span>
                  </div>
                  <h5>{data.title}</h5>
                </div>
                <span>${data.price}</span>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-medium mb-3">Subtotal</span>
                  <span className="text-gray-500 text-[15px]">
                    ${data.price * quantity}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-medium mb-3">Shipping</span>
                  <span className="text-gray-500 text-[15px]">${Shipping}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-semibold mb-3 md:text-[19px]">
                    Total
                  </span>
                  <span className="text-gray-500 text-[15px] md:text-[17px]">
                    ${data.price * quantity + Shipping}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
