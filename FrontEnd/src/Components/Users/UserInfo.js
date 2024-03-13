import React, { useState, memo, useContext, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import "./users.css";
import "mdb-ui-kit/css/mdb.min.css";
import { DownOutlined } from "@ant-design/icons";
import { Checkbox, Dropdown, Space } from "antd";
import { Button, Modal } from "antd";
import DataContext from "../../Context/DataProvider";

const UserInfo = ({
  data,
  open,
  handleToggle,
  handleAddSubsc,
  modal2Open,
  setModal2Open,
  editData,
}) => {
  // const [open, setOpen] = useState(false);
  // const [allClose, setAllClose] = useState(true);
  const { subscription } = useContext(DataContext);
  const [price, setPrice] = useState({});
  const [opened, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const[checkboxOpen,setCheckboxOpen] =useState(true)
  const handleMenuClick = (e) => {
    const getPrice = subscription.filter((itm) => itm.Sub_Type_Id == e.key);
    setPrice({ month: getPrice[0].Sub_Months, price: getPrice[0].Price });
  };

  useEffect(() => {
    let out = subscription.map((itm) => {
      return { label: itm.Sub_Months, key: itm.Sub_Type_Id };
    });
    setItems(out);
  }, []);

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  const userStyles = {
    transition: " 0.05s ease-out",
  };

  // const rotateStyle = {
  //   rotate: "90deg",
  // };
  // const UnrotateStyle = {
  //   rotate: "270deg",
  // };

  return (
    <>
      {/* <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button> */}

      <Modal
        title={editData["Shop Name"]}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className="row p-4">
          <p className="col-6">
            <span className="fw-bold"> ShopName: </span> {editData["Shop Name"]}
          </p>
          <p className="col-6">
            <span className="fw-bold">Mobile Number:</span>{" "}
            {editData["Mobile Number"]}
          </p>
        </div>
        

        {/* Only if user choose custom the should appear, disappering dropdown */}
      
        <div className="row p-4 gap-2">
        { !checkboxOpen &&
        <>  
        <div className="row justify-content-center align-items-start">
          <Dropdown
            menu={{
              items,
              onClick: handleMenuClick,
            }}
            onOpenChange={handleOpenChange}
            opened={opened}
            className="col-4"
          >
            <a onClick={(e) => e.preventDefault()} className="fw-bold">
              <Space>
                {price.month ? `${price.month} - Months` : "Choose plan"}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        { price.price > 0 &&
         <h5 className="col-4"><span>Price:Rs.</span>{price.price}</h5>
         }
        </div>
          <div className="col-5">
            <label id={data.UDR_Id}> Subscription Start date</label>
            <input type="date" onChange={(e) => console.log(e.target.value)} />
          </div>
          <div className="col-5">
            <label id={data.UDR_Id}> Subscription end date</label>
            <input type="date" />
          </div> </>}
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              onClick={() => setCheckboxOpen(!checkboxOpen)}
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Custom
            </label>
          </div>
          <input type="text" value={"dummy"} className="mx-10" />
        </div>
      </Modal>

      {!open ? (
        <div
          style={userStyles}
          className="row align-items-center border  rounded-3 border-primary  m-2 p-2"
        >
          <div class=" col form-floating ">
            <input
              type="text"
              class="form-control fw-bold "
              id="floatingInput"
              placeholder="name@example.com"
              value={data["Shop Name"]}
            />
            <label for="floatingInput">Shop Name</label>
          </div>

          <p className=" col mx-2 my-2">
            Subscription:
            <span className="text-success fw-bold">
              {data.Subscription ? (
                "Active"
              ) : (
                <span className="text-danger">InActive</span>
              )}
            </span>
          </p>
          <div className=" col d-flex justify-content-end align-items-center mx ">
            {/* <button
              id={data.UDR_Id}
              onClick={handleEdit}
              name={!edit ? "Edit" : "Cancel"}
              className="  rounded btn btn-primary"
            >
              {!edit ? "Edit" : "Cancel"}
            </button> */}
            {data.Subscription && (
              <button
                className="btn btn-primary"
                id={data.UDR_Id}
                onClick={handleAddSubsc}
              >
                Add Subscription
              </button>
            )}
            <button
              id={data.UDR_Id}
              className=" lg:px-4 mx-4  rounded btn btn-danger"
            >
              Delete
            </button>
            <button
              id={data.UDR_Id}
              onClick={handleToggle}
              className="px-2 lg:mx-4 rounded btn btn-dark"
            >
              {"+"}
              {/* <MdArrowBackIos
                style={rotateStyle}
                className="w-20"
                size={20}
                 
              />*/}
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`row border border-primary m-4 rounded-4 p-4`}
          style={userStyles}
        >
          <div className="d-flex justify-content-end align-items-center gap-3 mb-4">
            {data.Subscription && (
              <button
                className="btn btn-primary"
                id={data.UDR_Id}
                onClick={handleAddSubsc}
              >
                Add Subscription
              </button>
            )}

            <button className=" px-4 mx-4 rounded btn btn-danger">
              Delete
            </button>

            <button
              className=" px-2 mx-4 rounded btn btn-dark"
              onClick={handleToggle}
            >
              {"-"}

              {/* <MdArrowBackIos
                style={rotateStyle}
                className="w-20"
                size={20}
                 
              />*/}
            </button>
          </div>

          <div className="col ">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control fw-bold "
                id="floatingInput"
                placeholder="name@example.com"
                value={data["Shop Name"]}
              />
              <label for="floatingInput">Shop Name</label>
            </div>
            <p>Register On: {data["Register On"]}</p>
            <p>Device ID: {data["Device ID"]}</p>
          </div>
          <div className="col">
            <p>
              Subscription:{" "}
              <span className="text-success font-weight-bold">
                {data.Subscription ? (
                  "Active"
                ) : (
                  <span className="text-danger">InActive</span>
                )}
              </span>
            </p>
            <p>Sub Start Date: {data.Subcription_Start_Date}</p>
            <p>Sub End Date: {data.Subcription_End_Date}</p>
          </div>
          <div className="col">
            <p>Address: {data.Address}</p>
            <p>Mobile Number: {data["Mobile Number"]}</p>
          </div>
        </div>
      )}

      {/* {!itemOpen && !allOpen && (
        <div
          style={userStyles}
          onClick={() => {
            setItemOpen(true);
          }}
          className="row align-items-center border border-primary m-4 rounded-4 p-2 "
        >
          <p className=" col mx-2 my-2"> Shop Name{data.shopName}</p>
          <p className=" col  mx-2 my-2">
            Subscription:{data.subscription ? "Active" : "Inactive"}
          </p>
          <div className="col ">
            <button className=" px-2 mx-4">Edit</button>
            <button className=" px-2 mx-2">Delete</button>
            <MdArrowBackIos style={rotateStyle} className="w-20" />
          </div>
        </div>
      )}
      {itemOpen && (
        <div
          className={`row border border-primary m-4 rounded-4 p-4`}
          style={userStyles}
          onClick={() => {
            setItemOpen(false);
          }}
        >
          <div className="d-flex justify-content-end gap-3 mb-4">
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <div className="col">
            <p> Shop Name{data.shopName}</p>
            <p>Register On: {data.registerOn}</p>
            <p>Device ID: {data.deviceId}</p>
          </div>
          <div className="col">
            <p>Subscription:{data.subscription ? "Active" : "Inactive"}</p>
            <p>Subscription Start Date: {data.subscriptionStartDate}</p>
            <p>Subscription End Date: {data.subscriptionEndDate}</p>
          </div>
          <div className="col">
            <p>Additional Information:{data.additionalInformation}</p>
            <p>Address: {data.address}</p>
            <p>Mobile Number: {data.mobileNumber}</p>
          </div>
        </div>
      )} */}
    </>

    // <div class="accordion" id="accordionExample">
    //   <div class="accordion-item">
    //     <h2 class="accordion-header" id="headingOne">
    //       <button
    //         class="accordion-button"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseOne"
    //         aria-expanded="true"
    //         aria-controls="collapseOne"
    //       >
    //         Accordion Item #1
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseOne"
    //       class="accordion-collapse collapse show"
    //       aria-labelledby="headingOne"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the first item's accordion body.</strong> It is
    //         shown by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="accordion-item">
    //     <h2 class="accordion-header" id="headingTwo">
    //       <button
    //         class="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseTwo"
    //         aria-expanded="false"
    //         aria-controls="collapseTwo"
    //       >
    //         Accordion Item #2
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseTwo"
    //       class="accordion-collapse collapse"
    //       aria-labelledby="headingTwo"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the second item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="accordion-item">
    //     <h2 class="accordion-header" id="headingThree">
    //       <button
    //         class="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseThree"
    //         aria-expanded="false"
    //         aria-controls="collapseThree"
    //       >
    //         Accordion Item #3
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseThree"
    //       class="accordion-collapse collapse"
    //       aria-labelledby="headingThree"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the third item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default memo(UserInfo);
