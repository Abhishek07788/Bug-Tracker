import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";

const Low = (props) => {
  const { _id, title, status, handleDelete, handleEdit } = props;

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("bug_id", id);
  };

  return (
    <Box
      bg="#277c53"
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

export default Low;
