import Swal from "sweetalert2";
import "animate.css";

export async function createSwal(title: string, victory: boolean) {
  const url = victory
    ? "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
    : "https://i.pinimg.com/originals/fb/ed/b2/fbedb25b550829b8b4c4984b45992b39.gif";
  const result = await Swal.fire({
    title,
    padding: 10,
    background:
      "rgba(0,0,0,0.2) url(https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg)",
    backdrop: `
        rgba(0,0,0,0.8)
          url(${url})
          left top
          no-repeat
        `,
    confirmButtonText: "Sure!",
    showCancelButton: true,
    cancelButtonText: "No, thanks",
    showCloseButton: true,
    showClass: {
      popup: "animate__animated animate__bounceIn",
    },
    hideClass: {
      popup: "animate__animated animate__bounceOut",
    },
    customClass: {
      confirmButton: "button swal",
      cancelButton: "button swal",
      closeButton: "black swal",
    },
    buttonsStyling: false,
  });
  return result.isConfirmed;
}
