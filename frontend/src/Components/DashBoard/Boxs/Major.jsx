import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";

const Major = (props) => {
  const { _id, title, status, handleDelete, handleEdit } = props;

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("bug_id", id);
  };

  return (
    <Box
      bg="#f4b452"
      borderRadius={4}
      mt="3"
      textAlign="left"
      p="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      draggable
      onDragStart={(e) => handleDragStart(e, _id)}
    >
      <Text>{title}</Text>
      <Box display="flex" alignItems="center" gap="2" fontSize={20}>
        <Text
          onClick={() => handleDelete(_id)}
          title="Delete Bug"
          cursor="pointer"
        >
          <RiDeleteBinFill />
        </Text>
        <Text
          onClick={() => handleEdit(_id, status)}
          title="Edit Bug"
          cursor="pointer"
          fontSize={22}
        >
          <AiTwotoneEdit />
        </Text>
      </Box>
    </Box>
  );
};

export default Major;
