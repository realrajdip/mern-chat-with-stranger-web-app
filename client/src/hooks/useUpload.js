import axios from "axios";

export const useUpload = async ({ image, onUploadProgress }) => {
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "codeDate");
      formData.append("api_key", "964583262417825");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: onUploadProgress,
        withCredentails: false,
      };

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dncrhtqxj/image/upload",
        formData,
        config
      );

      const data = await res.data;
      if (!data) throw new Error("Error uploading image");

      return {
        public_id: data.public_id,
        url: data.sccure_url,
      };
    } catch (error) {
      console.log(error.message);
    }
  };

  const { public_id, url } = await upload();

  return { public_id, url };
};
