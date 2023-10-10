"use client";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export interface UploadResult {
  info: {
    public_id: string;
  };
  event: "success";
}

export default function Home() {
  // use state to change the image
  const [imageId, setimageId] = useState("m2hcbizofita5mjhbl8h");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result) => {
          let res = result as UploadResult;
          setimageId(res.info.public_id);
        }}
        uploadPreset="b26n2zkp"
      />
      {/* to view image */}
      <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
