import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const CommentList = ({ items }) => {
  return (
    <>
      {items &&
        items.map((comment, index) => (
          <TableRow>
            <TableCell>{comment.id}</TableCell>
            <TableCell>{comment.title}</TableCell>
            <TableCell>{comment.completed ? "YES" : "NO"}</TableCell>
            <TableCell>{comment.description}</TableCell>
          </TableRow>
        ))}
    </>
  );
};

export default CommentList;
