import React, { useEffect, useState } from 'react';
import { Button, TextInput, Textarea } from "flowbite-react";
import { EnquiryList } from './enquary/Enquarylist';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Enquary() {
  const [enquirylist, setEnquiryList] = useState([]);




  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const saveenq = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8020/api/website/enquiry/insert', formData)
      .then((res) => {
        toast.success('Enquiry saved successfully');
        setFormData({ name: '', email: '', phone: '', message: '' });
        getallenq();
      })
      .catch((err) => {
        toast.error('Failed to save enquiry');
        console.error(err);
      });
  };
  const deleteEnquiry = (id) => {
    axios.delete(`http://localhost:8020/api/website/enquiry/delete/${id}`)
      .then(() => {
        toast.success("Enquiry deleted successfully");
        getallenq(); // refresh list
      })
      .catch((err) => {
        toast.error("Failed to delete enquiry");
        console.error(err);
      });
  };
  



  const getallenq = () => {
    axios.get('http://localhost:8020/api/website/enquiry/view')
      .then((res) => res.data)
      .then((finaldata) => {
        if (finaldata.status) {
          setEnquiryList(finaldata.enquirylist);
        }
      })
      .catch((err) => {
        toast.error("Failed to load enquiries");
        console.error(err);
      });
  };

  const getvalue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getallenq();
  }, []);

  return (
    <div>
      <ToastContainer />
      <h1 className='text-[40px] text-center py-6 font-bold'>User Enquiry</h1>
      <div className='grid grid-cols-[30%_auto] gap-10'>
        <div className='bg-gray-200 p-4'>
          <h2 className='text-[20px] font-bold'>Enquiry Form</h2>
          <form onSubmit={saveenq}>
            <div className='py-3'>
              <label htmlFor="name">Your Name</label>
              <TextInput type="text" value={formData.name} onChange={getvalue} name="name" required />
            </div>
            <div className='py-3'>
              <label htmlFor="email">Your Email</label>
              <TextInput type="email" value={formData.email} onChange={getvalue} name="email" required />
            </div>
            <div className='py-3'>
              <label htmlFor="phone">Your Phone</label>
              <TextInput type="text" value={formData.phone} onChange={getvalue} name="phone" required />
            </div>
            <div className='py-3'>
              <label htmlFor="message">Your Message</label>
              <Textarea name="message" value={formData.message} onChange={getvalue} required rows={4} />
            </div>
            <div className='py-3'>
              <Button type="submit" className='w-[100%]'>Save</Button>
            </div>
          </form>
        </div>

        <EnquiryList data={enquirylist} onDelete={deleteEnquiry} />
      </div>
    </div>
  );
}
