import { useState, useEffect } from "react";
import HeaderManager from "../../partials/headerManager";
import NavbarManager from "../../partials/navbarManager";
import { Table } from "react-bootstrap";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import AddItem from "./add-item-modal";
import { ActivePageType } from "../../../utils/activePageTypes";
import axios from "axios";

interface ClothTypeData {
  ClothType: string;
  Wash: number;
  Iron: number;
  WashAndIron: number;
  DryClean: number;
}

const Pricing = () => {
  const [navigation, setNavigation] = useState(false);
  const [show, setShow] = useState(false);
  const [curr_index, setIndex] = useState(-1);
  const [value, setValue] = useState(0);
  const [currentOperation, setCurrentOperation] = useState("");
  const [pricing, setPricing] = useState<ClothTypeData[]>([]);
  // const [updatedPricing, setUpdatedPricing] = useState<ClothTypeData[]>([]);

  const updatePricing = async () => {
    // console.log(updatedPricing);
    // if (updatedPricing !== null && updatedPricing.length !== 0) {
      await axios
        .post("http://localhost:8000/api/pricing/updatePricing", {
          manager_email: "dummymanager@iut-dhaka.edu",
          pricing: pricing,
        })
        .then((res) => {
          console.log(res);
          setPricing(pricing);
          setIndex(-1);
        })
        .catch((err) => {
          console.log(err);
        });
    // }
  };

  const changeValue = (e: string, index: number, operation: string) => {
    setValue(Number(e));
    let temp_pricing: {
      ClothType: string;
      Wash: number;
      Iron: number;
      WashAndIron: number;
      DryClean: number;
    }[] = [...pricing];
    if (operation === "Wash") {
      temp_pricing[index].Wash = Number(e);
      // setUpdatedPricing([...updatedPricing, temp_pricing[index]]);
    } else if (operation === "Iron") {
      temp_pricing[index].Iron = Number(e);
      // setUpdatedPricing([...updatedPricing, temp_pricing[index]]);
    } else if (operation === "Wash & Iron") {
      temp_pricing[index].WashAndIron = Number(e);
      // setUpdatedPricing([...updatedPricing, temp_pricing[index]]);
    } else {
      temp_pricing[index].DryClean = Number(e);
      // setUpdatedPricing([...updatedPricing, temp_pricing[index]]);
    }
    setPricing(temp_pricing);
  };

  useEffect(() => {
    const getLaundryPricing = async () => {
      await axios
        .get("http://localhost:8000/api/pricing/dummymanager@iut-dhaka.edu")
        .then((res) => {
          setPricing(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getLaundryPricing();
  }, []);

  return (
    <div className="pricing">
      <NavbarManager
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.SetPricing}
      />
      <div className="pricing-container">
        <div className="main">
          <HeaderManager
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <AddItem
            show={show}
            setShow={setShow}
            pricing={pricing}
            setPricing={setPricing}
          />
          <div className="table new-order-table">
            <div className="new-order">
              <div className="title">
                <h1>Add New Item</h1>
              </div>
              <div className="add-order-btn">
                <button className="add-order" onClick={() => setShow(true)}>
                  Add Item
                  <IonIcon icon={addCircleOutline}></IonIcon>
                </button>
              </div>
            </div>
          </div>
          <Table striped bordered hover className="pricing-table">
            <thead>
              <tr>
                <h2>Pricing Chart</h2>
              </tr>
              <tr>
                <th>
                  {" "}
                  <h5>Cloth</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Wash</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Iron</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Wash And Iron</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Dry Clean</h5>{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((price, index) => (
                <tr>
                  <td>{price.ClothType}</td>
                  <td
                    onClick={() => {
                      setIndex(index);
                      setValue(price.Wash);
                      setCurrentOperation("Wash");
                    }}
                  >
                    <input
                      type={
                        curr_index === index && currentOperation === "Wash"
                          ? "number"
                          : "text"
                      }
                      value={
                        curr_index === index && currentOperation === "Wash"
                          ? value
                          : price.Wash !== null && price.Wash !== 0
                          ? price.Wash
                          : 0
                      }
                      onChange={(e) =>
                        changeValue(e.target.value, index, "Wash")
                      }
                      disabled={
                        !(curr_index === index && currentOperation === "Wash")
                      }
                    />
                  </td>
                  <td
                    onClick={() => {
                      setIndex(index);
                      console.log("index: ", curr_index);
                      setValue(price.Iron);
                      setCurrentOperation("Iron");
                      console.log("operation: ", currentOperation);
                    }}
                  >
                    <input
                      type={
                        curr_index === index && currentOperation === "Iron"
                          ? "number"
                          : "text"
                      }
                      value={
                        curr_index === index && currentOperation === "Iron"
                          ? value
                          : price.Iron !== null && price.Iron !== 0
                          ? price.Iron
                          : 0
                      }
                      onChange={(e) =>
                        changeValue(e.target.value, index, "Iron")
                      }
                      disabled={
                        !(curr_index === index && currentOperation === "Iron")
                      }
                    />
                  </td>
                  <td
                    onClick={() => {
                      setIndex(index);
                      setValue(price.WashAndIron);
                      setCurrentOperation("Wash & Iron");
                    }}
                  >
                    <input
                      type={
                        curr_index === index &&
                        currentOperation === "Wash & Iron"
                          ? "number"
                          : "text"
                      }
                      value={
                        curr_index === index &&
                        currentOperation === "Wash & Iron"
                          ? value
                          : price.WashAndIron !== null &&
                            price.WashAndIron !== 0
                          ? price.WashAndIron
                          : 0
                      }
                      onChange={(e) =>
                        changeValue(e.target.value, index, "Wash & Iron")
                      }
                      disabled={
                        !(
                          curr_index === index &&
                          currentOperation === "Wash & Iron"
                        )
                      }
                    />
                  </td>
                  <td
                    onClick={() => {
                      setIndex(index);
                      setValue(price.DryClean);
                      setCurrentOperation("Dry Clean");
                    }}
                  >
                    <input
                      type={
                        curr_index === index && currentOperation === "Dry Clean"
                          ? "number"
                          : "text"
                      }
                      value={
                        curr_index === index && currentOperation === "Dry Clean"
                          ? value
                          : price.DryClean !== null && price.DryClean !== 0
                          ? price.DryClean
                          : 0
                      }
                      onChange={(e) =>
                        changeValue(e.target.value, index, "Dry Clean")
                      }
                      disabled={
                        !(
                          curr_index === index &&
                          currentOperation === "Dry Clean"
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <button style={{ width: "90%" }} onClick={updatePricing}>
                Set Price
              </button>
            </tfoot>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
