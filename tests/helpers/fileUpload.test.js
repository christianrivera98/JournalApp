import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "ma-cloud",
  api_key: "996462655158635",
  api_secret: "Rp-y1EDOz8BzhhbqX0_RER9CpXw",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    // console.log(url);

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");

    const cloudResp = await cloudinary.api.delete_resources(
      ["journal-app/" + imageId],
      {
        resource_type: "image",
      }
    );
  });

  test("desde de retornal null", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
