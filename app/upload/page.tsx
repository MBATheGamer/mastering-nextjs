"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

type CloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          alt="A coffee bean image"
          width={640}
          height={480}
        />
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        uploadPreset={uploadPreset}
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;

          const info = result.info as CloudinaryResult;

          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
