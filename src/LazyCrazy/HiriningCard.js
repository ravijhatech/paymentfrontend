import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DownloadCandidateDetails from './DownLoadCandidate';
import {
    FaTrash,
    FaEdit,
    FaTimes
} from "react-icons/fa";
import { useParams } from 'react-router-dom';



function HiriningCard() {
    const { id } = useParams(); // dynamic MongoDB _id from URL
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [visibleVideo, setVisibleVideo] = useState(null);
    const [formData, setFormData] = useState({

        fullName: "",
        qualification: "",
        experience: "",
        email: "",
        mobileNumber: "",
        skill: "",
        state: "",
        city: "",
        videoUrl: null,
    });


    //delete 

    const handleDelete = async (id) => {
        console.log(id);
        
        try {
            const res = await axios.delete(`http://localhost:5000/api/hiring-candidate/${id}`);
            console.log(res);

            setData(data.filter(item => item.id !== id));
            alert("Deleted Sucessfully");
        } catch (error) {
            console.error('Deleted Error', error)
        }
    };

    useEffect(() => {
        const fetchData = async (id) => {

            await axios.get(`http://localhost:5000/api/hiring-candidate`)
                .then(res => {
                    setData(res.data)
                }).catch(error => {
                    console.error(error)
                })
        }
        fetchData();

    }, []);


    const showVideo = (id) => {
        setVisibleVideo(prev => (prev === id ? null : id));
    };

    const toggleModal = () => setIsOpen(!isOpen);

    // video change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            videoUrl: e.target.files[0]
        }));

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('fullName',setFormData.fullName);
        data.append('qualification',setFormData.qualification);
        data.append('experience',setFormData.experience);
        data.append('email',setFormData.email);
        data.append('mobileNumber',setFormData.mobileNumber);
        data.append('skill',setFormData.skill);
        data.append('state',setFormData.state);
        data.append('city',setFormData.city);

        if (setFormData.videoUrl) {
            data.append('videoUrl',setFormData.videoUrl);
        }
        try {
            await axios.put(`http://localhost:5000/api/hiring-candidate/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Update Sucessfully')
        } catch (error) {
            console.error(error);
            alert('Update failed');

        }
    }
    return (
        <div>
            <br />
            <DownloadCandidateDetails />
            <br />
            {
                data.map((item, index) => (

                    <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '3px solid #000', padding: 10, marginBottom: 10, marginLeft: 50, marginRight: 50 }} >
                        <img onClick={() => showVideo(item.id)}

                            src='https://cdn-icons-png.flaticon.com/128/1055/1055007.png'
                            style={{
                                borderRadius: '50%',
                                objectFit: 'cover',
                                width: '80px',
                                height: '80px',
                                border: '2px solid #ccc',
                                cursor: 'pointer',
                            }}
                        />
                        {
                            visibleVideo === item.id &&
                            (
                                <video controls width='15%' height={10}>
                                    <source src={item.videoUrl} type='video/mp4' />
                                </video>
                            )
                        }
                        <p><strong>Name :{item.fullName} </strong></p>
                        <p> <strong>ID :{item.idNO}</strong> </p>
                        <p> <strong>State & City :{item.state}/{item.city} </strong> </p>
                        <div style={{ display: 'flex', direction: 'row', gap: 15 }}>

                            <div style={{ height: 30, width: 30, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', display: 'flex', borderRadius: '5px', cursor: 'pointer' }}>
                                <FaEdit color='white' size={24} onClick={toggleModal} />
                            </div>
                            <div style={{ height: 30, width: 30, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', display: 'flex', borderRadius: '5px', cursor: 'pointer' }}>
                                <FaTrash onClick={() => handleDelete(item._id)} color='white' size={22} />
                            </div>
                        </div>


                    </div>
                ))
            }


            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative animate-fadeIn">
                        {/* Close Button */}
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                        >
                            <FaTimes />
                        </button>
                        <form onSubmit={handleSubmit}>

                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                            Canditate Update Information
                        </h2>

                        <input
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
                            type="text"
                            name='fullName'
                            placeholder="Enter Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />

                        <input
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
                            name='qualification'
                            placeholder="Enter Qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                        ></input>
                        <input
                            name='experience'
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"

                            placeholder="Enter Experience"
                            value={formData.experience}
                            onChange={handleChange}
                        ></input>
                        <input
                            name='email'
                            type='email'
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"

                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                        ></input>
                        <input
                            name='mobileNumber'
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"

                            placeholder="Enter Mobile Number"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        ></input>
                        <input
                            name='skill'
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"

                            placeholder="Enter Skill"
                            value={formData.skill}
                            onChange={handleChange}
                        ></input>
                        <input
                            name='state'
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"

                            placeholder="Enter State"
                            value={formData.state}
                            onChange={handleChange}
                        ></input>
                        <input
                            name='city'
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-3"

                            placeholder="Enter City"
                            value={formData.city}
                            onChange={handleChange}
                        ></input>

                        <input
                            type='file'
                            name="videoUrl"
                            accept='video/*'
                            onChange={handleFileChange}
                            className="w-full rounded mb-4 border"
                        // src={item.videoUrl}
                        ></input>

                        <button
                            type='submit'
                            // onClick={handleUpdate}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Update
                        </button>
                        </form>
                    </div>
                </div>
            )}



        </div>
    )
}

export default HiriningCard
