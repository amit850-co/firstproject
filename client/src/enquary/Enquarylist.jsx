import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export function EnquiryList({ data, onDelete }) {
  return (
    <div className='bg-gray-200 p-4'>
      <h2 className='text-[20px] font-bold mb-4'>Enquiry List</h2>

      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr Number</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell><span>Delete</span></TableHeadCell>
              <TableHeadCell><span>Edit</span></TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y">
            {data.length >= 1 ? (
              data.map((item, index) => (
                <TableRow key={item._id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.message}</TableCell>
                  <TableCell>
                    <button 
                      className='text-red-500' 
                      onClick={() => onDelete(item._id)}
                    >
                      Delete
                    </button>
                  </TableCell>
                  <TableCell>
                    <button className='text-blue-500'>Edit</button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <TableCell colSpan={7} className='text-center'>
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
