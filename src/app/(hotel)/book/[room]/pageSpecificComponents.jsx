"use client";
import { Box } from "@mui/material";
import module from "./pageSpecificComponents.module.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export function BottomPart({ params }) {
  //////////////////////////////////////////////////////////////////////////

  function RoomCard() {
    const [dateRange, setDateRange] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);

    function NumberComponent({ title, initialValue = 1 }) {
      const [count, setCount] = useState(initialValue);

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
                onClick={() => setCount(count + 1)}
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
          <h1>Duplex</h1>
          <NumberComponent title={"Number Of Rooms"} initialValue={1} />
          <NumberComponent title={"Number Of Adults"} initialValue={1} />
          <NumberComponent title={"Number Of Children"} initialValue={0} />
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
                fontWeight: "500",
                letterSpacing: "1px",
                marginLeft: "20px",
              }}
            >
              Book Your Stay
            </h1>
          </Box>
          <RoomCard />

          <AddRoomWindow />
          <Box
            sx={{
              height: "50px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: "20px",
              borderRadius: "0 0 10px 10px",
            }}
            className={module.booking__bottom__title}
          >
            <h1
              style={{
                fontWeight: "500",
                fontSize: "20px",
                marginLeft: "20px",
              }}
            >
              TotalCost: <span style={{ fontWeight: "800" }}>₹9999</span>
            </h1>
          </Box>
        </Box>
      </Box>
    </>
  );
}

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
      <h2>Add Room</h2>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <Button
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
