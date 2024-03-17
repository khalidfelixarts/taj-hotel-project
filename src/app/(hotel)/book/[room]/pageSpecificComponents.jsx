"use client";
import { Box } from "@mui/material";
import module from "./pageSpecificComponents.module.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect, useState } from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { getNumberOfDays } from "@/utils/utils";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Constants } from "@/utils/constants";

export function BottomPart({ params, details }) {
  //////////////////////////////////////////////////////////////////////////
  const user = useSelector((state) => state.user.user);
  const router = useRouter();

  const [finalPrice, setFinalPrice] = useState(details?.price);

  const [finalData, setFinalData] = useState({
    numberOfRooms: 1,
    numberOfAdults: 1,
    numberOfChildren: 0,
    startDate: new Date(),
    endDate: new Date(),
  });

  const extraChargePerPerson = () => {
    let baseExtraCharge = 0;
    if (params?.room === "standard") baseExtraCharge = details?.price * 0.4;
    else if (params?.room === "duplex") baseExtraCharge = details?.price * 0.4;
    else if (params?.room === "suite") baseExtraCharge = details?.price * 0.4;

    const totalExtraCharge =
      baseExtraCharge *
      (finalData.numberOfAdults - finalData.numberOfRooms * 2);
    if (totalExtraCharge < 0) return 0;
    console.log("render");

    return totalExtraCharge;
  };

  useEffect(() => {
    function CalculateFinalPrice() {
      let singleRoomPrice = details?.price;
      let adults = finalData.numberOfAdults;
      let children = finalData.numberOfChildren;
      let rooms = finalData.numberOfRooms;
      let startDate = finalData.startDate;
      let endDate = finalData.endDate;

      let noOfDays = getNumberOfDays(startDate, endDate);

      setFinalPrice(
        singleRoomPrice * noOfDays * rooms + extraChargePerPerson() * noOfDays
      );
    }

    CalculateFinalPrice();
  }, [finalData]);

  function AddRoomWindow() {
    return (
      <Box
        sx={{
          px: "10px",
          py: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          textWrap: "nowrap",
          gap: "20px",
        }}
      >
        <h2>Checkout Other Rooms</h2>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Button
            onClick={() =>
              router.push(`/book/${Constants?.Rooms[0].type.toLowerCase()}`)
            }
            sx={{ display: "flex", gap: "10px", width: "160px" }}
            className={module.add__buttons}
            variant="contained"
          >
            <AddIcon
              className={module.add__buttons}
              sx={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            STANDARD
          </Button>

          <Button
            onClick={() =>
              router.push(`/book/${Constants?.Rooms[1].type.toLowerCase()}`)
            }
            sx={{ display: "flex", gap: "10px", width: "160px" }}
            className={module.add__buttons}
            variant="contained"
          >
            <AddIcon
              className={module.add__buttons}
              sx={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            DUPLEX
          </Button>
          <Button
            onClick={() =>
              router.push(`/book/${Constants?.Rooms[2].type.toLowerCase()}`)
            }
            sx={{ display: "flex", gap: "10px", width: "160px" }}
            className={module.add__buttons}
            variant="contained"
          >
            <AddIcon
              className={module.add__buttons}
              sx={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            SUITE
          </Button>
        </Box>
      </Box>
    );
  }

  /////////////////////////////////////////////////////////////////////////////
  const handleRequestAvailability = async () => {
    console.log({ ...finalData, total: finalPrice });
    if (!user?.name) {
      toast.error("Please login first");
      router.push("/signin");
      return;
    }
    toast.success(
      `Successfully requested for Availability, From ${finalData.startDate.toLocaleDateString()} to ${finalData.endDate.toLocaleDateString()}`
    );
  };

  /////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "40vh",
          paddingTop: "20px",
        }}
      >
        <Box
          className={module.booking__window__parent}
          sx={{
            marginX: "auto",
            width: { xs: "95vw" },
            maxWidth: "800px",
            height: "400px",
          }}
        >
          <Box
            sx={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px 10px 0 0",
            }}
            className={module.booking__window__title}
          >
            <h1
              style={{
                fontWeight: "700",
                // letterSpacing: "1px",
                marginLeft: "20px",
              }}
            >
              Book Your Stay
            </h1>
          </Box>

          <RoomCard
            params={params}
            setFinalData={setFinalData}
            finalData={finalData}
            finalPrice={finalPrice}
            details={details}
          />
          <AddRoomWindow />
          <Box
            sx={{
              height: { xs: "130px", sm: "120px", md: "80px" },
              gap: "10px",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              px: "20px",
              borderRadius: "0 0 10px 10px",
              flexDirection: { xs: "column", sm: "row" },
            }}
            className={module.booking__bottom__title}
          >
            <Box
              sx={{
                marginLeft: "20px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  textWrap: "nowrap",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Total
                <span
                  style={{
                    marginLeft: "4px",
                    marginRight: "4px",
                    fontSize: "12px",
                  }}
                >
                  {"("}excluding tax{")"}
                </span>
                : <span style={{ fontWeight: "800" }}>₹{finalPrice}</span>
              </h1>
              <span style={{ fontSize: "11px", fontWeight: "700" }}>
                {extraChargePerPerson() > 0 &&
                  `Extra charge for extra person: ₹${
                    extraChargePerPerson() *
                    getNumberOfDays(finalData.startDate, finalData.endDate)
                  }`}
              </span>
            </Box>
            <Button
              onClick={handleRequestAvailability}
              className={module.confirm__buttons}
              variant="contained"
            >
              Request Availability
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function RoomCard({ params, details, finalData, finalPrice, setFinalData }) {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  const maxAdultsPerRoom = 3;
  const maxChildrenPerRoom = 2;

  const [maxAdults, setMaxAdults] = useState(numberOfRooms * maxAdultsPerRoom);
  const [maxChildren, setMaxChildren] = useState(
    numberOfRooms * maxChildrenPerRoom
  );

  useEffect(() => {
    setMaxAdults(numberOfRooms * maxAdultsPerRoom);
    setMaxChildren(numberOfRooms * 2);
  }, [numberOfRooms]);

  useEffect(() => {
    if (numberOfAdults > maxAdults) {
      setNumberOfAdults(maxAdults);
    }
    if (numberOfChildren > maxChildren) {
      setNumberOfChildren(maxChildren);
    }
  }, [numberOfAdults, numberOfChildren, maxAdults, maxChildren]);

  useEffect(() => {
    setFinalData({
      numberOfRooms,
      numberOfAdults,
      numberOfChildren,
      startDate: dateRange[0]?.startDate,
      endDate: dateRange[0]?.endDate,
    });
  }, [numberOfRooms, numberOfAdults, numberOfChildren, dateRange]);

  function NumberComponent({ count, setCount, title, initialValue, max }) {
    return (
      <>
        <Box
          sx={{
            my: "10px",
            padding: "15px",
            width: "270px",
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ca8300",
            borderRadius: "10px",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <RemoveIcon
              sx={{
                color: "white",
                borderRadius: "10px",
                background: "#ca8300",
              }}
              onClick={() => {
                if (count <= initialValue) return;
                setCount(count - 1);
              }}
            />
            <span style={{ fontSize: "18px" }}>{count}</span>
            <AddIcon
              sx={{
                color: "white",
                borderRadius: "10px",
                background: "#ca8300",
              }}
              onClick={() => {
                if (max && count >= max) return;
                setCount(count + 1);
              }}
            />
          </Box>
        </Box>
      </>
    );
  }

  return (
    <Box
      className={module.room__card}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        my: "5px",
        minHeight: "60px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textTransform: "capitalize" }}>{params?.room}</h1>
        <NumberComponent
          count={numberOfRooms}
          setCount={setNumberOfRooms}
          title={"Number Of Rooms"}
          initialValue={1}
        />
        <NumberComponent
          count={numberOfAdults}
          setCount={setNumberOfAdults}
          title={"Number Of Adults"}
          initialValue={1}
          max={maxAdults}
        />
        <NumberComponent
          count={numberOfChildren}
          setCount={setNumberOfChildren}
          title={"Number Of Children"}
          initialValue={0}
          max={maxChildren}
        />

        <Box sx={{ color: "rgba(230,10,10,1)" }}>
          *Per Room:{" "}
          <span style={{ fontWeight: "800" }}>₹{details?.price}</span>
        </Box>
        <Box
          sx={{
            width: "90%",
            textAlign: "center",
            color: "rgba(190,10,10,1)",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontSize: "12px" }}>
            More than 2 adults and 2 children in a single room are not allowed.
          </span>
        </Box>
      </Box>

      <Box>
        <DateRange
          style={{
            background: "#fff",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          // color={"#ca8300"}
          rangeColors={["#ca8300"]}
          minDate={new Date()}
          fixedHeight
          editableDateInputs={true}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
        />
      </Box>
    </Box>
  );
}
