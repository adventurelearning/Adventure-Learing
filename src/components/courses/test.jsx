import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../../components/api";

const BlogAd = () => {
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize formData with a "page" field and an array of "ad" objects
  const [formData, setFormData] = useState({
    page: "",
    ad: [{ link_name: "", photo: null }],
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function run() {
      if (id) {
        setLoading(true);
        setError(null);
        try {
          const response = await api.get(`/blog-Ad/Edit/${id}`);
          setFormData({
            page: response.data.page, // Assuming the API returns a single "page"
            ad: response.data.ad, // Assuming the API returns an array of "ad" objects
          });
        } catch (err) {
          setError(err.message || "Failed to fetch data.");
        } finally {
          setLoading(false);
        }
      }
    }
    run();
  }, [id]);

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    const updatedFormData = { ...formData };
    updatedFormData.ad[index] = {
      ...updatedFormData.ad[index],
      [field]: value,
    };
    setFormData(updatedFormData);
  };

  const handleFileChange = async (e, index) => {
    const file = e.target.files[0];
    const updatedFormData = { ...formData };
    updatedFormData.ad[index] = { ...updatedFormData.ad[index], photo: file };
    setFormData(updatedFormData);

    if (file) {
      setUploading(true);
      setMessage("Uploading image...");
      setProgress(0);

      const imageFormData = new FormData();
      imageFormData.append("photo", file);

      try {
        const config = {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percent);
          },
        };

        const imageUploadResponse = await api.post(
          "/uploads",
          imageFormData,
          config
        );
        const imageData = imageUploadResponse.data;

        if (imageData.location) {
          updatedFormData.ad[index] = {
            ...updatedFormData.ad[index],
            photo: `${import.meta.env.VITE_IMAGE_UPLOAD_URL}${
              imageData.location
            }`,
          };
          toast.success("Image uploaded successfully!");
        } else {
          toast.error("Error uploading image. Please try again.");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleAddAd = () => {
    const updatedFormData = { ...formData };
    updatedFormData.ad.push({ link_name: "", photo: null });
    setFormData(updatedFormData);
  };

  const handleRemoveAd = (index) => {
    if (formData.ad.length > 1) {
      const updatedFormData = { ...formData };
      updatedFormData.ad = updatedFormData.ad.filter((_, i) => i !== index);
      setFormData(updatedFormData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        const response = await api.patch(`/blog-Ad/Edit/${id}`, formData);
        toast.success("Blog ad updated successfully!");
        setTimeout(() => {
          navigate("/blog-Ad");
        }, 1000);
      } else {
        const response = await api.post("/blog-Ad", formData);
        toast.success("Blog ad created successfully!");
        setFormData({ page: "", ad: [{ link_name: "", photo: null }] }); // Reset form
      }
    } catch (error) {
      toast.error("Error during Ad creation or update.");
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <button
        className="absolute top-20 right-6 p-2 flex items-center text-black rounded-full hover:bg-transparent focus:outline-none duration-200"
        onClick={() => navigate("/blog-Ad")}
      >
        <span className="transition-transform transform hover:rotate-180 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      </button>

      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {id ? "Edit  Ad" : "Create  Ad"}
        </h2>

        <div>
          <label className="block text-gray-700 mt-2 font-medium mb-2">
            Page <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="page"
            value={formData.page}
            onChange={(e) => setFormData({ ...formData, page: e.target.value })}
            placeholder="Page Name"
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="shadow-lg p-2">
          {formData.ad.map((ad, index) => (
            <div key={index}>
              <div>
                <label className="block text-gray-700 font-medium mb-6">
                  AD Image<span className="text-red-500">*</span>
                </label>
                <div className="relative mb-6">
                  <input
                    type="file"
                    id={`file-upload-${index}`}
                    onChange={(e) => handleFileChange(e, index)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    required
                  />
                  <label
                    htmlFor={`file-upload-${index}`}
                    className="w-full p-3 border shadow-lg border-gray-300 rounded-lg cursor-pointer bg-gradient-to-r from-green-800 to-green-600 text-center text-white font-medium hover:opacity-80 transition-opacity duration-200"
                  >
                    Upload Ad img
                  </label>
                </div>
                <p>{ad.photo ? ad.photo.name : "No file selected"}</p>
                {ad.photo && !uploading && (
                  <div className="mt-2">
                    <img
                      src={ad.photo}
                      alt="Uploaded Banner"
                      className="max-w-2/4 h-auto"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mt-2 font-medium mb-2">
                  Link Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="link_name"
                  value={ad.link_name}
                  onChange={(e) => handleChange(e, index, "link_name")}
                  placeholder="Link Name"
                  className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {formData.ad.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveAd(index)}
                  className="text-red-500 hover:text-red-700 mb-2"
                >
                  Remove Ad
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleAddAd}
          className="bg-blue-500 text-white py-2 px-4 rounded-md m-4"
        >
          Add another Ad
        </button>

        <button
          type="submit"
          className="w-full bg-blue-600 cursor-pointer text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {id ? "Update Ad" : "Submit Ad"}
        </button>
      </form>
    </div>
  );
};

export default BlogAd;
