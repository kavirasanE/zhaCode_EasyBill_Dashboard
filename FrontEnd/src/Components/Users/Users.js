import "./users.css";
import React, {
  useState,
  useCallback,
  useRef,
  useContext,
  useEffect,
} from "react";
import UserInfo from "./UserInfo";
import DataContext from "../../Context/DataProvider";
import { DownOutlined } from "@ant-design/icons";
import { Checkbox, Dropdown, Space } from "antd";

const Users = () => {
  const { appName, data } = useContext(DataContext);
  const [itemOpen, setItemOpen] = useState(true);
  const [testVal, setTestVal] = useState(null);
  const [editData, setEditData] = useState({});
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [searchItem, setSearchItem] = useState();
  const [modal2Open, setModal2Open] = useState(false);

 
  // const [data, setDate] = useState([
  //   {
  //     shopName: "Shop 1",
  //     registerOn: "2024-03-01T12:00:00Z",
  //     deviceId: "DeviceID123",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-01T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 1",
  //     address: "Shop 1 Address, City 1, Country 1",
  //     mobileNumber: "MobileNumber1",
  //   },
  //   {
  //     shopName: "Shop 2",
  //     registerOn: "2024-03-02T12:00:00Z",
  //     deviceId: "DeviceID456",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-02T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 2",
  //     address: "Shop 2 Address, City 2, Country 2",
  //     mobileNumber: "MobileNumber2",
  //   },
  //   {
  //     shopName: "Shop 3",
  //     registerOn: "2024-03-03T12:00:00Z",
  //     deviceId: "DeviceID789",
  //     subscription: false,
  //     subscriptionStartDate: null,
  //     subscriptionEndDate: null,
  //     additionalInformation: "Additional information about Shop 3",
  //     address: "Shop 3 Address, City 3, Country 3",
  //     mobileNumber: "MobileNumber3",
  //   },
  //   {
  //     shopName: "Shop 4",
  //     registerOn: "2024-03-04T12:00:00Z",
  //     deviceId: "DeviceID101",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-04T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 4",
  //     address: "Shop 4 Address, City 4, Country 4",
  //     mobileNumber: "MobileNumber4",
  //   },
  //   {
  //     shopName: "Shop 5",
  //     registerOn: "2024-03-05T12:00:00Z",
  //     deviceId: "DeviceID112",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-05T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 5",
  //     address: "Shop 5 Address, City 5, Country 5",
  //     mobileNumber: "MobileNumber5",
  //   },
  //   {
  //     shopName: "Shop 6",
  //     registerOn: "2024-03-06T12:00:00Z",
  //     deviceId: "DeviceID213",
  //     subscription: false,
  //     subscriptionStartDate: null,
  //     subscriptionEndDate: null,
  //     additionalInformation: "Additional information about Shop 6",
  //     address: "Shop 6 Address, City 6, Country 6",
  //     mobileNumber: "MobileNumber6",
  //   },
  //   {
  //     shopName: "Shop 7",
  //     registerOn: "2024-03-07T12:00:00Z",
  //     deviceId: "DeviceID314",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-07T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 7",
  //     address: "Shop 7 Address, City 7, Country 7",
  //     mobileNumber: "MobileNumber7",
  //   },
  //   {
  //     shopName: "Shop 8",
  //     registerOn: "2024-03-08T12:00:00Z",
  //     deviceId: "DeviceID415",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-08T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 8",
  //     address: "Shop 8 Address, City 8, Country 8",
  //     mobileNumber: "MobileNumber8",
  //   },
  //   {
  //     shopName: "Shop 9",
  //     registerOn: "2024-03-09T12:00:00Z",
  //     deviceId: "DeviceID516",
  //     subscription: false,
  //     subscriptionStartDate: null,
  //     subscriptionEndDate: null,
  //     additionalInformation: "Additional information about Shop 9",
  //     address: "Shop 9 Address, City 9, Country 9",
  //     mobileNumber: "MobileNumber9",
  //   },
  //   {
  //     shopName: "Shop 10",
  //     registerOn: "2024-03-10T12:00:00Z",
  //     deviceId: "DeviceID617",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-10T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 10",
  //     address: "Shop 10 Address, City 10, Country 10",
  //     mobileNumber: "MobileNumber10",
  //   },
  // ]);
  //  const [userData,setuserData] =useState([]);

  //  useEffect(() => {
  //      setuserData(data);
  //      console.log(data);
  //  },[])

  let handleToggle = useCallback(
    (e) => {
      // setItemOpen((prevstate) => !prevstate);
      e.stopPropagation();
      console.log(e.target.id);
      setTestVal(e.target.id);
    },
    [itemOpen]
  );

  useEffect(() => {
    if (!searchItem) {
      setDataToDisplay(data);
    }
  }, [searchItem]);

  useEffect(() => {
    setDataToDisplay(data);
  }, []);

  const handleSearch = () => {
    const out = data.filter(
      (user) => user["Shop Name"]?.toLowerCase() == searchItem?.toLowerCase()
    );
    setDataToDisplay(out);
  };

  function handleAddSubsc(e) {
    setModal2Open(true);
    console.log(e.target.id);
    const [out] = data.filter((itm) => itm.UDR_Id == e.target.id);
    setEditData(out);
  }

  const [sortedData, setSortedData] = useState([]);
  const handleSort = async () => {
    const copy = [...data];
    // console.log(copy)
    setItemOpen(!itemOpen);
    copy.sort((a, b) => {
      let nameA = a["Shop Name"].toLowerCase();
      let nameB = b["Shop Name"].toLowerCase();
      return itemOpen ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setSortedData(copy);
    console.log(sortedData);
  };

  return (
    <div>
      {/* <div className="d-flex justify-content-end aligin-items-center p-2 ">
        <input
          type="Search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="p-2 rounded-2 mx-4 "
        />
        <button
          type="search"
          onClick={handleSearch}
          className=" btn btn-success"
        >
          Search
        </button>
  </div> */}
         

  
      {dataToDisplay.length == 0 && <p>No data to display</p>}
      {/* {dataToDisplay.length > 0 &&
        dataToDisplay.map((data, index) => (
          <UserInfo
            handleAddSubsc={handleAddSubsc}
            data={data}
            key={index}
            open={testVal == data.UDR_Id ? true : false}
            handleToggle={handleToggle}
            modal2Open={modal2Open}
            setModal2Open={setModal2Open}
            editData={editData}
          />
        ))} */}
      {(sortedData.length > 0 ? sortedData : dataToDisplay).map(
        (data, index) => (
          <UserInfo
            //  handleEdit={handleEdit}
            handleAddSubsc={handleAddSubsc}
            data={data}
            key={index}
            open={testVal == data.UDR_Id ? true : false}
            handleToggle={handleToggle}
            modal2Open={modal2Open}
            setModal2Open={setModal2Open}
            editData={editData}
          />
        )
      )}
    </div>
  );
};

export default Users;
