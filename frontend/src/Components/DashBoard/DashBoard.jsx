import { Box, Button, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  addBug,
  deleteBug,
  getBugs,
  updateBug,
} from "../../Redux/bugs/bugs.action";
import Critical from "./Boxs/Critical";
import Low from "./Boxs/Low";
import Major from "./Boxs/Major";
import Medium from "./Boxs/Medium";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const { bugsData, loading, error } = useSelector((store) => store.Bugs);
  const dispatch = useDispatch();

  useEffect(() => {
    getBug();
  }, []);

  //---------- get Bugs ----
  const getBug = () => {
    dispatch(getBugs());
  };

  //---------- get Critical Bugs ----
  const addCriticalBug = () => {
    const title = prompt("Enter Bug name...");
    if (title) {
      dispatch(addBug({ title: title, status: "Critical" }));
    } else {
      alert("Please Add Something!!");
    }
    setTimeout(() => {
      getBug();
    }, 800);
  };

  //---------- get Major Bugs ----
  const addMajorBug = () => {
    const title = prompt("Enter Bug name...");
    if (title) {
      dispatch(addBug({ title: title, status: "Major" }));
    } else {
      alert("Please Add Something!!");
    }
    setTimeout(() => {
      getBug();
    }, 800);
  };

  //---------- get Medium Bugs ----
  const addMediumBug = () => {
    const title = prompt("Enter Bug name...");
    if (title) {
      dispatch(addBug({ title: title, status: "Medium" }));
    } else {
      alert("Please Add Something!!");
    }
    setTimeout(() => {
      getBug();
    }, 800);
  };

  //---------- get Low Bugs ----
  const addLowBug = () => {
    const title = prompt("Enter Bug name...");
    if (title) {
      dispatch(addBug({ title: title, status: "Low" }));
    } else {
      alert("Please Add Something!!");
    }
    setTimeout(() => {
      getBug();
    }, 800);
  };

  //------- Delete Bug ----
  const handleDelete = (id) => {
    dispatch(deleteBug(id));
    setTimeout(() => {
      getBug();
    }, 800);
  };

  //----- Drop ------
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //--------- Dropped Critical ------
  const handleDropCritical = (e) => {
    const dropped_id = e.dataTransfer.getData("bug_id");
    dispatch(updateBug(dropped_id, { id: dropped_id, status: "Critical" }));

    setTimeout(() => {
      getBug();
    }, 800);
  };

  //--------- Edit Bugs ------
  const handleEdit = (id, status) => {
    const title = prompt("Edit Bug name...");
    if (title) {
      dispatch(updateBug(id, { title: title, status: status }));
    } else {
      alert("Please Edit Something!!");
    }
    setTimeout(() => {
      getBug();
    }, 800);
  };

  //--------- Dropped Major ------
  const handleDropMajor = (e) => {
    const dropped_id = e.dataTransfer.getData("bug_id");
    dispatch(updateBug(dropped_id, { _id: dropped_id, status: "Major" }));

    setTimeout(() => {
      getBug();
    }, 800);
  };

  //--------- Dropped Medium ------
  const handleDropMedium = (e) => {
    const dropped_id = e.dataTransfer.getData("bug_id");
    dispatch(updateBug(dropped_id, { id: dropped_id, status: "Medium" }));

    setTimeout(() => {
      getBug();
    }, 800);
  };

  //--------- Dropped Low ------
  const handleDropLow = (e) => {
    console.log("e: ", e);
    const dropped_id = e.dataTransfer.getData("bug_id");
    dispatch(updateBug(dropped_id, { id: dropped_id, status: "Low" }));

    setTimeout(() => {
      getBug();
    }, 800);
  };

  return (
    <Grid mt={100}>
      {/* ============== Indicators ====== */}
      {loading ? (
        <Heading fontSize={20} textAlign="center" color="green">
          loading...
        </Heading>
      ) : (
        ""
      )}
      {error ? (
        <Heading fontSize={20} textAlign="center" color="red">
          Server error...
        </Heading>
      ) : (
        ""
      )}
      <SimpleGrid w="95%" m="auto" columns={[1, 2, 2, 4]} spacing="4">
        {/* --------- Critical Box -------- */}
        <Box borderRadius={8} color="#ffff" fontSize="19">
          <Button onClick={addCriticalBug} colorScheme="blue" float="right">
            Report Bug
          </Button>
          <br />
          <Text
            bg="#f65251"
            borderTopRadius={8}
            mt="6"
            mb="3"
            textAlign="left"
            p="4"
          >
            Critical Severity
          </Text>
          <Box
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDropCritical(e)}
            p="1"
            pt="0"
            pb="5"
            border="1px solid transparent"
            _hover={{ border: "1px solid blue" }}
            borderRadius={10}
          >
            {bugsData &&
              bugsData.map((el) =>
                el.status == "Critical" ? (
                  <Critical
                    key={el._id}
                    {...el}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ) : (
                  ""
                )
              )}
          </Box>
        </Box>

        {/* --------- Major Box -------- */}
        <Box borderRadius={8} color="#ffff" fontSize="19">
          <Button onClick={addMajorBug} colorScheme="blue" float="right">
            Report Bug
          </Button>
          <br />
          <Text
            bg="#f4b452"
            borderTopRadius={8}
            mt="6"
            mb="3"
            textAlign="left"
            p="4"
          >
            Major Severity
          </Text>
          <Box
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDropMajor(e)}
            p="1"
            pt="0"
            pb="5"
            border="1px solid transparent"
            _hover={{ border: "1px solid blue" }}
            borderRadius={10}
          >
            {bugsData &&
              bugsData.map((el) =>
                el.status == "Major" ? (
                  <Major
                    key={el._id}
                    {...el}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ) : (
                  ""
                )
              )}
          </Box>
        </Box>

        {/* --------- Medium Box -------- */}
        <Box borderRadius={8} color="#ffff" fontSize="19">
          <Button onClick={addMediumBug} colorScheme="blue" float="right">
            Report Bug
          </Button>
          <br />
          <Text
            bg="#5f55d0"
            borderTopRadius={8}
            mt="6"
            mb="3"
            textAlign="left"
            p="4"
          >
            Medium Severity
          </Text>
          <Box
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDropMedium(e)}
            p="1"
            pt="0"
            pb="5"
            border="1px solid transparent"
            _hover={{ border: "1px solid blue" }}
            borderRadius={10}
          >
            {bugsData &&
              bugsData.map((el) =>
                el.status == "Medium" ? (
                  <Medium
                    key={el._id}
                    {...el}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ) : (
                  ""
                )
              )}
          </Box>
        </Box>

        {/* ------ Low Box -------- */}
        <Box borderRadius={8} color="#ffff" fontSize="19">
          <Button onClick={addLowBug} colorScheme="blue" float="right">
            Report Bug
          </Button>
          <br />
          <Text
            bg="#277c53"
            borderTopRadius={8}
            mt="6"
            mb="3"
            textAlign="left"
            p="4"
          >
            Low Severity
          </Text>
          <Box
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDropLow(e)}
            p="1"
            pt="0"
            pb="5"
            border="1px solid transparent"
            _hover={{ border: "1px solid blue" }}
            borderRadius={10}
          >
            {bugsData &&
              bugsData.map((el) =>
                el.status == "Low" ? (
                  <Low
                    key={el._id}
                    {...el}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ) : (
                  ""
                )
              )}
          </Box>
        </Box>
      </SimpleGrid>
    </Grid>
  );
};

export default DashBoard;
